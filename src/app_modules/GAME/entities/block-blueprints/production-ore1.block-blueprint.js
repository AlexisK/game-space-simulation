import {BlockBlueprint} from 'GAME/classes';
import {oreProductionBlueprint} from 'GAME/entities/production-blueprints';

export const ProductionOre1BlockBlueprint = new BlockBlueprint({
    name: 'Rock',
    cls: 'production-ore1',
    cargo: 40000,
    sizeX: 60,
    sizeY: 60,
    production: [oreProductionBlueprint]
});