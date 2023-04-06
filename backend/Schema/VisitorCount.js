const mongoose = require('mongoose');


const visitorCountSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
    unique: true
  },
 Datevisitor : {
    type: Date,
    default: Date.now,
  },
},
{ timestamps: true });

const VisitorCount = mongoose.model('VisitorCount', visitorCountSchema);

module.exports = VisitorCount;


