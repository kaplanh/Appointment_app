import Doctors from "../components/Doctors";
import AppointmentsList from "../components/AppointmentsList";
import { appointmentData } from "../helpers/data";
import { useState } from "react";

const Home = () => {
    const [appointments, setAppointments] = useState(appointmentData);
    return (
        <main className="text-center mt-2">
            <h1 className="text-danger display-6">WELLCOME TO OUR HOSPITAL</h1>
            <Doctors apps={appointments} setApps={setAppointments} />
            <AppointmentsList apps={appointments} setApps={setAppointments} />
        </main>
    );
};

export default Home;
