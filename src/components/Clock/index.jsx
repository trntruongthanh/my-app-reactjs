import React from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {
    
};

function Clock() {

    const { timeString } = useClock()

    return (

        <React.Fragment>
            <p style={{ fontSize: '42px' }}>{timeString}</p>
        </React.Fragment>
    );
}

export default Clock;