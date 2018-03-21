var header = new Vue({
  el: '#header',
  methods:{
  	switchLang: function(event){
  		document.querySelector('.lang-switch span.active').classList.remove('active');
  		if(event){
  			event.target.classList.add('active');
  		}
  	},
  	menuToggle: function(event){
  		if(event){
  			event.target.closest('.menu-btn').classList.toggle('opened');
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