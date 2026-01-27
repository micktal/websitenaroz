import { RequestHandler } from "express";

export const handleCreateOrder: RequestHandler = (req, res) => {
  // This is a mock implementation. Replace with real PayPal SDK integration.
  const { amount, plan } = req.body as { amount: number; plan: string };

  if (!amount) {
    return res.status(400).json({ error: "Missing amount" });
  }

  const orderId = `ORDER_${Date.now()}`;
  const approvalUrl = `https://www.sandbox.paypal.com/checkoutnow?token=${orderId}`;

  // Return a mock order id and an approval URL the client can redirect to.
  return res.json({ id: orderId, approvalUrl, amount, plan });
};

export const handleCaptureOrder: RequestHandler = (req, res) => {
  // Mock capture: in production, call PayPal API to capture payment for orderId
  const { orderId } = req.body as { orderId: string };
  if (!orderId) return res.status(400).json({ error: "Missing orderId" });

  return res.json({ status: "COMPLETED", orderId });
};
