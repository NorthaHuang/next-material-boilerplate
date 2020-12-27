import { Typography, Button } from '@material-ui/core';

import type { ErrorProps } from './type';

const Error: React.FC<ErrorProps> = ({ statusCode }) => (
  <>
    <Typography variant="h1">{statusCode}</Typography>
    <Typography variant="subtitle1">
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </Typography>

    <Button color="primary" variant="contained">
      <Typography variant="button">Take me back home</Typography>
    </Button>
  </>
);

export default Error;
