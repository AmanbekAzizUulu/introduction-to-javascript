{

	class Person {
		constructor(firstName, lastName, sex, otherSex, phoneNumber, login, password, passwordConfirmation, agreement) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.sex = sex;
			this.otherSex = otherSex || null; // Пол "другое", если выбран
			this.phoneNumber = phoneNumber || null; // Номер телефона (опционально)
			this.login = login;
			this.password = password;
			this.passwordConfirmation = passwordConfirmation;
			this.agreement = agreement;
		}

		// Метод для вывода данных пользователя в консоль
		printUserData() {
			console.log('Данные пользователя:');
			console.log(`Имя: ${this.firstName}`);
			console.log(`Фамилия: ${this.lastName}`);
			console.log(`Пол: ${this.sex}`);
			if (this.sex === 'other') {
				console.log(`Другой пол: ${this.otherSex}`);
			}
			console.log(`Номер телефона: ${this.phoneNumber}`);
			console.log(`Логин: ${this.login}`);
			console.log(`Согласие на обработку данных: ${this.agreement ? 'Согласен' : 'Не согласен'}`);
		}

		// Метод для проверки пароля
		validatePasswords() {
			return this.password === this.passwordConfirmation;
		}
	}

	function toggleOtherGender() {
		const sexSelect = document.getElementById('sex');
		const otherGenderDiv = document.getElementById('other_gender');
		if (sexSelect.value === 'other') {
			otherGenderDiv.style.display = 'block';
		} else {
			otherGenderDiv.style.display = 'none';
		}
	}

	document.addEventListener("DOMContentLoaded", function () {
		// Обработчик для флага согласия
		document.querySelectorAll('input[name="agreement"]').forEach(input => {
			input.addEventListener('change', function () {
				const submitButton = document.getElementById('submit-button');
				if (document.getElementById('agree').checked) {
					submitButton.disabled = false; // Разрешаем отправку
				} else {
					submitButton.disabled = true; // Отключаем кнопку отправки
				}
			});
		});

		// Обработчик для отправки формы
		document.getElementById('registration-form').addEventListener('submit', function (event) {
			event.preventDefault(); // Предотвращаем реальную отправку формы

			// Собрать данные с формы
			const formData = new FormData(this);
			const userData = {};
			formData.forEach((value, key) => {
				userData[key] = value;
			});

			// Создать объект Person
			const person = new Person(
				userData.first_name,
				userData.last_name,
				userData.sex,
				userData.other_sex,
				userData.phone_number,
				userData.login,
				userData.password,
				userData.password_confirmation,
				userData.agreement === 'agree'
			);

			// Проверка паролей
			if (!person.validatePasswords()) {
				// Показать сообщение о несовпадении паролей
				const passwordError = document.getElementById('password-error');
				if (passwordError) passwordError.style.display = 'block'; // Показываем ошибку

				// Вернуть форму на экран, если пароли не совпадают
				const registrationForm = document.getElementById('registration-form');
				if (registrationForm) registrationForm.style.display = 'block';

				// Не отправлять данные, если пароли не совпадают
				return;
			}

			// Если пароли совпадают, скрыть сообщение об ошибке
			const passwordError = document.getElementById('password-error');
			if (passwordError) passwordError.style.display = 'none';

			// Скрыть форму
			const registrationForm = document.getElementById('registration-form');
			if (registrationForm) registrationForm.style.display = 'none';

			// Показать сообщение об успешной регистрации
			const successMessage = document.getElementById('success-message');
			if (successMessage) successMessage.style.display = 'block';

			// Вывести данные пользователя в консоль
			person.printUserData();

			// Здесь можно продолжить обработку, например, отправить данные на сервер
		});
	});
}
