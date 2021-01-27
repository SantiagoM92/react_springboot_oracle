import React, {Component} from "react";
import AddPet from "./Components/AddPet";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Table from "./Components/Table";

class App extends Component {

    render() {
        return (

            <Router>
                <Route exact path="/" component={AddPet}/>
                <Route exact path="/view" component={Table}/>
            </Router>

        );
    }
}


export default App;
