import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

import { cn } from "@/lib/utils";

type Props = {
    id: string;
    account: string | null;
    accountId: string | null;
}