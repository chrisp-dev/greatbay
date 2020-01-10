class Item {
    constructor({ name, initial_bid, highest_bid }) {
        this.name = name;
        this.initial_bid = initial_bid;
        if (highest_bid)
            this.highest_bid = highest_bid;
    }
}

module.exports = Item;