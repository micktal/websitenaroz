import AppLink from "@/components/AppLink";
import LinkWrapper from "@/components/LinkWrapper";
import { useLocation } from "react-router-dom";

export default function SessionInfo() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const sessionTitle = params.get("sessionTitle");
  const startDate = params.get("startDate");
  const endDate = params.get("endDate");
  const location = params.get("location");
  const price = params.get("price");

  if (!sessionTitle) return null;

  return (
    <div className="rounded-md border border-border bg-card p-4 mb-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-muted-foreground">Selected session</div>
          <div className="font-semibold text-lg">{sessionTitle}</div>
          <div className="mt-1 text-sm text-muted-foreground">{startDate}{endDate ? ` — ${endDate}` : ''} • {location}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Price</div>
          <div className="font-semibold">{price ? `$${price}` : '—'}</div>
          <AppLink to={`/contact?course=${encodeURIComponent(sessionTitle)}&date=${encodeURIComponent(startDate || '')}`} className="mt-3 inline-block px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm">Book this session</AppLink>
        </div>
      </div>
    </div>
  );
}
