import { model, Schema } from 'mongoose';

const studentSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dni: { type: String },
  birthDate: { type: Date },
  description: { type: String },
  phones: [
    {
      name: { type: String },
      value: { type: String },
    },
  ],
  isDeleted: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Student', studentSchema);
