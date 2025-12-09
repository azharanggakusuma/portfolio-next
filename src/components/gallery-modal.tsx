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
import { MapPin, ImageIcon, X, Loader2 } from "lucide-react"; // Tambah Loader2
import { GalleryItem } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; // Pastikan ini diimport untuk menggabungkan class

interface GalleryModalProps {
  title: string;
  items: readonly GalleryItem[];
}

export function GalleryModal({ title, items }: GalleryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // State untuk melacak status loading setiap gambar secara individu
  // Inisialisasi array dengan 'true' (semua sedang loading di awal)
  const [loadingStates, setLoadingStates] = useState<boolean[]>([]);

  // Reset loading state setiap kali modal dibuka atau items berubah
  useEffect(() => {
    if (isOpen && items.length > 0) {
      setLoadingStates(new Array(items.length).fill(true));
    }
  }, [isOpen, items]);

  // Handler ketika gambar selesai dimuat
  const handleImageLoad = (index: number) => {
    setLoadingStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false; // Set gambar di indeks ini menjadi 'tidak loading'
      return newStates;
    });
  };

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
      
      <DialogContent className="sm:max-w-5xl w-full bg-black/90 backdrop-blur-md border border-white/10 p-0 overflow-hidden text-white [&>button]:hidden shadow-2xl my-auto">
        
        {/* Header */}
        <DialogHeader className="absolute top-0 left-0 w-full z-50 p-3 sm:p-4 bg-gradient-to-b from-black/80 to-transparent flex flex-row justify-between items-start pointer-events-none">
          <DialogTitle className="text-white text-base sm:text-lg font-semibold text-shadow-sm pt-1 pl-1 line-clamp-1 pointer-events-auto">
            {title}
          </DialogTitle>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full h-8 w-8 sm:h-9 sm:w-9 -mr-1 sm:-mr-2 -mt-1 sm:-mt-2 transition-colors pointer-events-auto"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        
        <Carousel className="w-full relative" opts={{ loop: true }}>
          <CarouselContent>
            {items.map((item, index) => {
               const isLoading = loadingStates[index];

               return (
              <CarouselItem key={index}>
                {/* RESPONSIF CONTAINER HEIGHT:
                  - h-[50vh]: Di HP tinggi 50% viewport
                  - sm:h-[60vh]: Di tablet tinggi 60%
                  - md:h-[75vh]: Di desktop tinggi 75%
                */}
                <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] flex flex-col justify-center items-center bg-black/20">
                  
                  {/* LOADNG SPINNER (Muncul hanya jika isLoading true) */}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <Loader2 className="h-10 w-10 animate-spin text-white/40" />
                    </div>
                  )}

                  {/* Gambar */}
                  <div className="relative w-full h-full z-10">
                   <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      // FADE-IN EFFECT:
                      // Opacity 0 jika loading, 100 jika selesai. Transisi halus 500ms.
                      className={cn(
                        "object-contain transition-opacity duration-500 ease-in-out",
                        isLoading ? "opacity-0" : "opacity-100"
                      )}
                      onLoad={() => handleImageLoad(index)}
                      priority={index === 0}
                    />
                  </div>

                  {/* Caption Overlay (Responsif padding & text size) */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6 pt-12 sm:pt-16 text-left z-40 pointer-events-none">
                    <p className="text-sm sm:text-base font-medium text-white leading-tight line-clamp-2 sm:line-clamp-none pointer-events-auto">{item.caption}</p>
                    {item.location && (
                      <p className="text-[10px] sm:text-xs text-gray-300 flex items-center gap-1 mt-1 sm:mt-1.5 font-light pointer-events-auto">
                        <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        {item.location}
                      </p>
                    )}
                    <p className="text-[10px] sm:text-xs text-gray-500 text-right mt-1 sm:mt-2 font-mono pointer-events-auto">
                      {index + 1} / {items.length}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          
          {items.length > 1 && (
            <>
              {/* hidden sm:flex -> Sembunyikan tombol panah di HP, munculkan di Tablet ke atas */}
              <CarouselPrevious className="hidden sm:flex left-4 border-white/10 bg-black/40 hover:bg-black/60 text-white z-50 h-9 w-9 sm:h-10 sm:w-10 backdrop-blur-sm" />
              <CarouselNext className="hidden sm:flex right-4 border-white/10 bg-black/40 hover:bg-black/60 text-white z-50 h-9 w-9 sm:h-10 sm:w-10 backdrop-blur-sm" />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}