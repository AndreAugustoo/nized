import { format } from "date-fns";

import { formatCurrency } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

export const CustomTooltip = ({ active, payload }: any) => {
    if (!active) return null;

    const date = payload[0].payload.date;
    const income = payload[0].payload.value;
    const expenses = payload[1].payload.value;

    return (
        <div className="rounded-sm bg-white shadow-sm border overflow-hidden">

        </div>
    )
};