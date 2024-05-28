$(document).ready(function() {
	// hide results template and error alerts on initial page load
	$("#results").hide();
	$(".alert").hide();

	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind("keydown", function(e) {
		var code = e.keyCode || e.which;

		if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
			return false;
		}
	});

	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			$("#form").hide();

			// get input values
			var electricBill = document.getElementById("electric1").value;
			var gasBill = document.getElementById("gas1").value;
			var wasteBill = document.getElementById("waste").value;
			var carDrive = document.getElementById("car1").value;
			var goodsBill = document.getElementById("goods").value;
			
			
			// set variables for calculating each component score
			var electricBillscore = "";
			var gasBillscore = "";
			var wasteBillscore = "";
			var carDrivescore = "";
			var goodsBillscore = "";
			
			var newspaperScore = "";
			var alumTinScore = "";

			var totalScore1 = "";

			if (document.getElementById("optionsRadio1").checked) {
				newspaperScore = 0;
			} else {
				newspaperScore = 184;
			}
			// console.log("Newspaper score is: " + newspaperScore);

			if (document.getElementById("optionsRadio3").checked) {
				alumTinScore = 0;
			} else {
				alumTinScore = 166;
			}
			// console.log("Aluminum and tin score is: " + alumTinScore);

			if (electricBill === 0 || electricBill === "undefined") {
				electricBillscore = 0;
			} else {
				electricBillscore = electricBill * 105;
			}
			// console.log("Electric score is: " + electricBillscore);

			if (gasBill === 0 || gasBill === "undefined") {
				gasBillscore = 0;
			} else {
				gasBillscore = gasBill * 105;
			}
			// console.log("Gas score is: " + gasBillscore);

			if (wasteBill === 0 || wasteBill === "undefined") {
				wasteBillscore = 0;
			} else {
				wasteBillscore = wasteBill * 113;
			}
			// console.log("Oil score is: " + wasteBillscore);

			if (carDrive === 0 || carDrive === "undefined") {
				carDrivescore = 0;
			} else {
				carDrivescore = carDrive * 0.79;
			}
			// console.log("Car score is: " + carDrivescore);
		
			if (goodsBill === 0 || goodsBill === "undefined") {
				goodsBillscore = 0;
			} else {
				gasBillscore = goodsBill*4400;
			}
			// console.log("Flights taken 4 hours or less score is: " + goodsBillscore);

			

			// calculate scores for each category
			var energyScore1 = electricBillscore + gasBillscore + wasteBillscore;
			var travelScore1 = carDrivescore; 
			var wasteScore1 = newspaperScore + alumTinScore;

			// calculate total score and round to nearest whole integer
			totalScore1 = Math.round(energyScore1 + travelScore1 + wasteScore1);
			var formattedScore1 = totalScore1.toLocaleString("en");
			// console.log(totalScore1);

			document.getElementById("score").innerHTML = formattedScore1;

			// display results
			$("#results").show();

			// refresh page when recalculate button clicked
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});
		}

		// check selection made for recycling newspaper before calculating and displaying score
		var recycleNewspaperSelectionYes = document.getElementById("optionsRadio1").checked;
		var recycleNewspaperSelectionNo = document.getElementById("optionsRadio2").checked;
		var recycleAlumTinSelectionYes = document.getElementById("optionsRadio3").checked;
		var recycleAlumTinSelectionNo = document.getElementById("optionsRadio4").checked;

		if (recycleNewspaperSelectionYes == false && recycleNewspaperSelectionNo == false || recycleAlumTinSelectionYes == false && recycleAlumTinSelectionNo == false) {
			if (recycleNewspaperSelectionYes == false && recycleNewspaperSelectionNo == false) {
				$("#newspaper-alert").show();
			} else {
				$("#newspaper-alert").hide();
			}

			if (recycleAlumTinSelectionYes == false && recycleAlumTinSelectionNo == false) {
				$("#alum-tin-alert").show();
			} else {
				$("#alum-tin-alert").hide();
			}
		} else {
			calculateAndDisplayScore();
		}
	});	
});