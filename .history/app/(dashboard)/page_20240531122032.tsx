"use client";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

export default function Home() {
  const { data: accounts, isLoading} = useGetAccounts();

  return (
    <div>
      {accounts?.map((account) (
        <div key={accountsQuery.id}>
          {accountsQuery.name}
        </div>
      ))}
    </div>
  )
}
