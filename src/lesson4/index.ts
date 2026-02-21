export {};

type ID = string | number;

function printID(id: ID) {
    console.log('Your ID is: ' + id);
}

printID(101);
printID('abc123');

type Result = string | null;

function findUser(id: number): Result {
    if (id > 1) {
        return `User_${id}`
    }
    return null
}

function formatValue(value: string | number | boolean): string {
    return String(value)
}

type Statuas = "success" | "error" | "pending";

function setStatus(status: Statuas) {
    console.log('Status', status);
}

setStatus("success");
setStatus("error");
setStatus("pending");
// setStatus("unknown"); // Error: Argument of type '"unknown"' is not assignable to parameter of type 'Statuas'.

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
    return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
}

type MyBoolean = true | false;

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type HttpStatusCode = 200 | 400 | 404 | 500;

function processValue(value: string | number) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase())
    } else {
        console.log(value.toFixed(2));
    }
}

processValue("hello");
processValue(42.123);

function greetName(name?: string) {
    if (name) {
        console.log(`Hello, ${name.toUpperCase()}!`);
    } else {
        console.log("Hello, guest!");
    }
}

function getLength(str: string | null): number {
    if (str !== null) {
        return str.length;
    }
    return 0
}

type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

function move(animal: Fish | Bird) {
    if ('swim' in animal) {
        animal.swim();
    } else {
        animal.fly();
    }
}

function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}

function feedAnimal(animal: Fish | Bird) {
    if (isFish(animal)) {
        animal.swim();
    } else {
        animal.fly();
    }
}

type MyApiResponse = 
    | {kind: 'success'; data: string} 
    | {kind: 'error'; message: string}
    | {kind: 'loading'};

function handleResponse(response: MyApiResponse) {
    switch (response.kind) {
        case 'success':
            console.log('Data:', response.data)
            break
        case 'error':
            console.log('Error:', response.message)
            break
        case 'loading':
            console.log('Loading...')
            break
    }
}

handleResponse({ kind: 'success', data: 'User data'})
handleResponse({ kind: 'error', message: 'Network failed'})
handleResponse({ kind: 'loading' })

type Shape = 
    | { kind: 'circle'; radius: number }
    | { kind: 'square'; size: number }
    | { kind: 'rectangle'; width: number; height: number }

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.size ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        default:
            const _exhaustive: never = shape;
            return _exhaustive;
    }
}

console.log(getArea({ kind: 'circle', radius: 10 }))
console.log(getArea({ kind: 'square', size: 5 }))
console.log(getArea({ kind: 'rectangle', width: 4, height: 6 }))

type RequestState = 
    | { status: 'idle'}
    | { status: 'loading' }
    | { status: 'success'; data: User }
    | { status: 'error'; error: string }

type User = {
    id: number;
    name: string;
    email: string;
}

function renderUI(request: RequestState) {
    switch(request.status) {
        case 'idle':
            console.log('Click to fetch')
            break;
        case 'loading':
            console.log('Loading...')
            break;
        case 'success':
            console.log(`User: ${request.data.name} (${request.data.email})`)
            break;
        case 'error':
            console.log('Error:', request.error)
            break;
    }
}

renderUI({ status: 'idle' });
renderUI({ status: 'loading' });
renderUI({ status: 'success', data: { id: 1, name: 'Alice', email: 'alice@example.com' } });
renderUI({ status: 'error', error: 'Network failed' });
