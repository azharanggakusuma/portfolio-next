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
import { MapPin, ImageIcon, X, Loader2, ImageOff, Maximize2, Minimize2 } from "lucide-react"; // Import Maximize2 & Minimize2
import { GalleryItem } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GalleryModalProps {
  title: string;
  items: readonly GalleryItem[];
}

export function GalleryModal({ title, items }: GalleryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false); // State untuk toggle fullscreen di desktop

  const [loadingStates, setLoadingStates] = useState<boolean[]>([]);
  const [errorStates, setErrorStates] = useState<boolean[]>([]);

  useEffect(() => {
    if (isOpen && items.length > 0) {
      setLoadingStates(new Array(items.length).fill(true));
      setErrorStates(new Array(items.length).fill(false));
      setIsFullscreen(false); // Reset fullscreen saat dibuka
    }
  }, [isOpen, items]);

  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  const handleImageError = (index: number) => {
    setLoadingStates((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
    setErrorStates((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
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
      
      <DialogContent 
        className={cn(
          "bg-black/90 backdrop-blur-md p-0 overflow-hidden text-white [&>button]:hidden shadow-2xl transition-all duration-300 ease-in-out gap-0",
          
          // --- STYLE MOBILE (DEFAULT) ---
          // Fullscreen total, tanpa border, tanpa rounded corner
          "w-screen h-[100dvh] max-w-none m-0 rounded-none border-none", 

          // --- STYLE DESKTOP (JIKA TIDAK FULLSCREEN) ---
          // Mengembalikan tampilan modal "windowed" hanya jika isFullscreen FALSE
          // Dan hanya berlaku di layar sm (tablet) ke atas
          !isFullscreen && "sm:max-w-5xl sm:h-auto sm:rounded-xl sm:border sm:border-white/10 sm:my-auto"
        )}
      >
        
        {/* Header */}
        <DialogHeader className="absolute top-0 left-0 w-full z-50 p-4 bg-gradient-to-b from-black/80 to-transparent flex flex-row justify-between items-start pointer-events-none">
          <DialogTitle className="text-white text-base sm:text-lg font-semibold text-shadow-sm pt-1 pl-1 line-clamp-1 pointer-events-auto">
            {title}
          </DialogTitle>
          
          <div className="flex items-center gap-2 pointer-events-auto">
            {/* TOMBOL FULLSCREEN (Hanya muncul di Desktop 'hidden sm:flex') */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white/70 hover:text-white hover:bg-white/10 rounded-full h-9 w-9"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
            </Button>

            {/* Tombol Close */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-9 w-9"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" /> {/* Ukuran ikon X sedikit diperbesar untuk mobile */}
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>
        
        <Carousel className="w-full relative h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full m-0">
            {items.map((item, index) => {
               const isLoading = loadingStates[index];
               const isError = errorStates[index];

               return (
              <CarouselItem key={index} className="p-0 h-full">
                {/* CONTAINER GAMBAR */}
                <div 
                  className={cn(
                    "relative w-full flex flex-col justify-center items-center bg-black/20",
                    // TINGGI DINAMIS:
                    // 1. Mobile (Default) / Desktop Fullscreen: h-[100dvh]
                    // 2. Desktop Normal (!isFullscreen): sm:h-[60vh] md:h-[75vh]
                    isFullscreen ? "h-[100dvh]" : "h-[100dvh] sm:h-[60vh] md:h-[75vh]"
                  )}
                >
                  
                  {/* Loading Spinner */}
                  {isLoading && !isError && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <Loader2 className="h-10 w-10 animate-spin text-white/40" />
                    </div>
                  )}

                  {/* Error State */}
                  {isError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white/40">
                        <ImageOff className="h-16 w-16 mb-2 opacity-50" />
                        <p className="text-sm font-medium">Image not available</p>
                    </div>
                  )}

                  {/* Gambar */}
                  {!isError && (
                    <div className="relative w-full h-full z-10">
                      <Image
                        src={item.image}
                        alt={item.caption}
                        fill
                        className={cn(
                          "object-contain transition-opacity duration-500 ease-in-out",
                          isLoading ? "opacity-0" : "opacity-100"
                        )}
                        onLoad={() => handleImageLoad(index)}
                        onError={() => handleImageError(index)}
                        priority={index === 0}
                      />
                    </div>
                  )}

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-5 sm:p-6 pt-16 sm:pt-20 text-left z-40 pointer-events-none pb-8 sm:pb-6">
                    <p className="text-sm sm:text-base font-medium text-white leading-tight line-clamp-2 sm:line-clamp-none pointer-events-auto">
                      {item.caption}
                    </p>
                    {item.location && (
                      <p className="text-[11px] sm:text-xs text-gray-300 flex items-center gap-1 mt-1.5 font-light pointer-events-auto">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </p>
                    )}
                    <p className="text-[10px] sm:text-xs text-gray-500 text-right mt-2 font-mono pointer-events-auto">
                      {index + 1} / {items.length}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          
          {items.length > 1 && (
            <>
              <CarouselPrevious className="hidden sm:flex left-4 border-white/10 bg-black/40 hover:bg-black/60 text-white z-50 h-10 w-10 backdrop-blur-sm" />
              <CarouselNext className="hidden sm:flex right-4 border-white/10 bg-black/40 hover:bg-black/60 text-white z-50 h-10 w-10 backdrop-blur-sm" />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}