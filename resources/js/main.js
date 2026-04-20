function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.init();

Neutralino.window.setSize({
    width: 600,
    height: 600,
    minWidth: 600,
    minHeight: 600,
    maxWidth: 600,
    maxHeight: 600,
    resizable: false
});

Neutralino.events.on("windowClose", onWindowClose);

const binaryInput = document.getElementById('binaryInput');
const result = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');
const errorMsg = document.getElementById('errorMsg');

binaryInput.addEventListener('input', function() {
    const value = binaryInput.value.trim(); 

     if(value === '') {
        result.textContent = '-';
        errorMsg.style.display = 'none';
        copyBtn.style.display = 'none';
        return;
     }

     const isValid = /^[01]+$/.test(value);
     if(!isValid) {
        // show error, hide copy, reset result
        errorMsg.style.display = 'block';
        copyBtn.style.display = 'none';
        result.textContent = '-';
    } else {
        
        const decimal = parseInt(value, 2);
        
        result.textContent = decimal;
        errorMsg.style.display = 'none';
        copyBtn.style.display = 'block';
    }

});

copyBtn.addEventListener('click', function() {

    navigator.clipboard.writeText(result.textContent).then(function() {
        
      
        copyBtn.textContent = 'Copied!';
        
     
        setTimeout(function() {
            copyBtn.textContent = 'Copied';
        }, 1000);

    });

});
