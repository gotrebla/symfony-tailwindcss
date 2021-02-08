import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../scss/app.scss';
import Time from "./components/Time";

class App extends Component{
    render(){
        return(
            <div className="App">
                <Time/>
            </div>
        )
    }

}

export default App;

ReactDOM.render(<Time/>, document.getElementById('root'))