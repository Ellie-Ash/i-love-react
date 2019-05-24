import React, { Component } from 'react'
import LocationIcon from "./LocationIcon.svg"
import "./Location.css"

export default class LocationsList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                //     <div key={location.id}>
                //         {location.address}
                //         {" "}
                //         {location.name}
                //         <button onClick={() => this.props.deleteLocation(location.id)}>Delete</button>
                //     </div>
                // )
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={LocationIcon} alt="location" className="icon--location" />
                            {location.address}
                            {" "}
                            {location.name}
                            <hr></hr>
                            <button
                                onClick={() => this.props.deleteLocation(location.id)}
                                className="btn btn-primary">Delete</button>
                        </h5>
                    </div>
                </div>

                )
                
            }
            </section>
            )
    }
}