export default class Iterator<T> {
    next: () => T | Promise<T>;
    constructor(next: () => T | Promise<T>);
    noRace(): Iterator<T>;
    keepWhile(cond: (value: T) => boolean): Iterator<T>;
    throttle(delay: number): Iterator<T>;
}
