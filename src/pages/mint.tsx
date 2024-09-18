import Link from "next/link";
import { useRouter } from "next/router";
import { CalendarIcon, ClockIcon, DiscordIcon, MoneyIcon, TwitterIcon } from "../components/svgIcons";

export default function Mint() {
    const router = useRouter()
    return (
        <div className="container">
            <div className="main">
                <div className="mint-page">
                    <div className="mint-media">
                        {/* eslint-disable-next-line */}
                        <img
                            src="/home-2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="mint-content">
                        <h2>CroBoys</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <h4><span><CalendarIcon /></span>March 23rd</h4>
                        <h4><span><ClockIcon /></span>5pm UTC</h4>
                        <h4><span><MoneyIcon /></span>1500 Cro</h4>
                        <div className="mint-actions">
                            <button className="button button-primary button-gradient">
                                Connect Wallet
                            </button>

                            <Link href="/#">
                                <a>
                                    <DiscordIcon color="white" size={30} />
                                </a>
                            </Link>
                            <Link href="/#">
                                <a>
                                    <TwitterIcon color="white" size={30} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
