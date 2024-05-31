"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { isOpen, onClose } = useNewAccount();

  return (
    <div>
      <Button>
        Add an Account
      </Button>
    </div>
  )
};
