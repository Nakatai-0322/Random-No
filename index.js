function RandomNumber() {
    // "n"に代入。（6までのランダム値）
	let n = Math.floor(Math.random() * 6) +1;
    document.getElementById("out").innerHTML = n;
    console.log(n)
}
