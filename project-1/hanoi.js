function Hanoi(n, from, to, aux) {
    if (n == 0) return
    Hanoi(n - 1, from, aux, to)
    console.log(`Move disk ${n} from rod ${from} to rod ${to}`)
    Hanoi(n - 1, aux, to, from)
}

Hanoi(3, 'A', 'C', 'B')