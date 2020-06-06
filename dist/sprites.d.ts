import type { GameState, Position, Size } from './types';
export interface SpriteFrame {
    file: string;
    origin: Position;
    size: Size;
}
export interface Sprite {
    name: string;
    frames: SpriteFrame[];
    offset: Position;
}
export declare type SpriteSheet = Sprite[];
export declare const addSprite: (sprite: Sprite) => (state: GameState) => GameState;
export declare const importSpriteSheet: (spriteSheet: SpriteSheet) => (state: GameState) => GameState;
export declare function getSprite(state: GameState, name: string): Sprite;
interface DrawOptions {
    scale?: number;
    flipHorizontal?: boolean;
    flipVertical?: boolean;
}
export declare function drawSprite(sprite: Sprite, context: CanvasRenderingContext2D, position: Position, frameIndex?: number, { scale }?: DrawOptions): void;
export declare function getImageForFilePath(filePath: string, cached?: boolean): HTMLImageElement;
export declare function updateAnimatedSprites(state: GameState, { time }: {
    time: number;
}): GameState;
export declare function calculateNewFrameIndex(amountOfFrames: number, framesPerSecond: number, elapsedTime: number, isLooping: boolean): number;
export interface SpriteComponent {
    name: string;
    animationStartTime: number | null;
    currentFrameIndex: number;
    framesPerSecond: number;
    isLooping: boolean;
    isAnimating: boolean;
}
export interface CreateSpriteOptions {
    startingFrame?: number;
    framesPerSecond?: number;
    isLooping?: boolean;
    isAnimating?: boolean;
}
export declare function createSpriteComponent(name: string, { startingFrame, framesPerSecond, isLooping, isAnimating }?: CreateSpriteOptions): SpriteComponent;
export {};
