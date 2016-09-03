import React from 'react';

class Widget extends React.Component {
    render() {
        const {name, age, update} = this.props;
        return (
            <div>
                <input type="text"
                       onChange={update}/>
                <hr/>
                <h2>Hello</h2>
                <h4>{name} <small>{age}</small>
                </h4>
            </div>
        );
    }
}

Widget.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number.isRequired
};

Widget.defaultProps = {
    name: 'Unknown',
    age: 0
};

export default Widget;