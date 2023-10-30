import SingleBook from "./SingleBook";
import {Component} from 'react';
import { Container , Row, Col, Form} from 'react-bootstrap';
import CommentArea from "./CommentArea";


class BookList extends Component{
    state={
        searchValue:'',
        selected: undefined,
    }
   /*   */

   setNewState = ()=> {
    this.setState({
      selected : true,
    })
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
        <Row className="justify-content-center">
          <Col>
           <Row>

           
            {this.props.AllTheBooks
            .slice(0,12)
            .filter((oneBook)=>{
                return oneBook.title
                .toLowerCase()
                .includes(this.state.searchValue.toLocaleLowerCase())
            })
 
            .map((oneBook) => {
            return ( 
            <Col  
            className="col-3 p-2 d-flex justify-content-center" 
            key={oneBook.asin}
           
            >
            <SingleBook 
            book={oneBook}
            selected={this.state.selected}
            setNewState={this.setNewState}/>

            </Col>)
            })}
            </Row>
            </Col>
            <Col>
            {this.state.selected &&(<CommentArea bookId={this.book.asin} />)}
            </Col>
       </Row>
       </Container>)}}
export default BookList