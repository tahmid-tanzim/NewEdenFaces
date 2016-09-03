import React from 'react';

class App extends React.Component {
    render() {
        const {name, age} = this.props;
        return (
            <div>
                <h2>Hello</h2>
                <h4>{name} <small>Age: {age}</small></h4>
                <p>Lorem Ipsum 2 Ipsum Lorem Ipsum</p>
            </div>
        );
    }
}

App.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number.isRequired
};

App.defaultProps = {
    name: 'Unknown',
    age: 0
};

export default App;