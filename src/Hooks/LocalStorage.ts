import { storageInterface } from '../Interfaces/local-storage-interface'


type T = string;
export class LocalStorage<T extends string> {
    private _storage: storageInterface

    constructor(getStorage = (): storageInterface => window.localStorage) {
        this._storage = getStorage()
    }

    get(key: T): string | null {
        return this._storage.getItem(key)
    }

    set(key: T, value: string): void {
        this._storage.setItem(key, value)
    }

    removeItem(key: T): void {
        this._storage.removeItem(key)
    }

    removeItems(keys: T[]): void {
        keys.forEach((key) => this.removeItem(key))
    }
}
