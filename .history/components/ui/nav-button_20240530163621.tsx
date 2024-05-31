import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
    href: string;
    label: string;
    isActive?: boolean;
}

export const NavButton = ({
    href,
    label,
    isActive,
}: Props) => {
    return (
        <Button
            asChild
            size="sm"
            variant="outline"
            className={isActive ? `ss` : "ss"}
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};