import { useNavigate } from "react-router-dom"
import { Button, Container ,Row,Col,Form, FormGroup } from "react-bootstrap"

function DiscountList(){
    const navigate = useNavigate()

    return (
            <Container>
                <Row>
                    <Col>
                    <Form>
                        <FormGroup>
                            <Form.Control type="text" placeholder="type of book name to search">

                            </Form.Control>
                        </FormGroup>
                    </Form>
                    <Button className="mt-5" variant="success" style={{ float: 'right' }} onClick={() => navigate('/add/Discount')}>
                        Add Discount
                    </Button>
                    </Col>
                </Row>
            </Container>
    )
}
export default DiscountList