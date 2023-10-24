import Card from 'react-bootstrap/Card'
import fantasy from '../books/fantasy.json'
import history from '../books/history.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'
import { Container, Row, Col } from 'react-bootstrap'

function AllTheBooks() {
  return (
    <Container fluid className="bg-dark px-5 pb-5 text-white" >
      <Row className="mb-5">
        <div className="d-flex fs-1 justify-content-start my-3">
        🧌 Fantasy 
        </div>
        {fantasy.slice(0, 4).map((books) => (
          <Col md={3} key={books.asin} className="p-2">
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-nowrap text-truncate">
                  {books.title}
                </Card.Title>
                <Card.Text>{books.price} €</Card.Text>
                <button className="btn btn-success">Shop now</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mb-5"> 
        <div className="d-flex fs-1  justify-content-start my-3">
        🏛 History
        </div>
        {history.slice(0, 4).map((books)=> (
          <Col md={3} key={books.asin} className="py-2">
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-nowrap text-truncate">
                  {books.title}
                </Card.Title>
                <Card.Text>{books.price} €</Card.Text>
                <button className="btn btn-success">Shop now</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mb-5">
        <div className="d-flex fs-1  justify-content-start my-3">
        🧟‍♂️ Horror
        </div>
        {horror.slice(0, 4).map((books)=> (
          <Col md={3} key={books.asin} className="py-2">
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-nowrap text-truncate">
                  {books.title}
                </Card.Title>
                <Card.Text>{books.price} €</Card.Text>
                <button className="btn btn-success">Shop now</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mb-5">
        <div className="d-flex fs-1  justify-content-start my-3">
        ❤️‍🔥 Romance
        </div>
        {romance.slice(0, 4).map((books)=> (
          <Col md={3} key={books.asin} className="py-2">
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-nowrap text-truncate">
                  {books.title}
                </Card.Title>
                <Card.Text>{books.price} €</Card.Text>
                <button className="btn btn-success">Shop now</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mb-5">
        <div className="d-flex fs-1  justify-content-start my-3">
        👨‍🚀 Sci-Fi
        </div>
        {scifi.slice(0, 4).map((books) => (
          <Col md={3} key={books.asin} className="py-2">
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-nowrap text-truncate">
                  {books.title}
                </Card.Title>
                <Card.Text>{books.price} €</Card.Text>
                <button className="btn btn-success">Shop now</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks