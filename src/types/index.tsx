export interface CustomInputProps {
  cancel?: boolean;
  className: string;
  placeholder: string;
  value?: string;
}

export interface HeaderProps {
  input?: boolean;
}

export interface CustomButtonProps {
  className?: string;
  title: any;
  onClick?: () => void;
  disabled?: boolean;
}

export interface BadgeProps {
  id: string;
  title: string;
}

export interface DialogModalProps {
  open: boolean;
  handleToggle: () => void;
  handleRating: (num: Number) => void;
  value: string;
  handleChange: (e: any) => void;
  onSubmit: () => void;
  disable: boolean;
  checked: boolean;
  onCheckbox: () => void;
}

export interface MainHeadProps {
  handleToggle: () => void;
  empty: boolean;
}

export interface ReviewProps {
  img: any;
  name: string;
  review: string;
  date: Number;
  rating: Number;
  comment: Number;
  likes: Number;
  unlike: Number;
}
