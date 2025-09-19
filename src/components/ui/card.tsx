import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "relative overflow-hidden rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex items-center gap-4 mb-4",
        className
      )}
      {...props}
    />
  )
}

function CardLogo({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-logo"
      className={cn(
        "flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h2
      data-slot="card-title"
      className={cn(
        "text-white font-bold text-xl leading-tight",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn(
        "text-white/90 text-sm leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "absolute top-4 right-4",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "space-y-3",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "mt-4 pt-4 border-t border-white/20",
        className
      )}
      {...props}
    />
  )
}

function CardInfo({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-info"
      className={cn(
        "flex items-center gap-2 text-white/90",
        className
      )}
      {...props}
    />
  )
}

function CardIcon({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-icon"
      className={cn(
        "flex-shrink-0 w-5 h-5 flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Variantes predefinidas de colores
const cardVariants = {
  cyan: "bg-gradient-to-br from-cyan-400 to-cyan-600",
  orange: "bg-gradient-to-br from-orange-500 to-orange-600",
  blue: "bg-gradient-to-br from-blue-400 to-blue-600",
  green: "bg-gradient-to-br from-green-400 to-green-600",
  purple: "bg-gradient-to-br from-purple-400 to-purple-600",
  pink: "bg-gradient-to-br from-pink-400 to-pink-600",
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardLogo,
  CardInfo,
  CardIcon,
  cardVariants,
}