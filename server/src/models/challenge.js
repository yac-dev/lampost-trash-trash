import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  message: String,
  initiator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  topTen: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Work',
    },
  ],
  totalVotes: Number,
  totalViews: Number,
  totalComments: Number,
  createdAt: {
    type: Date,
  },
});

challengeSchema.set('toJSON', { virtuals: true });
challengeSchema.set('toObject', { virtuals: true });

challengeSchema.virtual('works', {
  ref: 'Work',
  foreignField: 'challenge',
  localField: '_id',
});

const Challenge = mongoose.model('Challenge', challengeSchema);
export default Challenge;
