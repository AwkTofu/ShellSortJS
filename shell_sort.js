let array = [5, 7,2,3,4,1,6,58,-8,-1]

function shellSort(arr) {
	let n = arr.length;
	console.log("Array Length: ", n);
	//Start with a really large gap, and then reduce the gap until there isn't any
	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
	{
		console.log("\nGap: ", gap);
		console.log("Each Run: ",arr)
		//Do a insertion sort for the gap
		for (let i = gap; i < n; i += 1)
		{
			let temp = arr[i];
			console.log("i", i)
			console.log("Temp: ", temp);
			let j;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)
			{
				//console.log("test", arr[j-gap])
				console.log("j",j,"j-gap",j-gap)
				console.log("values j:",arr[j], "j-gap",arr[j-gap]);

				arr[j] = arr[j-gap];
			}

			arr[j] = temp;
		}
	}

	return arr;
}

console.log("Before Sort: ", array, "\n")
shellSort(array);
console.log("After Sort: ", array, "\n")