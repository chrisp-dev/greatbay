function getItems() {
    $.get('/api/items', function (data) {
        $("#list").text = "";
        for (let item of data) {
            console.log(item);
            const listItem = $("<li>");
            listItem.text(JSON.stringify(item));
            $("#list").append(listItem);
        }
    });
}

function saveItem(cb) {
    $.post('/api/items', { name: "Ping Pong Paddle", initial_bid: 50 },
        function (data) {
            alert('posted');
            console.log('aaa', data);
        });
}

$(document).ready(function () {
    // getItems();
    // saveItem();
});