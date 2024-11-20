export function createDynamicClass(className: string): any {
    if (!className) {
      throw new Error("Class name must be defined");
    }
  
    const classTemplate = `
      class ${className} {
        helloWorld() {
          return "Hello World from ${className}";
        }
      }
      ${className};
    `;
  
    return eval(classTemplate);
  }