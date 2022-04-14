var lock=0;

function init() {
    lock=lockCount;
}

function lock() {
    lock=lock-1;
}

function unlock() {
    lock=lock+1;
}