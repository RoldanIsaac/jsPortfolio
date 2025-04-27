class Component {
  constructor({ selector, template, styles, script }) {
    this.selector = selector;
    this.template = template;
    this.styles = styles;
    this.script = script;
    this.root = document.querySelector(this.selector);
  }

  async loadTemplate() {
    if (this.template && this.template.endsWith(".html")) {
      const res = await fetch(this.template);
      if (!res.ok) {
        throw new Error("Error loading template: " + res.statusText);
      }
      const html = await res.text();
      this.root.innerHTML = html;
    }
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

  async loadScript() {
    if (typeof this.script === "function") {
      console.log("ss");
      this.script();
    } else if (this.script && this.script.endsWith(".js")) {
      const scriptTag = document.createElement("script");
      scriptTag.src = this.script;
      scriptTag.async = true;
      document.body.appendChild(scriptTag);
    }
  }

  async mount() {
    await this.loadTemplate();
    await this.loadStyles();
    await this.loadScript();
  }
}
