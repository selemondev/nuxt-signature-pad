/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Point {
  x: number
  y: number
  time: number
  color?: string | undefined
  velocityFrom: (start: Point) => number
  distanceTo: (start: Point) => number
}

export interface CurveControl {
  c1: Point
  c2: Point
}

export interface Bezier {
  startPoint: Point
  control1: CurveControl
  control2: CurveControl
  endPoint: Point
  startWidth: number
  endWidth: number
  length: () => number
  _point: (t: number, start: number, c1: number, c2: number, end: number) => number
}

export interface SignaturePadOptions {
  /*
   * (float or function) Radius of a single dot.
   */
  dotSize?: number | (() => number) | undefined

  /*
   * (float) Minimum width of a line. Defaults to 0.5.
   */
  minWidth?: number | undefined

  /*
   * (float) Maximum width of a line. Defaults to 2.5.
   */
  maxWidth?: number | undefined

  /*
   * (integer) Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling. Defaults to 16.
   */
  throttle?: number | undefined

  /*
   * (integer) Add the next point only if the previous one is farther than x pixels. Defaults to 5.
   */
  minDistance?: number | undefined

  /*
   * (string) Color used to clear the background. Can be any color format accepted by context.fillStyle. Defaults to "rgba(0,0,0,0)" (transparent black). Use a non-transparent color e.g. "rgb(255,255,255)" (opaque white) if you'd like to save signatures as JPEG images.
   */
  backgroundColor?: string | undefined

  /*
   * (string) Color used to draw the lines. Can be any color format accepted by context.fillStyle. Defaults to "black".
   */
  penColor?: string | undefined

  /*
   * (float) Weight used to modify new velocity based on the previous velocity. Defaults to 0.7.
   */
  velocityFilterWeight?: number | undefined

  /*
   * (function) Callback when stroke begin.
   */
  onBegin?: ((event: MouseEvent) => void) | undefined

  /*
   * (function) Callback when stroke end.
   */
  onEnd?: ((event: MouseEvent) => void) | undefined
}
export interface BasicPoint {
  x: number
  y: number
  pressure: number
  time: number
}
export interface PointGroupOptions {
  dotSize: number
  minWidth: number
  maxWidth: number
  penColor: string
  velocityFilterWeight: number
  compositeOperation: GlobalCompositeOperation
};

export interface PointGroup extends PointGroupOptions {
  points: BasicPoint[]
}

export interface Options {
  penColor: string
  backgroundColor: string
}

export interface WaterMarkObj {
  text: string
  font: string
  style: string
  fillStyle: string
  strokeStyle: string
  x: number
  y: number
  sx: number
  sy: number
}

export interface Signature {
  backgroundColor: string
  canvas: HTMLCanvasElement
  dotSize: number | (() => number)
  maxWidth: number
  minDistance: number
  minWidth: number
  options: SignaturePadOptions
  penColor: string
  throttle: number
  velocityFilterWeight: number
  _ctx: CanvasRenderingContext2D
  _data: Array<{
    color: string
    points: Point[]
  }>
  _isEmpty: boolean
  _lastVelocity: number
  _lastWidth: number
  _mouseButtonDown: boolean
  _points: Point[]
  onBegin: (event: MouseEvent) => void
  onEnd: (event: MouseEvent) => void
  clear: () => void
  fromDataURL: (
    dataUrl: string,
    options?: {
      ratio?: number | undefined
      width?: number | undefined
      height?: number | undefined
      callback?: ((error?: ErrorEvent) => void) | undefined
    },
  ) => void
  toDataURL: (type?: string, encoderOptions?: any) => void
  on: () => void
  off: () => void
  isEmpty: () => boolean
  fromData: (pointGroups: Point[][]) => void
  toData: () => Point[][]
  _handleMouseDown: (event: MouseEvent) => void
  _handleMouseMove: (event: MouseEvent) => void
  _handleMouseUp: (event: MouseEvent) => void
  _handleTouchStart: (event: MouseEvent) => void
  _handleTouchMove: (event: MouseEvent) => void
  _handleTouchEnd: (event: MouseEvent) => void
  _strokeMoveUpdate: () => void
  _strokeBegin: (event: MouseEvent) => void
  _strokeUpdate: (event: MouseEvent) => void
  _strokeEnd: (event: MouseEvent) => void
  _handleMouseEvents: (event: MouseEvent) => void
  _handleTouchEvents: (event: TouchEvent) => void
  _reset: () => void
  _createPoint: (x: number, y: number) => Point
  _addPoint: (point: Point) => Bezier | null
  _calculateCurveWidths: (
    startPoint: Point,
    endPoint: Point,
  ) => { end: number, start: number }
  _strokeWidth: (velocity: number) => number
  _drawCurveSegment: (x: number, y: number, width: number) => void
  _drawCurve: (_a: { color: string, curve: Bezier }) => void
  _drawDot: (_a: { color: string, point: Point }) => void
  _fromData: (
    pointGroups: Point[][],
    drawCurve: (_a: { color: string, curve: Bezier }) => void,
    drawDot: (_a: { color: string, point: Point }) => void,
  ) => void
  _toSVG: () => string
  addEventListener: (type: string, listener: (event: Event) => void, options?: { once?: boolean }) => void
  addWaterMark: (obj: WaterMarkObj) => void
  save: (t: string) => void
  undo: () => void
  isCanvasEmpty: () => boolean
  saveSignature: (format?: string) => string
  clearCanvas: () => void
}

export interface Props {
  options: Options
  width: string
  height: string
  minWidth?: number
  maxWidth?: number
  waterMark?: WaterMarkObj
  throttle?: number
  disabled?: boolean
  clearOnResize?: boolean
  defaultUrl?: string
}

export interface CanvasOptions extends Options {
  signaturePad: Signature
  throttle: number
  minWidth?: number
  maxWidth?: number
  dotSize?: number
  canvasUuid: string
}
