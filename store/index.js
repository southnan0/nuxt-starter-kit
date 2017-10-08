export const state = () => {
    return {
        username: ''
    }
};

export const mutations = {
    SET_USER(state, user) {
        state.username = user;
    }
};

export const actions = {
    nuxtServerInit({commit}, {req}) {
        // console.info(req)
    },
    login({commit}, {username}) {
        commit('SET_USER', username)
    }
};