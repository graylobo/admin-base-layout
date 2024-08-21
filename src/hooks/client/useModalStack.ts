import { useModalStore } from "@/store/modal";

export function useModal() {
  const {
    modalStack,
    openModal,
    closeModal,
    setGlobalModalData,
    setCurrentModalData,
    globalModalData,
  } = useModalStore();

  /** 현재 stack 내에서 활성화된 modal */
  const currentModal = modalStack[modalStack.length - 1];

  return {
    openModal,
    closeModal,
    modalStack,
    setGlobalModalData,
    setCurrentModalData,
    globalModalData,
    currentModal,
  };
}
