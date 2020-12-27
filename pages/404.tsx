import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Button, Typography } from '@material-ui/core';

import PageLayout from '@components/layout/PageLayout';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Something went wrong</title>
      </Head>

      <PageLayout>
        <Container>
          <Typography variant="h1">404</Typography>
          <Typography variant="subtitle1">Oops... Page not found!</Typography>

          <Link href="/">
            <Button component="a" color="primary" variant="contained">
              <Typography variant="button">Take me back home</Typography>
            </Button>
          </Link>
        </Container>
      </PageLayout>
    </>
  );
};

export default Custom404;
