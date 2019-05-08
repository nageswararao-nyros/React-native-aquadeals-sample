import { REQ_HOME_DATA, RES_HOME_DATA, REQ_HOME_DEAL_DATA, RES_HOME_DEAL_DATA,  REQ_HOME_BRAND_DATA, RES_HOME_BRAND_DATA, REQ_HOME_DASHBOARD_DATA, RES_HOME_DASHBOARD_DATA } from '../actions/HomeApi';

const initialState = {
	data: '',
	homeDealData: '',
	homeBrandData: '',
	homeDashboardData: '',
	name: "siva"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RES_HOME_DATA:
      return { ...state, data: action.result };
    case RES_HOME_DEAL_DATA:
      return { ...state, homeDealData: action.result };
    case RES_HOME_BRAND_DATA:
      return { ...state, homeBrandData: action.result };
    case RES_HOME_DASHBOARD_DATA:
      return { ...state, homeDashboardData: action.result };
    default:
      return state;
  }
};

