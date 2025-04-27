class Component {
  constructor({ styles }) {
    this.styles = styles || {};
  }

  async loadStyles() {
    if (this.styles && this.styles.endsWith(".css")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = this.styles;
      document.head.appendChild(link);
    } else {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = this.styles;
      console.log(styleTag);
      // document.head.appendChild(styleTag)
    }
  }

  async mount() {
    await this.loadStyles();
  }
}
