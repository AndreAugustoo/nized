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
    return (
        <div>
            Select
        </div>
    )
}