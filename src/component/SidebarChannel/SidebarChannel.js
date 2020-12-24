import React from 'react'
import { useDispatch } from 'react-redux';

import './SidebarChannel.css';
import { setChannelInfo } from '../features/appSlice';

const SidebarChannel = ({ id, channelName}) => {
    const dispatch = useDispatch();

    const setChannel = () => {
        dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName,
        }))
    }

    return (
        <div onClick={setChannel} className="sidebarChannel">
            <h4>
                <span className="sidebarChannel__hash">
                    #
                </span>
                {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
