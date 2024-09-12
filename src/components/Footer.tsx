import Link from "next/link"
import Image from "next/image"
import { DiscordIcon, TwitterIcon } from "./svgIcons"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image
              src="/logo-footer.png"
              width={100}
              height={50}
              alt=""
            />
          </div>
          <div className="footer-link">
            <div className="footer-item">
              <p>Link</p>
              <ul>
                <li>
                  <Link href="/#">
                    <a>
                      Why Arena?
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>
                      Mint with us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>
                      Pricing
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>
                      FAQ
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <p>Company</p>
              <ul>
                <li>
                  <Link href="/#">
                    <a>
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>
                      Terms of Service
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <Link href="/#">
              <a>
                <DiscordIcon />
              </a>
            </Link>
            <Link href="/#">
              <a>
                <TwitterIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright" style={{ background: `url("/copyright-pattern.png") repeat-x`, backgroundPosition: "bottom" }}>
        <div className="container">
          <p>2022 Arena Launchpad, all rights reserved</p>
        </div>
      </div>
    </footer >
  )
}