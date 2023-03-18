import { create } from "zustand"

interface FilterStore {
  keys: string[],
  setKeys: (keys: string[]) => void
}

export const useFilterStore = create<FilterStore>((set) => ({
  keys: [],
  setKeys(keys) {
    set({ keys })
  },
}))

export const keysSelector = (store: FilterStore) => store.keys
export const setKeysSelector = (store: FilterStore) => store.setKeys