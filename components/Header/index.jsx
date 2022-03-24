import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation";
import Logo from "../Logo";

// Images

import iconDate from "../../public/images/icon-date.png";
import iconDjs from "../../public/images/icon-djs.png";
import iconTicket from "../../public/images/icon-ticket.png";

export default function Header() {
    const router = useRouter();
    let headerBG = "";
    if (router.pathname === "/") {
        headerBG = "header__home";
    } else {
        headerBG = "header__inside";
    }
    return (
        <header className={`header ${headerBG}`}>
            <div className="header__box">
                <div className="header__top">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <Navigation />
                </div>
                {router.pathname === "/" && (
                    <div className="header__bottom">
                        <ul className="header__menuSecondary">
                            <li>
                                <figure>
                                    <Image
                                        src={iconDate}
                                        alt="Icon Djs"
                                        width={40}
                                        height={40}
                                    />
                                </figure>
                                <span className="uppercase">21 Sept 2018</span>
                            </li>
                            <li>
                                <figure>
                                    <Image
                                        src={iconDjs}
                                        alt="Icon Date"
                                        width={40}
                                        height={40}
                                    />
                                </figure>
                                <span className="uppercase">24 Djs</span>
                            </li>
                            <li>
                                <figure>
                                    <Image
                                        src={iconTicket}
                                        alt="Icon Tickets"
                                        width={40}
                                        height={40}
                                    />
                                </figure>
                                <span className="uppercase">21 Sept 2018</span>
                            </li>
                        </ul>
                    </div>
                )}
                {/* Validate if we are in the home and show the information */}
            </div>
        </header>
    );
}
