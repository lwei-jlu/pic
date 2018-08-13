var parentDiv;

var picGame = function() {};
picGame.prototype = {
	store: {
		oldid: 0
	},
	init: function() {
		this.createDiv();
	},
	createDiv: function() {
		parentDiv = document.getElementById('gameDiv');
		var gameSize = [2, 2];
		var w = parentDiv.offsetWidth / gameSize[0];
		var h = parentDiv.offsetHeight / gameSize[1];
		for (var i = 0; i < gameSize[0]; i++) {
			for (var j = 0; j < gameSize[1]; j++) {
				var obj = document.createElement('div');
				obj.id = '' + i + j;
				// obj.draggable = true;
				obj.style.width = w + 'px';
				obj.style.height = h + 'px';
				obj.style.display = 'block';
				obj.style.float = 'left';
				obj.style.border = '1px solid #FFFFFF';
				obj.style.boxSizing = 'border-box';
				obj.style.background = "url(index.jpg) " + (-w * j) + "px " + (-h * i) + "px";
				this.addEvent(obj);
				parentDiv.appendChild(obj);
			}
		}
	},
	// addEvent: function(obj) {
	// 	obj.addEventListener('mousedown', function(e) {
	// 		var moveDiv = document.createElement('div');
	// 		moveDiv.id = 'moveid';
	// 		moveDiv.style.width = obj.style.width;
	// 		moveDiv.style.height = obj.style.height;
	// 		moveDiv.style.background = obj.style.background;
	// 		parentDiv.appendChild(moveDiv);
	// 		document.onmousemove = function(e) {
	// 			console.log(1 + "  " + e.clientX + "  " + e.clientY);
	// 		}

	// 	});

		// obj.addEventListener('mouseup', function(e) {
		// 	console.log(obj.id + "  " + that.store.oldid);
		// 	document.onmousemove = function(e) {};

		// 	var oldobj = document.getElementById(that.store.oldid);
		// 	var newobj = document.getElementById(obj.id);
		// 	// var temp = oldobj.id;
		// 	// oldobj.id = newobj.id;
		// 	// newobj.id = temp;
		// 	var temp = oldobj.style.background;
		// 	oldobj.style.background = newobj.style.background;
		// 	newobj.style.background = temp;


		// });
		// divArr[i].addEventListener('click', function(e){
		// 	console.log(e.clientX + "  " + e.clientY);
		// });

	//}
	addEvent: function(obj) {

			var that = this;

			obj.addEventListener("mousedown", function(e){
				console.log(obj.id);
				that.store.oldid = obj.id;
				// document.onmousemove = function(e){
					 // console.log(1 + "  " + e.clientX + "  " + e.clientY);
				// };
				return;

			});

			obj.addEventListener("mouseup",function(e){
				console.log(obj.id + "  " + that.store.oldid);
				// document.onmousemove=function(e){};

				var oldobj = document.getElementById(that.store.oldid);
				var newobj = document.getElementById(obj.id);
				if(oldobj.id == newobj.id)
					return;
				// var temp = oldobj.id;
				// oldobj.id = newobj.id;
				// newobj.id = temp;
				var temp = oldobj.style.background;
				oldobj.style.background = newobj.style.background;
				newobj.style.background = temp;
				return;		

			});


	}



}

var test = new picGame();
test.init();