export default () => {
	console.log('some arrow function from different file');

	/**
	 * for... of is ES16 syntax, which is not supported in IE11 and will likely be transpiled. See 
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
	 */
	const array1 = ['a', 'b', 'c'];
	
	for (const element of array1){
		console.log(element);
	}
}