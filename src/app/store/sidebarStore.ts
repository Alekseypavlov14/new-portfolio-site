import { create } from 'zustand'

interface SidebarStore {
  isOpened: boolean
  openSidebar: () => void
  closeSidebar: () => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpened: false,
  openSidebar: () => set({ isOpened: true }),
  closeSidebar: () => set({ isOpened: false })
}))

export const isOpenedSelector = (store: SidebarStore) => store.isOpened
export const openSidebarSelector = (store: SidebarStore) => store.openSidebar
export const closeSidebarSelector = (store: SidebarStore) => store.closeSidebar