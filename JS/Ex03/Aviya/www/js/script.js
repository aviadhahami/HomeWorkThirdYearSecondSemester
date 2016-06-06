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
	var UN='AUTH_UN',TOKEN='AUTH_TKN';

	// User variables
	var isAuth = false;
	var getUserAndToken = function(){
		return {username : getStorage(UN),
			token: getStorage(TOKEN)};
	}

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

	// If authorized user, this sequence runs
	var authorizedUserSequence = function () {
		isAuth = true;
		// Remove 'login' button
		$('#login').css('display','none');
		$('#logged-user-name').text('Welcome ' + getStorage(UN) + '!');
		$('#logged-user-name').css('display','block');

	};

	var unauthorizedUserSequence = function () {
		isAuth = false;
		$('#login').css('display','true');
	};

	// On init - run this
	(function isLoggedIn(){
		if(!!getStorage(UN) && !!getStorage(TOKEN)){
			// Ask server is the user token is proper
			var dataObj = {
				username: getStorage(UN),
				token : getStorage(TOKEN)
			};
			console.log(dataObj);
			$.post(
				'/confirm_tkn',
				dataObj
			).then(function(res){
				authorizedUserSequence();
			},function(err){
				unauthorizedUserSequence();
			});
		}
	})();


	// Methods
	var getLastCalcResult = function () {
		// Ajax to get last result goes here
		$.get('/calc/value?username='+getStorage(UN) +'&token=' + getStorage(TOKEN)).then(
			function(res){
				console.log(res);
				calc.display.value = res.lastResult;
			},
			function(err){
				console.log(err);
				calc.display.value = 0;
			}
		)
	};
	var setLastCalcResult = function(){
		// Ajax to set result
		$.post(
			'/calc/value/' + calc.display.value || 0,
			getUserAndToken()
		).then(function(res){
			console.log(res);
		},function(err){
			console.log(err);
		})
	};
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
				if(!isAuth){
					loginView.css('display','block');
				}else{
					calcView.css('display','block');
					getLastCalcResult();
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
			setStorage(TOKEN,res.token);
			setStorage(UN,$('#inputName').val());
			authorizedUserSequence();
			changeView({target:{id:'calculator'}});

		}, function(err){
			console.log(err);
			$('#loginErr').css('display','block');
		});
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

	// Bind the "=" button to onclick event
	$('#equals').on('click',setLastCalcResult);

	// Show first
	profileView.css('display','block');

});