import mongoose from 'mongoose';

const workSchema = new mongoose.Schema({
  challenge: {
    type: mongoose.Schema.ObjectId,
    ref: 'Challenge',
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  // workのurlね。
  work: String,
  type: {
    type: String,
  },
  totalVotes: Number,
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
