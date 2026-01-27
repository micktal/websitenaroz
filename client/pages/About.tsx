import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2 className="text-3xl font-bold">About Naroz Shield Institute</h2>
      <p className="mt-4 text-muted-foreground max-w-3xl">Provide the content and we'll place it here. For now: Naroz Shield Institute combines modern instructional design with operational experience to prepare personnel for high-stakes international environments.</p>
      <div className="mt-6">
        <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">Contact us</Link>
      </div>
    </div>
  );
}
