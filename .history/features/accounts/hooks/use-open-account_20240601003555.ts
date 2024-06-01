import { create } from "zustand";

type OpenAccountState = {
    id?: string,
    isOpen: boolean;
    onOpen: (id: string) => void;
    onClose: () => void;
};

export const useOpenAccount = create<OpenAccountState>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))