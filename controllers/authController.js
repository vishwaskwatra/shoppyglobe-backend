import argon2 from 'argon2';
import User from '../models/userModel.js';
import { generateToken } from '../utils/jwtUtils.js';

// Register User
export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();

    const token = generateToken(newUser._id);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { username, password } = req.body; 

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'User not found' });

    console.log('Stored hashed password:', user.password); 
    console.log('Provided password:', password); 

    
    const isMatch = await argon2.verify(user.password, password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};