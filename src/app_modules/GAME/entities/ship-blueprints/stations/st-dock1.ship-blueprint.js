import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';

export var stDock1ShipBlueprint = new ShipBlueprint({
    name: 'Dock',
    shipType: stShipType,
    cargo: 5000,
    sizeX: 16,
    sizeY: 16,
    dockSize: 10
});
