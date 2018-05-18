window.onload = function() {
    // find all output code elements
    
    var elements = document.querySelectorAll('.jupyter pre.highlight');
    for (var element of elements) {
        var content = window.getComputedStyle(element, ':before').getPropertyValue('content');
        if (content == '""') {
            // attach button and hide content
            var button = document.createElement("button");
            button.innerHTML = 'show';
            button.classList.add("button-hide");
            button.onclick = function() {
                var code = this.parentElement; //.querySelector('code');
                code.classList.toggle("output-hidden");
            }
            element.appendChild(button);

            var code = element.querySelector('code');
            code.dataset.height = code.scrollHeight + 'px';
            code.style.height = code.dataset.height;
            element.classList.add("output-hidden");
        }
    }
};

