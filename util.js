function wait(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

function createSpin() {
    var spinn = document.createElement('span');
    spinn.classList.add('spinner-border', 'spinner-border-sm', 'ms-2');
    spinn.setAttribute('role', 'status');
    spinn.setAttribute('aria-hidden', 'true');
    return spinn;
}