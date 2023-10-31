import SingleBook from "./SingleBook";
import { Container , Row, Col, Form} from 'react-bootstrap';
import CommentArea from "./CommentArea";
import { useState } from "react";


const BookList= (props)=>{
    
       const [searchValue,setSearchValue] = useState('');
       const [selectedAsin, setSelectedAsin] = useState(null) //non abbiamo ancora cliccato su nessun libro, rappresenta un solo elemento
   
   /*   */
   const changeAsin=(newAsin)=>{

    setSelectedAsin(newAsin
    )
   }
      return ( 
        <Container fluid className="bg-dark px-5 pb-5 text-white" >
         <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="my-3">
              <Form.Control
                type="text"
                placeholder="Find a book..."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value,
                  )
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
           <Row>

           
            {props.AllTheBooks
            .slice(0,12)
            .filter((oneBook)=>{
                return oneBook.title
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            })
 
            .map((oneBook) => {
            return ( 
            <Col  
            className="col-3 p-2 d-flex justify-content-center" 
            key={oneBook.asin}
           
            >
            <SingleBook //deve settare stato di booklist, bisogna fare set state
            book={oneBook}
            changeAsin={changeAsin}
            selectedAsin ={selectedAsin}
            //ogni single book riceve asin del libro corrente selezionato, affinché un solo book riceva il bordo rosso
            //bisogna comparare gli asin
           />

            </Col>)
            })}
            </Row>
            </Col>
            <Col>
            <CommentArea bookId={selectedAsin}/>
            </Col>
       </Row>
       </Container>)
}
export default BookList