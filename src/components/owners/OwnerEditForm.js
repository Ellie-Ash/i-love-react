import React, { Component } from "react"
import OwnersManager from "./OwnersManager"

export default class OwnerEditForm extends Component {
    // Set initial state
    state = {
      ownerName: "",
      ownerNumber: "",
      animalId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
      evt.preventDefault()

      if (this.state.animalId === "") {
        window.alert("Please select a pet");
      } else {
        const editedOwner = {
          id: this.props.match.params.ownerId,
          name: this.state.ownerName,
          number: this.state.ownerNumber,
          animalId: parseInt(this.state.animalId)
        };

    this.props.updateOwner(editedOwner)
    .then(() => this.props.history.push("/owners"))      
    }
  }

    componentDidMount() {
      OwnersManager.get(this.props.match.params.ownerId)
      .then(owner => {
        this.setState({
          ownerName: owner.name,
          ownerNumber: owner.number,
          animalId: owner.animalId
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="ownerForm">
            <div className="form-group">
              <label htmlFor="ownerName">Owner Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ownerName"
                value = {this.state.ownerName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ownerNumber">Phone Number</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ownerNumber"
                value = {this.state.ownerNumber}
              />
            </div>
            <div className="form-group">
              <label htmlFor="animal"></label>
              <select
                name="animal"
                id="animalId"
                onChange={this.handleFieldChange}
                value = {this.state.animalId}
              >
                <option value=""> Select Pet </option>
                {this.props.animals.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              onClick={this.updateExistingOwner}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}