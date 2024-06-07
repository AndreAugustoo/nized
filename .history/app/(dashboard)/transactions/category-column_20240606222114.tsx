import { useOpenCategory } from "@/features/categories/hooks/use-open-category";

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
            {category}
        </div>
    );
};
