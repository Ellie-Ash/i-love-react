// import React, { Component } from "react"
// import { Link } from "react-router-dom"
// import DogIcon from "./DogIcon.png"
// import "./Animals.css"

// export default class AnimalCard extends Component {
//     render() {
//         return (
//             <div key={this.props.animal.id} className="card">
//                 <div className="card-body">
//                     <h5 className="card-title">
//                         <img src={DogIcon} alt="dog" className="icon--dog" />
//                         {this.props.animal.name}
//                         <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
//                         <a href="google.com"
//                             onClick={() => this.props.deleteAnimal(this.props.animal.id)}
//                             className="card-link">Delete</a>
//                     </h5>
//                 </div>
//             </div>
//         )
//     }
// }