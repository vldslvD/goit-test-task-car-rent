import { Link, NavLink } from "react-router-dom";
import {
  Header,
  NavBar,
  NavList,
  NavListItem,
  NavLinkCustom,
  Container,
} from "./Navigation.styled";

const Navigation = () => {
  return (
    <Header>
      <Container>
        <NavBar>
          <NavList>
            <NavListItem>
              <NavLinkCustom to="/">Home</NavLinkCustom>
            </NavListItem>
            <NavListItem>
              <NavLinkCustom to="/catalog">Catalog</NavLinkCustom>
            </NavListItem>
            <NavListItem>
              <NavLinkCustom to="/favorites">Favorite cars</NavLinkCustom>
            </NavListItem>
          </NavList>
        </NavBar>
      </Container>
    </Header>
  );
};
export default Navigation;
