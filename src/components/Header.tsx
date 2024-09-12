import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link href="/">
              <a>
                <Image
                  width={29}
                  height={42}
                  src="/logo.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className={`header-nav display-center ${!open ? "nav-hidden" : ""}`}>
            <ul>
              <li>
                <Link href="/why-arena">
                  <a>Why Arena?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Upcoming</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-action">
            <button className="button button-primary" onClick={() => router.push("/mint")}>
              Mint with us
            </button>
            <div className="mobile-trigger">
              <IconButton onClick={() => setOpen(!open)}>
                {!open ?
                  <MenuRoundedIcon style={{ fill: "#fff" }} />
                  :
                  <CloseRoundedIcon style={{ fill: "#fff" }} />
                }
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}