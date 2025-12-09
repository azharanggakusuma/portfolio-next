"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MapPin, ImageIcon, X } from "lucide-react";
import { GalleryItem } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface GalleryModalProps {
  title: string;
  items: readonly GalleryItem[];
}

export function GalleryModal({ title, items }: GalleryModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="mt-3 gap-1.5 text-[10px] h-7 font-medium"
        >
          <ImageIcon className="h-3 w-3" />
          View Gallery ({items.length})
        </Button>
      </DialogTrigger>
      
      {/* PERBAIKAN:
        1. bg-black: Latar belakang solid hitam (bukan transparan/blur lagi).
        2. sm:max-w-4xl: Modal lebih lebar agar foto lebih puas dilihat.
        3. border-none: Menghapus garis tepi agar lebih sinematik.
      */}
      <DialogContent className="sm:max-w-4xl w-full bg-black p-0 overflow-hidden border-none text-white [&>button]:hidden shadow-2xl">
        
        {/* Header (Judul & Close Button) */}
        <DialogHeader className="absolute top-0 left-0 w-full z-50 p-4 bg-gradient-to-b from-black/90 to-transparent flex flex-row justify-between items-start">
          <DialogTitle className="text-white text-lg font-semibold text-shadow-sm pt-1 pl-1">
            {title}
          </DialogTitle>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full h-9 w-9 -mr-2 -mt-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        
        <Carousel className="w-full relative">
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                {/* Container Gambar: Tinggi fix 65vh agar konsisten */}
                <div className="relative w-full h-[65vh] bg-black flex flex-col justify-center items-center">
                  
                  {/* Gambar */}
                  <div className="relative w-full h-full">
                   <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      className="object-contain" // Foto tidak akan terpotong (fit)
                      priority={index === 0}
                    />
                  </div>

                  {/* Caption Overlay (Bawah) */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-12 text-left z-40">
                    <p className="text-base font-medium text-white leading-tight">{item.caption}</p>
                    {item.location && (
                      <p className="text-xs text-gray-300 flex items-center gap-1 mt-1.5 font-light">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </p>
                    )}
                    <p className="text-[10px] text-gray-500 text-right mt-2 font-mono">
                      {index + 1} / {items.length}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Tombol Navigasi (Hanya muncul jika > 1 gambar) */}
          {items.length > 1 && (
            <>
              <CarouselPrevious className="left-4 border-white/20 bg-black/30 hover:bg-black/60 text-white z-50 h-10 w-10" />
              <CarouselNext className="right-4 border-white/20 bg-black/30 hover:bg-black/60 text-white z-50 h-10 w-10" />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}