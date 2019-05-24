import React, { Component } from 'react'
//import EmployeesList from "./employees/EmployeesList"  // Import EmployeeList component
//import Locations from "./locations/LocationsList"
// import Joke from "./joke/joke"
//import AnimalsList from "./animals/AnimalsList"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

export default class Kennel extends Component {

// // pretending api
// employeesFromAPI = [
//     { id: 1, name: "Jessica Younker" },
//     { id: 2, name: "Jordan Nelson" },
//     { id: 3, name: "Zoe LeBlanc" },
//     { id: 4, name: "Blaise Roberts" }
// ]

// // This will eventually get pulled from the API
// locationsFromAPI = [
//     { id: 1, name: "Nashville North", address: "500 Circle Way" },
//     { id: 2, name: "Nashville South", address: "10101 Binary Court" }
// ]

// animalsFromAPI = [
//     { id: 1, name: "Beauregard ", breed: "Pug" },
//     { id: 2, name: "Mr. Peppers ", breed: "Chihuahua"},
//     { id: 3, name: "Simon ", breed: "Tabby Cat"}
// ]

// ownersFromAPI = [
//     { id: 1, name: "Ryan Tanay" },
//     { id: 2, name: "Emma Beaton" },
//     { id: 3, name: "Dani Adkins" },
//     { id: 4, name: "Adam Oswalt" },
//     { id: 5, name: "Fletcher Bangs" },
//     { id: 6, name: "Angela Lee" }
// ]


//1st
//employees/locations from API
// state = {
//     //id: 75,
//     //type: "General",
//     //setup: "What do you give to a lemon in need?",
//     //punchline: "Lemonaid.",
//     employees: this.employeesFromAPI,
//     locations: this.locationsFromAPI,
//     animals: this.animalsFromAPI,
//     // owners: this.ownersFromAPI

// }

//setState is built in
//setNew 3rd
//setNewJokeState = (jokeObj) => {
//     this.setState({
//         id: jokeObj.id,
//         type: jokeObj.type,
//         setup: jokeObj.setup,
//         punchline: jokeObj.punchline
//     })
// }

//joke is 3rd
//setNew 4th
//EmployeeList/locations is 3rd. gives employees/locations new props?
    render() {
        return (
            // <div>
            //     <h2> Locations </h2>
            //     <Locations locations={this.state.locations}/>
            //     <h2> Employees </h2>
            //     <EmployeesList employees={this.state.employees}/>
            //     {/* <Joke type={this.state.type}
            //         setup={this.state.setup}
            //         punchline={this.state.punchline}
            //     setNewJokeState={this.setNewJokeState}/> */}
            //     <h2> Animals </h2>
            //     <AnimalsList animals={this.state.animals}/>
                <React.Fragment>
                <NavBar />
                <ApplicationViews />
                </React.Fragment>
            //</div>
        );
    }
}