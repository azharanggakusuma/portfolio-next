import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <div className="gap-2 flex justify-between flex-col-reverse md:flex-row">
          <div className="justify-center flex-col flex flex-1 space-y-1.5">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <p className="mx-auto md:mx-0 text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                Hi, I&apos;m {DATA.name} <span className="inline-block">👋</span>
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY + 0.05}>
              <Markdown className="text-center md:text-start max-w-[600px] text-pretty font-sans md:text-lg">
                {DATA.description}
              </Markdown>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY + 0.1}>
              <div className="flex gap-2 justify-center md:justify-start mt-4">
                <Link
                  href="#contact"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full sm:w-auto flex items-center gap-2"
                  )}
                >
                  <Mail className="size-4" />
                  Contact Me
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full sm:w-auto flex items-center gap-2"
                  )}
                >
                  <FileText className="size-4" />
                  Download CV
                </Link>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-36 mx-auto">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}