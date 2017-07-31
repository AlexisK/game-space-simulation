import {BlockBlueprint} from 'GAME/classes';
import {batteryProductionBlueprint} from 'GAME/entities/production-blueprints';

export const ProductionSolar1BlockBlueprint = new BlockBlueprint({
    name: 'Solar Panels',
    cargo: 10000,
    sizeX: 120,
    sizeY: 120,
    production: [batteryProductionBlueprint]
});