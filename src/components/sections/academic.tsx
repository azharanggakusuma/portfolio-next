"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { GroupedAcademicCard } from "@/components/grouped-academic-card";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { GroupedActivity } from "@/types";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function AcademicSection() {
  const [showAll, setShowAll] = useState(false);
  const ACADEMIC_DELAY = BLUR_FADE_DELAY * 11;
  const INITIAL_ITEMS_TO_SHOW = 3; // Jumlah item yang muncul di awal (bisa diubah)

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

  // Logika untuk menentukan item mana yang ditampilkan
  const displayedActivities = showAll
    ? groupedAcademicActivities
    : groupedAcademicActivities.slice(0, INITIAL_ITEMS_TO_SHOW);

  return (
    <section id="academic-activities" className="pt-6">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={ACADEMIC_DELAY}>
          <h2 className="text-xl font-bold">Academic Activities</h2>
        </BlurFade>

        {displayedActivities.map((group, id) => (
          <BlurFade
            key={group.school + id}
            delay={ACADEMIC_DELAY + id * 0.05}
          >
            <GroupedAcademicCard
              school={group.school}
              logoUrl={group.logoUrl}
              href={group.href}
              items={group.items}
            />
          </BlurFade>
        ))}

        {/* Tombol Show More / Show Less */}
        {groupedAcademicActivities.length > INITIAL_ITEMS_TO_SHOW && (
          <BlurFade delay={ACADEMIC_DELAY + displayedActivities.length * 0.05}>
            <div className="flex justify-center mt-2">
              <Button
                variant="ghost"
                onClick={() => setShowAll(!showAll)}
                className="gap-2"
              >
                {showAll ? "Show Less" : "Show More"}
                {showAll ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}