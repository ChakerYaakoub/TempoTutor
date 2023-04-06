
const jwt = require("jsonwebtoken");

const Course = require('../Schema/Courses.schema');
const User = require('../Schema/StudentTeacherAdmin.Schema');
const Payment = require('../Schema/PaymentSchema');



exports.Allinvoice = async (req, res) => {
  try {
    const userId = req.params.id;
    const invoices = await Payment.find({ userId }).populate("courses.courseId");

    // Create an array of objects with invoice and total amount
    const invoicesWithTotalAmount = invoices.map(invoice => {
      const totalAmount = invoice.totalAmount;
      return { invoice, totalAmount };
    });

    // Send the response with the invoices and total amounts
    res.status(200).send(invoicesWithTotalAmount);
  } catch (err) {
    res.status(400).send({
      message: "invoices not found",
    });
  }
};



exports.getUserCourses = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).populate("shopperCourses");
    // console.log(user.shopperCourses)

    res.json(user.shopperCourses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}


exports.getUserGraduatedCourses = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).populate("certification.courseId");
    // console.log(user.certification)

    res.json(user.certification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}


exports.getUserCourNotDone = async (req, res) => {
  const userId = req.params.id;
  const courseId = req.query.courseId; // get the courseId from query params

  try {
    const user = await User.findById(userId)
      .populate("shopperCourses")
      .populate({
        path: "certification",
        match: { courseId: { $ne: courseId } }, // filter out certification with courseId
        select: "courseId",
      });

    const notDoneCourses = user.shopperCourses.filter(
      (course) =>
        !user.certification.some(
          (cert) => cert.courseId.toString() === course._id.toString()
        )
    );
    // console.log(notDoneCourses)

    res.json(notDoneCourses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};



exports.AllinvoiceDach = async (req, res) => {
  try {
    // const userId = req.params.id;
    const invoices = await Payment.find().populate("courses.courseId");

    // Create an array of objects with invoice and total amount
    const invoicesWithTotalAmount = invoices.map(invoice => {
      const totalAmount = invoice.totalAmount;
      return { invoice, totalAmount };
    });

    // Send the response with the invoices and total amounts
    res.status(200).send(invoicesWithTotalAmount);
  } catch (err) {
    res.status(400).send({
      message: "invoices not found",
    });
  }
};

