import Card from "react-bootstrap/Card";
import { useState } from "react";


const SingleBook =(props)=> {
 const [selected, setSelected]= useState(false)

    return (
     <>
      <Card 
        onClick={() => {
          setSelected(true)
          props.changeAsin(props.book.asin)}}
        style={{ border:
           props.book.asin === props.selectedAsin ? "3px solid red" : "none" }}
        className= 'h-100'
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          className= 'h-75'
      
        />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title className="text-nowrap text-truncate">
            {props.book.title}
          </Card.Title>
        </Card.Body>  
      </Card>
      </>
    );
  }


export default SingleBook;
