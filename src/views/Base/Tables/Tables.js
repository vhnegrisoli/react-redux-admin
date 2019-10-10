import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

class Tables extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
      error: false
    }
    this.initialize();
  }

  async initialize() {
    await axios.get(API_URL)
    .then(res => {
      this.setState({
        data: res.data,
        loading: false,
      })
    })
    .catch(err => {
      this.setState({
        error: true
      })
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="r2" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.data.map(item => (
                    <tr>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {item.completed === true  ? (
                      <td>
                      <Badge color="success">Completed</Badge>
                    </td>
                    ) : (
                      <td>
                      <Badge color="danger">Uncompleted</Badge>
                    </td>  
                    )}
                  </tr>
                  ))}  
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tables;
