import React from "react";
import {RoomContext} from "../../Context";
import Title from "../Title/Title";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";

class FeaturedRoom extends React.Component {
    static contextType = RoomContext;


    render() {
        let {isLoading, featuredRooms: rooms} = this.context;
        rooms = rooms.map(room => {
                return <Room key={room.id} room={room}/>
            }
        );


        return (

            <section className='featured-rooms'>
                <Title title='Featured Rooms'/>
                <div className='featured-rooms-center'>
                    {isLoading ? <Loading/> : rooms}
                </div>
            </section>
        );
    }
}


export default FeaturedRoom;