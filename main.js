var td = document.getElementsByTagName('td');
var table = document.getElementsByTagName('table');


start.onclick = (() => {
    i = 0;
    // var value = score.getAttribute('value');
   
    (function(score) {
        start.disabled = true;
        time = document.getElementById('time');
        // score = document.getElementById('bot').outerText;
        if (score < 10) {
            console.log(score);
            rand = Math.floor(Math.random() * td.length);
           var cell = td[rand];
            cell.style.backgroundColor = 'Yellow';
            var caller = arguments.callee;
           
            window.setTimeout(function() {
                if (cell.style.backgroundColor == 'yellow') {
                    cell.style.backgroundColor = 'red';
                    i++;
                    document.getElementById('bot').innerHTML = i;
                    
                }
                caller(score + 1);
                delete  cell;
                
            }, time.value);            
        }
        if (score == 10){
            start.disabled = false;
        }
        
    })(0);
    count = 0;
    table[0].onclick = (event =>{
        
        target = event.target;
        
        if (target.style.backgroundColor == 'yellow') {
            target.style.backgroundColor = 'green';
            count++;
            document.getElementById('player').innerHTML = count;

        }
    });
});






