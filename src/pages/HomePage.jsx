import { useState } from "react";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helpers/data";
import AppointmentsList from "../components/AppointmentsList";

const HomePage = () => {
    const [appointments, setAppointments] = useState(appointmentData);
    return (
        <main className="text-center mt-2">
            <h1 className="text-danger display-6">CLARUS HOSPITAL</h1>
            <Doctors apps={appointments} setApps={setAppointments} />
            <AppointmentsList apps={appointments} setApps={setAppointments} />
        </main>
    );
};

export default HomePage;
