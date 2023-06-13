import { styled } from '@mui/material/styles';
import Head from 'next/head';
import Navbar from '../components/Header/Header';

interface LayoutProps {
  children?: React.ReactNode;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale-1.0, width-device-width" />
      </Head>
      <Section>
        <Navbar />
        <Main>
          <ContentContainer>
            <Content>{children}</Content>
          </ContentContainer>
        </Main>
      </Section>
    </>
  );
}

const Section = styled('section')(({ theme }) => ({
  root: {
    background: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw',
  },
}));
const Main = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  paddingTop: 64,
});
const ContentContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});
const Content = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});
