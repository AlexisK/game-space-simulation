import {BlockBlueprint} from 'GAME/classes';
import {batteryProductionBlueprint} from 'GAME/entities/production-blueprints';

export const ProductionSolar1BlockBlueprint = new BlockBlueprint({
    name: 'Solar Panels',
    cls: 'production-solar1',
    cargo: 10000,
    sizeX: 240,
    sizeY: 240,
    production: [batteryProductionBlueprint]
});