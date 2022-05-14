//window.alert("Hello World");
//console.log("Hello World 2");

//global data

var tax = 1.18;
var allcars = [];
var carbrandsarray = ["Mercedes","Audi"];

var hometitle = "Homepage";
var othertitle = "Choose your car";
document.title = hometitle;
window.onblur = function(){
	document.title = othertitle;
}

window.onfocus = function()
{
	document.title = hometitle;
}

//date
var dateObj = new Date();
var month = dateObj.getMonth() + 1;
var day = dateObj.getDate();
var year = dateObj.getFullYear();
var hours = dateObj.getHours();
var minutes = dateObj.getMinutes ();
newdate = day + "/" + month + "/" + year + "/" +  hours + ":" + minutes;
document.getElementById("a_datenow").innerHTML = newdate;
//global data end




//Mercedes Global Must Add With DB
var mercedescars = ["A Class", "B Class", "S Class", "G Class"];
var mercedescarsimages = [];
var mercedescarclickarray = [];
var mercedescarlinkarray = [];



//Audi Global Data - Must Add With DB
var audicars = ["Audi A3","Audi A6","Audi Q3","Audi Q8"];
var audicarsimages = [];
var audicarclickarray = [];


//audi car info loop
for (var i = 0; i <= audicars.length - 1; i++) {
	audicarsimages.push("images/"+audicars[i].replace(/\s+/g, '')+".jpg");
	audicarclickarray.push(audicars[i].replace(/\s+/g, '')+"click()");
}

//mercedes car info loop
for (var i = 0; i <= mercedescars.length - 1; i++) {
	mercedescarsimages.push("images/"+mercedescars[i].replace(/\s+/g, '')+".jpg");
	mercedescarclickarray.push(mercedescars[i].replace(/\s+/g, '')+"click()");
	mercedescarlinkarray.push(mercedescars[i].replace(/\s+/g, '')+".html");
}


//audi index content
var audih1contentwithdb = "AUDI";
var audip1contentwithdb = "Vivamus tincidunt urna nec lacus maximus scelerisque. Quisque molestie hendrerit nisi non placerat. Aliquam sit amet porta nibh. Vivamus eu placerat dui, at fringilla justo. Sed non magna eget turpis vehicula suscipit varius eget ligula. Fusce faucibus tortor id odio hendrerit lobortis. Quisque odio nunc, aliquam dignissim dolor nec, rutrum egestas lacus. Sed nec volutpat turpis, at porttitor ex. Maecenas sollicitudin aliquet ante vel tincidunt. Quisque nec tristique est. In hac habitasse platea dictumst. Aliquam ante magna, sollicitudin non elit venenatis, aliquet vestibulum libero. In facilisis sit amet diam ut blandit. Nam leo orci, volutpat sit amet nulla eu, iaculis imperdiet ligula.";

var audih1content = audih1contentwithdb;
var audip1content = audip1contentwithdb;


//audi car detail content
//audi car detail information. db-for loop
var AudiCar1Info = {
	name : "Audi A3",
	production : "1996",
	class : "Small family car, Subcompact executive car",
	basicprice : 10000,
	audicar1imagewithdb: audicarsimages[0]
}

var audiCar1src = AudiCar1Info.audicar1imagewithdb;
var audiA3Name = AudiCar1Info.name; // or AudiCar1Info.name
var audiA3Production = AudiCar1Info.production; // or AudiCar1Info.name
var audiA3Class = AudiCar1Info.class; // or AudiCar1Info.name



var AudiCar2Info = {
	name : "Audi A6",
	production : "1989",
	class : "Small",
	basicprice : 20000,
	audicar2imagewithdb: audicarsimages[1]
}

var audiCar2src = AudiCar2Info.audicar2imagewithdb;
var audiA6Name = AudiCar2Info.name; // or AudiCar2Info.name
var audiA6Production = AudiCar2Info.production; // or AudiCar2Info.name
var audiA6Class = AudiCar2Info.class; // or AudiCar2Info.name

