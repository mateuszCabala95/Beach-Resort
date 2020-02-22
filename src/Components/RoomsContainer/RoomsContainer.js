import React from "react";
import RoomsFilter from "../RoomsFilter/RoomsFilter";
import RoomsList from "../RoomsList/RoomsList";
import {withRoomConsumer} from "../../Context";
import Loading from "../Loading/Loading";

const RoomConsumer = ({context}) => {

    const {isLoading, rooms, sortedRooms} = context;

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    return (
        <div>
            Hello From Rooms Container
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
};

export default withRoomConsumer(RoomConsumer);
