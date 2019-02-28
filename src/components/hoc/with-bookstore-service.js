import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context';

//withBookstoreService это функция которая возвращает функцию
//которая принимает компонент которым мы будем оборачивать
const withBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (
              <Wrapped {...props}
                       bookstoreService={bookstoreService}/>
            );
          }
        }

      </BookstoreServiceConsumer>

    );
  }

};

export default withBookstoreService;