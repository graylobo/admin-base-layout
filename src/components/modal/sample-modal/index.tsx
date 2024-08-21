import { useModal } from "@/hooks/client/useModalStack";
import styled from "@emotion/styled";
import { Button, Input } from "@mui/material";
import React, { useState } from "react";

function SampleModal() {
  const { currentModal, openModal, closeModal } = useModal();
  const [value, setValue] = useState("");
  const onModalClick = () => {
    openModal({
      title: "Modal2",
      element: <div>Modal2</div>,
    });
  };

  return (
    <Wrapper>
      <h1>Sample Modal</h1>
      <Button className="block" onClick={onModalClick}>
        모달 내에서 모달 열기
      </Button>
      <Input onChange={(e) => setValue(e.target.value)} />
      <Button
        onClick={() => {
          currentModal?.handleConfirm?.(value);
        }}
      >
        값 반환
      </Button>
    </Wrapper>
  );
}

export default SampleModal;

const Wrapper = styled.div`
  inset: 0px;
  z-index: 9999;
  padding: 30px;
  width: 100%;
  backdrop-filter: blur(10px);
`;
