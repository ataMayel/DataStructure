function Tarkib(n, r) {
    if (r == 0 || r == n) return 1
    else return Tarkib(n - 1, r) + Tarkib(n - 1, r - 1);
}
console.log(Tarkib(8,3));