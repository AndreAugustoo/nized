"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";

import { NavButton } from "@/components/ui/nav-button";
import {  
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const routes = [
    {
        href: "/",
        label: "Overview",
    },
    {
        href: "/transactions",
        label: "Transactions",
    },
    {
        href: "/accounts",
        label: "Accounts",
    },
    {
        href: "/categories",
        label: "Categories",
    },
    {
        href: "/settings",
        label: "Settings",
    },
];

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useMedia("(max-width: 1024px)", false);

    const onClick = (href: string) => {
        router.push(href);
    }

    return (        
        <nav className="hidden lg:flex items-center gap-x-2 overflo-x-auto">
            {routes.map((route) => (
                <NavButton 
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    isActive={pathname === route.href}
                />
            ))}
        </nav>
    )
}