import { SectorBlueprint, Ship } from 'GAME/classes';
import * as shipBlueprints from 'GAME/entities/ship-blueprints';

export var s0_0SectorBlueprint = new SectorBlueprint({
    name  : 'test sector',
    sizeX : 2000,
    sizeY : 1400,
    ships : [
        // Solar Station
        {x : 300, y : 500, actor : shipBlueprints.stSolar1ShipBlueprint},
        {x : 270, y : 500, actor : shipBlueprints.stDock1ShipBlueprint},
        {x : 330, y : 500, actor : shipBlueprints.stDock1ShipBlueprint},

        {x : 1700, y : 500, actor : shipBlueprints.stMine1ShipBlueprint},
        {x : 1650, y : 430, actor : shipBlueprints.stMine1ShipBlueprint},

        {x : 700, y : 1300, actor : shipBlueprints.stAlloyFactory1ShipBlueprint},
        {x : 700, y : 1320, actor : shipBlueprints.stDock1ShipBlueprint},
        {x : 700, y : 1280, actor : shipBlueprints.stDock1ShipBlueprint},
    ]
});
