var kittyCat = {
    tiredness: 50,
    hunger: 72,
    loniliness: 10,
    happiness: -60,
    feed: function() {
        this.hunger = this.hunger + 5;
        console.log("Kitty Cat's hunger level is " + this.hunger);
    },
    sleep: function(numMins) {
        this.tiredness = this.tiredness - numMins;
        console.log("Kitty Cat has slept " + numMins + " minutes, and will probably take another nap soon.");
    },
    pet: function(numMins) {
        if (numMins%2 === 0) {
            this.loniliness = this.loniliness - numMins;
            this.happiness = this.happiness * numMins;
            console.log("Kitty Cat likes feeling \"special.\"");
        } else {
            console.log("Oh hell no. Stay the hell away. >_> Do not pet the kitty.");
        }
    }
};