/**
 * Created by aviad on 6/8/2016.
 */

import {createStore} from 'cartiv';
import Api from './Api';
import $ from 'jquery'

let quotesStore = createStore({
		api: Api,
		name: 'quotes'
	},
	{
		getInitialState(){
			return{
				quote:''
			}
		},
		getQuote(){

		}
	});

export default quotesStore;