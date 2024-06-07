import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

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