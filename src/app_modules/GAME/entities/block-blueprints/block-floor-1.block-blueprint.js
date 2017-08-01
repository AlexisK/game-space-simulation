import {BlockBlueprint} from 'GAME/classes';
import { config } from 'GAME/config';

export const BlockFloor1BlockBlueprint = new BlockBlueprint({
    name: 'Floor',
    imageUrl: 'color:#aaa:'+require('assets/blocks/b1.png'),
    sizeX: config.gridStep,
    sizeY: config.gridStep
});