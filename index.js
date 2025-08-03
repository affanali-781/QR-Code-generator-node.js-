import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
	.prompt([
		{
			message: "Type in your URL",
			name: "URL",
		},
	])
	.then((answers) => {
		var myUrl = answers.URL;
		var qr_svg = qr.image(myUrl);
		qr_svg.pipe(fs.createWriteStream("myQR.png"));

		fs.writeFile("URL.txt", myUrl, (err) => {
			if (err) throw err;
			console.log("The file has been saved!");
		});
	});
