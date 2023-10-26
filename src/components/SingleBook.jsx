import Card from "react-bootstrap/Card";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card 
      style={{ border: this.state.selected ? "3px solid red" : "none" }}
      className= 'h-100'
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          className= 'h-75'
          onClick={() => this.setState({ selected: !this.state.selected })}
        />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title className="text-nowrap text-truncate">
            {this.props.book.title}
          </Card.Title>
        </Card.Body>
        {this.state.selected &&(<CommentArea bookId={this.props.book.asin} />)}
      </Card>
    );
  }
}

export default SingleBook;
