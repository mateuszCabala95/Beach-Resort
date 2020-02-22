import React from "react";
import items from '../src/data';


const RoomContext = React.createContext();


class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        isLoading: true,
    };

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms: rooms,
            featuredRooms: featuredRooms,
            sortedRooms: rooms,
            isLoading: false,
        })
    }


    formatData = (item) => {
        let tepmItem = items.map(item => {
            let id = item.sys.id;
            let img = item.fields.images.map(img => img.fields.file.url);
            let room = {
                ...item.fields, images: img, id
            };
            return room;
        });
        return tepmItem;
    };

    getRoom = (slug) => {
let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };

    render() {


        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }


}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext} ;