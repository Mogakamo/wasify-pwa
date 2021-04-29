import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'User';

const UserSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        lowercase: true,
        require: [true, "cant be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    email: {
        type: Stru
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, 'users');