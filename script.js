
	function loadWaitlist() {
		let rez = localStorage.getItem("waitlistRez");
		if (!rez) {
			return;
		}

		let entries = JSON.parse(rez);

		let table = document.getElementById("waitlist");

		for (let i = 0; i < entries.length; i++) {
			let entry = entries[i];
			let row = table.insertRow(-1);
			row.insertCell(0).innerHTML = entry.name;
			row.insertCell(1).innerHTML = entry.date;
		}
	}

	function saveWaitlist() {
		let table = document.getElementById("waitlist");
		let rows = table.rows;
		let entries = [];

		for (let i = 1; i < rows.length; i++) {
			let name = rows[i].cells[0].innerHTML;
			let date = rows[i].cells[1].innerHTML;
			entries.push({ name: name, date: date });
		}

		localStorage.setItem("waitlistRez", JSON.stringify(entries));
	}

	function addToList() {
		let name = document.getElementById("entryinput").value;

		if (name === "") {
			alert("Please enter a customer name.");
			return;
		}

		let today = new Date();
		let dateString = today.toLocaleDateString();

		let table = document.getElementById("waitlist");

		let row = table.insertRow(-1);
		row.insertCell(0).innerHTML = name;
		row.insertCell(1).innerHTML = dateString;

		document.getElementById("entryinput").value = "";
		document.getElementById("entryinput").focus();

		saveWaitlist();
	}

	window.addEventListener("DOMContentLoaded", loadWaitlist);
