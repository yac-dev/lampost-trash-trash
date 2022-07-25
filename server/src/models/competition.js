import mongoose from 'mongoose';

const competitionSchema = new mongoose.Schema({
  works: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Work',
    },
  ],
  type: {
    type: String,
  },
  state: {
    type: String,
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
