/**
 * Created by aviad on 6/12/2016.
 */
import React from 'react'
import {connect} from 'cartiv';
import Api from '../../stores/Api'
import quoteStore from '../../stores/quotesStore'
let quotePanel = React.createClass({
	mixins:[
		connect(quoteStore,'quote')
	],
	render(){
		let {quote} = this.state
		return(
			<div className="container">
				<blockquote className="quote-box">
					<p className="quotation-mark">
						“
					</p>
					<p className="quote-text">
						{quote || 'Loading...'}
					</p>
				</blockquote>
			</div>
		)
	}
});

export default quotePanel;