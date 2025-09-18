import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const stories = [
  {
    id: 1,
    name: "Hola, Soy Shari!",
    image: "/img/kid1.svg",
    alt: "Happy child reading",
    testimonial:
      "Junto a mi comunidad construimos una biblioteca, un espacio para aprender y soñar. Me gustaría tener libros de leyendas de nuestra tierra y narraciones de historias.",
    quote: "Leer abre puertas",
    color: "text-blue-500",
  },
  {
    id: 2,
    name: "Hola, Soy Nayde!",
    image: "/img/kid2.svg",
    alt: "Child exploring books",
    testimonial:
      "Junto a mi comunidad construimos una biblioteca, un espacio para aprender y soñar. Me gustaría tener libros de leyendas de nuestra tierra y narraciones de historias.",
    quote: "Me encanta leer",
    color: "text-amber-500",
  },
  {
    id: 3,
    name: "Hola, Soy Alison!",
    image: "/img/kid3.svg",
    alt: "Creative child with books",
    testimonial:
      "Junto a mi comunidad construimos una biblioteca, un espacio para aprender y soñar. Me gustaría tener libros de leyendas de nuestra tierra y narraciones de historias.",
    quote: "Una aventura espera en cada libro",
    color: "text-green-500",
  },
];

export default function StoriesCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isClient, setIsClient] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState<number>(0);
  const [touchEnd, setTouchEnd] = React.useState<number>(0);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Handle slide changes if needed
    });
  }, [api]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && api) {
      api.scrollNext();
    }
    if (isRightSwipe && api) {
      api.scrollPrev();
    }
  };

  if (!isClient) {
    return (
      <div className="max-w-sm mx-auto">
        <div className="w-full">
          <div className="overflow-hidden">
            <div className="flex">
              <div className="min-w-0 shrink-0 grow-0 basis-full">
                <Card className="flex flex-col h-full shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-2">
                      <img
                        src="/img/kid1.svg"
                        alt="Happy child reading"
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-center text-lg font-bold comfortaa">
                      Hola, Soy Shari!
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 py-2">
                    <p className="text-gray-600 text-center italic leading-relaxed text-sm">
                      "Junto a mi comunidad construimos una biblioteca, un
                      espacio para aprender y soñar. Me gustaría tener libros de
                      leyendas de nuestra tierra y narraciones de historias."
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2 pb-4">
                    <div className="w-full text-center">
                      <span className="schoolbell text-xl text-blue-500">
                        "Leer abre puertas"
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto">
      <style>
        {`
                .comfortaa {
                    font-family: "Comfortaa Variable", "Comfortaa", sans-serif;
                    font-variation-settings: "wght" 400;
                }
                .schoolbell {
                    font-family: "Schoolbell", cursive;
                    font-weight: 400;
                    transform: rotate(-2deg);
                    display: inline-block;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
                }
                `}
      </style>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
          watchDrag: true,
        }}
      >
        <CarouselContent
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {stories.map((story) => (
            <CarouselItem key={story.id}>
              <Card className="flex flex-col h-full shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-2">
                    <img
                      src={story.image}
                      alt={story.alt}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-center text-lg font-bold comfortaa">
                    {story.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 py-2">
                  <p className="text-gray-600 text-center italic leading-relaxed text-sm">
                    "{story.testimonial}"
                  </p>
                </CardContent>
                <CardFooter className="pt-2 pb-4">
                  <div className="w-full text-center">
                    <span className={`schoolbell text-xl ${story.color}`}>
                      "{story.quote}"
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
