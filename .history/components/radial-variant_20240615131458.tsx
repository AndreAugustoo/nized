import {
    Legend,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    Tooltip
} from "recharts";

import { formatPercentage } from "@/lib/utils";
import { CategoryTooltip } from "@/components/category-tooltip";

const COLORS = ["#0062ff", "#12c6ff", "#ff647f", "#ff9354"];

type Props = {
    data: {
        name: string;
        value: number;
    }[];
};

export const RadialVariant = ({ data }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <RadialBarChart
                cx="50%"
                cy="30%"
                barSize={10}
                innerRadius="90%"
                outerRadius="40%"
                data={data.map((item, index) => ({
                    ...item,
                    fill: COLORS[index % COLORS.length]
                }))}
            >
                <Legend 
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="right"
                    iconType="circle"
                    content={({ payload }: any) => {
                        return (
                            <ul className="flex flex-col space-y-2">
                                {payload.map((entry: any, index: number) => (
                                    <li
                                       key={`item-${index}`}
                                       className="flex items-center space-x-2"
                                    >
                                        <span
                                            className="size-2 rounded-full"
                                            style={{ backgroundColor: entry.color }}
                                        />
                                        <div className="space-x-1">
                                            <span className="text-sm text-muted-foreground">
                                                {entry.value}
                                            </span>
                                            <span className="text-sm">
                                                {formatPercentage(entry.payload.percent * 100)}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    }}
                />
                <Tooltip content={<CategoryTooltip />} />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}