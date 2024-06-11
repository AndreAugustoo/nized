"use client";

import { formatDateRange } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { FaPiggyBank } from "react-icons/fa";

export const DataGrid = () => {
    const { data } = useGetSummary();

    const params = useSearchParams();
    const to = params.get("to") || undefined;
    const from = params.get("from") || undefined;

    const dateRangeLabel = formatDateRange({ to, from });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
            <DataCard 
                title="Remaining"
                value={data?.remainingAmount}
                percentageChange={data?.remainingChange}
                icon={FaPiggyBank}
            />
        </div>
    )
};