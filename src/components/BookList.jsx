import SingleBook from "./SingleBook";
import {Component} from 'react';
import { Container , Row, Col, Form} from 'react-bootstrap';



class BookList extends Component{
    state={
        searchValue:'',
    }
    render () {
      return ( 
        <Container fluid className="bg-dark px-5 pb-5 text-white" >
         <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="my-3">
              <Form.Control
                type="text"
                placeholder="Find a book..."
                value={this.state.searchValue}
                onChange={(e) => {
                  this.setState({
                    searchValue: e.target.value,
                  })
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
            {this.props.AllTheBooks
            .slice(0,8)
            .filter((oneBook)=>{
                return oneBook.title
                .toLowerCase()
                .includes(this.state.searchValue.toLocaleLowerCase())
            })
 
            .map((oneBook) => {
            return ( 
            <Col  className="p-2 h-50 d-flex justify-content-center" key={oneBook.asin}>
            <SingleBook book={oneBook}/>
            </Col>)
            })}
       </Row>
       </Container>)}}
export default BookList