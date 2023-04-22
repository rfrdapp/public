new class t{constructor(){this.initalise()}async initalise(){async function t(t){let e=await fetch("https://app.rfrd.io/read/mq/"+t).then(t=>t.json());return e}let e=document.getElementsByClassName("embed-mq-class");console.log("vid:",e),console.log("vid.length:",e.length);for(let i=0;i<e.length;i++){console.log('vid[index].getAttribute("data-id"):',e[i].getAttribute("data-id"));var a=await t(e[i].getAttribute("data-id"));console.log("magicq:",a);var s=e[i];let r=document.createElement("section");r.classList.add("rfrdmq-testimonial"),this.testimonialblock=r;let d=document.createElement("div");d.classList.add("rfrdmq-testimonial__container","rfrdmq-w-container"),this.testimonialcontainer=d;let o=document.createElement("blockquote");o.classList.add("rfrdmq-blockquote","rfrdmq-testimonial__container__block-quote-copy"),o.textContent=a.userquote,this.blockquote=o,this.blockquote.style.backgroundColor="#"+a.maincolor,this.blockquote.style.color="#"+a.secondarycolor;let n=document.createElement("div");n.classList.add("rfrdmq-testimonial__container__details"),this.testimonialcontainerdetails=n,this.testimonialcontainerdetails.style.backgroundColor="#"+a.maincolor;let l=document.createElement("div");l.classList.add("rfrdmq-cheer-background-video"),this.testimonialvideothumbcontainer=l,this.testimonialvideothumbcontainer.addEventListener("click",this.showVid.bind(this),!1),this.testimonialvideothumbcontainer.setAttribute("data-id",a.video.videoid._id),this.testimonialvideothumbcontainer.style="background-image:url('"+a.video.screengrab+"')";let c=document.createElement("div");c.classList.add("rfrdmq-testimonial-video-thumb","rfrdmq-w-background-video","rfrdmq-w-background-video-atom","rfrdmq-testimonial__details__avatar"),c.setAttribute("data-video-urls",a.video.link),c.setAttribute("data-autoplay","true"),c.setAttribute("data-loop","true"),c.setAttribute("data-wf-ignore","true"),c.style.width="70",c.style.height="70",this.testimonialvideothumbnew=c;let m=document.createElement("video");m.style.width="70",m.style.height="70",m.style="background-image:url('"+a.video.screengrab+"')",m.autoplay=!0,m.loop=!0,m.muted=!0,m.playsinline=!0,this.videogifynew=m,this.videogifynew.innerHTML='<source src="'+a.video.link+'" data-wf-ignore="true">',this.testimonialvideothumbnew.appendChild(this.videogifynew);let p=document.createElement("div");p.classList.add("rfrdmq-testimonial__details__meta"),this.testimonialdetailsmeta=p,this.testimonialdetailsmeta.style.color="#"+a.secondarycolor;let h=document.createElement("div");h.classList.add("rfrdmq-testimonial__details__meta__name"),h.textContent=a.username,this.testimonialdetailsname=h;let f=document.createElement("div");f.classList.add("rfrdmq-testimonial__details__meta__function"),f.textContent=a.usertitle+", "+a.usercompany,this.testimonialdetailsjob=f;let b=document.createElement("img");b.classList.add("rfrdmq-watchtheirquickvideo"),this.watchtheirquickvideo=b,this.watchtheirquickvideo.src="https://refurrys.s3.us-west-1.amazonaws.com/public/Watchtheirquickvideo.png",this.testimonialdetailsmeta.appendChild(this.testimonialdetailsname),this.testimonialdetailsmeta.appendChild(this.testimonialdetailsjob),this.testimonialvideothumbcontainer.appendChild(this.testimonialvideothumbnew),this.testimonialcontainerdetails.appendChild(this.testimonialvideothumbcontainer),this.testimonialcontainerdetails.appendChild(this.testimonialdetailsmeta),this.testimonialcontainerdetails.appendChild(this.watchtheirquickvideo),this.testimonialcontainer.appendChild(this.blockquote),this.testimonialcontainer.appendChild(this.testimonialcontainerdetails),this.testimonialblock.appendChild(this.testimonialcontainer),s.appendChild(this.testimonialblock),this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("rfrdmq-hidden","rfrdmq-activated");let g=document.createElement("div");g.classList.add("rfrdmq-page-bg"),this.pagebg=g,this.pagebg.addEventListener("click",this.toggleClose.bind(this));let u=document.createElement("div");this.divinsidepagebg=u,this.pagebg.appendChild(this.divinsidepagebg),this.messageContainer.appendChild(this.pagebg);let $=document.createElement("div");$.classList.add("rfrdmq-cheer-wrap"),$.id="cheer-wrap",this.cheerwrap=$;let v=document.createElement("div");v.classList.add("rfrdmq-side-cheer-header"),this.cheerheader=v;let x=document.createElement("div");x.classList.add("rfrdmq-w-tabs"),this.videotabs=x;let y=document.createElement("div");y.classList.add("rfrdmq-w-tab-menu"),this.videotabsmenu=y;let q=document.createElement("div");q.classList.add("rfrdmq-tabs-content","rfrdmq-w-tab-content"),this.tabscontent=q;let w=document.createElement("div");w.classList.add("rfrdmq-videos-top"),this.videosTop=w;var _=document.createElement("div");_.classList.add("rfrdmq-video-tab-pane","rfrdmq-w-tab-pane","rfrdmq-w--tab-active"),this.videotabOne=_,this.videotabOne.setAttribute("data-id",a.video.videoid._id);var k=document.createElement("div");k.classList.add("rfrdmq-video-flyout-wrap"),this.videoflyoutOne=k;var C=document.createElement("div");C.classList.add("rfrdmq-video-play","rfrdmq-w-video"),C.style.marginTop="20%",this.videoembedOne=C;let E=document.createElement("video");E.classList.add("rfrdmq-mainvid"),this.mainvideo1=E,this.mainvideo1.setAttribute("data-id",a.video.videoid._id),this.mainvideo1.style="background-image:url('"+a.video.link+"')",this.mainvideo1.innerHTML='<source src="'+a.video.link+'" data-wf-ignore="true">',this.videoembedOne.appendChild(this.mainvideo1),this.videoflyoutOne.appendChild(this.videoembedOne),this.videotabOne.appendChild(this.videoflyoutOne);let L=document.createElement("div");L.classList.add("rfrdmq-video-icons"),this.videoicons1=L;let A=document.createElement("div");A.classList.add("rfrdmqsoundcontainer"),this.soundcontainer1=A;let S=document.createElement("div");S.classList.add("rfrdmq-sound-on"),this.soundon1=S,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let j=document.createElement("img");j.classList.add("rfrdmq-video-icon"),this.soundonimg1=j,this.soundonimg1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let z=document.createElement("div");z.classList.add("rfrdmq-sound-off"),this.soundoff1=z,this.soundoff1.style.display="none",this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let O=document.createElement("img");O.classList.add("rfrdmq-video-icon"),this.soundoffimg1=O,this.soundoffimg1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(this.soundonimg1),this.soundoff1.appendChild(this.soundoffimg1),this.soundcontainer1.appendChild(this.soundon1),this.soundcontainer1.appendChild(this.soundoff1);let T=document.createElement("div");T.classList.add("rfrdmqplaycontainer"),this.playcontainer1=T;let V=document.createElement("div");V.classList.add("rfrdmq-pause-video-block"),this.pause1=V;let F=document.createElement("img");F.classList.add("rfrdmq-video-icon"),this.pauseimg1=F,this.pauseimg1.style.display="none",this.pauseimg1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let B=document.createElement("div");B.classList.add("rfrdmq-play-video-block"),this.play1=B;let H=document.createElement("img");H.classList.add("rfrdmq-video-icon"),this.playimg1=H,this.playimg1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1.addEventListener("click",this.playVid.bind(this)),this.pause1.appendChild(this.pauseimg1),this.play1.appendChild(this.playimg1),this.playcontainer1.appendChild(this.pause1),this.playcontainer1.appendChild(this.play1);let M=document.createElement("div");M.classList.add("rfrdmqfullscreencontainer"),this.fullscreencontainer1=M;let N=document.createElement("img");N.classList.add("rfrdmq-video-icon"),this.fullscreenimg1=N,this.fullscreenimg1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),this.fullscreencontainer1.appendChild(this.fullscreenimg1),this.videoicons1.appendChild(this.soundcontainer1),this.videoicons1.appendChild(this.playcontainer1),this.videoicons1.appendChild(this.fullscreencontainer1),this.videoembedOne.appendChild(this.videoicons1),this.tabscontent.appendChild(this.videotabOne),this.messageContainer.appendChild(this.tabscontent);let X=document.createElement("div");X.classList.add("rfrdmq-overlay-wrapper"),this.modalbackground=X,this.modalbackground.style="transform-style: preserve-3d; display: none; transition: transform 240ms ease 0s, opacity 240ms ease 0s; opacity: 0; transform: scaleX(1.05) scaleY(1.05) scaleZ(1);",this.modalbackground.setAttribute("data-id",a.video.videoid._id),this.modalbackground.appendChild(this.messageContainer),document.body.appendChild(this.modalbackground)}this.createStyles(a)}createStyles(t){let e=document.createElement("style");e.innerHTML=`
          .rfrdmq-testimonial-video-thumb {
            z-index: 99;
          }
          .rfrdmq-cheer-background-video  {
            z-index: 9990;
            overflow: hidden;
            width: 89px;
            height: 89px;
            // border-style: solid;
            // border-width: 3px;
            // border-color: #0666eb;
            border: 2px solid #${t.secondarycolor};
            border-radius: 1000px;
            background-image: none; 
            background-position: 0px 0px;
            background-size: auto;
            margin-right: 30px;
            cursor: pointer;
          }
          .rfrdmq-w-background-video {
            position: relative;
            overflow: hidden;
            height: 500px;
            color: white;
          }
          .rfrdmq-w-background-video > video {
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
          .rfrdmq-w-container {
            margin-left: auto;
            margin-right: auto;
            max-width: 940px;
          }
          .rfrdmq-testimonial__container {
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
          .rfrdmq-blockquote {
            margin: 25px 0;
            padding: 15px 30px;
            border-left: 5px solid #e2e2e2;
            font-size: 20px;
            line-height: 34px;
          }
          .rfrdmq-testimonial__container__block-quote-copy {
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
            border-radius: 25px 25px 0 0;
          }
          .rfrdmq-testimonial__container__details {
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
            border-radius: 0 0 25px 25px;
          }
          .rfrdmq-testimonial__details__avatar {
            width: 90px;
            height: 90px;
            margin-right: 30px;
            border-radius: 80px;
          }
          .rfrdmq-testimonial__details__meta {
            display: block;
            color: #${t.secondarycolor};
            font-size: 18px;
            font-weight: 400;
          }
          .rfrdmq-testimonial__details__meta__name {
            font-family: neue-haas-grotesk-text,sans-serif;
            font-weight: 700;
          }
          .rfrdmq-overlay-wrapper {
            position: fixed;
            left: 0%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            z-index: 9999;
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
          .rfrdmq-activated {
            display: block;
            transition: opacity 360ms ease 0s;
            opacity: 1;
          }
          .rfrdmq-page-bg {
            position: fixed;
            left: 0%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.58), transparent 60%);
          }
          .rfrdmq-cheer-wrap {
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
          .rfrdmq-side-cheer-header {
            padding: 13px 15px 12px 13px;
            border-bottom: 2px solid rgba(43, 26, 59, 0.05);
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-size: 15px;
            line-height: 1em;
            font-weight: 600;
          }
          .rfrdmq-video-flyout-wrap {
            width: 400px;
          }
          .rfrdmq-video-icons {
            position: absolute;
            left: 72%;
            top: auto;
            right: 0%;
            bottom: 110px;
            z-index: 10;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 130px;
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
            transform: rotate(90deg);
          }
          .rfrdmq-video-icon {
            width: 20px;
            -webkit-transition: -webkit-transform 360ms ease;
            transition: -webkit-transform 360ms ease;
            transition: transform 360ms ease;
            transition: transform 360ms ease, -webkit-transform 360ms ease;
            cursor: pointer;
          }
          .rfrdmq-videos-top {
            height: 400px;
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 auto;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
          }
          .rfrdmq-w-tabs {
            position: relative;
          }
          .rfrdmq-w-tab-menu {
            position: relative;
          }
          .rfrdmq-w-tab-content {
            position: relative;
            display: block;
            overflow: hidden;
          }
          .rfrdmq-tabs-content {
            // position: absolute;
            // left: 310px;
            // top: -42px;
            // right: 0%;
            // bottom: auto;
            // width: 400px;
            // height: auto;
          }
          .rfrdmq-w-tab-pane {
            position: relative;
            display: none;
          }
          .rfrdmq-video-tab-pane {
            width: 400px;
            height: auto;
          }
          .rfrdmq-w--tab-active {
            display: block;
          }
          .rfrdmq-w-video {
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
          .rfrdmq-video-play {
            overflow: hidden;
            border-radius: 7px;
          }
          .rfrdmq-w-video iframe, .rfrdmq-w-video object, .rfrdmq-w-video embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }
          .rfrdmq-mainvid {
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
          .rfrdmq-watchtheirquickvideo {
            position: absolute;
            bottom: 21%;
            width: 39%;
            left: 17%;
          }
          .rfrdmqsoundcontainer {
            transform: rotate(-90deg);
          }
          .rfrdmqplaycontainer {
            transform: rotate(-90deg);
          }
          .rfrdmqfullscreencontainer {
            transform: rotate(-90deg);
          }
          @media screen and (max-width: 991px) {
            .rfrdmq-cheer-background-video  {
              background-image: url(https://refurrys.s3-us-west-1.amazonaws.com/public/logos/46075jessi8.png);
              background-size: cover;
              border: 2px solid #${t.secondarycolor};
            }
            .rfrdmq-testimonial {
              width: 100%;
            }
            .rfrdmq-testimonial__container {
              max-width: 100%;
            }
            .rfrdmq-testimonial__container__block-quote-copy {
              padding-top: 60px;
              padding-right: 40px;
              padding-left: 40px;
              border-radius: 25px 25px 0 0;
            }
            .rfrdmq-testimonial__container__details {
              padding-right: 40px;
              padding-bottom: 50px;
              padding-left: 40px;
              border-radius: 0 0 25px 25px;
            }
            .rfrdmq-testimonial__details__avatar {
              width: 60px;
              height: 60px;
            }
            .rfrdmq-testimonial-video-thumb {
              display: none;
              // width: 170px;
              // height: 170px;
            }
            .rfrdmq-watchtheirquickvideo {
              position: absolute;
              bottom: 11%;
              width: 36%;
              left: 16%;
            }
          }
          @media screen and (max-width: 479px) {
            .rfrdmq-activated {
              display: block;
              transition: opacity 360ms ease 0s;
              opacity: 1;
              width: 100%;
            }
            .rfrdmq-testimonial-video-thumb {
              left: 0px;
              margin-right: 0px;
            }
            .rfrdmq-cheer-wrap {
              width: 100%;
            }
            .rfrdmq-videos-top {
              height: auto;
            }
            .rfrdmq-tabs-content {
              // left: 0%;
              // top: -354px;
              // right: auto;
              // bottom: auto;
              // width: 100%;
            }
            .rfrdmq-video-tab-pane {
              width: 100%;
            }
            .rfrdmq-video-flyout-wrap {
              width: 100%;
            }
            .rfrdmq-video-play {
              border-bottom-left-radius: 0px;
              border-bottom-right-radius: 0px;
            }
            .rfrdmq-w-video {
              width: 100%;
            } 
            .rfrdmq-testimonial__container__details {
              padding-right: 24px;
              padding-bottom: 40px;
              padding-left: 24px;
              border-radius: 0 0 25px 25px;
            }
            .rfrdmq-testimonial__details__avatar {
              margin-right: 16px;
            }
            .rfrdmq-testimonial__container__block-quote-copy {
              padding: 40px 24px 20px;
              font-size: 28px;
              border-radius: 25px 25px 0 0;
            }
            .rfrdmq-testimonial__container {
              -webkit-box-align: stretch;
              -webkit-align-items: stretch;
              -ms-flex-align: stretch;
              align-items: stretch;
            }
            .rfrdmq-testimonial__details__meta {
              line-height: 130%;
              text-align: left;
            }
            .rfrdmq-watchtheirquickvideo {
              position: absolute;
              bottom: 10%;
              width: 66%;
              left: 30%;
            }
          }  
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}toggleClose(){console.log("clicked on toggle close"),console.log("this.modalbackground:",this.modalbackground);var t=document.getElementsByClassName("rfrdmq-overlay-wrapper");console.log("modalbackground:",t);for(let e=0;e<t.length;e++)t[e].style="transform-style: preserve-3d; display: none; transition: transform 240ms ease 0s, opacity 240ms ease 0s; opacity: 0; transform: scaleX(1.05) scaleY(1.05) scaleZ(1);";document.querySelectorAll(".rfrdmq-video-tab-pane").forEach(function(t){t.firstChild.firstChild.firstChild.pause(),t.firstChild.firstChild.firstChild.currentTime=0,t.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),t.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none"})}toggleSoundOn(t){t.target.closest(".rfrdmqsoundcontainer").lastChild.removeAttribute("style"),t.target.closest(".rfrdmq-sound-on").style.display="none";var e=t.target.closest(".rfrdmq-video-tab-pane").getAttribute("data-id");document.querySelectorAll(".rfrdmq-video-tab-pane").forEach(function(t){t.classList.contains("rfrdmq-w--tab-active")&&t.getAttribute("data-id")==e&&(t.firstChild.firstChild.firstChild.muted=!t.firstChild.firstChild.firstChild.muted)})}toggleSoundOff(t){t.target.closest(".rfrdmqsoundcontainer").firstChild.removeAttribute("style"),t.target.closest(".rfrdmq-sound-off").style.display="none";var e=t.target.closest(".rfrdmq-video-tab-pane").getAttribute("data-id");document.querySelectorAll(".rfrdmq-video-tab-pane").forEach(function(t){t.classList.contains("rfrdmq-w--tab-active")&&t.getAttribute("data-id")==e&&(t.firstChild.firstChild.firstChild.muted=!t.firstChild.firstChild.firstChild.muted)})}toggleFullScreen(){var t=event.target.closest(".rfrdmq-video-tab-pane").getAttribute("data-id");document.querySelectorAll(".rfrdmq-video-tab-pane").forEach(function(e){e.classList.contains("rfrdmq-w--tab-active")&&e.getAttribute("data-id")==t&&e.firstChild.firstChild.firstChild.requestFullscreen()})}playVid(t){t.target.closest(".rfrdmqplaycontainer").firstChild.firstChild.removeAttribute("style"),t.target.style.display="none";var e=t.target.closest(".rfrdmq-video-tab-pane").getAttribute("data-id");document.querySelectorAll(".rfrdmq-video-tab-pane").forEach(function(t){t.classList.contains("rfrdmq-w--tab-active")&&t.getAttribute("data-id")==e&&t.firstChild.firstChild.firstChild.play()})}pauseVid(t){t.target.closest(".rfrdmqplaycontainer").lastChild.firstChild.removeAttribute("style"),t.target.style.display="none";var e=t.target.closest(".rfrdmq-video-tab-pane").getAttribute("data-id");document.querySelectorAll(".rfrdmq-video-tab-pane").forEach(function(t){t.classList.contains("rfrdmq-w--tab-active")&&t.getAttribute("data-id")==e&&t.firstChild.firstChild.firstChild.pause()})}showVid(t){var e=t.target.closest(".rfrdmq-cheer-background-video").getAttribute("data-id");console.log("videoid:",e);var i=document.getElementsByClassName("rfrdmq-overlay-wrapper");for(let a=0;a<i.length;a++)e==i[a].getAttribute("data-id")&&(console.log("suppppppppppp"),i[a].style="transform-style: preserve-3d; display: flex; transition: transform 240ms ease 0s, opacity 240ms ease 0s; opacity: 1; transform: scaleX(1) scaleY(1) scaleZ(1);")}};
