import { ImageGenerator } from './image-generator.class';

export class BlockBlueprint {
    constructor(params) {
        this.name       = null;
        this.imageUrl   = '';
        this.cargo      = 0;
        this.sizeX      = 2;
        this.sizeY      = 2;
        this.dockSize   = 0;
        this.production = [];
        Object.assign(this, params);
        this.createImage();
    }

    createImage() {
        this.imageGenerator = new ImageGenerator(this.sizeX, this.sizeY);
        this.imageGenerator.addImage([this.imageUrl, 0, 0, 0]);

        this.getImageData = new Promise(resolve => {
            this.imageGenerator.generatePng()
                .then(uri => {
                    this.imageUri = uri;
                    resolve({uri : this.imageUri});
                    //console.log(this.name, '\n', uri);
                });
        });

    }
}
