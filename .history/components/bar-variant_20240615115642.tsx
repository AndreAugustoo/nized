import { format } from "date-fns";
import { CustomTooltip } from "@/components/custom-tooltip";
import {
    Tooltip,
    XAxis,
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid
} from "recharts";



type Props = {
    data?: {
        date: string;
        income: number;
        expenses: number;
    } [];
};