import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type CloseButtonProps = {
  onClose: () => void;
};

function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  );
}

export default CloseButton;
