// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  name = name.toLowerCase();
  switch (name) {
    case "pure strawberry joy":
      return 0.5;
    case "energizer":
      return 1.5;
    case "green garden":
      return 1.5;
    case "tropical island":
      return 3;
    case "all or nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesCut = 0;
  let wedgesCut = 0;
  for (const lime of limes) {
    if (wedgesCut >= wedgesNeeded) break;

    switch (lime) {
      case "small":
        wedgesCut += 6;
        break;
      case "medium":
        wedgesCut += 8;
        break;
      case "large":
        wedgesCut += 10;
        break;
    }
    limesCut++;
  }
  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error("Remove this line and implement the function");
}
