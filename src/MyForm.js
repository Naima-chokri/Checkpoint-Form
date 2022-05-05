import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Row, Col, Grid } from 'react-bootstrap';
import pic1 from './images/pic1.jpg'



const MyForm = () => {
    return ( 
        <div style={{  width: 1500, padding: 30 }}>
            <h4 style={{ color:'#FF3358', fontSize:36 , margin:30 }}>Sign up now</h4>
            <Row>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your first name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your last name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter your your email address" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your mobile number:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your mobile number" />
                    </Form.Group>
                    <Form.Group controlId="form.Textarea">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Your message.."/>
                    </Form.Group>
                    <Button style={{ marginTop: 25 }} variant="primary" type="submit">Submit </Button>
                </Form>
                </Col>
                <Col>
                    <img src={pic1} alt =""/>
                </Col>
            </Row>
            
        </div>
     );
}
 
export default MyForm;