import { Image } from "@nextui-org/react";
import logo from "/images/logo-white.webp";

const LogoInWhite = ({ width, height }) => {
  return (
    <Image
      src={logo}
      width={width}
      height={height}
    />
  );
}

export default LogoInWhite;