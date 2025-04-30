import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/adminlogin', (req, res) => {
  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });

    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email },
        "jwt_secret_key",
        { expiresIn: '1d' }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: false, // Set to true in production (HTTPS)
      });

      return res.json({ loginStatus: true });
    } else {
      return res.json({ loginStatus: false, Error: "Invalid email or password" });
    }
  });
});

export { router as adminRouter };
