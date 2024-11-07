/*1)WAP to print even sum is more or odd sum is more 
input: 2763
output: odd sum is more*/
num=prompt("enter a number:")
evenSum=0,oddSum=0
for(i=0;i<=num.length;i++){
    if(num[i]%2==0){
        evenSum=evenSum+Number(num[i])
    }
    if(num[i]%2==1){
        oddSum=oddSum+Number(num[i])
    }
}
if(oddSum>evenSum){
    console.log("odd sum is more")
}
else{
    console.log("even sum is more")
}
/*2) WAP to print even numbers are more or odd numbers are more
input: 5332
output: Odd numbers are more
input: 8176
output: Both are equal*/
num=prompt("enter a number")
evenCount=0,oddCount=0
for(i=0;i<num.length;i++){
    if(num[i]%2==0){
        evenCount++
    }
    if(num[i]%2==1){
        oddCount++
    }
}
if(evenCount>oddCount){
    console.log("even numbers are more")
}
else if(oddCount>evenCount){
    console.log("odd numbers are more")
}
else{
    console.log("equal")
}
   