import { SimulationActor } from './simulation-actor.class';
import { Production } from './production.class';
import { Block } from './block.class';
import {config} from 'GAME/config';
import {removeFromList} from 'utils/helpers';

export class Ship extends SimulationActor {
    constructor(blueprint) {
        super();
        this.inventory = [];
        this.docked    = [];
        this.aiPackage = null;
        this.target    = null;
        this.blueprint = blueprint;
        this.dockedTo  = null;
        this.production = this.blueprint.production.map(bp => new Production(bp));
        this.production.forEach(production => production.ship = this);
        this.calculateParams();
        this.normalize();
    }

    calculateParams() {
        this.blocks = [];
        this.blocksWithDocks = [];

        this.docksTotalSize = 0;
        this.cargoTotalSize = 0;

        this.blueprint.blocks.forEach(([blockBlueprint, x, y, angle]) => {
            let block = new Block(this, blockBlueprint, {x, y, angle});
            this.blocks.push(block);

            if ( blockBlueprint.dockSize ) {
                this.docksTotalSize += blockBlueprint.dockSize;
                this.blocksWithDocks.push(block);
            }
            this.cargoTotalSize += blockBlueprint.cargo;
        });
    }

    normalize() {
        this.hasDock         = this.docksTotalSize > 0;
        this.hasDockingSpace = this.docked.length < this.docksTotalSize;
        this.isStation       = this.blueprint.speed === 0;
        this.followOffset = Math.max(this.blueprint.sizeX, this.blueprint.sizeY) / 2;
        this.dockRequestOffset = this.followOffset + config.dockingRequestDistance;
    }


    tick() {
        super.tick();
        this.docked.forEach(ship => ship.tick());
        this.production.forEach(production => production.tick());
    }

    moveTo(target, distance = this.blueprint.speed) {
        return super.moveTo(target, distance);
    }

    requestDock(ship) {
        if ( this.hasDockingSpace && this.getDistance(ship) <= this.dockRequestOffset ) {
            for ( let i = 0; i < this.blocksWithDocks.length; i++ ) {
                if ( this.blocksWithDocks[i].hasDockingSpace ) {
                    ship.target = this.blocksWithDocks[i];
                    this.blocksWithDocks.push(this.blocksWithDocks.shift());
                    return false;
                }
            }
            return false;
        }
    }

    _requestDock(ship) {
        this.docked.push(ship);
        this.hasDockingSpace = this.docked.length < this.docksTotalSize;
    }

    _requestUndock(ship) {
        removeFromList(this.docked, ship);
        this.hasDockingSpace = this.docked.length < this.docksTotalSize;
    }

    dockTo(target) {
        if ( this.dockedTo ) {
            this.dockedTo.requestUndock(this);
        }
        return target.requestDock(this);
    }

    _dockTo(target) {
        if ( this.sector ) {
            this.sector.unregisterActor(this);
        }
        this.dockedTo = target;
    }

    undock() {
        if ( this.dockedTo ) {
            this.dockedTo.requestUndock(this);
        }
    }

    _undock(sector) {
        sector.registerActor(this, this.dockedTo);
        this.dockedTo = null;
    }
}