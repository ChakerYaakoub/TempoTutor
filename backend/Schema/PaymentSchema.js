const mongoose = require("mongoose");

function getPrice(num) {
  return num;
}

function setPrice(num) {
  return num;
}

const PaymentSchema = new mongoose.Schema(
  {
    courses: [
      {
        courseId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        price: {
          type: Number,
          get: getPrice,
          set: setPrice,
        },
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      get: getPrice,
      set: setPrice,
    },
    VAT: {
      type: Number,
      default: function () {
        return this.amount * 0.2;
      },
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal", "stripe"],
      default: "credit_card",
    },
  },
  { timestamps: true }
);

PaymentSchema.virtual("totalAmount").get(function () {
  return this.amount + this.VAT;
});

module.exports = mongoose.model("Payment", PaymentSchema);
