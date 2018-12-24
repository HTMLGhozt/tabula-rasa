import React from 'react';

export const MainContext = React.createContext();

export class MainProvider extends React.Component {
  state = {
    notification: null,
  }

  clearNotification = () => {
    this.setState({ notification: null });
  }

  addNotification = (notification) => {
    this.setState({ notification });
  }

  render() {
    const {
      props: { children },
      state: { notification },
      clearNotification,
      addNotification,
    } = this;

    return (
      <MainContext.Provider
        value={{
          notification,
          clearNotification,
          addNotification,
        }}
      >
        {children}
      </MainContext.Provider>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
export class Container extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <MainContext.Consumer>
        {children}
      </MainContext.Consumer>
    );
  }
}
