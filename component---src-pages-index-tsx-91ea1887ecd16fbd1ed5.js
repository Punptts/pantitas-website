(self.webpackChunkpantitas_website=self.webpackChunkpantitas_website||[]).push([[691],{6946:function(e,t,l){"use strict";l.d(t,{Z:function(){return m}});var a=l(7294);function n(){return a.createElement("footer",{className:"footer"},a.createElement("div",{className:"footer-item"},a.createElement("img",{className:"global-logo",src:"/images/logo.png",alt:"logo"}),a.createElement("p",null,"Explore · Research · Design"),a.createElement("p",null,"2022 I © Pantitas")))}var c=l(1883);function r(){return a.createElement("nav",{className:"navbar"},a.createElement(c.rU,{to:"/"},a.createElement("img",{className:"global-logo",src:"/images/logo.png",alt:"logo"})),a.createElement("div",{className:"flex flex-row items-center"},a.createElement(c.rU,{className:"navbar-item",to:"/"},"PROJECT"),a.createElement(c.rU,{className:"navbar-item",to:"/about"},"ABOUT")))}function m(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(r,null),a.createElement("main",null,t),a.createElement(n,null))}},5698:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return g}});var a=l(7294),n=l(6946);function c(e){let{title:t,leftIcon:l,rightIcon:n}=e;return a.createElement("button",{className:"w-fit px-4 py-1.5 rounded-md bg-neutral-900 text-neutral-200"},l,a.createElement("p",null,t),n)}function r(e){let{title:t,coverImage:l,desc:n,createdAt:c}=e;return a.createElement("div",{className:"py-6 md:px-4"},a.createElement("div",{className:"aspect-w-16 aspect-h-9"},a.createElement("img",{className:"w-full h-full object-cover rounded-lg",src:l,alt:"cover-img"})),a.createElement("div",{className:"flex items-center space-x-2 pt-3"},a.createElement("div",{className:"border-l-2 border-l-neutral-600 rounded-md h-6"}),a.createElement("span",{className:"text-sm text-neutral-900"},c)),a.createElement("div",null,a.createElement("h2",{className:"text-lg line-clamp-2 font-medium text-neutral-900 pt-2"},t),a.createElement("span",{className:"text-sm line-clamp-2 font-normal text-neutral-600 pt-2"},n)))}function m(e){let{title:t,textClassName:l}=e;return a.createElement("div",null,a.createElement("h2",{className:"flex justify-center text-2xl font-bold"},t))}function s(e){let{title:t,image:l,desc:n,timeline:c}=e;return a.createElement("div",{className:"flex flex-row py-4 w-full"},a.createElement("div",{className:"relative w-1/2 h-full"},a.createElement("div",{className:"aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-9"},a.createElement("img",{className:"w-full h-full object-cover rounded-lg",src:l,alt:"project-image"}))),a.createElement("div",{className:"flex flex-col justify-center pl-4 w-2/3 md:pl-8"},a.createElement("h2",{className:"text-lg line-clamp-2 md:text-2xl font-medium text-neutral-900"},t),a.createElement("span",{className:"text-sm line-clamp-1 md:line-clamp-2 md:text-base font-normal text-neutral-600 py-4"},n),a.createElement("hr",{className:" text-neutral-900 pt-2"}),a.createElement("p",{className:"text-sm font-normal text-neutral-900 pt-2"},c)))}var i=l(8578),o=l.n(i),d=l(5214),u=l.n(d),x=l(4423),p=l.n(x),E=l(1883);var g=e=>{let{data:t}=e;const{blogs:l,projects:i}=t,{edges:d}=l,{edges:x}=i;return a.createElement(n.Z,null,a.createElement("section",null,a.createElement("div",{className:"flex flex-col items-center pt-8 px-4 md:flex-row space-between md:h-auto md:pt-16 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto"},a.createElement("img",{src:"/images/logo.png",className:"profile w-48 h-48 md:w-64 md:h-64",alt:"logo"}),a.createElement("div",{className:"flex flex-col md:flex-row"},a.createElement("div",{className:"flex flex-col pt-10 pl-0 items-center md:pt-0 justify-center md:pl-12 md:items-start"},a.createElement("p",{className:"text-xl"},"Hey Friends, I am"),a.createElement("p",{className:"text-4xl text-center font-semibold pt-5 lg:text-5xl lg:text-left"},"Pantita Suksa-nga"),a.createElement("p",{className:"text-lg text-center py-5 text-neutral-600 lg:text-xl md:text-left"},"I am a Ux/Ui Designer, who is always curious and hungry for an adventure of designing things."),a.createElement(c,{title:"About Me"})),a.createElement("div",{className:"flex flex-row pt-12 md:flex-col justify-center md:pt-0 md:pl-12"},a.createElement(o(),{className:"h-10 w-10 mx-6"}),a.createElement(u(),{className:"h-10 w-10 mx-6 md:mt-8"}),a.createElement(p(),{className:"h-10 w-10 mx-6 md:mt-8"}))))),a.createElement("section",null,a.createElement("div",{className:"pt-24 px-4 md:px-6 md:pt-32 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto"},a.createElement(m,{title:"Latest Experiment"}),a.createElement("div",{className:"flex flex-col md:flex-row flex-wrap justify-between pt-10"},d.map(((e,t)=>{let{node:l}=e;const{frontmatter:n}=l,{title:c,description:m,cover:s,slug:i,date:o}=n;return a.createElement(E.rU,{className:"w-full md:w-1/2 lg:w-1/3",to:i,key:t},a.createElement(r,{title:c,coverImage:s,desc:m,createdAt:o}))}))))),a.createElement("section",null,a.createElement("div",{className:"py-32 px-4 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto"},a.createElement(m,{title:"All Projects"}),a.createElement("div",{className:"flex flex-col justify-between pt-10"},x.map(((e,t)=>{let{node:l}=e;const{frontmatter:n}=l,{title:c,description:r,cover:m,timeline:i,slug:o}=n;return a.createElement(E.rU,{className:"w-full",to:o,key:t},a.createElement(s,{title:c,image:m,desc:r,timeline:i}))}))))))}},8578:function(e,t,l){var a=l(7294);function n(e){return a.createElement("svg",e,[a.createElement("g",{key:0},a.createElement("g",null,a.createElement("path",{d:"M404.831,94.739c-6.853,0-12.43,5.577-12.43,12.43s5.577,12.43,12.43,12.43c6.854,0,12.43-5.576,12.43-12.43\r\n\t\t\tS411.685,94.739,404.831,94.739z"}))),a.createElement("g",{key:1},a.createElement("g",null,a.createElement("path",{d:"M256,145.804c-60.762,0-110.196,49.434-110.196,110.196c0,60.762,49.434,110.197,110.196,110.197\r\n\t\t\tc60.763,0,110.197-49.434,110.197-110.196C366.197,195.239,316.763,145.804,256,145.804z"}))),a.createElement("g",{key:2},a.createElement("g",null,a.createElement("path",{d:"M371.643,0H140.357C62.964,0,0,62.964,0,140.358v231.285C0,449.037,62.964,512,140.357,512h231.286\r\n\t\t\tC449.037,512,512,449.036,512,371.643V140.358C512,62.964,449.037,0,371.643,0z M256,396.432\r\n\t\t\tc-77.435,0-140.431-62.997-140.431-140.432S178.566,115.57,256,115.57S396.432,178.566,396.432,256S333.434,396.432,256,396.432z\r\n\t\t\t M404.831,149.836c-23.526,0-42.666-19.14-42.666-42.666c0-23.526,19.14-42.667,42.666-42.667\r\n\t\t\tc23.526,0,42.666,19.14,42.666,42.666S428.357,149.836,404.831,149.836z"}))),a.createElement("g",{key:3}),a.createElement("g",{key:4}),a.createElement("g",{key:5}),a.createElement("g",{key:6}),a.createElement("g",{key:7}),a.createElement("g",{key:8}),a.createElement("g",{key:9}),a.createElement("g",{key:10}),a.createElement("g",{key:11}),a.createElement("g",{key:12}),a.createElement("g",{key:13}),a.createElement("g",{key:14}),a.createElement("g",{key:15}),a.createElement("g",{key:16}),a.createElement("g",{key:17})])}n.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},e.exports=n,n.default=n},4423:function(e,t,l){var a=l(7294);function n(e){return a.createElement("svg",e,a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"linkedin"},a.createElement("path",{id:"icon",d:"m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-92 139.28a3.71 3.71 0 0 1 -3.71 3.72h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72zm-11.62-76.28a15 15 0 1 1 15-15 15 15 0 0 1 -15 15zm94.26 76.54a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"}))))}n.defaultProps={height:"512",viewBox:"0 0 176 176",width:"512"},e.exports=n,n.default=n},5214:function(e,t,l){var a=l(7294);function n(e){return a.createElement("svg",e,a.createElement("g",null,[a.createElement("path",{d:"m288.796 256c0 80.296-64.649 145.389-144.398 145.389s-144.398-65.093-144.398-145.389 64.649-145.389 144.398-145.389c79.748 0 144.398 65.093 144.398 145.389",key:0}),a.createElement("path",{d:"m447.204 256c0 75.585-32.325 136.858-72.199 136.858s-72.199-61.273-72.199-136.858 32.325-136.858 72.199-136.858c39.875 0 72.199 61.273 72.199 136.858",key:1}),a.createElement("path",{d:"m512 256c0 67.721-11.369 122.619-25.393 122.619-14.025 0-25.392-54.898-25.392-122.619s11.367-122.619 25.392-122.619c14.024 0 25.393 54.898 25.393 122.619",key:2})]))}n.defaultProps={id:"Capa_1",enableBackground:"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-index-tsx-91ea1887ecd16fbd1ed5.js.map