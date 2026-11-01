import type { ReactNode } from "react";
import "../styles/button.css";

type ButtonProp = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClickHandler?: () => void;
};

function Button({ children, type = "button", onClickHandler }: ButtonProp) {
  return (
    <button className="button" type={type} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
