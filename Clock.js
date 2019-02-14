let start_time = new Date();
let seconds = 0;
let minutes = 0;
let hours = 0;

while (1) {
    let z = new Date();
    let new_time = z.getHours() + ":" + z.getMinutes() + ":" + z.getSeconds();
    let old_time = start_time.getHours() + ":" + start_time.getMinutes() + ":" + start_time.getSeconds();
    if (new_time != old_time) {
        if (z.getSeconds() < 10) {
            seconds = '0' + z.getSeconds()
        } else {
            seconds = z.getSeconds()
        }
        if (z.getMinutes() < 10) {
            minutes = '0' + z.getMinutes()
        } else {
            minutes = z.getMinutes()
        }
        if (z.getHours() < 10) {
            hours = '0' + z.getHours()
        } else {
            hours = z.getHours()
        }
        console.clear();
        console.log("Time is: " + hours + ":" + minutes + ":" + seconds);
        start_time = z
    }
}