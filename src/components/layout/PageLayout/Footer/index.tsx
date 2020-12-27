import { Container, Typography } from '@material-ui/core';

import useStyles from './style';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <Typography variant="subtitle2">This is Footer</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
