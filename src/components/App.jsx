import React from 'react';

import { NotificationCard } from './Notifications';
import { MainProvider, Container } from './Container';
import { Sidebar } from './Sidebar';

import { PageContainer, AppHeader } from './AppStyles';


export class App extends React.PureComponent {
  state = {}

  render() {
    return (
      <MainProvider>
        <Container>
          {(({ notification, clearNotification }) => (
            notification
            && <NotificationCard {...{ notification, clearNotification }} />
          ))}
        </Container>
        <PageContainer className="App">
          <AppHeader className="App-header">
            test
          </AppHeader>
          <Container>
            {({ windowWidth }) => (
              <Sidebar {...{ windowWidth }} />
            )}
          </Container>
        </PageContainer>
      </MainProvider>
    );
  }
}
