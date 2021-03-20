import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ScreensClock from '../../screens/Clock/Clock.jsx';

Clock.propTypes = {};

function Clock() {
    const [timeString, setTimeString] = useState('');

    return (
        <div>
            <ScreensClock></ScreensClock>
        </div>
    );
}

export default Clock;
