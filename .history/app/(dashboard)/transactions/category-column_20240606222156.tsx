import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { TriangleAlert } from "lucide-react";

type Props = {
    id: string;
    category: string | null;
    categoryId: string | null; 
};

export const CategoryColumn = ({
    id,
    category,
    categoryId
}: Props) => {
    const { onOpen: onOpenCategory} = useOpenCategory();

    const onClick = () => {
        if (categoryId) {
            onOpenCategory(categoryId);
        }
    };

    return (
        <div
            onClick={onClick}
            className="flex items-center cursor-pointer hover:underline"
        >
            {!category && <TriangleAlert />}
            {category || "Uncategorized"}
        </div>
    );
};
