import React from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import PropTypes from 'prop-types';

const Tables = ({ todos, isLoading, error }) => (
  <div className="animated fadeIn">
    <Row>
      <Col xs="r2" lg="6">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Simple Table
          </CardHeader>
          <CardBody>
            {isLoading ? (
              <div>
                <p>Carregando...</p>
              </div>
            ) : (
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
                  {todos.map(item => (
                    <tr>
                      <td>{item.userId}</td>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      {item.completed === true ? (
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
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

Tables.propTypes = {
  todos: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.array,
};

export default Tables;
