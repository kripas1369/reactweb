import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray100:
    "bg-white_A700 border-[1px] border-bluegray_100 border-solid",
  FillGray52: "bg-gray_52",
  srcOutlineBluegray100:
    "bg-white_A700 border-[1px] border-bluegray_100 border-solid",
};
const shapes = {
  RoundedBorder10: "rounded-[10px]",
  srcRoundedBorder10: "rounded-[10px]",
};
const sizes = {
  sm: "pt-[6px]",
  md: "pb-[12px] pt-[15px] px-[12px]",
  lg: "pr-[16px] py-[17px]",
  xl: "py-[17px]",
  "2xl": "pb-[14px] pl-[14px] pt-[20px]",
  smSrc: "pb-[14px] pt-[20px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder10", "srcRoundedBorder10"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "FillGray52",
    "srcOutlineBluegray100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "smSrc"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "lg",
};

export { Input };
