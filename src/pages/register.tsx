import { useState } from "react"
import { Collapse } from "@mui/material"
import CustomCalandar from "../components/CustomCalandar"

export default function Register() {
    const [collectionName, setCollectionName] = useState("")
    const [abbreviation, setAbbreviation] = useState("")
    const [supply, setSupply] = useState("")
    const [royalty, setRoyalty] = useState("")
    const [isMetadata, setIsMetadata] = useState(true)
    const [isImageDone, setIsImageDone] = useState(true)
    const [dateTime, setDateTime] = useState(new Date())
    const [beWhitelist, setBeWhitelist] = useState(true)
    const [WLSpots, setWLSpots] = useState(0)

    const handleName = (e: any) => {
        setCollectionName(e.target.value)
    }
    return (
        <div className="main">
            <div className="container">
                <section className="signup">
                    <div className="signup-intro">
                        <h1>Simple fill<br /> out this <span>form</span> to sign up</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className="signup-form">
                        <h2>Sign up form</h2>
                        <div className="form-control">
                            <input
                                placeholder="Collection name*"
                                value={collectionName}
                                onChange={(e) => handleName(e)}
                            />
                        </div>
                        <div className="form-control">
                            <input
                                placeholder="Project abbreviation*"
                                value={abbreviation}
                                onChange={(e) => setAbbreviation(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <input
                                placeholder="Supply*"
                                value={supply}
                                onChange={(e) => setSupply(e.target.value)}
                                style={{ width: 90, marginRight: 12 }}
                            />
                            <input
                                placeholder="Royalty Percent*"
                                value={royalty}
                                onChange={(e) => setRoyalty(e.target.value)}
                                style={{ width: 140 }}
                            />
                        </div>
                        <div className="form-control">
                            <p>Is the metadata done?*</p>
                            <div className="form-action">
                                <button className={isMetadata ? "active" : ""} onClick={() => setIsMetadata(true)}>
                                    Yes
                                </button>
                                <button className={!isMetadata ? "active" : ""} onClick={() => setIsMetadata(false)}>
                                    No
                                </button>
                            </div>
                        </div>
                        <div className="form-control">
                            <p>Is the Image Generation done?*</p>
                            <div className="form-action">
                                <button className={isImageDone ? "active" : ""} onClick={() => setIsImageDone(true)}>
                                    Yes
                                </button>
                                <button className={!isImageDone ? "active" : ""} onClick={() => setIsImageDone(false)}>
                                    No
                                </button>
                            </div>
                        </div>
                        <div className="">
                            {/* <div className="form-control"> */}
                            <CustomCalandar />
                            {/* <p>Date/Time of requested Mint Date*</p>
                            <div className="form-action">
                                <button className="open-calandar" onClick={() => setIsImageDone(true)}>
                                    Open Calandar
                                </button>
                            </div> */}
                        </div>
                        <div className="form-control">
                            <p>Will there be Whitelist?*</p>
                            <div className="form-action">
                                <button className={beWhitelist ? "active" : ""} onClick={() => setBeWhitelist(true)}>
                                    Yes
                                </button>
                                <button className={!beWhitelist ? "active" : ""} onClick={() => setBeWhitelist(false)}>
                                    No
                                </button>
                            </div>
                        </div>
                        <Collapse in={beWhitelist}>
                            <div className="form-control">
                                <input
                                    placeholder="If so, how many WL spots?"
                                    value={abbreviation}
                                    onChange={(e) => setAbbreviation(e.target.value)}
                                />
                            </div>
                        </Collapse>
                    </div>
                </section>
            </div>
        </div>
    )
}