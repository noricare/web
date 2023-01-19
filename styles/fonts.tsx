// font: italic bold 12px/30px Dotum, sans-serif

import css from '@emotion/css';

const fonts = {
  weight: {
    regular: 400,
    bold: 700,
  },

  size: {
    xxxLarge: '52px',
    xxLarge: '40px',
    xLarge: '36px',
    large: '32px',
    regular: '28px',
    xMedium: '24px',
    medium: '20px',
    small: '16px',
    xSmall: '14px',
    xxSmall: '12px',
  },

  lineHeight: {
    xxxxLarge: '58px',
    xxxLarge: '52px',
    xxLarge: '46px',
    xLarge: '42px',
    large: '38px',
    regular: '34px',
    xMedium: '28px',
    medium: '24px',
    small: '22px',
    xSmall: '20px',
    xxSmall: '18px',
  },
  letterSpacing: {
    regular: '-0.3px',
    large: '-0.6px',
  },
};

const display6 = css`
  font-size: ${fonts.size.xxxLarge};
  font-weight: ${fonts.weight.bold};
  line-height: ${fonts.lineHeight.xxxxLarge};
  letter-spacing: ${fonts.letterSpacing.regular};
`;

const display5 = css`
  font-size: ${fonts.size.xxLarge};
  font-weight: ${fonts.weight.bold};
  line-height: ${fonts.lineHeight.xxLarge};
  letter-spacing: ${fonts.letterSpacing.regular};
`;

const display4 = css`
  font-size: ${fonts.size.xLarge};
  font-weight: ${fonts.weight.bold};
  line-height: ${fonts.lineHeight.xLarge};
  letter-spacing: ${fonts.letterSpacing.regular};
`;

const display3 = css`
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  line-height: ${fonts.lineHeight.xLarge};
  letter-spacing: ${fonts.letterSpacing.regular};
`;

const display2 = css`
  font-size: ${fonts.size.regular};
  font-weight: ${fonts.weight.bold};
  line-height: ${fonts.lineHeight.large};
  letter-spacing: ${fonts.letterSpacing.regular};
`;

const display1 = css`
  font-size: ${fonts.size.xMedium};
  font-weight: ${fonts.weight.bold};
  line-height: ${fonts.lineHeight.regular};
  letter-spacing: ${fonts.letterSpacing.regular};
`;

const headline = css`
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.bold};
  line-height: ${fonts.lineHeight.xMedium};
`;

const subhead3 = css`
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.bold};
  line-height: ${fonts.lineHeight.small};
`;

const subhead2 = css`
  font-size: ${fonts.size.xSmall};
  font-weight: ${fonts.weight.bold};
  line-height: ${fonts.lineHeight.xSmall};
`;

const subhead1 = css`
  font-size: ${fonts.size.xxSmall};
  font-weight: ${fonts.weight.bold};
  line-height: ${fonts.lineHeight.xxSmall};
`;

const body2 = css`
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.regular};
  line-height: ${fonts.lineHeight.medium};
  letter-spacing: ${fonts.letterSpacing.large};
`;

const body1 = css`
  font-size: ${fonts.size.xSmall};
  font-weight: ${fonts.weight.regular};
  line-height: ${fonts.lineHeight.xSmall};
  letter-spacing: ${fonts.letterSpacing.large};
`;

const caption = css`
  font-size: ${fonts.size.xxSmall};
  font-weight: ${fonts.weight.regular};
  line-height: ${fonts.lineHeight.xxSmall};
  letter-spacing: ${fonts.letterSpacing.large};
`;

const typograph = {
  display6,
  display5,
  display4,
  display3,
  display2,
  display1,
  headline,
  subhead3,
  subhead2,
  subhead1,
  body2,
  body1,
  caption,
};

export type Fonts = typeof fonts;

export default typograph;
