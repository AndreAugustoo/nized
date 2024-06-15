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

export const RadarVariant = ({ data }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="60%"
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis style={{ fontSize: "12px" }} dataKey="name" />
            </RadarChart>
        </ResponsiveContainer>
    )
}