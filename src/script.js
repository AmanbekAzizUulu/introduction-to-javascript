function onClickParagraph() {
	alert("YOU PRESSED <p></p> HTML-ELEMENT'S AREA!");
}

function onClickButton(button_element) {
	alert("YOU PRESSED THE BUTTON!");
	const name = button_element.getAttribute("person-name");
	const age = button_element.getAttribute("person-age");

	console.log(`Person {\n\tname=${name}\n\tage=${age}\n}`);
}

function onDoubleClickButton() {
	alert("YOU DOUBLE PRESSED THE BUTTON!");
}

function onMouseOver() {
	alert("УКАЗАТЕЛЬ НАВЕДЕН НА МЕДИАФАЙЛ")
}

function onMouseOut() {
	alert("УКАЗАТЕЛЬ ПОКИНУЛ ОБЛАСТЬ МЕДИАФАЙЛА")
}

{
	let presses_count = 0;

	function buttonPressesCounter() {
		presses_count++;
		console.log(presses_count);
	}
}

{
	class Person {
		firstName;
		lastName;

		constructor(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}
	}
	let person = new Person("", "");

	function onInput__first_name(event) {
		person.firstName = event.target.value;
	}

	function onInput__last_name(event) {
		person.lastName = event.target.value;
	}

	function printPersonInfo__button() {
		const outputElement = document.getElementById("personInfo");

		if (!person ||
			typeof person.firstName === "undefined" ||
			typeof person.lastName === "undefined") {

			outputElement.innerHTML = `
				<p>Error: Person object is not fully initialized. Please fill out all fields.</p>
			`;
			console.error("Error: Person object is not fully initialized.");
			return;
		} else {
			outputElement.innerHTML = `
			<p>Person:</p>
			<ul>
				<li>First Name: ${person.firstName}</li>
				<li>Last Name: ${person.lastName}</li>
			</ul>
		`

			console.log(`Person {\n\tfirst name=${person.firstName}\n\tlast name=${person.lastName}\n}`);
		}
	}

	function handleClick(event) {
		console.log(event);
	}
}

{
	function htmlElement__log_info() {
		const paragraph = document.getElementById("paragraph");
		console.log("paragraph: ", paragraph);
		console.log("paragraph.title: ", paragraph.title);
		console.log("paragraph.textContent: ", paragraph.textContent);
	}

	{
		let flag = true;

		const paragraph = document.getElementById("paragraph");
		const paragraph_initial_text_content = paragraph.textContent;

		const paragraph_styles = paragraph.style;

		const paragraph_color = paragraph_styles.color;
		const paragraph_font_family = paragraph_styles.fontFamily;
		const paragraph_background_color = paragraph_styles.background;

		function htmlElement__change_style() {
			if (flag === true) {
				paragraph_styles.background = 'white';
				paragraph_styles.color = 'blue';
				paragraph_styles.fontFamily = 'Consolas';

				paragraph.textContent = "This is changed text content of paragraph."
			} else {
				paragraph_styles.background = paragraph_background_color;
				paragraph_styles.color = paragraph_color;
				paragraph_styles.fontFamily = paragraph_font_family;

				paragraph.textContent = paragraph_initial_text_content;
			}
			flag = !flag;
		}
	}
}

{
	const elements__span = document.getElementsByTagName("span");

	function printTextContent__span() {
		console.log("<span> elements text content: ");

		for (const element of elements__span) {
			console.log(element);
		}
	}
}

{
	const elements_by_class_name = document.getElementsByClassName("simple-text")

	function printTextContent__elements_by_class_name() {
		console.log("'simple-text' class elements text content: ");

		for (const element of elements_by_class_name) {
			console.log(element);
		}
	}
}
