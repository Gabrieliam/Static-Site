(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+KvV":function(e,t,a){e.exports=a.p+"static/Gabriel_Faucher_Resume-9400c24261e792d309dd6e165bb6ae6b.pdf"},Fuyr:function(e,t,a){e.exports=a.p+"static/pic04-5ba482cb49a19c8eec82ec730a333d34.jpg"},NCM4:function(e,t,a){e.exports=a.p+"static/pic03-00f42d1f51a3255941713cba25609a0b.jpg"},RXBc:function(e,t,a){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.r(t);var n=a("dI71"),l=a("q1tI"),r=a.n(l),s=a("Bl7J"),c=function(e){return r.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},r.a.createElement("div",{className:"logo"},r.a.createElement("span",{className:"icon fa-gears"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",null,"Gabriel"),r.a.createElement("h1",null,"Faucher"))),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.onOpenArticle("dev")}},"Dev")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.onOpenArticle("music")}},"Music")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.onOpenArticle("writing")}},"Writing")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.onOpenArticle("about")}},"About")))))},o=a("RYzB"),m=a.n(o),u=a("pgDX"),p=a.n(u),h=a("NCM4"),d=a.n(h),f=a("Fuyr"),E=a.n(f),b=a("+KvV"),g=a.n(b),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this,t=r.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return r.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},r.a.createElement("article",{id:"dev",className:("dev"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.a.createElement("h2",{className:"major"},"Dev"),r.a.createElement("span",{className:"image main"},r.a.createElement("img",{src:m.a,alt:""})),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/Gabrieliam"},"GitHub"),"."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://towardsdatascience.com/python-detecting-twitter-bots-with-graphs-and-machine-learning-41269205ab07"},"TowardsDataScience"),"."),t),r.a.createElement("article",{id:"music",className:("music"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.a.createElement("h2",{className:"major"},"Music"),r.a.createElement("span",{className:"image main"},r.a.createElement("img",{src:p.a,alt:""})),r.a.createElement("p",null,"Current projects:"),r.a.createElement("p",null,"GENTLE:  ",r.a.createElement("a",{href:"https://www.instagram.com/gentle.band/"},"Instagram"),".  ",r.a.createElement("a",{href:"https://open.spotify.com/artist/47auAj2yy60wCyil8S8GQu"},"Spotify"),"."),r.a.createElement("p",null,"Paint Dept.:  ",r.a.createElement("a",{href:"https://www.instagram.com/paint_dept/"},"Instagram"),".  ",r.a.createElement("a",{href:"hhttps://open.spotify.com/artist/4tyI6R7mM4FUvSYA8srcvS"},"Spotify"),"."),t),r.a.createElement("article",{id:"writing",className:("writing"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.a.createElement("h2",{className:"major"},"Writing"),r.a.createElement("span",{className:"image main"},r.a.createElement("img",{src:d.a,alt:""})),r.a.createElement("p",null,"Check back soon!"),t),r.a.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.a.createElement("h2",{className:"major"},"About"),r.a.createElement("span",{className:"image main"},r.a.createElement("img",{src:E.a,alt:""})),r.a.createElement("p",null,"I am a software developer, musician, and writer currently living in Toronto."),r.a.createElement("a",{href:g.a,download:!0},"Resume!")," ",r.a.createElement("p",null),r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/gabriel-faucher-17a804138/",className:"icon fa-linkedin"},r.a.createElement("span",{className:"label"},"LinkedIn"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/faucher_gabriel/",className:"icon fa-instagram"},r.a.createElement("span",{className:"label"},"Instagram")))),t))},t}(r.a.Component),v=function(e){return r.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},r.a.createElement("p",{className:"copyright"},"© Design: ",r.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),". Built with: ",r.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")))},y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i(a)),a.setWrapperRef=a.setWrapperRef.bind(i(a)),a.handleClickOutside=a.handleClickOutside.bind(i(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return r.a.createElement(s.a,{location:this.props.location},r.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},r.a.createElement("div",{id:"wrapper"},r.a.createElement(c,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),r.a.createElement(w,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),r.a.createElement(v,{timeout:this.state.timeout})),r.a.createElement("div",{id:"bg"})))},t}(r.a.Component);t.default=y},RYzB:function(e,t,a){e.exports=a.p+"static/pic01-143c3f4883193dbc8f17a300786b90b7.jpg"},pgDX:function(e,t,a){e.exports=a.p+"static/pic02-e83ce11b40c09c5d1358279ad855654a.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-60d52b72e6b7c9de7117.js.map