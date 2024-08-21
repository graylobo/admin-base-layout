"use client";
import CloseButton from "@/components/common/buttons/close-button";
import {
  ComponentSection,
  DefaultLayout,
  GlobalStyle,
  Title,
  TopSection,
  Wrapper,
} from "@/components/modal/base/style";
import { useModal } from "@/hooks/client/useModalStack";
import { useEffect, useState } from "react";

function BaseModal() {
  const { closeModal, currentModal, modalStack } = useModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(modalStack.some((modal) => modal.isOpen));
  }, [modalStack]);
  if (!currentModal || !currentModal.isOpen) return null;

  function handleClose() {
    closeModal();
  }

  return (
    <Wrapper>
      <DefaultLayout className="custom-scroll">
        {currentModal.title && (
          <TopSection>
            {currentModal.title && <Title>{currentModal.title}</Title>}
            <CloseButton onClose={handleClose} />
          </TopSection>
        )}

        <ComponentSection>{currentModal.element}</ComponentSection>
      </DefaultLayout>
      {isModalOpen && <GlobalStyle />}
    </Wrapper>
  );
}

export default BaseModal;
