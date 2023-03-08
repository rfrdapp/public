new class e{constructor(){this.initalise()}async initalise(){async function e(e){let t=await fetch("https://app.rfrd.io/read/video/"+e).then(e=>e.json());return t}let t=document.getElementsByClassName("embed-video-class");console.log("vid:",t),console.log("vid.length:",t.length);for(let i=0;i<t.length;i++){console.log('vid[index].getAttribute("data-id"):',t[i].getAttribute("data-id"));var r=await e(t[i].getAttribute("data-id"));console.log("magicq:",r);var o=t[i],d=document.createElement("div");d.classList.add("rfrd-video-play","rfrd-w-video","w-embed");let a=document.createElement("video");a.classList.add("rfrd-mainvid"),a.setAttribute("data-id",r._id),a.style="background-image:url('"+r.screengrab+"')",this.mainvideo1=a,this.mainvideo1.innerHTML='<source src="'+r.link+'" data-wf-ignore="true">',d.appendChild(this.mainvideo1);let s=document.createElement("div");s.classList.add("rfrd-video-icons");let n=document.createElement("div");n.classList.add("rfrdsoundcontainer");let l=document.createElement("div");l.classList.add("sound-on"),this.soundon1=l,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let p=document.createElement("img");p.classList.add("rfrd-video-icon"),p.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let c=document.createElement("div");c.style.display="none",c.classList.add("sound-off"),this.soundoff1=c,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let f=document.createElement("img");f.classList.add("rfrd-video-icon"),f.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(p),this.soundoff1.appendChild(f),n.appendChild(this.soundon1),n.appendChild(this.soundoff1);let b=document.createElement("div");b.classList.add("rfrdplaycontainer");let g=document.createElement("div");g.classList.add("pause-video-block");let h=document.createElement("img");h.classList.add("rfrd-video-icon"),h.style.display="none",h.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=h,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let $=document.createElement("div");$.classList.add("play-video-block");let x=document.createElement("img");x.classList.add("rfrd-video-icon"),x.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=x,this.playimg1.addEventListener("click",this.playVid.bind(this)),g.appendChild(this.pauseimg1),$.appendChild(this.playimg1),b.appendChild(g),b.appendChild($);let u=document.createElement("div"),m=document.createElement("img");m.classList.add("rfrd-video-icon"),m.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=m,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),u.appendChild(this.fullscreenimg1),s.appendChild(n),s.appendChild(b),s.appendChild(u),d.appendChild(s),o.appendChild(d)}this.createStyles(r)}createStyles(e){let t=document.createElement("style");t.innerHTML=`
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
          }
          @media screen and (max-width: 991px) {
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
              width: 96%;
              margin-left: 2%;
            } 
          }  
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(t)}toggleSoundOn(e){e.target.closest(".rfrdsoundcontainer").lastChild.removeAttribute("style"),e.target.closest(".sound-on").style.display="none";var t=e.target.closest(".embed-video-class").getAttribute("data-id");document.querySelectorAll(".embed-video-class").forEach(function(e){e.getAttribute("data-id")==t&&(e.firstChild.firstChild.muted=!e.firstChild.firstChild.muted)})}toggleSoundOff(e){e.target.closest(".rfrdsoundcontainer").firstChild.removeAttribute("style"),e.target.closest(".sound-off").style.display="none";var t=e.target.closest(".embed-video-class").getAttribute("data-id");document.querySelectorAll(".embed-video-class").forEach(function(e){e.getAttribute("data-id")==t&&(e.firstChild.firstChild.muted=!e.firstChild.firstChild.muted)})}toggleFullScreen(){var e=event.target.closest(".embed-video-class").getAttribute("data-id");document.querySelectorAll(".embed-video-class").forEach(function(t){t.getAttribute("data-id")==e&&t.firstChild.firstChild.requestFullscreen()})}playVid(e){e.target.closest(".rfrdplaycontainer").firstChild.firstChild.removeAttribute("style"),e.target.style.display="none";var t=e.target.closest(".embed-video-class").getAttribute("data-id");document.querySelectorAll(".embed-video-class").forEach(function(e){e.getAttribute("data-id")==t&&e.firstChild.firstChild.play()})}pauseVid(e){e.target.closest(".rfrdplaycontainer").lastChild.firstChild.removeAttribute("style"),e.target.style.display="none";var t=e.target.closest(".embed-video-class").getAttribute("data-id");document.querySelectorAll(".embed-video-class").forEach(function(e){e.getAttribute("data-id")==t&&e.firstChild.firstChild.pause()})}};
