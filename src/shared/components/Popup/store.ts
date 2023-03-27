import { create } from "zustand"

interface PopupStore {
  isOpened: boolean
  openPopup: () => void
  closePopup: () => void
}

export function createPopupStore() {
  return create<PopupStore>((set) => ({
    isOpened: false,
    openPopup: () => set({ isOpened: true }),
    closePopup: () => set({ isOpened: false })
  }))
}

export const isOpenedSelector = (store: PopupStore) => store.isOpened
export const openPopupSelector = (store: PopupStore) => store.openPopup
export const closePopupSelector = (store: PopupStore) => store.closePopup