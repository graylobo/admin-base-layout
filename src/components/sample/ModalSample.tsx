import React from "react";
import { useModal } from "@/hooks/client/useModalStack";
import { Button } from "@mui/material";
import CustomModalSample from "@/components/modal/CustomModalSample";
function ModalSample() {
  const { openModal, closeModal } = useModal();
  const onModalClick = () => {
    openModal({
      title: "Modal1",
      element: <CustomModalSample />,
      handleConfirm(...args) {
        window.alert(args);
        closeModal();
      },
    });
  };
  return (
    <section className="mt-10 border border-black-100 p-5">
      <Button onClick={onModalClick}>모달 열기</Button>
    </section>
  );
}

export default ModalSample;
