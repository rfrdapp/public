new class t{constructor(){this.initalise()}async initalise(){async function t(t){let e=await fetch("https://app.rfrd.io/read/mq/"+t).then(t=>t.json());return e}let e=document.getElementsByClassName("embed-mq-class");console.log("vid:",e),console.log("vid.length:",e.length);for(let i=0;i<e.length;i++){console.log('vid[index].getAttribute("data-id"):',e[i].getAttribute("data-id"));var a=await t(e[i].getAttribute("data-id"));console.log("magicq:",a);var s=e[i];let d=document.createElement("section");d.classList.add("rfrd-testimonial"),this.testimonialblock=d;let r=document.createElement("div");r.classList.add("rfrd-testimonial__container","rfrd-w-container"),this.testimonialcontainer=r;let o=document.createElement("blockquote");o.classList.add("rfrd-blockquote","rfrd-testimonial__container__block-quote-copy"),o.textContent=a.userquote,this.blockquote=o,this.blockquote.style.backgroundColor="#"+a.maincolor,this.blockquote.style.color="#"+a.secondarycolor;let n=document.createElement("div");n.classList.add("rfrd-testimonial__container__details"),this.testimonialcontainerdetails=n,this.testimonialcontainerdetails.style.backgroundColor="#"+a.maincolor;let l=document.createElement("div");l.classList.add("rfrd-testimonial-video-thumb","w-background-video","w-background-video-atom","rfrd-testimonial__details__avatar"),l.setAttribute("data-video-urls",a.video.link),l.setAttribute("data-autoplay","true"),l.setAttribute("data-loop","true"),l.setAttribute("data-wf-ignore","true"),l.style.width="70",l.style.height="70",this.testimonialvideothumbnew=l,this.testimonialvideothumbnew.addEventListener("click",this.showVid.bind(this),!1),this.testimonialvideothumbnew.setAttribute("data-id",a.video.videoid._id);let c=document.createElement("video");c.style.width="70",c.style.height="70",c.style="background-image:url('"+a.video.screengrab+"')",c.autoplay=!0,c.loop=!0,c.muted=!0,c.playsinline=!0,this.videogifynew=c,this.videogifynew.innerHTML='<source src="'+a.video.link+'" data-wf-ignore="true">',this.testimonialvideothumbnew.appendChild(this.videogifynew);let p=document.createElement("div");p.classList.add("rfrd-testimonial__details__meta"),this.testimonialdetailsmeta=p,this.testimonialdetailsmeta.style.color="#"+a.secondarycolor;let f=document.createElement("div");f.classList.add("rfrd-testimonial__details__meta__name"),f.textContent=a.username,this.testimonialdetailsname=f;let h=document.createElement("div");h.classList.add("rfrd-testimonial__details__meta__function"),h.textContent=a.usertitle+", "+a.usercompany,this.testimonialdetailsjob=h,this.testimonialdetailsmeta.appendChild(this.testimonialdetailsname),this.testimonialdetailsmeta.appendChild(this.testimonialdetailsjob),this.testimonialcontainerdetails.appendChild(this.testimonialvideothumbnew),this.testimonialcontainerdetails.appendChild(this.testimonialdetailsmeta),this.testimonialcontainer.appendChild(this.blockquote),this.testimonialcontainer.appendChild(this.testimonialcontainerdetails),this.testimonialblock.appendChild(this.testimonialcontainer),s.appendChild(this.testimonialblock),this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("rfrd-hidden","rfrd-activated");let m=document.createElement("div");m.classList.add("rfrd-page-bg"),this.pagebg=m,this.pagebg.addEventListener("click",this.toggleClose.bind(this));let b=document.createElement("div");this.divinsidepagebg=b,this.pagebg.appendChild(this.divinsidepagebg),this.messageContainer.appendChild(this.pagebg);let g=document.createElement("div");g.classList.add("rfrd-cheer-wrap"),g.id="cheer-wrap",this.cheerwrap=g;let $=document.createElement("div");$.classList.add("rfrd-side-cheer-header"),this.cheerheader=$;let u=document.createElement("div");u.classList.add("video-tabs","rfrd-w-tabs"),this.videotabs=u;let v=document.createElement("div");v.classList.add("video-tabs-menu","rfrd-w-tab-menu"),this.videotabsmenu=v;let x=document.createElement("div");x.classList.add("rfrd-tabs-content","rfrd-w-tab-content"),this.tabscontent=x;let y=document.createElement("div");y.classList.add("rfrd-videos-top"),this.videosTop=y;var w=document.createElement("div");w.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),this.videotabOne=w,this.videotabOne.setAttribute("data-id",a.video.videoid._id);var _=document.createElement("div");_.classList.add("rfrd-video-flyout-wrap"),this.videoflyoutOne=_;var k=document.createElement("div");k.classList.add("rfrd-video-play","rfrd-w-video","rfrd-w-embed"),k.style.marginTop="20%",this.videoembedOne=k;let C=document.createElement("video");C.classList.add("rfrd-mainvid"),this.mainvideo1=C,this.mainvideo1.setAttribute("data-id",a.video.videoid._id),this.mainvideo1.style="background-image:url('"+a.video.link+"')",this.mainvideo1.innerHTML='<source src="'+a.video.link+'" data-wf-ignore="true">',this.videoembedOne.appendChild(this.mainvideo1),this.videoflyoutOne.appendChild(this.videoembedOne),this.videotabOne.appendChild(this.videoflyoutOne);let E=document.createElement("div");E.classList.add("rfrd-video-icons"),this.videoicons1=E;let L=document.createElement("div");L.classList.add("rfrdsoundcontainer"),this.soundcontainer1=L;let A=document.createElement("div");A.classList.add("rfrd-sound-on"),this.soundon1=A,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let q=document.createElement("img");q.classList.add("rfrd-video-icon"),this.soundonimg1=q,this.soundonimg1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let j=document.createElement("div");j.classList.add("rfrd-sound-off"),this.soundoff1=j,this.soundoff1.style.display="none",this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let S=document.createElement("img");S.classList.add("rfrd-video-icon"),this.soundoffimg1=S,this.soundoffimg1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(this.soundonimg1),this.soundoff1.appendChild(this.soundoffimg1),this.soundcontainer1.appendChild(this.soundon1),this.soundcontainer1.appendChild(this.soundoff1);let z=document.createElement("div");z.classList.add("rfrdplaycontainer"),this.playcontainer1=z;let O=document.createElement("div");O.classList.add("rfrd-pause-video-block"),this.pause1=O;let T=document.createElement("img");T.classList.add("rfrd-video-icon"),this.pauseimg1=T,this.pauseimg1.style.display="none",this.pauseimg1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let V=document.createElement("div");V.classList.add("rfrd-play-video-block"),this.play1=V;let F=document.createElement("img");F.classList.add("rfrd-video-icon"),this.playimg1=F,this.playimg1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1.addEventListener("click",this.playVid.bind(this)),this.pause1.appendChild(this.pauseimg1),this.play1.appendChild(this.playimg1),this.playcontainer1.appendChild(this.pause1),this.playcontainer1.appendChild(this.play1);let B=document.createElement("div");this.fullscreencontainer1=B;let H=document.createElement("img");H.classList.add("rfrd-video-icon"),this.fullscreenimg1=H,this.fullscreenimg1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),this.fullscreencontainer1.appendChild(this.fullscreenimg1),this.videoicons1.appendChild(this.soundcontainer1),this.videoicons1.appendChild(this.playcontainer1),this.videoicons1.appendChild(this.fullscreencontainer1),this.videoembedOne.appendChild(this.videoicons1),this.tabscontent.appendChild(this.videotabOne),this.messageContainer.appendChild(this.tabscontent);let M=document.createElement("div");M.classList.add("rfrd-overlay-wrapper"),this.modalbackground=M,this.modalbackground.style="transform-style: preserve-3d; display: none; transition: transform 240ms ease 0s, opacity 240ms ease 0s; opacity: 0; transform: scaleX(1.05) scaleY(1.05) scaleZ(1);",this.modalbackground.setAttribute("data-id",a.video.videoid._id),this.modalbackground.appendChild(this.messageContainer),document.body.appendChild(this.modalbackground)}this.createStyles(a)}createStyles(t){let e=document.createElement("style");e.innerHTML=`
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
            background-color: #${t.maincolor};
            font-family: neue-haas-grotesk-display,sans-serif;
            color: #${t.secondarycolor};
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
            background-color: #${t.maincolor};
          }
          .rfrd-testimonial__details__avatar {
            width: 90px;
            height: 90px;
            margin-right: 30px;
            border-radius: 80px;
          }
          .rfrd-testimonial__details__meta {
            display: block;
            color: #${t.secondarycolor};
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
            .rfrd-activated {
              display: block;
              transition: opacity 360ms ease 0s;
              opacity: 1;
              width: 100%;
            }
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
            .rfrd-testimonial__container__details {
              padding-right: 24px;
              padding-bottom: 40px;
              padding-left: 24px;
            }
            .rfrd-testimonial__details__avatar {
              margin-right: 16px;
            }
            .rfrd-testimonial__container__block-quote-copy {
              padding: 40px 24px 20px;
              font-size: 28px;
            }
            .rfrd-testimonial__container {
              -webkit-box-align: stretch;
              -webkit-align-items: stretch;
              -ms-flex-align: stretch;
              align-items: stretch;
            }
            .rfrd-testimonial__details__meta {
              line-height: 130%;
              text-align: left;
            }
          }  
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}toggleClose(){console.log("clicked on toggle close"),console.log("this.modalbackground:",this.modalbackground);var t=document.getElementsByClassName("rfrd-overlay-wrapper");console.log("modalbackground:",t);for(let e=0;e<t.length;e++)t[e].style="transform-style: preserve-3d; display: none; transition: transform 240ms ease 0s, opacity 240ms ease 0s; opacity: 0; transform: scaleX(1.05) scaleY(1.05) scaleZ(1);";document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(t){t.firstChild.firstChild.firstChild.pause(),t.firstChild.firstChild.firstChild.currentTime=0,t.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),t.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none"})}toggleSoundOn(t){t.target.closest(".rfrdsoundcontainer").lastChild.removeAttribute("style"),t.target.closest(".rfrd-sound-on").style.display="none";var e=t.target.closest(".rfrd-video-tab-pane").getAttribute("data-id");document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(t){t.classList.contains("rfrd-w--tab-active")&&t.getAttribute("data-id")==e&&(t.firstChild.firstChild.firstChild.muted=!t.firstChild.firstChild.firstChild.muted)})}toggleSoundOff(t){t.target.closest(".rfrdsoundcontainer").firstChild.removeAttribute("style"),t.target.closest(".rfrd-sound-off").style.display="none";var e=t.target.closest(".rfrd-video-tab-pane").getAttribute("data-id");document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(t){t.classList.contains("rfrd-w--tab-active")&&t.getAttribute("data-id")==e&&(t.firstChild.firstChild.firstChild.muted=!t.firstChild.firstChild.firstChild.muted)})}toggleFullScreen(){var t=event.target.closest(".rfrd-video-tab-pane").getAttribute("data-id");document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.getAttribute("data-id")==t&&e.firstChild.firstChild.firstChild.requestFullscreen()})}playVid(t){t.target.closest(".rfrdplaycontainer").firstChild.firstChild.removeAttribute("style"),t.target.style.display="none";var e=t.target.closest(".rfrd-video-tab-pane").getAttribute("data-id");document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(t){t.classList.contains("rfrd-w--tab-active")&&t.getAttribute("data-id")==e&&t.firstChild.firstChild.firstChild.play()})}pauseVid(t){t.target.closest(".rfrdplaycontainer").lastChild.firstChild.removeAttribute("style"),t.target.style.display="none";var e=t.target.closest(".rfrd-video-tab-pane").getAttribute("data-id");document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(t){t.classList.contains("rfrd-w--tab-active")&&t.getAttribute("data-id")==e&&t.firstChild.firstChild.firstChild.pause()})}showVid(t){var e=t.target.closest(".rfrd-testimonial-video-thumb").getAttribute("data-id");console.log("videoid:",e);var i=document.getElementsByClassName("rfrd-overlay-wrapper");for(let a=0;a<i.length;a++)e==i[a].getAttribute("data-id")&&(console.log("suppppppppppp"),i[a].style="transform-style: preserve-3d; display: flex; transition: transform 240ms ease 0s, opacity 240ms ease 0s; opacity: 1; transform: scaleX(1) scaleY(1) scaleZ(1);")}};
