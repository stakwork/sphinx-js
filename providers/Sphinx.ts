export default class SphinxProvider {
  name: string = "Sphinx";

  constructor() {
    console.log("SphinxProvider constructor", this.name);

    window.postMessage(
      { type: "SPHINX_PROVIDER", text: "Hello from the world of tomorrow!" },
      "*"
    );
  }
}
