Titanium.UI.setBackgroundColor('#000');

var WinView = Ti.UI.createView({
top:0,
width: '100%',
height: '100%',
backgroundColor: '#1C1C1C'
});


var win1 = Titanium.UI.createWindow({  
    title:'Business Card',
    backgroundColor: '#FFFFFF'
});

var image = Ti.UI.createImageView({
	image:'/pictures/targetfix.jpg',
	top: 5 
});

win1.add(image);

var label1 = Titanium.UI.createLabel({
	color:'#190707',
	top: 75,
	text:'Claire Johnson',
	font:{fontSize:25,fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
});

var label2 = Titanium.UI.createLabel({
	color:'#190707',
	top: 105,
	text:'ETL Human Resources',
	font:{fontSize:15,fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
});

var label3 = Titanium.UI.createLabel({
	color:'#190707',
	top: 125,
	text:'Taret Corporation',
	font:{fontSize:15,fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
	});
	
var label4 = Titanium.UI.createLabel({
	color:'#190707',
	top: 145,
	text:'208.964.1645',
	font:{fontSize:15,fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
});

var label5 = Titanium.UI.createLabel({
	color:'#190707',
	top: 165,
	text:'john4419@vandals.uidaho.edu',
	font:{fontSize:15,fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
});


win1.add(label1);
win1.add(label2);
win1.add(label3);
win1.add(label4);
win1.add(label5);

WinView.add(win1);

var NavButton1 = Ti.UI.createButton({
	title: 'Portfolio',
	color: '#FFFFFF',
	width: '85%',
	top: 385,
	height: 40,
	backgroundColor: '#190707',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	},
});

win1.add(NavButton1);

NavButton1.addEventListener('click', function() {
	win2.open();
});



var win2 = Titanium.UI.createWindow({  
    title:'Portfolio',
    backgroundColor:'#FFFFFF',
});


var label2 = Titanium.UI.createLabel({
	color:'#190707',
	top:15,
	text:'"Whether you think you can or cant--you are right" Henry Ford',
	font:{fontSize:15,fontWeight: 'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
});

var image = Ti.UI.createImageView({
	image:'/pictures/resume2.jpg',
	
});

win2.add(image);

win2.add(label2);


var NavButton2 = Ti.UI.createButton({
	title: 'Contact Info',
	color: '#FFFFFF',
    width: '85%',
	top: 385,
	height: 40,
	backgroundColor: '#190707',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	},
});


win2.add(NavButton2);


NavButton2.addEventListener('click', function() {
	Ti.API.info('Clicked Home Button');
	win2.close();
});


win1.open();
