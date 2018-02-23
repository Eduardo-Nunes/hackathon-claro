import {spacing, typography} from 'material-ui/styles';
import theme from '../../styles/theme';

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 22,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: theme.palette.primary1Color,
    paddingLeft: 20,
    height: 56,
  },
  avatar: {
    div: {
      paddingLeft: 20,
      backgroundColor: theme.palette.primary1Color,
      height: 45
    },
    icon: {
      float: 'left',
      display: 'block',
      marginRight: 15,
      boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
    },
    span: {
      paddingTop: 12,
      display: 'block',
      color: 'white',
      fontWeight: 300,
      textShadow: '1px 1px #444'
    }
  }
};

export default styles;