

import { createStore } from 'vuex'

export default createStore({
    state: {
        user: null
    },
    getters: {
        user: (state) => {
            return state.user
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        }
    },
    mutations: {
        user(state, user) {
            console.log('user: ' + user)
            state.user = user
        },
        setUser(state, user) {
            console.log('setUser: ' + user)
            state.user = user
        }
    }
})