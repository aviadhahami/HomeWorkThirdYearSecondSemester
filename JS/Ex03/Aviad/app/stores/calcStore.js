/**
 * Created by aviad on 6/12/2016.
 */

import {createStore} from 'cartiv';
import $ from 'jquery'
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
		onGetLastResult(username){
			// app.get('/calc/value',CalcService.retrieveCalcData);
			$.get('/calc/value?username='+username).then(
				res=>{
					this.setState({calcResult:res.lastCalc || 0});
				},
				err=>{
					console.log(err);
				}
			)
		},
		onSetCalcResult(username,token,value){
			// app.post('/calc/value/:val',CalcService.storeCalcData);
			$.post('/calc/value/'+value,{username:username, token:token}).then(
				res =>{
					console.log(res);
				},
				err =>{
					console.log(err);
				}
			)
		}
	});

export default calcStore;