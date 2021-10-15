import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import styled from 'styled-components';
import Header from '../components/Header';
import Logo from '../components/Logo';
import client from '../infrastructures/apollo/client';
import GlobalStyle from '../theme/BaseStyles';
import LayerLevel from '../theme/LayerLevel';
import theme from '../theme/theme';

const Container = styled.div`
  position: relative;
  z-index: ${LayerLevel.WRAPPER};
  background-color: ${theme.color.white};
`;

const Stripe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${LayerLevel.STRIPE};
  height: calc(100vh - 2rem);
  background-color: #4d6693;
  background-image: radial-gradient(50% 50%, #55759d 50%, #40557a 100%);
`;

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ApolloProvider client={client}>
      <Container>
        <GlobalStyle />
        <Stripe />
        <Header>
          <Logo />
        </Header>
        <Content>
          <Component {...pageProps} />
        </Content>
      </Container>
    </ApolloProvider>
  );
}

export default MyApp;
