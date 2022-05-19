describe("GREETINGS APP", function () {
    describe("Greeting", function () {
        it("should greet the user in English", function () {
            let greeting = greet();
            greeting.setName("Lucky");
            assert.equal(greeting.greetingMessage("Lucky", "English"), "Hello Lucky");
        });

        it("should greet the user in Xhosa", function () {
            let greeting = greet();
            greeting.setName("Lucky");
            assert.equal(greeting.greetingMessage("Lucky", "Xhosa"), "Molo Lucky");
        });

        it("should greet the user in Afrikaans", function () {
            let greeting = greet();
            greeting.setName("Lucky");
            assert.equal(greeting.greetingMessage("Lucky", "Afrikaans"), "Hallo Lucky");
        });

    });

    describe("Counter", function () {
        it("should count how many users have been greeted", function () {
            let greeting = greet();
            greeting.greetingMessage("Lucky", "English");
            greeting.greetingMessage("Lucky", "English");
            greeting.greetingMessage("Lucky", "English");
            assert.equal(greeting.forCounter(), 1);
        });

        it("should count how many users have been greeted", function () {
            let greeting = greet();
            greeting.greetingMessage("Thamie", "English");
            greeting.greetingMessage("Mabhozeni", "English");
            greeting.greetingMessage("Khisto", "English");
            assert.equal(greeting.forCounter(), 3);
        });

        it("should count how many users have been greeted", function () {
            let greeting = greet();
            greeting.greetingMessage("Thamie", "English");
            greeting.greetingMessage("Thamie", "English");
            greeting.greetingMessage("Khisto", "English");
            assert.equal(greeting.forCounter(), 2);
        });

        it("should count how many users have been greeted", function () {
            let greeting = greet();
            greeting.greetingMessage("Thamie", "English");
            greeting.greetingMessage("Thamie", "English");
            greeting.greetingMessage("Khisto", "English");
            greeting.greetingMessage("Khisto", "English");
            greeting.greetingMessage("Khisto", "English");
            greeting.greetingMessage("Lucky", "English");
            assert.equal(greeting.forCounter(), 3);
        });
    });
});