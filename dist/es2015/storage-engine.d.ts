export interface StorageEngine {
    /**
    * Retrieves an stored item from this Storage.
    *
    * @param key The key used to store the item.
    * @returns   A Promise which resolves to the item, or rejects the key if the item doesn"t exists.
    */
    get(key: string): Promise<any>;
    /**
    * Stores an item to the given key.
    *
    * @param key  The key where to store the item.
    * @param item The item to store.
    * @returns    A Promise which resolves to this Storage on success, or rejects the key on failure.
    */
    set(key: string, item: any): Promise<StorageEngine>;
    /**
    * Removes the item at the given key.
    *
    * @param key The key used to store the item.
    * @returns   A Promise which resolves to the removed item, or rejects the key if the item doesn"t exists.
    */
    remove(key: string): Promise<any>;
}
