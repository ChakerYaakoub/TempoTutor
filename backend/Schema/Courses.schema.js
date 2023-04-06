const mongoose = require("mongoose");


// function getPrice(num){
//     return (num/100).toFixed(2);
// }

// function setPrice(num){
//     return num*100;
// }

function getPrice(num){
    // return num / 100;
    return num ;
}

function setPrice(num){
    // return num * 100;
    return num ;
}

//ReviewCourseSchema
const ReviewCourseSchema = new mongoose.Schema(
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
        ReviewCourseDate : {
          type: Date,
          default: Date.now,
        },
        replyReviewCours: [{
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

//sectionSchema
const SectionSchema = new mongoose.Schema(
    {
        sectionTitle: { type: String },
        sectionNb: { type: Number},
        descriptionSectionBefor: { type: String },
        descriptionSectionAfter: { type: String },
        sectionVideo: { type: String },
        sectionImage: { type: String },
        sectionYoutube: { type: String },
        sectionPdf: { type: String },
        sectionAudio: { type: String },
        sectionNote: { type: String },
        comment: [{
            userId: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User",
            },
            commentText: { type: String },

            reply: [{
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
            commentDate : {
              type: Date,
              default: Date.now,
            },

        }],
        studentDone: [{
      
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User",
       

        }] ,

        SectionDate : {
          type: Date,
          default: Date.now,
        }, 

    },
    { timestamps: true }
);



//CourseSchema

const CourseSchema = new mongoose.Schema({
    courseName: String,

    mainCover: {
        type: String,
        // required: true,
    },

    secondCover: {
        type: String,
        // required: true,
    },

    language: {
        type: String,
        
      },

    courseSubject: {
        type: String,
        enum: [
            "Guitar",
            "Piano",
            "Vocals",
            "Ukulele",
            "Bass",
            "Violin",
            "Cello",
            "Viola",
            "Oud",
            "Tabla",
            "Darbuka",
            "Drums",
            "Trumpet",
            "Saxophone",
            "Harmonica",
            "Xylophone",
            "Clarinet",
            "Triangle",
            "Flute",
            "Congas",
        ],
    },

    courseInstructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
    },

    instructorName:{
        type: String,
        // required: true,

    } ,

    courseStudents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    numberOfStudents: {
        type: Number,
        default: 0,
    },

    courseIntroVideos: { type: String },

    description: { type: String },

    briefDescription: { type: String },

    duration: { type: String },

    endText: { type: String },

    courseFolderName:{ type: String },
    courseLevels:{ type: String },



    sectionNb: { type: Number, default: 0 },


    rateCourse: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
        set: function (value) {
            return parseFloat(value.toFixed(1));
        },
    },
    countRateCourse: {
        type: Number,
        default: 0,
    },
    reviewsCourse: [ReviewCourseSchema],

    sections: [SectionSchema],

    price  : {type: Number, get: getPrice, set: setPrice },
    
    isPublish :  { type: Boolean, default: false, },


    graduated: [{
     
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
        

    }],

    CourseDate : {
      type: Date,
      default: Date.now,
    },

},
    { timestamps: true });



module.exports = mongoose.model("Course", CourseSchema);
