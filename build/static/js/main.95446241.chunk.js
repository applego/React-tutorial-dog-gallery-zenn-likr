(this["webpackJsonpReact-tutorial-dog-gallery-zenn-likr"]=this["webpackJsonpReact-tutorial-dog-gallery-zenn-likr"]||[]).push([[0],{14:function(e,r,n){"use strict";n.r(r);var t=n(0),i=(n(9),n(4)),a=n(6),s=["affenpinscher","african","airedale","akita","appenzeller","australian-shepherd","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","buhund-norwegian","bulldog-boston","bulldog-english","bulldog-french","bullterrier-staffordshire","cairn","cattledog-australian","chihuahua","chow","clumber","cockapoo","collie-border","coonhound","corgi-cardigan","cotondetulear","dachshund","dalmatian","dane-great","deerhound-scottish","dhole","dingo","doberman","elkhound-norwegian","entlebucher","eskimo","finnish-lapphund","frise-bichon","germanshepherd","greyhound-italian","groenendael","havanese","hound-afghan","hound-basset","hound-blood","hound-english","hound-ibizan","hound-plott","hound-walker","husky","keeshond","kelpie","komondor","kuvasz","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff-bull","mastiff-english","mastiff-tibetan","mexicanhairless","mix","mountain-bernese","mountain-swiss","newfoundland","otterhound","ovcharka-caucasian","papillon","pekinese","pembroke","pinscher-miniature","pitbull","pointer-german","pointer-germanlonghair","pomeranian","poodle-miniature","poodle-standard","poodle-toy","pug","puggle","pyrenees","redbone","retriever-chesapeake","retriever-curly","retriever-flatcoated","retriever-golden","ridgeback-rhodesian","rottweiler","saluki","samoyed","schipperke","schnauzer-giant","schnauzer-miniature","setter-english","setter-gordon","setter-irish","sheepdog-english","sheepdog-shetland","shiba","shihtzu","spaniel-blenheim","spaniel-brittany","spaniel-cocker","spaniel-irish","spaniel-japanese","spaniel-sussex","spaniel-welsh","springer-english","stbernard","terrier-american","terrier-australian","terrier-bedlington","terrier-border","terrier-dandie","terrier-fox","terrier-irish","terrier-kerryblue","terrier-lakeland","terrier-norfolk","terrier-norwich","terrier-patterdale","terrier-russell","terrier-scottish","terrier-sealyham","terrier-silky","terrier-tibetan","terrier-toy","terrier-westhighland","terrier-wheaten","terrier-yorkshire","vizsla","waterdog-spanish","weimaraner","whippet","wolfhound-irish"],c=n(1),o=n(3),l=n.n(o),d=n(5);function h(e){return u.apply(this,arguments)}function u(){return(u=Object(d.a)(l.a.mark((function e(r){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breed/".concat(r,"/images/random/12"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t.message);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return Object(t.jsx)("header",{className:"hero is-dark is-bold",children:Object(t.jsx)("div",{className:"hero-body",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("h1",{className:"title",children:"Cute Dog Images"})})})})}function j(e){return Object(t.jsx)("div",{className:"card",children:Object(t.jsx)("div",{className:"card-image",children:Object(t.jsx)("figure",{className:"image",children:Object(t.jsx)("img",{src:e.url,alt:"cute dog"})})})})}function m(){return Object(t.jsx)("p",{children:"Loading..."})}function p(e){var r=e.urls;return null===r?Object(t.jsx)(m,{}):Object(t.jsx)("div",{className:"columns is-vcentered is-multiline",children:r.map((function(e){return Object(t.jsx)("div",{className:"column is-3",children:Object(t.jsx)(j,{url:e})},e)}))})}function g(e){return Object(t.jsx)("div",{children:Object(t.jsx)("form",{onSubmit:function(r){r.preventDefault();var n=r.target.elements.breed;e.onFormSubmit(n.value)},children:Object(t.jsxs)("div",{className:"field has-addons",children:[Object(t.jsx)("div",{className:"control is-expanded",children:Object(t.jsx)("div",{className:"select is-fullwidth",children:Object(t.jsxs)("select",{name:"breed",defaultValue:"shiba",children:[s.map((function(e,r){return Object(t.jsx)("option",{value:e,children:e},r.toString())})),";"]})})}),Object(t.jsx)("div",{className:"control",children:Object(t.jsx)("button",{type:"submit",className:"button is-dark",children:"Reload"})})]})})})}function f(){var e=Object(c.useState)(null),r=Object(a.a)(e,2),n=r[0],i=r[1];return Object(c.useEffect)((function(){h("shiba").then((function(e){i(e)}))}),[]),Object(t.jsxs)("main",{children:[Object(t.jsx)("section",{className:"section",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)(g,{onFormSubmit:function(e){h(e).then((function(e){i(e)}))}})})}),Object(t.jsx)("section",{className:"section",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)(p,{urls:n})})})]})}function x(){return Object(t.jsx)("footer",{className:"footer",children:Object(t.jsxs)("div",{className:"content has-text-centered",children:[Object(t.jsx)("p",{children:"Dog images are retrieved from Dog API"}),Object(t.jsx)("p",{children:Object(t.jsx)("a",{href:"https://dog.ceo/dog-api/about",children:"Donate to Dog API"})})]})})}var O=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(b,{}),Object(t.jsx)(f,{}),Object(t.jsx)(x,{})]})};Object(i.render)(Object(t.jsx)(O,{}),document.querySelector("#content"))}},[[14,1,2]]]);
//# sourceMappingURL=main.95446241.chunk.js.map