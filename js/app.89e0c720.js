(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],h=0,d=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"054a":function(e,t,n){"use strict";var a=n("8d58"),o=n.n(a);o.a},"055e":function(e,t,n){e.exports=n.p+"img/mario.100fc34d.jpg"},"21bb":function(e,t,n){"use strict";var a=n("7a98"),o=n.n(a);o.a},3075:function(e,t,n){"use strict";var a=n("708d"),o=n.n(a);o.a},3383:function(e,t,n){"use strict";var a=n("6e93"),o=n.n(a);o.a},"34be":function(e,t,n){},"54ad":function(e,t,n){e.exports=n.p+"img/minesweeper.6b93ac96.png"},"54f5":function(e,t,n){},5669:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("c197"),n("a878"),n("55ec"),n("70cb"),n("8fd1");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav-bar"),n("router-view",{staticClass:"route-base"}),n("my-footer")],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"nav-bar"},[a("div",{staticClass:"logo-blob"},[a("img",{staticClass:"logo",attrs:{src:n("9d64")}}),a("div",{staticClass:"me t-to-b lt"},[a("router-link",{attrs:{to:"/"}},[a("h1",[e._v("Nathanial Hapeman")]),a("h2",[e._v("Software Engineer")])])],1)]),a("div",{staticClass:"link-holder l-to-r"},e._l(e.routes,(function(t){return a("div",{key:t.name},[e.hasChildren(t)?a("div",{staticClass:"dropdown"},[a("div",{staticClass:"label"},[a("router-link",{staticClass:"router-link",attrs:{to:t.path}},[a("span",[e._v(e._s(t.name))]),a("arrow-svg")],1)],1),a("div",{staticClass:"list"},e._l(t["children"],(function(n){return a("router-link",{key:n.name,staticClass:"router-link",attrs:{to:t.path+"/"+n.path}},[a("span",[e._v(e._s(n.name))])])})),1)]):e._e(),e.hasChildren(t)?e._e():a("router-link",{staticClass:"router-link",attrs:{to:t.path}},[a("span",[e._v(e._s(t.name))])])],1)})),0)])},i=[],l={functional:!0,render:function(e,t){var n=t._c;return n("svg",{class:[t.data.class,t.data.staticClass],style:[t.data.style,t.data.staticStyle],attrs:{fill:"#1A1A1A",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[n("switch",[n("g",[n("path",{attrs:{d:"M97.5 66.9c0 3.5-1.3 7-4 9.6-5.3 5.3-13.9 5.3-19.3 0L50 52.3 25.8 76.6c-5.3 5.3-13.9 5.3-19.3 0-5.3-5.3-5.3-13.9 0-19.3l33.9-33.9c2.6-2.6 6-4 9.6-4s7.1 1.4 9.6 4l33.9 33.9c2.7 2.7 4 6.2 4 9.6z"}})])])])}},c={name:"NavBar",data(){return{routes:{}}},props:[],methods:{hasChildren(e){return"children"in e&&e.children.length>0}},watch:{},created(){this.routes=this.$router.options.routes;for(const e of this.routes)Array.isArray(e.children)&&(e.children=e.children.filter(e=>!0===e.listed))},components:{arrowSvg:l}},u=c,h=(n("ed6b"),n("2877")),d=Object(h["a"])(u,s,i,!1,null,null,null),p=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"my-footer"},[e._m(0),n("div",{staticClass:"social-links"},[n("svg-link",{attrs:{link:"https://www.linkedin.com/in/nhapeman/"}},[n("linkedin-svg")],1),n("svg-link",{attrs:{link:"https://github.com/nate-h"}},[n("github-svg")],1)],1)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contact"},[n("a",{attrs:{href:"mailto:nhapeman@gmail.com?Subject=Hey%20Nate",target:"_top"}},[n("h1",[e._v("Contact Info")]),n("h2",[e._v("nhapeman@gmail.com")])])])}],g={functional:!0,render:function(e,t){var n=t._c;return n("svg",{class:[t.data.class,t.data.staticClass],style:[t.data.style,t.data.staticStyle],attrs:{"aria-labelledby":"simpleicons-linkedin-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}})])}},v={functional:!0,render:function(e,t){var n=t._c;return n("svg",{class:[t.data.class,t.data.staticClass],style:[t.data.style,t.data.staticStyle],attrs:{"aria-labelledby":"simpleicons-github-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])}},y={name:"MyFooter",components:{linkedinSvg:g,githubSvg:v}},w=y,b=(n("f7d7"),Object(h["a"])(w,m,f,!1,null,null,null)),_=b.exports,k={name:"App",components:{"nav-bar":p,"my-footer":_}},x=k,I=(n("5c0b"),Object(h["a"])(x,o,r,!1,null,null,null)),j=I.exports,C=n("8c4f"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("about-me-container"),a("header-container",{staticClass:"job-components",attrs:{header:"Job History"}},[a("job-container",{attrs:{company:"Applied Invention",img:n("d24f"),link:"https://www.appliedinvention.com/",years:"June 2014 - Present","short-description":"Software Engineer"}},[a("p",[e._v("\n                In short, Applied Invention is a company that helps leading\n                companies and entrepreneurs with any challenging problem\n                they may have. I've been lucky enough to work for AI since\n                they hired me out of college in 2014. All of the projects\n                I've worked on have been extremely interesting and exciting\n                to work on. The first project I worked on was our in-house\n                geo-spacial game engine that was built for simulations. The\n                engine was written in c++ on top of panda3d, an open source\n                3D game engine. Currently I work on a machine learning\n                project and do everything from full stack development, data\n                science to machine learning. My big contribution to this\n                project is creating the majority of an internal annotation\n                website. The website can be used to fully annotate our\n                images but works with external sources of data. It also has\n                powerful tools to analyze the data. Some of the things I do\n                on a weekly basis for this project are: managing and\n                improving the internal annnotation website, making sure all\n                of the annotators are happy and working, running a\n                multi-stage data pipeline on all of our data, and analyzing\n                our annotation data to find useful insights and to shape the\n                direction when need to move it in.\n            ")])]),a("job-container",{attrs:{company:"FrackOptima",img:n("8f1a"),link:"http://frackoptima.com/",years:"May 2016 - October 2017","short-description":"Software Engineer"}},[a("p",[e._v("\n                I worked part-time at FrackOptima as a software engineer\n                while working full-time for Applied Invention. FrackOptima\n                is a hydraulic fracturing company that specializes in\n                software and services for optimal hydraulic fracturing\n                treatments. There's several systems which make this all\n                possible. Most of my work has been on the company website\n                and the fracking simulator.\n            ")])])],1)],1)},T=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"job-container l-to-r lt"},[n("div",{staticClass:"leftside"},[n("img",{attrs:{src:e.img}})]),n("div",{staticClass:"rightside"},[n("h2",[n("a",{attrs:{href:e.link}},[e._v(e._s(e.company))]),n("small",{staticClass:"date right"},[e._v(e._s(e.years))])]),n("h3",[e._v(e._s(e.shortDescription))]),n("p",[e._t("default")],2)])])},A=[],O={name:"JobContainer",data(){return{}},props:["company","img","link","years","short-description"]},$=O,P=(n("f02f"),Object(h["a"])($,M,A,!1,null,null,null)),D=P.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header-container",{attrs:{header:"About Me"}},[a("div",{staticClass:"about-me-container"},[a("div",{staticClass:"row"},[a("h2",[e._v("About Me")]),a("p",[e._v("\n                Hi! I'm Nathanial Hapeman and I am a professional software\n                engineer. I've been programming for\n                "+e._s(e.years_of_experience())+"\n                years now outside of college and have worked in many\n                different domains including: machine learning, fullstack\n                development, simulation and game development. The computer\n                languages I have the most experience with are c/c++, python\n                and javascript but have coded for fun and professionaly in\n                many more. Outside of my professional career, I enjoy\n                hiking, table tennis, netflexing, and having a good time\n                with friends. Always interested in meeting new people and\n                learning something new so send me an email if you want to\n                get in touch.\n            ")])]),a("div",{staticClass:"row"},[a("img",{attrs:{src:n("f363"),alt:""}})]),a("div",{staticClass:"row"},[a("h2",[e._v("Details")]),a("ul",[a("li",{staticClass:"question"},[e._v("Name:")]),a("li",{staticClass:"answer"},[e._v("Nathanial Hapeman")]),a("li",{staticClass:"question"},[e._v("Age:")]),a("li",{staticClass:"answer"},[e._v(e._s(e.my_rough_age()))]),a("li",{staticClass:"question"},[e._v("Location:")]),a("li",{staticClass:"answer"},[e._v("Los Angeles, CA")]),a("li",{staticClass:"question"},[e._v("Education:")]),a("li",{staticClass:"answer"},[e._v("UC Riverside")]),a("li",{staticClass:"answer"},[e._v("\n                    BS in Mechanical Engineering, minor in Computer Science\n                ")])])])])])},V=[],z={name:"AboutMe",data(){return{}},methods:{my_rough_age(){var e=new Date("1990-03-01"),t=Date.now()-e.getTime(),n=new Date(t);return Math.abs(n.getUTCFullYear()-1970)},years_of_experience(){var e=new Date("2014-06-01"),t=Date.now()-e.getTime(),n=new Date(t);return Math.abs(n.getUTCFullYear()-1970)}}},B=z,q=(n("3075"),Object(h["a"])(B,E,V,!1,null,null,null)),J=q.exports,L={name:"HomeContainer",data(){return{links:[{name:"About Me",link:"aboutme"},{name:"Job History",link:"jobhistory"},{name:"Projects",link:"projects"}]}},components:{"job-container":D,"about-me-container":J},methods:{},created(){}},H=L,F=(n("21bb"),Object(h["a"])(H,S,T,!1,null,null,null)),N=F.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resume"},[n("iframe",{staticClass:"pdf",attrs:{src:"https://drive.google.com/file/d/1EITc-fPHTZMSd7i7PxE6OetYMn7fFuMq/preview",frameBorder:"0",scrolling:"auto"}})])}],W={name:"Resume",created(){}},G=W,Y=(n("ed53"),Object(h["a"])(G,R,U,!1,null,null,null)),Z=Y.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"projects"},["Projects"===e.$route.name?n("div",{staticClass:"list"},[n("header-container",{attrs:{header:"Projects"}},[n("p",[e._v("\n                Here are some of the fun coding projects I created outside\n                of work. Enjoy!\n            ")])]),e._l(e.projects,(function(e){return n("div",{key:e.name},[n(e,{tag:"component"})],1)}))],2):e._e(),n("router-view",{staticClass:"project-child"})],1)},K=[],X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("project-template",{scopedSlots:e._u([{key:"summaryImage",fn:function(){return[a("img",{attrs:{src:n("055e")}})]},proxy:!0},{key:"summaryText",fn:function(){return[a("p",[e._v("\n            Being a 90's kid, I played my fair share of Mario based games.\n            The next logical step was to create my own version of my beloved\n            childhood game! So being fairly brand new to programming, I\n            thought it was a great idea to recreate some of the basic\n            functionality of Super Mario Bros. The hardest part of this for\n            sure was trying to acquire all of the art for the game. So much\n            so that I started borrowing assets from other games. It was an\n            amazing learning experience to teach me c++ and polymorphism. It\n            was also a good introduction to data structures, memory\n            management, and threading.\n        ")])]},proxy:!0},{key:"demo",fn:function(){return[a("div",{staticStyle:{position:"relative","padding-top":"56.25%"}},[a("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube.com/embed/EMslyjWIPGo",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])]},proxy:!0},{key:"demoDetails",fn:function(){return[a("p")]},proxy:!0}])})},ee=[],te={name:"Mario",path:"mario",listed:!0,data(){return{title:"Super Mario Bros Reloaded",description:"C++ with SDL",moreInfoButtonText:"Demo"}}},ne=te,ae=Object(h["a"])(ne,X,ee,!1,null,null,null),oe=ae.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("project-template",{scopedSlots:e._u([{key:"summaryImage",fn:function(){return[a("img",{attrs:{src:n("72f4")}})]},proxy:!0},{key:"summaryText",fn:function(){return[a("p",[e._v("\n            I built a music visualizer that tries to intelligently\n            understand as much about the song that's playing so it could\n            create a more representative visual. All songs played have to\n            undergo a two step preprocessing algorithm that runs a source\n            separator and a feature extractor on each of the generated\n            sources. I use Spleeter and Librosa to do source separation.\n            Spleeter is able to separate the drums, vocals, bass and other\n            for each track. Librosa can separate the percussion and\n            harmonics. For feature extracting, I use Librosa exclusively.\n        ")])]},proxy:!0},{key:"demo",fn:function(){return[a("div",{staticStyle:{position:"relative","padding-top":"75%"}},[a("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://player.vimeo.com/video/454955980",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}})])]},proxy:!0},{key:"demoDetails",fn:function(){return[a("p",[e._v("\n            I haven't worked extensively with python for GUI/game\n            development so I decided to use pygame and opengl for creating\n            the visualizer. I thought it would be a good learning experience\n            to gauge the python based gui/game development tools out there.\n            What it turned into was a good understanding on how to use numpy\n            for large array manipulation and opengl for VAO rendering. I\n            have 6 visualizers that can be cycled through. Visualizers 1, 4\n            and 6 make heavy use of moving averages, thresholds and other\n            heuristics to get the colors to render just right. Visualizers 1\n            and 4->6 use the same colors to represent the separated source\n            that's heard. See color key below for color mappings.\n        ")]),a("h2",[e._v("Brief description of each visualizer")]),a("ol",[a("li",[e._v("\n                combo_board: Uses both spectrograms and features to render a\n                grid of squares. Each illuminated square represents a\n                certain frequency range heard. Squares near the top right of\n                the screen map to higher frequencies. The color of that\n                square represents what source it came from.\n            ")]),a("li",[e._v("\n                debug: Shows all features generated for current source\n                separation plan.\n            ")]),a("li",[e._v("\n                spectrogram: Shows all spectrograms generated for current\n                source separation plan.\n            ")]),a("li",[e._v("\n                concentric_squares: Uses the source separated spectrograms\n                to render concentric square rings that represent what\n                frequency is being played. The bigger the ring, the higher\n                the frequency. Ring color matches source heard. This\n                visualizer combines colors if 2+ sources are playing the\n                same frequency.\n            ")]),a("li",[e._v("\n                stacked_equalizers: Show all frequencies heard with no\n                adjustments.\n            ")]),a("li",[e._v("\n                checkerboard: same as combo_board but with no use of\n                features and much less filtering.\n            ")])]),a("p",[e._v("\n            Code\n            "),a("a",{attrs:{href:"https://github.com/nate-h/Whirling"}},[e._v("\n                https://github.com/nate-h/Whirling")])]),a("h2",[e._v("TLDR - I built a music visualizer")]),a("p",[e._v("\n            The colors map to separated sources. "),a("br"),e._v("\n            Here's the key:\n        ")]),a("ul",[a("li",{staticStyle:{color:"green"}},[e._v("Green -> vocals")]),a("li",{staticStyle:{color:"blue"}},[e._v("Blue -> other (piano, guitar, etc.)")]),a("li",{staticStyle:{color:"red"}},[e._v("Red -> Drums")]),a("li",{staticStyle:{color:"purple"}},[e._v("Purple -> Bass")])])]},proxy:!0}])})},se=[],ie={name:"Whirling",path:"whirling",listed:!0,data(){return{title:"Whirling: an AI-driven audio visualizer",description:"Librosa, OpenGL, Python, Spleeter",moreInfoButtonText:"Demo"}}},le=ie,ce=(n("a832"),Object(h["a"])(le,re,se,!1,null,null,null)),ue=ce.exports,he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("project-template",{scopedSlots:e._u([{key:"summaryImage",fn:function(){return[a("img",{attrs:{src:n("54ad")}})]},proxy:!0},{key:"summaryText",fn:function(){return[a("p",[e._v("\n            Minesweeper was one of the first games I remade as a programmer.\n            Never played the game too much but thought it would be fun to\n            recreate and more importantly achievable. Fair warning the sound\n            effects can be jarring.\n        ")])]},proxy:!0},{key:"demo",fn:function(){return[a("iframe",{staticStyle:{width:"400px",height:"370px"},attrs:{src:"https://nate-h.github.io/minesweeper_js/",frameborder:"0",allow:"autoplay; encrypted-media",scrolling:"no",allowfullscreen:""}})]},proxy:!0},{key:"demoDetails",fn:function(){return[a("p")]},proxy:!0}])})},de=[],pe={name:"Minesweeper",path:"minesweeper",listed:!0,data(){return{title:"Minesweeper Remake",description:"Javascript",moreInfoButtonText:"Play"}}},me=pe,fe=Object(h["a"])(me,he,de,!1,null,null,null),ge=fe.exports,ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("project-template",{scopedSlots:e._u([{key:"summaryImage",fn:function(){return[a("img",{attrs:{src:n("c60d")}})]},proxy:!0},{key:"summaryText",fn:function(){return[a("p",[e._v("\n            Before I got into streaming, I had a pretty big music\n            collection. I was really into making playlists but was\n            frustrated at how iTunes didn't have the best UI for managing\n            playlists. Trying to improve my coding skills, I thought it\n            would be fun to create my own version of iTunes with some cool\n            features for managing playlists. So I created MyTunes. In\n            creating it, I learned a good amount about multithread\n            synchronization, object serialization, regex filters, swing\n            components\n        ")])]},proxy:!0},{key:"demo",fn:function(){return[a("div",{staticStyle:{position:"relative","padding-top":"56.25%"}},[a("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube.com/embed/1c4erMvMnVQ",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])]},proxy:!0},{key:"demoDetails",fn:function(){return[a("p",[e._v("\n            I created this media player for the soul purpose of having\n            greater management over my music. The layout and functionality\n            is similar to iTunes but it has some additional features like\n            hotkeys for inserting songs into playlists or checkmarks to see\n            which playlist a song is in. Speed was a big concern while\n            implementing this media player. When a user adds music to the\n            library, all the information for each song is calculated only\n            once (not each time myTunes start) then stored in a hashmap that\n            way I can access information in constant time. Also, I do not\n            copy the songs to a folder, rather I copy the address then load\n            it when the user wants to play. Lastly, when I save the\n            information, I serialize it that way it loads fast. Two of the\n            most difficult things to implement were the regex filter for the\n            search bar and the multi-threading for playing the sound.\n        ")])]},proxy:!0}])})},ye=[],we={name:"MyTunes",path:"mytunes",listed:!0,data(){return{title:"MyTunes: a music player",description:"Java and JavaZOOM",moreInfoButtonText:"Demo"}}},be=we,_e=Object(h["a"])(be,ve,ye,!1,null,null,null),ke=_e.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("project-template",{staticClass:"project-vue",scopedSlots:e._u([{key:"summaryImage",fn:function(){return[n("vuelogo")]},proxy:!0},{key:"summaryText",fn:function(){return[n("p",[e._v("\n            I wrote this website you're viewing now using Vue and Sass as a\n            learning experience. The biggest thing I wanted to learn was Vue\n            since I came from an AngularJS background. For this reason, I\n            wrote most of it from scratch so I could learn the ins and outs\n            of Vue.\n            "),n("a",{attrs:{href:"https://github.com/nate-h/nhapeman.com_v3"}},[e._v("\n                Check out the code here!\n            ")]),e._v("\n            In addition to wanting to learn Vue, I also wanted to take the\n            time and learn some of things I didn't have time to learn on the\n            job. As a software developer, you constantly have to fight\n            deadlines and sadly this means you have to occasionally put\n            aside learning something to meet a deadline. The last thing I\n            hoped to learn while developing this website was new patterns\n            from using the\n            "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"}},[e._v("DRY principle")]),e._v("\n            wherever possible. So while developing this website, I rewrote\n            many things as I learned cooler things Vue had to offer.\n        ")])]},proxy:!0},{key:"demo",fn:function(){return[n("vuelogo")]},proxy:!0},{key:"demoDetails",fn:function(){return[n("p",[e._v("\n            My experience with Vue so far has been completely positive,\n            unlike my experience with AngularJS which could have been\n            better. I suspected that the documentation for AngularJS was bad\n            but it wasn't until I dove into Vue that I realized what I was\n            missing. The best way to read AngularJS documentation is to\n            ignore it completly and use stackoverflow. I found it way too\n            complex for describing simple concepts. It also uses other\n            AngularJS terms to define something. So You almost need an\n            understanding of everything else to understand one thing.\n        ")]),n("p",[e._v("\n            Vue on the other hand was much easier to learn. I'll admit that\n            part of the reason why it was easier to learn is that so many\n            things were borrowed from AngularJS. So naturally it wasn't too\n            hard to translate a lot of my knowledge over from AngularJS. I\n            think if I didn't have a background in AngularJS or any web\n            framework for that matter, Vue would have been easy to learn\n            because it's well designed and has documentation geared towards\n            newbies. I think one of the reasons why Vue became the framework\n            it is today is that it's mostly written by one dude,\n            "),n("a",{attrs:{href:"https://twitter.com/youyuxi?lang=en"}},[e._v("Evan You")]),e._v(" so\n            perhaps it doesn't suffer from having\n            "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=QrGrOK8oZG8"}},[e._v("too many cooks")]),e._v(".\n        ")]),n("p",[e._v("\n            Working with it so far, I find that it has a good balance of\n            giving the developer some freedom while still requiring some\n            order in places that create cleaner more manageable code. An\n            example of this are the properties you can define when creating\n            a component. These properties like watch, props, methods and\n            data provide a formal place to group similar items. Vue also\n            provides life cycle hooks that allow you to do stuff at the\n            precise time in the component creation. AngularJS has some\n            formal ways to group common functionality and even provides some\n            life cycle hooks but it's very minimal. Looking back at most of\n            the controllers I wrote, they all would have benefitted by\n            having one place to define the watchers or one place to define\n            scope variables. I still developed my own standards to attempt\n            to have that behavior but it would have been much easier/\n            cleaner if the standard was built into the framework.\n        ")]),n("p",[e._v("\n            Another great feature Vue has is the ability to define a\n            component in one file. These\n            "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/single-file-components.html"}},[e._v("\n                single file components")]),e._v("\n            simply have the Javascript, CSS, and HTML stuffed into 1 file as\n            opposed to 3 seperate files. The beauty of this feature is that\n            developers are more incentivised to break up their code into\n            smaller pieces. I find it annoying when you want to create a\n            small component but need to create 3 files for your css/js/html\n            that have 30 lines each. Being able to throw all 3 snippets into\n            one file makes it so: you're not overwhlemed by number of files,\n            you can bounce around the code faster since it's all in one\n            file, delete the component easier.\n        ")]),n("p",[e._v("\n            The last thing I like about Vue is how easy it is to dive into\n            it. The first step of learning anything new is getting your foot\n            in the door and with the Vue CLI, it's that much easier to get\n            started with Vue. Using the client, it takes 4 lines to get a\n            local website up and running. And while configuring a new\n            project, you can choose between many popular options for things\n            like linters and testing frameworks. Get started today with:\n            "),n("snippet",{attrs:{lang:"bash"}},[e._v(e._s(e.VueSiteSetup))])],1)]},proxy:!0}])})},Ie=[],je={functional:!0,render:function(e,t){var n=t._c;return n("svg",{class:[t.data.class,t.data.staticClass],style:[t.data.style,t.data.staticStyle],attrs:{viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z",fill:"#41b883"}}),n("path",{attrs:{d:"M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z",fill:"#34495e"}})])}},Ce="npm install -g @vue/cli\nvue create my-project\ncd my-project\nnpm run serve",Se={name:"Vue",path:"vue",listed:!0,data(){return{title:"My thoughts on learning Vue",description:"Vue, Sass",moreInfoButtonText:"Read More",VueSiteSetup:Ce}},components:{vuelogo:je}},Te=Se,Me=(n("844d"),Object(h["a"])(Te,xe,Ie,!1,null,null,null)),Ae=Me.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("project-template",{scopedSlots:e._u([{key:"summaryImage",fn:function(){return[a("img",{attrs:{src:n("7c89")}})]},proxy:!0},{key:"summaryText",fn:function(){return[a("p",[e._v("\n            I had some time to kill before I got my first job as a software\n            developer. Decided to remake Pacman in Javascript for fun. As a\n            side effect, I improved my skills as a game developer and\n            polished my knowledge of data structures and algorithms.\n        ")])]},proxy:!0},{key:"demo",fn:function(){return[a("iframe",{staticStyle:{width:"600px",height:"430px"},attrs:{src:"https://nate-h.github.io/pacman_js/",frameborder:"0",allow:"autoplay; encrypted-media",scrolling:"no",allowfullscreen:""}})]},proxy:!0},{key:"demoDetails",fn:function(){return[a("p",[e._v("\n            A lot of the fun I got from creating this game was in trying to\n            optimize it. For instance, rather than rendering everything in\n            the level each frame, I only rendered were the changes happened\n            in the game. I also made sure I used the best Data Structures\n            and algorithms so no unnecessary work was done.\n        ")]),a("p",[e._v("\n            The hardest thing was creating the AI for the ghost. In order to\n            do this, I had to transform the original two dimensional array\n            map into a graph. The ghost can then navigate through the map\n            using the nodes as reference points. They can use these nodes to\n            move towards Pacman by checking which node Pacman is going\n            towards, or to move around the map randomly. The orange ghost in\n            the original Pacman moves this way but most peope don't notice\n            since they are trying to survive. Now to get each ghost to move\n            towards Pacman I used Dijkstra's algorithm to compute the\n            fastest path.\n        ")])]},proxy:!0}])})},$e=[],Pe={name:"Pacman",path:"pacman",listed:!0,data(){return{title:"Pacman Remake",description:"Javascript",moreInfoButtonText:"Play"}}},De=Pe,Ee=Object(h["a"])(De,Oe,$e,!1,null,null,null),Ve=Ee.exports,ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("project-template",{scopedSlots:e._u([{key:"summaryImage",fn:function(){return[a("img",{attrs:{src:n("7c89")}})]},proxy:!0},{key:"summaryText",fn:function(){return[a("p",[e._v("\n            I had some time to kill before I got my first job as a software\n            developer. Decided to remake Pacman in Javascript for fun. As a\n            side effect, I improved my skills as a game developer and\n            polished my knowledge of data structures and algorithms.\n        ")])]},proxy:!0},{key:"demo",fn:function(){return[a("iframe",{staticStyle:{width:"600px",height:"430px"},attrs:{src:"https://nate-h.github.io/pacman_js/",frameborder:"0",allow:"autoplay; encrypted-media",scrolling:"no",allowfullscreen:""}})]},proxy:!0},{key:"demoDetails",fn:function(){return[a("p",[e._v("\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias\n            aut consectetur quia, recusandae quod, debitis reprehenderit\n            dolorum dolores inventore iusto ad blanditiis dolorem, quo\n            aliquid sit veniam? Praesentium, facere voluptatem.\n        ")])]},proxy:!0}])})},Be=[],qe={name:"PixelChaser",path:"pixelchaser",listed:!1,data(){return{title:"Pixel Chaser",description:"Javascript",moreInfoButtonText:"Demo"}}},Je=qe,Le=Object(h["a"])(Je,ze,Be,!1,null,null,null),He=Le.exports,Fe={name:"Projects",created(){this.projects=[oe,ue,He,Ae,ke,Ve,ge],this.projects=this.projects.filter(e=>!0===e.listed)}},Ne=Fe,Re=(n("054a"),Object(h["a"])(Ne,Q,K,!1,null,null,null)),Ue=Re.exports;let We=[oe,ue,ge,ke,Ae,Ve,He],Ge=[];for(let kt of We)Ge.push({path:kt.path,name:kt.name,component:kt,listed:kt.listed});a["a"].use(C["a"]);var Ye=new C["a"]({routes:[{path:"/",name:"Home",component:N},{path:"/resume",name:"Resume",component:Z},{path:"/projects",name:"Projects",component:Ue,children:Ge}]}),Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"svg-link",attrs:{href:e.link}},[e._t("default"),n("p",{staticClass:"svg-label"},[e._v(e._s(e.label))])],2)},Qe=[],Ke={props:["link","label","color-off","color-hover","color-down"]},Xe=Ke,et=(n("3383"),Object(h["a"])(Xe,Ze,Qe,!1,null,null,null)),tt=et.exports,nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container"},[n("h1",{staticClass:"header"},[e._v(e._s(e.header))]),n("div",{staticClass:"body"},[e._t("default")],2)])},at=[],ot={props:["header"]},rt=ot,st=(n("977f"),Object(h["a"])(rt,nt,at,!1,null,null,null)),it=st.exports,lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project-template"},[e.showSummary()?n("div",{staticClass:"summary-template"},[n("div",{staticClass:"summary-image"},[e.path?n("router-link",{staticClass:"link",attrs:{to:"/projects/"+e.path}},[e._t("summaryImage")],2):e._e(),e.path?e._e():e._t("summaryImage")],2),n("div",{staticClass:"summary-content"},[n("div",{staticClass:"header"},[n("h1",{staticClass:"title"},[e._v(e._s(e.title))]),n("span",{staticClass:"description"},[e._v(e._s(e.description))])]),n("div",[e._t("summaryText")],2),n("h2",{staticClass:"footer"},[n("router-link",{staticClass:"link",attrs:{to:"/projects/"+e.path}},[n("span",[e._v(e._s(e.moreInfoButtonText))])])],1)])]):e._e(),e.showDemo()?n("div",{staticClass:"demo-template t-to-b"},[n("div",{staticClass:"header"},[n("h1",{staticClass:"title"},[e._v(e._s(e.title))]),n("span",{staticClass:"description"},[e._v(e._s(e.description))])]),n("div",{staticClass:"demo"},[e._t("demo")],2),n("div",{staticClass:"text"},[e._t("summaryText"),e._t("demoDetails")],2)]):e._e()])},ct=[],ut={name:"ProjectTemplate",methods:{showSummary:function(){return this.$parent.$route.name!==this.name},showDemo:function(){return this.$parent.$route.name===this.name}},computed:{path:function(){return this.$parent.$options.path},name:function(){return this.$parent.$options.name},title:function(){return this.$parent.title},description:function(){return this.$parent.description},moreInfoButtonText:function(){return this.$parent.moreInfoButtonText}},created:function(){let e=["name","path","listed"];for(const n of e)null!==this.$parent.$options[n]&&void 0!==this.$parent.$options[n]||console.error("Need to override "+n);let t=["title","description","moreInfoButtonText"];for(let n of t)null!==this.$parent[n]&&void 0!==this.$parent[n]||console.error("Need to override "+n)}},ht=ut,dt=(n("d6b5"),Object(h["a"])(ht,lt,ct,!1,null,null,null)),pt=dt.exports,mt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("prism",{attrs:{language:e.lang}},[e._t("default")],2)},ft=[],gt=n("8d51"),vt=n.n(gt),yt={components:{Prism:vt.a},props:{lang:{type:String,default:"javascript"}}},wt=yt,bt=Object(h["a"])(wt,mt,ft,!1,null,null,null),_t=bt.exports;a["a"].component("svg-link",tt),a["a"].component("header-container",it),a["a"].component("project-template",pt),a["a"].component("snippet",_t),a["a"].config.productionTip=!1,new a["a"]({router:Ye,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("e332"),o=n.n(a);o.a},"646a":function(e,t,n){},6558:function(e,t,n){},"6d8c":function(e,t,n){},"6e93":function(e,t,n){},"708d":function(e,t,n){},"72f4":function(e,t,n){e.exports=n.p+"img/whirling.4e458eaf.png"},"7a98":function(e,t,n){},"7c89":function(e,t,n){e.exports=n.p+"img/pacman.c6fe5cc3.png"},"844d":function(e,t,n){"use strict";var a=n("ffb3"),o=n.n(a);o.a},"8d58":function(e,t,n){},"8f1a":function(e,t,n){e.exports=n.p+"img/frackoptima.d4d26dc0.png"},"977f":function(e,t,n){"use strict";var a=n("ead5"),o=n.n(a);o.a},"9d64":function(e,t,n){e.exports=n.p+"img/logo.7903792b.png"},a832:function(e,t,n){"use strict";var a=n("34be"),o=n.n(a);o.a},c60d:function(e,t,n){e.exports=n.p+"img/recordName.8ccff1f7.png"},d24f:function(e,t,n){e.exports=n.p+"img/ai.4fa3be6e.png"},d6b5:function(e,t,n){"use strict";var a=n("6558"),o=n.n(a);o.a},e332:function(e,t,n){},ead5:function(e,t,n){},ed53:function(e,t,n){"use strict";var a=n("646a"),o=n.n(a);o.a},ed6b:function(e,t,n){"use strict";var a=n("6d8c"),o=n.n(a);o.a},f02f:function(e,t,n){"use strict";var a=n("5669"),o=n.n(a);o.a},f363:function(e,t,n){e.exports=n.p+"img/stitchedme.46f0f1a9.jpg"},f7d7:function(e,t,n){"use strict";var a=n("54f5"),o=n.n(a);o.a},ffb3:function(e,t,n){}});
//# sourceMappingURL=app.89e0c720.js.map