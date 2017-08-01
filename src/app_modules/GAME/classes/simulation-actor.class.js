import { Actor } from './actor.class';
import { Block } from './block.class';
import { removeFromList } from 'utils/helpers';
import { config } from 'GAME/config';

export class SimulationActor extends Actor {
    constructor() {
        super();
        this.docked    = [];
        this.inventory = [];
        this.dockedTo  = null;
    }

    normalize() {
        this.hasDock         = this.docksTotalSize > 0;
        this.hasDockingSpace = this.docked.length < this.docksTotalSize;
    }

    recalculateBlocks() {
        this.blocks = [];
        this.blocksWithDocks = [];

        this.docksTotalSize = 0;
        this.cargoTotalSize = 0;

        this.blueprint.blocks.forEach(([blockBlueprint, x, y, angle]) => {
            let block = new Block(this, blockBlueprint, {
                x: x * config.gridStep,
                y: y * config.gridStep,
                angle});
            this.blocks.push(block);

            if ( blockBlueprint.dockSize ) {
                this.docksTotalSize += blockBlueprint.dockSize;
                this.blocksWithDocks.push(block);
            }
            this.cargoTotalSize += blockBlueprint.cargo;
        });
    }

    tick() {

    }


    // Docking
    requestDock(ship) {
        if ( this.hasDockingSpace && this.getDistance(ship) <= this.dockRequestOffset ) {
            for (let i = 0; i < this.blocksWithDocks.length; i++) {
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
