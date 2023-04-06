
const jwt = require("jsonwebtoken");
// Import necessary models and libraries
const Course = require('../Schema/Courses.schema');
const User = require('../Schema/StudentTeacherAdmin.Schema');
const Payment = require('../Schema/PaymentSchema');

const nodemailer = require("nodemailer");


exports.isAuthenticatedPayment = async (req, res, next) => {
  try {


    const token = req.header("Authorization");
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);


    req.user = decode;

    next();
  } catch (err) {

    res.status(400).send({
      message: "Authentication Failed",
    });



  }
};


exports.makePayment = async (req, res, next) => {
  try {

    const userId = req.params.id;

    // Retrieve the user document 
    const user = await User.findById(userId);

    // Retrieve the courses
    const cartCourses = user.CoursesInCart_id;

    // Add the IDs :  user's shopperCourses array
    user.shopperCourses.push(...cartCourses.map(course => course._id));

    // Increment the numberOfStudents 
    await Course.updateMany(
      { _id: { $in: cartCourses.map(course => course._id) } }
      , {
        $push: { courseStudents: userId }, $inc: { numberOfStudents: 1 }
      });

    // Create a new payment
    const userPopi = await User.findById(userId).populate('CoursesInCart_id', 'price');
    const cartCoursesPopi = userPopi.CoursesInCart_id;
    //   console.log(cartCoursesPopi)


    const totalAmount = cartCoursesPopi.reduce((acc, curr) => acc + curr.price, 0);
    const payment = new Payment({
      courses: cartCoursesPopi.map(course => ({
        courseId: course._id,
        price: course.price
      })),
      userId,
      amount: totalAmount
    });
    const savedPayment = await payment.save();
    const newPaymentId = savedPayment._id;

    // Empty the user's cart
    user.CoursesInCart_id = [];

    // Save the updated user 
    await user.save();

    // mail 
    // Send payment confirmation email
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "TempoTutor@hotmail.com",
        pass: "chaker@123",
      },
    });

    const mailOptions = {
      from: "TempoTutor@hotmail.com",
      to: user.email,
      subject: "Payment Confirmation",
      text: `Hello ${user.firstName} ${user.lastName},\n\nYour payment of ${totalAmount.toFixed(
        2
      )} $ has been successfully processed.\nYou can always have access to the invoice in your account 
        \nThank you for your purchase!\n\nSincerely,\nTempoTutor`,
    };

    transporter.sendMail(mailOptions)
      .then(() => {
        console.log("Payment confirmation email sent");
      })
      .catch((err) => {
        console.error("Error sending payment confirmation email: ", err);
      });



    // end mail 

    res.status(200).send({
      message: "Payment successful!",
      newPaymentId
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({
      message: "Payment error!"
    });
  }
};

exports.invoiceByid = async (req, res) => {
  try {
    const invoiceId = req.params.id;
    const invoice = await Payment.findById(invoiceId).populate("courses.courseId");

    // Get the total amount using the virtual property
    const totalAmount = invoice.totalAmount;

    // Send the response with the invoice and total amount
    res.status(200).send({ invoice, totalAmount });
  } catch (err) {
    res.status(400).send({
      message: "invoiceByid not found",
    });
  }
};


