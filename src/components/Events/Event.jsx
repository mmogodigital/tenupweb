// @flow
import React from 'react';

class Event extends React.Component() {

    render() {
        return 'This is an event';
    }
}

Event.propTypes = {
    title: React.PropTypes.string
}

export default Event;