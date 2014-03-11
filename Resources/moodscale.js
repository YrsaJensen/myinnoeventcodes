/**
 * @author Que
 */
Titanium.UI.setBackgroundColor('#000');

var win = Ti.UI.createWindow({
		title:"Moodscale",
		backgroundColor: 'white',
		backgroundImage: 'images/bg.png'
	});

	//
	// buttons for moodscale
	//
	var mood10 = Titanium.UI.createButton({
		title:'10',
		color: 'white',
		height:200,
		width:186,
		bottom:0,
		left: 0,
		backgroundColor: '#68da80',
		font : { fontSize: '30' }
	});
	
	mood10.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood10img = Ti.UI.createImageView({
			image : 'images/mood10.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood10img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood10img);
	});
	
	var mood9 = Titanium.UI.createButton({
		title:'9',
		height:200,
		width:186,
		bottom:0,
		left: 186,
		backgroundColor: '#93da68'
	});
	var mood8 = Titanium.UI.createButton({
		title:'8',
		height:200,
		width:186,
		bottom:0,
		left: 372,
		backgroundColor: '#a6da68'
	});
	var mood7 = Titanium.UI.createButton({
		title:'7',
		height:200,
		width:186,
		bottom:0,
		left: 558,
		backgroundColor: '#beda68'
	});
	var mood6 = Titanium.UI.createButton({
		title:'6',
		height:200,
		width:186,
		bottom:0,
		left: 744,
		backgroundColor: '#dad968'
	});
	var mood5 = Titanium.UI.createButton({
		title:'5',
		height:200,
		width:186,
		bottom:0,
		left: 930,
		backgroundColor: '#dac668'
	});
	var mood4 = Titanium.UI.createButton({
		title:'4',
		height:200,
		width:186,
		bottom:0,
		left: 1116,
		backgroundColor: '#dab068'
	});
	var mood3 = Titanium.UI.createButton({
		title:'3',
		height:200,
		width:186,
		bottom:0,
		left: 1302,
		backgroundColor: '#da9e68'
	});
	
	var mood2 = Titanium.UI.createButton({
		title:'2',
		height:200,
		width:186,
		bottom:0,
		left: 1488,
		backgroundColor: '#da9368'
	});
	
	var mood1 = Titanium.UI.createButton({
		title:'1',
		height:200,
		width:186,
		bottom:0,
		left: 1674,
		backgroundColor: '#da8668'
	});
	var mood0 = Titanium.UI.createButton({
		title:'0',
		height:200,
		width:186,
		bottom:0,
		left: 1860,
		backgroundColor: '#da6868'
	});
	
	var image = Ti.UI.createImageView({
  		image:'/images/smily.png',
  		width:350,
		height:350,
		top: 10
	});

win.add(image);
win.add(mood0);
win.add(mood1);
win.add(mood2);
win.add(mood3);
win.add(mood4);
win.add(mood5);
win.add(mood6);
win.add(mood7);
win.add(mood8);
win.add(mood9);
win.add(mood10);
win.open();
