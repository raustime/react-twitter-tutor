import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import SidebarOption from './SidebarOption';
import {Button} from '@material-ui/core';
import './Sidebar.css';


function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className='sidebar__twitterIcon'/>
            <SidebarOption  active text="Home" Icon={HomeIcon}/>
            <SidebarOption  text="Explore" Icon={SearchIcon}/>
            <SidebarOption  text="Notification" Icon={NotificationsNoneIcon}/>
            <Button variant="outlined" fullWidth className="sidebar--tweet">Tweet</Button>          
        </div>
    );
}

export default Sidebar;