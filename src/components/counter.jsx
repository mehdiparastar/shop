import React from 'react';
import { connect } from 'react-redux'
import { deleteCounter, incrementCounter } from '../actions/index'
import {
    Button,
    Badge
} from 'reactstrap'


const Counter = ({dispatch, counter}) => {
    return (
        <div>
            <Badge color={getBadgeColor(counter)} className='m-2'>{formatCount(counter)}</Badge>
            <Button
                color='danger'
                className='btn-sm m-2'
                onClick={() => dispatch(deleteCounter(counter.id))}
            >
                حذف
                </Button>
            <Button
                color='primary'
                className='btn-sm'
                onClick={() => dispatch(incrementCounter(counter))}
            >
                افزایش
                </Button>
        </div>
    );
}

const formatCount = (counter)=> {
    const { value } = counter
    return value === 0 ? 'صفر' : value
}

const getBadgeColor = (counter) => {
    return counter.value === 0 ? 'warning' : 'primary'
}

export default connect(state=>{
    return {
        state
    }
})(Counter);