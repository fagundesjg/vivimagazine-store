import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Container, OptionsContainer, Item } from "./styles";
import { ISelect, IOption } from "./types";

const Select = (props: ISelect) => {
  const { label, options } = props;
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {label}
      <MdKeyboardArrowDown size={20} />
      {isHover && options.length > 0 && (
        <OptionsContainer>
          {options.map((option: IOption, i: number) => (
            <Item key={i}>{option.label}</Item>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
};

export { Select };
