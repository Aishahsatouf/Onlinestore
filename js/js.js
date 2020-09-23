

function greeting(){
    
    var day = new Date();
    var hournow = prompt ('please write the date today')
    if (hournow< 15) {
        greeting= 'Welcome to our store';
    } else {
        greeting= 'Hello this is my store';
    }
     document.write(greeting);
}

greeting();