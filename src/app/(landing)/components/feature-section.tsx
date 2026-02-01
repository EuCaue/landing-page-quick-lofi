"use client";
import Hero from "@/components/hero";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export type CarouselDataType = {
  image: string;
  text: string;
};

export default function FeatureSection() {
  const carouselData: CarouselDataType[] = [
    { image: "/shortcuts", text: "Global Keyboard Shortcut" },
    { image: "/actions", text: "Custom indicator actions" },
    { image: "/volume", text: "Built in volume control" },
  ];
  const [carouselAPI, setCarouselAPI] = useState<CarouselApi>();
  const [currentCarousel, setCurrentCarousel] = useState<number>(0);

  useEffect(() => {
    if (!carouselAPI) return;
    const updateSelected = () => {
      setCurrentCarousel(carouselAPI.selectedScrollSnap());
    };
    carouselAPI.on("select", updateSelected);
    return () => {
      carouselAPI.off("select", updateSelected);
    };
  }, [carouselAPI]);

  const { resolvedTheme } = useTheme();
  if (!resolvedTheme) return null;

  return (
    <Hero className="gap-8 lg:flex-row flex-col-reverse" id="feature-section">
      <Carousel
        setApi={setCarouselAPI}
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {carouselData.map(({ image, text }, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="p-4 lg:p-1">
                <Card>
                  <CardContent
                    className="flex aspect-square items-center justify-center p-3 basis-1/2"
                    title={text}
                  >
                    <Image
                      src={`${image}-${resolvedTheme}.png`}
                      alt={text}
                      className="size-full"
                      height={1920}
                      width={1080}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <span className="flex flex-col gap-4 items-center justify-center self-center">
        <h1 className="font-bold text-xl">Minimal and customizable.</h1>
        <h2 className="font-semibold text-lg text-center lg:text-start">
          A lightweight sound player for GNOME built to keep you focused.
        </h2>
        <ul className="gap-8 flex items-center justify-center self-center flex-col mt-8 list-disc">
          {carouselData.map(({ text }, index) => {
            return (
              <li
                className={cn(
                  "font-semibold text-lg leading-1.5 cursor-pointer self-start hover:text-accent active:text-accent transition-colors duration-200",
                  currentCarousel === index && "marker:text-accent",
                )}
                key={index}
                onClick={() => {
                  carouselAPI?.scrollTo(index);
                  setCurrentCarousel(index);
                }}
              >
                {text}
              </li>
            );
          })}
        </ul>
      </span>
    </Hero>
  );
}
