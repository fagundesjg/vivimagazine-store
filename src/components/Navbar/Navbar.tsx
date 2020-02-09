import React from "react";
import { TiShoppingCart } from "react-icons/ti";

import { INavbar, IItem } from "./types";
import { Container, Logo, MenuContainer } from "./styles";
import { Select } from "..";

const options: IItem[] = [
  {
    path: "",
    label: "Natura",
    items: [
      { path: "", label: "Perfumes" },
      { path: "", label: "Desodorantes" },
      { path: "", label: "Cremes" }
    ]
  },
  { path: "", label: "Avon", items: [] },
  { path: "", label: "Boticário", items: [] },
  { path: "", label: "Romanel", items: [] },
  { path: "", label: "Kit Presente", items: [] }
];

const Navbar = (props: INavbar) => {
  return (
    <Container>
      <div>
        <Logo>Vivi Magazine</Logo>
        <MenuContainer>
          <span>Entrar</span>
          <span>Cadastrar</span>
          <TiShoppingCart size={20} />
        </MenuContainer>
      </div>
      <div>
        {options.map((option: IItem, i: number) => (
          <Select label={option.label} options={option.items} />
        ))}
      </div>
    </Container>
  );
};

export { Navbar };
