import {BlockBlueprint} from 'GAME/classes';

export const HullMedMiddleBlockBlueprint = new BlockBlueprint({
    name: 'Hull',
    imageUrl: require('assets/shipparts/body-med-middle.png'),
    cls: 'hull-med-middle',
    sizeX: 60,
    sizeY: 24
});
