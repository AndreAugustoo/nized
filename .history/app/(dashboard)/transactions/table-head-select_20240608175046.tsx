import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {
    columnIndex: number;
    selectedColumns: Record<string, string | null>;
    onChange: (
        columnIndex: number,
        value: string | null
    ) => void;
};

const options = [
    "amount",
    "payee",
    "notes",
    "date",
];

export const TableHeadSelect = ({
    columnIndex,
    selectedColumns,
    onChange,
}: Props) => {
    const currentSelection = selectedColumns[`column_${columnIndex}`];

    return (
        <Select
            value={currentSelection || ""}
        >

        </Select>
    )
}