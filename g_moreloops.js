//loops in more details

//prob 1: calculate the sun from 0 to 100
let ans = 0;
for (let i=1, j=100; i<=j; i++){
    ans += i;
}
console.log(ans);

//prob 2: calculate the sun from 0 to 100 but only even numbers
ans = 0;
for (let i=0, j=100; i<=j; i++){
    if (i%2 == 0){
        ans += i;
    }
}
console.log(ans);

