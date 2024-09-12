import WhatWeDo from "../components/WhatWeDo";

export default function WhyArena() {
    return (
        <div className="main">
            <div className="container">
                <div className="why-arena">
                    <h1 className="page-title">Why go with <span>Arena?</span></h1>
                    <p className="page-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                    </p>
                </div>
                <WhatWeDo />
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