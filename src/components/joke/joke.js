import React, { Component } from 'react'

export default class Joke extends Component {
    //setNew 2nd
    tellNewJoke = () => {
        const joke = {
            id: 1005,
            type: "Sean Joke",
            setup: "What do you call a fly with no wings?",
            punchline: "A Walk"
        }
        //?
        this.props.setNewJokeState(joke);

    }
    //2nd 
    //setNew button 1st
    render() {
        return (
            <div>
                <h2>{this.props.type}</h2>
                <p>{this.props.setup}</p>
                <p>{this.props.punchline}</p>
                <button onClick={this.tellNewJoke}> Tell A New Joke </button>
            </div>
        );
    }
}