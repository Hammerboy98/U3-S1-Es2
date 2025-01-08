import { Component } from "react";
import { Card, Container, Row, } from "react-bootstrap";
import libri from "../data/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container className=" my-5" fluid={true}>
        <Row>
          
            {libri.map((fantasy) => {
              return (
                <>
                  <Card className="m-3" key={fantasy.asin} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={fantasy.img} className="h-100" style={{aspectRatio:'16:9'}} />
      <Card.Body>
        <Card.Title>{fantasy.title}</Card.Title>
        <Card.Text>
          {fantasy.category}
        </Card.Text>
        <Card.Text>
          {fantasy.price}
        </Card.Text>
      </Card.Body>
    </Card>
                </>
              );
            })}
          
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
