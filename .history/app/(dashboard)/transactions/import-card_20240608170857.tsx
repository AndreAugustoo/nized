import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const dateFormat = "yyyy-MM-dd HH:mm:ss";
const outputFormat = "yyyy-MM-dd";

const requiredOptions = [
    "amount",
    "date",
    "payee"
];

interface SelectedColumnsState {
    [key: string]: string | null;
}

type Props = {
    data: string [][];
    onCancel: () => void;
    onSubmit: (data: any) => void;
};

export const ImportCard = ({
    data,
    onCancel,
    onSubmit
}: Props) => {
    return (
        <div>
            Import Card
        </div>
    );
};