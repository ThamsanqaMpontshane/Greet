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
        if (language == "English") {
            return "Hello " + name;
        }
        else if (language == "Xhosa") {
            return "Molo " + name;
        }
        else if (language == "Afrikaans") {
           return "Hallo " + name;
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

