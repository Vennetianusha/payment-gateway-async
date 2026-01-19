const db = require("../db");

async function processPayment(paymentId) {
  console.log("⏳ Processing payment:", paymentId);

  // simulate bank delay
  await new Promise((res) => setTimeout(res, 5000));

  const status = Math.random() > 0.2 ? "success" : "failed";

  await db.query(
    "UPDATE payments SET status=$1 WHERE id=$2",
    [status, paymentId]
  );

  console.log(`✅ Payment ${paymentId} ${status}`);
}

module.exports = { processPayment };
