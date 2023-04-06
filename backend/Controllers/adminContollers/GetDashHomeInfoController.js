
const Course = require('../../Schema/Courses.schema');
const VisitorCount = require('../../Schema/VisitorCount');
const User = require('../../Schema/StudentTeacherAdmin.Schema');
const Payment = require('../../Schema/PaymentSchema');

const AddIpVisitor=require('../AddIpVisitor');


const GetDashHomeInfoController = async (req, res) => {
    try {
       AddIpVisitor(req);

      const CourseCount = await Course.countDocuments();
      const useresCount = await User.countDocuments({ isAdmin: false });
      const teachersCount = await User.countDocuments({ isTeacher: true });

      const payments = await Payment.find();
      const totalRevenue = payments.reduce((acc, payment) => acc + payment.totalAmount, 0);
  
      // const useresCount = 0;

      const visitorCount = await VisitorCount.countDocuments();

      const dataDashHome = {
        visiteur: visitorCount,
        StudentsCount: useresCount,
        TeachersCount: teachersCount,
        CoursCount:CourseCount,
        TotalRevenue:totalRevenue,
    
      };
      return res.status(200).json({ data: dataDashHome });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = GetDashHomeInfoController;
  