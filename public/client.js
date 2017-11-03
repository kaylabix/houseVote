var slyCount;
var huffCount;
var gryfCount;
var ravenCount;
var total;

$(document).ready(function() {
    populateTheVotes();
    gryfCount = $('#gryfCount');
    slyCount = $('#slyCount');
    huffCount = $('#huffCount');
    ravenCount = $('#ravenCount');
    total = $('#total');
    setInterval(populateTheVotes, 1000);
});

function vote(house) {
    $.ajax({
        method: 'POST',
        url: '/votes?house=' + house,
        success: function(response) {
            console.log(response)
            populateTheVotes();
        }
    })
}

function getVotes(cb) {
    $.ajax('/votes', {
        success: cb
    })
}

function populateTheVotes() {
    getVotes(function(response) {
        gryfCount.text(response.gryffindor)
        slyCount.text(response.slytherin);
        huffCount.text(response.hufflepuff);
        ravenCount.text(response.ravenclaw);
        total.text("Total Hogwarts Students: " + (response.gryffindor + response.slytherin + response.hufflepuff + response.ravenclaw));

        console.log(response);
    })
}