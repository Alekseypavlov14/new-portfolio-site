import { create } from 'zustand'

interface FilterStore {
  technologies: string[],
  setTechnologies: (technologies: string[]) => void
}

export const useFilterStore = create<FilterStore>((set) => ({
  technologies: [],
  setTechnologies(technologies) {
    set({ technologies })
  },
}))

export const technologiesSelector = (store: FilterStore) => store.technologies
export const setTechnologiesSelector = (store: FilterStore) => store.setTechnologies