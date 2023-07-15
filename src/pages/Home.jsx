import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { appointmentData } from "../helper/data"
import { useState } from "react"


const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData)

  console.log(appointments)
  return (
    <main className="text-center mt-2">
      <div>
        <img src="../../../img/speakers.png" alt="" width={1200}/>
      </div>
      <Doctors apps={appointments} setApps={setAppointments} />
      <AppointmentList apps={appointments} setApps={setAppointments} />
    </main>
  )
}

export default Home
