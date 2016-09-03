import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            blue: 0,
            green: 0
        };
        this.update = this.updateColor.bind(this);
    }

    updateColor(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.colorInput).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.colorInput).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.colorInput).value
        });
    }

    render() {
        //const {name, age} = this.props;
        const {red, blue, green} = this.state;
        return (
            <div>
                <Slider ref="red"
                        update={this.update}/>
                {red} <br />
                <Slider ref="blue"
                        update={this.update}/>
                {blue} <br />
                <Slider ref="green"
                        update={this.update}/>
                {green} <br />
            </div>
        );
    }
}

export default App;