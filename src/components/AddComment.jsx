import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  const [addNewComment, setAddNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: props.bookId,
  });

  useEffect(()=>{
    setAddNewComment({
        ...addNewComment,
        elementId: props.bookId
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.bookId]);
  
  const sendNewReview = (e) => {
    e.preventDefault()

    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      body: JSON.stringify(addNewComment),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjIyOGY2ZTNkZDAwMTQ5NWU0NGIiLCJpYXQiOjE2OTgzMjUwMzMsImV4cCI6MTY5OTUzNDYzM30.JUGQrW9J2MTelwQTNE2XQm1U4vqY0EYVs3IchpSM7aw",
          "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
            console.log(res);
            setAddNewComment({
                comment: "",
                rate: "1",
                elementId: props.bookId,
              });
            return res.json();

        } else {
          throw new Error("Error while posting comment");
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <Form onSubmit={sendNewReview}>
      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          value={addNewComment.comment}
          onChange={(e) => {
            setAddNewComment({
                ...addNewComment,
                comment: e.target.value,
            });
          }}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Select
          aria-label="comment rating"
          value={addNewComment.rate}
          onChange={(e) => {
            setAddNewComment({
                ...addNewComment,
                rate: e.target.value,
            });
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit"
      >
        Send
      </Button>
    </Form>
  );
};

export default AddComment;
