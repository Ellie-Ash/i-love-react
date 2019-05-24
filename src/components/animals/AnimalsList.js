import React, { Component } from 'react'
import "./Animals.css"
import DogIcon from "./DogIcon.svg"

// import AnimalCard from "./AnimalCard"

export default class AnimalsList extends Component {

    render() {
        return (

            <React.Fragment>
            <div className="animalButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")}
                        }>
                    New Patient
                </button>
            </div>

            <section className="animals">
            {
                this.props.animals.map(animal =>
                    // <div key={animal.id}>
                    //     {animal.name}
                    //     {" "}
                    //     {animal.breed}
                    //     <button onClick={() => this.props.deleteAnimal(animal.id)}>Delete</button>
                    // </div>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={DogIcon} alt="dog" className="icon--dog" />
                                {animal.name}
                                {" the "}
                                {animal.breed}
                                <hr></hr>
                                <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/animals/${animal.id}/edit`);
                                }}
                                >
                                Edit
                                </button>
                                <hr></hr>
                                <button className="btn btn-primary"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    >Delete</button>
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



// render () {
//     return (
//         <React.Fragment>
//             <div className="animalButton">
//                 <button type="button"
//                         onClick={()=> this.props.history.push("/animals/new")}
//                         className="btn btn-success">
//                     Admit Animal
//                 </button>
//             </div>
//             <section className="animals">
//             {
//                 this.props.animals.map(animal =>
//                     <AnimalCard key={animal.id} animal={animal} {...this.props} />
//                 )
//             }
//             </section>
//         </React.Fragment>
//     )
// }
// }