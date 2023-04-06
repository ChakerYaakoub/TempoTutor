




const VisitorCount = require('../Schema/VisitorCount');

const AddIpVisitor = (req) => {
  // Fallback to retrieve client IP address if req.ip is undefined
  const visitorIp = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  VisitorCount.findOne({ ipAddress: visitorIp }, (error, visitor) => {
    if (error) {
      console.log({ error: error.message });
    }
    if (!visitor) {
      const newVisitor = new VisitorCount({ ipAddress: visitorIp });
      newVisitor.save((error) => {
        if (error) {
          console.log({ error: error.message });
        }
      });
    } else {
      console.log('Welcome back, visitor!');
    }
  });
};

module.exports = AddIpVisitor; 

// const VisitorCount = require('../schemaModels/VisitorCount');




// const AddIpVisitor = (req) => {
//     const visitorIp = req.ip;
//     VisitorCount.findOne({ ipAddress: visitorIp }, (error, visitor) => {
//       if (error) {
//         console.log({ error: error.message });
//       }
//       if (!visitor) {
//         const newVisitor = new VisitorCount({ ipAddress: visitorIp });
//         newVisitor.save((error) => {
//           if (error) {
//             console.log({ error: error.message });
//           }
         
//         });
//       } else {
//        console.log('Welcome back, visitor!');
//       }
//     });
//   };

//   module.exports = AddIpVisitor;
  