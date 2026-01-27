import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { Link } from "react-router-dom";

export default function Courses() {
  const items = [
    { href: '/courses/cpo-level-3', title: 'Close Protection', subtitle: 'Tactical movement, threat analysis, and protective planning.' },
    { href: '/courses/diplomatic-protection', title: 'Diplomatic Protection Programme', subtitle: '7-day intensive programme focused on protecting diplomats and international officials.' },
    { href: '/courses/counter-terrorism', title: 'Counter-Terrorism Protection Programme', subtitle: '5-day intensive course with a strong firearms and protective response focus.' },
    { href: '/courses/tactical-driving', title: 'Tactical Driving Programme', subtitle: '3-day intensive course for defensive and protective driving.' },
    { href: '/courses/tactical-firearms', title: 'Tactical Firearms Programme', subtitle: '5-day professional firearms course focusing on safe, responsible weapons handling.' },
    { href: '/courses/surveillance-intelligence', title: 'Surveillance & Intelligence Programme', subtitle: 'Professional course focused on observation, intelligence awareness and reporting.' },
    { href: '/courses/protective-intelligence', title: 'Protective Intelligence & Advance Work Programme', subtitle: 'Advance work, reconnaissance and planning for protective operations.' },
    { href: '/courses/heat', title: 'Hostile Environment Awareness Training (HEAT)', subtitle: 'Non-armed awareness course for operating safely in unstable and sensitive environments.' },
    { href: '/courses/protective-medical', title: 'Protective Medical Support Programme', subtitle: 'FREC Level 3 aligned medical training for protection teams.' },
    { href: '/courses/protective-operations', title: 'Protective Operations Management', subtitle: 'Team Leader & Supervisor programme focused on leadership and operational management.' },
  ];

  return (
    <div>
      <SectionHeader title="Our Programmes" subtitle="Explore our core training programmes and accredited qualifications" />

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Link key={it.href} to={it.href} className="block">
            <Card className="p-6">
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-muted-foreground mt-2">{it.subtitle}</div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
