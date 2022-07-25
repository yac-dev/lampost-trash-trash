import mongoose from 'mongoose';

const workSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  work: String,
  type: {
    type: String,
  },
  state: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

workSchema.set('toJSON', { virtuals: true });
workSchema.set('toObject', { virtuals: true });

// userSchema.virtual('works', {
//   ref: 'Vote',
//   foreignField: 'voter',
//   localField: '_id',
// });

const Work = mongoose.model('Work', workSchema);
export default User;