var AudiCar3Info = {
	name : "Audi Q3",
	production : "1991",
	class : "Subcompact",
	basicprice : 30000,
	audicar3imagewithdb: audicarsimages[2]
}

var audiCar3src = AudiCar3Info.audicar3imagewithdb;
var audiQ3Name = AudiCar3Info.name; // or AudiCar3Info.name
var audiQ3Production = AudiCar3Info.production; // or AudiCar3Info.name
var audiQ3Class = AudiCar3Info.class; // or AudiCar3Info.name


var AudiCar4Info = {
	name : "Audi Q8",
	production : "1987",
	class : "executive car",
	basicprice : 40000,
	audicar4imagewithdb: audicarsimages[3]
}

var audiCar4src = AudiCar4Info.audicar4imagewithdb;
var audiQ8Name = AudiCar4Info.name; // or AudiCar4Info.name
var audiQ8Production = AudiCar4Info.production; // or AudiCar4Info.name
var audiQ8Class = AudiCar4Info.class; // or AudiCar4Info.name


//audi car prices
function audicar1price(){
	var lastprice = AudiCar1Info.basicprice * tax;
	document.getElementById("car1price").innerHTML = "Price: " + lastprice +" " + "&#8378";
}
function audicar2price(){
	var lastprice = AudiCar2Info.basicprice * tax;
	document.getElementById("car2price").innerHTML = "Price: " + lastprice + " " + "&#8378";
}
function audicar3price(){
	var lastprice = AudiCar3Info.basicprice * tax;
	document.getElementById("car3price").innerHTML = "Price: " + lastprice + " " + "&#8378";
}
function audicar4price(){
	var lastprice = AudiCar4Info.basicprice * tax;
	document.getElementById("car4price").innerHTML = "Price: " + lastprice + " " + "&#8378";
}


//mercedes index content
var mercedesh1contentwithdb = "Mercedes - Benz"
var mercedesp1contentdb = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce scelerisque vitae ipsum a semper. Curabitur massa erat, consequat vel consectetur at, ornare nec sapien. Maecenas elementum lectus non erat lobortis vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin tristique suscipit nunc. Vivamus sit amet augue eleifend, posuere ipsum eget, auctor nisi. In sodales ac leo non consectetur. Sed pulvinar nulla nec commodo interdum. Ut sed nibh sed est interdum sodales a vel nibh. Suspendisse et ex est. In vestibulum efficitur magna, in hendrerit ex ultrices a. Aliquam imperdiet mauris accumsan consequat congue. Pellentesque a lectus at lacus commodo sagittis. Maecenas tempor iaculis lacus, eu venenatis arcu iaculis nec. Donec cursus convallis lorem, ornare egestas lectus interdum eu."


var mercedesh1content = mercedesh1contentwithdb;
var mercedesp1content = mercedesp1contentdb;

//mercedes car detail content
//mercedes car detail information. db-for loop
var MercedesCar1Info = {
	name: "Mercedes A Class",
	production : "1997",
	class : "Subcompact car (B)",
	basicprice : 150000,
	mercedescar1imagewithdb: mercedescarsimages[0]
}
var mercedesCar1src = MercedesCar1Info.mercedescar1imagewithdb;
var mercedesAclassName = MercedesCar1Info.name; // or MercedesCar1Info.name
var mercedesAclassProduction = MercedesCar1Info.production; // or MercedesCar1Info.name
var mercedesAclassClass = MercedesCar1Info.class; // or MercedesCar1Info.name



var MercedesCar2Info = {
	name: "Mercedes B Class",
	production : "2005",
	class : "Subcompact executive MPV (M)",
	basicprice : 200000,
	mercedescar2imagewithdb : mercedescarsimages[1]
}
var mercedesCar2src = MercedesCar2Info.mercedescar2imagewithdb;
var mercedesBclassName = MercedesCar2Info.name; // or MercedesCar2Info.name
var mercedesBclassProduction = MercedesCar2Info.production; // or MercedesCar2Info.name
var mercedesBclassClass = MercedesCar2Info.class; // or MercedesCar2Info.name


