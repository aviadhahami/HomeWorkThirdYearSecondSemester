/**
 * Created by aviad on 5/7/2016.
 */

$(document).ready(function(){
	var profile = $('#profile'),
		calculator = $('#calculator'),
		readme = $('#readme');
	var elemLinksArr = [profile,calculator,readme];
	var profileView = $('#profileView'),
		calcView = $('#calcView'),
		readmeView = $('#readmeView');
	var views = [profileView, calcView, readmeView];

	var changeView = function (elem) {
		const id = elem.target.id;
		console.log('changing',elem.target.id);
		views.map(function(view){
			view.css('display','none');
		});
		switch (id) {
			case ('readme'):
				console.log('readme');
				readmeView.css('display','block');
				break;
			case ('calculator'):
				console.log('calc');
				calcView.css('display','block');
				break;
			default:
				profileView.css('display','block');
				break;
		}
	};


	// Bind all links to on Click event
	elemLinksArr.map(function(elem){
		elem.on('click',function(elem){
			return changeView(elem);
		});
	});

	// Hide all content
	views.map(function(view){
		view.css('display','none');
	});

	// Show first
	profileView.css('display','block');

});