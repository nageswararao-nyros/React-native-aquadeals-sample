export const REQ_HOME_DATA = 'REQ_HOME_DATA'
export const RES_HOME_DATA = 'RES_HOME_DATA'
export const REQ_HOME_DEAL_DATA = 'REQ_HOME_DEAL_DATA'
export const RES_HOME_DEAL_DATA = 'RES_HOME_DEAL_DATA'
export const REQ_HOME_BRAND_DATA = 'REQ_HOME_BRAND_DATA'
export const RES_HOME_BRAND_DATA = 'RES_HOME_BRAND_DATA'
export const REQ_HOME_DASHBOARD_DATA = 'REQ_HOME_DASHBOARD_DATA'
export const RES_HOME_DASHBOARD_DATA = 'RES_HOME_DASHBOARD_DATA'

export const reqHomeData = () =>({
	type: REQ_HOME_DATA
});
export const resHomeData = homeData =>({
	type: RES_HOME_DATA,
	homeData
});
export const reqHomeDealData = () =>({
	type: REQ_HOME_DEAL_DATA
});
export const resHomeDealData = homeDealData =>({
	type: RES_HOME_DEAL_DATA,
	homeDealData
});
export const reqHomeBrandData = () =>({
	type: REQ_HOME_BRAND_DATA
});
export const resHomeBrandData = homeBrandData =>({
	type: RES_HOME_BRAND_DATA,
	homeBrandData
});
export const reqHomeDashboardData = () =>({
	type: REQ_HOME_DASHBOARD_DATA
});
export const resHomeDashboardData = homeDashboardData =>({
	type: RES_HOME_DASHBOARD_DATA,
	homeDashboardData
});