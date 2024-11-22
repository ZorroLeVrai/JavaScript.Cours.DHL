async function fetchData() {
    try {
        // Utilisation de fetch avec await
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        // Vérification si la réponse est correcte
        if (!response.ok) {
        throw new Error(`Erreur : ${response.status}`);
        }

        // Extraction des données au format JSON
        const jsonResponse = await response.json();
        const { title, body } = jsonResponse;

        console.log("title:", title);
        console.log("body:", body);
    } catch (error) {
        console.error(error.message);
    }
}


fetchData();