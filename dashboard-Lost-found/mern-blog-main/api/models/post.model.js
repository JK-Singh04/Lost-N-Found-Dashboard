import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        'https://st2.depositphotos.com/2229552/8379/i/950/depositphotos_83794748-stock-photo-magnifying-glass-on-missing-puzzle.jpg',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    location: {
      type: String,
      default: 'Unknown',
    },
    itemCategory: {
      type: String,
      enum: ['Clothing/Accessories', 'College Supplies', 'Personal Items', 'Gadgets/Electronics', 'Miscellaneous'],
      default: 'Miscellaneous',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
