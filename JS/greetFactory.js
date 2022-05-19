function greet() {
    let nameMap = {};

    function setName(name) {
        let upperCaseName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        if (nameMap[upperCaseName] === undefined) {
            nameMap[upperCaseName] = 1;
        }
    }

    function getName() {
        return Object.keys(nameMap);
    }

    function greetingMessage(name, language) {

        setName(name);
        if (language == "English" && name !== "") {
            return "Hello " + name;
        } else if (language == "Xhosa" && name !== "") {
            return "Molo " + name;
        } else if (language == "Afrikaans" && name !== "") {
            return "Hallo " + name;
        }
        else if (name == "" && language == "") {
            return "Please enter a name and language";
        }
        else if (name == "" && language !== "") {
            return "Please enter a name";
        }
        else if (name.match(/^[a-zA-Z]+$/) == false ) {
            return "Please enter a valid name";
        }
    }

    function forCounter() {
        return Object.keys(nameMap).length;
    }

    return {
        setName,
        getName,
        greetingMessage,
        forCounter
    };
};