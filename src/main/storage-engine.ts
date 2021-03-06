export interface StorageEngine {

    /**
    * Retrieves an stored item from this Storage.
    *
    * @param key The key used to store the item.
    * @param type The type of the item.
    * @returns   A Promise which resolves to the item, or rejects the key if the item doesn"t exists.
    */
    get<T>(key: string, type: new(...args) => T, ...generics: any[]): Promise<T>;

    /**
    * Stores an item to the given key.
    *
    * @param key  The key where to store the item.
    * @param item The item to store.
    * @returns    A Promise which resolves to this Storage on success, or rejects the key on failure.
    */
    set<T>(key: string, item: T): Promise<T>;

    /**
    * Removes the item at the given key.
    *
    * @param key The key used to store the item.
    * @returns   A Promise which resolves to the removed item, or rejects the key if the item doesn"t exists.
    */
    remove<T>(key: string): Promise<StorageEngine>;

}
