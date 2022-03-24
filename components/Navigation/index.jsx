import Link from "next/link";
const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link href="#">
                        <a>Puppies</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Process</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Meet The Parents</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="./faqs">
                        <a>FAQ’s</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
