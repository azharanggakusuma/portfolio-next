import BlurFade from "@/components/magicui/blur-fade";
import { GroupedAcademicCard } from "@/components/grouped-academic-card";
import { DATA } from "@/data/resume";

// Definisi Type (sebaiknya dipindah ke file types.ts global, tapi di sini juga oke)
type AcademicActivityItem = (typeof DATA.academicActivities)[number];
interface GroupedActivity {
  school: string;
  logoUrl: string;
  href: string;
  items: AcademicActivityItem[];
}

const BLUR_FADE_DELAY = 0.04;

export function AcademicSection() {
  const ACADEMIC_DELAY = BLUR_FADE_DELAY * 11;

  // Logic Grouping
  const groupedAcademicActivities = DATA.academicActivities.reduce(
    (acc: GroupedActivity[], item) => {
      const existingGroup = acc.find((group) => group.school === item.school);
      if (existingGroup) {
        existingGroup.items.push(item);
      } else {
        acc.push({
          school: item.school,
          logoUrl: item.logoUrl,
          href: item.href,
          items: [item],
        });
      }
      return acc;
    },
    []
  );

  return (
    <section id="academic-activities" className="pt-6">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={ACADEMIC_DELAY}>
          <h2 className="text-xl font-bold">Academic Activities</h2>
        </BlurFade>

        {groupedAcademicActivities.map((group, id) => (
          <BlurFade key={group.school + id} delay={ACADEMIC_DELAY + id * 0.05}>
            <GroupedAcademicCard
              school={group.school}
              logoUrl={group.logoUrl}
              href={group.href}
              items={group.items}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}