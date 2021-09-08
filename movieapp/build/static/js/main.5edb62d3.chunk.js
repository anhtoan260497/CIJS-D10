(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{46:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(39),i=a.n(r),c=(a(46),a(15)),o=a(6),u=a(7),l=a(9),d=a(8),p=a(4),j=a.n(p),h=a(14),b=a(21),v=a(40),g=a.n(v),m=a(16),f=a.n(m),O="8f801ff902ecc53548ff30dc7dacbe10",x={getPopularMovies:function(e){return f.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(O,"&language=en-US&page=").concat(e))},getVideos:function(e){return f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(O,"&language=en-US"))},getTopRatedMovies:function(e){return f.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(O,"&language=en-US&page=").concat(e))},getUpComingMovies:function(e){return f.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(O,"&language=en-US&page=").concat(e))},getSearch:function(e){return f.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(O,"&query=").concat(e))},getMovieInfo:function(e){return f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(O))},getActors:function(e){return f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(O))}},k=(a(81),a(0)),M=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(h.a)(j.a.mark((function e(){var t,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,x.getPopularMovies();case 3:for(t=e.sent,a=[],s=0;s<6;s++)a.push(t.data.results[s]);n.setState({popularMovies:a,isLoading:!1});case 7:case"end":return e.stop()}}),e)}))),n.renderPopularMovies=function(){return n.state.popularMovies.map((function(e){return Object(k.jsxs)("div",{className:"popular-container",children:[Object(k.jsx)("img",{className:"popular-image",src:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path),alt:""}),Object(k.jsxs)("div",{className:"description-container",children:[Object(k.jsx)("h3",{className:"popular-name",children:e.original_title}),Object(k.jsx)("h3",{className:"popular-description",children:e.overview})]})]},e.id)}))},n.play=n.play.bind(Object(b.a)(n)),n.state={popularMovies:[],isLoading:!0},n}return Object(u.a)(a,[{key:"play",value:function(){this.slider.slickPlay()}},{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{children:[Object(k.jsx)(g.a,Object(c.a)(Object(c.a)({ref:function(t){return e.slider=t}},{dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,adaptiveHeight:!0}),{},{children:this.state.isLoading?Object(k.jsx)("div",{children:Object(k.jsx)("img",{style:{maxWidth:"30%"},src:"/Images/loading.gif",alt:""})}):this.renderPopularMovies()})),Object(k.jsx)("div",{style:{textAlign:"center"}})]})}}]),a}(n.Component),y=a(22),S=(a(83),a(84),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onClickMovie=function(){e.props.history.push("/movie/".concat(e.props.movies.id)),e.props.getId(e.props.movies.id)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.movies,a=t.poster_path,n=t.original_title,s=t.original_language,r=t.release_date,i=t.id;return Object(k.jsxs)("div",{className:"movie-tag",children:[Object(k.jsx)("div",{className:"play-button",onClick:function(){return e.props.onGetId(i)},children:Object(k.jsx)("img",{src:"Images/playbutton.png",alt:""})}),Object(k.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(a),alt:""}),Object(k.jsxs)("div",{onClick:this.onClickMovie,className:"movie-name",children:[Object(k.jsx)("p",{children:"P"}),Object(k.jsx)("h3",{children:n})]}),Object(k.jsxs)("div",{className:"movie-release",children:[Object(k.jsxs)("p",{children:["Language: ",s]}),Object(k.jsx)("p",{children:r})]})]})}}]),a}(n.Component));var C=function(e){return Object(k.jsx)("div",{className:"trailer",children:void 0!==e.id?Object(k.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(e.id),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}):null})},N=a(26),I=(a(85),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(k.jsx)("div",{className:"search",children:Object(k.jsx)("input",{name:"search",autoComplete:"off",onChange:function(t){return e.props.onSearch(t)},value:this.props.search,placeholder:"Search Film"})})}}]),a}(n.Component)),T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onClickButton=function(){var e=Object(h.a)(j.a.mark((function e(t){var a,s,r,i,c,o,u,l,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("isPopularMovies"!==t.target.name){e.next=9;break}return a=[],e.next=4,x.getPopularMovies(1);case 4:for(s=e.sent,r=0;r<20;r++)a.push(s.data.results[r]);n.setState({isPopularMovies:!0,isTopRatedMovies:!1,isUpComingMovies:!1,onTrailer:!1,data:a,page:1,search:"",isSearch:!1}),e.next=24;break;case 9:if("isTopRatedMovies"!==t.target.name){e.next=18;break}return i=[],e.next=13,x.getTopRatedMovies(1);case 13:for(c=e.sent,o=0;o<20;o++)i.push(c.data.results[o]);n.setState({isPopularMovies:!1,isTopRatedMovies:!0,isUpComingMovies:!1,onTrailer:!1,data:i,page:1,search:"",isSearch:!1}),e.next=24;break;case 18:return u=[],e.next=21,x.getUpComingMovies(1);case 21:for(l=e.sent,d=0;d<20;d++)u.push(l.data.results[d]);n.setState({isPopularMovies:!1,isTopRatedMovies:!1,isUpComingMovies:!0,data:u,onTrailer:!1,page:1,search:"",isSearch:!1});case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onGetId=function(){var e=Object(h.a)(j.a.mark((function e(t){var a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",e.next=3,x.getVideos(t);case 3:s=e.sent,n.setState({trailer:s.data.results},(function(){var e=n.state.trailer.filter((function(e){return e.name.includes("Official")||e.name.includes("Trailer")}));0!==e.length&&(a=e[0].key,n.setState({key:a,onTrailer:!0}))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.renderMovieTag=function(){return n.state.data.map((function(e){return Object(k.jsx)(S,{getId:n.props.getId,history:n.props.history,movies:e,onGetId:n.onGetId},e.id)}))},n.turnOffTrailer=function(){n.setState({onTrailer:!1})},n.onSearch=function(e){n.setState({search:e.target.value,isPopularMovies:!1,isTopRatedMovies:!1,isUpComingMovies:!1,isSearch:!0},Object(h.a)(j.a.mark((function e(){var t,a,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.state.search.length){e.next=9;break}return t=[],e.next=4,x.getPopularMovies(n.state.page);case 4:for(a=e.sent,s=0;s<20;s++)t.push(a.data.results[s]);n.setState({data:t,isSearch:!1}),e.next=13;break;case 9:return e.next=11,x.getSearch(n.state.search);case 11:r=e.sent,n.setState({data:r.data.results});case 13:case"end":return e.stop()}}),e)}))))},n.loadMore=Object(h.a)(j.a.mark((function e(){var t,a,s,r,i,c,o,u,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.isPopularMovies){e.next=10;break}return t=Object(y.a)(n.state.data),n.setState({isLoading:!0}),e.next=5,x.getPopularMovies(n.state.page+1);case 5:for(a=e.sent,s=0;s<20;s++)t.push(a.data.results[s]);n.setState({isLoading:!1,data:t,page:n.state.page+1}),e.next=28;break;case 10:if(!n.state.isTopRatedMovies){e.next=20;break}return r=Object(y.a)(n.state.data),n.setState({isLoading:!0}),e.next=15,x.getTopRatedMovies(n.state.page+1);case 15:for(i=e.sent,c=0;c<20;c++)r.push(i.data.results[c]);n.setState({isLoading:!1,data:r,page:n.state.page+1}),e.next=28;break;case 20:if(!n.state.isUpComingMovies){e.next=28;break}return o=Object(y.a)(n.state.data),n.setState({isLoading:!0}),e.next=25,x.getUpComingMovies(n.state.page+1);case 25:for(u=e.sent,l=0;l<20;l++)o.push(u.data.results[l]);n.setState({isLoading:!1,data:o,page:n.state.page+1});case 28:case"end":return e.stop()}}),e)}))),n.state={page:1,data:[],isPopularMovies:!0,isTopRatedMovies:!1,isUpComingMovies:!1,isSearch:!1,trailer:[],key:"",onTrailer:!1,search:"",isLoading:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,x.getPopularMovies(this.state.page);case 3:for(a=e.sent,n=0;n<20;n++)t.push(a.data.results[n]);this.setState({data:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(k.jsxs)(N.Fragment,{children:[Object(k.jsx)(I,{onSearch:this.onSearch}),Object(k.jsxs)("div",{className:"buttons",children:[Object(k.jsx)("button",{className:"popular button",onClick:function(t){return e.onClickButton(t)},name:"isPopularMovies",children:"Popular"}),Object(k.jsx)("button",{className:"top-rated button",onClick:function(t){return e.onClickButton(t)},name:"isTopRatedMovies",children:"Top Rated"}),Object(k.jsx)("button",{className:"up-coming button",onClick:function(t){return e.onClickButton(t)},name:"isUpComingMovies",children:"Up Coming"})]}),Object(k.jsxs)("div",{className:"movie-render-container",onClick:this.turnOffTrailer,children:[this.state.onTrailer?Object(k.jsx)(C,{id:this.state.key}):null,this.renderMovieTag()]}),this.state.isLoading?Object(k.jsxs)("div",{className:"loading",children:[Object(k.jsx)("img",{src:"/Images/loading.gif",alt:"non"})," "]}):Object(k.jsx)("div",{className:"load-more-container",children:Object(k.jsx)("button",{className:"load-more",onClick:this.loadMore,children:"Load More"})})]})}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(k.jsxs)(n.Fragment,{children:[Object(k.jsx)(M,{}),Object(k.jsx)(T,{getId:this.props.getId,history:this.props.history})]})}}]),a}(n.Component),P=a(27),_=a(3);a(86),a(87);var L=function(e){var t=e.actorInfo,a=t.character,n=t.name,s=t.profile_path;return Object(k.jsxs)("div",{className:"actor-tag",children:[null!==s?Object(k.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(s),alt:""}):Object(k.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",alt:""}),Object(k.jsx)("p",{children:n}),Object(k.jsx)("p",{className:"name",children:a})]})},U=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(h.a)(j.a.mark((function e(){var t,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getActors(n.props.id);case 2:if(t=e.sent,console.log(t),a=[],t.data.cast.length>=24){for(s=0;s<24;s++)a.push(t.data.cast[s]);n.setState({actors:a})}else n.setState({actors:t.data.cast});case 6:case"end":return e.stop()}}),e)}))),n.renderActors=function(){return n.state.actors.map((function(e,t){return Object(k.jsx)(L,{actorInfo:e},t)}))},n.state={actors:[]},n}return Object(u.a)(a,[{key:"render",value:function(){return Object(k.jsx)("div",{className:"actor-container",children:this.renderActors()})}}]),a}(n.Component);a(88);var R=function(e){var t=e.movieInfo,a=t.backdrop_path,n=t.poster_path,s=t.original_title,r=t.overview,i=t.vote_average,c=t.director;return Object(k.jsxs)("div",{className:"movie-info-container",children:[Object(k.jsx)("img",{className:"background",src:"https://image.tmdb.org/t/p/original".concat(a),alt:""}),Object(k.jsxs)("div",{className:"movie-info",children:[Object(k.jsx)("img",{className:"poster",src:"https://image.tmdb.org/t/p/original".concat(n),alt:""}),Object(k.jsxs)("div",{className:"info",children:[Object(k.jsx)("h3",{children:s}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{children:"Plot"}),Object(k.jsx)("p",{className:"plot",children:r})]}),Object(k.jsxs)("div",{className:"score-director",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{children:"IMDB Rating"}),Object(k.jsx)("p",{children:i})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{children:"Director"})," ",Object(k.jsx)("p",{children:c})]})]})]})]})]})},B=(a(89),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onBackToHome=function(){n.props.history.push("/")},n.componentDidMount=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getMovieInfo(n.props.id);case 2:t=e.sent,n.setState({movieInfo:t.data},(function(){}));case 4:case"end":return e.stop()}}),e)}))),n.state={movieInfo:{}},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.movieInfo,t=e.runtime,a=e.revenue,n=e.budget;return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"movie-header-container",children:Object(k.jsxs)("div",{className:"movie-header",children:[Object(k.jsx)("button",{onClick:this.onBackToHome,children:"Home"}),Object(k.jsxs)("span",{children:["| ",this.state.movieInfo.title]})]})}),Object(k.jsx)(R,{movieInfo:this.state.movieInfo}),Object(k.jsxs)("div",{className:"budget-container",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("img",{src:"/Images/clock.png",alt:""}),Object(k.jsxs)("span",{children:[t," minutes"]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("img",{src:"/Images/budget.png",alt:""}),Object(k.jsxs)("span",{children:["$",n]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("img",{src:"/Images/money.png",alt:""}),Object(k.jsxs)("span",{children:["$",a]})]})]}),Object(k.jsx)("h3",{style:{fontFamily:"Balsamiq Sans",marginLeft:"1.5em",fontSize:"2em"},children:"Actors"}),Object(k.jsx)(U,{id:this.props.id})]})}}]),a}(n.Component)),F=(a(90),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getId=function(e){n.setState({id:e})},n.state={id:""},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(k.jsxs)(P.a,{children:[Object(k.jsxs)(P.b,{to:"/",className:"title",children:[Object(k.jsx)("img",{className:"logo",src:"Images/ReactLogo.jpg",alt:""}),Object(k.jsx)("h4",{children:"Movie Finder"})]}),Object(k.jsxs)(_.c,{children:[Object(k.jsx)(_.a,{exact:!0,path:"/",render:function(t){return Object(k.jsx)(w,Object(c.a)(Object(c.a)({},t),{},{getId:e.getId}))}}),Object(k.jsx)(_.a,{path:"/movie/:id",render:function(t){return Object(k.jsx)(B,Object(c.a)(Object(c.a)({},t),{},{id:e.state.id}))}})]})]})}}]),a}(n.Component)),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(F,{})}),document.getElementById("root")),A()}},[[97,1,2]]]);
//# sourceMappingURL=main.5edb62d3.chunk.js.map