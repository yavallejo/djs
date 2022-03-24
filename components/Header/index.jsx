import { useRouter } from "next/router";
import Link from "next/link";
import Navigation from "../Navigation";
import Logo from "../Logo";

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
            <div className="header__logo">
                <Logo />
            </div>
            <Navigation />
        </header>
    );
}
