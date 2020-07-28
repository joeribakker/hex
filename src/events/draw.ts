import type { Game } from './../Game';

export interface DrawEvents {
    beforeDraw: BeforeDrawEvent;
    draw: DrawEvent;
    afterDraw: AfterDrawEvent;
}

export interface BeforeDrawEvent { time: number; context: CanvasRenderingContext2D }
export interface DrawEvent { time: number; context: CanvasRenderingContext2D }
export interface AfterDrawEvent { time: number; context: CanvasRenderingContext2D }

export function setupDrawEvents(game: Game): void {
	game.on('tick', (state, { time }, { emit }) => {
        state = emit('beforeDraw', state, { time, context: game.context });
        state = emit('draw', state, { time, context: game.context });
        state = emit('afterDraw', state, { time, context: game.context });

        return state;
    });
}