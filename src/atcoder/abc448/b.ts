import { stdin, stdout } from 'process'
import * as readline from 'readline'

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
})

let lCnt = 0
let N: number
let M: number
let C: number[] = []
let A: number[] = []
let B: number[] = []

rl.on('line', line => {
    if (lCnt === 0) {
        [N, M] = line.split(' ').map(Number)
    } else if (lCnt === 1) {
        C = line.split(' ').map(Number)
    } else if (lCnt < N + 2) {
        const [a, b] = line.split(' ').map(Number)
        A.push(a)
        B.push(b)
    } else {
        rl.close()
    }
    // console.log(`N=${N}, N=${M}, C=${C}, A=${A}, B=${B}`)
    lCnt++
})

rl.on('close', () => {
    const ans = answer( C, A, B)
    console.log(ans)
})

function answer(peppers: number[], dishPeppers: number[], dishPepperLimits: number[]): number {
    const n = dishPeppers.length

    let ans = 0
    for (let i = 0; i<n;i++) {
        const pepper = dishPeppers[i]
        const pepperLimit = dishPepperLimits[i]

        const pepperLeft = peppers[pepper - 1]
        const pepperUse = Math.min(pepperLeft, pepperLimit)
        ans += pepperUse
        peppers[pepper - 1] -= pepperUse
    }

    return ans
}