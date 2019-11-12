
const state={
   nm:window.localStorage.getItem('nowNm') || '北京',
    id:window.localStorage.getItem('nowId') || 1
};
const mutations= {
      CITY_INFO(state,transmit){
          state.nm=transmit.nm;
          state.id=transmit.id;
      }
};
const actions ={

};
export default {
    namespaced:true,
    state,
    mutations,
    actions
}
