const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    this.chain.push(`( ${value !== undefined ? value : ""} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
