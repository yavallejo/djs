import Link from "next/link";
import Image from "next/image";

// Images
import IconLinkedin from "../../public/images/linkedin-icon-1.png";
import IconFacebook from "../../public/images/facebook-icon-1.png";
import IconTwitter from "../../public/images/twitter-icon-1.png";
import IconInstagram from "../../public/images/instagram-icon-1.png";
export default function Footer() {
    return (
        <footer className="container mx-auto footer pt-9">
            <ul className="footer__top">
                <li>
                    <Link href="#">
                        <a>Puppies/Litters Available</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Meet The Parents</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Process</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>FAQ's</a>
                    </Link>
                </li>
            </ul>{" "}
            {/* Footer Top */}
            <div className="footer__bottom">
                <div className="footer__left">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a
                                className="text-primary-red"
                                href="mailto:info@goldcoastkennels.com"
                            >
                                info@goldcoastkennels.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+(361) 404-0224">(361) 404-0224</a>
                        </li>
                        <li className="socialShare">
                            <a href="#" target="_blank">
                                <Image
                                    src={IconLinkedin}
                                    alt="Linkedin"
                                    width={128}
                                    height={128}
                                />
                            </a>
                            <a href="#" target="_blank">
                                <Image
                                    src={IconFacebook}
                                    alt="Facebook"
                                    width={128}
                                    height={128}
                                />
                            </a>
                            <a href="#" target="_blank">
                                <Image
                                    src={IconTwitter}
                                    alt="Facebook"
                                    width={128}
                                    height={128}
                                />
                            </a>
                            <a href="#" target="_blank">
                                <Image
                                    src={IconInstagram}
                                    alt="Facebook"
                                    width={128}
                                    height={128}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__right">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link href="#">
                                <a>Terms & Conditions</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Accessibility Statement</a>
                            </Link>
                        </li>
                        <li>© 2022 All Rights Reserved</li>
                    </ul>{" "}
                    {/* Footer Bottom Menu */}
                </div>
            </div>
            {/* Footer Bottom */}
        </footer>
    );
}
