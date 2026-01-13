import BlurFade from "@/components/magicui/blur-fade";
import { GroupedAcademicCard } from "@/components/grouped-academic-card";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { GroupedActivity } from "@/types";

export function AcademicSection() {
  const ACADEMIC_DELAY = BLUR_FADE_DELAY * 11;

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