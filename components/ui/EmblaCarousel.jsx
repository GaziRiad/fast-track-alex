"use client";

import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";

import { FaStar } from "react-icons/fa";
import Image from "next/image";

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container gap-5">
          {slides.map((slide, index) => (
            <div
              className="embla__slide rounded-[4px] border-b-4 border-accent-700 py-5 shadow-testimonials"
              key={index}
            >
              <blockquote className="embla__slide__number flex h-full flex-col">
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar color="#F6BA1F" size={16} key={index} />
                  ))}
                </div>
                <p className="mb-5 font-display text-2xl font-semibold text-primary-700">
                  “{slide.title}”
                </p>
                <p className="mb-5 text-base leading-[1.5] text-[#666666]">
                  &quot;{slide.text}&quot;
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <Image
                    src={slide.image}
                    alt={`image of ${slide.author}`}
                    className="aspect-square w-14 object-cover"
                    width={600}
                    height={600}
                  />
                  <div>
                    <p className="text-xl font-bold">{slide.author}</p>
                    <p className="text-sm text-[#666]">{slide.position}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls !flex !justify-center">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
