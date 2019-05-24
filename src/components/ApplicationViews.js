import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalsList from './animals/AnimalsList'
import AnimalManager from "./animals/AnimalManager"
import AnimalForm from "./animals/AnimalForm"
import AnimalEditForm from "./animals/AnimalEditForm"
import LocationsList from './locations/LocationsList'
import LocationsManager from "./locations/LocationsManager"
import EmployeesList from './employees/EmployeesList'
import EmployeesManager from './employees/EmployeesManager'
import OwnersList from './owners/OwnersList'
import OwnersManager from "./owners/OwnersManager"
import OwnerForm from "./owners/OwnerForm"
import OwnerEditForm from "./owners/OwnerEditForm"
import Login from './authentication/Login'


export default class ApplicationViews extends Component {


    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    };

    deleteEmployee = (id) => {
        const newState = {};
        EmployeesManager.deleteEmployee(id)
            .then(EmployeesManager.getAll)
            .then(employees => {
                console.log("after deleted employees", employees);
                newState.employees = employees
            })
            .then(() => this.setState(newState))
    };

    deleteOwner = (id) => {
        const newState = {};
        OwnersManager.deleteOwner(id)
            .then(OwnersManager.getAll)
            .then(owners => {
                console.log("after deleted owners", owners);
                newState.owners = owners
            })
            .then(() => this.setState(newState))
    };

    deleteLocation = (id) => {
        const newState = {};
        LocationsManager.deleteLocation(id)
            .then(res => console.log("res", res))
            .then(LocationsManager.getAll)
            .then(locations => {
                console.log("after deleted locations", locations);
                newState.locations = locations
            })
            .then(() => this.setState(newState))
    };

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
            .then(AnimalManager.getAll)
            .then(animals => {
                console.log("after deleted animals", animals);
                newState.animals = animals
            })
            .then(() => this.setState(newState))
    };

    addAnimal = (animal) =>
        AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals =>
            this.setState({
                animals: animals
            })
        );

    updateAnimal = (editedAnimalObject) => {
        return AnimalManager.put(editedAnimalObject)
            .then(() => AnimalManager.getAll())
            .then(animals => {
                this.setState({
                    animals: animals
                })
            });
    };

    addOwner = (owner) =>
        OwnersManager.post(owner)
        .then(() => OwnersManager.getAll())
        .then(owners =>
            this.setState({
                owners: owners
            })
        );

        updateOwner = (editedOwnerObject) => {
            return OwnersManager.put(editedOwnerObject)
                .then(() => OwnersManager.getAll())
                .then(owners => {
                    this.setState({
                        owners: owners
                    })
                });
        };


    componentDidMount() {
        console.log("didmount");
        const newState = {}
        AnimalManager.getAll()
            .then(animals => newState.animals = animals)
            .then(() => this.setState(newState))
        EmployeesManager.getAll()
            .then(employees => newState.employees = employees)
            .then(() => this.setState(newState))
        LocationsManager.getAll()
            .then(locations => newState.locations = locations)
            .then(() => this.setState(newState))
        OwnersManager.getAll()
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    };

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        console.log("render all");
        return ( <React.Fragment >
                <Route exact path = "/locations"
                render = {(props) => {
                        if (this.isAuthenticated()) {
                            return <LocationsList {
                                ...props
                            }
                            locations = {this.state.locations}
                            deleteLocation = {this.deleteLocation}/>
                        } else {
                            return <Redirect to = "/login" />
                        }
                    }
                }/> 
                <Route exact path = "/animals"
                render = {(props) => {
                        if (this.isAuthenticated()) {
                            return <AnimalsList {
                                ...props
                            }
                            animals = {this.state.animals}
                            deleteAnimal = {this.deleteAnimal}/>
                        } else {
                            return <Redirect to = "/login" />
                        }
                    }
                }/> 
                <Route path = "/animals/new"
                render = {(props) => {
                        return <AnimalForm {
                            ...props
                        }
                        employees = {this.state.employees}
                        addAnimal = {this.addAnimal}/>
                    }
                }/> 
                <Route path = "/animals/:animalId(\d+)/edit"
                render = {props => {
                        return <AnimalEditForm {
                            ...props
                        }
                        employees = {this.state.employees}
                        updateAnimal = {this.updateAnimal}/>
                    }
                }/> 
                <Route exact path = "/employees"
                render = {props => {
                        if (this.isAuthenticated()) {
                        return <EmployeesList {
                        ...props
                    }
                    deleteEmployee = {this.deleteEmployee}
                    employees = {this.state.employees}/>
                } else {
                    return <Redirect to = "/login" />
                }
            }
        }/> 
        <Route exact path = "/owners"
        render = {(props) => {
                if (this.isAuthenticated()) {
                    return <OwnersList {
                        ...props
                    }
                    owners = {this.state.owners}
                    deleteOwner = {this.deleteOwner}/>
                } else {
                    return <Redirect to = "/login" />
                }
            }
        }/> 
        <Route path = "/owners/new"
        render = {(props) => {
                return <OwnerForm {
                    ...props
                }
                animals = {this.state.animals}
                addOwner = {this.addOwner}/>
            }
        }/>
        <Route path = "/owners/:ownerId(\d+)/edit"
                render = {props => {
                        return <OwnerEditForm {
                            ...props
                        }
                        animals = {this.state.animals}
                        updateOwner = {this.updateOwner}/>
                    }
                }/> 
        <Route path = "/login"
        component = {Login}/>


        </React.Fragment >
    )
};
}