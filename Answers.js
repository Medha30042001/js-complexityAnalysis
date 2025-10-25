//my attempt
//https://onecompiler.com/javascript/442p2sdm7

//01
console.log('\n');
function fun1(arr){
  let first = arr.shift();
  return first;
}
console.log(fun1([5, 10, 15]));

//02
console.log('\n');
function fun2(n){
  return Math.ceil(Math.log2(n));
}console.log(fun2(100));

//03
console.log('\n');
function fun3(arr){
  let max = 0;
  for(let i=0 ;i<arr.length; i++){
    if(max < arr[i]) max = arr[i];
  }
  return max;
}
console.log(fun3([4, 1, 7, 2, 9]));

//04
console.log('\n');
function fun4(arr){
  let count = 0;
  for(let i=0 ;i<arr.length; i++){
    if(arr[i]%2===0) count++;
  }
  return count;
}
console.log(fun4([1, 2, 3, 4, 5]));

//05
console.log('\n');
function fun5(arr, k){
  //console.log(arr, k);
  let b = [];
  for(let i=0; i<arr.length; i++){
    let a = [];
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j]==k) a.push(arr[i], arr[j]);
    }
    if(a.length!=0) b.push(a);
  }
  return b;
}
console.log(fun5([1, 2, 3, 4, 5], 6));
console.log(fun5([0, -1, 2, -3, 1], -2));

//06
console.log('\n');
function fun6(arr){
  let a=[];
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      for(let k=0; k<arr.length; k++){
        a.push([arr[i], arr[j], arr[k]]);
      }
    }
  }
  return a;
}
console.log(fun6([1, 2, 3]));

//07
console.log('\n');
function fib(n){
  let res=0;
  if(n==0) return 0;
  else if(n==1) return 1;
  else{ 
    res = fib(n-2) + fib(n-1);
  }
  return res;
}
console.log(fib(5));

//08
console.log('\n');
function fun8(arr){
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    newArr.push(arr[i], arr[i]);
  }
  return newArr;
}
console.log(fun8([1, 2, 3]));













