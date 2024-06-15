import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectValue,
    SelectItem,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { useState } from "react";
import { AreaChart, BarChart3, FileSearch, LineChart } from "lucide-react";
import { BarVariant } from "@/components/bar-variant";
import { LineVariant } from "@/components/line-variant";
import { AreaVariant } from "@/components/area-variant";

type Props = {
    data?: {
        date: string;
        income: number;
        expenses: number;
    } [];
};

export const SpendingPie = ({ data = [] }: Props) => {
    const [chartType, setChartType] = useState("area");

    const onTypeChange = (type: string) => {
        //TODO: Add paywall
        setChartType(type);
    }

    return (
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
                <CardTitle className="text-xl line-clamp-1">
                    Transactions
                </CardTitle>
                <Select
                    defaultValue={chartType}
                    onValueChange={onTypeChange}
                >
                    <SelectTrigger className="lg:w-auto h-9 rounded-md px-3">
                        <SelectValue placeholder="Chart type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="area">
                            <div className="flex items-center">
                                <AreaChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Area chart
                                </p>
                            </div>
                        </SelectItem>
                        <SelectItem value="line">
                            <div className="flex items-center">
                                <LineChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Line chart
                                </p>
                            </div>
                        </SelectItem>
                        <SelectItem value="bar">
                            <div className="flex items-center">
                                <BarChart3 className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Bar chart
                                </p>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                {data.length === 0 ? (
                    <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
                        <FileSearch className="size-6 text-muted-foreground" />
                        <p className="text-muted-foreground text-sm">

                        </p>
                    </div>
                ): (
                    <>
                        {chartType === "area" && <AreaVariant data={data} />}
                        {chartType === "bar" && <BarVariant data={data} />}
                        {chartType === "line" && <LineVariant data={data} />}
                    </>
                )}
            </CardContent>
        </Card>
    );
};