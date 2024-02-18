// Array for å lagre alle billettene som er kjøpt
let billetter = [];

// Funksjon for å validere inputfelter ved hjelp av regex
function validerInput(id, regex, feilmelding) {
    const input = document.getElementById(id);
    // Sjekker om inputfeltet samsvarer med regex-mønsteret
    if (!regex.test(input.value)) {
        // Hvis ikke, vis en feilmelding og returner false
        alert(feilmelding); // Enkel feilmelding for brukeren
        return false;
    } else {
        // Hvis det samsvarer, returner true
        return true;
    }
}

// Funksjon for å håndtere kjøp av billett
function kjopBillett() {
    // Validerer alle feltene med passende regex-mønstre
    const erFilmValgt = validerInput('film', /.+/, 'Du må velge en film.');
    const erAntallGyldig = validerInput('antall', /^\d+$/, 'Må skrive noe inn i antall.');
    const erFornavnGyldig = validerInput('fornavn', /\S/, 'Må skrive noe inn i fornavnet.');
    const erEtternavnGyldig = validerInput('etternavn', /\S/, 'Må skrive noe inn i etternavnet.');
    const erTelefonnrGyldig = validerInput('telefonnr', /^\+?\d{8,15}$/, 'Må skrive inn et gyldig telefonnummer.');
    const erEpostGyldig = validerInput('epost', /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Må skrive inn en gyldig e-postadresse.');

    // Hvis alle valideringer er passert
    if (erFilmValgt && erAntallGyldig && erFornavnGyldig && erEtternavnGyldig && erTelefonnrGyldig && erEpostGyldig) {
        // Lag et objekt for den kjøpte billetten
        let nyBillett = {
            film: document.getElementById('film').value,
            antall: document.getElementById('antall').value,
            fornavn: document.getElementById('fornavn').value,
            etternavn: document.getElementById('etternavn').value,
            telefonnr: document.getElementById('telefonnr').value,
            epost: document.getElementById('epost').value
        };

        // Legg den nye billetten til i arrayet
        billetter.push(nyBillett);

        // Vis oppdatert liste over alle billetter
        visBilletter();

        // Blank ut alle feltene for ny inndata
        document.getElementById('ticketForm').reset();
    }
}

// Funksjon for å vise alle billetter
function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '<h2>Alle billetter</h2>'; // Sørger for å ha overskriften

    // Lag en liste med alle billetter
    billetter.forEach((billett, index) => {
        billettListe.innerHTML += `<div>${index + 1}: ${billett.film} - ${billett.antall} billetter for ${billett.fornavn} ${billett.etternavn}, Kontakt: ${billett.telefonnr}, E-post: ${billett.epost}</div>`;
    });
}

// Funksjon for å slette alle billetter
function slettAlleBilletter() {
    billetter = []; // Tømmer arrayet
    visBilletter(); // Oppdater listen som nå skal være tom
}

// Sørger for at visBilletter kjøres ved innlasting for å vise eksisterende billetter
document.addEventListener('DOMContentLoaded', visBilletter);
