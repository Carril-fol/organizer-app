import { Image } from "@nextui-org/react";
import logo from "../../assets/images/logo-black.webp";

const LogoInBlack = ({ width, height }) => {
  return (
    <Image
      src={logo}
      width={width}
      height={height}
    />
  );
}
export default LogoInBlack;