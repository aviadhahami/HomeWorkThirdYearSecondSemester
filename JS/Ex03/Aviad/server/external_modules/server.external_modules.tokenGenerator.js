/**
 * Created by aviad on 6/7/2016.
 */

let rand = ()=> {
	return Math.random().toString(36).substr(2); // remove `0.`
};
let tokenGenerator = {
	generate : ()=>{
		return rand() + rand();
	}

};

export default tokenGenerator;