(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){e.exports=a(248)},248:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),o=a(94),r=a.n(o),i=a(29),c=a(30),s=a(33),m=a(31),u=a(48),h=a(34),p=a(32),d=a(95),E=a.n(d),g=a(97),b=a.n(g),f=a(62),v=a.n(f),C=a(63),w=a.n(C),O=a(99),j=a.n(O),k=a(98),y=a.n(k),S=a(100),L=a.n(S),N=a(50),B=a.n(N),M=a(49),x=a.n(M),T=a(35),R=a.n(T),A=a(40),G=a.n(A),H=a(65),I=a.n(H),J=a(107),P=a.n(J),W=a(104),z=a.n(W),q=a(103),D=a.n(q),F=a(101),K=a.n(F),Q=a(105),U=a.n(Q),V=a(106),X=a.n(V),Y=a(108),Z=a.n(Y),$=a(39),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={anchorEl:null,showing:!1,openSideList:!1},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.sideLitstClick=function(){a.setState({openSideList:!a.state.openSideList})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl,a=this.props.classes;return l.a.createElement("div",{position:"relative",className:a.root},l.a.createElement(E.a,{position:"absolute",className:a.appbar},l.a.createElement(b.a,null,l.a.createElement(w.a,{className:a.menuButton,onClick:function(){e.props.sideBarOpen()},color:"inherit","aria-label":"Menu"},l.a.createElement(y.a,null)),l.a.createElement(v.a,{variant:"title",className:a.grow},"Title"),l.a.createElement(w.a,{"aria-owns":t?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick,color:"inherit","aria-label":"Menu"},l.a.createElement(j.a,null)),l.a.createElement(L.a,{id:"simple-menu",anchorOrigin:{vertical:"bottom",horizontal:"right"},getContentAnchorEl:null,anchorEl:t,open:Boolean(t),onClose:this.handleClose},l.a.createElement(B.a,{onClick:this.handleClose},"Profile"),l.a.createElement(B.a,{onClick:this.handleClose},"My account"),l.a.createElement(B.a,{onClick:this.handleClose},"Logout")))),l.a.createElement("div",{className:a.show,style:{display:this.props.sideBarShow?"block":"none"}},l.a.createElement(x.a,{className:a.sidebar},l.a.createElement(R.a,null,l.a.createElement(G.a,null,l.a.createElement(K.a,null)),l.a.createElement($.b,{to:"/home"},"Home")),l.a.createElement($.b,{to:"/colors"},l.a.createElement(R.a,{button:!0},l.a.createElement(G.a,null,l.a.createElement(D.a,null)),"Colors")),l.a.createElement(R.a,{button:!0,onClick:this.sideLitstClick},l.a.createElement(G.a,null,l.a.createElement(z.a,null)),l.a.createElement(I.a,{inset:!0,primary:"Inbox"}),this.state.openSideList?l.a.createElement(U.a,null):l.a.createElement(X.a,null)),l.a.createElement(P.a,{in:this.state.openSideList,timeout:"auto",unmountOnExit:!0},l.a.createElement(x.a,{component:"div",disablePadding:!0},l.a.createElement(R.a,{button:!0,className:a.nested},l.a.createElement(G.a,null,l.a.createElement(Z.a,null)),l.a.createElement(I.a,{inset:!0,primary:"Starred"})))))))}}]),t}(l.a.Component),ee=Object(p.withStyles)(function(e){return{root:{flexGrow:1},appbar:{height:50},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},show:{marginTop:50},sidebar:{width:"20%",height:"100vh",backgroundColor:e.palette.background.paper,borderRight:"3px solid green",position:"absolute"},nested:{paddingLeft:4*e.spacing.unit}}})(_),te=a(24),ae=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Home"),l.a.createElement("p",null,"With some content"))},ne=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:e.root},l.a.createElement("h1",null,"Color"),l.a.createElement("p",null,"With some content"))}}]),t}(l.a.Component),le=Object(p.withStyles)(function(e){return{root:{marginTop:50}}})(ne),oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={showing:!1},a.toggleChildMenu=a.toggleChildMenu.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"toggleChildMenu",value:function(){this.setState(function(e){return{showing:!e.showing}})}},{key:"render",value:function(){var e=this.props.classes;return l.a.createElement($.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(ee,{sideBarOpen:this.toggleChildMenu,sideBarShow:this.state.showing}),l.a.createElement("div",{className:this.state.showing?e.moveLeft:e.moveRight},l.a.createElement(te.c,null,l.a.createElement(te.a,{path:"/home",component:ae}),l.a.createElement(te.a,{path:"/colors",component:le})))))}}]),t}(n.Component),re=Object(p.withStyles)({moveRight:{marginLeft:30,marginTop:50},moveLeft:{marginLeft:300,marginTop:50}})(oe);r.a.render(l.a.createElement(re,null),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.66777d77.chunk.js.map