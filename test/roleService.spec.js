import RoleService from '../src/services/role.service';

describe('role.service', () => {
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
})