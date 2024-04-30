import { create } from "zustand";

type Store = {
  tab: number;
  changeTab: (newTab:number) => void;
};

const useActiveTabs = create<Store>()((set) => ({
  tab: 1,
  changeTab: (newTab:number) => set(() => ({ tab: newTab })),
  // changeTab: (newTab:number) => set((state) => ({ tab: newTab })),
}));

export default useActiveTabs;
