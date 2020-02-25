import Roles from '../prototypes/roles.enum';

export default {
    getRandomRole(players, config) {
        /**
         * @param player : [Player]
         * @param config {
                civil: number,
                undercover: number,
                white: number,
            }
         *  @return role au hasard en fonction des roles déjà donnés
         * Le nombre de player doit correspondre à l'addition du nombre de role
         */


        // Roles qu'il reste à donner
        // Copy de l'object sans référence
        const rolesToGive = JSON.parse(JSON.stringify(config))

        players.forEach(player => {
            if (Object.keys(rolesToGive).includes(player.role)) {
                rolesToGive[player.role] -= 1;
            }
        });

        /**
         * choisi le role dans les restants à donner au hasard
         * Pour une répartition plus homogène, la chance de tomber sur un role
         * dépend du nombre restant de ce role à donner
         */
        let nbRolesLeft = 0;
        Object.keys(rolesToGive).forEach(role => {
            nbRolesLeft += rolesToGive[role]
        });

        const roleIndex = Math.ceil(Math.random() * (nbRolesLeft));


        // Prend le role qui correspond à l'index au hasard
        // A chaque tour, l'accumulateur additionne le nombre de role
        // Des qu'il est plus grand que l'index, hop on prend le role
        let res = "";
        let acc = 0;
        let index = 0;
        const roles = Object.keys(rolesToGive);
        while (res == "" && index < Object.keys(rolesToGive).length) {
            acc += rolesToGive[roles[index]];
            if (acc >= roleIndex) {
                res = roles[index];
            }

            index += 1;
        }

        return res;
    },

    getIndexFirstPlayer(players, indexPrecJoueur) {
        /**
         * @param player : [Player]
         * @param indexPrecJoueur : Index du précédent joueur à avoir commencer
         * 0 si la partie vient de commencer
         * Return le premier joueur de la liste apte à commencer
         * Il doit : - ne pas être white
         *           - ne pas être éliminé
         * 
         * @return index du premier joueur apte à commencer
         */
        let index = indexPrecJoueur;

        while (index < players.length) {
            if (players[index].role != Roles.white && !players[index].isEliminated) {
                return index;
            }

            index += 1;
        }

    }
}