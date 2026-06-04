//what is function??
//Function in JS is a set of statements that performs a task or calculates value. It should take input and return an output where there is some obvious relationships betweeen the input and the output.

function findsSum(n){
    let ans = 0;
    for (let i=1; i<= n; i++){
        ans += i;
    }
    return ans;
}

console.log(findsSum(100));

//What do we need function