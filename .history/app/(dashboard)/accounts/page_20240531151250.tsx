import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AccountsPage = () => {
    return (
        <div>
            <Card className="borber-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">
                        Accounts Page
                    </CardTitle>   
                    <Button>

                    </Button>              
                </CardHeader>
            </Card>           
        </div>
    );
};

export default AccountsPage;