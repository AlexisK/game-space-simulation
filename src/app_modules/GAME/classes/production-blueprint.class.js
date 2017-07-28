import {config} from 'GAME/config';

export class ProductionBlueprint {
    constructor(params) {
        this.input = [];
        this.output = [];
        this.time = 1;
        Object.assign(this, params);
        this.timeInTicks = parseInt(this.time * 1000 / config.tickTimeframe);
    }
}