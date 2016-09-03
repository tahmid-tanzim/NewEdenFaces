import React from 'react';
import Widget from './Widget';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0
        };
        this.update = this.updateName.bind(this);
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        //const {name, age} = this.props;
        const {name, age} = this.state;
        return (
            <div>
            <Widget name={name}
                    age={age}
                    update={this.update} />
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