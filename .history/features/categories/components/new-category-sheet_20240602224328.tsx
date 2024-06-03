import { useNewCategory } from "@/features/categories/hooks/use-new-category";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { CategoryForm } from "@/features/categories/components/category-form";
import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import { useCreateCategory } from "@/features/categories/api/use-create-category";

const formSchema = insertAccountSchema.pick({
    name: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccount();

    const mutation = useCreateAccount();

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Account
                    </SheetTitle>
                    <SheetDescription>
                        Create a new account to track your transactions.
                    </SheetDescription>
                </SheetHeader>
                <AccountForm 
                    onSubmit={onSubmit} 
                    disabled={mutation.isPending}
                    defaultValues={{
                        name: "",
                    }}
                />
            </SheetContent>
        </Sheet>
    )
};