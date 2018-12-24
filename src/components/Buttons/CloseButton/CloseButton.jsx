import React from 'react';
import styled from 'styled-components';

export const RoundButtonContainer = styled.div`
  border: 0 solid white;
  transition: transform 1s ease;
  font-size: 10px;
  width: 10px;
  height: 10px;
  padding: 3px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.7);
  }
`;

export const CloseButton = ({ closeWindow }) => (
  <RoundButtonContainer
    role="button"
    tabindex="0"
    onClick={e => closeWindow(e)}
  >
    ✖
  </RoundButtonContainer>
);
