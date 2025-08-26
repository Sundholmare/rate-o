import mongoose from "mongoose";

const RatingItemSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    attributes: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);

// ✅ Export the model
export default mongoose.model("RatingItem", RatingItemSchema);
