$(function(){
	/*ստանալ կլասսի անունը 2 ձևով*/
	 let getClass = $('div').each((i,elem)=>{
		console.log(elem.className);//arajin dzev
		let x = $(elem).attr('class');//2-rd dzev,jisht  chi ashxati
		console.log(`${i}: ${x}`);
		
	});
	console.log(getClass);//զանգված div-րի կլասների անուններից

	/*Ստուգում է արդյոք նշված id-ով div-ը ունի ՛findmeTo՛ ցլասսը թե ոչ, վերադարձնում է true/false*/
	let x= $( "#mydiv" ).hasClass( "findmeTo" );//true- uni tenc class
	let y= $( "#mydiv" ).hasClass( "noclass" );//false







})