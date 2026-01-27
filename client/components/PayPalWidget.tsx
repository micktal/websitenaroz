import React from "react";

export default function PayPalWidget({ initialAmount = 1200 }: { initialAmount?: number }) {
  const [amount, setAmount] = React.useState<number>(initialAmount);
  const [plan, setPlan] = React.useState<"full" | "x4">("full");
  const [loading, setLoading] = React.useState(false);

  const perInstallment = (amount / 4).toFixed(2);

  const handlePay = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, plan }),
      });
      const data = await res.json();
      if (data.approvalUrl) {
        // Open PayPal approval in new window (mock/sandbox)
        window.open(data.approvalUrl, "_blank");
      } else if (data.error) {
        alert(data.error);
      }
    } catch (e) {
      console.error(e);
      alert("Payment initiation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md rounded-lg border border-border p-6 bg-card">
      <h3 className="text-lg font-semibold">Pay with PayPal</h3>
      <p className="text-sm text-muted-foreground mt-2">Choose to pay in full or in 4 installments.</p>

      <label className="block mt-4 text-sm">Amount (USD)</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="mt-2 w-full rounded-md border border-border px-3 py-2 bg-background"
      />

      <div className="mt-4">
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="plan" checked={plan === "full"} onChange={() => setPlan("full")} />
          <span className="text-sm">Pay in full — ${amount.toFixed(2)}</span>
        </label>
        <label className="inline-flex items-center gap-2 ml-4">
          <input type="radio" name="plan" checked={plan === "x4"} onChange={() => setPlan("x4")} />
          <span className="text-sm">4x installments — ${perInstallment} /installment</span>
        </label>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button onClick={handlePay} disabled={loading} className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">
          {loading ? "Processing…" : "Proceed to PayPal"}
        </button>
        <button onClick={() => { setAmount(initialAmount); setPlan("full"); }} className="inline-flex items-center px-3 py-2 rounded-md border border-border">Reset</button>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">Note: This is a demo integration. Server will need real PayPal SDK calls and credentials to create/capture orders in production.</p>
    </div>
  );
}
