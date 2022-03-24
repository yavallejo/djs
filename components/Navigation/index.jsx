import { useRouter } from "next/router";
import Link from "next/link";
const Navigation = () => {
    const router = useRouter();
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link href="/">
                        <a className={router.pathname == "/" ? "active" : ""}>
                            Wp Festival
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/djs">
                        <a
                            className={
                                router.pathname == "/djs" ? "active" : ""
                            }
                        >
                            DJS
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/presentations">
                        <a
                            className={
                                router.pathname == "/presentations"
                                    ? "active"
                                    : ""
                            }
                        >
                            Presentations
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a
                            className={
                                router.pathname == "/blog" ? "active" : ""
                            }
                        >
                            Blog
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a
                            className={
                                router.pathname == "/contact" ? "active" : ""
                            }
                        >
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
