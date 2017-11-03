var slyCount;
var huffCount;
var gryfCount;
var ravenCount;

$(document).ready(function() {
    populateTheVotes();
    gryfCount = $('#gryfCount');
    slyCount = $('#slyCount');
    huffCount = $('#huffCount');
    ravenCount = $('#ravenCount');
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
        console.log(response);
    })
}