import React, { Component } from 'react'
import EmployeeIcon from "./EmployeeIcon.svg"
import "./Employee.css"

//changed from basic html list to this map situation. each employee has ordered div key. don't know why thats important?
export default class EmployeesList  extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    // <div key={employee.id}>
                    //     {employee.name}
                    //     {" "}
                    //     <button onClick={() => this.props.deleteEmployee(employee.id)}>Delete</button>
                    // </div>


                    <div key={employee.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={EmployeeIcon} alt="owner" className="icon--owner" />
                            {"Dr. "}
                            {employee.name}
                            <hr></hr>
                            <button
                                onClick={() => this.props.deleteEmployee(employee.id)}
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