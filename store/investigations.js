export const state = () => ({
  resources: [],
  resource: null,
})

export const mutations = {
  SET_RESOURCES: (state, value) => {
    state.resources = value;
  },
  SET_RESOURCE: (state, value) => {
    state.resource = value;
  },
  GET_ITEM: (state, id) => {
    let resource = state.resources.find(item => item.id === id)
    state.resource = resource
  },
  RESET_ITEM: (state) => {
    state.resource = null
  },
};

export const actions = {
  getItem({ commit, dispatch, getters }, resourceId) {
    if(getters.resources.length > 0){
      commit('GET_ITEM', resourceId)
    }else{
      dispatch('getResource', resourceId)
    }
    return
  },
  resetItem({ commit, dispatch }) {
    commit('RESET_ITEM')
    return
  },
  getResources({ commit, dispatch }, params) {
    return this.$repositories.investigations.index(params)
      .then((data) => {
        if(data !== null){
          commit('SET_RESOURCES', data);
        }
      });
  },
  getResource({ commit, dispatch }, resourceId) {
    return this.$repositories.investigations.show(resourceId)
      .then((data) => {
        if(data){
          commit('SET_RESOURCE', responseData);
        }
      });
  },
  postResource({ commit, dispatch }, params) {
    return this.$repositories.investigations.create(params);
  },
  putResource({ commit, dispatch }, params) {
    return this.$repositories.investigations.update(params.resource_id, params.params);
  },
  deleteResource({ commit, dispatch }, resourceId) {
    return this.$repositories.investigations.delete(resourceId);
  },
}

export const getters = {
  resources: state => state.resources,
  resource: state => state.resource,
};

