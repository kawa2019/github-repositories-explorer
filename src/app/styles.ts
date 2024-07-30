import EStyleSheet from 'react-native-extended-stylesheet';

const CustomStyles = {
  $colorBgPrimary: '#13152C',
  $colorBrandPrimary: '#e7eaf0',

  $buttonBorderColor: '#ffffff',

  $headlineButtonSize: '2.5rem',

  $detailBottomWrapperBackgroundColor: '#25273C',

  $titleDetailFontSize: '3.5rem',

  $rem: 12,
  $defaultPadding: 12,

  '@media (min-width: 360)': {
    $rem: 14,
    $defaultPadding: 16,
  },
  '@media (min-width: 480)': {
    $rem: 16,
    $defaultPadding: 20,
  },
  // Note: extended stylesheet is not working for orientation change, so for tablets we are making just one font size
  '@media (min-width: 768)': {
    $rem: 18,
    $defaultPadding: 24,
  },
};

let Variables = {
  ...CustomStyles,
};
const getStyles = () => Variables;
const setStyles = (styles) => {
  Variables = { ...CustomStyles, ...styles };
  EStyleSheet.build(Variables);
};

export { getStyles, setStyles };

EStyleSheet.build(Variables);
