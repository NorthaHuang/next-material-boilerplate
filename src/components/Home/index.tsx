import Link from 'next/link';
import { Container, Typography, Button } from '@material-ui/core';

import type { HomeProps } from './type';

const Home: React.FC<HomeProps> = ({ launch }) => {
  const date = new Date();

  return (
    <Container>
      <Typography variant="h1">Hello Material UI!!</Typography>

      <Typography variant="h2">
        Next SpaceX Launch:
        {launch.mission}
      </Typography>

      <Typography variant="body1">
        {launch.rocket}
        <span>will take off from</span>
        {launch.site}
        {date.toDateString()}
      </Typography>

      <Link href="/404">
        <Button component="a" variant="contained" color="primary">
          <Typography variant="button">Go to 404 Page</Typography>
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
