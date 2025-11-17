import { create } from "zustand";
import { createSettingsSlice, SettingsSlice } from "./session";

type AppStore = SettingsSlice;

export const useAppStore = create<AppStore>()((...a) => ({
  ...createSettingsSlice(...a),
}));
