import React, { Component } from 'react'
import "./Owner.css";
import OwnerIcon from "./OwnerIcon.svg"

export default class OwnersList extends Component {
    render() {
        return (

            <React.Fragment>
            <div className="ownerButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")}
                        }>
                    Create New Owner
                </button>
            </div>


            <section className="owners"> {
                this.props.owners.map(owner =>
                //     <div key={owner.id}>
                //         {owner.name}
                //         {" "}
                //         {owner.number}
                //         <button onClick={() => this.props.deleteOwner(owner.id)}>Delete</button>
                //     </div>
                // )

            <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={OwnerIcon} alt="owner" className="icon--owner" />
                                {owner.name}
                                <hr></hr>
                                {owner.number}
                                <hr></hr>
                                <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/owners/${owner.id}/edit`);
                                }}
                                >
                                Edit
                                </button>
                                <hr></hr>
                                <button
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="btn btn-primary">Delete</button>
                            </h5>
                        </div>
                    </div>
                )
            }
               </section>
            </React.Fragment>
        )
    }
}