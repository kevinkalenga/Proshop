import express from "express";
const router = express.Router();
import { authUser,
    registerUser, 
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser } from "../controllers/userController.js";



// router.get('/', getProducts);
// router.get('/:id', getProductById);
router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser)


export default router;