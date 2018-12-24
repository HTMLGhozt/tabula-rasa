import React from 'react';

import { CloseButton } from '../Buttons';
import { NotificationContainer, NotificationText, LoadingBar } from './NotificationStyles';

export class NotificationCard extends React.PureComponent {
  loadingAnimationLength = 10000;

  componentDidMount() {
    const { clearNotification } = this.props;
    this.timeoutID = setTimeout(
      () => clearNotification(),
      this.loadingAnimationLength,
    );
  }

  componentWillUnmount() {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
  }

  render() {
    const { notification, clearNotification } = this.props;

    return (
      <NotificationContainer
        className="notification"
      >
        <CloseButton closeWindow={clearNotification} />
        <NotificationText>{notification}</NotificationText>
        <LoadingBar loadingAnimationLength={this.loadingAnimationLength} />
      </NotificationContainer>
    );
  }
}
