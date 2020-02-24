import Vue from 'vue'
import Vuex from 'vuex'
import remotedevPlugin from 'vuex-remotedev';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

// MODULES
import modulePlayer from './modules/player';
import moduleConfig from './modules/config';
import moduleStateGame from './modules/stateGame';

const store = new Vuex.Store({
    modules: {
        players: modulePlayer,
        config: moduleConfig,
        stateGame: moduleStateGame,
    },
    plugins: [
        createPersistedState(),
    ],
})

remotedevPlugin(store);

export default store;