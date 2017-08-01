import {BlockBlueprint} from 'GAME/classes';

export const Dock1BlockBlueprint = new BlockBlueprint({
    name: 'Dock small',
    imageUrl: require('assets/shipparts/dock-1.png'),
    cls: 'dock1',
    sizeX: 61,
    sizeY: 58,
    dockSize: 5
});