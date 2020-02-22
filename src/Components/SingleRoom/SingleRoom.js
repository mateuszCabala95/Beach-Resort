import React from "react";
import defaultBcg from '../../images/room-1.jpeg';
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import Link from "react-router-dom/modules/Link";
import {RoomContext} from '../../Context'


class SingleRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg,
        }
    }

    static contextType = RoomContext;


    render() {
        const {getRoom} = this.context;
        const name = getRoom(this.state.slug);
        console.log(name);

        if (!name) {
            return <div className="error">
                <h3>No such room could be found</h3>
                <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
            </div>
        }
        const { description, capacity, size, price, extras, breakfast, pest, images} = this.context.room;
        return (

            <Hero hero='roomsHero'>
                <Banner title={`${name} room`}/>
                <Link to='/rooms' className='btn-primary'>back to rooms</Link>
            </Hero>
        );

    }


}

export default SingleRoom;