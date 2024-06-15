"use client";

import qs from "query-string";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { format, subDays } from "date-fns";
import { DateRange } from "react-day-picker";

import {
    usePathname,
    useRouter,
    useSearchParams
} from "next/navigation";

import { useGetSummary } from "@/features/summary/api/use-get-summary";

import { Button } from "@/components/ui/button";
import { cn, formatDateRange } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export const DateFilter = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    disabled={false}
                    size="sm"
                    variant="outline"
                    className="lg:w-auto w-full h-9 rounded-md px-3 font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus:ring-offset-0 focus:ring-transparent outline-none text-white focus:bg-white/30 transition"
                >

                </Button>
            </PopoverTrigger>
        </Popover>
    );
};