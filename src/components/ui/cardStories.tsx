import * as React from "react"
import { cn } from "@/lib/utils"

function CardStories({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-stories"
      className={cn(
        "bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center max-w-sm mx-auto",
        className
      )}
      {...props}
    />
  )
}

function CardStoriesAvatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-stories-avatar"
      className={cn(
        "relative mb-4",
        className
      )}
      {...props}
    />
  )
}

function CardStoriesAvatarBackground({ 
  className, 
  color = "bg-cyan-400",
  ...props 
}: React.ComponentProps<"div"> & { color?: string }) {
  return (
    <div
      data-slot="card-stories-avatar-bg"
      className={cn(
        "w-32 h-32 rounded-full flex items-center justify-center",
        color,
        className
      )}
      {...props}
    />
  )
}

function CardStoriesAvatarImage({ className, ...props }: React.ComponentProps<"img">) {
  return (
    <img
      data-slot="card-stories-avatar-img"
      className={cn(
        "w-28 h-28 rounded-full object-cover border-4 border-white shadow-md",
        className
      )}
      {...props}
    />
  )
}

function CardStoriesName({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-stories-name"
      className={cn(
        "text-xl font-bold text-gray-800 mb-4",
        className
      )}
      {...props}
    />
  )
}

function CardStoriesText({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-stories-text"
      className={cn(
        "text-gray-600 text-sm leading-relaxed mb-4 flex-grow",
        className
      )}
      {...props}
    />
  )
}

function CardStoriesQuote({ className, color = "text-cyan-500", ...props }: React.ComponentProps<"p"> & { color?: string }) {
  return (
    <p
      data-slot="card-stories-quote"
      className={cn(
        
        "font-semibold text-md italic mt-4",
        color,
        className
      )}
      {...props}
    />
  )
}

// Variantes de colores predefinidas para los avatares
const avatarColors = {
  cyan: "bg-cyan-400",
  orange: "bg-orange-500",
  blue: "bg-blue-400",
  green: "bg-green-400",
  purple: "bg-purple-400",
  pink: "bg-pink-400",
  yellow: "bg-yellow-400",
  red: "bg-red-400",
}

// Variantes de colores para las quotes
const quoteColors = {
  cyan: "text-cyan-500",
  orange: "text-orange-500",
  blue: "text-blue-500",
  green: "text-green-500",
  purple: "text-purple-500",
  pink: "text-pink-500",
  yellow: "text-yellow-600",
  red: "text-red-500",
}

export {
  CardStories,
  CardStoriesAvatar,
  CardStoriesAvatarBackground,
  CardStoriesAvatarImage,
  CardStoriesName,
  CardStoriesText,
  CardStoriesQuote,
  avatarColors,
  quoteColors,
}