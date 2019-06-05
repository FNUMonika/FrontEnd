var keys={

	name:"Monika",
	Occupation:"Trainee",
	Experience:"2 years"
}

console.log(Object.keys(keys));

let count=0;
for(var c in keys){
	count=count+1;
}
console.log("Total count is " +" "+count);