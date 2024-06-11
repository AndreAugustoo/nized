import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"
import { eachDayOfInterval } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function convertAmountToMiliunits(amount: number) {
  return Math.round(amount * 1000);
};

export function convertAmountFromMiliunits(amount: number) {
  return amount / 1000;
};

export function formatCurrency(value: number){
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
};

export function calculatePercentageChange(
  current: number,
  previous: number,
) {
  if (previous === 0) {
    return previous === current ? 0 : 100;
  }

  return ((current - previous) / previous) * 100;
};

export function FillMissingDays(
  activeDays: {
    date: Date,
    income: number,
    expenses: number,
  }[],
  startDate: Date,
  endDate: Date,
) {
  if (activeDays.length === 0) {
    return [];
  }

  const allDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
}