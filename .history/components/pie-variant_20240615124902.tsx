import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip
} from "recharts";

import { formatPercentage } from "@/lib/utils";

const colors = ["#0062ff", "#12c6ff", "#ff647f", "#ff9354"];

type Props = {
    data: {
        name: string;
        value: number;
    }[];
};

