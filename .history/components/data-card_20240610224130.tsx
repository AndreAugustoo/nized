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

const iconVariant = cva(
    "size-6",
    {
        variants: {
            variant: {
                default: "fill-blue-500",
                success: "fill-emerald-500",
                danger: "fill-rose-500",
                warning: "fill-yellow-500",
            }
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

type BoxVariants = VariantProps<typeof boxVariant>;
type IconVariants = VariantProps<typeof iconVariant>;

interface DataCardProps extends BoxVariants, IconVariants {
    icon: IconType;
    title: string;
    value?: number;
    dataRange: string;
    percentageChange?: number;
}

export const DataCard = () => {
    return (
        <div>
            Data Card
        </div>
    ); 
};