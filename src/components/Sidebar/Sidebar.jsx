import React from 'react';
import styled from 'styled-components';

import { ExpandButton } from '../Buttons';

const SidebarContainer = styled.aside`
  background-color: white;
  width: ${props => props.active ? '500px' : '33px'};
  min-height: 100vh;
  transition: width 1s ease;
  display: flex;
  flex-direction: row-reverse;
  padding: 20px 10px;
`;

const ButtonStyle = styled.div`

`;

export class Sidebar extends React.Component {
  state = {
    active: true,
  }

  toggleActive = () => {
    this.setState(previousState => (
      { active: !previousState.active }
    ));
  }

  render() {
    const { active } = this.state;

    return (
      <React.Fragment>
        <SidebarContainer active={active}>
          <ButtonStyle>
            <ExpandButton active={active} toggleActive={this.toggleActive} />
          </ButtonStyle>
          {active && 'blah'}
        </SidebarContainer>
      </React.Fragment>
    );
  }
}
