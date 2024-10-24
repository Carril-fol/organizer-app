import { Image } from "@nextui-org/react";
import logo from "../../assets/images/logo.webp";

const Logo = ({ width, height }) => {
    return (
        <Image
            src={logo}
            width={width}
            height={height}
        />
    );
}
export default Logo;