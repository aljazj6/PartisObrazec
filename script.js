document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form'); // Pridobi sklice na elemente obrazcev za prijavo in registracijo
    const registerForm = document.getElementById('register-form');

    const registerLink = document.getElementById('register-link'); // Pridobi sklice na povezave za preklapljanje med obrazcema
    const loginLink = document.getElementById('login-link');

    // Ob kliku na povezavo za registracijo preklopi na registracijski obrazec
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active'); // Skrij obrazec za prijavo
        registerForm.classList.add('active'); // Prikaži obrazec za registracijo
    });

    // Ob kliku na povezavo za prijavo preklopi nazaj na prijavni obrazec
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.classList.remove('active'); // Skrij obrazec za registracijo
        loginForm.classList.add('active'); // Prikaži obrazec za prijavo
    });

    // Dodaj obdelavo dogodka za oddajo prijavnega obrazca
    const loginFormElement = loginForm.querySelector('form');
    loginFormElement.addEventListener('submit', (e) => {
        e.preventDefault(); // Prepreči privzeto vedenje oddaje obrazca

        // Tukaj bi bila koda za validacijo in prijavo uporabnika, če je potrebno.

        // Prikaz običajnega alert sporočila o uspešni prijavi
        alert("You have successfully logged in!");

        // Po zaprtju alert sporočila preklopi nazaj na registracijski obrazec
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    // Dodaj obdelavo dogodka za oddajo registracijskega obrazca
    const registerFormElement = registerForm.querySelector('form');
    registerFormElement.addEventListener('submit', (e) => {
        e.preventDefault(); // Prepreči privzeto vedenje oddaje obrazca

        // Tukaj bi bila koda za validacijo in pošiljanje podatkov strežniku, če je potrebno.

        // Prikaz običajnega alert sporočila o uspešni registraciji
        alert("You have successfully registered!");

        // Po zaprtju alert sporočila preklopi nazaj na prijavni obrazec
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });
});
