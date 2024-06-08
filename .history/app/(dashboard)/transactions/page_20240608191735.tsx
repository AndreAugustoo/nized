"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { columns } from "./columns";
import { Loader2, Plus } from "lucide-react";
import { transactions as transactionSchema } from "@/db/schema";
import { UploadButton } from "./upload-button";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table"
import { Skeleton } from "@/components/ui/skeleton";
import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";
import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";
import { useBulkDeleteTransactions } from "@/features/transactions/api/use-bulk-delete-transactions";
import { ImportCard } from "./import-card";
import { useSelectAccount } from "@/features/accounts/hooks/use-select-account";

enum VARIANTS {
    LIST = "LIST",
    IMPORT = "IMPORT"
};

const INITIAL_IMPORTS_RESULTS = {
    data: [],
    errors: [],
    meta: {},
};

const TransactionsPage = () => {
    const [AccountDialog, confirm] = useSelectAccount();
    const [variant, setVariant] = useState<VARIANTS>(VARIANTS.LIST);
    const [importResults, setImportResults] = useState(INITIAL_IMPORTS_RESULTS);

    const onUpload = (results: typeof INITIAL_IMPORTS_RESULTS) => {
        console.log({results});
        setImportResults(results);
        setVariant(VARIANTS.IMPORT);
    };

    const onCancelImport =() => {
        setImportResults(INITIAL_IMPORTS_RESULTS);
        setVariant(VARIANTS.LIST);
    };

    const newTransaction = useNewTransaction();
    const deleteTransactions = useBulkDeleteTransactions();
    const transactionsQuery = useGetTransactions();
    const transactions = transactionsQuery.data || [];

    const isDisabled =
    transactionsQuery.isLoading ||
        deleteTransactions.isPending;
    
    const onSubmitImport = async (
        values: typeof transactionSchema.$inferInsert[],
    ) => {

    };

    if (transactionsQuery.isLoading) {
        return (
            <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
                <Card className="borber-none drop-shadow-sm">
                    <CardHeader>
                        <Skeleton className="h-8 w-48"/>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[500px] w-full flex items-center justify-center">
                            <Loader2 className="size-6 text-slate-300 animate-spin" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (variant === VARIANTS.IMPORT) {
        return (
            <>
                <ImportCard 
                    data={importResults.data}
                    onCancel={onCancelImport}
                    onSubmit={onSubmit}
                />
            </>
        );
    };

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="borber-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">
                        Transactions History
                    </CardTitle>  
                    <div className="flex flex-col lg:flex-row gap-y-4 items-center gap-x-2"> 
                        <Button 
                            onClick={newTransaction.onOpen} 
                            size="sm"
                            className="w-full lg:w-auto"
                        >
                            <Plus className="size-4 mr-2" />
                            Add new
                        </Button>   
                        <UploadButton 
                            onUpload={onUpload}
                        />
                    </div>       
                </CardHeader>
                <CardContent>
                    <DataTable 
                        filterKey="payee"
                        columns={columns} 
                        data={transactions} 
                        onDelete={(row) => {
                            const ids = row.map((r) => r.original.id);
                            deleteTransactions.mutate({ ids });
                        }}
                        disabled={isDisabled}
                    />
                </CardContent>
            </Card>           
        </div>
    );
};

export default TransactionsPage;