var MercedesCar3Info = {
	name: "Mercedes S Class",
	production : "1954",
	class : "	F-segment",
	basicprice : 350000,
	mercedescar3imagewithdb : mercedescarsimages[2]
}
var mercedesCar3src = MercedesCar3Info.mercedescar3imagewithdb;
var mercedesSclassName = MercedesCar3Info.name; // or MercedesCar3Info.name
var mercedesSclassProduction = MercedesCar3Info.production; // or MercedesCar3Info.name
var mercedesSclassClass = MercedesCar3Info.class; // or MercedesCar3Info.name

var MercedesCar4Info = {
	name: "Mercedes G Class",
	production : "1979",
	class : "	Military off-roader - Off-road car - luxury SUV -pickup truck",
	basicprice : 500000,
	mercedescar4imagewithdb : mercedescarsimages[3]
}
var mercedesCar4src = MercedesCar4Info.mercedescar4imagewithdb;
var mercedesGclassName = MercedesCar4Info.name; // or MercedesCar4Info.name
var mercedesGclassProduction = MercedesCar4Info.production; // or MercedesCar4Info.name
var mercedesGclassClass = MercedesCar4Info.class; // or MercedesCar4Info.name

//mercedes car prices
function car1price(){
	var lastprice = MercedesCar1Info.basicprice * tax;
	document.getElementById("car1price").innerHTML = "Price: " + lastprice +" " + "&#8378";
}
function car2price(){
	var lastprice = MercedesCar2Info.basicprice * tax;
	document.getElementById("car2price").innerHTML = "Price: " + lastprice + " " + "&#8378";
}
function car3price(){
	var lastprice = MercedesCar3Info.basicprice * tax;
	document.getElementById("car3price").innerHTML = "Price: " + lastprice + " " + "&#8378";
}
function car4price(){
	var lastprice = MercedesCar4Info.basicprice * tax;
	document.getElementById("car4price").innerHTML = "Price: " + lastprice + " " + "&#8378";
}



//homepage data
//homepage index content
var homepageh1contentwithdb = "Homepage H1 Test"
var homepagep1contentwithdb = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac aliquam risus. Integer rutrum pharetra nisi, a hendrerit est venenatis sed. Fusce consectetur dolor ut dapibus rutrum. Nunc fermentum ex et feugiat cursus. Donec urna tortor, aliquet sed tristique eget, pulvinar nec augue. Donec viverra luctus interdum. Integer quis justo ultrices, finibus dolor eget, cursus velit.Morbi dapibus orci sodales consectetur accumsan. Nam sodales erat purus, sed venenatis lacus vehicula non. Sed maximus quam vel magna eleifend pretium. Phasellus quis luctus leo. Duis mollis, est at efficitur consectetur, erat ante dictum sapien, ac feugiat neque nisi vel nibh. Aliquam commodo enim quis elit porta volutpat. Maecenas ut laoreet ipsum. Donec euismod, urna id rutrum volutpat, libero enim congue sapien, quis malesuada lacus ante sed ligula."

var homepageh1content = homepageh1contentwithdb;
var homepagep1content = homepagep1contentwithdb;

document.getElementById("h1-1defaultcontent").innerHTML = homepageh1content;
document.getElementById("p1defaultcontent").innerHTML = homepagep1content;





