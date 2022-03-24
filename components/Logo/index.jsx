import Link from "next/link";
import Image from "next/image";
// Images
import LogoImage from "../../public/images/logo.png";
const Logo = () => {
    return (
        <Link href="/">
            <a>
                <Image
                    src={LogoImage}
                    alt="Logo Djs"
                    width={272}
                    height={126}
                />
            </a>
        </Link>
    );
};

export default Logo;
