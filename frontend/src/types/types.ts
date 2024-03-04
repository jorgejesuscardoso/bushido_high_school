interface CreateUserModel {
  username: string;
  email: string;
  password: string;
  role_id: number;
}

interface LoginUserModel {
  email: string;
  password: string;
}

export interface ImageFrameProps {
  id?: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  slideLength?: number;
  activeId?: number;
  show?: string;
  setCount?: (count: number) => void;
  ref?: React.RefObject<HTMLImageElement>;
}

export type FloatNavButtonsProps = {
  handleCloseMenus: (event: React.MouseEvent | MouseEvent) => void;
  handleNewsMenu: () => void;
  handleMatricMenu: () => void;
  handleCalendarMenu: () => void;
  roler_id: number;
};