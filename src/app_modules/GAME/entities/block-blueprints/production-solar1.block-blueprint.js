import {BlockBlueprint} from 'GAME/classes';
import {batteryProductionBlueprint} from 'GAME/entities/production-blueprints';

export const ProductionSolar1BlockBlueprint = new BlockBlueprint({
    name: 'Solar Panels',
    imageUrl: require('assets/shipparts/hull-part-2.png'),
    cargo: 10000,
    sizeX: 62,
    sizeY: 86,
    production: [batteryProductionBlueprint]
});