import { set } from "zod";
import { create } from "zustand";

type SampleState = {
    sample1: number;
    sample2: ObjectSample;
    sample3: string[];
    addSample1: (sample1: string) => void;
    addSample2: (sample2: ObjectSample) => void;
    addSample3: (sample3: string) => void;
};
type ObjectSample = {
    name: string;
    age: string;
};
export const useSample = create<SampleState>((set) => ({
    sample1: 0,
    sample2: {
        name: "",
        age: "",
    },
    sample3: [],
    addSample1: (sample1) => set((state) => ({ sample1: state.sample1 + 1 })),

    addSample2: (sample2) =>
        set((state) => ({
            sample2: { ...state.sample2, ...sample2 },
        })),
    addSample3: (sample3) =>
        set((state) => ({ sample3: [...state.sample3, sample3] })),
}));
