import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import Locations from "./Locations"
import Joke from "./joke/joke"
import AnimalList from "./animals/AnimalList"

export default class Kennel extends Component {

// pretending api
employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
]

// This will eventually get pulled from the API
locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
]

animalsFromAPI = [
    { id: 1, name: "Beauregard ", breed: "Pug" },
    { id: 2, name: "Mr. Peppers ", breed: "Chihuahua"},
    { id: 3, name: "Simon ", breed: "Tabby Cat"}
]


//1st
//employees/locations from API
state = {
    id: 75,
    type: "General",
    setup: "What do you give to a lemon in need?",
    punchline: "Lemonaid.",
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI

}

//setState is built in
//setNew 3rd
setNewJokeState = (jokeObj) => {
    this.setState({
        id: jokeObj.id,
        type: jokeObj.type,
        setup: jokeObj.setup,
        punchline: jokeObj.punchline
    })
}

//joke is 3rd
//setNew 4th
//EmployeeList/locations is 3rd. gives employees/locations new props?
    render() {
        return (
            <div>
                <h2> Locations </h2>
                <Locations locations={this.state.locations}/>
                <h2> Employees </h2>
                <EmployeeList employees={this.state.employees}/>
                <Joke type={this.state.type}
                    setup={this.state.setup}
                    punchline={this.state.punchline}
                setNewJokeState={this.setNewJokeState}/>
                <h2> Animals </h2>
                <AnimalList animals={this.state.animals}/>
            </div>
        );
    }
}