import { stdin, stdout } from 'process'
import * as readline from 'readline'

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
})

type Query = {
    balls: number[]
}

let N: number
let Q: number
let Balls: number[] = []
let Queries: Query[] = []

let lineCnt = 0
rl.on('line', line => {
    if (lineCnt === 0) {
        [N, Q] = line.split(' ').map(Number)
    } else if (lineCnt === 1) {
        Balls = line.split(' ').map(Number)
    } else if (lineCnt < 2 + 2 * Q) {
        if (lineCnt % 2 === 1) {
            Queries.push({
                balls: line.split(' ').map(Number)
            })
        }
    } else {
        rl.close()
    }
    lineCnt++
})

rl.on('close', () => {
    const ans = answer(Balls, Queries)
    console.log(ans.join('\n'))
})

function answer(ballArray: number[], queries: Query[]): number[] {
    const ans: number[] = []
    
    // ボールを順位つける
    type Ball = {
        id: number
        value: number
    }
    const ballNumberMap = new  Map<number, number>();
    const balls: Ball[] = []
    for (let i = 0; i < ballArray.length;i ++ ) {
        ballNumberMap.set(i + 1, ballArray[i])
        balls.push({
            id: i + 1,
            value: ballArray[i],
        })
    }
    const sortedBalls = balls.sort((a, b) => {
        if (a.value < b.value) {
            return -1
        } else  if (a.value > b.value) {
            return 1
        }
        return a.id - b.id
    })
    const ballsRankMap = new Map<number, number>();
    const rankValue = new Array(sortedBalls.length)
    for(let rank = 0; rank < sortedBalls.length;rank++) {
        ballsRankMap.set(sortedBalls[rank].id, rank)
        rankValue[rank] = sortedBalls[rank].value
    }

    // console.log('ballsRankMap =', ballsRankMap)
    // console.log('rankValueMap =', rankValueMap)

    queries.forEach(query => {
        const exlcudeRanks: number[] = query.balls
            .map(ballID => ballsRankMap.get(ballID))
            .filter(r => r !== undefined)
            .sort((a,b) => a - b)
        
        let rank = 0
        for (let i = 0; rank < sortedBalls.length && i < exlcudeRanks.length;i++) {
            if (rank < exlcudeRanks[i]) {
                break
            } else if (rank === exlcudeRanks[i]) {
                rank++
            }
        }

        ans.push(rankValue[rank])
    })
    

    return ans
}
