import { stdin, stdout } from 'process'
import * as readline from 'readline'

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

let N: number
type node = {
    id: number,
    value: number,
    adjacents: node[]
}
let nodes: node[]

let lineCnt = 0
rl.on('line', line => {
    if (lineCnt === 0) {
        N = Number(line)
    } else if (lineCnt === 1) {
        const numbers = line.split(' ').map(Number)
        nodes = new Array(numbers.length + 1)
        for (let i = 1; i < nodes.length;i++) {
            nodes[i] = {
                id: i,
                value: numbers[i-1],
                adjacents: new Array()
            }
        }
    } else if (lineCnt < N + 1) {
        const [u, v] = line.split(' ').map(Number)
        nodes[u].adjacents.push(nodes[v])
        nodes[v].adjacents.push(nodes[u])
    } else {
        rl.close()
    }
    lineCnt++
})

rl.on('close', () => {
    const ans = answer()

    console.log(ans.join('\n'))
})

function answer(): string[] {
    const ans = new Array(nodes.length)
    dfs(nodes[1], new Array(nodes.length), new Map<number, number>(), ans, false)
    
    const res = []
    for (let i = 1;i < ans.length;i++) {
        if (ans[i]) {
            res.push('Yes')
        } else {
            res.push('No')
        }
    }

    return res
}

function dfs(node: node, visited: boolean[], dp: Map<number, number>, ans: boolean[], isDoubled: boolean) {
    visited[node.id] =true
    if (dp.get(node.value) || isDoubled) {
        ans[node.id] = true
    }
    dp.set(node.value, (dp.get(node.value) ?? 0 ) + 1)

    for (let a of node.adjacents) {
        if (!visited[a.id]) {
            dfs(a, visited, dp, ans, ans[node.id])
        }
    }

    dp.set(node.value, dp.get(node.value)! - 1)
}
