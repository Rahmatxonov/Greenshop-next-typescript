interface ButtonType {
  title: string;
  icon?: any;
  iconPosition?: "prev" | "next";
  buttonWidth?: number;
  bgBtn: boolean;
}

export const Button: React.FC<ButtonType> = ({
  title,
  icon,
  iconPosition,
  buttonWidth,
  bgBtn,
}) => {
  return (
    <button
      style={{ width: `${buttonWidth}px` }}
      className={`${bgBtn ? "bg-transparent" : "bg-[#46A358]"} ${
        icon && iconPosition ? "py-[8px]" : "py-[10px]"
      }  hover:opacity-90 duration-300 rounded-[6px] flex items-center justify-center space-x-[4px]`}
    >
      {icon && iconPosition == "prev" && icon}
      <span
        className={`text-[12px] ${
          bgBtn
            ? "text-[#46A358] font-bold leading-[14px] "
            : "text-white font-medium leading-[20px]"
        }`}
      >
        {title}
      </span>
      {icon && iconPosition == "next" && icon}
    </button>
  );
};
