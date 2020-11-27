function get_list(n: number){
    const A: number[] = []
    for(let i = 1; i < n; i++){
        A.push(i)
    }
    return A;
}
const A = get_list(5);
console.log(A)

const convertToBinary = n =>{
    if(n === 0) return;
    else{
        convertToBinary(Math.floor(n/2));
        console.log(n%2);
    }
}

convertToBinary(5)