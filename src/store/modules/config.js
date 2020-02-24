export default {
    state: initialState(),
    getters: {
        nbPlayer: state => {
            return state.civil + state.undercover + state.white;
        },
        nbCivil: state => {
            return state.civil;
        },
        nbUndercover: state => {
            return state.undercover;
        },
        nbWhite: state => {
            return state.white;
        },
        config: state => {
            return { "civil": state.civil, "undercover": state.undercover, "white": state.white };
        }
    },
    mutations: {
        SET_CONFIG_SUCCESS(state, roles) {
            state.civil = roles.civil;
            state.undercover = roles.undercover;
            state.white = roles.white;
        }
    },
    actions: {
        setConfig({ commit }, { civil, undercover, white }) {
            commit("SET_CONFIG_SUCCESS", { civil, undercover, white });
        },
    },
};

function initialState() {
    return {
        civil: 3,
        undercover: 0,
        white: 0,
    }
}