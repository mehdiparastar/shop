import React, { Component } from 'react';
import Counter from './counter'


class Counters extends Component {

    render() {
        const {
            onDelete,
            onIncrement,
            counters
        } = this.props
        return (
            <div style={{ float: 'right' }}>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                    />
                )}
            </div>
        );
    }
}

export default Counters;