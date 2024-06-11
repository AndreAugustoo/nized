import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { cva, VariantProps } from "class-variance-authority";

const boxVariant = cva(
    "rounded-md p-3",
    {
        variants: {
            variant: {
                default: "bg-blue-500/20",
                success: "bg-emerald-500/20",
                danger: "bg-rose-500/20",
                warning: "bg-yellow-500/20",
            }
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export const DataCard = () => {
    return (
        <div>
            Data Card
        </div>
    );
};