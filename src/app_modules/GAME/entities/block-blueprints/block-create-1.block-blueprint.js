import {BlockBlueprint} from 'GAME/classes';
import { config } from 'GAME/config';

export const BlockCreate1BlockBlueprint = new BlockBlueprint({
    name: 'Box',
    imageUrl: 'color:#eee:'+require('assets/blocks/b3.png'),
    sizeX: config.gridStep,
    sizeY: config.gridStep
});