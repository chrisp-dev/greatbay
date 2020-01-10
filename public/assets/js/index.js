function getItems() {
    $.get('/api/items', function (data) {
        for (let item of data) {
            console.log(item);
        }
    });
}

$(document).ready(function () {
    getItems();
});