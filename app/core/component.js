class Component {
  constructor(name) {
    this.name = name;
  }

  render() {
    console.log(`Rendering component: ${this.name}`);
  }

  setStyles(styles) {}
}
