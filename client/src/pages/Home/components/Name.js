import "../Home.css";
import background from '../../../images/background.jpeg';
import avatar from "../../../images/avatar.jpeg"
import { Avatar } from "@mui/material";

function Name() {
    return(
        <div className='Name-parent'>
            <img src={background} className='Name-bg'/>
            
            <Avatar
                alt="Vieri Harney"
                src={avatar}
                className="Avatar-vh"
            >
            VH
            </Avatar>

            <h1 className="display-2">
                VIERI HARNEY
                <br/>
                <small className="text-muted bg-gradient bg-dark p-2  Title-bg">Software Engineer</small>
            </h1>
        </div>
    );
}

export default Name;