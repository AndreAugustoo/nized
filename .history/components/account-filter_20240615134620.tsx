"use client";

import qs from "query-string";

import {
    usePathname,
    useRouter,
    useSearchParams
} from "next/navigation";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts"; 

import {
    Select,
    SelectItem,
    SelectValue,
    SelectTrigger,
    SelectContent,
} from "@/components/ui/select";

export const AccountFilter = () => {

    const params = useSearchParams();
    const accountId = params.get("accountId") || "all";

    const {
        data: accounts,
        isLoading: isLoadingAccounts,
    } = useGetAccounts();

    return (
        <Select
            value={accountId}
            onValueChange={() => {}}
            disabled={false}
        >
            <SelectTrigger
                className="lg:w-auto w-full h-9 rounded-md px-3 font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus:ring-offset-0 focus:ring-transparent outline-none text-white focus:bg-white/30 transition"
            >
                <SelectValue placeholder="Account" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">
                    All accounts
                </SelectItem>
                {accounts?.map((account) => (
                    <SelectItem key={account.id} value={account.id}>
                        {account.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
};