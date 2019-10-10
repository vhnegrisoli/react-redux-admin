import React, { Component } from 'react';
import Tables from './Tables';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchTodos } from './actions';

const formName = 'Tables';

class TablesContainer extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
    console.log(this.props);
  }

  render() {
    return <Tables {...this.props} />;
  }
}

TablesContainer.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    todos: state.tableReducer.items,
    error: state.tableReducer.error,
    isLoading: state.tableReducer.isLoading,
  };
};

const form = reduxForm({
  form: formName,
});

export default connect(
  mapStateToProps,
  { fetchTodos },
)(form(TablesContainer));
