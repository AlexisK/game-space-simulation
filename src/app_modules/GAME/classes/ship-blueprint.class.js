import { ImageGenerator } from './image-generator.class';

export class ShipBlueprint {
    constructor(params) {
        this.name       = null;
        this.shipType   = null;
        this.cargo      = 0;
        this.speed      = 0;
        this.sizeX      = 0;
        this.sizeY      = 0;
        this.dockSize   = 0;
        this.production = [];
        this.blocks     = [];
        Object.assign(this, params);
        this.calculateBoundaries();
        this.createImage();
    }

    calculateBoundaries() {
        let top    = 0;
        let right  = 0;
        let bottom = 0;
        let left   = 0;

        this.blocks.forEach(([bp, x, y, angle]) => {
            let x2 = bp.sizeX / 2;
            let y2 = bp.sizeY / 2;
            console.log(x, y);
            top    = Math.max(top, y + y2);
            right  = Math.max(right, x + x2);
            bottom = Math.min(bottom, y - y2);
            left   = Math.min(left, x - x2);
        });
        this.sizeX = right - left;
        this.sizeY = top - bottom;

        // calc center
        let offsetX = (right + left) / 2;
        let offsetY = (top + bottom) / 2;
        this.blocks.forEach(params => {
            params[1] -= offsetX;
            params[2] -= offsetY;
        });
        console.log({top, right, bottom, left, offsetX, offsetY, sizeX: this.sizeX, sizeY: this.sizeY});

    }

    createImage() {
        this.imageGenerator = new ImageGenerator(this.sizeX, this.sizeY);
        this.blocks.map(([bp, x, y, angle]) => [bp.imageUrl, x, y, angle, bp.sizeX, bp.sizeY]).forEach(data => this.imageGenerator.addImage(data));

        this.getImageData = new Promise(resolve => {
            this.imageGenerator.generatePng()
                .then(uri => {
                    this.imageUri = uri;
                    resolve({uri: this.imageUri});
                    //console.log(this.name, '\n', uri);
                });
        });

    }
}
