import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Google Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

// Google Callback
router.get(
  "/google/callback",

  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),

  async (req, res) => {
    const token = jwt.sign(
      {
        id: req.user._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      },
    );

    res.redirect(`${process.env.CLIENT_URL}/oauth-success?token=${token}`);
  },
);

export default router;
