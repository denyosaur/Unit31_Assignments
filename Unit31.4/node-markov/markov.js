/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    let chain;
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let map = new Map();
    for (let i = 0; i < this.words.length; i++) {
      let word = this.word[i];
      let nextWord = this.word[i + 1] || null;
      if (map.has(word)) {
        map.get(word).push(nextWord);
      } else {
        map.set(word, [nextWord]);
      }
    }

    this.chain = map;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let textArr = [];
    let keys = Array.from(this.chain.keys());
    let wordPicked = MarkovMachine.randPick(keys);

    while (textArr.length < numWords && wordPicked !== null) {
      textArr.push(key);
      key = MarkovMachine.choice(this.chains.get(wordPicked));
    }
    return textArr.join(" ");
  }

  static randPick(keys) {
    return key[Math.floor(Math.random() * keys.length())]
  }
}

module.exports = { MarkovMachine };