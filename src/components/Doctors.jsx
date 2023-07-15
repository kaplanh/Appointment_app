//*react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


//*doctors data
import { doctorData } from "../helpers/data";
import { useState } from "react";
import AddModal from "./AddModal";

            
const Doctors = ({apps,setApps}) => {
    const [show, setShow] = useState(false);
    const [drName , setDrName ] = useState('')
    return (
        <Container className="p-2">
            <h3
                className="display-6 mb-3"
                style={{ color: "rgb(166, 18, 189)" }}
            >
                Our Doctors
            </h3>

            <Row className="justify-content-center">
                {doctorData.map(({ id, name, dep, img }) => (
                    <Col key={id} xs={6} sm={4} md={3} >
                        <img
                            onClick={() => {
                                setShow(true);
                                setDrName(name);
                            }}
                            className=" doctor-img img-thumbnail"
                            src={img}
                            alt={name}
                        />
                        <h5>{name}</h5>
                        <h6>{dep} </h6>
                    </Col>
                ))}
            </Row>
            <AddModal
                show={show}
                handleClose={() => setShow(false)}
                drName={drName}
                apps={apps}
                setApps={setApps}
            />
        </Container>
    );
};

export default Doctors;
