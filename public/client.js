function vote(house) {
    $.ajax('/votes?' + house, function() {
        // update the page
    })
}