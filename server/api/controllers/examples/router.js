import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .get('/', controller.getBlockNumber)
  .get('/get_block', controller.getBlockNumber)
  .get('/query', controller.byQuery)
  .get('/address', controller.create_account)
  .get('/get_transaction/:tx', controller.getTransaction)
  .post('/get_balance/:address', controller.balance);
   
