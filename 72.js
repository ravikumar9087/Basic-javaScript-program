// this keyword
"use strict";

// with the help of "use strict"; it show undefined
// but without "use strict"; it is show  output "Window {window: Window, self: Window, document: document, name: '', location: Location, …}"

function myFunc(){
    console.log(this);
}
myFunc(); //undefined
