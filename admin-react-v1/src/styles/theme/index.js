import {
  grey600,
  grey700,
  grey800,

  redA100,
  redA200,
  redA400,

  white,
  fullWhite
} from 'material-ui/styles/colors';

import { fade } from './colorManipulator';

const themeDefault = {
  palette: {
    primary1Color: grey800,
    primary2Color: grey700,
    primary3Color: grey600,
    accent1Color: redA200,
    accent2Color: redA400,
    accent3Color: redA100,
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
  appBar: {
    height: 56,
    color: grey800
  },
  menuItem: {
    color: white,
    fontSize: 14
  },
  raisedButton: {
    primaryColor: grey800,
  }
};


export default themeDefault;