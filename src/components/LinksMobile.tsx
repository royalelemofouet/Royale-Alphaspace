import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { type Link, links } from "@/utils/links.ts";
import { NavLink } from "react-router-dom";
import { List } from "lucide-react";
import { Button } from "./ui/button";


const LinksMobile = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild className="lg:hidden">
            <Button variant ="outline" size="icon" className="bg-white">
                <List />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="lg:hidden rounded-xl bg-white" align="start" sideOffset={10}>
            {links.map((link) => {
        const { ref, label } = link as Link;
        return ( 
        <DropdownMenuItem className="p-2" key={ref}>
      <NavLink 
        to={ref} 
        className={({ isActive }) => 
          `capitalize tracking-wide ${isActive ? "text-primary" : ""}`
        } 
      >
        {label}    
      </NavLink>
    </DropdownMenuItem>
      );
      })}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksMobile;
