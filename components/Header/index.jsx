import Link from "next/link";
import Navigation from "../Navigation";
import Logo from "../Logo";

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <Logo />
            </div>
            <Navigation />
            <div className="header__contact">
                <Link href="#">
                    <a className="btn btn--primary">Contact</a>
                </Link>
            </div>
        </header>
    );
}
