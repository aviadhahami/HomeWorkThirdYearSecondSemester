/**
 * Created by aviad on 6/12/2016.
 */


let StorageService ={

	set(){
		console.log(arguments);
		let arrOfArrays= [...arguments];
		arrOfArrays.forEach(elem=>{
			if(elem[0] && elem[1]) {
				localStorage[elem[0]] = elem[1];
			}
		});
	},
	get(k){
		return localStorage[k] || null;
	}
};

export default StorageService;