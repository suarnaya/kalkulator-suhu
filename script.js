// program sederhana konversi suhu celcius ke reamur dan sebaliknya

// tentukan nilai varible, letakan paling atas
let nilai = 0;
let bool = true;

bool = confirm("pilih konversi: OK = celcius>reamur. CANCEL = reamur>celcius"); // buat pengkondisian, apakah mau konversi celcius / reamur
if(bool === true) {
	// masukan nilai lewat prompt yang sudah di konversi ke angka, lakukan pengkondisian
	nilai = parseInt(prompt("masukan derajat suhu celcius: "));
} else {
	nilai = parseInt(prompt("masukan derajat suhu reamur: "));
}

let hasil = function() {
	// lakukan pengkondisian apakah konversi dari celcius apa reamur
	if(bool === true) {
		return nilai * 4 / 5;
	} else {
		return nilai * 5 / 4;
	}
}
// panggil function tadi
document.getElementById("demo").innerHTML = hasil();	
