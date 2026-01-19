const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/", async (req, res) => {
  try {
    const { order_id, amount, currency, method } = req.body;

    await pool.query(
      "INSERT INTO payments (order_id, amount, currency, method, status) VALUES ($1,$2,$3,$4,$5)",
      [order_id, amount, currency, method, "initiated"]
    );

    res.json({ status: "payment initiated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: {
        code: "INTERNAL_SERVER_ERROR",
        description: "Something went wrong"
      }
    });
  }
});

module.exports = router; // ✅ THIS WAS MISSING / WRONG
