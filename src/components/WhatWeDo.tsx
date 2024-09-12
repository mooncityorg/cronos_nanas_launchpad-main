import ItsEasy from './ItsEasy';
import { WorldIcon } from './svgIcons';

export default function WhatWeDo() {
    return (
        <div className="what-we-do">
            <h2 className="sub-title text-center">What we do</h2>
            <div className="what-we-do-content">
                {contents.map((item, key) => (
                    <div className="what-item" key={key}>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <span className="item-pattern">
                            <WorldIcon />
                        </span>
                    </div>
                ))}
            </div>
            <ItsEasy />
        </div>
    )
}

const contents = [
    {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed siam nonummy nigh euis."
    },
    {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed siam nonummy nigh euis."
    },
    {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed siam nonummy nigh euis."
    },
    {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed siam nonummy nigh euis."
    },
    {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed siam nonummy nigh euis."
    },
    {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed siam nonummy nigh euis."
    },
]