function getItems() {
    $.get('/api/items', function (data) {
        for (item of data) {
            console.log(item);
        }
    });
}

$(document).ready(function () {
    getItems();
});