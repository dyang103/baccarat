(this.webpackJsonpbaccarat=this.webpackJsonpbaccarat||[]).push([[0],{25:function(t,e,a){},27:function(t,e,a){},47:function(t,e,a){"use strict";a.r(e);var r=a(6),n=a.n(r),s=a(20),i=a.n(s),c=(a(25),a(1)),h=a.n(c),u=a(2),l=a(4),o=a(3),d=a(8),b=a(10),p=a(9),j=(a(27),a(7)),v=a.n(j),f=function t(){Object(o.a)(this,t)};f.getDeck=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()({method:"get",url:"https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),f.draw=function(){var t=Object(u.a)(h.a.mark((function t(e,a){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()({method:"get",url:"https://deckofcardsapi.com/api/deck/"+e+"/draw/?count="+a});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();var k=function t(){Object(o.a)(this,t)};k.getQuote=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()({method:"get",url:"https://goquotes-api.herokuapp.com/api/v1/random?count=1",headers:{Accept:"application/json"}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));var O=function t(){Object(o.a)(this,t)};O.getJoke=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()({method:"get",url:"https://official-joke-api.appspot.com/random_joke"});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));var x=function t(){Object(o.a)(this,t)};x.getMovie=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()({method:"get",url:"https://ghibliapi.herokuapp.com/films"});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));var g=a(0),m=function(t){Object(b.a)(a,t);var e=Object(p.a)(a);function a(t){return Object(o.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Baccarat Card Game"}),Object(g.jsx)("h2",{children:"Rules"}),Object(g.jsx)("p",{children:"Baccarat is a random gambling card game where the user places bets between the bank and the player. Each round, the dealer will draw either 2-3 cards for both the bank and the player. The cards 2-9 retain their number value, ace has a value of 1, and the cards 10 and face cards have values of 0. The values of the cards on the bank and player side are added together, and if the value is greater than 10 then the tens digit is dropped. The goal of the game is to correctly predict which side will have a value closer to 9, or if they will tie. Correctly guessing which side wins will add the betted value to the score, while losing will subtract it. Correctly guessing a tie will net a score of 8 times the amount bet."}),Object(g.jsx)("p",{children:"Get in the right mindset with this inspirational quote!"}),Object(g.jsx)("p",{children:this.props.quote}),Object(g.jsx)("p",{children:"Or perhaps you'd like a joke instead"}),Object(g.jsx)("p",{children:this.props.joke}),Object(g.jsx)("p",{children:this.props.punchline}),Object(g.jsx)("p",{children:"Need a movie to watch tonight?"}),Object(g.jsxs)("p",{children:["How about ",this.props.ghibli]})]})}}]),a}(n.a.Component),y=function(t){Object(b.a)(a,t);var e=Object(p.a)(a);function a(t){return Object(o.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{onChange:this.props.betClick,children:[Object(g.jsx)("p",{children:"Place your bets!"}),Object(g.jsx)("label",{htmlFor:"player",children:"Player"}),Object(g.jsx)("input",{type:"radio",name:"bet",value:"player",id:"player"}),Object(g.jsx)("label",{htmlFor:"bank",children:"Bank"}),Object(g.jsx)("input",{type:"radio",name:"bet",value:"bank",id:"bank"}),Object(g.jsx)("label",{htmlFor:"tie",children:"Tie"}),Object(g.jsx)("input",{type:"radio",name:"bet",value:"tie",id:"tie"})]}),Object(g.jsxs)("div",{onChange:this.props.amountClick,children:[Object(g.jsx)("p",{children:"Change Bet Amount"}),Object(g.jsx)("label",{htmlFor:"zero",children:"0"}),Object(g.jsx)("input",{type:"radio",name:"amount",value:"zero",id:"zero"}),Object(g.jsx)("label",{htmlFor:"twentyfive",children:"25"}),Object(g.jsx)("input",{type:"radio",name:"amount",value:"twentyfive",id:"twentyfive"}),Object(g.jsx)("label",{htmlFor:"fifty",children:"50"}),Object(g.jsx)("input",{type:"radio",name:"amount",value:"fifty",id:"fifty"}),Object(g.jsx)("label",{htmlFor:"onehundred",children:"100"}),Object(g.jsx)("input",{type:"radio",name:"amount",value:"onehundred",id:"onehundred"})]})]})}}]),a}(n.a.Component),w=function(t){Object(b.a)(a,t);var e=Object(p.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).state={},r}return Object(d.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:this.props.card.img,alt:"Card"})})}}]),a}(n.a.Component),C=function(t){Object(b.a)(a,t);var e=Object(p.a)(a);function a(t){return Object(o.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("table",{children:[Object(g.jsx)("caption",{children:"Bank"}),Object(g.jsx)("tbody",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsx)(w,{card:this.props.cards.first})}),Object(g.jsx)("td",{children:Object(g.jsx)(w,{card:this.props.cards.second})}),this.props.third?Object(g.jsx)("td",{children:Object(g.jsx)(w,{card:this.props.cards.sixth})}):null]})})]}),Object(g.jsxs)("p",{children:["Bank Value : ",this.props.val]})]})}}]),a}(n.a.Component),B=function(t){Object(b.a)(a,t);var e=Object(p.a)(a);function a(t){return Object(o.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("table",{children:[Object(g.jsx)("caption",{children:"Player"}),Object(g.jsx)("tbody",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsx)(w,{card:this.props.cards.third})}),Object(g.jsx)("td",{children:Object(g.jsx)(w,{card:this.props.cards.fourth})}),this.props.third?Object(g.jsx)("td",{children:Object(g.jsx)(w,{card:this.props.cards.sixth})}):null]})})]}),Object(g.jsxs)("p",{children:["Player Value : ",this.props.val]})]})}}]),a}(n.a.Component),S=function(t){Object(b.a)(a,t);var e=Object(p.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).values={ACE:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:0,JACK:0,QUEEN:0,KING:0},r.state={deckid:"",cards:{first:{value:0,img:""},second:{value:0,img:""},third:{value:0,img:""},fourth:{value:0,img:""},fifth:{value:0,img:""}},player:0,bank:0,playerWin:!1,bankWin:!1,tie:!1,playerBet:!1,bankBet:!1,tieBet:!1,bet:0,score:0,playerThird:!1,bankThird:!1,quote:"",joke:"",punchline:"",ghibli:[],movie:""},r.getDeck=r.getDeck.bind(Object(l.a)(r)),r.getCards=r.getCards.bind(Object(l.a)(r)),r.onClickPlay=r.onClickPlay.bind(Object(l.a)(r)),r.getPlayerVal=r.getPlayerVal.bind(Object(l.a)(r)),r.getBankVal=r.getBankVal.bind(Object(l.a)(r)),r.betClick=r.betClick.bind(Object(l.a)(r)),r.amountClick=r.amountClick.bind(Object(l.a)(r)),r.getQuote=r.getQuote.bind(Object(l.a)(r)),r.getJoke=r.getJoke.bind(Object(l.a)(r)),r.getMovies=r.getMovies.bind(Object(l.a)(r)),r.getFilm=r.getFilm.bind(Object(l.a)(r)),r}return Object(d.a)(a,[{key:"getQuote",value:function(){var t=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.getQuote();case 2:e=t.sent,this.setState({quote:e.data.quotes[0].text});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getMovies",value:function(){var t=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.getMovie();case 2:e=t.sent,this.setState({ghibli:e.data});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getFilm",value:function(){this.setState({movie:this.state.ghibli[Math.floor(21*Math.random())].title})}},{key:"getJoke",value:function(){var t=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getJoke();case 2:e=t.sent,this.setState({joke:e.data.setup,punchline:e.data.punchline});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getDeck",value:function(){var t=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getDeck();case 2:e=t.sent,this.setState({deckid:e.data.deck_id});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getCards",value:function(){var t=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.draw(this.state.deckid,6);case 2:e=t.sent,this.setState({cards:{first:{value:this.values[e.data.cards[0].value],img:e.data.cards[0].image},second:{value:this.values[e.data.cards[1].value],img:e.data.cards[1].image},third:{value:this.values[e.data.cards[2].value],img:e.data.cards[2].image},fourth:{value:this.values[e.data.cards[3].value],img:e.data.cards[3].image},fifth:{value:this.values[e.data.cards[4].value],img:e.data.cards[4].image},sixth:{value:this.values[e.data.cards[5].value],img:e.data.cards[5].image}}});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getPlayerVal",value:function(){var t=this.state.cards.third.value+this.state.cards.fourth.value;t>=10&&(t%=10),t<=5?((t+=this.state.cards.sixth.value)>=10&&(t%=10),this.setState({player:t,playerThird:!0})):this.setState({player:t,playerThird:!1})}},{key:"getBankVal",value:function(){var t=this.state.cards.first.value+this.state.cards.second.value;t>=10&&(t%=10),this.state.playerThird?t<=2||3===t&&8!==this.state.cards.sixth.value||4===t&&(this.state.cards.sixth.value<=1||this.state.cards.sixth.value>=8)||5===t&&(this.state.cards.sixth.value<=3||this.state.cards.sixth.value>=8)||6===t&&(this.state.cards.sixth.value<=5||this.state.cards.sixth.value>=8)?((t+=this.state.cards.fifth.value)>=10&&(t%=10),this.setState({bank:t,bankThird:!0})):this.setState({bank:t,bankThird:!1}):t<=5?((t+=this.state.cards.fifth.value)>=10&&(t%=10),this.setState({bank:t,bankThird:!0})):this.setState({bank:t,bankThird:!1})}},{key:"getWinner",value:function(){var t=this.state.score;this.state.player===this.state.bank?(this.state.tieBet?t+=8*this.state.bet:t-=this.state.bet,this.setState({playerWin:!1,bankWin:!1,tie:!0,score:t})):this.state.player>this.state.bank?(this.state.playerBet?t+=this.state.bet:t-=this.state.bet,this.setState({playerWin:!0,bankWin:!1,tie:!1,score:t})):(this.state.bankBet?t+=this.state.bet:t-=this.state.bet,this.setState({playerWin:!1,bankWin:!0,tie:!1,score:t}))}},{key:"betClick",value:function(t){"player"===t.target.value?this.setState({playerBet:!0,bankBet:!1,tieBet:!1}):"bank"===t.target.value?this.setState({playerBet:!1,bankBet:!0,tieBet:!1}):this.setState({playerbet:!1,bankBet:!1,tieBet:!0})}},{key:"amountClick",value:function(t){"zero"===t.target.value?this.setState({bet:0}):"twentyfive"===t.target.value?this.setState({bet:25}):"fifty"===t.target.value?this.setState({bet:50}):this.setState({bet:100})}},{key:"onClickPlay",value:function(){var t=Object(u.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getDeck();case 2:return t.next=4,this.getCards();case 4:return t.next=6,this.getQuote();case 6:return t.next=8,this.getJoke();case 8:this.getFilm(),this.getPlayerVal(),this.getBankVal(),this.getWinner();case 12:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(u.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getDeck();case 2:return t.next=4,this.getCards();case 4:return t.next=6,this.getQuote();case 6:return t.next=8,this.getJoke();case 8:return t.next=10,this.getMovies();case 10:this.getFilm();case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(m,{quote:this.state.quote,joke:this.state.joke,punchline:this.state.punchline,ghibli:this.state.movie}),Object(g.jsx)("button",{onClick:this.onClickPlay,children:"Play"}),Object(g.jsx)(y,{betClick:this.betClick,amountClick:this.amountClick}),Object(g.jsxs)("p",{children:["Score : ",this.state.score]}),this.state.playerWin?Object(g.jsx)("p",{children:"The player has won this round"}):null,this.state.bankWin?Object(g.jsx)("p",{children:"The bank has won this round"}):null,this.state.tie?Object(g.jsx)("p",{children:"There was a tie this round"}):null,Object(g.jsx)(C,{cards:this.state.cards,third:this.state.bankThird,val:this.state.bank}),Object(g.jsx)(B,{cards:this.state.cards,third:this.state.playerThird,val:this.state.player})]})}}]),a}(n.a.Component),T=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),r(t),n(t),s(t),i(t)}))};i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root")),T()}},[[47,1,2]]]);
//# sourceMappingURL=main.8ec7376b.chunk.js.map