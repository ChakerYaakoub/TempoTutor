const mongoose = require("mongoose");

//reviewTeacherSchema

const reviewTeacherSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    firstName: String,
    lastName: String,
    titleReview: String,
    review: String,
    rate: {
      type: Number,
      min: 0,
      max: 5,
    },
    reviewTeacherDate : {
      type: Date,
      default: Date.now,
    },
    replyReviewTeacher: [{
      userId: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "User",
      },
      replyText: { type: String },
      replyDate : {
        type: Date,
        default: Date.now,
      },

  }] ,
  },
  { timestamps: true }
);

//UserSchema
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },

  //Steps teachers  
  country: {
    type: String,
    default: null,
  },
  nationality: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  profilePicture: {
    type: String,
    default: null,
  },
  identification: {
    type: String,
    default: null,
  },
  instruments: {
    type: [String],
    default: [],
  },
  languages: {
    type: [String],
    default: [],
  },
  cv: {
    type: String,
    default: null,
  },
  experience: {
    type: String,
    default: null,
  },
  descriptionEXP: {
    type: String,
    default: null,
  },
  certificate: {
    type: String,
    default: null,
  },
  about: {
    type: String,
    default: null,
  },


  IsCompleteSteps: {
    type: Boolean,

    default: false,
  },

  IsActivated: {
    type: Boolean,

    default: false,
  },

  // end new Steps 

favCourses_id: [ 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],

  CoursesInCart_id: [ 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],

  shopperCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],


  certification: [{

    courseId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",

    } ,
    userfirstName:{ type: String },
    userlastName:{ type: String },
    courseName:{ type: String },
    courseduration:{ type: String },
    certificationDate :  {
      type: Date,
      default: Date.now,
    },

    
  
    CAId:{ type: String },
 



  }],

  userInstructors: [ // 5aliha 7aleyn 
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],

  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  isTeacher: {
    type: Boolean,
    required: true,
    default: false,
  },

  teachingReview: [reviewTeacherSchema],
  countRate: {
    type: Number,
    default: 0,
  },
  teacherRate: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
    set: function (value) {
      return parseFloat(value.toFixed(1));
    },
  },

  createdDate : {
    type: Date,
    default: Date.now,
  },

},
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);