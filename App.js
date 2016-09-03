import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Hello World',
            age: 100
        }
    }
    update(e) {
        this.setState({
            name: e.target.value
        });
    }
    render() {
        //const {name, age} = this.props;
        const {name, age} = this.state;
        return (
            <div>
                <input type="text"
                       onChange={this.update.bind(this)} />
                <hr/>
                <h2>Hello</h2>
                <h4>{name} <small>{age}</small></h4>
                <p>Lorem Ipsum 2 Ipsum Lorem Ipsum</p>
            </div>
        );
    }
}

//App.propTypes = {
//    name: React.PropTypes.string,
//    age: React.PropTypes.number.isRequired
//};
//
//App.defaultProps = {
//    name: 'Unknown',
//    age: 0
//};

export default App;