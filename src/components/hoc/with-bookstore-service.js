import React from 'react';
import {BooksoreServiceConsumer} from '../bookstore-service-context';

//withBookstoreService это функция которая возвращает функцию
//которая принимает компонент которым мы будем оборачивать
const withBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BooksoreServiceConsumer>
        {
          (bookstoreService) => {
            return (
              <Wrapped {...props}
                       bookstoreService={bookstoreService}/>
            );
          }
        }

      </BooksoreServiceConsumer>

    );
  }

};

export default withBookstoreService;