import Card from "react-bootstrap/Card";
import { Component } from "react";


class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
     <>
      <Card 
        onClick={() => {
          this.setState({ selected: !this.state.selected })
          this.props.changeAsin(this.props.book.asin)}}
        style={{ border:
           this.props.book.asin === this.props.selectedAsin ? "3px solid red" : "none" }}
        className= 'h-100'
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          className= 'h-75'
      
        />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title className="text-nowrap text-truncate">
            {this.props.book.title}
          </Card.Title>
        </Card.Body>  
      </Card>
      </>
    );
  }
}

export default SingleBook;
