import Card from 'react-bootstrap/Card';
import {Component} from 'react';
import { Col, Row, Form, Button, ListGroup} from 'react-bootstrap'

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
        <Card style={{ width: '18rem', height: '30rem' }} className={this.state.selected ? 'red-border' : ''} onClick={this.toggleSelected}>
          <Card.Img variant="top" src={this.props.book.img} style={{ height: '85%' }} />
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Title className="text-nowrap text-truncate">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
    )}
}


/* ********************************************************************** */

class CommentArea extends Component{
 state={
    singleComment:{
    comment:'',
    rate:'',
    },
    comments:[]
};

handleChange=(property, value)=>{
    this.setState({
        singleComment:{
            this.state.singleComment,
            [property]:value,
        }
    })
};

handleSubmit= ()=>{
    fetch('https://striveschool-api.herokuapp.com/api/comments/',{
        method: 'POST',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjIyOGY2ZTNkZDAwMTQ5NWU0NGIiLCJpYXQiOjE2OTgzMjUwMzMsImV4cCI6MTY5OTUzNDYzM30.JUGQrW9J2MTelwQTNE2XQm1U4vqY0EYVs3IchpSM7aw",
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(this.state.singleComment)
    })
    .then(res=>{
        if(res.ok){
            this.setState({
                singleComment:{
                    comment:'',
                    rate:'',
                    }    
            })/* qui svoto campi del form */
            return res.json()
            }else{
            throw new Error('Error while posting')
        }
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log('Error', error)
    })
}
componentDidMount(){
    this.handleChange();
    this.handleSubmit();
}
render(){
    return(
         class CommentList extends Component{
              componentDidMount(){
                getComments= ()=>{
                    fetch('https://striveschool-api.herokuapp.com/api/comments/',{
                        headers: {
                                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjIyOGY2ZTNkZDAwMTQ5NWU0NGIiLCJpYXQiOjE2OTgzMjUwMzMsImV4cCI6MTY5OTUzNDYzM30.JUGQrW9J2MTelwQTNE2XQm1U4vqY0EYVs3IchpSM7aw"
                        }}) 
                    .then((res)=>{
                        if(res.ok){
                            return res.json()
                        }else{
                            throw new Error('Errore nel recupero commenti!') 
                        }
                    }) 
                    .then((data)=>{
                            console.log(data)
                            this.setState({
                                comments: data
                            })
                    }) 
                    .catch((error) => {
                        console.log('ERROR!', error)
                        this.setState({
                          isLoading: false,
                          isError: true,
                        })}) 
                };
            };
            render(){
            return(
                <Row>
                    <Col>
                    <ListGroup>
                        {this.state.comments.map((comment)=>{
                        return (
                            <ListGroup.Item key={comment._id}>
                            <div>
                                <p>{comment.text}</p>
                                <p>{comment.number}</p>
                            </div>
                            </ListGroup.Item>
                        )
                        })}  
                    </ListGroup>
                    </Col>
                </Row>
                 )}
         }
    )
}
}
export { SingleBook, CommentArea}