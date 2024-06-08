import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { AccountForm } from "@/features/accounts/components/account-form";
import { useConfirm } from "@/hooks/use-confirm";
import { insertTransactionSchema } from "@/db/schema";
import { z } from "zod";
import { useOpenTransaction } from "@/features/transactions/hooks/use-open-transaction";
import { useGetTransaction } from "@/features/transactions/api/use-get-transaction";
import { Loader2 } from "lucide-react";
import { useEditTransaction } from "@/features/transactions/api/use-edit-transaction";
import { useDeleteTransaction } from "@/features/transactions/api/use-delete-transaction";

const formSchema = insertTransactionSchema.omit({
    id: true,
});

type FormValues = z.input<typeof formSchema>;

export const EditTransactionSheet = () => {
    const { isOpen, onClose, id } = useOpenTransaction();

    const [ConfirmDialog, confirm] = useConfirm(
        "Are you sure?",
        "You are about to delete this account."
    )

    const transactionQuery = useGetTransaction(id);
    const editMutation = useEditTransaction(id);
    const deleteMutation = useDeleteTransaction(id);

    const isPending = 
        editMutation.isPending ||
        deleteMutation.isPending;

    const isLoading = transactionQuery.isLoading;

    const onSubmit = (values: FormValues) => {
        editMutation.mutate(values, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    const onDelete = async () => {
        const ok = await confirm();

        if (ok) {
            deleteMutation.mutate(undefined, {
                onSuccess: () => {
                    onClose();
                }
            });
        }
    };

    const defaultValues = transactionQuery.data ? {
        accountId: transactionQuery.data.accountId,
        categoryId: transactionQuery.data.categoryId,
        amount: transactionQuery.data.amount.toString(),
        date: transactionQuery.data.date 
            ? new Date(transactionQuery.data.date)
            : new Date(),
        payee: transactionQuery.data.payee,
        notes: transactionQuery.data.notes,

    } : {
        accountId: "",
        categoryId: "",
        amount: "",
        date: "",
        payee: "",
        notes: "",
    }

    return (
        <>
        <ConfirmDialog />
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent className="space-y-4">
                    <SheetHeader>
                        <SheetTitle>
                            Edit Account
                        </SheetTitle>
                        <SheetDescription>
                            Edit an existing account.
                        </SheetDescription>
                    </SheetHeader>
                    {isLoading 
                    ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Loader2 className="size-4 text-muted-foreground animate-spin" />
                            </div>
                    ) 
                    : (
                        <AccountForm 
                            id={id}
                            onSubmit={onSubmit} 
                            disabled={isPending}
                            defaultValues={defaultValues}
                            onDelete={onDelete}
                        />
                    )
                    }
                    
                </SheetContent>
            </Sheet>
        </>
    )
};