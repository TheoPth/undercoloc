export default {
    state: initialState(),
    getters: {
        players: state => {
            return state.players;
        }
    },
    mutations: {
        RESET_PLAYERS(state) {
            state.players = [];
        },
        SET_PLAYERS(state, players) {
            state.players = players;
        },
        ADD_PLAYER(state, player) {
            state.players.push(player);
        },
        UPDATE_PLAYER(state, player, index) {
            const curPlayers = state.players;
            curPlayers[index] = player;
            state.players = curPlayers;
        }
    },
    actions: {
        setPlayers({ commit }, players) {
            commit("SET_PLAYERS", players);
        },
        resetPlayers({ commit }) {
            commit('RESET_PLAYERS');
        },
        updatePlayer({ commit }, { player, index }) {
            commit("UPDATE_PLAYER", player, index);
        },
        addPlayer({ commit }, player) {
            commit("ADD_PLAYER", player);
        },
    },
}

function initialState() {
    return {
        players: [],
    }
}