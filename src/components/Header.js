import {useState} from 'react';

const Header = () => {
    const [video] = useState({
        url : '/assets/header.mp4'
    })
    return (
        <div className="header">
            <div className="header__video">
                <video src={video.url} autoPlay loop muted></video>
            </div>
        </div>
    );
}


export default Header;