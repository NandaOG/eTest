"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    opts?: {
      align?: "start" | "center" | "end"
      loop?: boolean
    }
  }
>(({ className, children, opts, ...props }, ref) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [slides, setSlides] = React.useState<React.ReactElement[]>([])

  React.useEffect(() => {
    const slideElements = React.Children.toArray(children).filter(
      (child): child is React.ReactElement => React.isValidElement(child)
    )
    setSlides(slideElements)
  }, [children])

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (opts?.loop) {
        return (prevIndex + 1) % slides.length
      }
      return Math.min(prevIndex + 1, slides.length - 1)
    })
  }, [slides.length, opts?.loop])

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (opts?.loop) {
        return prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      }
      return Math.max(prevIndex - 1, 0)
    })
  }, [slides.length, opts?.loop])

  React.useEffect(() => {
    if (opts?.loop) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [nextSlide, opts?.loop])

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <CarouselPrevious onClick={prevSlide} />
      <CarouselNext onClick={nextSlide} />
    </div>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex", className)}
    {...props}
  />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors",
      className
    )}
    {...props}
  >
    <ChevronLeft className="h-6 w-6" />
    <span className="sr-only">Previous slide</span>
  </button>
))
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors",
      className
    )}
    {...props}
  >
    <ChevronRight className="h-6 w-6" />
    <span className="sr-only">Next slide</span>
  </button>
))
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}