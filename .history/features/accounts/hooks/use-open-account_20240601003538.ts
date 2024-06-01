import { create } from "zustand";

type OpenAccountState = {
    id?: string,
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useOpenAccount = create<OpenAccountState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))