import { DoubleNextIcon, SadEmojiIcon } from "./svgIcons";

export default function ItsEasy() {
    return (
        <section className="it-easy">
            <h2>It&#39;s as easy as</h2>
            <div className="it-easy-content">
                <div className="it-easy-item">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, st diam nonummy nibh euis</p>
                    <span className="hidden-mark">01</span>
                </div>
                <div className="next-icon">
                    <DoubleNextIcon />
                </div>
                <div className="it-easy-item">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, st diam nonummy nibh euis</p>
                    <span className="hidden-mark">02</span>
                </div>
                <div className="next-icon">
                    <DoubleNextIcon />
                </div>
                <div className="it-easy-item">
                    <h3>You&#39;re launched!</h3>
                    <p>Boom! Peple start flying in to mint your awesome new project, congrates!</p>
                    <span className="hidden-mark">03</span>
                    <span className="sad-emoji">
                        <SadEmojiIcon />
                    </span>
                    <span className="sad-emoji">
                        <SadEmojiIcon />
                    </span>
                </div>
            </div>
        </section>
    )
}