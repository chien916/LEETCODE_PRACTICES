/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num_n) {
	if (num_n === 0) return "Zero";
	let dict_O = {
		0: "",
		1: "One",
		2: "Two",
		3: "Three",
		4: "Four",
		5: "Five",
		6: "Six",
		7: "Seven",
		8: "Eight",
		9: "Nine",
		10: "Ten",
		11: "Eleven",
		12: "Twelve",
		13: "Thirteen",
		14: "Fourteen",
		15: "Fifteen",
		16: "Sixteen",
		17: "Seventeen",
		18: "Eighteen",
		19: "Nineteen",
		20: "Twenty",
		30: "Thirty",
		40: "Forty",
		50: "Fifty",
		60: "Sixty",
		70: "Seventy",
		80: "Eighty",
		90: "Ninety",
		1e2: "Hundred",
		1e3: "Thousand",
		1e6: "Million",
		1e9: "Billion"
	};
	let getStrRep_sf = (num_n) => {
		let ret_s = "";
		if (num_n <= 20) return dict_O[num_n];
		else if (num_n <= 1e2 - 1)
			return dict_O[Math.floor(num_n / 10) * 10] + " " + getStrRep_sf(num_n % 10).trim();
		else if (num_n <= 1e3 - 1)
			return dict_O[Math.floor(num_n / 1e2)] + " " + dict_O[1e2] + " " + getStrRep_sf(num_n % 1e2).trim();
		else if (num_n <= 1e6 - 1)
			return getStrRep_sf(Math.floor(num_n / 1e3)).trim() + " " + dict_O[1e3] + " " + getStrRep_sf(num_n % 1e3).trim();
		else if (num_n <= 1e9 - 1)
			return getStrRep_sf(Math.floor(num_n / 1e6)).trim() + " " + dict_O[1e6] + " " + getStrRep_sf(num_n % 1e6).trim();
		else if (num_n <= 1e12 - 1)
			return getStrRep_sf(Math.floor(num_n / 1e9)).trim() + " " + dict_O[1e9] + " " + getStrRep_sf(num_n % 1e9).trim();
		else
			return "";
	};
	return getStrRep_sf(num_n).trim();
};

console.log(numberToWords(4633456774));