import { ComponentManager } from "./component-manager.js";

export class Component {
  constructor({
    selector,
    template,
    styles,
    script,
    imports = [],
    props = {},
  }) {
    this.selector = selector;
    this.template = template;
    this.styles = styles;
    this.script = script;
    this.imports = imports; // { name, componentClass, selector, props }
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

      if (this.props) {
        this.root.innerHTML = await this.renderProps(html, this.props);
      } else {
        this.root.innerHTML = html;
      }
    } else {
      this.root.innerHTML = this.template;
    }
  }

  // Insert props if available
  async renderProps(template, props) {
    let renderedTemplate = template;
    for (const key in props) {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
      renderedTemplate = renderedTemplate.replace(regex, props[key]);
    }
    return renderedTemplate;
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
      // Pass a DOM´s component reference to the class
      this.script(this.root);
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

  async loadImports() {
    if (this.imports && this.imports.length > 0) {
      const manager = new ComponentManager();
      this.imports.forEach(({ name, componentClass, selector, props }) => {
        manager.register(name, componentClass, {
          selector,
          props,
        });
      });
      manager.mountAll();
    }
  }

  async mount() {
    await this.loadTemplate();
    await this.loadStyles();
    await this.loadScript();
    await this.afterMount();
  }

  async afterMount() {
    await this.loadImports();
  }

  unmount() {
    this.root.innerHTML = "";
    // Opcional: remover estilos, listeners, etc.
    // Limpia estilos inyectados
    // document.querySelectorAll('[data-component="Component"]').forEach(el => el.remove());
  }
}
