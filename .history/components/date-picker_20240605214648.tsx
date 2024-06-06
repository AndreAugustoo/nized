import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { SelectSingleEventHandler } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";

type Props = {
    value?: Date;
    onChange?: SelectSingleEventHandler;
    disabled?: boolean;
};

export const DatePicker = ({
    value,
    onChange,
    disabled,

}: Props) => {
    <Popover>
        <PopoverTrigger asChild>
            <Button
                disabled={disabled}
                variant="outline"
                className={cn(
                    "w-full justify-start text-left font-normal",
                    ! value && "text-muted-foreground",
                )}
            >

            </Button>
        </PopoverTrigger>
    </Popover>
}