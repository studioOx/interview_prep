/*      source: http://www.geeksforgeeks.org/reverse-an-array-without- affecting-special-characters/
		Question: Given a string, that contains special character together with alphabets (‘a’ to ‘z’ and‘A’ to ‘Z’), reverse the string in a way that special characters are not affected. 
		
		Examples:
		Input:   str = "a,b$c"
		Output:  str = "c,b$a"

		Input:   str = "Ab,c,de!$"
		Output:  str = "ed,c,bA!$"
*/
function reverse_string(str) {
	if (!str)
		return;

	var runner_start = 0;
	var runner_end = str.length - 1;
	var alpha_regex = /^[a-z]$/i;
	var reversed_string = str.split('');

	while(runner_start < runner_end) {
		// swap letters 
		if (reversed_string[runner_start].match(alpha_regex) && reversed_string[runner_end].match(alpha_regex)) {
			var temp = reversed_string[runner_start];
			reversed_string[runner_start] = reversed_string[runner_end];
			reversed_string[runner_end] = temp;
			runner_start++;
			runner_end--;
		} 

		// reversed_string[runner_start] is a special char
		if (!reversed_string[runner_start].match(alpha_regex)) 
			runner_start++;
		// reversed_string[runner_end] is a special char
		if (!reversed_string[runner_end].match(alpha_regex))
			runner_end--;
	}
	return reversed_string.join("") 
}

//Test Cases
console.log(reverse_string("a,b$c") == "c,b$a");
console.log(reverse_string("Ab,c,de!$") == "ed,c,bA!$");
