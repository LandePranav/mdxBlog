"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "../ui/icon"
import { ModeToggle } from "./mode-toggle"
import { posts } from "@/lib/constants"

export function MainNav({className}:{className?: string}) {
  return (
    <div className={cn(
      "flex flex-col pt-10 z-50 items-center justify-center md:flex-row md:items-center md:justify-between w-[80%] md:w-full mx-auto md:mx-0",
      className
    )}>
      <Link href={"/"}>
        <div className="flex items-center justify-between gap-3">
          <Icons.logo />
          <p className="uppercase text-nowrap text-lg">
            Ronin's Lore
          </p>
        </div>
      </Link>
      <NavigationMenu className=" mt-5 md:mt-0">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {posts.map((post) => (
                <ListItem
                  key={post.title}
                  title={post.title}
                  href={post.href}
                >
                  {post.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://pranavlande.vercel.app" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center justify-between w-40 md:w-20 -ml-5 md:ml-0">
          <span className="px-4 md:px-0">
          <ModeToggle/>
          </span>
          <Link href={'/rss'} className="px-4 md:px-0">
              <Icons.rss />
          </Link>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
