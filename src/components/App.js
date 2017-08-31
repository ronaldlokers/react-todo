import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import Main from './Main';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers';

const mapStateToProps = (state, { match: { params } }) => {
  const allowedValues = ['active', 'all', 'completed'];
  let filter = 'all';

  if (allowedValues.indexOf(params.filter) !== -1) {
    filter = params.filter;
  }

  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  };
};

const App = withRouter(connect(mapStateToProps, actions)(Main));

export default App;
