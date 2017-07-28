import { Actor } from './actor.class';

export class SimulationActor extends Actor {
    constructor() {
        super();
        this.actor  = null;
        this.isExecutingAi = false;
        this.aiPackage = null;
        this.currentAiScript = null;
        this.aiActionIndex = 0;
        this.aiStack = {};
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
