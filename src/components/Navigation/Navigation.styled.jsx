import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 10px;
  background-image: url(https://res.cloudinary.com/dzvkgqvvn/image/upload/v1701597625/cars/zscmbrmnwwn8nfntcymp.png);
  background-size: 60%;
  background-position: right 35% top 35%;
  background-repeat: no-repeat;

  border-bottom: 1px solid #e7e9fc;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 1184px;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const NavList = styled.ul`
  display: flex;
  color: var(--dark-text-color);
  font-weight: 500;
  margin-left: 80px;
`;

export const NavListItem = styled.li`
  background-color: #fff;
  border-radius: 10px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus {
    box-shadow: 2px 4px 16px 0px rgba(52, 112, 255, 0.7);
  }
`;

export const NavLinkCustom = styled(NavLink)`
  display: block;
  padding-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 24px;
  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
