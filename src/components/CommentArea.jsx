import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);

  const getComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + props.bookId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjIyOGY2ZTNkZDAwMTQ5NWU0NGIiLCJpYXQiOjE2OTgzMjUwMzMsImV4cCI6MTY5OTUzNDYzM30.JUGQrW9J2MTelwQTNE2XQm1U4vqY0EYVs3IchpSM7aw",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while recovering comments");
        }
      })
      .then((arrayOfComments) => {
        setComments(
          arrayOfComments,
        );
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  /*  componentDidUpdate(prevProps,prevState){
    //bisogna riconoscere ogni cambio di asin selezionato
    if(prevProps.bookId !== this.props.bookId){
    this.getComments()}
   } */
  useEffect(() => {
    getComments();
  }, [props.bookId]);

  return (
    <div>
      <div>
        <CommentsList reviews={comments} refresh={getComments} />
        {/*  passo array di commenti che sta dentro stato */}
      </div>
      <div>
        <AddComment bookId={props.bookId} />
      </div>
    </div>
  );
};

export default CommentArea;
