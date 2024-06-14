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
        <div>
            Chart
        </div>
    );
};