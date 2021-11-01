async function onLoad() {
    await sleep(5000);
    window.location.reload();
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}