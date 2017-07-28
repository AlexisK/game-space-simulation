export class Production {
    constructor(blueprint) {
        this.countdown = 0;
        this.ship = null;
        this.blueprint = blueprint;
    }

    tick() {
        if ( this.countdown === 0 ) {
            if ( this.hasResources() ) {
                this.consumeResources();
                this.provideResult();
                this.countdown = this.blueprint.timeInTicks;
            }
        } else {
            this.countdown -= 1;
        }
    }

    consumeResources() {
        let list = this.blueprint.input;
        for ( let i = 0; i < list.length; i++) {
            for (let j = 0; j < this.ship.inventory.length; j++ ) {
                let itemPair = this.ship.inventory[j];
                if ( itemPair[0] === list[i][0] ) {
                    j = this.ship.inventory.length;
                    itemPair[1] -= list[i][1];
                }
            }
        }
    }

    provideResult() {
        let list = this.blueprint.output;
        for ( let i = 0; i < list.length; i++) {
            let found = false;
            for (let j = 0; j < this.ship.inventory.length; j++ ) {
                let itemPair = this.ship.inventory[j];
                if ( itemPair[0] === list[i][0] ) {
                    found = true;
                    j = this.ship.inventory.length;
                    itemPair[1] += list[i][1];
                }
            }
            if ( !found ) {
                this.ship.inventory.push([list[i][0],list[i][1]]);
            }
        }
        console.log(this.ship.inventory);
    }

    hasResources() {
        let list = this.blueprint.input;
        for ( let i = 0; i < list.length; i++) {
            let found = false;
            for (let j = 0; j < this.ship.inventory.length; j++ ) {
                let itemPair = this.ship.inventory[j];
                if ( itemPair[0] === list[i][0] ) {
                    found = true;
                    j = this.ship.inventory.length;
                    if ( itemPair[1] < list[i][1]) {
                        return false;
                    }
                }
            }
            if ( !found ) {
                return false;
            }
        }
        return true;
    }
}
