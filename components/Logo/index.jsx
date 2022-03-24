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
                    alt="Linkedin"
                    width={504}
                    height={128}
                />
            </a>
        </Link>
    );
};

export default Logo;
