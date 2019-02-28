import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    //если ловим ошибку, то меняем значение на true
    this.setState({hasError: true});
  }

  render() {
    //если есть ошибка - отрисовываем сообщение про ошибку
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }
    //если нет ошибки, то отрисовываем потомка
    return this.props.children;

  }

}