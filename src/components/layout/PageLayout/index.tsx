import Header from './Header';
import Footer from './Footer';
import useStyles from './style';

const PageLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <main className={classes.main}>{children}</main>

      <Footer />
    </div>
  );
};

export default PageLayout;
