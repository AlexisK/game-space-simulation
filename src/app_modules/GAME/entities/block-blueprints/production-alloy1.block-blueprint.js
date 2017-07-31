import {BlockBlueprint} from 'GAME/classes';
import {alloyProductionBlueprint} from 'GAME/entities/production-blueprints';

export const ProductionAlloy1BlockBlueprint = new BlockBlueprint({
    name: 'Alloy Melting Conveyor',
    cargo: 80000,
    sizeX: 240,
    sizeY: 80,
    production: [alloyProductionBlueprint]
});