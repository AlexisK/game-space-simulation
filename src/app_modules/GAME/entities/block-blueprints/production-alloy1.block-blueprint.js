import {BlockBlueprint} from 'GAME/classes';
import {alloyProductionBlueprint} from 'GAME/entities/production-blueprints';

export const ProductionAlloy1BlockBlueprint = new BlockBlueprint({
    name: 'Alloy Melting Conveyor',
    imageUrl: require('assets/shipparts/hull-part-1.png'),
    cargo: 80000,
    sizeX: 171,
    sizeY: 48,
    production: [alloyProductionBlueprint]
});