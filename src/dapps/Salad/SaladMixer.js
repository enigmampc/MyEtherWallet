/* eslint-disable */
/*!
 */

import { CoinjoinClient } from '@salad/client';
import { REACT_APP_OPERATOR_URL } from './config/config';

export default function SaladMixer(account, web3) {
  
  const protocolHost =
    window.location.protocol + '//' + window.location.hostname;
  const salad = new CoinjoinClient(
    REACT_APP_OPERATOR_URL || protocolHost,
    web3
  );

  return salad;
}
