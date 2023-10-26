import SingleComment from "./SingleComment"
import { ListGroup } from "react-bootstrap"

const CommentsList= (props)=>{
    return (
       <ListGroup>
       {
        props.reviews.map((review)=>{
            return <SingleComment id={review._id} singleReview={review} key={review._id} refresh={props.refresh}/>
        })
       }
       </ListGroup>
    )
}



export default CommentsList