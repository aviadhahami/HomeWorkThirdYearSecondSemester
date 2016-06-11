/**
 * Created by aviad on 6/12/2016.
 */


let StorageService ={

	set(arrOfArrays){
		arguments.forEach(elem=>{
			localStorage[elem[0]] = elem[1];
		});
	},
	get(k){
		return 	localStorage[k] || null;
	}
};

export default StorageService;