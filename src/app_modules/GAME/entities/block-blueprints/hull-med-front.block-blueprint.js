import {BlockBlueprint} from 'GAME/classes';

export const HullMedFrontBlockBlueprint = new BlockBlueprint({
    name: 'Hull',
    imageUrl: require('assets/shipparts/body-med-cockpit.png'),
    cls: 'hull-med-front',
    sizeX: 20,
    sizeY: 24
});
