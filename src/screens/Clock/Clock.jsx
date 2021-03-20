import React from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    timeString: PropTypes.string,
};

Clock.defaultProps = {
    timeString: '',
};

function Clock(props) {
    const { timeString } = props;
    return <div style={{ fontsize: '42px' }}>{timeString}</div>;
}

export default Clock;
