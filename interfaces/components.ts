export interface IConfirmModalProps {
  open: boolean;
  type: "success" | "error";
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface IIconProps {
  size?: number;
  className?: string;
}

export interface IErrorAlert {
  type: "success" | "error";
  message: string;
}
