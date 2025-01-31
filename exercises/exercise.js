// for each 

['a', 'b', 'c'].filter((value,index)=>{
    console.log(value);
});

let removeEgg= (food)=> {
    return food.filter(item=>item!=='egg');
}
console.log(removeEgg(['egg','pop','chicken']));
