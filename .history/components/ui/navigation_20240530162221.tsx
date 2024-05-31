"use client";

import { usePathname } from "next/navigation";

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
    const pathname = usePathname();

    return (        
        <nav className="hidden lg:flex items-center gap-x-2 overflo-x-auto">
            {routes.map((route) => (
                <NavButton 
                    key={route.href}
                    href={route.href}
                    lable={route.label}
                />
            ))}
        </nav>
    )
}