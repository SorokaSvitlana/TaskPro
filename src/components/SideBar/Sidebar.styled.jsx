import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

export const PlusIcon = styled.svg`
  width: 20px;
  height: 20px;
  background-color: transparent;
  color: #121212;
  &:hover {
    fill: #bedbb0;
  }
`;

export const HelpIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const LogoutIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

export const BoardsContainer = styled.div`
  position: relative;
`;

export const BoardsList = styled.ul`
  position: absolute;
  width: 123%;
  top: 0;
  left: -24px;
  gap: 4px;

  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BoardItem = styled.li`
  height: 61px;
  display: flex;
  align-items: center;
`;

export const BoardLink = styled(NavLink)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 20px;

  font-size: 14px;
  color: #161616;
  transition: color 200ms linear, background-color 200ms linear;

  text-decoration: none;

  &:hover,
  &:focus {
    background-color: #f6f6f7;
  }

  &.active {
    background-color: #f6f6f7;
  }

  &.active::after {
    position: absolute;
    top: 0;
    right: 1px;
    content: '';
    width: 4px;
    height: 100%;
    border-radius: 4px 0px 0px 4px;
    background: #bedbb0;
  }
`;
