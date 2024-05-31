import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

export const NewAccountSheet = () => {
    return (
        <Sheet open>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Account
                    </SheetTitle>
                </SheetHeader>
                <SheetDescription>
                    Create a new account to track your transactions.
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}