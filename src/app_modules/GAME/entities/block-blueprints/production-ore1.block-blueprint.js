import {BlockBlueprint} from 'GAME/classes';
import {oreProductionBlueprint} from 'GAME/entities/production-blueprints';

export const ProductionOre1BlockBlueprint = new BlockBlueprint({
    name: 'Rock',
    imageUrl: require('assets/shipparts/rock-1.png'),
    cls: 'production-ore1',
    cargo: 40000,
    sizeX: 186,
    sizeY: 191,
    production: [oreProductionBlueprint]
});