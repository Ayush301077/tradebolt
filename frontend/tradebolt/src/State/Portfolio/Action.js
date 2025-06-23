import { UPDATE_TOTAL_INVESTED } from "./ActionTypes";

export const updateTotalInvested = (totalInvested) => ({
    type: UPDATE_TOTAL_INVESTED,
    payload: totalInvested,
  });