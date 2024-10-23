import mongoose from 'mongoose';
import argon2 from 'argon2';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true, 
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await argon2.hash(this.password);
  next();
});
userSchema.methods.comparePassword = async function(inputPassword) {
  return await argon2.verify(this.password, inputPassword);
};
// Create a model for the user
const User = mongoose.model('User', userSchema);

export default User;
