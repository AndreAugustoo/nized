import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

import { cn } from "@/lib/utils";

type Props = {
    id: string;
    account: string;
    accountId: string;
};

export const AccountColumn = ({
    account,
    accountId
}: Props) => {
    const { onOpen: onOpenAccount} = useOpenAccount();

    const onClick = () => {
        onOpenAccount(accountId);
    };

    return (
        <div
            onClick={onClick}
            className="flex items-center cursos-pointer hover:underline"
        >
            {account}
        </div>
    );
};
