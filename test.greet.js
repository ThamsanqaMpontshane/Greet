describe("greet function", function () {
    it("should greet the user in English", function () {
        var name = getName();
        var language = "English";
        var greet = greet();
        var message = greetingMessage(name, language);
        assert.equal(message, "Hello " + name);
    });
});
