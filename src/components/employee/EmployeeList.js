import React, { Component } from 'react'

//changed from basic html list to this map situation. each employee has ordered div key. don't know why thats important?
export default class EmployeeList  extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                    </div>
                )
            }
            </section>
        )
    }
}