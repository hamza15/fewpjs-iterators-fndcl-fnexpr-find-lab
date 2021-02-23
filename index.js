
function superbowlWin(a) {
    let year;
    a.find(function(w) {
        if (w.result === 'W'){
            console.log(w.year)
            year = w.year
            return w.year
        } 
    })
    return year
}