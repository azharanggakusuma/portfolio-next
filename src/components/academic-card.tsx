"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import React from "react";
import Markdown from "react-markdown";
import { GalleryModal } from "./gallery-modal";
import { CertificateModal } from "./certificate-modal";
import { GalleryItem } from "@/data/resume";

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
  gallery?: readonly GalleryItem[];
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
  gallery,
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
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
            {title}
            {badges && (
              <span className="inline-flex ml-2 gap-x-1">
                {badges.map((badge, index) => (
                  <Badge variant="secondary" className="align-middle text-xs" key={index}>{badge}</Badge>
                ))}
              </span>
            )}
          </h3>
          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">{period}</div>
        </div>
        
        {subtitle && <div className="font-sans text-xs mt-1 font-medium">{subtitle}</div>}
        {location && <div className="font-sans text-xs mt-1 text-muted-foreground">{location}</div>}
        
        <div className="mt-2 text-xs sm:text-sm">
          {description && (
            <Markdown className="prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
              {description}
            </Markdown>
          )}

          <div className="flex flex-wrap gap-2 mt-1">
            
            {/* 1. TOMBOL CERTIFICATE (Pakai Component Baru) */}
            {certificateUrl && (
              <CertificateModal 
                href={certificateUrl}
                alt={`${title} Certificate`}
                trigger={
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 gap-1.5 text-[10px] h-7 font-medium"
                  >
                    <FileText className="h-3 w-3" />
                    Certificate
                  </Button>
                }
              />
            )}

            {/* 2. TOMBOL GALERI (Tetap pakai GalleryModal) */}
            {gallery && gallery.length > 0 && (
              <GalleryModal title={title} items={gallery} />
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};