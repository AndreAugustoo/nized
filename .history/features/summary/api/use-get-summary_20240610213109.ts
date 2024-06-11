import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { convertAmountFromMiliunits } from "@/lib/utils";

export const useGetSummary = (id?: string) => {
    const query = useQuery({
        enabled: !!id,
        queryKey: ["summary", { id }],
        queryFn: async () => {
            const response = await client.api.summary[":id"].$get({
                param: { id },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch summary");
            }

            const { data } = await response.json();
            return {
                ...data,
                incomeAmount: convertAmountFromMiliunits(data.incomeAmount),
                expensesAmount: convertAmountFromMiliunits(data.expensesAmount),
                remainingAmount: convertAmountFromMiliunits(data.remainingAmount),
            };

        }
    });

    return query;
};