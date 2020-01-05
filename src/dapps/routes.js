import saladRoutes from './Salad/routes';
import manageENSRoutes from './ManageENS/routes';
import buySubDomainRoutes from './BuySubdomain/routes';
import scheduleTransactionRoutes from './ScheduleTransaction/routes';
import makerDaiRoutes from './MakerDai/routes';
import makerSaiRoutes from './MakerSai/routes';
import ambrpayRoutes from './Ambrpay/routes';
// import soDapp from './SOTDapps/routes';

const routes = {
  salad: saladRoutes,
  manageENS: manageENSRoutes,
  buySubDomain: buySubDomainRoutes,
  scheduleTransaction: scheduleTransactionRoutes,
  makerDaiRoutes: makerDaiRoutes,
  makerSaiRoutes: makerSaiRoutes,
  amberpay: ambrpayRoutes
  // soDapp: soDapp
};

export default routes;
