import Building from './5-vuilding';

export default class SkyHighBuilding extends Building {
  constructor(sqrt, floors) {
    super(sqrt);
    this._floors = floors;
  }

  set floors(floors) {
    this._floors = floors;
  }

  get floors() {
    return this._floor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
