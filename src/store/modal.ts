import { create } from "zustand";

export type ButtonDirection = "vertical" | "horizontal" | undefined;
export interface ModalState {
  title?: string;
  buttonDirection?: ButtonDirection;
  isOpen?: boolean;
  element?: JSX.Element | null;
  handleConfirm?: (...args: any[]) => any;
  data?: any; // stack 내 각 modal별로 가지는 data
}

interface ModalStore {
  modalStack: ModalState[];
  globalModalData: any;
  openModal: (modalConfig: ModalState) => void;
  closeModal: () => void;
  setCurrentModalData: (data: any) => void;
  setGlobalModalData: (data: any) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalStack: [],
  globalModalData: {},
  openModal: (modalConfig) =>
    set((state) => ({
      modalStack: [...state.modalStack, { ...modalConfig, isOpen: true }],
    })),
  closeModal: () =>
    set((state) => ({
      modalStack: state.modalStack.slice(0, -1),
    })),
  setCurrentModalData: (data) =>
    set((state) => ({
      modalStack: state.modalStack.map((modal, index) => {
        if (index === state.modalStack.length - 1) {
          return { ...modal, data };
        }
        return modal;
      }),
    })),
  setGlobalModalData: (data) => set(() => ({ globalModalData: data })),
}));
