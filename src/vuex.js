

import { createStore } from 'vuex'

export default createStore({
    state: {
        user: null,
        cworkouts: null,
        exercises: null,
        selectedExercise: null
    },
    getters: {
        user: (state) => {
            return state.user
        },
        cworkouts: (state) => {
            return state.cworkouts
        },
        exericses: (state) => {
            return state.exercises
        },
        selectedExercise: (state) => {
            return state.selectedExercise
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        },
        setUser(context, user) {
            context.commit('setUser', user)
        },
        cworkouts(context, cworkouts) {
            context.commit('cworkouts', cworkouts)
        },
        exercises(context, exercises) {
            context.commit('exercises', exercises)
        },
        selectedExercise(context, selectedExercise) {
            context.commit('selectedExercise', selectedExercise)
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
        },
        cworkouts(state, cworkouts) {
            console.log('cworkouts: ' + cworkouts)
            state.cworkouts = cworkouts
        },
        exercises(state, exercises) {
            console.log('exercises: ' + exercises)
            state.exercises = exercises
        },
        selectedExercise(state, selectedExercise) {
            console.log('selectedExercise: ' + selectedExercise)
            state.selectedExercise = selectedExercise
        }
    }
})