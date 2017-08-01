import { Processor } from 'core/classes';
import { editShipScenario } from 'GAME/edit-ship.scenario';
import { render } from 'GAME/render2.service';
import * as blockBlueprints from 'GAME/entities/block-blueprints';
import * as Dom from 'utils/dom';
import { config } from 'GAME/config';

export var ShipEditorProcessor = new Processor({
    name : 'ship-editor',
    init : (self, node, params) => {
        let stack = editShipScenario();
        createOverlay(stack, node);
        createTools(stack, node);

        stack.onTick = () => render(stack, node);
    }
});


function createBlock(stack, bp) {
    let element = Dom.cr('div', 'block');

    element.label             = Dom.cr('div', 'label', element);
    element.label.textContent = bp.name;

    element.img = Dom.cr('img', null, element);
    bp.getImageData
        .then(({uri}) => element.img.src = uri);


    element.addEventListener('click', ev => {
        if ( stack.selectedBlock ) {
            stack.selectedBlock.element.classList.remove('active');
        }
        stack.selectedBlock = {element, bp};
        element.classList.add('active');
        stack.currentBlock = bp;
        //stack.addBlock([bp, 0, 0, 0]);
    });

    return element;
}

function createBlockList(stack) {
    let element = Dom.cr('div', 'block-list', stack.toolsElement);

    for (let k in blockBlueprints) {
        let bp           = blockBlueprints[k];
        let blockElement = createBlock(stack, bp);
        element.appendChild(blockElement);
    }

    stack.blockListElement = element;
    return element;
}

function createTools(stack, node) {
    let element = Dom.cr('div', 'tools-block', node);

    stack.toolsElement = element;
    createBlockList(stack);
    return element;
}

function createOverlay(stack, node) {
    stack.overlayElement    = Dom.cr('div', 'overlay', node);
    stack.overlayTopElement = Dom.cr('div', 'overlay', node);

    stack.overlayTopElement.addEventListener('mousemove', ev => {
        if ( stack.currentBlock ) {
            let rect = stack.overlayElement.getBoundingClientRect();
            let x    = parseInt(ev.clientX - rect.left);
            let y    = parseInt(ev.clientY - rect.top);

            if ( !stack.currentBlockElement ) {
                stack.currentBlockElement = Dom.cr('img', 'cursor', stack.overlayElement);
            }
            stack.currentBlockElement.src = stack.currentBlock.imageUri;

            let relatedOffsetX = (stack.SHIP.x % config.gridStep) + (stack.SHIPBLUEPRINT.sizeX / 2 % config.gridStep);
            let relatedOffsetY = (stack.SHIP.y % config.gridStep) + (stack.SHIPBLUEPRINT.sizeY / 2 % config.gridStep);

            stack.cursorX = Math.round((x - relatedOffsetX - stack.currentBlock.sizeX / 2) / config.gridStep) * config.gridStep + relatedOffsetX;
            stack.cursorY = Math.round((y - relatedOffsetY - stack.currentBlock.sizeY / 2) / config.gridStep) * config.gridStep + relatedOffsetY;

            stack.currentBlockElement.style.left = stack.cursorX + 'px';
            stack.currentBlockElement.style.top  = stack.cursorY + 'px';
        } else if ( stack.currentBlockElement ) {
            stack.overlayElement.removeChild(stack.currentBlockElement);
            delete stack.currentBlockElement;
        }
    });

    stack.overlayTopElement.addEventListener('click', ev => {
        if ( stack.currentBlock ) {
            stack.addBlock([
                stack.currentBlock,
                Math.floor((stack.cursorX + stack.currentBlock.sizeX/2 - stack.SECTOR.blueprint.sizeX / 2) / config.gridStep),
                Math.floor((stack.cursorY + stack.currentBlock.sizeY/2 - stack.SECTOR.blueprint.sizeY / 2) / config.gridStep),
                0
            ]);
        }
    });

    return stack.overlayElement;
}