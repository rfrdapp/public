new class e{constructor({position:e="bottom-left"}={}){this.position=this.getPosition(e),this.open=!1,this.initalise()}getPosition(e){let[i,d]=e.split("-");return{[i]:"30px",[d]:"30px"}}getUrlTag(e){return console.log('url.split("/"):',e.split("/")),e.split("/")[3]}async initalise(){async function e(){let e=await fetch("https://api.ipify.org/?format=json").then(e=>e.json());return e}var i=await e();async function d(e,i){var d="https://app.rfrd.io/read/id/ip/"+e+"/"+i;console.log("serverURL:",d);let t=await fetch(d).then(e=>e.json());return t}console.log("foundip:",i.ip);let t=document.getElementById("rfrd-widget"),s=t.dataset.id;console.log("made it here");var a=await d(s,i.ip);console.log({rrrr:a});let n=document.createElement("div");n.classList.add("rfrd-cheer-wrapper"),n.style="height: 0px",this.container=n,document.body.appendChild(n);let r=document.createElement("div");r.classList.add("rfrd-cheer-video-bg"),this.buttonContainer=r;let l=document.createElement("div");l.classList.add("rfrd-cheer-background-video");let o=document.createElement("div");o.classList.add("rfrd-cheer-bg","rfrd-background-video","w-background-video-atom"),o.setAttribute("data-video-urls",a.videos[0].videoid.link),o.setAttribute("data-autoplay","true"),o.setAttribute("data-loop","true"),o.setAttribute("data-wf-ignore","true"),this.videogif=o;let c=document.createElement("video");c.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",c.autoplay=!0,c.loop=!0,c.muted=!0,c.playsinline=!0,this.video=c,this.video.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">',this.videogif.appendChild(this.video),l.appendChild(this.videogif);let p=document.createElement("div");p.classList.add("rfrd-cheer-cta"),p.style.backgroundColor="#"+a.maincolor,this.cheercta=p,this.cheercta.innerHTML="<div>"+a.widgetcta+"</div>",this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("rfrd-hidden","rfrd-activated"),this.createMessageContainerContent(a),r.appendChild(l),r.appendChild(this.cheercta),r.addEventListener("click",this.toggleOpen.bind(this)),this.container.append(this.messageContainer),this.container.append(r),this.createStyles(a)}createStyles(e){let i=document.createElement("style");i.innerHTML=`
          .rfrd-cheer-wrapper {
            position: fixed;
            left: 0%;
            top: auto;
            right: auto;
            bottom: 0%;
            z-index: 9999;
            padding-bottom: 10px;
            padding-left: 10px;
          }
          .rfrd-activated {
            display: block;
            transition: opacity 360ms ease 0s;
            opacity: 1;
          }
          .rfrd-cheer-cta {
            width: 170px;
            margin-left: 5px;
            padding: 10px 12px 11px 13px;
            border-radius: 6px;
            background-color: #0666eb;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            color: #fff;
            font-size: 15px;
            line-height: 1.3em;
            font-weight: 500;
          }
          .rfrd-cheer-video-bg {
            position: absolute;
            left: auto;
            top: auto;
            right: auto;
            bottom: 10px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            cursor: pointer;
        }
          .rfrd-background-video {
            position: relative;
            overflow: hidden;
            height: 500px;
            color: white;
          }
          .rfrd-cheer-background-video {
            overflow: hidden;
            width: 89px;
            height: 89px;
            border-style: solid;
            border-width: 3px;
            border-color: #${e.maincolor};
            border-radius: 1000px;
            background-image: none;
            background-position: 0px 0px;
            background-size: auto;
          }
          .rfrd-background-video>video {
            background-size: cover;
            background-position: 50% 50%;
            position: absolute;
            margin: auto;
            width: 100%;
            height: 100%;
            right: -100%;
            bottom: -100%;
            top: -100%;
            left: -100%;
            object-fit: cover;
            z-index: -100;
          }
          .rfrd-page-bg {
            position: fixed;
            left: 0%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.58), transparent 60%);
          }
          .rfrd-cheer-wrap {
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 300px;
            height: auto;
            padding: 0px;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            border-style: none;
            border-width: 2px;
            border-color: rgba(43, 26, 60, 0.1);
            border-radius: 7px 7px 7px 0px;
            background-color: #fff;
            color: #212441;
          }
          .rfrd-side-cheer-header {
            padding: 13px 15px 12px 13px;
            border-bottom: 2px solid rgba(43, 26, 59, 0.05);
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-size: 15px;
            line-height: 1em;
            font-weight: 600;
          }
          .rfrd-inline-block {
            max-width: 100%;
            display: inline-block;
          }
          .rfrd-tab-link {
            position: relative;
            display: inline-block;
            vertical-align: top;
            text-decoration: none;
            padding: 9px 30px;
            text-align: left;
            cursor: pointer;
            color: #222222;
            background-color: #dddddd;
          }
          .rfrd-video-row {
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            padding: 9px 10px;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            border-top: 2px none rgba(43, 26, 60, 0.05);
            border-bottom: 2px solid rgba(43, 26, 59, 0.05);
            background-color: #fff;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            cursor: pointer;
          }
          .rfrd-video-photo {
            position: relative;
            width: 75px;
            height: 55px;
            margin-right: 10px;
            border-width: 1px;
            border-color: rgba(43, 26, 60, 0.15);
            border-radius: 4px;
            background-image: url(https://assets.website-files.com/61dc604…/62b337d…_1639713523931.jpeg);
            background-position: 50% 50%;
            background-size: cover;
            box-shadow: none;
          }
          .rfrd-side-video-name {
            margin-bottom: 5px;
            font-size: 15px;
            line-height: 1em;
            font-weight: 600;
          }
          .rfrd-side-video-title {
            opacity: 0.5;
            font-size: 14px;
            line-height: 1em;
          }
          .rfrd-built-with-rfrd {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            padding: 15px;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            color: rgba(33, 36, 65, 0.5);
            font-weight: 400;
          }
          .rfrd-bw-rfrd-logo {
            width: 53px;
            margin-left: 6px;
          }
          .rfrd-video-flyout-wrap {
            width: 400px;
          }
          .rfrd-video-flyout {
            z-index: 999;
            overflow: hidden;
            width: 400px;
            height: 270px;
            border-style: solid;
            border-width: 3px;
            border-color: #2b1a3b;
            border-radius: 7px;
            box-shadow: 1px 1px 20px 0 rgb(0 0 0 / 30%);
          }
          .rfrd-hidden {
              transform: scale(0);
          }
          .rfrd-video-icons {
            position: absolute;
            left: 0%;
            top: auto;
            right: 0%;
            bottom: 10px;
            z-index: 10;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 170px;
            margin-right: auto;
            margin-left: auto;
            padding: 10px 10px 12px;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.2);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
          }
          .rfrd-video-icon {
            width: 20px;
            -webkit-transition: -webkit-transform 360ms ease;
            transition: -webkit-transform 360ms ease;
            transition: transform 360ms ease;
            transition: transform 360ms ease, -webkit-transform 360ms ease;
            cursor: pointer;
          }
          .rfrd-videos-top {
            height: 400px;
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 auto;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
          }
          .rfrd-cheer-bg {
            position: absolute;
            left: 0%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            width: 89px;
            height: 89px;
            border-radius: 1000px;
          }
          .rfrd-w-tabs {
            position: relative;
          }
          .rfrd-w-tab-menu {
            position: relative;
          }
          .rfrd-w-tab-content {
            position: relative;
            display: block;
            overflow: hidden;
          }
          .rfrd-tabs-content {
            position: absolute;
            left: 310px;
            top: -42px;
            right: 0%;
            bottom: auto;
            width: 400px;
            height: auto;
          }
          .rfrd-w-tab-pane {
            position: relative;
            display: none;
          }
          .rfrd-video-tab-pane {
            width: 400px;
            height: auto;
          }
          .rfrd-w--tab-active {
            display: block;
          }
          .rfrd-w-video {
            width: 400px;
            height: 270px;
            position: relative;
            padding: 0;
            border-style: solid;
            border-width: 3px;
            border-color: #2b1a3b;
            border-radius: 7px;
            box-shadow: 1px 1px 20px 0 rgb(0 0 0 / 30%)
          }
          .rfrd-video-play {
            overflow: hidden;
            border-radius: 7px;
          }
          .rfrd-w-button {
            display: inline-block;
            padding: 9px 15px;
            background-color: #3898EC;
            color: white;
            border: 0;
            line-height: inherit;
            text-decoration: none;
            cursor: pointer;
            border-radius: 0;
          }
          .rfrd-widget-button {
            padding: 13px;
            border-radius: 6px;
            background-color: #ff56a2;
            color: #fff;
            font-size: 13px;
            line-height: 1em;
          }
          .rfrd-widget-button.rfrd-video-cta {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 400px;
            margin-top: 10px;
            padding-top: 18px;
            padding-bottom: 18px;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            background-color: #0666eb;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-size: 14.5px;
            font-weight: 600;
            text-align: center;
          }
          .rfrd-w-video iframe, .rfrd-w-video object, .rfrd-w-video embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }
          .rfrd-mainvid {
            background-size: cover;
            background-position: 50% 50%;
            position: absolute;
            margin: auto;
            width: 100%;
            height: 100%;
            right: -100%;
            bottom: -100%;
            top: -100%;
            left: -100%;
            object-fit: cover;
            z-index: -100;
          }
          @media screen and (max-width: 991px) {
            .rfrd-cheer-background-video {
              background-image: url("${e.videos[0].videoid.screengrab}");
              background-size: cover;
            }
            .rfrd-cheer-bg {
              display: none;
            }
          }
          @media screen and (max-width: 479px) {
            .rfrd-cheer-wrapper {
              width: 100%;
              padding-right: 10px;
            }
            .rfrd-cheer-background-video {
              width: 70px;
              height: 70px;
            }
            .rfrd-cheer-bg {
              width: 70px;
              height: 70px;
            }
            .rfrd-cheer-wrap {
              width: 100%;
            }
            .rfrd-videos-top {
              height: auto;
            }
            .rfrd-video-photo {
              width: 64px;
              height: 48px;
            }
            .rfrd-tabs-content {
              left: 0%;
              top: -354px;
              right: auto;
              bottom: auto;
              width: 100%;
            }
            .rfrd-video-tab-pane {
              width: 100%;
            }
            .rfrd-video-flyout-wrap {
              width: 100%;
            }
            .rfrd-video-play {
              border-bottom-left-radius: 0px;
              border-bottom-right-radius: 0px;
            }
            .rfrd-widget-button.rfrd-video-cta {
              width: 100%;
              margin-top: 0px;
              padding-top: 13px;
              padding-bottom: 14px;
              border-top-left-radius: 0px;
              border-top-right-radius: 0px;
              font-size: 14px;
            }
            .rfrd-built-with-rfrd {
              padding-top: 9px;
              padding-bottom: 10px;
              font-size: 14px;
              font-weight: 500;
            }
            .rfrd-w-video {
              width: 100%;
            } 
          }  
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(i)}createMessageContainerContent(e){this.messageContainer.innerHTML="";let i=document.createElement("div");i.classList.add("rfrd-page-bg"),i.addEventListener("click",this.toggleClose.bind(this));let d=document.createElement("div");i.appendChild(d);var t=e.videos.length;let s=document.createElement("div");s.classList.add("rfrd-video-icons");let a=document.createElement("div"),n=document.createElement("div");n.classList.add("sound-on"),this.soundon=n,this.soundon.addEventListener("click",this.toggleSoundOn.bind(this));let r=document.createElement("img");r.classList.add("rfrd-video-icon"),r.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let l=document.createElement("div");l.style.display="none",l.classList.add("sound-off"),this.soundoff=l,this.soundoff.addEventListener("click",this.toggleSoundOff.bind(this));let o=document.createElement("img");o.classList.add("rfrd-video-icon"),o.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon.appendChild(r),this.soundoff.appendChild(o),a.appendChild(this.soundon),a.appendChild(this.soundoff);let c=document.createElement("div"),p=document.createElement("div");p.classList.add("pause-video-block");let v=document.createElement("img");v.classList.add("rfrd-video-icon"),v.style.display="none",v.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg=v,this.pauseimg.addEventListener("click",this.pauseVid.bind(this));let f=document.createElement("div");f.classList.add("play-video-block");let h=document.createElement("img");h.classList.add("rfrd-video-icon"),h.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg=h,this.playimg.addEventListener("click",this.playVid.bind(this)),p.appendChild(this.pauseimg),f.appendChild(this.playimg),c.appendChild(p),c.appendChild(f);let b=document.createElement("div"),m=document.createElement("img");m.classList.add("rfrd-video-icon"),m.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg=m,this.fullscreenimg.addEventListener("click",this.toggleFullScreen.bind(this)),b.appendChild(this.fullscreenimg),s.appendChild(a),s.appendChild(c),s.appendChild(b);let u=document.createElement("div");u.classList.add("rfrd-cheer-wrap"),u.id="cheer-wrap";let g=document.createElement("div");g.classList.add("rfrd-side-cheer-header"),g.textContent=e.cardlabel;let _=document.createElement("div");_.classList.add("video-tabs","rfrd-w-tabs");let C=document.createElement("div");C.classList.add("video-tabs-menu","rfrd-w-tab-menu");let $=document.createElement("div");$.classList.add("rfrd-tabs-content","rfrd-w-tab-content");let E=document.createElement("div");E.classList.add("rfrd-videos-top");let L=document.createElement("div");L.classList.add("rfrd-built-with-rfrd");let w=document.createElement("div");w.textContent="Built with";let y=document.createElement("a");y.href="https://www.rfrd.io",y.setAttribute("target","_blank");let k=document.createElement("img");k.classList.add("rfrd-bw-rfrd-logo"),k.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/6254a481ee51de3be6a0b275_rfrd%20dark.svg",y.appendChild(k),L.appendChild(w),L.appendChild(y);var t=e.videos.length;if(1==t){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let M=document.createElement("video");M.classList.add("rfrd-mainvid"),M.setAttribute("data-id",e.videos[0].videoid._id),M.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=M,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.href=e.buttonlink,H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let z=document.createElement("div");z.classList.add("rfrd-video-icons");let U=document.createElement("div");U.classList.add("rfrdsoundcontainer");let q=document.createElement("div");q.classList.add("sound-on"),this.soundon1=q,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let B=document.createElement("img");B.classList.add("rfrd-video-icon"),B.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let D=document.createElement("div");D.style.display="none",D.classList.add("sound-off"),this.soundoff1=D,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let I=document.createElement("img");I.classList.add("rfrd-video-icon"),I.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(B),this.soundoff1.appendChild(I),U.appendChild(this.soundon1),U.appendChild(this.soundoff1);let R=document.createElement("div");R.classList.add("rfrdplaycontainer");let N=document.createElement("div");N.classList.add("pause-video-block");let P=document.createElement("img");P.classList.add("rfrd-video-icon"),P.style.display="none",P.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=P,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let G=document.createElement("div");G.classList.add("play-video-block");let J=document.createElement("img");J.classList.add("rfrd-video-icon"),J.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=J,this.playimg1.addEventListener("click",this.playVid.bind(this)),N.appendChild(this.pauseimg1),G.appendChild(this.playimg1),R.appendChild(N),R.appendChild(G);let K=document.createElement("div"),Q=document.createElement("img");Q.classList.add("rfrd-video-icon"),Q.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=Q,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),K.appendChild(this.fullscreenimg1),z.appendChild(U),z.appendChild(R),z.appendChild(K),F.appendChild(z),C.appendChild(x),$.appendChild(O),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(2==t){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let ei=document.createElement("video");ei.classList.add("rfrd-mainvid"),ei.setAttribute("data-id",e.videos[0].videoid._id),ei.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=ei,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(console.log("widget.videos[0].videoid.widgetcta:",e.videos[0].videoid.widgetcta),H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(console.log("nope0"),H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let ed=document.createElement("div");ed.classList.add("rfrd-video-icons");let et=document.createElement("div");et.classList.add("rfrdsoundcontainer");let es=document.createElement("div");es.classList.add("sound-on"),this.soundon1=es,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let ea=document.createElement("img");ea.classList.add("rfrd-video-icon"),ea.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let en=document.createElement("div");en.style.display="none",en.classList.add("sound-off"),this.soundoff1=en,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let er=document.createElement("img");er.classList.add("rfrd-video-icon"),er.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(ea),this.soundoff1.appendChild(er),et.appendChild(this.soundon1),et.appendChild(this.soundoff1);let el=document.createElement("div");el.classList.add("rfrdplaycontainer");let eo=document.createElement("div");eo.classList.add("pause-video-block");let ec=document.createElement("img");ec.classList.add("rfrd-video-icon"),ec.style.display="none",ec.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=ec,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ep=document.createElement("div");ep.classList.add("play-video-block");let ev=document.createElement("img");ev.classList.add("rfrd-video-icon"),ev.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=ev,this.playimg1.addEventListener("click",this.playVid.bind(this)),eo.appendChild(this.pauseimg1),ep.appendChild(this.playimg1),el.appendChild(eo),el.appendChild(ep);let ef=document.createElement("div"),eh=document.createElement("img");eh.classList.add("rfrd-video-icon"),eh.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=eh,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),ef.appendChild(this.fullscreenimg1),ed.appendChild(et),ed.appendChild(el),ed.appendChild(ef),F.appendChild(ed);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let eg=document.createElement("video");eg.classList.add("rfrd-mainvid"),eg.setAttribute("preload","none"),eg.setAttribute("data-id",e.videos[1].videoid._id),eg.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=eg,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(console.log("widget.videos[1].videoid.widgetcta:",e.videos[1].videoid.widgetcta),e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let eC=document.createElement("div");eC.classList.add("rfrd-video-icons");let e0=document.createElement("div");e0.classList.add("rfrdsoundcontainer");let e$=document.createElement("div");e$.classList.add("sound-on"),this.soundon2=e$,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eE=document.createElement("img");eE.classList.add("rfrd-video-icon"),eE.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let e1=document.createElement("div");e1.style.display="none",e1.classList.add("sound-off"),this.soundoff2=e1,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eL=document.createElement("img");eL.classList.add("rfrd-video-icon"),eL.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eE),this.soundoff2.appendChild(eL),e0.appendChild(this.soundon2),e0.appendChild(this.soundoff2);let ew=document.createElement("div");ew.classList.add("rfrdplaycontainer");let ey=document.createElement("div");ey.classList.add("pause-video-block");let e4=document.createElement("img");e4.classList.add("rfrd-video-icon"),e4.style.display="none",e4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=e4,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let ek=document.createElement("div");ek.classList.add("play-video-block");let e2=document.createElement("img");e2.classList.add("rfrd-video-icon"),e2.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=e2,this.playimg2.addEventListener("click",this.playVid.bind(this)),ey.appendChild(this.pauseimg2),ek.appendChild(this.playimg2),ew.appendChild(ey),ew.appendChild(ek);let e7=document.createElement("div"),ex=document.createElement("img");ex.classList.add("rfrd-video-icon"),ex.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=ex,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),e7.appendChild(this.fullscreenimg2),eC.appendChild(e0),eC.appendChild(ew),eC.appendChild(e7),eu.appendChild(eC),C.appendChild(x),C.appendChild(W),$.appendChild(O),$.appendChild(eb),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(3==t){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let e5=document.createElement("video");e5.classList.add("rfrd-mainvid"),e5.setAttribute("data-id",e.videos[0].videoid._id),e5.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=e5,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let e3=document.createElement("div");e3.classList.add("rfrd-video-icons");let e6=document.createElement("div");e6.classList.add("rfrdsoundcontainer");let e8=document.createElement("div");e8.classList.add("sound-on"),this.soundon1=e8,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let eA=document.createElement("img");eA.classList.add("rfrd-video-icon"),eA.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eS=document.createElement("div");eS.style.display="none",eS.classList.add("sound-off"),this.soundoff1=eS,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let ej=document.createElement("img");ej.classList.add("rfrd-video-icon"),ej.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(eA),this.soundoff1.appendChild(ej),e6.appendChild(this.soundon1),e6.appendChild(this.soundoff1);let eV=document.createElement("div");eV.classList.add("rfrdplaycontainer");let eO=document.createElement("div");eO.classList.add("pause-video-block");let eT=document.createElement("img");eT.classList.add("rfrd-video-icon"),eT.style.display="none",eT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=eT,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let eF=document.createElement("div");eF.classList.add("play-video-block");let eM=document.createElement("img");eM.classList.add("rfrd-video-icon"),eM.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=eM,this.playimg1.addEventListener("click",this.playVid.bind(this)),eO.appendChild(this.pauseimg1),eF.appendChild(this.playimg1),eV.appendChild(eO),eV.appendChild(eF);let eH=document.createElement("div"),ez=document.createElement("img");ez.classList.add("rfrd-video-icon"),ez.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=ez,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),eH.appendChild(this.fullscreenimg1),e3.appendChild(e6),e3.appendChild(eV),e3.appendChild(eH),F.appendChild(e3);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let eU=document.createElement("video");eU.classList.add("rfrd-mainvid"),eU.setAttribute("preload","none"),eU.setAttribute("data-id",e.videos[1].videoid._id),eU.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=eU,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let eq=document.createElement("div");eq.classList.add("rfrd-video-icons");let eB=document.createElement("div");eB.classList.add("rfrdsoundcontainer");let eD=document.createElement("div");eD.classList.add("sound-on"),this.soundon2=eD,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eI=document.createElement("img");eI.classList.add("rfrd-video-icon"),eI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eR=document.createElement("div");eR.style.display="none",eR.classList.add("sound-off"),this.soundoff2=eR,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eN=document.createElement("img");eN.classList.add("rfrd-video-icon"),eN.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eI),this.soundoff2.appendChild(eN),eB.appendChild(this.soundon2),eB.appendChild(this.soundoff2);let eP=document.createElement("div");eP.classList.add("rfrdplaycontainer");let e9=document.createElement("div");e9.classList.add("pause-video-block");let eG=document.createElement("img");eG.classList.add("rfrd-video-icon"),eG.style.display="none",eG.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=eG,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let eJ=document.createElement("div");eJ.classList.add("play-video-block");let eK=document.createElement("img");eK.classList.add("rfrd-video-icon"),eK.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=eK,this.playimg2.addEventListener("click",this.playVid.bind(this)),e9.appendChild(this.pauseimg2),eJ.appendChild(this.playimg2),eP.appendChild(e9),eP.appendChild(eJ);let eQ=document.createElement("div"),eW=document.createElement("img");eW.classList.add("rfrd-video-icon"),eW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=eW,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),eQ.appendChild(this.fullscreenimg2),eq.appendChild(eB),eq.appendChild(eP),eq.appendChild(eQ),eu.appendChild(eq);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2].videoid._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),ie=document.createElement("div");ie.classList.add("rfrd-side-video-name"),ie.textContent=e.videos[2].videoid.name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ii.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(ii.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eZ.appendChild(ie),eZ.appendChild(ii),eX.appendChild(eZ);var id=document.createElement("div");id.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),id.setAttribute("data-id",e.videos[2].videoid._id);var it=document.createElement("div");it.classList.add("rfrd-video-flyout-wrap");var is=document.createElement("div");is.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),is.style.paddingTop="56.17021276595745%";let ia=document.createElement("video");ia.classList.add("rfrd-mainvid"),ia.setAttribute("preload","none"),ia.setAttribute("data-id",e.videos[2].videoid._id),ia.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=ia,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var ir=document.createElement("a");ir.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ir.style.backgroundColor="#"+e.maincolor,ir.setAttribute("target","_blank"),e.videos[2].videoid.widgetcta?(ir.href=e.videos[2].videoid.widgetlink,ir.textContent=e.videos[2].videoid.widgetcta):(ir.href=e.buttonlink,ir.textContent=e.buttoncta),is.appendChild(this.mainvideo3),it.appendChild(is),it.appendChild(ir),id.appendChild(it);let il=document.createElement("div");il.classList.add("rfrd-video-icons");let io=document.createElement("div");io.classList.add("rfrdsoundcontainer");let ic=document.createElement("div");ic.classList.add("sound-on"),this.soundon3=ic,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let ip=document.createElement("img");ip.classList.add("rfrd-video-icon"),ip.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iv=document.createElement("div");iv.style.display="none",iv.classList.add("sound-off"),this.soundoff3=iv,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let ih=document.createElement("img");ih.classList.add("rfrd-video-icon"),ih.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(ip),this.soundoff3.appendChild(ih),io.appendChild(this.soundon3),io.appendChild(this.soundoff3);let ib=document.createElement("div");ib.classList.add("rfrdplaycontainer");let im=document.createElement("div");im.classList.add("pause-video-block");let iu=document.createElement("img");iu.classList.add("rfrd-video-icon"),iu.style.display="none",iu.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=iu,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let ig=document.createElement("div");ig.classList.add("play-video-block");let i_=document.createElement("img");i_.classList.add("rfrd-video-icon"),i_.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=i_,this.playimg3.addEventListener("click",this.playVid.bind(this)),im.appendChild(this.pauseimg3),ig.appendChild(this.playimg3),ib.appendChild(im),ib.appendChild(ig);let iC=document.createElement("div"),i0=document.createElement("img");i0.classList.add("rfrd-video-icon"),i0.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=i0,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),iC.appendChild(this.fullscreenimg3),il.appendChild(io),il.appendChild(ib),il.appendChild(iC),is.appendChild(il),C.appendChild(x),C.appendChild(W),C.appendChild(eX),$.appendChild(O),$.appendChild(eb),$.appendChild(id),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(4==t){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let i$=document.createElement("video");i$.classList.add("rfrd-mainvid"),i$.setAttribute("data-id",e.videos[0].videoid._id),i$.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=i$,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let iE=document.createElement("div");iE.classList.add("rfrd-video-icons");let i1=document.createElement("div");i1.classList.add("rfrdsoundcontainer");let iL=document.createElement("div");iL.classList.add("sound-on"),this.soundon1=iL,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let iw=document.createElement("img");iw.classList.add("rfrd-video-icon"),iw.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iy=document.createElement("div");iy.style.display="none",iy.classList.add("sound-off"),this.soundoff1=iy,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let i4=document.createElement("img");i4.classList.add("rfrd-video-icon"),i4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(iw),this.soundoff1.appendChild(i4),i1.appendChild(this.soundon1),i1.appendChild(this.soundoff1);let ik=document.createElement("div");ik.classList.add("rfrdplaycontainer");let i2=document.createElement("div");i2.classList.add("pause-video-block");let i7=document.createElement("img");i7.classList.add("rfrd-video-icon"),i7.style.display="none",i7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=i7,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ix=document.createElement("div");ix.classList.add("play-video-block");let i5=document.createElement("img");i5.classList.add("rfrd-video-icon"),i5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=i5,this.playimg1.addEventListener("click",this.playVid.bind(this)),i2.appendChild(this.pauseimg1),ix.appendChild(this.playimg1),ik.appendChild(i2),ik.appendChild(ix);let i3=document.createElement("div"),i6=document.createElement("img");i6.classList.add("rfrd-video-icon"),i6.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=i6,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),i3.appendChild(this.fullscreenimg1),iE.appendChild(i1),iE.appendChild(ik),iE.appendChild(i3),F.appendChild(iE);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let i8=document.createElement("video");i8.classList.add("rfrd-mainvid"),i8.setAttribute("preload","none"),i8.setAttribute("data-id",e.videos[1].videoid._id),i8.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=i8,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let iA=document.createElement("div");iA.classList.add("rfrd-video-icons");let iS=document.createElement("div");iS.classList.add("rfrdsoundcontainer");let ij=document.createElement("div");ij.classList.add("sound-on"),this.soundon2=ij,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let iV=document.createElement("img");iV.classList.add("rfrd-video-icon"),iV.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iO=document.createElement("div");iO.style.display="none",iO.classList.add("sound-off"),this.soundoff2=iO,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let iT=document.createElement("img");iT.classList.add("rfrd-video-icon"),iT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(iV),this.soundoff2.appendChild(iT),iS.appendChild(this.soundon2),iS.appendChild(this.soundoff2);let iF=document.createElement("div");iF.classList.add("rfrdplaycontainer");let iM=document.createElement("div");iM.classList.add("pause-video-block");let iH=document.createElement("img");iH.classList.add("rfrd-video-icon"),iH.style.display="none",iH.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=iH,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let iz=document.createElement("div");iz.classList.add("play-video-block");let iU=document.createElement("img");iU.classList.add("rfrd-video-icon"),iU.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=iU,this.playimg2.addEventListener("click",this.playVid.bind(this)),iM.appendChild(this.pauseimg2),iz.appendChild(this.playimg2),iF.appendChild(iM),iF.appendChild(iz);let iq=document.createElement("div"),iB=document.createElement("img");iB.classList.add("rfrd-video-icon"),iB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=iB,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),iq.appendChild(this.fullscreenimg2),iA.appendChild(iS),iA.appendChild(iF),iA.appendChild(iq),eu.appendChild(iA);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2].videoid._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),ie=document.createElement("div");ie.classList.add("rfrd-side-video-name"),ie.textContent=e.videos[2].videoid.name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ii.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(ii.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eZ.appendChild(ie),eZ.appendChild(ii),eX.appendChild(eZ);var id=document.createElement("div");id.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),id.setAttribute("data-id",e.videos[2].videoid._id);var it=document.createElement("div");it.classList.add("rfrd-video-flyout-wrap");var is=document.createElement("div");is.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),is.style.paddingTop="56.17021276595745%";let iD=document.createElement("video");iD.classList.add("rfrd-mainvid"),iD.setAttribute("preload","none"),iD.setAttribute("data-id",e.videos[2].videoid._id),iD.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=iD,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var ir=document.createElement("a");ir.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ir.style.backgroundColor="#"+e.maincolor,ir.setAttribute("target","_blank"),e.videos[2].videoid.widgetcta?(ir.href=e.videos[2].videoid.widgetlink,ir.textContent=e.videos[2].videoid.widgetcta):(ir.href=e.buttonlink,ir.textContent=e.buttoncta),is.appendChild(this.mainvideo3),it.appendChild(is),it.appendChild(ir),id.appendChild(it);let iI=document.createElement("div");iI.classList.add("rfrd-video-icons");let iR=document.createElement("div");iR.classList.add("rfrdsoundcontainer");let iN=document.createElement("div");iN.classList.add("sound-on"),this.soundon3=iN,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let iP=document.createElement("img");iP.classList.add("rfrd-video-icon"),iP.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let i9=document.createElement("div");i9.style.display="none",i9.classList.add("sound-off"),this.soundoff3=i9,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let iG=document.createElement("img");iG.classList.add("rfrd-video-icon"),iG.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(iP),this.soundoff3.appendChild(iG),iR.appendChild(this.soundon3),iR.appendChild(this.soundoff3);let iJ=document.createElement("div");iJ.classList.add("rfrdplaycontainer");let iK=document.createElement("div");iK.classList.add("pause-video-block");let iQ=document.createElement("img");iQ.classList.add("rfrd-video-icon"),iQ.style.display="none",iQ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=iQ,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let iW=document.createElement("div");iW.classList.add("play-video-block");let iX=document.createElement("img");iX.classList.add("rfrd-video-icon"),iX.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=iX,this.playimg3.addEventListener("click",this.playVid.bind(this)),iK.appendChild(this.pauseimg3),iW.appendChild(this.playimg3),iJ.appendChild(iK),iJ.appendChild(iW);let iY=document.createElement("div"),iZ=document.createElement("img");iZ.classList.add("rfrd-video-icon"),iZ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=iZ,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),iY.appendChild(this.fullscreenimg3),iI.appendChild(iR),iI.appendChild(iJ),iI.appendChild(iY),is.appendChild(iI);var de=document.createElement("a");de.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),de.setAttribute("data-id",e.videos[3].videoid._id),de.addEventListener("click",this.showVid.bind(this),!1);var di=document.createElement("div");di.classList.add("rfrd-video-photo"),di.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",de.appendChild(di);var dd=document.createElement("div"),dt=document.createElement("div");dt.classList.add("rfrd-side-video-name"),dt.textContent=e.videos[3].videoid.name;var ds=document.createElement("div");ds.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?ds.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].videoid.jobtitle&&(ds.textContent=e.videos[3].videoid.jobtitle+", "+e.videos[3].videoid.worksat),dd.appendChild(dt),dd.appendChild(ds),de.appendChild(dd);var da=document.createElement("div");da.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),da.setAttribute("data-id",e.videos[3].videoid._id);var dn=document.createElement("div");dn.classList.add("rfrd-video-flyout-wrap");var dr=document.createElement("div");dr.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),dr.style.paddingTop="56.17021276595745%";let dl=document.createElement("video");dl.classList.add("rfrd-mainvid"),dl.setAttribute("preload","none"),dl.setAttribute("data-id",e.videos[3].videoid._id),dl.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",this.mainvideo4=dl,this.mainvideo4.innerHTML='<source src="'+e.videos[3].videoid.link+'" data-wf-ignore="true">';var dc=document.createElement("a");dc.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),dc.style.backgroundColor="#"+e.maincolor,dc.setAttribute("target","_blank"),e.videos[3].videoid.widgetcta?(dc.href=e.videos[3].videoid.widgetlink,dc.textContent=e.videos[3].videoid.widgetcta):(dc.href=e.buttonlink,dc.textContent=e.buttoncta),dr.appendChild(this.mainvideo4),dn.appendChild(dr),dn.appendChild(dc),da.appendChild(dn);let dp=document.createElement("div");dp.classList.add("rfrd-video-icons");let dv=document.createElement("div");dv.classList.add("rfrdsoundcontainer");let df=document.createElement("div");df.classList.add("sound-on"),this.soundon4=df,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let dh=document.createElement("img");dh.classList.add("rfrd-video-icon"),dh.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let db=document.createElement("div");db.style.display="none",db.classList.add("sound-off"),this.soundoff4=db,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let dm=document.createElement("img");dm.classList.add("rfrd-video-icon"),dm.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(dh),this.soundoff4.appendChild(dm),dv.appendChild(this.soundon4),dv.appendChild(this.soundoff4);let du=document.createElement("div");du.classList.add("rfrdplaycontainer");let dg=document.createElement("div");dg.classList.add("pause-video-block");let d_=document.createElement("img");d_.classList.add("rfrd-video-icon"),d_.style.display="none",d_.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=d_,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let dC=document.createElement("div");dC.classList.add("play-video-block");let d0=document.createElement("img");d0.classList.add("rfrd-video-icon"),d0.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=d0,this.playimg4.addEventListener("click",this.playVid.bind(this)),dg.appendChild(this.pauseimg4),dC.appendChild(this.playimg4),du.appendChild(dg),du.appendChild(dC);let d$=document.createElement("div"),dE=document.createElement("img");dE.classList.add("rfrd-video-icon"),dE.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=dE,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),d$.appendChild(this.fullscreenimg4),dp.appendChild(dv),dp.appendChild(du),dp.appendChild(d$),dr.appendChild(dp),C.appendChild(x),C.appendChild(W),C.appendChild(eX),C.appendChild(de),$.appendChild(O),$.appendChild(eb),$.appendChild(id),$.appendChild(da),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(5==t){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let d1=document.createElement("video");d1.classList.add("rfrd-mainvid"),d1.setAttribute("data-id",e.videos[0].videoid._id),d1.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=d1,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let dL=document.createElement("div");dL.classList.add("rfrd-video-icons");let dw=document.createElement("div");dw.classList.add("rfrdsoundcontainer");let dy=document.createElement("div");dy.classList.add("sound-on"),this.soundon1=dy,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let d4=document.createElement("img");d4.classList.add("rfrd-video-icon"),d4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dk=document.createElement("div");dk.style.display="none",dk.classList.add("sound-off"),this.soundoff1=dk,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let d2=document.createElement("img");d2.classList.add("rfrd-video-icon"),d2.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(d4),this.soundoff1.appendChild(d2),dw.appendChild(this.soundon1),dw.appendChild(this.soundoff1);let d7=document.createElement("div");d7.classList.add("rfrdplaycontainer");let dx=document.createElement("div");dx.classList.add("pause-video-block");let d5=document.createElement("img");d5.classList.add("rfrd-video-icon"),d5.style.display="none",d5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=d5,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let d3=document.createElement("div");d3.classList.add("play-video-block");let d6=document.createElement("img");d6.classList.add("rfrd-video-icon"),d6.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=d6,this.playimg1.addEventListener("click",this.playVid.bind(this)),dx.appendChild(this.pauseimg1),d3.appendChild(this.playimg1),d7.appendChild(dx),d7.appendChild(d3);let d8=document.createElement("div"),dA=document.createElement("img");dA.classList.add("rfrd-video-icon"),dA.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=dA,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),d8.appendChild(this.fullscreenimg1),dL.appendChild(dw),dL.appendChild(d7),dL.appendChild(d8),F.appendChild(dL);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let dS=document.createElement("video");dS.classList.add("rfrd-mainvid"),dS.setAttribute("preload","none"),dS.setAttribute("data-id",e.videos[1].videoid._id),dS.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=dS,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let dj=document.createElement("div");dj.classList.add("rfrd-video-icons");let dV=document.createElement("div");dV.classList.add("rfrdsoundcontainer");let dO=document.createElement("div");dO.classList.add("sound-on"),this.soundon2=dO,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let dT=document.createElement("img");dT.classList.add("rfrd-video-icon"),dT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dF=document.createElement("div");dF.style.display="none",dF.classList.add("sound-off"),this.soundoff2=dF,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let dM=document.createElement("img");dM.classList.add("rfrd-video-icon"),dM.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(dT),this.soundoff2.appendChild(dM),dV.appendChild(this.soundon2),dV.appendChild(this.soundoff2);let dH=document.createElement("div");dH.classList.add("rfrdplaycontainer");let dz=document.createElement("div");dz.classList.add("pause-video-block");let dU=document.createElement("img");dU.classList.add("rfrd-video-icon"),dU.style.display="none",dU.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=dU,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let dq=document.createElement("div");dq.classList.add("play-video-block");let dB=document.createElement("img");dB.classList.add("rfrd-video-icon"),dB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=dB,this.playimg2.addEventListener("click",this.playVid.bind(this)),dz.appendChild(this.pauseimg2),dq.appendChild(this.playimg2),dH.appendChild(dz),dH.appendChild(dq);let dD=document.createElement("div"),dI=document.createElement("img");dI.classList.add("rfrd-video-icon"),dI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=dI,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),dD.appendChild(this.fullscreenimg2),dj.appendChild(dV),dj.appendChild(dH),dj.appendChild(dD),eu.appendChild(dj);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2].videoid._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),ie=document.createElement("div");ie.classList.add("rfrd-side-video-name"),ie.textContent=e.videos[2].videoid.name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ii.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(ii.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eZ.appendChild(ie),eZ.appendChild(ii),eX.appendChild(eZ);var id=document.createElement("div");id.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),id.setAttribute("data-id",e.videos[2].videoid._id);var it=document.createElement("div");it.classList.add("rfrd-video-flyout-wrap");var is=document.createElement("div");is.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),is.style.paddingTop="56.17021276595745%";let dR=document.createElement("video");dR.classList.add("rfrd-mainvid"),dR.setAttribute("preload","none"),dR.setAttribute("data-id",e.videos[2].videoid._id),dR.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=dR,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var ir=document.createElement("a");ir.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ir.style.backgroundColor="#"+e.maincolor,ir.setAttribute("target","_blank"),e.videos[2].videoid.widgetcta?(ir.href=e.videos[2].videoid.widgetlink,ir.textContent=e.videos[2].videoid.widgetcta):(ir.href=e.buttonlink,ir.textContent=e.buttoncta),is.appendChild(this.mainvideo3),it.appendChild(is),it.appendChild(ir),id.appendChild(it);let dN=document.createElement("div");dN.classList.add("rfrd-video-icons");let dP=document.createElement("div");dP.classList.add("rfrdsoundcontainer");let d9=document.createElement("div");d9.classList.add("sound-on"),this.soundon3=d9,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let dG=document.createElement("img");dG.classList.add("rfrd-video-icon"),dG.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dJ=document.createElement("div");dJ.style.display="none",dJ.classList.add("sound-off"),this.soundoff3=dJ,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let dK=document.createElement("img");dK.classList.add("rfrd-video-icon"),dK.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(dG),this.soundoff3.appendChild(dK),dP.appendChild(this.soundon3),dP.appendChild(this.soundoff3);let dQ=document.createElement("div");dQ.classList.add("rfrdplaycontainer");let dW=document.createElement("div");dW.classList.add("pause-video-block");let dX=document.createElement("img");dX.classList.add("rfrd-video-icon"),dX.style.display="none",dX.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=dX,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let dY=document.createElement("div");dY.classList.add("play-video-block");let dZ=document.createElement("img");dZ.classList.add("rfrd-video-icon"),dZ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=dZ,this.playimg3.addEventListener("click",this.playVid.bind(this)),dW.appendChild(this.pauseimg3),dY.appendChild(this.playimg3),dQ.appendChild(dW),dQ.appendChild(dY);let te=document.createElement("div"),ti=document.createElement("img");ti.classList.add("rfrd-video-icon"),ti.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=ti,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),te.appendChild(this.fullscreenimg3),dN.appendChild(dP),dN.appendChild(dQ),dN.appendChild(te),is.appendChild(dN);var de=document.createElement("a");de.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),de.setAttribute("data-id",e.videos[3].videoid._id),de.addEventListener("click",this.showVid.bind(this),!1);var di=document.createElement("div");di.classList.add("rfrd-video-photo"),di.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",de.appendChild(di);var dd=document.createElement("div"),dt=document.createElement("div");dt.classList.add("rfrd-side-video-name"),dt.textContent=e.videos[3].videoid.name;var ds=document.createElement("div");ds.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?ds.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].videoid.jobtitle&&(ds.textContent=e.videos[3].videoid.jobtitle+", "+e.videos[3].videoid.worksat),dd.appendChild(dt),dd.appendChild(ds),de.appendChild(dd);var da=document.createElement("div");da.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),da.setAttribute("data-id",e.videos[3].videoid._id);var dn=document.createElement("div");dn.classList.add("rfrd-video-flyout-wrap");var dr=document.createElement("div");dr.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),dr.style.paddingTop="56.17021276595745%";let td=document.createElement("video");td.classList.add("rfrd-mainvid"),td.setAttribute("preload","none"),td.setAttribute("data-id",e.videos[3].videoid._id),td.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",this.mainvideo4=td,this.mainvideo4.innerHTML='<source src="'+e.videos[3].videoid.link+'" data-wf-ignore="true">';var dc=document.createElement("a");dc.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),dc.style.backgroundColor="#"+e.maincolor,dc.setAttribute("target","_blank"),e.videos[3].videoid.widgetcta?(dc.href=e.videos[3].videoid.widgetlink,dc.textContent=e.videos[3].videoid.widgetcta):(dc.href=e.buttonlink,dc.textContent=e.buttoncta),dr.appendChild(this.mainvideo4),dn.appendChild(dr),dn.appendChild(dc),da.appendChild(dn);let tt=document.createElement("div");tt.classList.add("rfrd-video-icons");let ts=document.createElement("div");ts.classList.add("rfrdsoundcontainer");let ta=document.createElement("div");ta.classList.add("sound-on"),this.soundon4=ta,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let tn=document.createElement("img");tn.classList.add("rfrd-video-icon"),tn.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tr=document.createElement("div");tr.style.display="none",tr.classList.add("sound-off"),this.soundoff4=tr,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let tl=document.createElement("img");tl.classList.add("rfrd-video-icon"),tl.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(tn),this.soundoff4.appendChild(tl),ts.appendChild(this.soundon4),ts.appendChild(this.soundoff4);let to=document.createElement("div");to.classList.add("rfrdplaycontainer");let tc=document.createElement("div");tc.classList.add("pause-video-block");let tp=document.createElement("img");tp.classList.add("rfrd-video-icon"),tp.style.display="none",tp.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=tp,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let tv=document.createElement("div");tv.classList.add("play-video-block");let tf=document.createElement("img");tf.classList.add("rfrd-video-icon"),tf.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=tf,this.playimg4.addEventListener("click",this.playVid.bind(this)),tc.appendChild(this.pauseimg4),tv.appendChild(this.playimg4),to.appendChild(tc),to.appendChild(tv);let th=document.createElement("div"),tb=document.createElement("img");tb.classList.add("rfrd-video-icon"),tb.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=tb,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),th.appendChild(this.fullscreenimg4),tt.appendChild(ts),tt.appendChild(to),tt.appendChild(th),dr.appendChild(tt);var tm=document.createElement("a");tm.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),tm.setAttribute("data-id",e.videos[4].videoid._id),tm.addEventListener("click",this.showVid.bind(this),!1);var tu=document.createElement("div");tu.classList.add("rfrd-video-photo"),tu.style="background-image:url('"+e.videos[4].videoid.screengrab+"')",tm.appendChild(tu);var tg=document.createElement("div"),t_=document.createElement("div");t_.classList.add("rfrd-side-video-name"),t_.textContent=e.videos[4].videoid.name;var tC=document.createElement("div");tC.classList.add("rfrd-side-video-title"),e.videos[4].featuredid?tC.textContent=e.videos[4].featuredid.jobtitle+", "+e.videos[4].featuredid.worksat:e.videos[4].videoid.jobtitle&&(tC.textContent=e.videos[4].videoid.jobtitle+", "+e.videos[4].videoid.worksat),tg.appendChild(t_),tg.appendChild(tC),tm.appendChild(tg);var t0=document.createElement("div");t0.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),t0.setAttribute("data-id",e.videos[4].videoid._id);var t$=document.createElement("div");t$.classList.add("rfrd-video-flyout-wrap");var tE=document.createElement("div");tE.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),tE.style.paddingTop="56.17021276595745%";let t1=document.createElement("video");t1.classList.add("rfrd-mainvid"),t1.setAttribute("preload","none"),t1.setAttribute("data-id",e.videos[4].videoid._id),t1.style="background-image:url('"+e.videos[4].videoid.screengrab+"')",this.mainvideo5=t1,this.mainvideo5.innerHTML='<source src="'+e.videos[4].videoid.link+'" data-wf-ignore="true">';var tL=document.createElement("a");tL.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),tL.style.backgroundColor="#"+e.maincolor,tL.setAttribute("target","_blank"),e.videos[4].videoid.widgetcta?(tL.href=e.videos[4].videoid.widgetlink,tL.textContent=e.videos[4].videoid.widgetcta):(tL.href=e.buttonlink,tL.textContent=e.buttoncta),tE.appendChild(this.mainvideo5),t$.appendChild(tE),t$.appendChild(tL),t0.appendChild(t$);let tw=document.createElement("div");tw.classList.add("rfrd-video-icons");let ty=document.createElement("div");ty.classList.add("rfrdsoundcontainer");let t4=document.createElement("div");t4.classList.add("sound-on"),this.soundon5=t4,this.soundon5.addEventListener("click",this.toggleSoundOn.bind(this));let tk=document.createElement("img");tk.classList.add("rfrd-video-icon"),tk.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let t2=document.createElement("div");t2.style.display="none",t2.classList.add("sound-off"),this.soundoff5=t2,this.soundoff5.addEventListener("click",this.toggleSoundOff.bind(this));let t7=document.createElement("img");t7.classList.add("rfrd-video-icon"),t7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon5.appendChild(tk),this.soundoff5.appendChild(t7),ty.appendChild(this.soundon5),ty.appendChild(this.soundoff5);let tx=document.createElement("div");tx.classList.add("rfrdplaycontainer");let t5=document.createElement("div");t5.classList.add("pause-video-block");let t3=document.createElement("img");t3.classList.add("rfrd-video-icon"),t3.style.display="none",t3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg5=t3,this.pauseimg5.addEventListener("click",this.pauseVid.bind(this));let t6=document.createElement("div");t6.classList.add("play-video-block");let t8=document.createElement("img");t8.classList.add("rfrd-video-icon"),t8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg5=t8,this.playimg5.addEventListener("click",this.playVid.bind(this)),t5.appendChild(this.pauseimg5),t6.appendChild(this.playimg5),tx.appendChild(t5),tx.appendChild(t6);let tA=document.createElement("div"),tS=document.createElement("img");tS.classList.add("rfrd-video-icon"),tS.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg5=tS,this.fullscreenimg5.addEventListener("click",this.toggleFullScreen.bind(this)),tA.appendChild(this.fullscreenimg5),tw.appendChild(ty),tw.appendChild(tx),tw.appendChild(tA),tE.appendChild(tw),C.appendChild(x),C.appendChild(W),C.appendChild(eX),C.appendChild(de),C.appendChild(tm),$.appendChild(O),$.appendChild(eb),$.appendChild(id),$.appendChild(da),$.appendChild(t0),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}this.messageContainer.appendChild(i),this.messageContainer.appendChild(u)}submit(e){e.preventDefault(),e.srcElement.querySelector("#email").value,e.srcElement.querySelector("#message").value,this.messageContainer.innerHTML='<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry'}toggleOpen(){this.open=!this.open,this.container.style="height: auto",this.buttonContainer.classList.add("rfrd-hidden"),this.messageContainer.classList.remove("rfrd-hidden")}toggleClose(){this.container.style="height: 0px",this.buttonContainer.classList.remove("rfrd-hidden"),this.messageContainer.classList.add("rfrd-hidden"),this.playimg.removeAttribute("style"),this.pauseimg.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.firstChild.firstChild.firstChild.pause(),e.firstChild.firstChild.firstChild.currentTime=0,e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none"})}toggleSoundOn(e){e.target.closest(".rfrdsoundcontainer").lastChild.removeAttribute("style"),e.target.closest(".sound-on").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&(e.firstChild.firstChild.firstChild.muted=!e.firstChild.firstChild.firstChild.muted)})}toggleSoundOff(e){e.target.closest(".rfrdsoundcontainer").firstChild.removeAttribute("style"),e.target.closest(".sound-off").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&(e.firstChild.firstChild.firstChild.muted=!e.firstChild.firstChild.firstChild.muted)})}toggleFullScreen(){document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.requestFullscreen()})}playVid(e){e.target.closest(".rfrdplaycontainer").firstChild.firstChild.removeAttribute("style"),e.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.play()})}pauseVid(e){e.target.closest(".rfrdplaycontainer").lastChild.firstChild.removeAttribute("style"),e.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.pause()})}showVid(e){var i=e.target.closest(".rfrd-video-row").getAttribute("data-id");document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){i==e.getAttribute("data-id")?(e.classList.add("rfrd-w--tab-active"),e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",e.firstChild.firstChild.firstChild.pause(),e.currentTime=0):(e.classList.remove("rfrd-w--tab-active"),e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",e.firstChild.firstChild.firstChild.pause(),e.currentTime=0)})}};
