import { format } from "date-fns";

import {
    Tooltip,
    XAxis,
    AreaChart,
    Area,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

type Props = {
    data: {
        date: string;
        income: number;
        expenses: number;
    } [];
};