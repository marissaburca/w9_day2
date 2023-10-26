import {Component} from 'react'
import CommentsList from './CommentsList';
import AddComment from './AddComment';


class CommentArea extends Component{
    state={
       comments:[]
   };

   getComments= ()=>{
       fetch('https://striveschool-api.herokuapp.com/api/comments/'+ this.props.bookId,{
           headers: {
               Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjIyOGY2ZTNkZDAwMTQ5NWU0NGIiLCJpYXQiOjE2OTgzMjUwMzMsImV4cCI6MTY5OTUzNDYzM30.JUGQrW9J2MTelwQTNE2XQm1U4vqY0EYVs3IchpSM7aw"
           }
       })
       .then(res=>{
           if(res.ok){
            return res.json()
            }else{
               throw new Error('Error while recovering comments')
            }
       })
       .then( arrayOfComments =>{
                this.setState({
                    comments: arrayOfComments,
                })
       })
       .catch(error=>{
           console.log('Error', error)
       })
   }
   componentDidMount(){
    this.getComments()
   }
   render(){
       return(
        <div>
            <div>
             <CommentsList reviews={this.state.comments} refresh={this.getComments}/>{/*  passo array di commenti che sta dentro stato */}
            </div>
            <div>
            <AddComment bookId={this.props.bookId}/>
            </div>

          </div>
       )
   }
   }
   export default CommentArea