import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js';

//@desc auth user and get token
//@route POST/api/users/login
//@access public
const authUser = asyncHandler(async (req, res) => {
    res.send ('auth user');

});

//@desc register user
//@route POST/api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.send ('register user');

});

//@desc logout user and clear cookie
//@route POST/api/users/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {
    res.send ('logout user');

});

//@desc get user profile
//@route GET/api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send ('get user profile');

});

//@desc update user profile
//@route put/api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send ('update user profile');

});