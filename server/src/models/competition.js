import mongoose from 'mongoose';

const competitionSchema = new mongoose.Schema({
  title: String,
  works: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Work',
    },
  ],
  creators: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  ],
  type: {
    type: String,
    // video or photo
  },
  expiresAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
  },
});

const Competition = mongoose.model('Competition', competitionSchema);
export default Competition;
