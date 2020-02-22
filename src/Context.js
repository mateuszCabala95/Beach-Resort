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
            rooms:rooms,
            featuredRooms:featuredRooms,
            sortedRooms:rooms,
            isLoading:false,
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

    render() {


        return (
            <RoomContext.Provider value={this.state}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }


}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext} ;