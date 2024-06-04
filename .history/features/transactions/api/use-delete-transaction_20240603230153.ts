import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.transactions[":id"]["$delete"]>;

export const useDeleteTransaction= (id?: string) => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error
    >({
        mutationFn: async (json) => {
            const response = await client.api.accounts[":id"]["$delete"]({
                param: { id },    
            });
            return await response.json();
        },

        onSuccess: () => {
            toast.success("Account deleted");
            queryClient.invalidateQueries({ queryKey: ["account, { id }"] });
            queryClient.invalidateQueries({ queryKey: ["accounts"] });
            // TODO: Invalidate summary and transactions
        },

        onError: () => {
            toast.error("Failed to delete account");
        },
    });

    return mutation;
};