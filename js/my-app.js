// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/cookies/',
    	url: 'cookies.html',
    	name: 'cookies',
  		},
		{
		path: '/info-cupon/',
    	url: 'info-cupon.html',
    	name: 'info-cupon',
  		},
		{
		path: '/cakes/',
    	url: 'cakes.html',
    	name: 'cakes',
  		},
		{
		path: '/info-comida/',
    	url: 'info-comida.html',
    	name: 'info-comida',
  		},
		{
		path: '/Raspberry/',
    	url: 'Raspberry.html',
    	name: 'Raspberry',
  		},
		{
		path: '/cookie/',
    	url: 'cookie.html',
    	name: 'cookie',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

