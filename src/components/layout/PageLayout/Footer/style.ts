import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    borderTop: `1px solid ${palette.primary[palette.mode]}`,
  },
}));

export default useStyles;