function Homepage(){
	document.getElementsByTagName("title")[0].innerHTML = hometitle;
	for (var i = 0; i <= allcars.length - 1; i++) {
		lengthplus1 = i+1
		document.getElementById("car"+lengthplus1+"image").src = "";
		document.getElementById("strong"+i).innerHTML = "";
		document.getElementById("car"+lengthplus1+"price").innerHTML = "";
	}
	document.getElementById("h1-1defaultcontent").innerHTML = homepageh1content;
	document.getElementById("p1defaultcontent").innerHTML = homepagep1content;
	document.getElementById("contentimage").src = "images/cars.jpg";
	document.getElementById("divimage").src = "images/audi.jpg";
	document.getElementById("contenttext").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac aliquam risus. Integer rutrum pharetra nisi, a hendrerit est venenatis sed. Fusce consectetur dolor ut dapibus rutrum. Nunc fermentum ex et feugiat cursus. Donec urna tortor, aliquet sed tristique eget, pulvinar nec augue. Donec viverra luctus interdum. Integer quis justo ultrices, finibus dolor eget, cursus velit.Morbi dapibus orci sodales consectetur accumsan. Nam sodales erat purus, sed venenatis lacus vehicula non. Sed maximus quam vel magna eleifend pretium. Phasellus quis luctus leo. Duis mollis, est at efficitur consectetur, erat ante dictum sapien, ac feugiat neque nisi vel nibh. Aliquam commodo enim quis elit porta volutpat. Maecenas ut laoreet ipsum. Donec euismod, urna id rutrum volutpat, libero enim congue sapien, quis malesuada lacus ante sed ligula";

	for (var i = 0; i <= allcars.length - 1; i++) {
		lengthplus1 = i+1
		document.getElementById("car"+lengthplus1+"image").src = "";
		document.getElementById("strong"+i).innerHTML = "";
		document.getElementById("car"+lengthplus1+"price").innerHTML = "";
	}
}

var refresh = 0;
function NavBarClick(carname){
	for (var i = 0; i <carbrandsarray.length; i++) {
		if (carname === carbrandsarray[i]) {
			var cararrayname = carname.toLowerCase() + "cars";
			document.title = (carbrandsarray[i]);
			refresh += 1;
			var refrestcontrol = refresh+1;
			document.getElementById("h1-1defaultcontent").innerHTML = cararrayname + "h1content";
			document.getElementById("p1defaultcontent").innerHTML = mercedesp1content;
			document.getElementById("divimage").src = "";
			allcars = [];
			var cararrayfunc = cararrayname;
			
		}
	}
}






