import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppiontmentHeader from '../AppiontmentHeader/AppiontmentHeader';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppiontmentHeader date={date} setDate={setDate}></AppiontmentHeader>
            <AvailableAppoinments date={date.toDateString()}></AvailableAppoinments>
            <h2>Appointment</h2>
        </div>
    );
};

export default Appointment;