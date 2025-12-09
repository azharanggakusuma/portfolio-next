"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface AcademicCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  certificateUrl?: string;
  location?: string;
}

export const AcademicCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  certificateUrl,
  location,
}: AcademicCardProps) => {
  return (
    <div className="flex bg-transparent">
      <div className="flex-none">
        <Avatar className="size-12 m-auto bg-muted-foreground/10">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 flex-col group">
        {/* Baris 1: Judul & Periode */}
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
            {title}
            {badges && (
              <span className="inline-flex ml-2 gap-x-1">
                {badges.map((badge, index) => (
                  <Badge
                    variant="secondary"
                    className="align-middle text-xs"
                    key={index}
                  >
                    {badge}
                  </Badge>
                ))}
              </span>
            )}
          </h3>
          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
            {period}
          </div>
        </div>

        {/* Baris 2: Subtitle (Gelar/Peran) */}
        {subtitle && <div className="font-sans text-xs mt-1 font-medium">{subtitle}</div>}
        
        {/* Baris 3: Lokasi (Di bawah Subtitle) */}
        {location && (
          <div className="font-sans text-xs mt-1 text-muted-foreground">
            {location}
          </div>
        )}
        
        {/* Deskripsi */}
        {description && (
          <div className="mt-2 text-xs sm:text-sm">
            <Markdown className="prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
              {description}
            </Markdown>

            {/* Tombol Certificate */}
            {certificateUrl && (
              <div className="mt-3">
                <Link
                  href={certificateUrl}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors border border-border/50 shadow-sm"
                >
                  <FileText className="h-3 w-3" />
                  Certificate
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};