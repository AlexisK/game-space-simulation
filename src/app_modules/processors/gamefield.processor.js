import { Processor } from 'core/classes';
import { mainScenario } from 'GAME/main.scenario';
import { render } from 'GAME/render.service';

export var GamefieldProcessor = new Processor({
    name : 'gamefield',
    init : (self, node, params) => {
        let stack = mainScenario();

        stack.onTick = () => render(stack, node);
    }
});