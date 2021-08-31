import examplesRouter from './api/controllers/examples/router';
import smartcontractRouter from './api/controllers/examples/smrouter';
import smartcontractRouternft from './api/controllers/examples/nftrouter';
import superticketRouter from './api/controllers/examples/bani_router';
//import smartcontractbsbCore from './api/controllers/examples/core_router';
export default function routes(app) {
  //app.use('/api/v2/bsbcore', smartcontractbsbCore);
  app.use('/api/v2/nft', smartcontractRouternft);
  app.use('/api/v2/smartcontract', smartcontractRouter);
  app.use('/api/v2/ecotoken', examplesRouter);
  app.use('/api/v2/superticket', superticketRouter);
}
