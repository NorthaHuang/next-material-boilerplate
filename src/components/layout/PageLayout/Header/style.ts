import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default useStyles;
