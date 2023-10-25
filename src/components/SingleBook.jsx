import Card from 'react-bootstrap/Card';
import {Component} from 'react';

class SingleBook extends Component{
    state={
    selected:false,
    }
    toggleSelected=()=>{
        this.setState({
            selected: !this.state.selected
        })
    }
    render(){
    return(
        <Card style={{ width: '18rem', height: '30rem' }} className={this.state.selected ? 'red-border' : ''}>
          <Card.Img variant="top" src={this.props.book.img} style={{ height: '85%' }} />
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Title className="text-nowrap text-truncate">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
    )}
}
export default SingleBook    