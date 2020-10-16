import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'

class AppBuilder extends Component {
    render() {
        return (
            <Auxiliary>
                <div>Burger</div>
                <div>Build Control</div>
            </Auxiliary>
        )
    }
}

export default AppBuilder;