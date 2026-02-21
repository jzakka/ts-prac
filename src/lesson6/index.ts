export {};

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

type PartialUser = Partial<User>;

function updateUser(id: number, updates: Partial<User>) {
    console.log(`Updating user ${id} with`, updates)
}

updateUser(1, { name: 'Alice' })
updateUser(2, { email: 'bob@example.com'})
updateUser(3, {})

interface Config {
    host?: string;
    port?: number;
    debug?: boolean;
}

type RequiredConfig = Required<Config>;

function initServer(config: RequiredConfig) {
    console.log(`Server on ${config.host}:${config.port}`);
}

// initServer({host: 'localhost'});
initServer({ host: 'localhost', port: 8080, debug: true })

interface User {
    password: string;
    createdAt: Date;
}

type UserPreview = Pick<User, 'id'|'name'>;

const preview: UserPreview = {
    id: 1,
    name: 'Alice',
}

type UserWithoutPassword = Omit<User, 'password'>;

type PublicUser = Omit<User, 'password' | 'email'>;

function displayUser(user: UserWithoutPassword) {
    console.log(user.name, user.email);
    // console.log(user.password);
}

type Scores = Record<string, number>;

const scores: Scores = {
    alice: 95,
    bob: 87,
    charlie: 92,
}

type Role = 'admin' | 'user' | 'guest';
type Permissions = Record<Role, string[]>;

const permissions: Permissions = {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read'],
};

type UserMap = Record<number, Omit<User, 'createdAt' | 'age'>>;

const users: UserMap = {
    1: {id:1, name: 'Alice', email: 'alice@test.com', password: '****'},
    2: {id:2, name: 'Bob', email: 'bob@test.com', password: '****'},
}

interface Config {
    apiUrl: string;
    timeout: number;
}

const config: Readonly<Config> = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
}

// config.timeout = 100000;

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers.push(4); // Error: push does not exist on ReadonlyArray
// numbers[0]=10;

type userKeys = keyof User;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// const user: User = { id: 1, name: 'Alice', email: 'alice@test.com'};

// getProperty(user, 'name');
// getProperty(user, 'id');
// getProperty(user, 'address');

// const config = {
//     host: 'localhost',
//     port: 3000,
//     debug: true,
// }

// type Config = typeof config;

function getUser() {
    return {id: 1, name: 'Alice'}
}

type UserReturnType = ReturnType<typeof getUser>;

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};

type NullableUser = Nullable<User>;

type Arrayify<T> = {
    [K in keyof T]: T[K][];
}

type UserArrays = Arrayify<User>;

type ToArray<T> = T extends string ? string[] : T[];

type A = ToArray<string>;
type B = ToArray<number>;

type NonNullable<T> = T extends null | undefined ? never : T;

type MaybeString = string | null;
type DefiniteString = NonNullable<MaybeString>;

type ArrayElement<T> = T extends (infer E)[] ? E: never;

type NumArray = number[];
type Num = ArrayElement<NumArray>;

type StrArray = string[];
type Str = ArrayElement<StrArray>;

type Unwrap<T> = T extends Promise<infer U> ? U : T;

type AsyncNumber = Promise<number>;
type SyncNumber = Unwrap<AsyncNumber>;

type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
}

interface User2 {
    id: number;
    profile: {
        name: string;
        address: {
            city: string;
            country: string;
        }
    }
}

const partialUser: DeepPartial<User2> = {
    profile: {
        address: {
            city: 'Seoul'
        }
    }
}