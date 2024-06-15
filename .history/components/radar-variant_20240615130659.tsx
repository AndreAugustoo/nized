import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer
} from "recharts";

type Props = {
    data: {
        name: string;
        value: number;
    }[];
};