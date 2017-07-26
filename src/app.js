import { rendererService as renderer } from 'core/services';
import * as ShipTypes from 'GAME/entities/ship-types';
import * as ShipBlueprints from 'GAME/entities/ship-blueprints';

export function App() {
    var self = this;

    self.init = function () {
        renderer.process(document.body);

        console.log(window.shipTypes = ShipTypes);
        console.log(window.ShipBlueprints = ShipBlueprints);
    }
}