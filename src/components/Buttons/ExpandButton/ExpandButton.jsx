import React from 'react';
import styled from 'styled-components';

const HamburgerContainer = styled.div`
  margin-left: 10px;
  cursor: pointer;
  marginTop: 10px;
  height: 100px;
`;

const Hamburger = styled.span`
  display: block;
  width: 30px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #282c34;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    opacity 0.55s ease;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  &.checked {
    opacity: 1;
    transform: rotate(40deg) translate(-6px, -1px);
    background: #282c34;

    &:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    &:nth-last-child(2) {
      transform: rotate(-40deg) translate(-3.7px, -1px);
    }
  }
`;

export const ExpandButton = ({ active, toggleActive }) => (
  <HamburgerContainer onClick={() => toggleActive()}>
    <Hamburger className={active && 'checked'} />
    <Hamburger className={active && 'checked'} />
    <Hamburger className={active && 'checked'} />
  </HamburgerContainer>
);
