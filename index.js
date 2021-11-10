function filterBy(array, dataType) {
	if (Array.isArray(array)) {
		const newArray = array.filter(element => (typeof element) !== dataType);
		console.log(newArray);
	} 
    else {
		alert('Error')
	}
}

const arr = ['Рядок', true, false, 'Strіng', 21, 55, null, undefined, function(){}, {}, []];
const filter = prompt("Select one of the data types you want to filter:", "undefined, number, bigint, boolean, string, symbol, object, function")
filterBy(arr, filter);
