import { useState } from "react";
import Select from "react-select";
import { DropdownContainer } from "./Dropdown.styled";

const Dropdown = ({ options, selected, onChange }) => {
  const selectStyles = (open) => ({
    singleValue: (provided) => ({
      ...provided,
      color: "#121417",
      fontSize: 18,
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: 0,
      borderwidth: 10,
      fontSize: "16px",
      overflow: "hidden",
      color: "rgba(18, 20, 23, 0.20);",
      opacity: open ? 1 : 0,
      transition: "all .2s ease-in-out",
      visibility: open ? "visible" : "hidden",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (provided) => ({
      ...provided,
      transform: open ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
    menuList: (provided) => ({
      ...provided,

      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "rgba(18, 20, 23, 0.05)",
        borderRadius: "12px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    }),
  });
  const [open, setOpen] = useState(false);

  return (
    <DropdownContainer onClick={() => setOpen(!open)}>
      <Select
        defaultValue={selected}
        options={options}
        onChange={onChange}
        onBlur={() => setOpen(false)}
        menuIsOpen
        styles={selectStyles(open)}
        isClearable
      ></Select>
    </DropdownContainer>
  );
};
export default Dropdown;
