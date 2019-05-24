import React, { Component } from "react";


export default class OwnerForm extends Component {
  state = {
    ownerName: "",
    ownerNumber: "",
    animalId: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewOwner = evt => {
    evt.preventDefault();
    if (this.state.animal === "") {
      window.alert("Please select a caretaker");
    } else {
      const owner = {
        name: this.state.ownerName,
        number: this.state.ownerNumber,
        animalId: parseInt(this.state.animalId)
      };

      this.props
        .addOwner(owner)
        .then(() => this.props.history.push("/owners"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="ownerForm">
          <div className="form-group">
            <label htmlFor="ownerName">Owner</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ownerName"
              placeholder=""
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
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="animal">Assign to pet</label>
            <select
              defaultValue=""
              name="animal"
              id="animalId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select a pet</option>
              {this.props.animals.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={this.constructNewOwner}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}