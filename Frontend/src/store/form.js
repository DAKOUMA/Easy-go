import dayjs from "dayjs";
import { create } from "zustand";


export const useInputStore = create((set) => ({
    brand: "",
    date: "",
    price: "",
}))