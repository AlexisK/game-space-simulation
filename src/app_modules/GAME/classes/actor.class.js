export class Actor {
    constructor() {
        this.sector = null;
        this.x      = 0;
        this.y      = 0;
        this.angle = 0;
    }

    getAngle(target) {
        return Math.atan2(target.y - this.y, target.x - this.x);
    }

    getDistance(target) {
        return Math.sqrt(Math.pow(target.x - this.x, 2) + Math.pow(target.y - this.y, 2));
    }

    calcCordsByTargetAndDistance(target, distance) {
        let angle = this.getAngle(target);
        return {
            x : this.x + Math.cos(angle) * distance,
            y : this.y + Math.sin(angle) * distance
        };
    }

    moveTo(target, desiredDistance) {
        this.angle   = this.getAngle(target);
        let distance = this.getDistance(target);
        if ( distance < desiredDistance ) {
            return true;
        }
        Object.assign(this, this.calcCordsByTargetAndDistance(target, this.blueprint.speed));
        return false;
    }

    _registerInSector(sector) {
        this.sector = sector;
    }

    _unregisterInSector() {
        this.sector = null;
    }

}
