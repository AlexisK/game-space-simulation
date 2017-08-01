import {BlockBlueprint} from 'GAME/classes';
import { config } from 'GAME/config';

export const BlockFloor3x3_1BlockBlueprint = new BlockBlueprint({
    name: 'Floor',
    imageUrl: 'color:#aaa:'+require('assets/blocks/b3x3_1.png'),
    sizeX: config.gridStep * 3,
    sizeY: config.gridStep * 3
});