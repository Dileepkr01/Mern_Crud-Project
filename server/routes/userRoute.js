import express from "express"
const route = express.Router();

import { create, deleteUser, getAllUsers, getUserById, update } from "../controller/userController.js"

// Create user 
route.post("/user", create)

// Get all users
route.get("/users", getAllUsers)

// Get single user
route.get("/user/:id", getUserById)

// Update user
route.put("/update/user/:id", update)

// Delete User
route.delete("/delete/user/:id", deleteUser)


export default route;








