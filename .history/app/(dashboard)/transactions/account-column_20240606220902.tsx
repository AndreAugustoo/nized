import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

import { cn } from "@/lib/utils";

type Props = {
    id: string;
    account: string;
    accountId: string;
};

export const AccountColumn = ({
    id,
    account,
    accountId
}: Props) => {
    return (
        <div>
            {account}
        </div>
    );
};
