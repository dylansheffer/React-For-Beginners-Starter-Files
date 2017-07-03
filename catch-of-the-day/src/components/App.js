import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component{
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        //Getting the initial state
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        //update our state
        //this esentially will make a copy of our existing object
        const fishes = {...this.state.fishes};

        // add in our new 
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;

        //set state
        this.setState({ fishes })
        //this.setState({ fishes: fishes })
    }

    render() {
        return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
            </div>
            <Order />
            <Inventory addFish={this.addFish} />
        </div>
        )
    }
}

export default App;