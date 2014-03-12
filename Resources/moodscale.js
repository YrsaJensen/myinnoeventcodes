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
		font : { fontSize: '50' }
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
		backgroundColor: '#93da68',
		font : { fontSize: '50' }
	});
	
	mood9.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood9img = Ti.UI.createImageView({
			image : 'images/mood9.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood9img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood9img);
	});
	var mood8 = Titanium.UI.createButton({
		title:'8',
		height:200,
		width:186,
		bottom:0,
		left: 372,
		backgroundColor: '#a6da68'
	});
	
	mood8.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood8img = Ti.UI.createImageView({
			image : 'images/mood8.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood8img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood8img);
	});
	
	var mood7 = Titanium.UI.createButton({
		title:'7',
		height:200,
		width:186,
		bottom:0,
		left: 558,
		backgroundColor: '#beda68'
	});
	
	mood7.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood7img = Ti.UI.createImageView({
			image : 'images/mood7.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood7img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood7img);
	});
	var mood6 = Titanium.UI.createButton({
		title:'6',
		height:200,
		width:186,
		bottom:0,
		left: 744,
		backgroundColor: '#dad968'
	});
	mood6.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood6img = Ti.UI.createImageView({
			image : 'images/mood6.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood6img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood6img);
	});
	var mood5 = Titanium.UI.createButton({
		title:'5',
		height:200,
		width:186,
		bottom:0,
		left: 930,
		backgroundColor: '#dac668'
	});
	mood5.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood5img = Ti.UI.createImageView({
			image : 'images/mood5.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood5img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood5img);
	});
	var mood4 = Titanium.UI.createButton({
		title:'4',
		height:200,
		width:186,
		bottom:0,
		left: 1116,
		backgroundColor: '#dab068'
	});
	mood4.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood4img = Ti.UI.createImageView({
			image : 'images/mood4.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood4img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood4img);
	});
	var mood3 = Titanium.UI.createButton({
		title:'3',
		height:200,
		width:186,
		bottom:0,
		left: 1302,
		backgroundColor: '#da9e68'
	});
	mood3.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood3img = Ti.UI.createImageView({
			image : 'images/mood3.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood3img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood3img);
	});
	var mood2 = Titanium.UI.createButton({
		title:'2',
		height:200,
		width:186,
		bottom:0,
		left: 1488,
		backgroundColor: '#da9368'
	});
	mood2.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood2img = Ti.UI.createImageView({
			image : 'images/mood2.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood2img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood2img);
	});
	var mood1 = Titanium.UI.createButton({
		title:'1',
		height:200,
		width:186,
		bottom:0,
		left: 1674,
		backgroundColor: '#da8668'
	});
	mood1.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood1img = Ti.UI.createImageView({
			image : 'images/mood1.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood1img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood1img);
	});
	var mood0 = Titanium.UI.createButton({
		title:'0',
		height:200,
		width:186,
		bottom:0,
		left: 1860,
		backgroundColor: '#da6868'
	});
	mood0.addEventListener('click',function(e){
    	// Create an ImageView.
		var mood0img = Ti.UI.createImageView({
			image : 'images/mood0.png',
			width : 100,
			height : 100,
			top : 300,
			left: 700
		});
		mood0img.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		// Add to the view.
		win.add(mood0img);
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
