

function StopWatch() {
    let startTime, endTime, running, duration = 0;

    // start method
    this.start = function() { // start timer
        
        if (running) {
            throw new Error('Stopwatch has already started.')
        
        } else {
            running = true;
            startTime = Date.now(); // get startTime (now)
        };
        
    };

    this.stop = function() {

        if(!running) {
            throw new Error ('Stopwatch has not started.')
        
        } else {
            running = false;
            endTime = Date.now();
            seconds = ((endTime - startTime)/1000).toFixed(2);
            duration += seconds;
        }
    };

    this.reset = function() {
        startTime, endTime, running, duration = 0;
    };

    Object.defineProperty(this, 'duration', { // This allows user to access the 'duration' property without being able to manipulate it.
        get: function() { return duration }
    });

};

