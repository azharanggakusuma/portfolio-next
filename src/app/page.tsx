"use client";

import { useState } from "react";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { EducationCard } from "@/components/education-card";
import { AcademicCard } from "@/components/academic-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { UrlObject } from "url";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [filter, setFilter] = useState<"all" | "web" | "app" | "ui/ux">("all");

  const filteredProjects = DATA.projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 flex justify-between flex-col-reverse md:flex-row">
            <div className="justify-center flex-col flex flex-1 space-y-1.5">
              {/* <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className=""
                yOffset={8}
                text={}
              /> */}
              <p className="mx-auto md:mx-0 text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                Hi, I&apos;m
                <span className="inline-block">👋</span>
                <span className="block">{DATA.name}</span>
              </p>
              <Markdown className="text-center md:text-start max-w-[600px] text-pretty font-sans md:text-lg">
                {DATA.description}
              </Markdown>
            </div>
            <Avatar className="size-36 mx-auto">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>
      <section id="about" className="pt-6">
        <h2 className="text-xl font-bold">About</h2>
        {/* <BlurFade delay={BLUR_FADE_DELAY}> */}
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
        {/* </BlurFade> */}
      </section>
      <section id="skills" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY + id * 0.05}>
                <Badge key={skill.name} className="flex gap-2 px-2 py-1 text-[10px]">
                  <skill.icon className="h-4 w-4" />
                  {skill.name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="experience" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                location={work.location}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <EducationCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="academic-experience" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Academic Experience</h2>
          </BlurFade>
          
          {DATA.academicExperience.map((item, id) => (
            <BlurFade
              key={item.school + item.degree}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <AcademicCard
                logoUrl={item.logoUrl}
                altText={item.school}
                title={item.school}
                subtitle={item.degree}
                href={item.href}
                // Jika start == end, tampilkan start saja. Jika beda, tampilkan rentang.
                period={
                  item.start === item.end 
                    ? item.start 
                    : `${item.start} - ${item.end}`
                }
                // ----------------------------------------
                location={item.location}
                description={item.description}
                certificateUrl={item.certificateUrl}
                gallery={item.gallery}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects" className="pt-6">
        <div className="space-y-8 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground text-sm/relaxed xl:text-base/relaxed">
                  This showcase presents projects in web development, application development, and UI/UX, focusing on clean interfaces, functional user experiences, and modern design.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* TABS*/}
          <div className="flex justify-center">
            <div className="flex gap-1 bg-muted/40 p-1 rounded-full border">
              {[
                { value: "all", label: "All" },
                { value: "web", label: "Web" },
                { value: "app", label: "App" },
                { value: "ui/ux", label: "UI/UX" },
              ].map((tab) => {
                const active = filter === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() =>
                      setFilter(tab.value as "all" | "web" | "app" | "ui/ux")
                    }
                    className={
                      "px-3 py-1 text-xs sm:text-sm rounded-full transition-all duration-200 " +
                      (active
                        ? "bg-foreground text-background shadow-sm scale-[1.03]"
                        : "text-muted-foreground hover:bg-muted scale-[0.98]")
                    }
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ⭐ PROJECT LIST / EMPTY STATE */}
          <div className="min-h-[200px] flex flex-col items-center">
            {filteredProjects.length === 0 ? (
              <div className="mt-12 flex flex-col items-center text-center text-muted-foreground">
                <span className="text-3xl mb-3">📄</span>
                <p className="text-sm font-medium text-foreground">
                  No projects available
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  This category doesn’t have any projects yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
                {filteredProjects.map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                      openSource={project.openSource}
                      category={project.category}
                    />
                  </BlurFade>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="pt-6">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-7">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;m always open to new opportunities and collaborations.
                  Feel free to reach out to me if you have any questions or just
                  want to chat.
                </p>
              </div>
              <div className="flex justify-center">
                <BlurFade delay={0.1} inView>
                  <div className="flex gap-5 flex-wrap">
                    {Object.entries(DATA.contact.social)
                      .filter(([_, social]) => social.contact)
                      .map(([name, social], index) => (
                        <>
                          <Tooltip key={index}>
                            <TooltipTrigger asChild>
                              <Link href={social.url as unknown as UrlObject}>
                                <social.icon className="size-7" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </>
                      ))}
                  </div>
                </BlurFade>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}