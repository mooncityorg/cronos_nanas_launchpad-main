import { useState } from "react"
import { Collapse } from "@mui/material"

export default function FaqItem(props: { question?: string, answer?: string, defaultState?: boolean }) {
    const [opened, setOpened] = useState(props.defaultState)
    return (
        <div className="faq-item" onClick={() => setOpened(!opened)}>
            <div className="faq-question">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <Collapse in={opened}>
                <div className="faq-answer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </Collapse>
        </div>
    )
}