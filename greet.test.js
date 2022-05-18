describe("greet function", function () {
    it("should greet the user", function () {
        var greet = greet();
        var nameMap = {};
        var radioEnglish = document.getElementById("english");
        var radioXhosa = document.getElementById("xhosa");
        var radioAfrikaans = document.getElementById("afrikaans");
        var username = document.getElementById("username").value;

        var upperCaseName = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

        var names = JSON.stringify(nameMap);
        localStorage.setItem("names", names);

        radioEnglish.checked = false;
        radioXhosa.checked = false;
        radioAfrikaans.checked = false;

           assert.equal(greet.greetingMessage("", "English""Hello ")
           assert.equal(greet.greetingMessage("", "Xhosa")).toBe("Molo ")
           assert.equal(greet.greetingMessage("", "Afrikaans")).toBe("Hallo ")   

    });
});