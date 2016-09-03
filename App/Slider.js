import React from 'react';

class Slider extends React.Component {
    render() {
        const {update} = this.props;
        return (
            <div>
                <input ref="colorInput" type="range"
                       min="0"
                       max="255"
                       onChange={update}/>
            </div>
        );
    }
}

export default Slider;