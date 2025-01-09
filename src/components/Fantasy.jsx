import fantasy from "../data/fantasy.json";






import Card from 'react-bootstrap/Card';
import { Container, Row, Col  } from "react-bootstrap";
import { Component } from "react";

class Fantasy extends Component {
    

    render() {
        return (
            <Container>
               <Row>
                {fantasy.map((book) => (
                   <Col key={book.id} xs={12} sm={6} md={4} lg={3} xl={2}> 
                   <Card>
                    <Card.Img variant="top"  src={book.img} />
                    <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    price: {book.price}&euro;
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{book.author}</small>
                    <button className="border-0 px-3 rounded-pill bg-warning">Buy Now</button>
                    </Card.Footer>
                    
                    
                   </Card>
                   </Col> 
                ))}
                </Row> 
            </Container>
        )
    }
}

export default Fantasy;