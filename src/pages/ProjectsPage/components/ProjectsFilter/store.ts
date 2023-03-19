import { ProjectEntity } from '@entities/projects'
import { create } from 'zustand'

interface SearchStore {
  result: ProjectEntity[]
  updateResult: (projects: ProjectEntity[]) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
  result: [],
  updateResult(result) {
    set({ result })
  }
})) 

export const resultSelector = (store: SearchStore) => store.result
export const updateResultSelector = (store: SearchStore) => store.updateResult