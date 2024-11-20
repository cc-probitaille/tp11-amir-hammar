import { createDynamicClass } from "../dynamicClass";

describe("Create Dynamic Class", () => {
    beforeEach(() => {
        process.env.CLASS_NAME = "DynamicClass";
    });

    it("should create a class dynamically based on an environment variable", () => {
        const DynamicClass = createDynamicClass(process.env.CLASS_NAME as string);
        expect(DynamicClass).toBeDefined();
    });

    it("should create an instance of the dynamic class", () => {
        const DynamicClass = createDynamicClass(process.env.CLASS_NAME as string);
        const instance = new DynamicClass();
        expect(instance.constructor.name).toBe("DynamicClass");
    });

    it("should have a helloWorld method", () => {
        const DynamicClass = createDynamicClass(process.env.CLASS_NAME as string);
        const instance = new DynamicClass();
        expect(instance).toHaveProperty("helloWorld");
    });

    it("helloWorld method should return correct value", () => {
        const DynamicClass = createDynamicClass(process.env.CLASS_NAME as string);
        const instance = new DynamicClass();
        expect(instance.helloWorld()).toBe("Hello World from DynamicClass");
    });
});
