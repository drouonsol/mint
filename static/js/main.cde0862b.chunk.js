(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{176:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),o=n(31),i=n(64),s=new o.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new o.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),f=new o.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var o,i,s,u,f,b=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=b.length>3&&void 0!==b[3]?b[3]:"recent",i=b.length>4&&void 0!==b[4]&&b[4],s=!1,u={slot:0,confirmations:0,err:null},f=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(b,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{f=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),b(u))}),o)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!i){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[f]&&r.removeSignatureListener(f),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:o.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:i.b,isSigner:!1,isWritable:!1},{pubkey:o.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new o.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,i,u,f,b,d,l,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new o.b(r,t,{preflightCommitment:"recent"}),e.next=3,o.a.fetchIdl(s,a);case 3:return i=e.sent,u=new o.a(i,s,a),f={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return b=e.sent,d=b.data.itemsAvailable.toNumber(),l=b.itemsRedeemed.toNumber(),p=d-l,m=b.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:f,itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("edition")],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.PublicKey.findProgramAddress([t.toBuffer(),i.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,b,l,g,O,y;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,b=t.connection,l=t.program,e.next=7,m(s.publicKey);case 7:return g=e.sent,e.next=10,p(s.publicKey);case 10:return O=e.sent,e.next=13,b.getMinimumBalanceForRentExemption(i.a.span);case 13:return y=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:g,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:f,tokenProgram:i.b,systemProgram:o.d.SystemProgram.programId,rent:o.d.SYSVAR_RENT_PUBKEY,clock:o.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[o.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:i.a.span,lamports:y,programId:i.b}),i.c.createInitMintInstruction(i.b,s.publicKey,0,r,r),d(u,r,r,s.publicKey),i.c.createMintToInstruction(i.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,o,i=n(2),s=n.n(i),u=n(28),f=n.n(u),b=(n(353),n(354),n(12)),d=n(1),l=n.n(d),p=n(4),m=n(13),j=n(132),g=n(133),O=n(313),y=n(596),x=n(601),v=n(605),h=n(604),S=n(15),w=n(52),k=n(174),P=n(176),R=n(35),T=Object(g.a)(k.a)(r||(r=Object(j.a)([""]))),K=g.a.span(c||(c=Object(j.a)(["@font-face {\n  font-family: 'Roboto Condensed';\n}"]))),A=g.a.div(a||(a=Object(j.a)(["@font-face {\n  font-family: 'Roboto Condensed';\n}"]))),L=Object(g.a)(y.a)(o||(o=Object(j.a)(["@font-face {\n  font-family: 'Roboto Condensed';\n}"]))),M=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(R.jsxs)(K,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},B=function(e){var t=Object(i.useState)(),n=Object(m.a)(t,2),r=n[0],c=n[1],a=Object(i.useState)(!1),o=Object(m.a)(a,2),s=o[0],u=o[1],f=Object(i.useState)(!1),d=Object(m.a)(f,2),j=d[0],g=d[1],y=Object(i.useState)(!1),k=Object(m.a)(y,2),K=k[0],B=k[1],C=Object(i.useState)(1111),I=Object(m.a)(C,2),E=(I[0],I[1]),D=Object(i.useState)(1111),W=Object(m.a)(D,2),N=(W[0],W[1]),U=Object(i.useState)(0),_=Object(m.a)(U,2),q=_[0],Y=_[1],z=Object(i.useState)({open:!1,message:"",severity:void 0}),J=Object(m.a)(z,2),F=J[0],V=J[1],G=Object(i.useState)(new Date(e.startDate)),H=Object(m.a)(G,2),Q=H[0],X=H[1],Z=Object(w.c)(),$=Object(i.useState)(),ee=Object(m.a)($,2),te=ee[0],ne=ee[1],re=function(){Object(p.a)(l.a.mark((function t(){var n,r,c,a,o,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Z){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(Z,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,o=n.itemsRemaining,i=n.itemsRedeemed,E(a),Y(o),N(i),g(0===o),X(c),ne(r);case 16:case"end":return t.stop()}}),t)})))()},ce=function(){var t=Object(p.a)(l.a.mark((function t(){var n,r,a,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,B(!0),!Z||!(null===te||void 0===te?void 0:te.program)){t.next=10;break}return t.next=5,Object(P.c)(te,e.config,Z.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?V({open:!0,message:"There was an error please try again",severity:"error"}):V({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",g(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),V({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!Z){t.next=23;break}return t.next=21,e.connection.getBalance(Z.publicKey);case 21:o=t.sent,c(o/S.LAMPORTS_PER_SOL);case 23:return B(!1),re(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Z){t.next=5;break}return t.next=3,e.connection.getBalance(Z.publicKey);case 3:n=t.sent,c(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[Z,e.connection]),Object(i.useEffect)(re,[Z,e.candyMachineId,e.connection]),Object(R.jsxs)("main",{style:{backgroundImage:'url("https://i.imgur.com/htPERlG.png")',fontWeight:"bold",height:"101vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"blue"},children:[Object(R.jsx)("div",{}),Z&&Object(R.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),Z&&Object(R.jsxs)("p",{children:["Remaining: ",q,"/3333"]}),Object(R.jsx)(A,{children:Z?Object(R.jsx)(L,{disabled:j||K||!s,onClick:ce,variant:"contained",children:j?"SOLD OUT":s?K?Object(R.jsx)(x.a,{}):"MINT A SOLSTAIN":Object(R.jsx)(O.a,{date:Q,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:M})}):Object(R.jsx)(T,{children:"Connect Wallet"})}),Object(R.jsx)(v.a,{open:F.open,autoHideDuration:6e3,onClose:function(){return V(Object(b.a)(Object(b.a)({},F),{},{open:!1}))},children:Object(R.jsx)(h.a,{onClose:function(){return V(Object(b.a)(Object(b.a)({},F),{},{open:!1}))},severity:F.severity,children:F.message})})]})},C=n(31),I=n(116),E=n(340),D=n(602),W=new C.d.PublicKey("ABuywtbjWp8MbkP5mzCMdVq8LvvDKpTtwdJyr6dw61NJ"),N=new C.d.PublicKey("3f8qijUEoCBCaAJzBFv8QSc1b45XTbfzST9o1dp9ajMT"),U=new C.d.PublicKey("6uzEqaN4kijfLk8o6Cgbuq6ADkyPSUoYSJdz4UbLQens"),_="devnet",q=new C.d.Connection("https://explorer-api.devnet.solana.com"),Y=parseInt("1635059841",10),z=Object(E.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),J=function(){var e=Object(i.useMemo)((function(){return Object(S.clusterApiUrl)(_)}),[]),t=Object(i.useMemo)((function(){return[Object(I.a)(),Object(I.b)(),Object(I.c)(),Object(I.e)({network:_}),Object(I.d)({network:_})]}),[]);return Object(R.jsx)(D.a,{theme:z,children:Object(R.jsx)(w.a,{endpoint:e,children:Object(R.jsx)(w.b,{wallets:t,autoConnect:!0,children:Object(R.jsx)(k.b,{children:Object(R.jsx)(B,{candyMachineId:U,config:N,connection:q,startDate:Y,treasury:W,txTimeout:3e4})})})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};f.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(J,{})}),document.getElementById("root")),F()}},[[569,1,2]]]);
//# sourceMappingURL=main.cde0862b.chunk.js.map