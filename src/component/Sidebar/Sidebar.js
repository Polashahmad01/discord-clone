import React, { useState, useEffect} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import db, { auth } from '../firebase/firebase';

const Sidebar = () => {
    const user = useSelector(selectUser);
    const [ channels, setChannels ] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        ))
    }, [])

    const addChannelHandler = () => {
        const channelName = prompt("Enter a channel name");

        if(channelName) {
            db.collection('channels').add({
                channelName: channelName
            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Dev Community</h3>
                <IconButton>
                    <ExpandMoreIcon className="sidebar__topIcon" />
                </IconButton>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <IconButton>
                            <ExpandMoreIcon className="sidebar__headerIcon" />
                        </IconButton>
                        <h4>Test Channels</h4>
                    </div>
                    <IconButton>
                        <AddIcon onClick={addChannelHandler} className="sidebar__addChannel" />
                    </IconButton>
                </div>
                    <div className="sidebar__channelLists">
                    {channels.map(({channel, id}) => (
                        <SidebarChannel 
                            id={id} 
                            channelName={channel.channelName}
                            key={id}
                            id={id}
                        />
                    ))}
                </div>
            </div>
            <div className="sidebar__voice">
                <IconButton>
                    <SignalCellularAltIcon 
                        className="sidebar__voiceIcon"
                        fontSize="large"
                    />
                </IconButton>
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <IconButton>
                        <InfoOutlinedIcon className="sidebar__voiceTwoIcon"/>
                    </IconButton>
                    <IconButton>
                        <CallIcon className="sidebar__voiceTwoIcon"/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__profile">
                <IconButton>
                    <Avatar onClick={() => auth.signOut()} className="sidebar__profileAvatar" src={user?.photo} />
                </IconButton>
                <div className="sidebar__profileInfo">
                    <h3>{user?.displayName}</h3>
                    <p>#{user?.uid.substring(0, 5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <IconButton>
                        <MicIcon  className="sidebar__profileThreeIcons"/>
                    </IconButton>
                    <IconButton>
                        <HeadsetIcon  className="sidebar__profileThreeIcons"/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon  className="sidebar__profileThreeIcons"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
