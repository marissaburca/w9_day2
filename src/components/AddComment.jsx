import { Component } from "react";
import {Button,Form} from 'react-bootstrap';

class AddComment extends Component{
 state = {
    commentObject:{
        comment: '',
        rate: '1',
        elementId: this.props.bookId,
    },
 }
 sendNewReview = (e)=>{
    e.preventDefault()

    fetch( 'https://striveschool-api.herokuapp.com/api/comments',
    {
      method: 'POST',
      body: JSON.stringify(this.state.commentObject),
      headers: {
        Authorization :
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjIyOGY2ZTNkZDAwMTQ5NWU0NGIiLCJpYXQiOjE2OTgzMjUwMzMsImV4cCI6MTY5OTUzNDYzM30.JUGQrW9J2MTelwQTNE2XQm1U4vqY0EYVs3IchpSM7aw',
        'Content-Type' : 'application/json',
      }},)
      .then((res)=>{
        if(res.ok){
            return res.json()
            }else{
               throw new Error('Error while recovering comments')
            }
      })
      .then((data)=>{
        this.setState({commentObject:{
            comment: '',
            rate: '1',
            elementId: this.props.bookId,
        },})
      })
      .catch(error=>{
        console.log('Error', error)
    })
 }

 render(){
    return(
        <Form onSubmit={this.sendNewReview}>
            <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                type='text'
                value={this.state.commentObject.comment}
                onChange={(e)=>{
                    this.setState({
                        commentObject:{
                            ...this.state.commentObject,
                            comment: e.target.value
                        }
                    })
                }}
                required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Select
                aria-label="comment rating"
                value={this.state.commentObject.rate}
                onChange={(e)=>{
                    this.setState({
                        commentObject:{
                            ...this.state.commentObject,
                            rate: e.target.value
                        }
                    })
                }}
                >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
            Send
            </Button>
        </Form>
        )
    }
}

export default AddComment