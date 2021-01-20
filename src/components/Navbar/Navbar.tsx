import React, { useCallback, useEffect, useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { useHistory } from 'react-router-dom';

import { INavbar } from './types';
import { Container, Logo, MenuContainer } from './styles';
import { Select } from '..';
import { CategoryServices, SubCategoryServices } from 'services';
import { ICategory, ISubCategory } from 'services/products/types';

const Navbar = (props: INavbar) => {
  const history = useHistory();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [subCategories, setSubCategories] = useState<ISubCategory[]>([]);

  const fetchCategories = useCallback(async () => {
    const data = await CategoryServices.index();
    setCategories(data);
  }, []);

  const fetchSubCategories = useCallback(async () => {
    const data = await SubCategoryServices.index();
    setSubCategories(data);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchSubCategories();
  }, [fetchSubCategories]);

  return (
    <Container>
      <div>
        <Logo onClick={() => history.push('/')}>Vivi Magazine</Logo>
        <MenuContainer>
          <span>Entrar</span>
          <span>Cadastrar</span>
          <TiShoppingCart size={20} />
        </MenuContainer>
      </div>
      <div>
        {categories.map((category: ICategory, i: number) => (
          <Select
            key={i}
            label={category.name}
            options={subCategories
              .filter((s) => s.category === category.id)
              .map((s) => ({ label: s.name, path: '/#' }))}
          />
        ))}
      </div>
    </Container>
  );
};

export { Navbar };
