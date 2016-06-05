/**
 * Created by aviya on 5/7/2016.
 */

$(document).ready(function(){
	var profile = $('#profile'),
		calculator = $('#calculator'),
		readme = $('#readme'),
		login = $('#login');
	var elemLinksArr = [profile,calculator,readme, login];
	var profileView = $('#profileView'),
		calcView = $('#calcView'),
		readmeView = $('#readmeView'),
		loginView = $('#loginView');
	var views = [profileView, calcView, readmeView, loginView];

	// Binding storage
	var setStorage = function (k, v) {
		localStorage[k] = v;
	};
	var getStorage = function(k){
		var res = null;
		if(localStorage.hasOwnProperty(k)){
			res = localStorage[k];
		}
		return res;
	};

	// User related stuff
	var user = getStorage('AUTH_UN') || null;


	// Methods
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

				if(!user){
					loginView.css('display','block');
				}else{
					calcView.css('display','block');
				}
				break;
			case ('login'):
				console.log('login');
				loginView.css('display','block');
				break;
			default:
				profileView.css('display','block');
				break;
		}
	};
	var login = function(e){
		e.preventDefault();
		var name  = $('#inputName').val();
		var pass = $('#inputPassword').val();
		var data = {
			username : name,
			password : pass
		};
		$.post(
			"/login",
			data
		).then(function(res){
			console.log(res);
			setStorage('AUTH_TKN',res.token);
			setStorage('AUTH_UN',$('#inputName').val());
		}, function(err){
			console.log(err)
		})
	};
	$('#form').submit(login);


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