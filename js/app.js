var header = new Vue({
  el: '#header',
  methods:{
  	switchLang: function(event){
  		document.querySelector('.header__lang-switch .header__lang-btn_active').classList.remove('header__lang-btn_active');
  		if(event){
  			event.target.classList.add('header__lang-btn_active');
  		}
  	},
  	menuToggle: function(event){
  		if(event){
  			event.target.closest('.header__menu-btn').classList.toggle('opened');
  		}
  	}
  }
})

var app = new Vue({
	el: '#app',
	methods: {
		sliderNav: function(event){
			if(event){
				event.target.parentNode.querySelector('i.active').classList.remove('active');
				event.target.classList.add('active');
			}
		}
	}
})