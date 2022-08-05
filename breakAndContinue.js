// break: used to exit out of a loop.
// continue: skips over an iteration of a loop.

for(let i=1; i<=10; i++){
    if(i == 7){
        break;
    }
    console.log(i);
}
for(let i=1; i<=10; i++){
    if(i == 7){
        continue;
    }
    console.log(i);
}
