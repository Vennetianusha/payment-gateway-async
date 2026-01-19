const express = require("express");
const paymentRoutes = require("./payments/payment.routes");

const app = express();

app.use(express.json()); // ✅ REQUIRED

app.use("/api/v1/payments", paymentRoutes); // ✅ router function

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;
