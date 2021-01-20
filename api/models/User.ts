import { model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('User', userSchema);
