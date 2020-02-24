export default {
    state: initialState(),
    getters: {
        words: state => {
            return { 'civil': state.civil, 'undercover': state.undercover, 'white': '^^' };
        }
    },
    mutations: {
        SET_WORDS(state, { civil, undercover }) {
            state.civil = civil;
            state.undercover = undercover;
        }
    },
    actions: {
        setWords({ commit }, { civil, undercover }) {
            commit('SET_WORDS', { civil, undercover });
        }
    }
}

function initialState() {
    return {
        indexCurPlayer: [],
        civil: "Chat",
        undercover: "Chien",
    }
}