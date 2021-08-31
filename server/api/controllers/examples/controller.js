import ExamplesService from '../../services/examples.service';
import BlockchainServicies from '../../services/blockchain.services';


export class Controller {

  createuserbani(req,res,error){
    BlockchainServicies.createuserbani(req.query.id,req.query.user,req.query.role,req.query.address)
    .then(r => res.json(r));

  }

  store(req, res,error) {
    BlockchainServicies.storeData(req.query.data_store,req.query.cuenta,req.query.llave)
    .then(r=> res.json(r));
  
  }

  registros(req, res) {
    BlockchainServicies.getData()
    .then(r=> res.json(r));
  }

  getBlockNumber(req, res) {
    BlockchainServicies.getBlockNumber()
      .then(r => res.json(r));
  }

  byQuery(req, res) {
    BlockchainServicies.all()
      .then(r => res.json(' EL ID :  ' + req.query.id + ' pertenece a : ' + req.query.name));
  }

  byId(req, res) {
    ExamplesService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    ExamplesService
      .create(req.body.name)
      .then(r => res()
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r));
  }

  create_account(req, res) {
    BlockchainServicies.create_account()
      .then(r => {
        if (r) res.json(r);
        else res.status(404).json(r);
      });
  }

  balance(req, res) {
    BlockchainServicies.balance(req.params.address)
      .then(r => res.json(r));
  }

  getTransaction(req, res) {
    BlockchainServicies.getTransaction(req.params.tx)
      .then(r => res.json(r));

  }
}
export default new Controller();
