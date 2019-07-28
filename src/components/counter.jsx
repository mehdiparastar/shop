import React, { Component } from 'react';
import {
    Button,
    Badge
} from 'reactstrap'


class Counter extends Component {
    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'صفر' : value
    }

    getBadgeColor() {
        return this.props.counter.value === 0 ? 'warning' : 'primary'
    }
    render() {
        return (
            <div>
                <Badge color={this.getBadgeColor()} className='m-2'>{this.formatCount()}</Badge>
                <Button
                    color='danger'
                    className='btn-sm m-2'
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    حذف
                </Button>
                <Button
                    color='primary'
                    className='btn-sm'
                    onClick={() => this.props.onIncrement(this.props.counter)}
                >
                    افزایش
                </Button>
            </div>
        );
    }
}

export default Counter;