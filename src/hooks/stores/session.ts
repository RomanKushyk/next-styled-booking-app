import { StateCreator } from "zustand";

export interface SettingsSlice {
  timeISO: string | null;
  setTimeISO: (timestamp: string) => void;
}

export const createSettingsSlice: StateCreator<
  SettingsSlice,
  [],
  [],
  SettingsSlice
> = (set) => ({
  timeISO: null,

  setTimeISO: (timeISO) => set({ timeISO }),
});
