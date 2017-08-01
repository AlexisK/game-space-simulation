import { Block } from 'GAME/classes';

export class Actor {
    static getSectorCoords(target) {
        if ( target instanceof Block) {
            return {
                x: (Math.cos(-target.ship.angle) * target.x - Math.sin(-target.ship.angle) * target.y) + target.ship.x,
                y: (Math.cos(target.ship.angle) * target.y + Math.sin(target.ship.angle) * target.x) + target.ship.y
            };
        }
        return target;
    }

    constructor() {
        this.sector = null;
        this.x      = 0;
        this.y      = 0;
        this.angle = 0;
    }

    getAngle(target) {
        target = Actor.getSectorCoords(target);
        let selfPos = Actor.getSectorCoords(this);

        return Math.atan2(target.y - selfPos.y, target.x - selfPos.x);
    }

    getDistance(target) {
        target = Actor.getSectorCoords(target);
        let selfPos = Actor.getSectorCoords(this);

        return Math.sqrt(Math.pow(target.x - selfPos.x, 2) + Math.pow(target.y - selfPos.y, 2));
    }

    calcCordsByTargetAndDistance(target, distance) {
        target = Actor.getSectorCoords(target);
        let selfPos = Actor.getSectorCoords(this);

        let angle = this.getAngle(target);
        return {
            x : selfPos.x + Math.cos(angle) * distance,
            y : selfPos.y + Math.sin(angle) * distance
        };
    }

    moveTo(target, desiredDistance) {
        target = Actor.getSectorCoords(target);

        this.angle   = this.getAngle(target);
        let distance = this.getDistance(target);
        if ( distance < desiredDistance ) {
            return true;
        }
        Object.assign(this, this.calcCordsByTargetAndDistance(target, Math.min(this.blueprint.speed, desiredDistance)));
        return false;
    }

    _registerInSector(sector) {
        this.sector = sector;
    }

    _unregisterInSector() {
        this.sector = null;
    }

}
