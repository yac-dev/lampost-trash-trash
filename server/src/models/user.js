import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email.'],
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
  totalVotes: Number,
  totalFans: Number,
  createdAt: {
    type: Date,
  },
});

userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

userSchema.methods.isPasswordCorrect = async (enteredPassword, actualPassword) => {
  return await bcrypt.compare(enteredPassword, actualPassword);
};

userSchema.virtual('works', {
  ref: 'Work',
  foreignField: 'creator',
  localField: '_id',
});

userSchema.virtual('competitions', {
  ref: 'Competition',
  foreignField: 'creators',
  localField: '_id',
});

const User = mongoose.model('User', userSchema);
export default User;
