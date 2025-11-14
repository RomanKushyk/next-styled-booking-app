export const DEVICE_SIZES = {
  mobile: 567,
  tablet: 768,
  tabletLarge: 992,
  desktop: 1200,
  desktopLarge: 1440,
};

export const SIZE = {
  mobile: "567px",
  tablet: "768px",
  tabletLarge: "992px",
  desktop: "1235px",
};

export const DEVICE = {
  mobile: `(max-width: ${SIZE.mobile})`,
  tablet: `(max-width: ${SIZE.tablet})`,
  tabletLarge: `(max-width: ${SIZE.tabletLarge})`,
  desktop: `(max-width: ${SIZE.desktop})`,
};
