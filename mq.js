new class{constructor(){this.initalise()}async initalise(){async function e(e){let t=await fetch("https://app.rfrd.io/read/mq/"+e).then(e=>e.json());return t}let t=document.getElementById("rfrd-widget"),i=t.dataset.id;var r=await e(i);console.log("magicq:",r);var a=document.getElementById("embed-mq-new");let d=document.createElement("section");d.classList.add("rfrd-testimonial");let s=document.createElement("div");s.classList.add("rfrd-testimonial__container","rfrd-w-container");let o=document.createElement("blockquote");o.classList.add("rfrd-blockquote","rfrd-testimonial__container__block-quote-copy"),o.textContent=r.userquote;let l=document.createElement("div");l.classList.add("rfrd-testimonial__container__details");let n=document.createElement("div");n.classList.add("rfrd-testimonial-video-thumb","w-background-video","w-background-video-atom","rfrd-testimonial__details__avatar"),n.setAttribute("data-video-urls",r.video.link),n.setAttribute("data-autoplay","true"),n.setAttribute("data-loop","true"),n.setAttribute("data-wf-ignore","true"),n.style.width="70",n.style.height="70",this.testimonialvideothumbnew=n,this.testimonialvideothumbnew.addEventListener("click",this.showVid.bind(this),!1),this.testimonialvideothumbnew.setAttribute("data-id",r.video.videoid._id);let c=document.createElement("video");c.style.width="70",c.style.height="70",c.style="background-image:url('"+r.video.screengrab+"')",c.autoplay=!0,c.loop=!0,c.muted=!0,c.playsinline=!0,this.videogifynew=c,this.videogifynew.innerHTML='<source src="'+r.video.link+'" data-wf-ignore="true">',this.testimonialvideothumbnew.appendChild(this.videogifynew);let f=document.createElement("div");f.classList.add("rfrd-testimonial__details__meta");let p=document.createElement("div");p.classList.add("rfrd-testimonial__details__meta__name"),p.textContent=r.username;let h=document.createElement("div");h.classList.add("rfrd-testimonial__details__meta__function"),h.textContent=r.usertitle+", "+r.usercompany,f.appendChild(p),f.appendChild(h),l.appendChild(this.testimonialvideothumbnew),l.appendChild(f),s.appendChild(o),s.appendChild(l),d.appendChild(s),a.appendChild(d),this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("rfrd-hidden","rfrd-activated");let m=document.createElement("div");m.classList.add("rfrd-page-bg"),m.addEventListener("click",this.toggleClose.bind(this));let b=document.createElement("div");m.appendChild(b),this.messageContainer.appendChild(m);let $=document.createElement("div");$.classList.add("rfrd-cheer-wrap"),$.id="cheer-wrap";let g=document.createElement("div");g.classList.add("rfrd-side-cheer-header");let u=document.createElement("div");u.classList.add("video-tabs","rfrd-w-tabs");let x=document.createElement("div");x.classList.add("video-tabs-menu","rfrd-w-tab-menu");let v=document.createElement("div");v.classList.add("rfrd-tabs-content","rfrd-w-tab-content");let w=document.createElement("div");w.classList.add("rfrd-videos-top");var y=document.createElement("div");y.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),y.setAttribute("data-id",r.video.videoid._id);var _=document.createElement("div");_.classList.add("rfrd-video-flyout-wrap");var k=document.createElement("div");k.classList.add("rfrd-video-play","rfrd-w-video","rfrd-w-embed"),k.style.marginTop="20%";let C=document.createElement("video");C.classList.add("rfrd-mainvid"),C.setAttribute("data-id",r.video.videoid._id),C.style="background-image:url('"+r.video.link+"')",this.mainvideo1=C,this.mainvideo1.innerHTML='<source src="'+r.video.link+'" data-wf-ignore="true">',k.appendChild(this.mainvideo1),_.appendChild(k),y.appendChild(_);let E=document.createElement("div");E.classList.add("rfrd-video-icons");let L=document.createElement("div");L.classList.add("rfrdsoundcontainer");let A=document.createElement("div");A.classList.add("rfrd-sound-on"),this.soundon1=A,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let S=document.createElement("img");S.classList.add("rfrd-video-icon"),S.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let q=document.createElement("div");q.style.display="none",q.classList.add("rfrd-sound-off"),this.soundoff1=q,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let j=document.createElement("img");j.classList.add("rfrd-video-icon"),j.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(S),this.soundoff1.appendChild(j),L.appendChild(this.soundon1),L.appendChild(this.soundoff1);let z=document.createElement("div");z.classList.add("rfrdplaycontainer");let T=document.createElement("div");T.classList.add("rfrd-pause-video-block");let O=document.createElement("img");O.classList.add("rfrd-video-icon"),O.style.display="none",O.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=O,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let V=document.createElement("div");V.classList.add("rfrd-play-video-block");let F=document.createElement("img");F.classList.add("rfrd-video-icon"),F.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=F,this.playimg1.addEventListener("click",this.playVid.bind(this)),T.appendChild(this.pauseimg1),V.appendChild(this.playimg1),z.appendChild(T),z.appendChild(V);let H=document.createElement("div"),M=document.createElement("img");M.classList.add("rfrd-video-icon"),M.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=M,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),H.appendChild(this.fullscreenimg1),E.appendChild(L),E.appendChild(z),E.appendChild(H),k.appendChild(E),v.appendChild(y),this.messageContainer.appendChild(v);let B=document.createElement("div");B.classList.add("rfrd-overlay-wrapper"),B.style="transform-style: preserve-3d; display: none; transition: transform 240ms ease 0s, opacity 240ms ease 0s; opacity: 0; transform: scaleX(1.05) scaleY(1.05) scaleZ(1);",this.modalbackground=B,this.modalbackground.appendChild(this.messageContainer),document.body.appendChild(B),this.createStyles(r)}createStyles(e){let t=document.createElement("style");t.innerHTML=`
          .rfrd-testimonial-video-thumb {
            /* left: -20px; */
            z-index: 99;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 90px;
            height: 90px;
            margin-right: -5px;
            /* padding-bottom: 15px; */
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: end;
            -webkit-align-items: flex-end;
            -ms-flex-align: end;
            align-items: flex-end;
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 auto;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            border-radius: 100px;
            -webkit-transition: color 240ms ease;
            transition: color 240ms ease;
            color: rgba(255, 255, 255, 0.5);
            font-size: 15px;
            text-align: center;
            text-decoration: none;
          }
          .w-background-video {
            position: relative;
            overflow: hidden;
            height: 500px;
            color: white;
          }
          .w-background-video > video {
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
          .rfrd-w-container {
            margin-left: auto;
            margin-right: auto;
            max-width: 940px;
          }
          .rfrd-testimonial__container {
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: end;
            -webkit-align-items: flex-end;
            -ms-flex-align: end;
            align-items: flex-end;
          }
          .rfrd-blockquote {
            margin: 25px 0;
            padding: 15px 30px;
            border-left: 5px solid #e2e2e2;
            font-size: 20px;
            line-height: 34px;
          }
          .rfrd-testimonial__container__block-quote-copy {
            position: relative;
            margin: 0;
            padding: 80px 80px 32px;
            -webkit-align-self: stretch;
            -ms-flex-item-align: stretch;
            -ms-grid-row-align: stretch;
            align-self: stretch;
            border-left-style: none;
            background-color: #${e.maincolor};
            font-family: neue-haas-grotesk-display,sans-serif;
            color: #${e.secondarycolor};
            font-size: 24px;
            line-height: 110%;
            font-weight: 600;
          }
          .rfrd-testimonial__container__details {
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            padding-right: 80px;
            padding-bottom: 80px;
            padding-left: 80px;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-align-self: stretch;
            -ms-flex-item-align: stretch;
            align-self: stretch;
            background-color: #${e.maincolor};
          }
          .rfrd-testimonial__details__avatar {
            width: 90px;
            height: 90px;
            margin-right: 30px;
            border-radius: 80px;
          }
          .rfrd-testimonial__details__meta {
            display: block;
            color: #${e.secondarycolor};
            font-size: 18px;
            font-weight: 400;
          }
          .rfrd-testimonial__details__meta__name {
            font-family: neue-haas-grotesk-text,sans-serif;
            font-weight: 700;
          }
          .rfrd-overlay-wrapper {
            position: fixed;
            left: 0%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            z-index: 9000;
            display: none;
            overflow: scroll;
            padding-top: 30px;
            padding-bottom: 30px;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: start;
            -webkit-align-items: flex-start;
            -ms-flex-align: start;
            align-items: flex-start;
            background-color: rgba(33, 36, 65, 0.7);
            opacity: 0;
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
          }
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
          .rfrd-background-video {
            position: relative;
            overflow: hidden;
            height: 500px;
            color: white;
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
          .rfrd-video-flyout-wrap {
            width: 400px;
          }
          .rfrd-hidden-new {
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
            // position: absolute;
            // left: 310px;
            // top: -42px;
            // right: 0%;
            // bottom: auto;
            // width: 400px;
            // height: auto;
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
            // width: 400px;
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
            .rfrd-testimonial-video-thumb {
              width: 170px;
              height: 170px;
            }
            .testimonial {
              width: 100%;
            }
            .rfrd-testimonial__container {
              max-width: 100%;
            }
            .rfrd-testimonial__container__block-quote-copy {
              padding-top: 60px;
              padding-right: 40px;
              padding-left: 40px;
            }
            .rfrd-testimonial__container__details {
              padding-right: 40px;
              padding-bottom: 50px;
              padding-left: 40px;
            }
            .rfrd-testimonial__details__avatar {
              width: 60px;
              height: 60px;
            }
          }
          @media screen and (max-width: 479px) {
            .rfrd-testimonial-video-thumb {
              left: 0px;
              margin-right: 0px;
            }
            .rfrd-cheer-wrapper {
              width: 100%;
              padding-right: 10px;
            }
            .rfrd-cheer-wrap {
              width: 100%;
            }
            .rfrd-videos-top {
              height: auto;
            }
            .rfrd-tabs-content {
              // left: 0%;
              // top: -354px;
              // right: auto;
              // bottom: auto;
              // width: 100%;
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
            .rfrd-w-video {
              width: 100%;
            } 
          }  
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(t)}toggleOpen(){this.open=!this.open,this.buttonContainer.classList.add("rfrd-hidden-new"),this.messageContainer.classList.remove("rfrd-hidden-new")}toggleClose(){this.modalbackground.style="transform-style: preserve-3d; display: none; transition: transform 240ms ease 0s, opacity 240ms ease 0s; opacity: 0; transform: scaleX(1.05) scaleY(1.05) scaleZ(1);",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.firstChild.firstChild.firstChild.pause(),e.firstChild.firstChild.firstChild.currentTime=0,e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none"})}toggleSoundOn(e){e.target.closest(".rfrdsoundcontainer").lastChild.removeAttribute("style"),e.target.closest(".rfrd-sound-on").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&(e.firstChild.firstChild.firstChild.muted=!e.firstChild.firstChild.firstChild.muted)})}toggleSoundOff(e){e.target.closest(".rfrdsoundcontainer").firstChild.removeAttribute("style"),e.target.closest(".rfrd-sound-off").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&(e.firstChild.firstChild.firstChild.muted=!e.firstChild.firstChild.firstChild.muted)})}toggleFullScreen(){document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.requestFullscreen()})}playVid(e){e.target.closest(".rfrdplaycontainer").firstChild.firstChild.removeAttribute("style"),e.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.play()})}pauseVid(e){e.target.closest(".rfrdplaycontainer").lastChild.firstChild.removeAttribute("style"),e.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.pause()})}showVid(e){var t=e.target.closest(".rfrd-testimonial-video-thumb").getAttribute("data-id");console.log(t);var i=document.querySelectorAll(".rfrd-video-tab-pane"),r=document.querySelector(".rfrd-overlay-wrapper");console.log("background:",r),r.style="transform-style: preserve-3d; display: flex; transition: transform 240ms ease 0s, opacity 240ms ease 0s; opacity: 1; transform: scaleX(1) scaleY(1) scaleZ(1);",i.forEach(function(e){t==e.getAttribute("data-id")?(e.classList.add("rfrd-w--tab-active"),e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",e.firstChild.firstChild.firstChild.pause(),e.currentTime=0):(e.classList.remove("rfrd-w--tab-active"),e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",e.firstChild.firstChild.firstChild.pause(),e.currentTime=0)})}};
