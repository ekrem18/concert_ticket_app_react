import Container from "react-bootstrap/Container"
import { doctorData } from "../helper/data"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AddModal from "./AddModal"
import { useState } from "react"

const Doctors = ({ apps, setApps }) => {
  const [show, setShow] = useState(false)
  const [drName, setDrName] = useState("")


  return (
    <Container className="p-2">
      <h3 className="display-5 mb-3" style={{ color: "rgb(253, 233, 0)" }}>
      Esteemed Artists of Ours
      </h3>
      <h5 className="mb-4 text-white">Please Choose the Concert You Would Like to Attend</h5>

      <Row className="justify-content-center mb-5 text-white">
        {doctorData.map(({ id, img, dep, name }) => (
          <Col xs={6} sm={4} md={3} key={id}>
            <img
              src={img}
              alt={name}
              className="img-thumbnail doctor-img"
              onClick={() => {
                setDrName(name)
                setShow(true)
              }}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        apps={apps}
        setApps={setApps}
        drName={drName}
      />
    </Container>
  )
}

export default Doctors
