export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }
export type Prettify<T> = { [K in keyof T]: T[K] } & {}
