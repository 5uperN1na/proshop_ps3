import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js';
// import jwt from 'jsonwebtoken';
import generateToken from "../utils/generateToken.js";

//@desc auth user and get token
//@route POST/api/users/login
//@access public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {

        generateToken(res, user._id);

        // const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
        //     expiresIn: '30d'
        // });

        // //set jwt as an http only cookie
        // res.cookie('jwt', token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV !== 'development',
        //     sameSite: 'strict',
        //     maxAge: 30 * 24 * 60 * 60 * 1000,

        // });


        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password.');
    }
});

//@desc register user
//@route POST/api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
    //res.send('register user');
    const { name, email, password } = req.body;
    const userExists = await User.findOne({email});
    
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        generateToken(res, user._id);
        
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }else {
        res.status(400);
        throw new Error ('Invalid user data.')
    }

});

//@desc logout user and clear cookie
//@route POST/api/users/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {
    //res.send('logout user');
    res.cookie('jwt','', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({message: 'Logout successful.'})

});

//@desc get user profile
//@route GET/api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
    //res.send('get user profile');
    const user = await User.findById(req.user._id);

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(400);
        throw new Error('User not found.')
    }

});

//@desc update user profile
//@route put/api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
    //res.send('update user profile');
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updateUser = await user.save();

        res.status(200).json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
        });
    }else {
        res.status(400);
        throw new Error('User not found.');
    }


});

//@desc get users
//@route GET/api/users/
//@access private/admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users');

});

//@desc get user by id
//@route GET/api/users/:id
//@access private/admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id');

})

//@desc update user by id
//@route PUT/api/users/:id
//@access private/admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user by id');

});

//@desc delete users
//@route delete/api/users/
//@access private/admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user');

});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    updateUser,
    getUserById
} 