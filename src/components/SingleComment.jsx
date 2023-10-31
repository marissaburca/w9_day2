import { ListGroupItem} from "react-bootstrap"
import { Trash3Fill } from "react-bootstrap-icons"



const SingleComment =(props)=>{

    return(
        <ListGroupItem>
                <div>
                <p>
                    {
                       props.singleReview.comment
                    }
                </p>
                </div>
                <div>
                <p>
                    {
                        props.singleReview.rate
                    }
                </p>
                </div>
                <div>
                <Trash3Fill
               style={{ cursor: 'pointer' }}
               onClick={() => {
                fetch(
                  'https://striveschool-api.herokuapp.com/api/comments/' +
                    props.id,
                  {
                    method: 'DELETE',
                    headers: {
                      Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWUzMmY2ZTNkZDAwMTQ5NWU0NDgiLCJpYXQiOjE2OTgzMjQwMTgsImV4cCI6MTY5OTUzMzYxOH0.Ce_pmGglJCcINuLb6Szk4tjGViYOqlj3EEoQn2xVgDg',
                    },
                  }
                )
                  .then((res) => {
                    if (res.ok) {
                      //   this.getComments()
                    } else {
                      throw new Error('Qualquadra non cosa')
                    }
                  })
                  .then(props.refresh)
                  .catch((err) => {
                    console.log('ERRORE', err)
                  })
              }}
            />
            </div>
        </ListGroupItem>
    )
 
}
   


export default SingleComment