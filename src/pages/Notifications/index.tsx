import React, { useEffect } from 'react';

import Ad from 'components/Ad';
import {
  WrapperAd, Container, Aside, Core, AsideRight,
} from './styles';
import Left from './Left';
import Right from './Right';
import Main from './Main';

const Notification: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <WrapperAd>
      <Ad />
      <Container>
        <Aside>
          <Left />
        </Aside>
        <Core>
          <Main />
        </Core>
        <AsideRight>
          <Right />
        </AsideRight>
      </Container>
    </WrapperAd>
  );
};

export default Notification;
