
'use client'
import Link from "next/link"
import React from "react"
import { cn } from "@/lib/utils"


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
import Logo from "./logo"
const components: { title: string, description: string}[] = [
    {
        title: "HandBag",
    
        description:
        "everything for you .",
      },
      {
        title: "Belt",
    
        description:
        "everything for you .",
      },
      {
        title: "Slippers",
    
        description:
        "everything for you .",
      },
      {
        title: "Caps",
    
        description:  "everything for you .",
      },
      {
        title: "T-Shirts",
    
        description:
        "everything for you .",
      },
      {
        title: "Perfumes",
     
        description:
          "everything for you .",
      },
  ]



const NavigationBar = () => {
    return (
      <NavigationMenu>
        <NavigationMenuList
        className="hidden md:flex md:space-x-4"
        
        
        
        >
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Logo  />
                      <div className="mb-2 mt-4 text-lg font-medium">
                       Gucci Brand
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                      online platform for selling Gucci products.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem  title="Introduction">
                    Learn about Gucci
                </ListItem>
                <ListItem  title="Choice">
                  How to Buy a good product
                </ListItem>
                <ListItem  title="Community">
                    Join the community to get updates and support.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
              className="font-medium"
              >
                Offers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="
              font-medium">
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        
        </NavigationMenuList>
      </NavigationMenu>
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


 
export default NavigationBar;