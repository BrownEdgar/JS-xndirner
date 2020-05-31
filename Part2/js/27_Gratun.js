$(function(){
	let count = 6;
	$("#btn").on('click', function(){
		let newLi = `<li>item ${count}</li>`
		$("ul:last").append(newLi);
		count++;
	})
})