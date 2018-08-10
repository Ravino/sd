"use strict";

module. exports = () => (pReq, pAccess, pRefresh, pProfile, pParam, pDone) => {

  global. logger. info (pReq);
  global. logger. info (pAccess);
  global. logger. info (pRefresh);
  global. logger. info (pParam);
  global. logger. info (pProfile);
  pDone ();

};
