import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken'


// @desc   Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))) {
      
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: '30d'
        })
        
        // Set JWT as HTTP-Only cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days
        })
        
        res.json({
            _id:user._id,
            name: user.name,
            email:user.email,
            isAdmin:user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password')
    }
    
})
// @desc   Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user')
})
// @desc    Logout user /clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({message: 'Logged out successfully'});
})
// @desc    Get user profile
// @route   Get /api/users/profile
// @access  private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
})
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
})

// @desc    Get users 
// @route   Get /api/users
// @access  private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users')
})
// @desc    Get user by id
// @route   Get /api/users/:id
// @access  private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id')
})
// @desc    delete users 
// @route   DELETE /api/users/:id
// @access  private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user')
})
// @desc    Update users 
// @route   PUT /api/users/:id
// @access  private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user')
})

export {
    authUser,
    registerUser, 
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
}