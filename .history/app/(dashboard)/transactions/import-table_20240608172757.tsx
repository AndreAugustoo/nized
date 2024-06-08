import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

type Props = {
    headers: string[];
    body: string[][];
    selectedColumns: Record<string, string | null>;
    onTableHeadSelectChange: (columnIndex: number, value: string | null) => void;
};

export const ImportTable = ({
    headers,
    body,
    selectedColumns,
    onTableHeadSelectChange,
}: Props) => {
    return (
        <div className="rounded-md border overflow-hidden">
            <Table>
                <TableHeader className="bg-muted">
                    <TableRow>
                        {headers.map((_item, index) => (
                            <TableHead>
                                {index}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
            </Table>
        </div>
    )
};