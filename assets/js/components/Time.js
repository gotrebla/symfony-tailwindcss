import React, { Component } from 'react';

class Time extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }
    render() {
        return (
            <div className='time'>
                <h1>{ this.state.time }</h1>
            </div>
        );
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState(
            {
                time: new Date().toLocaleTimeString()
            }
        ), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Time;