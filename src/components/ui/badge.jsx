import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "bg-blue-600/20 text-blue-400 border-blue-500/30",
  secondary: "bg-zinc-800 text-zinc-300 border-zinc-700",
  success: "bg-green-600/20 text-green-400 border-green-500/30",
  destructive: "bg-red-600/20 text-red-400 border-red-500/30",
  outline: "bg-transparent text-zinc-400 border-zinc-700",
}

function Badge({ className, variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
