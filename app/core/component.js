export class Component {
  constructor({ selector, template, styles, script, props = {} }) {
    this.selector = selector;
    this.template = template;
    this.styles = styles;
    this.script = script;
    this.props = props;
    this.root = document.querySelector(this.selector);
  }

  // Insert the html in the root
  async loadTemplate() {
    if (this.template && this.template.endsWith(".html")) {
      const res = await fetch(this.template);
      if (!res.ok) {
        throw new Error("Error loading template: " + res.statusText);
      }
      const html = await res.text();
      this.root.innerHTML = html;
    } else {
      this.root.innerHTML = this.template;
    }
  }

  // Insert styles in the head of the document
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

  // Execute function or append to document as a script
  async loadScript() {
    if (typeof this.script === "function") {
      this.script();
    } else if (this.script && this.script.endsWith(".js")) {
      const scriptTag = document.createElement("script");
      scriptTag.src = this.script;
      scriptTag.async = true;
      //   scriptTag.defer = true;
      document.body.appendChild(scriptTag);
    }
  }

  setProps(newProps) {
    this.props = { ...this.props, ...newProps };
  }

  getProps() {
    return this.props;
  }

  async mount() {
    await this.loadTemplate();
    await this.loadStyles();
    await this.loadScript();
  }

  unmount() {
    this.root.innerHTML = "";
    // Opcional: remover estilos, listeners, etc.
    // Limpia estilos inyectados
    // document.querySelectorAll('[data-component="Component"]').forEach(el => el.remove());
  }
}
