/**
 * Created by aviad on 6/12/2016.
 */

import {createStore} from 'cartiv';
import Api from './Api';

let calcStore = createStore({
		api: Api,
		name: 'calc'
	},
	{
		getInitialState(){
			return{
				calcResult: 0
			}
		},
		getLastResult(){

		},
		setCalcResult(value){

		}
	});

export default calcStore;