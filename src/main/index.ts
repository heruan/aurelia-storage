import { FrameworkConfiguration } from "aurelia-framework";
import { Container } from "aurelia-dependency-injection";
import { StorageEngine } from "./storage-engine";
import { LocalStorage } from "./local-storage";
import { SessionStorage } from "./session-storage";

export function configure(frameworkConfiguration: FrameworkConfiguration, pluginConfiguration: Object) {
    let container: Container = frameworkConfiguration.container;
    container.registerSingleton(LocalStorage);
    container.registerSingleton(SessionStorage);
}

export { StorageEngine, LocalStorage, SessionStorage };