function MercedesNavBarClick(){
	document.title = ("Mercedes");
	refresh += 1;
	var refrestcontrol = refresh+1;
	document.getElementById("h1-1defaultcontent").innerHTML = mercedesh1content;
	document.getElementById("p1defaultcontent").innerHTML = mercedesp1content;
	document.getElementById("divimage").src = "";
	allcars = [];
	for (var i = 0; i <= mercedescars.length - 1; i++) {
		allcars.push(mercedescars[i]);
	}
	for (var i = 0; i <= mercedescars.length - 1; i++) {
		var lengthplus = i + 1;
		if (refrestcontrol==0) {}
			if (i%2==0) {
				var divcontent = "<div style='width:auto;' class='divcarcontentleft'><strong id='strong"+i+"'>"+mercedescars[i]+"</strong><br><a href='javascript:void(0)'><img id='car"+lengthplus+"image' width='500px;' onclick='mercedescar"+lengthplus+"click()''></a>  <p align='center' id='car"+lengthplus+"price'></p><br> </div>";
				if (refresh==1) {
					document.getElementById("cardetailmaindiv").innerHTML += divcontent;}
				}
				else {
					var divcontent = "<div style='width:auto;' class='divcarcontentright'><strong id='strong"+i+"'>"+mercedescars[i]+"</strong><br><a href='javascript:void(0)'><img id='car"+lengthplus+"image' width='500px;' onclick='mercedescar"+lengthplus+"click()''></a> <p align='center' id='car"+lengthplus+"price'></p><br> </div>";
					if (refresh==1) {
						document.getElementById("cardetailmaindiv").innerHTML += divcontent;}
					}
					var cardetailimagemercedes = document.getElementById("car"+lengthplus+"image");
					cardetailimagemercedes.setAttribute('onclick', mercedescarclickarray[i]);
					cardetailimagemercedes.setAttribute('src', mercedescarsimages[i]);
					document.getElementById("strong"+i).innerHTML = mercedescars[i]
				}

				var carprice1 = car1price();
				var carprice2 = car2price();
				var carprice3 = car3price();
				var carprice4 = car4price();

				document.getElementById("contentimage").src = "";
				document.getElementById("contenttext").innerHTML = "";
			}

			function AudiNavBarClick(){
				document.title = ("Audi");
				refresh += 1;
				var refrestcontrol = refresh+1;
				document.getElementById("h1-1defaultcontent").innerHTML = audih1content;
				document.getElementById("p1defaultcontent").innerHTML = audip1content;
				document.getElementById("divimage").src = "";
				allcars = [];
				for (var i = 0; i <= allcars.length - 1; i++) {
					lengthplus1 = i+1
					document.getElementById("car"+lengthplus1+"image").src = "";
					document.getElementById("strong"+i).innerHTML = "";
					document.getElementById("car"+lengthplus1+"price").innerHTML = "";
				}



				for (var i = 0; i <= audicars.length - 1; i++) {
					var cars = audicars[i];
					allcars.push(cars);
				}
				for (var i = 0; i <= audicars.length - 1; i++) {
					var lengthplus = i + 1;
					if (refrestcontrol==0) {}
						if (i%2==0) {
							var divcontent = "<div class='divcarcontentleft'><strong id='strong"+i+"'>"+audicars[i]+"</strong><br><a href='javascript:void(0)'><img id='car"+lengthplus+"image' width='500px;'' onclick='audicar"+lengthplus+"click()''></a>  <p align='center' id='car"+lengthplus+"price'></p><br> </div>";
							if (refresh==1) {
								document.getElementById("cardetailmaindiv").innerHTML += divcontent;}
							}
							else {
								var divcontent = "<div class='divcarcontentright'><strong id='strong"+i+"'>"+audicars[i]+"</strong><br><a href='javascript:void(0)'><img id='car"+lengthplus+"image' width='500px;'  onclick='audicar"+lengthplus+"click()''></a> <p align='center' id='car"+lengthplus+"price'></p><br> </div>";
								if (refresh==1) {
									document.getElementById("cardetailmaindiv").innerHTML += divcontent;}
								}
								var cardetailimageaudi = document.getElementById("car"+lengthplus+"image");
								cardetailimageaudi.setAttribute('onclick', audicarclickarray[i]);
								cardetailimageaudi.setAttribute('src', audicarsimages[i]);
								document.getElementById("car"+lengthplus+"image").src = audicarsimages[i];
								document.getElementById("strong"+i).innerHTML = audicars[i];


							}

							var carprice1 = audicar1price();
							var carprice2 = audicar2price();
							var carprice3 = audicar3price();
							var carprice4 = audicar4price();

							document.getElementById("contentimage").src = "";
							document.getElementById("contenttext").innerHTML = "";
							document.getElementById("contenttext").innerHTML = "";
						}

						function menuleave() {
							document.getElementById("brandcars").style.visibility = "hidden";
						}

						function MercedesMouseOver(){
							document.getElementById("brandcars").innerHTML = "";			
							document.getElementById("brandcars").style.visibility = "visible";
							for (var i = 0; i <= mercedescars.length - 1; i++) {

								document.getElementById("brandcars").innerHTML += "<a href='"+mercedescarlinkarray[i]+"'>"+ mercedescars[i] + "</a>";
							}
						}
						function AudiMouseOver(){
							document.getElementById("brandcars").innerHTML = "";			
							document.getElementById("brandcars").style.visibility = "visible";
							for (var i = 0; i <= audicars.length - 1; i++) {

								document.getElementById("brandcars").innerHTML += "<a>"+ audicars[i] + "</a>";
							}
						}
						function brandcarsonmouseover(){
							document.getElementById("brandcars").style.visibility = "visible";
						}
						function brandcarsonmouseleave(){
							document.getElementById("brandcars").style.visibility = "hidden";
						}
						function AClassclick() {
							document.getElementById("cardetailcontentdiv").style.visibility = "visible";
							document.getElementById("cardetailimg").src = MercedesCar1Info.mercedescar1imagewithdb;
							document.getElementById("cardetailtitle1").innerHTML = mercedesAclassName;
							document.getElementById("cardetailtitle2").innerHTML = "Production: " + mercedesAclassProduction + "<br>" + "Class: " + mercedesAclassClass;

						}

						function BClassclick() {
							document.getElementById("cardetailcontentdiv").style.visibility = "visible";
							document.getElementById("cardetailimg").src = MercedesCar2Info.mercedescar2imagewithdb;
							document.getElementById("cardetailtitle1").innerHTML = mercedesBclassName;
							document.getElementById("cardetailtitle2").innerHTML = "Production: " + mercedesBclassProduction + "<br>" + "Class: " + mercedesBclassClass;

						}

						function SClassclick() {
							document.getElementById("cardetailcontentdiv").style.visibility = "visible";
							document.getElementById("cardetailimg").src = MercedesCar3Info.mercedescar3imagewithdb;
							document.getElementById("cardetailtitle1").innerHTML = mercedesSclassName;
							document.getElementById("cardetailtitle2").innerHTML = "Production: " + mercedesSclassProduction + "<br>" + "Class: " + mercedesSclassClass;
						}

						function GClassclick() {
							document.getElementById("cardetailcontentdiv").style.visibility = "visible";
							document.getElementById("cardetailimg").src = MercedesCar4Info.mercedescar4imagewithdb;
							document.getElementById("cardetailtitle1").innerHTML = mercedesGclassName;
							document.getElementById("cardetailtitle2").innerHTML = "Production: " + mercedesGclassProduction + "<br>" + "Class: " + mercedesGclassClass;

						}



						function AudiA3click() {
							document.getElementById("cardetailcontentdiv").style.visibility = "visible";
							document.getElementById("cardetailimg").src = AudiCar1Info.audicar1imagewithdb;
							document.getElementById("cardetailtitle1").innerHTML = audiA3Name;
							document.getElementById("cardetailtitle2").innerHTML = "Production: " + audiA3Production + "<br>" + "Class: " + audiA3Class;

						}

						function AudiA6click() {
							document.getElementById("cardetailcontentdiv").style.visibility = "visible";
							document.getElementById("cardetailimg").src = AudiCar2Info.audicar2imagewithdb;
							document.getElementById("cardetailtitle1").innerHTML = audiA6Name;
							document.getElementById("cardetailtitle2").innerHTML = "Production: " + audiA6Production + "<br>" + "Class: " + audiA6Class;

						}

						function AudiQ3click() {
							document.getElementById("cardetailcontentdiv").style.visibility = "visible";
							document.getElementById("cardetailimg").src = AudiCar3Info.audicar3imagewithdb;
							document.getElementById("cardetailtitle1").innerHTML = audiQ3Name;
							document.getElementById("cardetailtitle2").innerHTML = "Production: " + audiQ3Production + "<br>" + "Class: " + audiQ3Class;
						}

						function AudiQ8click() {
							document.getElementById("cardetailcontentdiv").style.visibility = "visible";
							document.getElementById("cardetailimg").src = AudiCar4Info.audicar4imagewithdb;
							document.getElementById("cardetailtitle1").innerHTML = audiQ8Name;
							document.getElementById("cardetailtitle2").innerHTML = "Production: " + audiQ8Production + "<br>" + "Class: " + audiQ8Class;

						}

						function exitcardetail(){

							document.getElementById("cardetailcontentdiv").style.visibility = "hidden";
						}

						$(window).scroll(function() {
							var scroll = $(window).scrollTop();
							$(".zoom-me img").css({
								width: (100 + scroll/20)  + "%",
								top: -(scroll/20)  + "%",
		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
		"-webkit-filter": "blur(" + (scroll/100) + "px)",
		filter: "blur(" + (scroll/100) + "px)"
	});
						});