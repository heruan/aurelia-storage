import { FrameworkConfiguration } from "aurelia-framework";
import { StorageEngine } from "./storage-engine";
import { LocalStorage } from "./local-storage";
import { SessionStorage } from "./session-storage";
export declare function configure(frameworkConfiguration: FrameworkConfiguration, pluginConfiguration: Object): void;
export { StorageEngine, LocalStorage, SessionStorage };
