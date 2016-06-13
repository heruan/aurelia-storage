import { LocalStorage } from "./local-storage";
import { SessionStorage } from "./session-storage";
export function configure(frameworkConfiguration, pluginConfiguration) {
    let container = frameworkConfiguration.container;
    container.registerSingleton(LocalStorage);
    container.registerSingleton(SessionStorage);
}
export { LocalStorage, SessionStorage };
//# sourceMappingURL=index.js.map