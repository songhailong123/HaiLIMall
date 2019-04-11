(function(win,doc){
	function change(){
		doc.documentElement.style.fontSize=16*doc.documentElement.clientWidth/320+'px';
	}
	change();
	win.addEventListener('resize',change,false)
})(window,document);