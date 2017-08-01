export class ImageGenerator {
    constructor(x, y) {
        this.sizeX  = x;
        this.sizeY  = y;
        this.sizeX2  = x/2;
        this.sizeY2  = y/2;
        this.images = [];

        this.init();
    }

    init() {
        this.canvasElement = document.createElement('canvas');
        this.canvasElement.setAttribute('width', this.sizeX + 'px');
        this.canvasElement.setAttribute('height', this.sizeY + 'px');
        this.ctx = this.canvasElement.getContext('2d');
    }

    addImage(params) {
        return this.images.push(params);
    }

    drawImage([url, x, y, angle, sizeX, sizeY]) {
        return new Promise(resolve => {
            let colorMap;

            if ( url.indexOf('color:') === 0 ) {
                colorMap = url.split(':');
                if ( sizeX && sizeY ) {
                    this.ctx.save();
                    this.ctx.translate(this.sizeX2 + x, this.sizeY2 + y);
                    this.ctx.rotate(angle);
                    this.ctx.fillStyle = colorMap[1];
                    this.ctx.fillRect(-sizeX/2, -sizeY/2, sizeX, sizeY);
                    this.ctx.restore();
                }
            } else {
                colorMap = [null, null, url];
            }

            if ( !colorMap[2] ) {
                resolve();
                return null;
            }

            let img = new Image();

            img.onload = () => {
                this.ctx.save();
                this.ctx.translate(this.sizeX2 + x, this.sizeY2 + y);
                this.ctx.rotate(angle);
                let w2 = img.naturalWidth / 2;
                let h2 = img.naturalHeight / 2;
                //this.ctx.drawImage(img, -w2, -h2, w2, h2);
                this.ctx.drawImage(img, -w2, -h2);
                this.ctx.restore();
                resolve();
            };
            img.src    = colorMap[2];

        });

    }

    clear() {
        this.ctx.clearRect(0, 0, this.sizeX, this.sizeY);
        this.ctx.save();
    }

    generatePng() {
        return new Promise(resolve => {
            this.clear();
            Promise.all(this.images.map(this.drawImage.bind(this)))
                .then(() => {
                    //document.body.appendChild(this.canvasElement);
                    resolve(this.canvasElement.toDataURL('image/png'));
                });
        });
    }
}