import PayPalWidget from "@/components/PayPalWidget";

export default function Pay() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold">Pay / Demo Checkout</h2>
      <p className="mt-2 text-muted-foreground">Demo PayPal checkout — choose full payment or 4x installments.</p>

      <div className="mt-6">
        <PayPalWidget initialAmount={1200} />
      </div>
    </div>
  );
}
