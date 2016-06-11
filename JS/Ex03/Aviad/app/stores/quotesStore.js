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
			this.onGetQuote();
			return{
				quote:''
			};
		},
		onGetQuote(){
			$.get('/quotes/random').then(
				res=>{
					// console.log(res);
					this.setState({quote:res.quote})
				},
				err=>{
					console.log(err);
				}
			)

		}
	});

export default quotesStore;