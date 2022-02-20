/* 
 * Escapes a string to use in a regular expression.
 * Use `String.prototype.replace()` to escape special characters.
 * escapeRegExp('(test)'); // \\(test\\)
*/
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const parseTemplate = (obj,tmpl) => {
	if(obj && typeof(obj) !== "object"){
		console.log(`the first argument has to be an object, a/n ${typeof obj} was passed instead`);
		return false;
	}
	
	if(tmpl && typeof(tmpl) !== "string"){
		console.log(`the second argument has to be an string, a/n ${typeof obj} was passed instead`)
		return false;
	}
	
	var tmp = '';
		
	for(i in obj){
		if(tmp == '') tmp = tmpl.replace(new RegExp(escapeRegExp(i), 'g'),obj[i]??"???")
		else tmp = tmp.replace(new RegExp(escapeRegExp(i), 'g'),obj[i]??"???")
	}
	
	return tmp;
}

module.exports = parseTemplate;

// Allow use of default import syntax in TypeScript
module.exports.default = parseTemplate;