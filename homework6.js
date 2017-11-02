const printDiamond = function(char,num){
	const makeStr = function(n,char){
		if(n<1)
			return'';
		return char+makeStr(n-1,char);
	}
	const helper = function(n,spaces,chars){
		if(n<0)
			return"";
		console.log(makeStr(spaces,' ')+makeStr(chars,char));
		if(n>Math.ceil((N)/2)+1)
			helper(n-1,spaces-1,chars+2);
		else if(n<Math.ceil((N)/2))
			helper(n-1,spaces+1,chars-2);
		else if(n===Math.ceil(N/2)+1)
			helper(n-2,0,N);
	}
	const N=2*Math.floor(num/2)+1;
	helper(N,Math.floor(N/2),1);
}
printDiamond("%",11);