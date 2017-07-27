import { SectorBlueprint, Ship } from 'GAME/classes';
import * as shipBlueprints from 'GAME/entities/ship-blueprints';

export var s0_0SectorBlueprint = new SectorBlueprint({
    name  : 'test sector',
    sizeX : 2000,
    sizeY : 1400,
    ships : [
        {x : 500, y : 500, actor : new Ship(shipBlueprints.stSolar1ShipBlueprint)},
        {x : 1500, y : 500, actor : new Ship(shipBlueprints.stMine1ShipBlueprint)},
    ]
});
