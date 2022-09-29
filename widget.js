new class e{constructor({position:e="bottom-left"}={}){this.position=this.getPosition(e),this.open=!1,this.initalise()}getPosition(e){let[i,d]=e.split("-");return{[i]:"30px",[d]:"30px"}}async initalise(){async function e(e){let i=await fetch("https://app.rfrd.io/read/widget/"+e).then(e=>e.json());return i}let i=document.getElementById("rfrd-widget"),d=i.dataset.id;var t=await e(d);let s=document.createElement("div");s.classList.add("rfrd-cheer-wrapper"),s.style="height: 0px",this.container=s,document.body.appendChild(s);let a=document.createElement("div");a.classList.add("rfrd-cheer-video-bg"),this.buttonContainer=a;let n=document.createElement("div");n.classList.add("rfrd-cheer-background-video");let r=document.createElement("div");r.classList.add("rfrd-cheer-bg","rfrd-background-video","w-background-video-atom"),r.setAttribute("data-video-urls",t.videos[0].videoid.link),r.setAttribute("data-autoplay","true"),r.setAttribute("data-loop","true"),r.setAttribute("data-wf-ignore","true"),this.videogif=r;let l=document.createElement("video");l.style="background-image:url('"+t.videos[0].videoid.screengrab+"')",l.autoplay=!0,l.loop=!0,l.muted=!0,l.playsinline=!0,this.video=l,this.video.innerHTML='<source src="'+t.videos[0].videoid.link+'" data-wf-ignore="true">',this.videogif.appendChild(this.video),n.appendChild(this.videogif);let o=document.createElement("div");o.classList.add("rfrd-cheer-cta"),o.style.backgroundColor="#"+t.maincolor,this.cheercta=o,this.cheercta.innerHTML="<div>"+t.widgetcta+"</div>",this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("rfrd-hidden","rfrd-activated"),this.createMessageContainerContent(t),a.appendChild(n),a.appendChild(this.cheercta),a.addEventListener("click",this.toggleOpen.bind(this)),this.container.append(this.messageContainer),this.container.append(a),this.createStyles(t)}createStyles(e){let i=document.createElement("style");i.innerHTML=`
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
            left: 10px;
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
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(i)}createMessageContainerContent(e){this.messageContainer.innerHTML="";let i=document.createElement("div");i.classList.add("rfrd-page-bg"),i.addEventListener("click",this.toggleClose.bind(this));let d=document.createElement("div");i.appendChild(d);var t=e.videos.length;let s=document.createElement("div");s.classList.add("rfrd-video-icons");let a=document.createElement("div"),n=document.createElement("div");n.classList.add("sound-on"),this.soundon=n,this.soundon.addEventListener("click",this.toggleSoundOn.bind(this));let r=document.createElement("img");r.classList.add("rfrd-video-icon"),r.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let l=document.createElement("div");l.style.display="none",l.classList.add("sound-off"),this.soundoff=l,this.soundoff.addEventListener("click",this.toggleSoundOff.bind(this));let o=document.createElement("img");o.classList.add("rfrd-video-icon"),o.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon.appendChild(r),this.soundoff.appendChild(o),a.appendChild(this.soundon),a.appendChild(this.soundoff);let c=document.createElement("div"),p=document.createElement("div");p.classList.add("pause-video-block");let v=document.createElement("img");v.classList.add("rfrd-video-icon"),v.style.display="none",v.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg=v,this.pauseimg.addEventListener("click",this.pauseVid.bind(this));let f=document.createElement("div");f.classList.add("play-video-block");let h=document.createElement("img");h.classList.add("rfrd-video-icon"),h.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg=h,this.playimg.addEventListener("click",this.playVid.bind(this)),p.appendChild(this.pauseimg),f.appendChild(this.playimg),c.appendChild(p),c.appendChild(f);let m=document.createElement("div"),b=document.createElement("img");b.classList.add("rfrd-video-icon"),b.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg=b,this.fullscreenimg.addEventListener("click",this.toggleFullScreen.bind(this)),m.appendChild(this.fullscreenimg),s.appendChild(a),s.appendChild(c),s.appendChild(m);let u=document.createElement("div");u.classList.add("rfrd-cheer-wrap"),u.id="cheer-wrap";let g=document.createElement("div");g.classList.add("rfrd-side-cheer-header"),g.textContent=e.cardlabel;let _=document.createElement("div");_.classList.add("video-tabs","rfrd-w-tabs");let C=document.createElement("div");C.classList.add("video-tabs-menu","rfrd-w-tab-menu");let E=document.createElement("div");E.classList.add("rfrd-tabs-content","rfrd-w-tab-content");let $=document.createElement("div");$.classList.add("rfrd-videos-top");let L=document.createElement("div");L.classList.add("rfrd-built-with-rfrd");let y=document.createElement("div");y.textContent="Built with";let w=document.createElement("img");w.classList.add("rfrd-bw-rfrd-logo"),w.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/6254a481ee51de3be6a0b275_rfrd%20dark.svg",L.appendChild(y),L.appendChild(w);var t=e.videos.length;if(1==t){var k=document.createElement("a");k.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),k.setAttribute("data-id",e.videos[0].videoid._id),k.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("rfrd-video-photo"),x.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",k.appendChild(x);var S=document.createElement("div"),A=document.createElement("div");A.classList.add("rfrd-side-video-name"),A.textContent=e.videos[0].videoid.name;var j=document.createElement("div");j.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?j.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(j.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(A),S.appendChild(j),k.appendChild(S);var V=document.createElement("div");V.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),V.setAttribute("data-id",e.videos[0].videoid._id);var O=document.createElement("div");O.classList.add("rfrd-video-flyout-wrap");var T=document.createElement("div");T.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),T.style.paddingTop="56.17021276595745%";let F=document.createElement("video");F.classList.add("rfrd-mainvid"),F.setAttribute("data-id",e.videos[0].videoid._id),F.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=F,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var M=document.createElement("a");M.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),M.href=e.buttonlink,M.style.backgroundColor="#"+e.maincolor,M.setAttribute("target","_blank"),M.textContent=e.buttoncta,T.appendChild(this.mainvideo1),O.appendChild(T),O.appendChild(M),V.appendChild(O);let H=document.createElement("div");H.classList.add("rfrd-video-icons");let z=document.createElement("div");z.classList.add("rfrdsoundcontainer");let q=document.createElement("div");q.classList.add("sound-on"),this.soundon1=q,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let U=document.createElement("img");U.classList.add("rfrd-video-icon"),U.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let B=document.createElement("div");B.style.display="none",B.classList.add("sound-off"),this.soundoff1=B,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let D=document.createElement("img");D.classList.add("rfrd-video-icon"),D.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(U),this.soundoff1.appendChild(D),z.appendChild(this.soundon1),z.appendChild(this.soundoff1);let I=document.createElement("div");I.classList.add("rfrdplaycontainer");let N=document.createElement("div");N.classList.add("pause-video-block");let R=document.createElement("img");R.classList.add("rfrd-video-icon"),R.style.display="none",R.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=R,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let P=document.createElement("div");P.classList.add("play-video-block");let G=document.createElement("img");G.classList.add("rfrd-video-icon"),G.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=G,this.playimg1.addEventListener("click",this.playVid.bind(this)),N.appendChild(this.pauseimg1),P.appendChild(this.playimg1),I.appendChild(N),I.appendChild(P);let J=document.createElement("div"),K=document.createElement("img");K.classList.add("rfrd-video-icon"),K.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=K,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),J.appendChild(this.fullscreenimg1),H.appendChild(z),H.appendChild(I),H.appendChild(J),T.appendChild(H),C.appendChild(k),E.appendChild(V),_.appendChild(C),_.appendChild(E),$.appendChild(g),$.appendChild(_),u.appendChild($),u.appendChild(L)}if(2==t){var k=document.createElement("a");k.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),k.setAttribute("data-id",e.videos[0].videoid._id),k.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("rfrd-video-photo"),x.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",k.appendChild(x);var S=document.createElement("div"),A=document.createElement("div");A.classList.add("rfrd-side-video-name"),A.textContent=e.videos[0].videoid.name;var j=document.createElement("div");j.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?j.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(j.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(A),S.appendChild(j),k.appendChild(S);var Q=document.createElement("a");Q.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),Q.setAttribute("data-id",e.videos[1].videoid._id),Q.addEventListener("click",this.showVid.bind(this),!1);var W=document.createElement("div");W.classList.add("rfrd-video-photo"),W.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",Q.appendChild(W);var X=document.createElement("div"),Y=document.createElement("div");Y.classList.add("rfrd-side-video-name"),Y.textContent=e.videos[1].videoid.name;var Z=document.createElement("div");Z.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?Z.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(Z.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),X.appendChild(Y),X.appendChild(Z),Q.appendChild(X);var V=document.createElement("div");V.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),V.setAttribute("data-id",e.videos[0].videoid._id);var O=document.createElement("div");O.classList.add("rfrd-video-flyout-wrap");var T=document.createElement("div");T.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),T.style.paddingTop="56.17021276595745%";let ee=document.createElement("video");ee.classList.add("rfrd-mainvid"),ee.setAttribute("data-id",e.videos[0].videoid._id),ee.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=ee,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var M=document.createElement("a");M.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),M.href=e.buttonlink,M.style.backgroundColor="#"+e.maincolor,M.setAttribute("target","_blank"),M.textContent=e.buttoncta,T.appendChild(this.mainvideo1),O.appendChild(T),O.appendChild(M),V.appendChild(O);let ei=document.createElement("div");ei.classList.add("rfrd-video-icons");let ed=document.createElement("div");ed.classList.add("rfrdsoundcontainer");let et=document.createElement("div");et.classList.add("sound-on"),this.soundon1=et,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let es=document.createElement("img");es.classList.add("rfrd-video-icon"),es.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let ea=document.createElement("div");ea.style.display="none",ea.classList.add("sound-off"),this.soundoff1=ea,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let en=document.createElement("img");en.classList.add("rfrd-video-icon"),en.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(es),this.soundoff1.appendChild(en),ed.appendChild(this.soundon1),ed.appendChild(this.soundoff1);let er=document.createElement("div");er.classList.add("rfrdplaycontainer");let el=document.createElement("div");el.classList.add("pause-video-block");let eo=document.createElement("img");eo.classList.add("rfrd-video-icon"),eo.style.display="none",eo.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=eo,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ec=document.createElement("div");ec.classList.add("play-video-block");let ep=document.createElement("img");ep.classList.add("rfrd-video-icon"),ep.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=ep,this.playimg1.addEventListener("click",this.playVid.bind(this)),el.appendChild(this.pauseimg1),ec.appendChild(this.playimg1),er.appendChild(el),er.appendChild(ec);let ev=document.createElement("div"),ef=document.createElement("img");ef.classList.add("rfrd-video-icon"),ef.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=ef,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),ev.appendChild(this.fullscreenimg1),ei.appendChild(ed),ei.appendChild(er),ei.appendChild(ev),T.appendChild(ei);var eh=document.createElement("div");eh.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eh.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eb=document.createElement("div");eb.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eb.style.paddingTop="56.17021276595745%";let eu=document.createElement("video");eu.classList.add("rfrd-mainvid"),eu.setAttribute("data-id",e.videos[1].videoid._id),eu.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=eu,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var eg=document.createElement("a");eg.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),eg.href=e.buttonlink,eg.style.backgroundColor="#"+e.maincolor,eg.setAttribute("target","_blank"),eg.textContent=e.buttoncta,eb.appendChild(this.mainvideo2),em.appendChild(eb),em.appendChild(eg),eh.appendChild(em);let e_=document.createElement("div");e_.classList.add("rfrd-video-icons");let eC=document.createElement("div");eC.classList.add("rfrdsoundcontainer");let e0=document.createElement("div");e0.classList.add("sound-on"),this.soundon2=e0,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eE=document.createElement("img");eE.classList.add("rfrd-video-icon"),eE.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let e$=document.createElement("div");e$.style.display="none",e$.classList.add("sound-off"),this.soundoff2=e$,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let e1=document.createElement("img");e1.classList.add("rfrd-video-icon"),e1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eE),this.soundoff2.appendChild(e1),eC.appendChild(this.soundon2),eC.appendChild(this.soundoff2);let eL=document.createElement("div");eL.classList.add("rfrdplaycontainer");let ey=document.createElement("div");ey.classList.add("pause-video-block");let e4=document.createElement("img");e4.classList.add("rfrd-video-icon"),e4.style.display="none",e4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=e4,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let ew=document.createElement("div");ew.classList.add("play-video-block");let ek=document.createElement("img");ek.classList.add("rfrd-video-icon"),ek.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=ek,this.playimg2.addEventListener("click",this.playVid.bind(this)),ey.appendChild(this.pauseimg2),ew.appendChild(this.playimg2),eL.appendChild(ey),eL.appendChild(ew);let e2=document.createElement("div"),e7=document.createElement("img");e7.classList.add("rfrd-video-icon"),e7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=e7,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),e2.appendChild(this.fullscreenimg2),e_.appendChild(eC),e_.appendChild(eL),e_.appendChild(e2),eb.appendChild(e_),C.appendChild(k),C.appendChild(Q),E.appendChild(V),E.appendChild(eh),_.appendChild(C),_.appendChild(E),$.appendChild(g),$.appendChild(_),u.appendChild($),u.appendChild(L)}if(3==t){var k=document.createElement("a");k.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),k.setAttribute("data-id",e.videos[0].videoid._id),k.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("rfrd-video-photo"),x.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",k.appendChild(x);var S=document.createElement("div"),A=document.createElement("div");A.classList.add("rfrd-side-video-name"),A.textContent=e.videos[0].videoid.name;var j=document.createElement("div");j.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?j.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(j.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(A),S.appendChild(j),k.appendChild(S);var V=document.createElement("div");V.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),V.setAttribute("data-id",e.videos[0].videoid._id);var O=document.createElement("div");O.classList.add("rfrd-video-flyout-wrap");var T=document.createElement("div");T.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),T.style.paddingTop="56.17021276595745%";let e5=document.createElement("video");e5.classList.add("rfrd-mainvid"),e5.setAttribute("data-id",e.videos[0].videoid._id),e5.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=e5,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var M=document.createElement("a");M.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),M.href=e.buttonlink,M.style.backgroundColor="#"+e.maincolor,M.setAttribute("target","_blank"),M.textContent=e.buttoncta,T.appendChild(this.mainvideo1),O.appendChild(T),O.appendChild(M),V.appendChild(O);let e3=document.createElement("div");e3.classList.add("rfrd-video-icons");let ex=document.createElement("div");ex.classList.add("rfrdsoundcontainer");let e6=document.createElement("div");e6.classList.add("sound-on"),this.soundon1=e6,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let e8=document.createElement("img");e8.classList.add("rfrd-video-icon"),e8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eS=document.createElement("div");eS.style.display="none",eS.classList.add("sound-off"),this.soundoff1=eS,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let eA=document.createElement("img");eA.classList.add("rfrd-video-icon"),eA.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(e8),this.soundoff1.appendChild(eA),ex.appendChild(this.soundon1),ex.appendChild(this.soundoff1);let ej=document.createElement("div");ej.classList.add("rfrdplaycontainer");let eV=document.createElement("div");eV.classList.add("pause-video-block");let eO=document.createElement("img");eO.classList.add("rfrd-video-icon"),eO.style.display="none",eO.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=eO,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let eT=document.createElement("div");eT.classList.add("play-video-block");let eF=document.createElement("img");eF.classList.add("rfrd-video-icon"),eF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=eF,this.playimg1.addEventListener("click",this.playVid.bind(this)),eV.appendChild(this.pauseimg1),eT.appendChild(this.playimg1),ej.appendChild(eV),ej.appendChild(eT);let eM=document.createElement("div"),eH=document.createElement("img");eH.classList.add("rfrd-video-icon"),eH.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=eH,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),eM.appendChild(this.fullscreenimg1),e3.appendChild(ex),e3.appendChild(ej),e3.appendChild(eM),T.appendChild(e3);var Q=document.createElement("a");Q.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),Q.setAttribute("data-id",e.videos[1].videoid._id),Q.addEventListener("click",this.showVid.bind(this),!1);var W=document.createElement("div");W.classList.add("rfrd-video-photo"),W.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",Q.appendChild(W);var X=document.createElement("div"),Y=document.createElement("div");Y.classList.add("rfrd-side-video-name"),Y.textContent=e.videos[1].videoid.name;var Z=document.createElement("div");Z.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?Z.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(Z.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),X.appendChild(Y),X.appendChild(Z),Q.appendChild(X);var eh=document.createElement("div");eh.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eh.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eb=document.createElement("div");eb.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eb.style.paddingTop="56.17021276595745%";let ez=document.createElement("video");ez.classList.add("rfrd-mainvid"),ez.setAttribute("data-id",e.videos[1].videoid._id),ez.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=ez,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var eg=document.createElement("a");eg.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),eg.href=e.buttonlink,eg.style.backgroundColor="#"+e.maincolor,eg.setAttribute("target","_blank"),eg.textContent=e.buttoncta,eb.appendChild(this.mainvideo2),em.appendChild(eb),em.appendChild(eg),eh.appendChild(em);let eq=document.createElement("div");eq.classList.add("rfrd-video-icons");let eU=document.createElement("div");eU.classList.add("rfrdsoundcontainer");let eB=document.createElement("div");eB.classList.add("sound-on"),this.soundon2=eB,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eD=document.createElement("img");eD.classList.add("rfrd-video-icon"),eD.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eI=document.createElement("div");eI.style.display="none",eI.classList.add("sound-off"),this.soundoff2=eI,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eN=document.createElement("img");eN.classList.add("rfrd-video-icon"),eN.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eD),this.soundoff2.appendChild(eN),eU.appendChild(this.soundon2),eU.appendChild(this.soundoff2);let eR=document.createElement("div");eR.classList.add("rfrdplaycontainer");let eP=document.createElement("div");eP.classList.add("pause-video-block");let e9=document.createElement("img");e9.classList.add("rfrd-video-icon"),e9.style.display="none",e9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=e9,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let eG=document.createElement("div");eG.classList.add("play-video-block");let eJ=document.createElement("img");eJ.classList.add("rfrd-video-icon"),eJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=eJ,this.playimg2.addEventListener("click",this.playVid.bind(this)),eP.appendChild(this.pauseimg2),eG.appendChild(this.playimg2),eR.appendChild(eP),eR.appendChild(eG);let eK=document.createElement("div"),eQ=document.createElement("img");eQ.classList.add("rfrd-video-icon"),eQ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=eQ,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),eK.appendChild(this.fullscreenimg2),eq.appendChild(eU),eq.appendChild(eR),eq.appendChild(eK),eb.appendChild(eq);var eW=document.createElement("a");eW.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eW.setAttribute("data-id",e.videos[2].videoid._id),eW.addEventListener("click",this.showVid.bind(this),!1);var eX=document.createElement("div");eX.classList.add("rfrd-video-photo"),eX.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eW.appendChild(eX);var eY=document.createElement("div"),eZ=document.createElement("div");eZ.classList.add("rfrd-side-video-name"),eZ.textContent=e.videos[2].videoid.name;var ie=document.createElement("div");ie.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ie.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(ie.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eY.appendChild(eZ),eY.appendChild(ie),eW.appendChild(eY);var ii=document.createElement("div");ii.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ii.setAttribute("data-id",e.videos[2].videoid._id);var id=document.createElement("div");id.classList.add("rfrd-video-flyout-wrap");var it=document.createElement("div");it.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),it.style.paddingTop="56.17021276595745%";let is=document.createElement("video");is.classList.add("rfrd-mainvid"),is.setAttribute("data-id",e.videos[2].videoid._id),is.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=is,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var ia=document.createElement("a");ia.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ia.href=e.buttonlink,ia.style.backgroundColor="#"+e.maincolor,ia.setAttribute("target","_blank"),ia.textContent=e.buttoncta,it.appendChild(this.mainvideo3),id.appendChild(it),id.appendChild(ia),ii.appendChild(id);let ir=document.createElement("div");ir.classList.add("rfrd-video-icons");let il=document.createElement("div");il.classList.add("rfrdsoundcontainer");let io=document.createElement("div");io.classList.add("sound-on"),this.soundon3=io,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let ic=document.createElement("img");ic.classList.add("rfrd-video-icon"),ic.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let ip=document.createElement("div");ip.style.display="none",ip.classList.add("sound-off"),this.soundoff3=ip,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let iv=document.createElement("img");iv.classList.add("rfrd-video-icon"),iv.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(ic),this.soundoff3.appendChild(iv),il.appendChild(this.soundon3),il.appendChild(this.soundoff3);let ih=document.createElement("div");ih.classList.add("rfrdplaycontainer");let im=document.createElement("div");im.classList.add("pause-video-block");let ib=document.createElement("img");ib.classList.add("rfrd-video-icon"),ib.style.display="none",ib.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=ib,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let iu=document.createElement("div");iu.classList.add("play-video-block");let ig=document.createElement("img");ig.classList.add("rfrd-video-icon"),ig.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=ig,this.playimg3.addEventListener("click",this.playVid.bind(this)),im.appendChild(this.pauseimg3),iu.appendChild(this.playimg3),ih.appendChild(im),ih.appendChild(iu);let i_=document.createElement("div"),iC=document.createElement("img");iC.classList.add("rfrd-video-icon"),iC.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=iC,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),i_.appendChild(this.fullscreenimg3),ir.appendChild(il),ir.appendChild(ih),ir.appendChild(i_),it.appendChild(ir),C.appendChild(k),C.appendChild(Q),C.appendChild(eW),E.appendChild(V),E.appendChild(eh),E.appendChild(ii),_.appendChild(C),_.appendChild(E),$.appendChild(g),$.appendChild(_),u.appendChild($),u.appendChild(L)}if(4==t){var k=document.createElement("a");k.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),k.setAttribute("data-id",e.videos[0].videoid._id),k.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("rfrd-video-photo"),x.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",k.appendChild(x);var S=document.createElement("div"),A=document.createElement("div");A.classList.add("rfrd-side-video-name"),A.textContent=e.videos[0].videoid.name;var j=document.createElement("div");j.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?j.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(j.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(A),S.appendChild(j),k.appendChild(S);var V=document.createElement("div");V.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),V.setAttribute("data-id",e.videos[0].videoid._id);var O=document.createElement("div");O.classList.add("rfrd-video-flyout-wrap");var T=document.createElement("div");T.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),T.style.paddingTop="56.17021276595745%";let i0=document.createElement("video");i0.classList.add("rfrd-mainvid"),i0.setAttribute("data-id",e.videos[0].videoid._id),i0.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=i0,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var M=document.createElement("a");M.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),M.href=e.buttonlink,M.style.backgroundColor="#"+e.maincolor,M.setAttribute("target","_blank"),M.textContent=e.buttoncta,T.appendChild(this.mainvideo1),O.appendChild(T),O.appendChild(M),V.appendChild(O);let iE=document.createElement("div");iE.classList.add("rfrd-video-icons");let i$=document.createElement("div");i$.classList.add("rfrdsoundcontainer");let i1=document.createElement("div");i1.classList.add("sound-on"),this.soundon1=i1,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let iL=document.createElement("img");iL.classList.add("rfrd-video-icon"),iL.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iy=document.createElement("div");iy.style.display="none",iy.classList.add("sound-off"),this.soundoff1=iy,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let i4=document.createElement("img");i4.classList.add("rfrd-video-icon"),i4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(iL),this.soundoff1.appendChild(i4),i$.appendChild(this.soundon1),i$.appendChild(this.soundoff1);let iw=document.createElement("div");iw.classList.add("rfrdplaycontainer");let ik=document.createElement("div");ik.classList.add("pause-video-block");let i2=document.createElement("img");i2.classList.add("rfrd-video-icon"),i2.style.display="none",i2.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=i2,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let i7=document.createElement("div");i7.classList.add("play-video-block");let i5=document.createElement("img");i5.classList.add("rfrd-video-icon"),i5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=i5,this.playimg1.addEventListener("click",this.playVid.bind(this)),ik.appendChild(this.pauseimg1),i7.appendChild(this.playimg1),iw.appendChild(ik),iw.appendChild(i7);let i3=document.createElement("div"),ix=document.createElement("img");ix.classList.add("rfrd-video-icon"),ix.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=ix,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),i3.appendChild(this.fullscreenimg1),iE.appendChild(i$),iE.appendChild(iw),iE.appendChild(i3),T.appendChild(iE);var Q=document.createElement("a");Q.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),Q.setAttribute("data-id",e.videos[1].videoid._id),Q.addEventListener("click",this.showVid.bind(this),!1);var W=document.createElement("div");W.classList.add("rfrd-video-photo"),W.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",Q.appendChild(W);var X=document.createElement("div"),Y=document.createElement("div");Y.classList.add("rfrd-side-video-name"),Y.textContent=e.videos[1].videoid.name;var Z=document.createElement("div");Z.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?Z.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(Z.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),X.appendChild(Y),X.appendChild(Z),Q.appendChild(X);var eh=document.createElement("div");eh.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eh.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eb=document.createElement("div");eb.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eb.style.paddingTop="56.17021276595745%";let i6=document.createElement("video");i6.classList.add("rfrd-mainvid"),i6.setAttribute("data-id",e.videos[1].videoid._id),i6.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=i6,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var eg=document.createElement("a");eg.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),eg.href=e.buttonlink,eg.style.backgroundColor="#"+e.maincolor,eg.setAttribute("target","_blank"),eg.textContent=e.buttoncta,eb.appendChild(this.mainvideo2),em.appendChild(eb),em.appendChild(eg),eh.appendChild(em);let i8=document.createElement("div");i8.classList.add("rfrd-video-icons");let iS=document.createElement("div");iS.classList.add("rfrdsoundcontainer");let iA=document.createElement("div");iA.classList.add("sound-on"),this.soundon2=iA,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let ij=document.createElement("img");ij.classList.add("rfrd-video-icon"),ij.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iV=document.createElement("div");iV.style.display="none",iV.classList.add("sound-off"),this.soundoff2=iV,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let iO=document.createElement("img");iO.classList.add("rfrd-video-icon"),iO.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(ij),this.soundoff2.appendChild(iO),iS.appendChild(this.soundon2),iS.appendChild(this.soundoff2);let iT=document.createElement("div");iT.classList.add("rfrdplaycontainer");let iF=document.createElement("div");iF.classList.add("pause-video-block");let iM=document.createElement("img");iM.classList.add("rfrd-video-icon"),iM.style.display="none",iM.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=iM,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let iH=document.createElement("div");iH.classList.add("play-video-block");let iz=document.createElement("img");iz.classList.add("rfrd-video-icon"),iz.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=iz,this.playimg2.addEventListener("click",this.playVid.bind(this)),iF.appendChild(this.pauseimg2),iH.appendChild(this.playimg2),iT.appendChild(iF),iT.appendChild(iH);let iq=document.createElement("div"),iU=document.createElement("img");iU.classList.add("rfrd-video-icon"),iU.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=iU,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),iq.appendChild(this.fullscreenimg2),i8.appendChild(iS),i8.appendChild(iT),i8.appendChild(iq),eb.appendChild(i8);var eW=document.createElement("a");eW.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eW.setAttribute("data-id",e.videos[2].videoid._id),eW.addEventListener("click",this.showVid.bind(this),!1);var eX=document.createElement("div");eX.classList.add("rfrd-video-photo"),eX.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eW.appendChild(eX);var eY=document.createElement("div"),eZ=document.createElement("div");eZ.classList.add("rfrd-side-video-name"),eZ.textContent=e.videos[2].videoid.name;var ie=document.createElement("div");ie.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ie.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(ie.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eY.appendChild(eZ),eY.appendChild(ie),eW.appendChild(eY);var ii=document.createElement("div");ii.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ii.setAttribute("data-id",e.videos[2].videoid._id);var id=document.createElement("div");id.classList.add("rfrd-video-flyout-wrap");var it=document.createElement("div");it.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),it.style.paddingTop="56.17021276595745%";let iB=document.createElement("video");iB.classList.add("rfrd-mainvid"),iB.setAttribute("data-id",e.videos[2].videoid._id),iB.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=iB,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var ia=document.createElement("a");ia.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ia.href=e.buttonlink,ia.style.backgroundColor="#"+e.maincolor,ia.setAttribute("target","_blank"),ia.textContent=e.buttoncta,it.appendChild(this.mainvideo3),id.appendChild(it),id.appendChild(ia),ii.appendChild(id);let iD=document.createElement("div");iD.classList.add("rfrd-video-icons");let iI=document.createElement("div");iI.classList.add("rfrdsoundcontainer");let iN=document.createElement("div");iN.classList.add("sound-on"),this.soundon3=iN,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let iR=document.createElement("img");iR.classList.add("rfrd-video-icon"),iR.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iP=document.createElement("div");iP.style.display="none",iP.classList.add("sound-off"),this.soundoff3=iP,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let i9=document.createElement("img");i9.classList.add("rfrd-video-icon"),i9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(iR),this.soundoff3.appendChild(i9),iI.appendChild(this.soundon3),iI.appendChild(this.soundoff3);let iG=document.createElement("div");iG.classList.add("rfrdplaycontainer");let iJ=document.createElement("div");iJ.classList.add("pause-video-block");let iK=document.createElement("img");iK.classList.add("rfrd-video-icon"),iK.style.display="none",iK.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=iK,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let iQ=document.createElement("div");iQ.classList.add("play-video-block");let iW=document.createElement("img");iW.classList.add("rfrd-video-icon"),iW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=iW,this.playimg3.addEventListener("click",this.playVid.bind(this)),iJ.appendChild(this.pauseimg3),iQ.appendChild(this.playimg3),iG.appendChild(iJ),iG.appendChild(iQ);let iX=document.createElement("div"),iY=document.createElement("img");iY.classList.add("rfrd-video-icon"),iY.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=iY,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),iX.appendChild(this.fullscreenimg3),iD.appendChild(iI),iD.appendChild(iG),iD.appendChild(iX),it.appendChild(iD);var iZ=document.createElement("a");iZ.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),iZ.setAttribute("data-id",e.videos[3].videoid._id),iZ.addEventListener("click",this.showVid.bind(this),!1);var de=document.createElement("div");de.classList.add("rfrd-video-photo"),de.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",iZ.appendChild(de);var di=document.createElement("div"),dd=document.createElement("div");dd.classList.add("rfrd-side-video-name"),dd.textContent=e.videos[3].videoid.name;var dt=document.createElement("div");dt.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?dt.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].videoid.jobtitle&&(dt.textContent=e.videos[3].videoid.jobtitle+", "+e.videos[3].videoid.worksat),di.appendChild(dd),di.appendChild(dt),iZ.appendChild(di);var ds=document.createElement("div");ds.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ds.setAttribute("data-id",e.videos[3].videoid._id);var da=document.createElement("div");da.classList.add("rfrd-video-flyout-wrap");var dn=document.createElement("div");dn.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),dn.style.paddingTop="56.17021276595745%";let dr=document.createElement("video");dr.classList.add("rfrd-mainvid"),dr.setAttribute("data-id",e.videos[3].videoid._id),dr.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",this.mainvideo4=dr,this.mainvideo4.innerHTML='<source src="'+e.videos[3].videoid.link+'" data-wf-ignore="true">';var dl=document.createElement("a");dl.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),dl.href=e.buttonlink,dl.style.backgroundColor="#"+e.maincolor,dl.setAttribute("target","_blank"),dl.textContent=e.buttoncta,dn.appendChild(this.mainvideo4),da.appendChild(dn),da.appendChild(dl),ds.appendChild(da);let dc=document.createElement("div");dc.classList.add("rfrd-video-icons");let dp=document.createElement("div");dp.classList.add("rfrdsoundcontainer");let dv=document.createElement("div");dv.classList.add("sound-on"),this.soundon4=dv,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let df=document.createElement("img");df.classList.add("rfrd-video-icon"),df.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dh=document.createElement("div");dh.style.display="none",dh.classList.add("sound-off"),this.soundoff4=dh,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let dm=document.createElement("img");dm.classList.add("rfrd-video-icon"),dm.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(df),this.soundoff4.appendChild(dm),dp.appendChild(this.soundon4),dp.appendChild(this.soundoff4);let db=document.createElement("div");db.classList.add("rfrdplaycontainer");let du=document.createElement("div");du.classList.add("pause-video-block");let dg=document.createElement("img");dg.classList.add("rfrd-video-icon"),dg.style.display="none",dg.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=dg,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let d_=document.createElement("div");d_.classList.add("play-video-block");let dC=document.createElement("img");dC.classList.add("rfrd-video-icon"),dC.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=dC,this.playimg4.addEventListener("click",this.playVid.bind(this)),du.appendChild(this.pauseimg4),d_.appendChild(this.playimg4),db.appendChild(du),db.appendChild(d_);let d0=document.createElement("div"),dE=document.createElement("img");dE.classList.add("rfrd-video-icon"),dE.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=dE,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),d0.appendChild(this.fullscreenimg4),dc.appendChild(dp),dc.appendChild(db),dc.appendChild(d0),dn.appendChild(dc),C.appendChild(k),C.appendChild(Q),C.appendChild(eW),C.appendChild(iZ),E.appendChild(V),E.appendChild(eh),E.appendChild(ii),E.appendChild(ds),_.appendChild(C),_.appendChild(E),$.appendChild(g),$.appendChild(_),u.appendChild($),u.appendChild(L)}if(5==t){var k=document.createElement("a");k.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),k.setAttribute("data-id",e.videos[0].videoid._id),k.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("rfrd-video-photo"),x.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",k.appendChild(x);var S=document.createElement("div"),A=document.createElement("div");A.classList.add("rfrd-side-video-name"),A.textContent=e.videos[0].videoid.name;var j=document.createElement("div");j.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?j.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(j.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(A),S.appendChild(j),k.appendChild(S);var V=document.createElement("div");V.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),V.setAttribute("data-id",e.videos[0].videoid._id);var O=document.createElement("div");O.classList.add("rfrd-video-flyout-wrap");var T=document.createElement("div");T.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),T.style.paddingTop="56.17021276595745%";let d$=document.createElement("video");d$.classList.add("rfrd-mainvid"),d$.setAttribute("data-id",e.videos[0].videoid._id),d$.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=d$,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var M=document.createElement("a");M.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),M.href=e.buttonlink,M.style.backgroundColor="#"+e.maincolor,M.setAttribute("target","_blank"),M.textContent=e.buttoncta,T.appendChild(this.mainvideo1),O.appendChild(T),O.appendChild(M),V.appendChild(O);let d1=document.createElement("div");d1.classList.add("rfrd-video-icons");let dL=document.createElement("div");dL.classList.add("rfrdsoundcontainer");let dy=document.createElement("div");dy.classList.add("sound-on"),this.soundon1=dy,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let d4=document.createElement("img");d4.classList.add("rfrd-video-icon"),d4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dw=document.createElement("div");dw.style.display="none",dw.classList.add("sound-off"),this.soundoff1=dw,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let dk=document.createElement("img");dk.classList.add("rfrd-video-icon"),dk.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(d4),this.soundoff1.appendChild(dk),dL.appendChild(this.soundon1),dL.appendChild(this.soundoff1);let d2=document.createElement("div");d2.classList.add("rfrdplaycontainer");let d7=document.createElement("div");d7.classList.add("pause-video-block");let d5=document.createElement("img");d5.classList.add("rfrd-video-icon"),d5.style.display="none",d5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=d5,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let d3=document.createElement("div");d3.classList.add("play-video-block");let dx=document.createElement("img");dx.classList.add("rfrd-video-icon"),dx.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=dx,this.playimg1.addEventListener("click",this.playVid.bind(this)),d7.appendChild(this.pauseimg1),d3.appendChild(this.playimg1),d2.appendChild(d7),d2.appendChild(d3);let d6=document.createElement("div"),d8=document.createElement("img");d8.classList.add("rfrd-video-icon"),d8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=d8,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),d6.appendChild(this.fullscreenimg1),d1.appendChild(dL),d1.appendChild(d2),d1.appendChild(d6),T.appendChild(d1);var Q=document.createElement("a");Q.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),Q.setAttribute("data-id",e.videos[1].videoid._id),Q.addEventListener("click",this.showVid.bind(this),!1);var W=document.createElement("div");W.classList.add("rfrd-video-photo"),W.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",Q.appendChild(W);var X=document.createElement("div"),Y=document.createElement("div");Y.classList.add("rfrd-side-video-name"),Y.textContent=e.videos[1].videoid.name;var Z=document.createElement("div");Z.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?Z.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(Z.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),X.appendChild(Y),X.appendChild(Z),Q.appendChild(X);var eh=document.createElement("div");eh.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eh.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eb=document.createElement("div");eb.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eb.style.paddingTop="56.17021276595745%";let dS=document.createElement("video");dS.classList.add("rfrd-mainvid"),dS.setAttribute("data-id",e.videos[1].videoid._id),dS.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=dS,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var eg=document.createElement("a");eg.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),eg.href=e.buttonlink,eg.style.backgroundColor="#"+e.maincolor,eg.setAttribute("target","_blank"),eg.textContent=e.buttoncta,eb.appendChild(this.mainvideo2),em.appendChild(eb),em.appendChild(eg),eh.appendChild(em);let dA=document.createElement("div");dA.classList.add("rfrd-video-icons");let dj=document.createElement("div");dj.classList.add("rfrdsoundcontainer");let dV=document.createElement("div");dV.classList.add("sound-on"),this.soundon2=dV,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let dO=document.createElement("img");dO.classList.add("rfrd-video-icon"),dO.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dT=document.createElement("div");dT.style.display="none",dT.classList.add("sound-off"),this.soundoff2=dT,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let dF=document.createElement("img");dF.classList.add("rfrd-video-icon"),dF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(dO),this.soundoff2.appendChild(dF),dj.appendChild(this.soundon2),dj.appendChild(this.soundoff2);let dM=document.createElement("div");dM.classList.add("rfrdplaycontainer");let dH=document.createElement("div");dH.classList.add("pause-video-block");let dz=document.createElement("img");dz.classList.add("rfrd-video-icon"),dz.style.display="none",dz.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=dz,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let dq=document.createElement("div");dq.classList.add("play-video-block");let dU=document.createElement("img");dU.classList.add("rfrd-video-icon"),dU.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=dU,this.playimg2.addEventListener("click",this.playVid.bind(this)),dH.appendChild(this.pauseimg2),dq.appendChild(this.playimg2),dM.appendChild(dH),dM.appendChild(dq);let dB=document.createElement("div"),dD=document.createElement("img");dD.classList.add("rfrd-video-icon"),dD.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=dD,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),dB.appendChild(this.fullscreenimg2),dA.appendChild(dj),dA.appendChild(dM),dA.appendChild(dB),eb.appendChild(dA);var eW=document.createElement("a");eW.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eW.setAttribute("data-id",e.videos[2].videoid._id),eW.addEventListener("click",this.showVid.bind(this),!1);var eX=document.createElement("div");eX.classList.add("rfrd-video-photo"),eX.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eW.appendChild(eX);var eY=document.createElement("div"),eZ=document.createElement("div");eZ.classList.add("rfrd-side-video-name"),eZ.textContent=e.videos[2].videoid.name;var ie=document.createElement("div");ie.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ie.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(ie.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eY.appendChild(eZ),eY.appendChild(ie),eW.appendChild(eY);var ii=document.createElement("div");ii.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ii.setAttribute("data-id",e.videos[2].videoid._id);var id=document.createElement("div");id.classList.add("rfrd-video-flyout-wrap");var it=document.createElement("div");it.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),it.style.paddingTop="56.17021276595745%";let dI=document.createElement("video");dI.classList.add("rfrd-mainvid"),dI.setAttribute("data-id",e.videos[2].videoid._id),dI.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=dI,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var ia=document.createElement("a");ia.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ia.href=e.buttonlink,ia.style.backgroundColor="#"+e.maincolor,ia.setAttribute("target","_blank"),ia.textContent=e.buttoncta,it.appendChild(this.mainvideo3),id.appendChild(it),id.appendChild(ia),ii.appendChild(id);let dN=document.createElement("div");dN.classList.add("rfrd-video-icons");let dR=document.createElement("div");dR.classList.add("rfrdsoundcontainer");let dP=document.createElement("div");dP.classList.add("sound-on"),this.soundon3=dP,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let d9=document.createElement("img");d9.classList.add("rfrd-video-icon"),d9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dG=document.createElement("div");dG.style.display="none",dG.classList.add("sound-off"),this.soundoff3=dG,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let dJ=document.createElement("img");dJ.classList.add("rfrd-video-icon"),dJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(d9),this.soundoff3.appendChild(dJ),dR.appendChild(this.soundon3),dR.appendChild(this.soundoff3);let dK=document.createElement("div");dK.classList.add("rfrdplaycontainer");let dQ=document.createElement("div");dQ.classList.add("pause-video-block");let dW=document.createElement("img");dW.classList.add("rfrd-video-icon"),dW.style.display="none",dW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=dW,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let dX=document.createElement("div");dX.classList.add("play-video-block");let dY=document.createElement("img");dY.classList.add("rfrd-video-icon"),dY.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=dY,this.playimg3.addEventListener("click",this.playVid.bind(this)),dQ.appendChild(this.pauseimg3),dX.appendChild(this.playimg3),dK.appendChild(dQ),dK.appendChild(dX);let dZ=document.createElement("div"),te=document.createElement("img");te.classList.add("rfrd-video-icon"),te.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=te,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),dZ.appendChild(this.fullscreenimg3),dN.appendChild(dR),dN.appendChild(dK),dN.appendChild(dZ),it.appendChild(dN);var iZ=document.createElement("a");iZ.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),iZ.setAttribute("data-id",e.videos[3].videoid._id),iZ.addEventListener("click",this.showVid.bind(this),!1);var de=document.createElement("div");de.classList.add("rfrd-video-photo"),de.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",iZ.appendChild(de);var di=document.createElement("div"),dd=document.createElement("div");dd.classList.add("rfrd-side-video-name"),dd.textContent=e.videos[3].videoid.name;var dt=document.createElement("div");dt.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?dt.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].videoid.jobtitle&&(dt.textContent=e.videos[3].videoid.jobtitle+", "+e.videos[3].videoid.worksat),di.appendChild(dd),di.appendChild(dt),iZ.appendChild(di);var ds=document.createElement("div");ds.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ds.setAttribute("data-id",e.videos[3].videoid._id);var da=document.createElement("div");da.classList.add("rfrd-video-flyout-wrap");var dn=document.createElement("div");dn.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),dn.style.paddingTop="56.17021276595745%";let ti=document.createElement("video");ti.classList.add("rfrd-mainvid"),ti.setAttribute("data-id",e.videos[3].videoid._id),ti.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",this.mainvideo4=ti,this.mainvideo4.innerHTML='<source src="'+e.videos[3].videoid.link+'" data-wf-ignore="true">';var dl=document.createElement("a");dl.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),dl.href=e.buttonlink,dl.style.backgroundColor="#"+e.maincolor,dl.setAttribute("target","_blank"),dl.textContent=e.buttoncta,dn.appendChild(this.mainvideo4),da.appendChild(dn),da.appendChild(dl),ds.appendChild(da);let td=document.createElement("div");td.classList.add("rfrd-video-icons");let tt=document.createElement("div");tt.classList.add("rfrdsoundcontainer");let ts=document.createElement("div");ts.classList.add("sound-on"),this.soundon4=ts,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let ta=document.createElement("img");ta.classList.add("rfrd-video-icon"),ta.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tn=document.createElement("div");tn.style.display="none",tn.classList.add("sound-off"),this.soundoff4=tn,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let tr=document.createElement("img");tr.classList.add("rfrd-video-icon"),tr.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(ta),this.soundoff4.appendChild(tr),tt.appendChild(this.soundon4),tt.appendChild(this.soundoff4);let tl=document.createElement("div");tl.classList.add("rfrdplaycontainer");let to=document.createElement("div");to.classList.add("pause-video-block");let tc=document.createElement("img");tc.classList.add("rfrd-video-icon"),tc.style.display="none",tc.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=tc,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let tp=document.createElement("div");tp.classList.add("play-video-block");let tv=document.createElement("img");tv.classList.add("rfrd-video-icon"),tv.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=tv,this.playimg4.addEventListener("click",this.playVid.bind(this)),to.appendChild(this.pauseimg4),tp.appendChild(this.playimg4),tl.appendChild(to),tl.appendChild(tp);let tf=document.createElement("div"),th=document.createElement("img");th.classList.add("rfrd-video-icon"),th.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=th,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),tf.appendChild(this.fullscreenimg4),td.appendChild(tt),td.appendChild(tl),td.appendChild(tf),dn.appendChild(td);var tm=document.createElement("a");tm.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),tm.setAttribute("data-id",e.videos[4].videoid._id),tm.addEventListener("click",this.showVid.bind(this),!1);var tb=document.createElement("div");tb.classList.add("rfrd-video-photo"),tb.style="background-image:url('"+e.videos[4].videoid.screengrab+"')",tm.appendChild(tb);var tu=document.createElement("div"),tg=document.createElement("div");tg.classList.add("rfrd-side-video-name"),tg.textContent=e.videos[4].videoid.name;var t_=document.createElement("div");t_.classList.add("rfrd-side-video-title"),e.videos[4].featuredid?t_.textContent=e.videos[4].featuredid.jobtitle+", "+e.videos[4].featuredid.worksat:e.videos[4].videoid.jobtitle&&(t_.textContent=e.videos[4].videoid.jobtitle+", "+e.videos[4].videoid.worksat),tu.appendChild(tg),tu.appendChild(t_),tm.appendChild(tu);var tC=document.createElement("div");tC.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),tC.setAttribute("data-id",e.videos[4].videoid._id);var t0=document.createElement("div");t0.classList.add("rfrd-video-flyout-wrap");var tE=document.createElement("div");tE.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),tE.style.paddingTop="56.17021276595745%";let t$=document.createElement("video");t$.classList.add("rfrd-mainvid"),t$.setAttribute("data-id",e.videos[4].videoid._id),t$.style="background-image:url('"+e.videos[4].videoid.screengrab+"')",this.mainvideo5=t$,this.mainvideo5.innerHTML='<source src="'+e.videos[4].videoid.link+'" data-wf-ignore="true">';var t1=document.createElement("a");t1.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),t1.href=e.buttonlink,t1.style.backgroundColor="#"+e.maincolor,t1.setAttribute("target","_blank"),t1.textContent=e.buttoncta,tE.appendChild(this.mainvideo5),t0.appendChild(tE),t0.appendChild(t1),tC.appendChild(t0);let tL=document.createElement("div");tL.classList.add("rfrd-video-icons");let ty=document.createElement("div");ty.classList.add("rfrdsoundcontainer");let t4=document.createElement("div");t4.classList.add("sound-on"),this.soundon5=t4,this.soundon5.addEventListener("click",this.toggleSoundOn.bind(this));let tw=document.createElement("img");tw.classList.add("rfrd-video-icon"),tw.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tk=document.createElement("div");tk.style.display="none",tk.classList.add("sound-off"),this.soundoff5=tk,this.soundoff5.addEventListener("click",this.toggleSoundOff.bind(this));let t2=document.createElement("img");t2.classList.add("rfrd-video-icon"),t2.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon5.appendChild(tw),this.soundoff5.appendChild(t2),ty.appendChild(this.soundon5),ty.appendChild(this.soundoff5);let t7=document.createElement("div");t7.classList.add("rfrdplaycontainer");let t5=document.createElement("div");t5.classList.add("pause-video-block");let t3=document.createElement("img");t3.classList.add("rfrd-video-icon"),t3.style.display="none",t3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg5=t3,this.pauseimg5.addEventListener("click",this.pauseVid.bind(this));let tx=document.createElement("div");tx.classList.add("play-video-block");let t6=document.createElement("img");t6.classList.add("rfrd-video-icon"),t6.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg5=t6,this.playimg5.addEventListener("click",this.playVid.bind(this)),t5.appendChild(this.pauseimg5),tx.appendChild(this.playimg5),t7.appendChild(t5),t7.appendChild(tx);let t8=document.createElement("div"),tS=document.createElement("img");tS.classList.add("rfrd-video-icon"),tS.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg5=tS,this.fullscreenimg5.addEventListener("click",this.toggleFullScreen.bind(this)),t8.appendChild(this.fullscreenimg5),tL.appendChild(ty),tL.appendChild(t7),tL.appendChild(t8),tE.appendChild(tL),C.appendChild(k),C.appendChild(Q),C.appendChild(eW),C.appendChild(iZ),C.appendChild(tm),E.appendChild(V),E.appendChild(eh),E.appendChild(ii),E.appendChild(ds),E.appendChild(tC),_.appendChild(C),_.appendChild(E),$.appendChild(g),$.appendChild(_),u.appendChild($),u.appendChild(L)}this.messageContainer.appendChild(i),this.messageContainer.appendChild(u)}submit(e){e.preventDefault(),e.srcElement.querySelector("#email").value,e.srcElement.querySelector("#message").value,this.messageContainer.innerHTML='<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry'}toggleOpen(){this.open=!this.open,this.container.style="height: auto",this.buttonContainer.classList.add("rfrd-hidden"),this.messageContainer.classList.remove("rfrd-hidden")}toggleClose(){this.container.style="height: 0px",this.buttonContainer.classList.remove("rfrd-hidden"),this.messageContainer.classList.add("rfrd-hidden"),this.playimg.removeAttribute("style"),this.pauseimg.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.firstChild.firstChild.firstChild.pause(),e.firstChild.firstChild.firstChild.currentTime=0,e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none"})}toggleSoundOn(e){e.target.closest(".rfrdsoundcontainer").lastChild.removeAttribute("style"),e.target.closest(".sound-on").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&(e.firstChild.firstChild.firstChild.muted=!e.firstChild.firstChild.firstChild.muted)})}toggleSoundOff(e){e.target.closest(".rfrdsoundcontainer").firstChild.removeAttribute("style"),e.target.closest(".sound-off").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&(e.firstChild.firstChild.firstChild.muted=!e.firstChild.firstChild.firstChild.muted)})}toggleFullScreen(){document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.requestFullscreen()})}playVid(e){e.target.closest(".rfrdplaycontainer").firstChild.firstChild.removeAttribute("style"),e.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.play()})}pauseVid(e){e.target.closest(".rfrdplaycontainer").lastChild.firstChild.removeAttribute("style"),e.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.pause()})}showVid(e){var i=e.target.closest(".rfrd-video-row").getAttribute("data-id");document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){i==e.getAttribute("data-id")?(e.classList.add("rfrd-w--tab-active"),e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",e.firstChild.firstChild.firstChild.pause(),e.currentTime=0):(e.classList.remove("rfrd-w--tab-active"),e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",e.firstChild.firstChild.firstChild.pause(),e.currentTime=0)})}};
