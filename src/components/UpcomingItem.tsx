import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'
export default function UpcomingItem() {
    return (
        <div className="upcoming-item">
            {/* eslint-disable-next-line */}
            <img
                src="/demo-1.jpg"
                alt=""
            />
            <div className="upcoming-item-content">
                <h5>Cronos Chimps</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <p><CalendarMonthRoundedIcon />March 23rd</p>
                <p><AccessTimeFilledRoundedIcon />5pm UTC</p>
            </div>
        </div>
    )
}