function greet(data) {
    let nameMap = data || {};

    function setName(name) {
        let upperCaseName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        if (nameMap[upperCaseName] === undefined) {
            nameMap[upperCaseName] = 1;
        }
            nameMap[upperCaseName] ++;
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
}
function error(name, language){
        if (name == "" && language == null) {
            return "Please Enter A name And Language";
        }
        else if (name == "" && language !== null) {
            return "Please Enter A Name";
        }
        else if (!name.match(/^[a-zA-Z]+$/)) {
            return "Please Enter A Valid Name";
        
        }else if (language == null) {
            return "Please Select A Language";
        }
    }

    const duplicates = (name) => {
        let list = Object.keys((nameMap));
        if (list.includes(name)) {
            return true
        }
        return false
    }


 function forCounter() {
        return Object.keys(nameMap).length;
    }

    return {
        setName,
        getName,
        greetingMessage,
        forCounter,
        error,
        duplicates
    };
};

