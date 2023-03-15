let loadingProgressBar = document.querySelector('.loading-progress-bar')
let loadingState = document.querySelector('.loading-state')

window.addEventListener('message', function(e) {
    if(e.data.eventName === 'loadProgress') {
        loadingProgressBar.style.width = parseInt(e.data.loadFraction * 100) + "%"
    } else if(e.data.eventName == "onLogLine") {
        loadingState.innerHTML = e.data.message
    } else if(e.data.eventName === "initFunctionInvoked") {
        loadingState.innerHTML = "Loading " + e.data.name        
    }
});