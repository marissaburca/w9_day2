import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const SingleBook =function(){
    return(
  
      <Col className="p-2">
        <Card className="h-100">
          <Card.Img variant="top" src={this.props.book.img} className="h-75" />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="text-nowrap text-truncate">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
     
    )}
 
export default SingleBook    