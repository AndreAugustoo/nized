import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

type Props = {
    data?: {
        date: string;
        income: number;
        expenses: number;
    } [];
};

export const Chart = ({ data = [] }: Props) => {
    return (
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
                <CardTitle className="text-xl line-clamp-1">
                    Transactions
                </CardTitle>
                {/* TODO: Add select */}
            </CardHeader>
            <CardContent>
                
            </CardContent>
        </Card>
    );
};