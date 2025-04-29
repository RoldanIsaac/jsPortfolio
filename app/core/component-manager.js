export class ComponentManager {
  constructor() {
    this.components = new Map();
  }

  register(name, ComponentClass, options) {
    const instance = new ComponentClass(options);
    this.components.set(name, instance);
  }

  async mount(name) {
    const component = this.components.get(name);
    if (component) {
      await component.mount();
    } else {
      console.warn(`Component "${name}" not registered`);
    }
  }

  async mountAll() {
    for (const [name, comp] of this.components.entries()) {
      await comp.mount();
    }
  }

  unmount(name) {
    const component = this.components.get(name);
    if (component) {
      component.unmount();
    }
  }
}
