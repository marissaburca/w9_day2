import SingleBook from "./SingleBook";
import {Component} from 'react';
import { Container , Row} from 'react-bootstrap';
import fantasy from '../books/fantasy.json';


class BookList extends Component{
    render () {
      return (
      < Container fluid className="bg-dark px-5 pb-5 text-white" >
      <Row className="mb-5">
      <SingleBook key={this.props[0]}/>
      </Row>

      </Container>
    );

    }
}

export default BookList