import { create } from "zustand";

type NewAccountState = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}