import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.accounts[":id"]["$patch"]>;
type RequestType = InferRequestType<typeof client.api.accounts[":id"]["$patch"]>["json"];

export const useEditAccount = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async (json) => {
            const response = await client.api.accounts[":id"]["$patch"]({
                json,
                params: { id }
            })
            return await response.json();
        },

        onSuccess: () => {
            toast.success("Account created");
            queryClient.invalidateQueries({ queryKey: ["accounts"] });
        },

        onError: () => {
            toast.error("Failed to created account");
        },
    });

    return mutation;
};