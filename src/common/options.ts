import { IUserInputs, IFrame } from "../helpers/intefaces";
import Base from "./base";
import Frame from "./frame";

/**
 * Plugin options.
 *
 * @export
 * @class Options
 * @implements {IOptions}
 */
export class Options extends Base {
  // User inputs
  public inputs: IUserInputs;

  // Identifier for appended elements
  public identifier: string;

  // Animation Height
  public scrollArea: string | number = 0;

  // Animation Start Position
  public start: number = 0;

  // Frame
  protected frame: IFrame;

  /**
   * Creates an instance of Options.
   * @param {IUserInputs} [options] Options to copy properties.
   * @memberof Options
   */
  constructor(options: IUserInputs) {
    super();

    // Set user inputs
    this.inputs = options;

    // Set identifier
    this.identifier = options.identifier || "csc";

    // Set frame
    this.frame = new Frame(options);

    // Set Container Height if defined
    this.scrollArea = options.scrollArea || 0;

    if (options.scrollArea && typeof options.scrollArea == "string") {
      this.scrollArea = parseInt(options.scrollArea, 10);
    }
  }

  /**
   * Set scrollable area height
   */
  public set setScrollableArea(height: number) {
    if (this.scrollArea) return;

    this.scrollArea = height;
  }
}

/**
 * @export
 */
export default Options;
