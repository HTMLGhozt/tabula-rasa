import React from 'react';
import styled from 'styled-components';

import { ExpandButton } from '../Buttons';

const SidebarContainer = styled.aside`
  background-color: white;
  width: ${({ active }) => {
    if (active) {
      return '300px';
    }
    return '33px';
  }};
  min-height: 100vh;
  max-width: 300px;
  transition: width 1s ease;
  display: flex;
  flex-direction: row-reverse;
  padding: 20px 10px;
  @media (max-width: ${props => props.breakPoint}px) {
    width: 33px;
  }
`;

const UserCard = styled.section`
  width: 100%;
  padding: 15px 0;
  color: black;
  border: 1px solid black;
  height: 15px;
`;

export class Sidebar extends React.Component {
  state = {
    active: true,
  }

  breakPoint = 800;

  shouldComponentUpdate(nextProps, nextState) {
    const { active } = this.state;
    // if `active` has been toggled update.
    if (nextState.active !== active) {
      return true;
    }

    // if `nextProps.windowWidth` is undefined don't update.
    if (!nextProps.windowWidth) {
      return false;
    }

    const { windowWidth } = this.props;

    if (!windowWidth) {
      return true;
    }

    // if theres a difference in breakpoint sizes update.
    if (windowWidth < this.breakPoint && nextProps > this.breakPoint) {
      return true;
    }
    if (windowWidth > this.breakPoint && nextProps < this.breakPoint) {
      return true;
    }
    return false;
  }

  toggleActive = () => {
    this.setState(previousState => (
      { active: !previousState.active }
    ));
  }

  render() {
    const { active } = this.state;

    return (
      <SidebarContainer breakPoint={this.breakPoint} active={active}>
        <ExpandButton active={active} toggleActive={this.toggleActive} />
        {active && <UserCard>text</UserCard>}
      </SidebarContainer>
    );
  }
}
