import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .post('/store/:data_store', controller.store)
  .get('/registros', controller.registros)
  .get('/query', controller.byQuery)
  .get('/address', controller.create_account)
  .get('/get_transaction/:tx', controller.getTransaction)
  .get('/get_balance/:address', controller.balance);
   
