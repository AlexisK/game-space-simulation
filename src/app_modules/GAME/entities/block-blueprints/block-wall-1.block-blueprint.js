import {BlockBlueprint} from 'GAME/classes';
import { config } from 'GAME/config';

export const BlockWall1BlockBlueprint = new BlockBlueprint({
    name: 'Wall',
    imageUrl: 'color:#aaa:'+require('assets/blocks/b2.png'),
    sizeX: config.gridStep,
    sizeY: config.gridStep
});