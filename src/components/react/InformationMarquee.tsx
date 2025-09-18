import React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

function cn(
  ...inputs: (string | undefined | null | false | Record<string, boolean>)[]
): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (typeof input === "string") {
      classes.push(input);
    } else if (input && typeof input === "object") {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
}

export function InformationMarquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden h-44 [--duration:40s] [--gap:0.5rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

export default function InformationMarqueeWrapper() {
  return (
    <div className="max-w-3xl mx-auto h-44 overflow-hidden">
      <InformationMarquee
        pauseOnHover={true}
        className="h-full flex items-center"
      >
        <img
          src="/img/i23.webp"
          alt="Paisaje boliviano - Salar de Uyuni"
          className="marquee-image h-44 object-cover rounded"
        />
        <img
          src="/img/i24.webp"
          alt="Laguna Colorada Bolivia"
          className="marquee-image h-44 object-cover rounded"
        />
        <img
          src="/img/i25.webp"
          alt="Volcanes andinos Bolivia"
          className="marquee-image h-44 object-cover rounded"
        />
        <img
          src="/img/i26.webp"
          alt="Quetena Chico Bolivia"
          className="marquee-image h-44 object-cover rounded"
        />
      </InformationMarquee>
    </div>
  );
}
