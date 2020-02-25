import RoleService from '../src/services/role.service';

describe('getRandomRole', () => {
    it('only civils', async() => {
        let role = RoleService.getRandomRole(
            [{ "name": "", "role": "player", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "player", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "player", "isEliminated": false, "pts": 0 }
            ], {
                civil: 3,
                undercover: 0,
                white: 0,
            });

        expect(role).toBe("civil");
    });

    it('only civil role left', async() => {
        let role = RoleService.getRandomRole(
            [{ "name": "", "role": "undercover", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "player", "isEliminated": false, "pts": 0 }
            ], {
                civil: 3,
                undercover: 0,
                white: 0,
            });

        expect(role).toBe("civil");
    });

    it('only undercover role left', async() => {
        let role = RoleService.getRandomRole(
            [{ "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "player", "isEliminated": false, "pts": 0 }
            ], {
                civil: 2,
                undercover: 1,
                white: 0,
            });

        expect(role).toBe("undercover");
    });

    it('only white role left', async() => {
        let role = RoleService.getRandomRole(
            [{ "name": "", "role": "undercover", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "player", "isEliminated": false, "pts": 0 }
            ], {
                civil: 2,
                undercover: 1,
                white: 1,
            });

        expect(role).toBe("white");
    });
});

describe('getIndexFirstPlayer', () => {
    it('Composition normal, prend le premier', async() => {
        let indexNextPlayer = RoleService.getIndexFirstPlayer(
            [{ "name": "", "role": "undercover", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 }
            ], 0);

        expect(indexNextPlayer).toBe(0);
    });

    it('Composition avec white', async() => {
        let indexNextPlayer = RoleService.getIndexFirstPlayer(
            [{ "name": "", "role": "white", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 }
            ], 0);

        expect(indexNextPlayer).toBe(1);
    });

    it('Composition avec white et undercover', async() => {
        let indexNextPlayer = RoleService.getIndexFirstPlayer(
            [{ "name": "", "role": "white", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "undercover", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 }
            ], 0);

        expect(indexNextPlayer).toBe(1);
    });


    it('Composition avec white et perdant', async() => {
        let indexNextPlayer = RoleService.getIndexFirstPlayer(
            [{ "name": "", "role": "undercover", "isEliminated": true, "pts": 0 },
                { "name": "", "role": "white", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 }
            ], 0);

        expect(indexNextPlayer).toBe(2);
    });

    it('Composition avec white et perdant avec jeu précédent', async() => {
        let indexNextPlayer = RoleService.getIndexFirstPlayer(
            [{ "name": "", "role": "undercover", "isEliminated": true, "pts": 0 },
                { "name": "", "role": "white", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 }
            ], 1);

        expect(indexNextPlayer).toBe(2);
    });

    it('Composition avec white et perdant avec jeu précédent', async() => {
        let indexNextPlayer = RoleService.getIndexFirstPlayer(
            [{ "name": "", "role": "undercover", "isEliminated": true, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "white", "isEliminated": false, "pts": 0 },
                { "name": "", "role": "civil", "isEliminated": false, "pts": 0 }
            ], 1);

        expect(indexNextPlayer).toBe(1);
    });
});