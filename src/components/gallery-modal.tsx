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
import { MapPin, ImageIcon, X, Loader2, ImageOff } from "lucide-react"; // Tambah ImageOff
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
  
  // State untuk melacak status loading & error setiap gambar
  const [loadingStates, setLoadingStates] = useState<boolean[]>([]);
  const [errorStates, setErrorStates] = useState<boolean[]>([]);

  // Reset state setiap kali modal dibuka
  useEffect(() => {
    if (isOpen && items.length > 0) {
      setLoadingStates(new Array(items.length).fill(true));
      setErrorStates(new Array(items.length).fill(false));
    }
  }, [isOpen, items]);

  // Handler: Gambar sukses dimuat
  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  // Handler: Gambar GAGAL dimuat (file tidak ada/rusak)
  const handleImageError = (index: number) => {
    setLoadingStates((prev) => {
      const newState = [...prev];
      newState[index] = false; // Stop loading
      return newState;
    });
    setErrorStates((prev) => {
      const newState = [...prev];
      newState[index] = true; // Tandai error
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
               const isError = errorStates[index];

               return (
              <CarouselItem key={index}>
                {/* Container Responsif */}
                <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] flex flex-col justify-center items-center bg-black/20">
                  
                  {/* 1. LOADING SPINNER (Muncul jika loading DAN tidak error) */}
                  {isLoading && !isError && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <Loader2 className="h-10 w-10 animate-spin text-white/40" />
                    </div>
                  )}

                  {/* 2. ERROR STATE (Muncul jika gambar gagal load) */}
                  {isError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white/40">
                        <ImageOff className="h-16 w-16 mb-2 opacity-50" />
                        <p className="text-sm font-medium">Image not available</p>
                    </div>
                  )}

                  {/* 3. GAMBAR (Hanya render jika tidak error) */}
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
                        onError={() => handleImageError(index)} // <-- HANDLER ERROR
                        priority={index === 0}
                      />
                    </div>
                  )}

                  {/* 4. INFO / CAPTION (Selalu muncul, bahkan jika error) */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6 pt-12 sm:pt-16 text-left z-40 pointer-events-none">
                    <p className="text-sm sm:text-base font-medium text-white leading-tight line-clamp-2 sm:line-clamp-none pointer-events-auto">
                      {item.caption}
                    </p>
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
              <CarouselPrevious className="hidden sm:flex left-4 border-white/10 bg-black/40 hover:bg-black/60 text-white z-50 h-9 w-9 sm:h-10 sm:w-10 backdrop-blur-sm" />
              <CarouselNext className="hidden sm:flex right-4 border-white/10 bg-black/40 hover:bg-black/60 text-white z-50 h-9 w-9 sm:h-10 sm:w-10 backdrop-blur-sm" />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}