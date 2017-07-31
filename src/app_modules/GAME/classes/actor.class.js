import { Block } from 'GAME/classes';

export class Actor {
    constructor() {
        this.sector = null;
        this.x      = 0;
        this.y      = 0;
        this.angle = 0;
    }

    getTarget(target) {
        if ( target instanceof Block) {
            return {
                x: (Math.cos(-target.ship.angle) * target.x - Math.sin(-target.ship.angle) * target.y) + target.ship.x,
                y: (Math.cos(target.ship.angle) * target.y + Math.sin(target.ship.angle) * target.x) + target.ship.y
            };
        }
        return target;
    }

    getAngle(target) {
        target = this.getTarget(target);
        return Math.atan2(target.y - this.y, target.x - this.x);
    }

    getDistance(target) {
        target = this.getTarget(target);
        return Math.sqrt(Math.pow(target.x - this.x, 2) + Math.pow(target.y - this.y, 2));
    }

    calcCordsByTargetAndDistance(target, distance) {
        target = this.getTarget(target);
        let angle = this.getAngle(target);
        return {
            x : this.x + Math.cos(angle) * distance,
            y : this.y + Math.sin(angle) * distance
        };
    }

    moveTo(target, desiredDistance) {
        target = this.getTarget(target);
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
