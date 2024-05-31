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
        <Button>
            <Link>
            </Link>
        </Button>
    );
};