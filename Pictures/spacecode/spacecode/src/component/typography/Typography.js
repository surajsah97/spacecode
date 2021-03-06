import { Typography } from "@material-ui/core";
const CustomTypography = (props) => {
  const {
    component,
    color,
    lineHeight,
    display,
    letterSpacing,
    fontWeight,
    fontSize,
    variant,
    p,
    pb,
    pt,
    pl,
    pr,
    mt,
    ml,
    mr,
    mb,
    m,
    onClick,
    children,

    className
  } = props;
  return (
    <Typography
      component={component}
      color={color}
      lineHeight={lineHeight}
      display={display}
      letterSpacing={letterSpacing}
      fontSize={fontSize}
      variant={variant}
      className={className}
      fontWeight={fontWeight}
      p={p}
      pb={pb}
      pt={pt}
      pl={pl}
      pr={pr}
      mt={mt}
      ml={ml}
      mr={mr}
      mb={mb}
      m={m}
      onClick={onClick}
      children={children}
    />
  );
};
export default CustomTypography;
