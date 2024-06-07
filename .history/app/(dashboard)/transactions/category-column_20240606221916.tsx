import { useOpenCategory } from "@/features/categories/hooks/use-open-category";

type Props = {
    category: string;
    categoryId: string;
};

export const CategoryColumn = ({
    category,
    categoryId
}: Props) => {
    const { onOpen: onOpenCategory} = useOpenCategory();

    const onClick = () => {
        onOpenCategory(categoryId);
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
