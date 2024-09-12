import Link from "next/link";
import { DiscordIcon, TwitterIcon } from "../components/svgIcons";

export default function ContractUs() {
    return (
        <div className="main">
            <div className="container">
                <div className="contact-us">
                    <h1 className="page-title">We&#39;re here to <span>help</span></h1>
                    <p className="page-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <h5>Help@ArenaLaunchpad.com</h5>
                    <div className="social-link">
                        <Link href="/#">
                            <a>
                                <DiscordIcon color="white" size={40} />
                            </a>
                        </Link>
                        <Link href="/#">
                            <a>
                                <TwitterIcon color="white" size={40} />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            {/* eslint-disable-next-line */}
            <img
                src="/contact-pattern.png"
                className="contact-pattern"
                alt=""
            />
        </div>
    )
}