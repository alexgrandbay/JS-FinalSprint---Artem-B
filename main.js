console.log("Script file connected");

fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        data.forEach(person => {
            console.log("Name:", person.name);
        });

        function getNames(data) {
            return data.map(person => person.name).join(', ');
        }

        function getAges(data) {
            return data.map(person => person.age).join(', ');
        }

        function getRoles(data) {
            return data.map(person => person.role).join(', ');
        }

        document.body.innerHTML = `
            <p>Names: ${getNames(data)}</p>
            <p>Ages: ${getAges(data)}</p>
            <p>Roles: ${getRoles(data)}</p>
        `;

        console.log("Data:", data);
    })

