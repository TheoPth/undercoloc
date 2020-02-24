import roles from './roles.enum';

export class Player {
    constructor(name = "", role = roles.player, isEliminated = false, pts = 0) {
        this.name = name;
        this.role = role;
        this.isEliminated = isEliminated;
        this.pts = pts;
    }
}