import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0
let N: number = 0
let X: number = 0
let A: number[] = []

rl.on('line', (line) => {
    if (count === 0) {
        [N, X] = line.split(' ').map(Number)
        count++
    } else {
        A = line.split(' ').map(Number)
        rl.close()
    }
})

function answer(n: number, x: number, a: number[]): number[] {
    const res: number[] = []
    for(let i = 0; i < a.length; i++) {
        if (a[i] < x) {
            x = a[i]
            res.push(1)
        } else {
            res.push(0)
        }
    }
    return res
}

rl.on('close', () => {
    let res = answer(N, X, A)

    console.log(res.join('\n'))
})

