import { Actor } from './actor.class';

export class SimulationActor extends Actor {
    constructor() {
        super();
        this.actor  = null;
        this.sector = null;
        this.isExecutingAi = false;
        this.aiPackage = null;
        this.currentAiScript = null;
        this.aiActionIndex = 0;
        this.aiStack = {};
        this.x      = 0;
        this.y      = 0;
        this.angle = 0;
    }

    getAngle(target) {
        return Math.atan2(target.y - this.y, target.x - this.x);
    }

    getDistance(target) {
        return Math.sqrt(Math.pow(this.target.x - this.x, 2) + Math.pow(this.target.y - this.y, 2));
    }

    calcCordsByTargetAndDistance(target, distance) {
        let angle = this.getAngle(target);
        return {
            x : this.x + Math.cos(angle) * distance,
            y : this.y + Math.sin(angle) * distance
        };
    }

    tick() {
        if ( this.isExecutingAi ) {
            this.currentAiScript();
        } else if (this.aiPackage) {
            this.aiPackage.run(this);
        }
    }

    stopExecutingAi() {
        this.isExecutingAi = false;
    }

    executeAi(worker) {
        this.currentAiScript = () => {
            worker(this.stopExecutingAi.bind(this));
        };
        this.isExecutingAi = true;
    }
    executeAiOnce(worker) {
        this.currentAiScript = () => {
            worker(this.stopExecutingAi.bind(this));
            this.currentAiScript = () => {};
        };
        this.isExecutingAi = true;
    }
}
