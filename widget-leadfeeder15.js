new class e{constructor({position:e="bottom-left"}={}){this.position=this.getPosition(e),this.open=!1,this.initalise()}getPosition(e){let[t,i]=e.split("-");return{[t]:"30px",[i]:"30px"}}getUrlTag(e){return console.log('url.split("/"):',e.split("/")),e.split("/")[3]}async initalise(){async function e(){let e=await fetch("https://api.ipify.org/?format=json").then(e=>e.json());return e}var t=await e();async function i(e,t){var i="https://app.rfrd.io/read/id/ip/"+e+"/"+t;console.log("serverURL:",i);let d=await fetch(i).then(e=>e.json());return d}console.log("foundip:",t.ip);let d=document.getElementById("rfrd-widget"),s=d.dataset.id;console.log("made it here");var a=await i(s,t.ip);if(console.log({rrrr:a}),a.videos[0].videoid){let n=document.createElement("div");n.classList.add("rfrd-cheer-wrapper"),n.style="height: 0px",this.container=n,document.body.appendChild(n);let r=document.createElement("div");r.classList.add("rfrd-cheer-video-bg"),this.buttonContainer=r;let l=document.createElement("div");l.classList.add("rfrd-cheer-background-video");let o=document.createElement("div");o.classList.add("rfrd-cheer-bg","rfrd-background-video","w-background-video-atom"),o.setAttribute("data-video-urls",a.videos[0].videoid.link),o.setAttribute("data-autoplay","true"),o.setAttribute("data-loop","true"),o.setAttribute("data-wf-ignore","true"),this.videogif=o;let c=document.createElement("video");c.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",c.autoplay=!0,c.loop=!0,c.muted=!0,c.playsinline=!0,this.video=c,this.video.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">',this.videogif.appendChild(this.video),l.appendChild(this.videogif);let p=document.createElement("div");p.classList.add("rfrd-cheer-cta"),p.style.backgroundColor="#"+a.maincolor,this.cheercta=p,this.cheercta.innerHTML="<div>"+a.widgetcta+"</div>",this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("rfrd-hidden","rfrd-activated"),this.createMessageContainerContent(a),r.appendChild(l),r.appendChild(this.cheercta),r.addEventListener("click",this.toggleOpen.bind(this)),this.container.append(this.messageContainer),this.container.append(r),this.createStyles(a)}else{let v=document.createElement("div");v.classList.add("rfrd-cheer-wrapper"),v.style="height: 0px",this.container=v,document.body.appendChild(v);let f=document.createElement("div");f.classList.add("rfrd-cheer-video-bg"),this.buttonContainer=f;let h=document.createElement("div");h.classList.add("rfrd-cheer-background-video");let b=document.createElement("div");b.classList.add("rfrd-cheer-bg","rfrd-background-video","w-background-video-atom"),b.setAttribute("data-video-urls",a.videos[0].link),b.setAttribute("data-autoplay","true"),b.setAttribute("data-loop","true"),b.setAttribute("data-wf-ignore","true"),this.videogif=b;let m=document.createElement("video");m.style="background-image:url('"+a.videos[0].screengrab+"')",m.autoplay=!0,m.loop=!0,m.muted=!0,m.playsinline=!0,this.video=m,this.video.innerHTML='<source src="'+a.videos[0].link+'" data-wf-ignore="true">',this.videogif.appendChild(this.video),h.appendChild(this.videogif);let u=document.createElement("div");u.classList.add("rfrd-cheer-cta"),u.style.backgroundColor="#"+a.maincolor,this.cheercta=u,this.cheercta.innerHTML="<div>"+a.widgetcta+"</div>",this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("rfrd-hidden","rfrd-activated"),this.createMessageContainerContentNoID(a),f.appendChild(h),f.appendChild(this.cheercta),f.addEventListener("click",this.toggleOpen.bind(this)),this.container.append(this.messageContainer),this.container.append(f),this.createStyles(a)}}createStyles(e){let t=document.createElement("style");e.videos[0].videoid?t.innerHTML=`
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
        `.replace(/^\s+|\n/gm,""):t.innerHTML=`
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
              background-image: url("${e.videos[0].screengrab}");
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
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(t)}createMessageContainerContent(e){console.log("first create message"),this.messageContainer.innerHTML="";let t=document.createElement("div");t.classList.add("rfrd-page-bg"),t.addEventListener("click",this.toggleClose.bind(this));let i=document.createElement("div");t.appendChild(i);var d=e.videos.length;let s=document.createElement("div");s.classList.add("rfrd-video-icons");let a=document.createElement("div"),n=document.createElement("div");n.classList.add("sound-on"),this.soundon=n,this.soundon.addEventListener("click",this.toggleSoundOn.bind(this));let r=document.createElement("img");r.classList.add("rfrd-video-icon"),r.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let l=document.createElement("div");l.style.display="none",l.classList.add("sound-off"),this.soundoff=l,this.soundoff.addEventListener("click",this.toggleSoundOff.bind(this));let o=document.createElement("img");o.classList.add("rfrd-video-icon"),o.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon.appendChild(r),this.soundoff.appendChild(o),a.appendChild(this.soundon),a.appendChild(this.soundoff);let c=document.createElement("div"),p=document.createElement("div");p.classList.add("pause-video-block");let v=document.createElement("img");v.classList.add("rfrd-video-icon"),v.style.display="none",v.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg=v,this.pauseimg.addEventListener("click",this.pauseVid.bind(this));let f=document.createElement("div");f.classList.add("play-video-block");let h=document.createElement("img");h.classList.add("rfrd-video-icon"),h.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg=h,this.playimg.addEventListener("click",this.playVid.bind(this)),p.appendChild(this.pauseimg),f.appendChild(this.playimg),c.appendChild(p),c.appendChild(f);let b=document.createElement("div"),m=document.createElement("img");m.classList.add("rfrd-video-icon"),m.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg=m,this.fullscreenimg.addEventListener("click",this.toggleFullScreen.bind(this)),b.appendChild(this.fullscreenimg),s.appendChild(a),s.appendChild(c),s.appendChild(b);let u=document.createElement("div");u.classList.add("rfrd-cheer-wrap"),u.id="cheer-wrap";let g=document.createElement("div");g.classList.add("rfrd-side-cheer-header"),g.textContent=e.cardlabel;let _=document.createElement("div");_.classList.add("video-tabs","rfrd-w-tabs");let C=document.createElement("div");C.classList.add("video-tabs-menu","rfrd-w-tab-menu");let $=document.createElement("div");$.classList.add("rfrd-tabs-content","rfrd-w-tab-content");let E=document.createElement("div");E.classList.add("rfrd-videos-top");let L=document.createElement("div");L.classList.add("rfrd-built-with-rfrd");let w=document.createElement("div");w.textContent="Built with";let k=document.createElement("a");k.href="https://www.rfrd.io",k.setAttribute("target","_blank");let y=document.createElement("img");y.classList.add("rfrd-bw-rfrd-logo"),y.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/6254a481ee51de3be6a0b275_rfrd%20dark.svg",k.appendChild(y),L.appendChild(w),L.appendChild(k);var d=e.videos.length;if(1==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let M=document.createElement("video");M.classList.add("rfrd-mainvid"),M.setAttribute("data-id",e.videos[0].videoid._id),M.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=M,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.href=e.buttonlink,H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let z=document.createElement("div");z.classList.add("rfrd-video-icons");let U=document.createElement("div");U.classList.add("rfrdsoundcontainer");let B=document.createElement("div");B.classList.add("sound-on"),this.soundon1=B,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let D=document.createElement("img");D.classList.add("rfrd-video-icon"),D.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let I=document.createElement("div");I.style.display="none",I.classList.add("sound-off"),this.soundoff1=I,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let N=document.createElement("img");N.classList.add("rfrd-video-icon"),N.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(D),this.soundoff1.appendChild(N),U.appendChild(this.soundon1),U.appendChild(this.soundoff1);let q=document.createElement("div");q.classList.add("rfrdplaycontainer");let R=document.createElement("div");R.classList.add("pause-video-block");let P=document.createElement("img");P.classList.add("rfrd-video-icon"),P.style.display="none",P.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=P,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let G=document.createElement("div");G.classList.add("play-video-block");let J=document.createElement("img");J.classList.add("rfrd-video-icon"),J.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=J,this.playimg1.addEventListener("click",this.playVid.bind(this)),R.appendChild(this.pauseimg1),G.appendChild(this.playimg1),q.appendChild(R),q.appendChild(G);let K=document.createElement("div"),Q=document.createElement("img");Q.classList.add("rfrd-video-icon"),Q.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=Q,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),K.appendChild(this.fullscreenimg1),z.appendChild(U),z.appendChild(q),z.appendChild(K),F.appendChild(z),C.appendChild(x),$.appendChild(O),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(2==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let et=document.createElement("video");et.classList.add("rfrd-mainvid"),et.setAttribute("data-id",e.videos[0].videoid._id),et.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=et,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(console.log("widget.videos[0].videoid.widgetcta:",e.videos[0].videoid.widgetcta),H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(console.log("nope0"),H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let ei=document.createElement("div");ei.classList.add("rfrd-video-icons");let ed=document.createElement("div");ed.classList.add("rfrdsoundcontainer");let es=document.createElement("div");es.classList.add("sound-on"),this.soundon1=es,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let ea=document.createElement("img");ea.classList.add("rfrd-video-icon"),ea.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let en=document.createElement("div");en.style.display="none",en.classList.add("sound-off"),this.soundoff1=en,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let er=document.createElement("img");er.classList.add("rfrd-video-icon"),er.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(ea),this.soundoff1.appendChild(er),ed.appendChild(this.soundon1),ed.appendChild(this.soundoff1);let el=document.createElement("div");el.classList.add("rfrdplaycontainer");let eo=document.createElement("div");eo.classList.add("pause-video-block");let ec=document.createElement("img");ec.classList.add("rfrd-video-icon"),ec.style.display="none",ec.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=ec,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ep=document.createElement("div");ep.classList.add("play-video-block");let ev=document.createElement("img");ev.classList.add("rfrd-video-icon"),ev.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=ev,this.playimg1.addEventListener("click",this.playVid.bind(this)),eo.appendChild(this.pauseimg1),ep.appendChild(this.playimg1),el.appendChild(eo),el.appendChild(ep);let ef=document.createElement("div"),eh=document.createElement("img");eh.classList.add("rfrd-video-icon"),eh.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=eh,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),ef.appendChild(this.fullscreenimg1),ei.appendChild(ed),ei.appendChild(el),ei.appendChild(ef),F.appendChild(ei);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let eg=document.createElement("video");eg.classList.add("rfrd-mainvid"),eg.setAttribute("preload","none"),eg.setAttribute("data-id",e.videos[1].videoid._id),eg.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=eg,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(console.log("widget.videos[1].videoid.widgetcta:",e.videos[1].videoid.widgetcta),e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let eC=document.createElement("div");eC.classList.add("rfrd-video-icons");let e0=document.createElement("div");e0.classList.add("rfrdsoundcontainer");let e$=document.createElement("div");e$.classList.add("sound-on"),this.soundon2=e$,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eE=document.createElement("img");eE.classList.add("rfrd-video-icon"),eE.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let e1=document.createElement("div");e1.style.display="none",e1.classList.add("sound-off"),this.soundoff2=e1,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eL=document.createElement("img");eL.classList.add("rfrd-video-icon"),eL.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eE),this.soundoff2.appendChild(eL),e0.appendChild(this.soundon2),e0.appendChild(this.soundoff2);let ew=document.createElement("div");ew.classList.add("rfrdplaycontainer");let ek=document.createElement("div");ek.classList.add("pause-video-block");let e4=document.createElement("img");e4.classList.add("rfrd-video-icon"),e4.style.display="none",e4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=e4,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let ey=document.createElement("div");ey.classList.add("play-video-block");let e2=document.createElement("img");e2.classList.add("rfrd-video-icon"),e2.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=e2,this.playimg2.addEventListener("click",this.playVid.bind(this)),ek.appendChild(this.pauseimg2),ey.appendChild(this.playimg2),ew.appendChild(ek),ew.appendChild(ey);let ex=document.createElement("div"),e7=document.createElement("img");e7.classList.add("rfrd-video-icon"),e7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=e7,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),ex.appendChild(this.fullscreenimg2),eC.appendChild(e0),eC.appendChild(ew),eC.appendChild(ex),eu.appendChild(eC),C.appendChild(x),C.appendChild(W),$.appendChild(O),$.appendChild(eb),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(3==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let e5=document.createElement("video");e5.classList.add("rfrd-mainvid"),e5.setAttribute("data-id",e.videos[0].videoid._id),e5.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=e5,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let e3=document.createElement("div");e3.classList.add("rfrd-video-icons");let e6=document.createElement("div");e6.classList.add("rfrdsoundcontainer");let e8=document.createElement("div");e8.classList.add("sound-on"),this.soundon1=e8,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let eA=document.createElement("img");eA.classList.add("rfrd-video-icon"),eA.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eS=document.createElement("div");eS.style.display="none",eS.classList.add("sound-off"),this.soundoff1=eS,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let ej=document.createElement("img");ej.classList.add("rfrd-video-icon"),ej.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(eA),this.soundoff1.appendChild(ej),e6.appendChild(this.soundon1),e6.appendChild(this.soundoff1);let eV=document.createElement("div");eV.classList.add("rfrdplaycontainer");let eO=document.createElement("div");eO.classList.add("pause-video-block");let eT=document.createElement("img");eT.classList.add("rfrd-video-icon"),eT.style.display="none",eT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=eT,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let eF=document.createElement("div");eF.classList.add("play-video-block");let eM=document.createElement("img");eM.classList.add("rfrd-video-icon"),eM.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=eM,this.playimg1.addEventListener("click",this.playVid.bind(this)),eO.appendChild(this.pauseimg1),eF.appendChild(this.playimg1),eV.appendChild(eO),eV.appendChild(eF);let eH=document.createElement("div"),ez=document.createElement("img");ez.classList.add("rfrd-video-icon"),ez.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=ez,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),eH.appendChild(this.fullscreenimg1),e3.appendChild(e6),e3.appendChild(eV),e3.appendChild(eH),F.appendChild(e3);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let eU=document.createElement("video");eU.classList.add("rfrd-mainvid"),eU.setAttribute("preload","none"),eU.setAttribute("data-id",e.videos[1].videoid._id),eU.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=eU,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let eB=document.createElement("div");eB.classList.add("rfrd-video-icons");let eD=document.createElement("div");eD.classList.add("rfrdsoundcontainer");let eI=document.createElement("div");eI.classList.add("sound-on"),this.soundon2=eI,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eN=document.createElement("img");eN.classList.add("rfrd-video-icon"),eN.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eq=document.createElement("div");eq.style.display="none",eq.classList.add("sound-off"),this.soundoff2=eq,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eR=document.createElement("img");eR.classList.add("rfrd-video-icon"),eR.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eN),this.soundoff2.appendChild(eR),eD.appendChild(this.soundon2),eD.appendChild(this.soundoff2);let e9=document.createElement("div");e9.classList.add("rfrdplaycontainer");let eP=document.createElement("div");eP.classList.add("pause-video-block");let eG=document.createElement("img");eG.classList.add("rfrd-video-icon"),eG.style.display="none",eG.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=eG,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let eJ=document.createElement("div");eJ.classList.add("play-video-block");let eK=document.createElement("img");eK.classList.add("rfrd-video-icon"),eK.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=eK,this.playimg2.addEventListener("click",this.playVid.bind(this)),eP.appendChild(this.pauseimg2),eJ.appendChild(this.playimg2),e9.appendChild(eP),e9.appendChild(eJ);let eQ=document.createElement("div"),eW=document.createElement("img");eW.classList.add("rfrd-video-icon"),eW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=eW,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),eQ.appendChild(this.fullscreenimg2),eB.appendChild(eD),eB.appendChild(e9),eB.appendChild(eQ),eu.appendChild(eB);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2].videoid._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),te=document.createElement("div");te.classList.add("rfrd-side-video-name"),te.textContent=e.videos[2].videoid.name;var tt=document.createElement("div");tt.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?tt.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(tt.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eZ.appendChild(te),eZ.appendChild(tt),eX.appendChild(eZ);var ti=document.createElement("div");ti.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ti.setAttribute("data-id",e.videos[2].videoid._id);var td=document.createElement("div");td.classList.add("rfrd-video-flyout-wrap");var ts=document.createElement("div");ts.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ts.style.paddingTop="56.17021276595745%";let ta=document.createElement("video");ta.classList.add("rfrd-mainvid"),ta.setAttribute("preload","none"),ta.setAttribute("data-id",e.videos[2].videoid._id),ta.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=ta,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var tn=document.createElement("a");tn.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),tn.style.backgroundColor="#"+e.maincolor,tn.setAttribute("target","_blank"),e.videos[2].videoid.widgetcta?(tn.href=e.videos[2].videoid.widgetlink,tn.textContent=e.videos[2].videoid.widgetcta):(tn.href=e.buttonlink,tn.textContent=e.buttoncta),ts.appendChild(this.mainvideo3),td.appendChild(ts),td.appendChild(tn),ti.appendChild(td);let tr=document.createElement("div");tr.classList.add("rfrd-video-icons");let tl=document.createElement("div");tl.classList.add("rfrdsoundcontainer");let to=document.createElement("div");to.classList.add("sound-on"),this.soundon3=to,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let tc=document.createElement("img");tc.classList.add("rfrd-video-icon"),tc.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tp=document.createElement("div");tp.style.display="none",tp.classList.add("sound-off"),this.soundoff3=tp,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let tv=document.createElement("img");tv.classList.add("rfrd-video-icon"),tv.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(tc),this.soundoff3.appendChild(tv),tl.appendChild(this.soundon3),tl.appendChild(this.soundoff3);let tf=document.createElement("div");tf.classList.add("rfrdplaycontainer");let th=document.createElement("div");th.classList.add("pause-video-block");let tb=document.createElement("img");tb.classList.add("rfrd-video-icon"),tb.style.display="none",tb.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=tb,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let tm=document.createElement("div");tm.classList.add("play-video-block");let tu=document.createElement("img");tu.classList.add("rfrd-video-icon"),tu.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=tu,this.playimg3.addEventListener("click",this.playVid.bind(this)),th.appendChild(this.pauseimg3),tm.appendChild(this.playimg3),tf.appendChild(th),tf.appendChild(tm);let tg=document.createElement("div"),t_=document.createElement("img");t_.classList.add("rfrd-video-icon"),t_.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=t_,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),tg.appendChild(this.fullscreenimg3),tr.appendChild(tl),tr.appendChild(tf),tr.appendChild(tg),ts.appendChild(tr),C.appendChild(x),C.appendChild(W),C.appendChild(eX),$.appendChild(O),$.appendChild(eb),$.appendChild(ti),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(4==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let tC=document.createElement("video");tC.classList.add("rfrd-mainvid"),tC.setAttribute("data-id",e.videos[0].videoid._id),tC.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=tC,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let t0=document.createElement("div");t0.classList.add("rfrd-video-icons");let t$=document.createElement("div");t$.classList.add("rfrdsoundcontainer");let tE=document.createElement("div");tE.classList.add("sound-on"),this.soundon1=tE,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let t1=document.createElement("img");t1.classList.add("rfrd-video-icon"),t1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tL=document.createElement("div");tL.style.display="none",tL.classList.add("sound-off"),this.soundoff1=tL,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let tw=document.createElement("img");tw.classList.add("rfrd-video-icon"),tw.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(t1),this.soundoff1.appendChild(tw),t$.appendChild(this.soundon1),t$.appendChild(this.soundoff1);let tk=document.createElement("div");tk.classList.add("rfrdplaycontainer");let t4=document.createElement("div");t4.classList.add("pause-video-block");let ty=document.createElement("img");ty.classList.add("rfrd-video-icon"),ty.style.display="none",ty.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=ty,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let t2=document.createElement("div");t2.classList.add("play-video-block");let tx=document.createElement("img");tx.classList.add("rfrd-video-icon"),tx.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=tx,this.playimg1.addEventListener("click",this.playVid.bind(this)),t4.appendChild(this.pauseimg1),t2.appendChild(this.playimg1),tk.appendChild(t4),tk.appendChild(t2);let t7=document.createElement("div"),t5=document.createElement("img");t5.classList.add("rfrd-video-icon"),t5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=t5,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),t7.appendChild(this.fullscreenimg1),t0.appendChild(t$),t0.appendChild(tk),t0.appendChild(t7),F.appendChild(t0);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let t3=document.createElement("video");t3.classList.add("rfrd-mainvid"),t3.setAttribute("preload","none"),t3.setAttribute("data-id",e.videos[1].videoid._id),t3.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=t3,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let t6=document.createElement("div");t6.classList.add("rfrd-video-icons");let t8=document.createElement("div");t8.classList.add("rfrdsoundcontainer");let tA=document.createElement("div");tA.classList.add("sound-on"),this.soundon2=tA,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let tS=document.createElement("img");tS.classList.add("rfrd-video-icon"),tS.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tj=document.createElement("div");tj.style.display="none",tj.classList.add("sound-off"),this.soundoff2=tj,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let tV=document.createElement("img");tV.classList.add("rfrd-video-icon"),tV.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(tS),this.soundoff2.appendChild(tV),t8.appendChild(this.soundon2),t8.appendChild(this.soundoff2);let tO=document.createElement("div");tO.classList.add("rfrdplaycontainer");let tT=document.createElement("div");tT.classList.add("pause-video-block");let tF=document.createElement("img");tF.classList.add("rfrd-video-icon"),tF.style.display="none",tF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=tF,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let tM=document.createElement("div");tM.classList.add("play-video-block");let tH=document.createElement("img");tH.classList.add("rfrd-video-icon"),tH.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=tH,this.playimg2.addEventListener("click",this.playVid.bind(this)),tT.appendChild(this.pauseimg2),tM.appendChild(this.playimg2),tO.appendChild(tT),tO.appendChild(tM);let tz=document.createElement("div"),tU=document.createElement("img");tU.classList.add("rfrd-video-icon"),tU.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=tU,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),tz.appendChild(this.fullscreenimg2),t6.appendChild(t8),t6.appendChild(tO),t6.appendChild(tz),eu.appendChild(t6);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2].videoid._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),te=document.createElement("div");te.classList.add("rfrd-side-video-name"),te.textContent=e.videos[2].videoid.name;var tt=document.createElement("div");tt.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?tt.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(tt.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eZ.appendChild(te),eZ.appendChild(tt),eX.appendChild(eZ);var ti=document.createElement("div");ti.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ti.setAttribute("data-id",e.videos[2].videoid._id);var td=document.createElement("div");td.classList.add("rfrd-video-flyout-wrap");var ts=document.createElement("div");ts.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ts.style.paddingTop="56.17021276595745%";let tB=document.createElement("video");tB.classList.add("rfrd-mainvid"),tB.setAttribute("preload","none"),tB.setAttribute("data-id",e.videos[2].videoid._id),tB.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=tB,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var tn=document.createElement("a");tn.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),tn.style.backgroundColor="#"+e.maincolor,tn.setAttribute("target","_blank"),e.videos[2].videoid.widgetcta?(tn.href=e.videos[2].videoid.widgetlink,tn.textContent=e.videos[2].videoid.widgetcta):(tn.href=e.buttonlink,tn.textContent=e.buttoncta),ts.appendChild(this.mainvideo3),td.appendChild(ts),td.appendChild(tn),ti.appendChild(td);let tD=document.createElement("div");tD.classList.add("rfrd-video-icons");let tI=document.createElement("div");tI.classList.add("rfrdsoundcontainer");let tN=document.createElement("div");tN.classList.add("sound-on"),this.soundon3=tN,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let tq=document.createElement("img");tq.classList.add("rfrd-video-icon"),tq.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tR=document.createElement("div");tR.style.display="none",tR.classList.add("sound-off"),this.soundoff3=tR,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let t9=document.createElement("img");t9.classList.add("rfrd-video-icon"),t9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(tq),this.soundoff3.appendChild(t9),tI.appendChild(this.soundon3),tI.appendChild(this.soundoff3);let tP=document.createElement("div");tP.classList.add("rfrdplaycontainer");let tG=document.createElement("div");tG.classList.add("pause-video-block");let tJ=document.createElement("img");tJ.classList.add("rfrd-video-icon"),tJ.style.display="none",tJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=tJ,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let tK=document.createElement("div");tK.classList.add("play-video-block");let tQ=document.createElement("img");tQ.classList.add("rfrd-video-icon"),tQ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=tQ,this.playimg3.addEventListener("click",this.playVid.bind(this)),tG.appendChild(this.pauseimg3),tK.appendChild(this.playimg3),tP.appendChild(tG),tP.appendChild(tK);let tW=document.createElement("div"),tX=document.createElement("img");tX.classList.add("rfrd-video-icon"),tX.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=tX,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),tW.appendChild(this.fullscreenimg3),tD.appendChild(tI),tD.appendChild(tP),tD.appendChild(tW),ts.appendChild(tD);var tY=document.createElement("a");tY.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),tY.setAttribute("data-id",e.videos[3].videoid._id),tY.addEventListener("click",this.showVid.bind(this),!1);var tZ=document.createElement("div");tZ.classList.add("rfrd-video-photo"),tZ.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",tY.appendChild(tZ);var ie=document.createElement("div"),it=document.createElement("div");it.classList.add("rfrd-side-video-name"),it.textContent=e.videos[3].videoid.name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?ii.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].videoid.jobtitle&&(ii.textContent=e.videos[3].videoid.jobtitle+", "+e.videos[3].videoid.worksat),ie.appendChild(it),ie.appendChild(ii),tY.appendChild(ie);var id=document.createElement("div");id.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),id.setAttribute("data-id",e.videos[3].videoid._id);var is=document.createElement("div");is.classList.add("rfrd-video-flyout-wrap");var ia=document.createElement("div");ia.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ia.style.paddingTop="56.17021276595745%";let ir=document.createElement("video");ir.classList.add("rfrd-mainvid"),ir.setAttribute("preload","none"),ir.setAttribute("data-id",e.videos[3].videoid._id),ir.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",this.mainvideo4=ir,this.mainvideo4.innerHTML='<source src="'+e.videos[3].videoid.link+'" data-wf-ignore="true">';var il=document.createElement("a");il.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),il.style.backgroundColor="#"+e.maincolor,il.setAttribute("target","_blank"),e.videos[3].videoid.widgetcta?(il.href=e.videos[3].videoid.widgetlink,il.textContent=e.videos[3].videoid.widgetcta):(il.href=e.buttonlink,il.textContent=e.buttoncta),ia.appendChild(this.mainvideo4),is.appendChild(ia),is.appendChild(il),id.appendChild(is);let io=document.createElement("div");io.classList.add("rfrd-video-icons");let ic=document.createElement("div");ic.classList.add("rfrdsoundcontainer");let ip=document.createElement("div");ip.classList.add("sound-on"),this.soundon4=ip,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let iv=document.createElement("img");iv.classList.add("rfrd-video-icon"),iv.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let ih=document.createElement("div");ih.style.display="none",ih.classList.add("sound-off"),this.soundoff4=ih,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let ib=document.createElement("img");ib.classList.add("rfrd-video-icon"),ib.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(iv),this.soundoff4.appendChild(ib),ic.appendChild(this.soundon4),ic.appendChild(this.soundoff4);let im=document.createElement("div");im.classList.add("rfrdplaycontainer");let iu=document.createElement("div");iu.classList.add("pause-video-block");let ig=document.createElement("img");ig.classList.add("rfrd-video-icon"),ig.style.display="none",ig.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=ig,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let i_=document.createElement("div");i_.classList.add("play-video-block");let iC=document.createElement("img");iC.classList.add("rfrd-video-icon"),iC.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=iC,this.playimg4.addEventListener("click",this.playVid.bind(this)),iu.appendChild(this.pauseimg4),i_.appendChild(this.playimg4),im.appendChild(iu),im.appendChild(i_);let i0=document.createElement("div"),i$=document.createElement("img");i$.classList.add("rfrd-video-icon"),i$.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=i$,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),i0.appendChild(this.fullscreenimg4),io.appendChild(ic),io.appendChild(im),io.appendChild(i0),ia.appendChild(io),C.appendChild(x),C.appendChild(W),C.appendChild(eX),C.appendChild(tY),$.appendChild(O),$.appendChild(eb),$.appendChild(ti),$.appendChild(id),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(5==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let iE=document.createElement("video");iE.classList.add("rfrd-mainvid"),iE.setAttribute("data-id",e.videos[0].videoid._id),iE.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=iE,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let i1=document.createElement("div");i1.classList.add("rfrd-video-icons");let iL=document.createElement("div");iL.classList.add("rfrdsoundcontainer");let iw=document.createElement("div");iw.classList.add("sound-on"),this.soundon1=iw,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let ik=document.createElement("img");ik.classList.add("rfrd-video-icon"),ik.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let i4=document.createElement("div");i4.style.display="none",i4.classList.add("sound-off"),this.soundoff1=i4,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let iy=document.createElement("img");iy.classList.add("rfrd-video-icon"),iy.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(ik),this.soundoff1.appendChild(iy),iL.appendChild(this.soundon1),iL.appendChild(this.soundoff1);let i2=document.createElement("div");i2.classList.add("rfrdplaycontainer");let ix=document.createElement("div");ix.classList.add("pause-video-block");let i7=document.createElement("img");i7.classList.add("rfrd-video-icon"),i7.style.display="none",i7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=i7,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let i5=document.createElement("div");i5.classList.add("play-video-block");let i3=document.createElement("img");i3.classList.add("rfrd-video-icon"),i3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=i3,this.playimg1.addEventListener("click",this.playVid.bind(this)),ix.appendChild(this.pauseimg1),i5.appendChild(this.playimg1),i2.appendChild(ix),i2.appendChild(i5);let i6=document.createElement("div"),i8=document.createElement("img");i8.classList.add("rfrd-video-icon"),i8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=i8,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),i6.appendChild(this.fullscreenimg1),i1.appendChild(iL),i1.appendChild(i2),i1.appendChild(i6),F.appendChild(i1);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let iA=document.createElement("video");iA.classList.add("rfrd-mainvid"),iA.setAttribute("preload","none"),iA.setAttribute("data-id",e.videos[1].videoid._id),iA.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=iA,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let iS=document.createElement("div");iS.classList.add("rfrd-video-icons");let ij=document.createElement("div");ij.classList.add("rfrdsoundcontainer");let iV=document.createElement("div");iV.classList.add("sound-on"),this.soundon2=iV,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let iO=document.createElement("img");iO.classList.add("rfrd-video-icon"),iO.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iT=document.createElement("div");iT.style.display="none",iT.classList.add("sound-off"),this.soundoff2=iT,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let iF=document.createElement("img");iF.classList.add("rfrd-video-icon"),iF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(iO),this.soundoff2.appendChild(iF),ij.appendChild(this.soundon2),ij.appendChild(this.soundoff2);let iM=document.createElement("div");iM.classList.add("rfrdplaycontainer");let iH=document.createElement("div");iH.classList.add("pause-video-block");let iz=document.createElement("img");iz.classList.add("rfrd-video-icon"),iz.style.display="none",iz.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=iz,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let iU=document.createElement("div");iU.classList.add("play-video-block");let iB=document.createElement("img");iB.classList.add("rfrd-video-icon"),iB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=iB,this.playimg2.addEventListener("click",this.playVid.bind(this)),iH.appendChild(this.pauseimg2),iU.appendChild(this.playimg2),iM.appendChild(iH),iM.appendChild(iU);let iD=document.createElement("div"),iI=document.createElement("img");iI.classList.add("rfrd-video-icon"),iI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=iI,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),iD.appendChild(this.fullscreenimg2),iS.appendChild(ij),iS.appendChild(iM),iS.appendChild(iD),eu.appendChild(iS);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2].videoid._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),te=document.createElement("div");te.classList.add("rfrd-side-video-name"),te.textContent=e.videos[2].videoid.name;var tt=document.createElement("div");tt.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?tt.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(tt.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eZ.appendChild(te),eZ.appendChild(tt),eX.appendChild(eZ);var ti=document.createElement("div");ti.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ti.setAttribute("data-id",e.videos[2].videoid._id);var td=document.createElement("div");td.classList.add("rfrd-video-flyout-wrap");var ts=document.createElement("div");ts.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ts.style.paddingTop="56.17021276595745%";let iN=document.createElement("video");iN.classList.add("rfrd-mainvid"),iN.setAttribute("preload","none"),iN.setAttribute("data-id",e.videos[2].videoid._id),iN.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=iN,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var tn=document.createElement("a");tn.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),tn.style.backgroundColor="#"+e.maincolor,tn.setAttribute("target","_blank"),e.videos[2].videoid.widgetcta?(tn.href=e.videos[2].videoid.widgetlink,tn.textContent=e.videos[2].videoid.widgetcta):(tn.href=e.buttonlink,tn.textContent=e.buttoncta),ts.appendChild(this.mainvideo3),td.appendChild(ts),td.appendChild(tn),ti.appendChild(td);let iq=document.createElement("div");iq.classList.add("rfrd-video-icons");let iR=document.createElement("div");iR.classList.add("rfrdsoundcontainer");let i9=document.createElement("div");i9.classList.add("sound-on"),this.soundon3=i9,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let iP=document.createElement("img");iP.classList.add("rfrd-video-icon"),iP.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iG=document.createElement("div");iG.style.display="none",iG.classList.add("sound-off"),this.soundoff3=iG,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let iJ=document.createElement("img");iJ.classList.add("rfrd-video-icon"),iJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(iP),this.soundoff3.appendChild(iJ),iR.appendChild(this.soundon3),iR.appendChild(this.soundoff3);let iK=document.createElement("div");iK.classList.add("rfrdplaycontainer");let iQ=document.createElement("div");iQ.classList.add("pause-video-block");let iW=document.createElement("img");iW.classList.add("rfrd-video-icon"),iW.style.display="none",iW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=iW,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let iX=document.createElement("div");iX.classList.add("play-video-block");let iY=document.createElement("img");iY.classList.add("rfrd-video-icon"),iY.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=iY,this.playimg3.addEventListener("click",this.playVid.bind(this)),iQ.appendChild(this.pauseimg3),iX.appendChild(this.playimg3),iK.appendChild(iQ),iK.appendChild(iX);let iZ=document.createElement("div"),de=document.createElement("img");de.classList.add("rfrd-video-icon"),de.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=de,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),iZ.appendChild(this.fullscreenimg3),iq.appendChild(iR),iq.appendChild(iK),iq.appendChild(iZ),ts.appendChild(iq);var tY=document.createElement("a");tY.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),tY.setAttribute("data-id",e.videos[3].videoid._id),tY.addEventListener("click",this.showVid.bind(this),!1);var tZ=document.createElement("div");tZ.classList.add("rfrd-video-photo"),tZ.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",tY.appendChild(tZ);var ie=document.createElement("div"),it=document.createElement("div");it.classList.add("rfrd-side-video-name"),it.textContent=e.videos[3].videoid.name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?ii.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].videoid.jobtitle&&(ii.textContent=e.videos[3].videoid.jobtitle+", "+e.videos[3].videoid.worksat),ie.appendChild(it),ie.appendChild(ii),tY.appendChild(ie);var id=document.createElement("div");id.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),id.setAttribute("data-id",e.videos[3].videoid._id);var is=document.createElement("div");is.classList.add("rfrd-video-flyout-wrap");var ia=document.createElement("div");ia.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ia.style.paddingTop="56.17021276595745%";let dt=document.createElement("video");dt.classList.add("rfrd-mainvid"),dt.setAttribute("preload","none"),dt.setAttribute("data-id",e.videos[3].videoid._id),dt.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",this.mainvideo4=dt,this.mainvideo4.innerHTML='<source src="'+e.videos[3].videoid.link+'" data-wf-ignore="true">';var il=document.createElement("a");il.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),il.style.backgroundColor="#"+e.maincolor,il.setAttribute("target","_blank"),e.videos[3].videoid.widgetcta?(il.href=e.videos[3].videoid.widgetlink,il.textContent=e.videos[3].videoid.widgetcta):(il.href=e.buttonlink,il.textContent=e.buttoncta),ia.appendChild(this.mainvideo4),is.appendChild(ia),is.appendChild(il),id.appendChild(is);let di=document.createElement("div");di.classList.add("rfrd-video-icons");let dd=document.createElement("div");dd.classList.add("rfrdsoundcontainer");let ds=document.createElement("div");ds.classList.add("sound-on"),this.soundon4=ds,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let da=document.createElement("img");da.classList.add("rfrd-video-icon"),da.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dn=document.createElement("div");dn.style.display="none",dn.classList.add("sound-off"),this.soundoff4=dn,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let dr=document.createElement("img");dr.classList.add("rfrd-video-icon"),dr.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(da),this.soundoff4.appendChild(dr),dd.appendChild(this.soundon4),dd.appendChild(this.soundoff4);let dl=document.createElement("div");dl.classList.add("rfrdplaycontainer");let dc=document.createElement("div");dc.classList.add("pause-video-block");let dp=document.createElement("img");dp.classList.add("rfrd-video-icon"),dp.style.display="none",dp.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=dp,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let dv=document.createElement("div");dv.classList.add("play-video-block");let df=document.createElement("img");df.classList.add("rfrd-video-icon"),df.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=df,this.playimg4.addEventListener("click",this.playVid.bind(this)),dc.appendChild(this.pauseimg4),dv.appendChild(this.playimg4),dl.appendChild(dc),dl.appendChild(dv);let dh=document.createElement("div"),db=document.createElement("img");db.classList.add("rfrd-video-icon"),db.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=db,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),dh.appendChild(this.fullscreenimg4),di.appendChild(dd),di.appendChild(dl),di.appendChild(dh),ia.appendChild(di);var dm=document.createElement("a");dm.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),dm.setAttribute("data-id",e.videos[4].videoid._id),dm.addEventListener("click",this.showVid.bind(this),!1);var du=document.createElement("div");du.classList.add("rfrd-video-photo"),du.style="background-image:url('"+e.videos[4].videoid.screengrab+"')",dm.appendChild(du);var dg=document.createElement("div"),d_=document.createElement("div");d_.classList.add("rfrd-side-video-name"),d_.textContent=e.videos[4].videoid.name;var dC=document.createElement("div");dC.classList.add("rfrd-side-video-title"),e.videos[4].featuredid?dC.textContent=e.videos[4].featuredid.jobtitle+", "+e.videos[4].featuredid.worksat:e.videos[4].videoid.jobtitle&&(dC.textContent=e.videos[4].videoid.jobtitle+", "+e.videos[4].videoid.worksat),dg.appendChild(d_),dg.appendChild(dC),dm.appendChild(dg);var d0=document.createElement("div");d0.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),d0.setAttribute("data-id",e.videos[4].videoid._id);var d$=document.createElement("div");d$.classList.add("rfrd-video-flyout-wrap");var dE=document.createElement("div");dE.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),dE.style.paddingTop="56.17021276595745%";let d1=document.createElement("video");d1.classList.add("rfrd-mainvid"),d1.setAttribute("preload","none"),d1.setAttribute("data-id",e.videos[4].videoid._id),d1.style="background-image:url('"+e.videos[4].videoid.screengrab+"')",this.mainvideo5=d1,this.mainvideo5.innerHTML='<source src="'+e.videos[4].videoid.link+'" data-wf-ignore="true">';var dL=document.createElement("a");dL.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),dL.style.backgroundColor="#"+e.maincolor,dL.setAttribute("target","_blank"),e.videos[4].videoid.widgetcta?(dL.href=e.videos[4].videoid.widgetlink,dL.textContent=e.videos[4].videoid.widgetcta):(dL.href=e.buttonlink,dL.textContent=e.buttoncta),dE.appendChild(this.mainvideo5),d$.appendChild(dE),d$.appendChild(dL),d0.appendChild(d$);let dw=document.createElement("div");dw.classList.add("rfrd-video-icons");let dk=document.createElement("div");dk.classList.add("rfrdsoundcontainer");let d4=document.createElement("div");d4.classList.add("sound-on"),this.soundon5=d4,this.soundon5.addEventListener("click",this.toggleSoundOn.bind(this));let dy=document.createElement("img");dy.classList.add("rfrd-video-icon"),dy.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let d2=document.createElement("div");d2.style.display="none",d2.classList.add("sound-off"),this.soundoff5=d2,this.soundoff5.addEventListener("click",this.toggleSoundOff.bind(this));let dx=document.createElement("img");dx.classList.add("rfrd-video-icon"),dx.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon5.appendChild(dy),this.soundoff5.appendChild(dx),dk.appendChild(this.soundon5),dk.appendChild(this.soundoff5);let d7=document.createElement("div");d7.classList.add("rfrdplaycontainer");let d5=document.createElement("div");d5.classList.add("pause-video-block");let d3=document.createElement("img");d3.classList.add("rfrd-video-icon"),d3.style.display="none",d3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg5=d3,this.pauseimg5.addEventListener("click",this.pauseVid.bind(this));let d6=document.createElement("div");d6.classList.add("play-video-block");let d8=document.createElement("img");d8.classList.add("rfrd-video-icon"),d8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg5=d8,this.playimg5.addEventListener("click",this.playVid.bind(this)),d5.appendChild(this.pauseimg5),d6.appendChild(this.playimg5),d7.appendChild(d5),d7.appendChild(d6);let dA=document.createElement("div"),dS=document.createElement("img");dS.classList.add("rfrd-video-icon"),dS.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg5=dS,this.fullscreenimg5.addEventListener("click",this.toggleFullScreen.bind(this)),dA.appendChild(this.fullscreenimg5),dw.appendChild(dk),dw.appendChild(d7),dw.appendChild(dA),dE.appendChild(dw),C.appendChild(x),C.appendChild(W),C.appendChild(eX),C.appendChild(tY),C.appendChild(dm),$.appendChild(O),$.appendChild(eb),$.appendChild(ti),$.appendChild(id),$.appendChild(d0),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}this.messageContainer.appendChild(t),this.messageContainer.appendChild(u)}createMessageContainerContentNoID(e){console.log("second create message"),this.messageContainer.innerHTML="";let t=document.createElement("div");t.classList.add("rfrd-page-bg"),t.addEventListener("click",this.toggleClose.bind(this));let i=document.createElement("div");t.appendChild(i);var d=e.videos.length;let s=document.createElement("div");s.classList.add("rfrd-video-icons");let a=document.createElement("div"),n=document.createElement("div");n.classList.add("sound-on"),this.soundon=n,this.soundon.addEventListener("click",this.toggleSoundOn.bind(this));let r=document.createElement("img");r.classList.add("rfrd-video-icon"),r.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let l=document.createElement("div");l.style.display="none",l.classList.add("sound-off"),this.soundoff=l,this.soundoff.addEventListener("click",this.toggleSoundOff.bind(this));let o=document.createElement("img");o.classList.add("rfrd-video-icon"),o.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon.appendChild(r),this.soundoff.appendChild(o),a.appendChild(this.soundon),a.appendChild(this.soundoff);let c=document.createElement("div"),p=document.createElement("div");p.classList.add("pause-video-block");let v=document.createElement("img");v.classList.add("rfrd-video-icon"),v.style.display="none",v.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg=v,this.pauseimg.addEventListener("click",this.pauseVid.bind(this));let f=document.createElement("div");f.classList.add("play-video-block");let h=document.createElement("img");h.classList.add("rfrd-video-icon"),h.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg=h,this.playimg.addEventListener("click",this.playVid.bind(this)),p.appendChild(this.pauseimg),f.appendChild(this.playimg),c.appendChild(p),c.appendChild(f);let b=document.createElement("div"),m=document.createElement("img");m.classList.add("rfrd-video-icon"),m.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg=m,this.fullscreenimg.addEventListener("click",this.toggleFullScreen.bind(this)),b.appendChild(this.fullscreenimg),s.appendChild(a),s.appendChild(c),s.appendChild(b);let u=document.createElement("div");u.classList.add("rfrd-cheer-wrap"),u.id="cheer-wrap";let g=document.createElement("div");g.classList.add("rfrd-side-cheer-header"),g.textContent=e.cardlabel;let _=document.createElement("div");_.classList.add("video-tabs","rfrd-w-tabs");let C=document.createElement("div");C.classList.add("video-tabs-menu","rfrd-w-tab-menu");let $=document.createElement("div");$.classList.add("rfrd-tabs-content","rfrd-w-tab-content");let E=document.createElement("div");E.classList.add("rfrd-videos-top");let L=document.createElement("div");L.classList.add("rfrd-built-with-rfrd");let w=document.createElement("div");w.textContent="Built with";let k=document.createElement("a");k.href="https://www.rfrd.io",k.setAttribute("target","_blank");let y=document.createElement("img");y.classList.add("rfrd-bw-rfrd-logo"),y.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/6254a481ee51de3be6a0b275_rfrd%20dark.svg",k.appendChild(y),L.appendChild(w),L.appendChild(k);var d=e.videos.length;if(1==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0]._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].jobtitle?V.textContent=e.videos[0].jobtitle+", "+e.videos[0].worksat:e.videos[0].createdby&&(V.textContent=e.videos[0].createdby.jobtitle+", "+e.videos[0].createdby.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0]._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let M=document.createElement("video");M.classList.add("rfrd-mainvid"),M.setAttribute("data-id",e.videos[0]._id),M.style="background-image:url('"+e.videos[0].screengrab+"')",this.mainvideo1=M,this.mainvideo1.innerHTML='<source src="'+e.videos[0].link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.href=e.buttonlink,H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].widgetlink,H.textContent=e.videos[0].widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let z=document.createElement("div");z.classList.add("rfrd-video-icons");let U=document.createElement("div");U.classList.add("rfrdsoundcontainer");let B=document.createElement("div");B.classList.add("sound-on"),this.soundon1=B,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let D=document.createElement("img");D.classList.add("rfrd-video-icon"),D.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let I=document.createElement("div");I.style.display="none",I.classList.add("sound-off"),this.soundoff1=I,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let N=document.createElement("img");N.classList.add("rfrd-video-icon"),N.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(D),this.soundoff1.appendChild(N),U.appendChild(this.soundon1),U.appendChild(this.soundoff1);let q=document.createElement("div");q.classList.add("rfrdplaycontainer");let R=document.createElement("div");R.classList.add("pause-video-block");let P=document.createElement("img");P.classList.add("rfrd-video-icon"),P.style.display="none",P.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=P,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let G=document.createElement("div");G.classList.add("play-video-block");let J=document.createElement("img");J.classList.add("rfrd-video-icon"),J.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=J,this.playimg1.addEventListener("click",this.playVid.bind(this)),R.appendChild(this.pauseimg1),G.appendChild(this.playimg1),q.appendChild(R),q.appendChild(G);let K=document.createElement("div"),Q=document.createElement("img");Q.classList.add("rfrd-video-icon"),Q.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=Q,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),K.appendChild(this.fullscreenimg1),z.appendChild(U),z.appendChild(q),z.appendChild(K),F.appendChild(z),C.appendChild(x),$.appendChild(O),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(2==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0]._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].jobtitle?V.textContent=e.videos[0].jobtitle+", "+e.videos[0].worksat:e.videos[0].createdby&&(V.textContent=e.videos[0].createdby.jobtitle+", "+e.videos[0].createdby.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1]._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].jobtitle?ee.textContent=e.videos[1].jobtitle+", "+e.videos[1].worksat:e.videos[1].createdby&&(ee.textContent=e.videos[1].createdby.jobtitle+", "+e.videos[1].createdby.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0]._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let et=document.createElement("video");et.classList.add("rfrd-mainvid"),et.setAttribute("data-id",e.videos[0]._id),et.style="background-image:url('"+e.videos[0].screengrab+"')",this.mainvideo1=et,this.mainvideo1.innerHTML='<source src="'+e.videos[0].link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].widgetcta?(console.log("widget.videos[0].videoid.widgetcta:",e.videos[0].widgetcta),H.href=e.videos[0].widgetlink,H.textContent=e.videos[0].widgetcta):(console.log("nope0"),H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let ei=document.createElement("div");ei.classList.add("rfrd-video-icons");let ed=document.createElement("div");ed.classList.add("rfrdsoundcontainer");let es=document.createElement("div");es.classList.add("sound-on"),this.soundon1=es,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let ea=document.createElement("img");ea.classList.add("rfrd-video-icon"),ea.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let en=document.createElement("div");en.style.display="none",en.classList.add("sound-off"),this.soundoff1=en,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let er=document.createElement("img");er.classList.add("rfrd-video-icon"),er.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(ea),this.soundoff1.appendChild(er),ed.appendChild(this.soundon1),ed.appendChild(this.soundoff1);let el=document.createElement("div");el.classList.add("rfrdplaycontainer");let eo=document.createElement("div");eo.classList.add("pause-video-block");let ec=document.createElement("img");ec.classList.add("rfrd-video-icon"),ec.style.display="none",ec.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=ec,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ep=document.createElement("div");ep.classList.add("play-video-block");let ev=document.createElement("img");ev.classList.add("rfrd-video-icon"),ev.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=ev,this.playimg1.addEventListener("click",this.playVid.bind(this)),eo.appendChild(this.pauseimg1),ep.appendChild(this.playimg1),el.appendChild(eo),el.appendChild(ep);let ef=document.createElement("div"),eh=document.createElement("img");eh.classList.add("rfrd-video-icon"),eh.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=eh,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),ef.appendChild(this.fullscreenimg1),ei.appendChild(ed),ei.appendChild(el),ei.appendChild(ef),F.appendChild(ei);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1]._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let eg=document.createElement("video");eg.classList.add("rfrd-mainvid"),eg.setAttribute("preload","none"),eg.setAttribute("data-id",e.videos[1]._id),eg.style="background-image:url('"+e.videos[1].screengrab+"')",this.mainvideo2=eg,this.mainvideo2.innerHTML='<source src="'+e.videos[1].link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].widgetcta?(console.log("widget.videos[1].videoid.widgetcta:",e.videos[1].widgetcta),e_.href=e.videos[1].widgetlink,e_.textContent=e.videos[1].widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let eC=document.createElement("div");eC.classList.add("rfrd-video-icons");let e0=document.createElement("div");e0.classList.add("rfrdsoundcontainer");let e$=document.createElement("div");e$.classList.add("sound-on"),this.soundon2=e$,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eE=document.createElement("img");eE.classList.add("rfrd-video-icon"),eE.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let e1=document.createElement("div");e1.style.display="none",e1.classList.add("sound-off"),this.soundoff2=e1,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eL=document.createElement("img");eL.classList.add("rfrd-video-icon"),eL.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eE),this.soundoff2.appendChild(eL),e0.appendChild(this.soundon2),e0.appendChild(this.soundoff2);let ew=document.createElement("div");ew.classList.add("rfrdplaycontainer");let ek=document.createElement("div");ek.classList.add("pause-video-block");let e4=document.createElement("img");e4.classList.add("rfrd-video-icon"),e4.style.display="none",e4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=e4,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let ey=document.createElement("div");ey.classList.add("play-video-block");let e2=document.createElement("img");e2.classList.add("rfrd-video-icon"),e2.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=e2,this.playimg2.addEventListener("click",this.playVid.bind(this)),ek.appendChild(this.pauseimg2),ey.appendChild(this.playimg2),ew.appendChild(ek),ew.appendChild(ey);let ex=document.createElement("div"),e7=document.createElement("img");e7.classList.add("rfrd-video-icon"),e7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=e7,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),ex.appendChild(this.fullscreenimg2),eC.appendChild(e0),eC.appendChild(ew),eC.appendChild(ex),eu.appendChild(eC),C.appendChild(x),C.appendChild(W),$.appendChild(O),$.appendChild(eb),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(3==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0]._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].jobtitle?V.textContent=e.videos[0].jobtitle+", "+e.videos[0].worksat:e.videos[0].createdby&&(V.textContent=e.videos[0].createdby.jobtitle+", "+e.videos[0].createdby.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0]._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let e5=document.createElement("video");e5.classList.add("rfrd-mainvid"),e5.setAttribute("data-id",e.videos[0]._id),e5.style="background-image:url('"+e.videos[0].screengrab+"')",this.mainvideo1=e5,this.mainvideo1.innerHTML='<source src="'+e.videos[0].link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].widgetcta?(H.href=e.videos[0].widgetlink,H.textContent=e.videos[0].widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let e3=document.createElement("div");e3.classList.add("rfrd-video-icons");let e6=document.createElement("div");e6.classList.add("rfrdsoundcontainer");let e8=document.createElement("div");e8.classList.add("sound-on"),this.soundon1=e8,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let eA=document.createElement("img");eA.classList.add("rfrd-video-icon"),eA.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eS=document.createElement("div");eS.style.display="none",eS.classList.add("sound-off"),this.soundoff1=eS,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let ej=document.createElement("img");ej.classList.add("rfrd-video-icon"),ej.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(eA),this.soundoff1.appendChild(ej),e6.appendChild(this.soundon1),e6.appendChild(this.soundoff1);let eV=document.createElement("div");eV.classList.add("rfrdplaycontainer");let eO=document.createElement("div");eO.classList.add("pause-video-block");let eT=document.createElement("img");eT.classList.add("rfrd-video-icon"),eT.style.display="none",eT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=eT,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let eF=document.createElement("div");eF.classList.add("play-video-block");let eM=document.createElement("img");eM.classList.add("rfrd-video-icon"),eM.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=eM,this.playimg1.addEventListener("click",this.playVid.bind(this)),eO.appendChild(this.pauseimg1),eF.appendChild(this.playimg1),eV.appendChild(eO),eV.appendChild(eF);let eH=document.createElement("div"),ez=document.createElement("img");ez.classList.add("rfrd-video-icon"),ez.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=ez,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),eH.appendChild(this.fullscreenimg1),e3.appendChild(e6),e3.appendChild(eV),e3.appendChild(eH),F.appendChild(e3);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1]._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].jobtitle?ee.textContent=e.videos[1].jobtitle+", "+e.videos[1].worksat:e.videos[1].createdby&&(ee.textContent=e.videos[1].createdby.jobtitle+", "+e.videos[1].createdby.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1]._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let eU=document.createElement("video");eU.classList.add("rfrd-mainvid"),eU.setAttribute("preload","none"),eU.setAttribute("data-id",e.videos[1]._id),eU.style="background-image:url('"+e.videos[1].screengrab+"')",this.mainvideo2=eU,this.mainvideo2.innerHTML='<source src="'+e.videos[1].link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].widgetcta?(e_.href=e.videos[1].widgetlink,e_.textContent=e.videos[1].widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let eB=document.createElement("div");eB.classList.add("rfrd-video-icons");let eD=document.createElement("div");eD.classList.add("rfrdsoundcontainer");let eI=document.createElement("div");eI.classList.add("sound-on"),this.soundon2=eI,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eN=document.createElement("img");eN.classList.add("rfrd-video-icon"),eN.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eq=document.createElement("div");eq.style.display="none",eq.classList.add("sound-off"),this.soundoff2=eq,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eR=document.createElement("img");eR.classList.add("rfrd-video-icon"),eR.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eN),this.soundoff2.appendChild(eR),eD.appendChild(this.soundon2),eD.appendChild(this.soundoff2);let e9=document.createElement("div");e9.classList.add("rfrdplaycontainer");let eP=document.createElement("div");eP.classList.add("pause-video-block");let eG=document.createElement("img");eG.classList.add("rfrd-video-icon"),eG.style.display="none",eG.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=eG,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let eJ=document.createElement("div");eJ.classList.add("play-video-block");let eK=document.createElement("img");eK.classList.add("rfrd-video-icon"),eK.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=eK,this.playimg2.addEventListener("click",this.playVid.bind(this)),eP.appendChild(this.pauseimg2),eJ.appendChild(this.playimg2),e9.appendChild(eP),e9.appendChild(eJ);let eQ=document.createElement("div"),eW=document.createElement("img");eW.classList.add("rfrd-video-icon"),eW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=eW,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),eQ.appendChild(this.fullscreenimg2),eB.appendChild(eD),eB.appendChild(e9),eB.appendChild(eQ),eu.appendChild(eB);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2]._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),te=document.createElement("div");te.classList.add("rfrd-side-video-name"),te.textContent=e.videos[2].name;var tt=document.createElement("div");tt.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?tt.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].jobtitle?tt.textContent=e.videos[2].jobtitle+", "+e.videos[2].worksat:e.videos[2].createdby&&(tt.textContent=e.videos[2].createdby.jobtitle+", "+e.videos[2].createdby.worksat),eZ.appendChild(te),eZ.appendChild(tt),eX.appendChild(eZ);var ti=document.createElement("div");ti.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ti.setAttribute("data-id",e.videos[2]._id);var td=document.createElement("div");td.classList.add("rfrd-video-flyout-wrap");var ts=document.createElement("div");ts.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ts.style.paddingTop="56.17021276595745%";let ta=document.createElement("video");ta.classList.add("rfrd-mainvid"),ta.setAttribute("preload","none"),ta.setAttribute("data-id",e.videos[2]._id),ta.style="background-image:url('"+e.videos[2].screengrab+"')",this.mainvideo3=ta,this.mainvideo3.innerHTML='<source src="'+e.videos[2].link+'" data-wf-ignore="true">';var tn=document.createElement("a");tn.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),tn.style.backgroundColor="#"+e.maincolor,tn.setAttribute("target","_blank"),e.videos[2].widgetcta?(tn.href=e.videos[2].widgetlink,tn.textContent=e.videos[2].widgetcta):(tn.href=e.buttonlink,tn.textContent=e.buttoncta),ts.appendChild(this.mainvideo3),td.appendChild(ts),td.appendChild(tn),ti.appendChild(td);let tr=document.createElement("div");tr.classList.add("rfrd-video-icons");let tl=document.createElement("div");tl.classList.add("rfrdsoundcontainer");let to=document.createElement("div");to.classList.add("sound-on"),this.soundon3=to,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let tc=document.createElement("img");tc.classList.add("rfrd-video-icon"),tc.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tp=document.createElement("div");tp.style.display="none",tp.classList.add("sound-off"),this.soundoff3=tp,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let tv=document.createElement("img");tv.classList.add("rfrd-video-icon"),tv.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(tc),this.soundoff3.appendChild(tv),tl.appendChild(this.soundon3),tl.appendChild(this.soundoff3);let tf=document.createElement("div");tf.classList.add("rfrdplaycontainer");let th=document.createElement("div");th.classList.add("pause-video-block");let tb=document.createElement("img");tb.classList.add("rfrd-video-icon"),tb.style.display="none",tb.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=tb,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let tm=document.createElement("div");tm.classList.add("play-video-block");let tu=document.createElement("img");tu.classList.add("rfrd-video-icon"),tu.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=tu,this.playimg3.addEventListener("click",this.playVid.bind(this)),th.appendChild(this.pauseimg3),tm.appendChild(this.playimg3),tf.appendChild(th),tf.appendChild(tm);let tg=document.createElement("div"),t_=document.createElement("img");t_.classList.add("rfrd-video-icon"),t_.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=t_,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),tg.appendChild(this.fullscreenimg3),tr.appendChild(tl),tr.appendChild(tf),tr.appendChild(tg),ts.appendChild(tr),C.appendChild(x),C.appendChild(W),C.appendChild(eX),$.appendChild(O),$.appendChild(eb),$.appendChild(ti),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(4==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0]._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].jobtitle?V.textContent=e.videos[0].jobtitle+", "+e.videos[0].worksat:e.videos[0].createdby&&(V.textContent=e.videos[0].createdby.jobtitle+", "+e.videos[0].createdby.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0]._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let tC=document.createElement("video");tC.classList.add("rfrd-mainvid"),tC.setAttribute("data-id",e.videos[0]._id),tC.style="background-image:url('"+e.videos[0].screengrab+"')",this.mainvideo1=tC,this.mainvideo1.innerHTML='<source src="'+e.videos[0].link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].widgetcta?(H.href=e.videos[0].widgetlink,H.textContent=e.videos[0].widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let t0=document.createElement("div");t0.classList.add("rfrd-video-icons");let t$=document.createElement("div");t$.classList.add("rfrdsoundcontainer");let tE=document.createElement("div");tE.classList.add("sound-on"),this.soundon1=tE,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let t1=document.createElement("img");t1.classList.add("rfrd-video-icon"),t1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tL=document.createElement("div");tL.style.display="none",tL.classList.add("sound-off"),this.soundoff1=tL,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let tw=document.createElement("img");tw.classList.add("rfrd-video-icon"),tw.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(t1),this.soundoff1.appendChild(tw),t$.appendChild(this.soundon1),t$.appendChild(this.soundoff1);let tk=document.createElement("div");tk.classList.add("rfrdplaycontainer");let t4=document.createElement("div");t4.classList.add("pause-video-block");let ty=document.createElement("img");ty.classList.add("rfrd-video-icon"),ty.style.display="none",ty.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=ty,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let t2=document.createElement("div");t2.classList.add("play-video-block");let tx=document.createElement("img");tx.classList.add("rfrd-video-icon"),tx.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=tx,this.playimg1.addEventListener("click",this.playVid.bind(this)),t4.appendChild(this.pauseimg1),t2.appendChild(this.playimg1),tk.appendChild(t4),tk.appendChild(t2);let t7=document.createElement("div"),t5=document.createElement("img");t5.classList.add("rfrd-video-icon"),t5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=t5,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),t7.appendChild(this.fullscreenimg1),t0.appendChild(t$),t0.appendChild(tk),t0.appendChild(t7),F.appendChild(t0);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1]._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].jobtitle?ee.textContent=e.videos[1].jobtitle+", "+e.videos[1].worksat:e.videos[1].createdby&&(ee.textContent=e.videos[1].createdby.jobtitle+", "+e.videos[1].createdby.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1]._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let t3=document.createElement("video");t3.classList.add("rfrd-mainvid"),t3.setAttribute("preload","none"),t3.setAttribute("data-id",e.videos[1]._id),t3.style="background-image:url('"+e.videos[1].screengrab+"')",this.mainvideo2=t3,this.mainvideo2.innerHTML='<source src="'+e.videos[1].link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].widgetcta?(e_.href=e.videos[1].widgetlink,e_.textContent=e.videos[1].widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let t6=document.createElement("div");t6.classList.add("rfrd-video-icons");let t8=document.createElement("div");t8.classList.add("rfrdsoundcontainer");let tA=document.createElement("div");tA.classList.add("sound-on"),this.soundon2=tA,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let tS=document.createElement("img");tS.classList.add("rfrd-video-icon"),tS.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tj=document.createElement("div");tj.style.display="none",tj.classList.add("sound-off"),this.soundoff2=tj,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let tV=document.createElement("img");tV.classList.add("rfrd-video-icon"),tV.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(tS),this.soundoff2.appendChild(tV),t8.appendChild(this.soundon2),t8.appendChild(this.soundoff2);let tO=document.createElement("div");tO.classList.add("rfrdplaycontainer");let tT=document.createElement("div");tT.classList.add("pause-video-block");let tF=document.createElement("img");tF.classList.add("rfrd-video-icon"),tF.style.display="none",tF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=tF,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let tM=document.createElement("div");tM.classList.add("play-video-block");let tH=document.createElement("img");tH.classList.add("rfrd-video-icon"),tH.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=tH,this.playimg2.addEventListener("click",this.playVid.bind(this)),tT.appendChild(this.pauseimg2),tM.appendChild(this.playimg2),tO.appendChild(tT),tO.appendChild(tM);let tz=document.createElement("div"),tU=document.createElement("img");tU.classList.add("rfrd-video-icon"),tU.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=tU,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),tz.appendChild(this.fullscreenimg2),t6.appendChild(t8),t6.appendChild(tO),t6.appendChild(tz),eu.appendChild(t6);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2]._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),te=document.createElement("div");te.classList.add("rfrd-side-video-name"),te.textContent=e.videos[2].name;var tt=document.createElement("div");tt.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?tt.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].jobtitle?tt.textContent=e.videos[2].jobtitle+", "+e.videos[2].worksat:e.videos[2].createdby&&(tt.textContent=e.videos[2].createdby.jobtitle+", "+e.videos[2].createdby.worksat),eZ.appendChild(te),eZ.appendChild(tt),eX.appendChild(eZ);var ti=document.createElement("div");ti.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ti.setAttribute("data-id",e.videos[2]._id);var td=document.createElement("div");td.classList.add("rfrd-video-flyout-wrap");var ts=document.createElement("div");ts.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ts.style.paddingTop="56.17021276595745%";let tB=document.createElement("video");tB.classList.add("rfrd-mainvid"),tB.setAttribute("preload","none"),tB.setAttribute("data-id",e.videos[2]._id),tB.style="background-image:url('"+e.videos[2].screengrab+"')",this.mainvideo3=tB,this.mainvideo3.innerHTML='<source src="'+e.videos[2].link+'" data-wf-ignore="true">';var tn=document.createElement("a");tn.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),tn.style.backgroundColor="#"+e.maincolor,tn.setAttribute("target","_blank"),e.videos[2].widgetcta?(tn.href=e.videos[2].widgetlink,tn.textContent=e.videos[2].widgetcta):(tn.href=e.buttonlink,tn.textContent=e.buttoncta),ts.appendChild(this.mainvideo3),td.appendChild(ts),td.appendChild(tn),ti.appendChild(td);let tD=document.createElement("div");tD.classList.add("rfrd-video-icons");let tI=document.createElement("div");tI.classList.add("rfrdsoundcontainer");let tN=document.createElement("div");tN.classList.add("sound-on"),this.soundon3=tN,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let tq=document.createElement("img");tq.classList.add("rfrd-video-icon"),tq.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tR=document.createElement("div");tR.style.display="none",tR.classList.add("sound-off"),this.soundoff3=tR,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let t9=document.createElement("img");t9.classList.add("rfrd-video-icon"),t9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(tq),this.soundoff3.appendChild(t9),tI.appendChild(this.soundon3),tI.appendChild(this.soundoff3);let tP=document.createElement("div");tP.classList.add("rfrdplaycontainer");let tG=document.createElement("div");tG.classList.add("pause-video-block");let tJ=document.createElement("img");tJ.classList.add("rfrd-video-icon"),tJ.style.display="none",tJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=tJ,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let tK=document.createElement("div");tK.classList.add("play-video-block");let tQ=document.createElement("img");tQ.classList.add("rfrd-video-icon"),tQ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=tQ,this.playimg3.addEventListener("click",this.playVid.bind(this)),tG.appendChild(this.pauseimg3),tK.appendChild(this.playimg3),tP.appendChild(tG),tP.appendChild(tK);let tW=document.createElement("div"),tX=document.createElement("img");tX.classList.add("rfrd-video-icon"),tX.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=tX,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),tW.appendChild(this.fullscreenimg3),tD.appendChild(tI),tD.appendChild(tP),tD.appendChild(tW),ts.appendChild(tD);var tY=document.createElement("a");tY.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),tY.setAttribute("data-id",e.videos[3]._id),tY.addEventListener("click",this.showVid.bind(this),!1);var tZ=document.createElement("div");tZ.classList.add("rfrd-video-photo"),tZ.style="background-image:url('"+e.videos[3].screengrab+"')",tY.appendChild(tZ);var ie=document.createElement("div"),it=document.createElement("div");it.classList.add("rfrd-side-video-name"),it.textContent=e.videos[3].name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?ii.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].jobtitle?ii.textContent=e.videos[3].jobtitle+", "+e.videos[3].worksat:e.videos[3].createdby&&(ii.textContent=e.videos[3].createdby.jobtitle+", "+e.videos[3].createdby.worksat),ie.appendChild(it),ie.appendChild(ii),tY.appendChild(ie);var id=document.createElement("div");id.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),id.setAttribute("data-id",e.videos[3]._id);var is=document.createElement("div");is.classList.add("rfrd-video-flyout-wrap");var ia=document.createElement("div");ia.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ia.style.paddingTop="56.17021276595745%";let ir=document.createElement("video");ir.classList.add("rfrd-mainvid"),ir.setAttribute("preload","none"),ir.setAttribute("data-id",e.videos[3]._id),ir.style="background-image:url('"+e.videos[3].screengrab+"')",this.mainvideo4=ir,this.mainvideo4.innerHTML='<source src="'+e.videos[3].link+'" data-wf-ignore="true">';var il=document.createElement("a");il.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),il.style.backgroundColor="#"+e.maincolor,il.setAttribute("target","_blank"),e.videos[3].widgetcta?(il.href=e.videos[3].widgetlink,il.textContent=e.videos[3].widgetcta):(il.href=e.buttonlink,il.textContent=e.buttoncta),ia.appendChild(this.mainvideo4),is.appendChild(ia),is.appendChild(il),id.appendChild(is);let io=document.createElement("div");io.classList.add("rfrd-video-icons");let ic=document.createElement("div");ic.classList.add("rfrdsoundcontainer");let ip=document.createElement("div");ip.classList.add("sound-on"),this.soundon4=ip,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let iv=document.createElement("img");iv.classList.add("rfrd-video-icon"),iv.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let ih=document.createElement("div");ih.style.display="none",ih.classList.add("sound-off"),this.soundoff4=ih,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let ib=document.createElement("img");ib.classList.add("rfrd-video-icon"),ib.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(iv),this.soundoff4.appendChild(ib),ic.appendChild(this.soundon4),ic.appendChild(this.soundoff4);let im=document.createElement("div");im.classList.add("rfrdplaycontainer");let iu=document.createElement("div");iu.classList.add("pause-video-block");let ig=document.createElement("img");ig.classList.add("rfrd-video-icon"),ig.style.display="none",ig.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=ig,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let i_=document.createElement("div");i_.classList.add("play-video-block");let iC=document.createElement("img");iC.classList.add("rfrd-video-icon"),iC.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=iC,this.playimg4.addEventListener("click",this.playVid.bind(this)),iu.appendChild(this.pauseimg4),i_.appendChild(this.playimg4),im.appendChild(iu),im.appendChild(i_);let i0=document.createElement("div"),i$=document.createElement("img");i$.classList.add("rfrd-video-icon"),i$.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=i$,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),i0.appendChild(this.fullscreenimg4),io.appendChild(ic),io.appendChild(im),io.appendChild(i0),ia.appendChild(io),C.appendChild(x),C.appendChild(W),C.appendChild(eX),C.appendChild(tY),$.appendChild(O),$.appendChild(eb),$.appendChild(ti),$.appendChild(id),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(5==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0]._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].jobtitle?V.textContent=e.videos[0].jobtitle+", "+e.videos[0].worksat:e.videos[0].createdby&&(V.textContent=e.videos[0].createdby.jobtitle+", "+e.videos[0].createdby.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0]._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let iE=document.createElement("video");iE.classList.add("rfrd-mainvid"),iE.setAttribute("data-id",e.videos[0]._id),iE.style="background-image:url('"+e.videos[0].screengrab+"')",this.mainvideo1=iE,this.mainvideo1.innerHTML='<source src="'+e.videos[0].link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].widgetcta?(H.href=e.videos[0].widgetlink,H.textContent=e.videos[0].widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let i1=document.createElement("div");i1.classList.add("rfrd-video-icons");let iL=document.createElement("div");iL.classList.add("rfrdsoundcontainer");let iw=document.createElement("div");iw.classList.add("sound-on"),this.soundon1=iw,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let ik=document.createElement("img");ik.classList.add("rfrd-video-icon"),ik.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let i4=document.createElement("div");i4.style.display="none",i4.classList.add("sound-off"),this.soundoff1=i4,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let iy=document.createElement("img");iy.classList.add("rfrd-video-icon"),iy.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(ik),this.soundoff1.appendChild(iy),iL.appendChild(this.soundon1),iL.appendChild(this.soundoff1);let i2=document.createElement("div");i2.classList.add("rfrdplaycontainer");let ix=document.createElement("div");ix.classList.add("pause-video-block");let i7=document.createElement("img");i7.classList.add("rfrd-video-icon"),i7.style.display="none",i7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=i7,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let i5=document.createElement("div");i5.classList.add("play-video-block");let i3=document.createElement("img");i3.classList.add("rfrd-video-icon"),i3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=i3,this.playimg1.addEventListener("click",this.playVid.bind(this)),ix.appendChild(this.pauseimg1),i5.appendChild(this.playimg1),i2.appendChild(ix),i2.appendChild(i5);let i6=document.createElement("div"),i8=document.createElement("img");i8.classList.add("rfrd-video-icon"),i8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=i8,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),i6.appendChild(this.fullscreenimg1),i1.appendChild(iL),i1.appendChild(i2),i1.appendChild(i6),F.appendChild(i1);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1]._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].jobtitle?ee.textContent=e.videos[1].jobtitle+", "+e.videos[1].worksat:e.videos[1].createdby&&(ee.textContent=e.videos[1].createdby.jobtitle+", "+e.videos[1].createdby.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1]._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let iA=document.createElement("video");iA.classList.add("rfrd-mainvid"),iA.setAttribute("preload","none"),iA.setAttribute("data-id",e.videos[1]._id),iA.style="background-image:url('"+e.videos[1].screengrab+"')",this.mainvideo2=iA,this.mainvideo2.innerHTML='<source src="'+e.videos[1].link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].widgetcta?(e_.href=e.videos[1].widgetlink,e_.textContent=e.videos[1].widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let iS=document.createElement("div");iS.classList.add("rfrd-video-icons");let ij=document.createElement("div");ij.classList.add("rfrdsoundcontainer");let iV=document.createElement("div");iV.classList.add("sound-on"),this.soundon2=iV,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let iO=document.createElement("img");iO.classList.add("rfrd-video-icon"),iO.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iT=document.createElement("div");iT.style.display="none",iT.classList.add("sound-off"),this.soundoff2=iT,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let iF=document.createElement("img");iF.classList.add("rfrd-video-icon"),iF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(iO),this.soundoff2.appendChild(iF),ij.appendChild(this.soundon2),ij.appendChild(this.soundoff2);let iM=document.createElement("div");iM.classList.add("rfrdplaycontainer");let iH=document.createElement("div");iH.classList.add("pause-video-block");let iz=document.createElement("img");iz.classList.add("rfrd-video-icon"),iz.style.display="none",iz.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=iz,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let iU=document.createElement("div");iU.classList.add("play-video-block");let iB=document.createElement("img");iB.classList.add("rfrd-video-icon"),iB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=iB,this.playimg2.addEventListener("click",this.playVid.bind(this)),iH.appendChild(this.pauseimg2),iU.appendChild(this.playimg2),iM.appendChild(iH),iM.appendChild(iU);let iD=document.createElement("div"),iI=document.createElement("img");iI.classList.add("rfrd-video-icon"),iI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=iI,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),iD.appendChild(this.fullscreenimg2),iS.appendChild(ij),iS.appendChild(iM),iS.appendChild(iD),eu.appendChild(iS);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2]._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),te=document.createElement("div");te.classList.add("rfrd-side-video-name"),te.textContent=e.videos[2].name;var tt=document.createElement("div");tt.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?tt.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].jobtitle?tt.textContent=e.videos[2].jobtitle+", "+e.videos[2].worksat:e.videos[2].createdby&&(tt.textContent=e.videos[2].createdby.jobtitle+", "+e.videos[2].createdby.worksat),eZ.appendChild(te),eZ.appendChild(tt),eX.appendChild(eZ);var ti=document.createElement("div");ti.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ti.setAttribute("data-id",e.videos[2]._id);var td=document.createElement("div");td.classList.add("rfrd-video-flyout-wrap");var ts=document.createElement("div");ts.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ts.style.paddingTop="56.17021276595745%";let iN=document.createElement("video");iN.classList.add("rfrd-mainvid"),iN.setAttribute("preload","none"),iN.setAttribute("data-id",e.videos[2]._id),iN.style="background-image:url('"+e.videos[2].screengrab+"')",this.mainvideo3=iN,this.mainvideo3.innerHTML='<source src="'+e.videos[2].link+'" data-wf-ignore="true">';var tn=document.createElement("a");tn.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),tn.style.backgroundColor="#"+e.maincolor,tn.setAttribute("target","_blank"),e.videos[2].widgetcta?(tn.href=e.videos[2].widgetlink,tn.textContent=e.videos[2].widgetcta):(tn.href=e.buttonlink,tn.textContent=e.buttoncta),ts.appendChild(this.mainvideo3),td.appendChild(ts),td.appendChild(tn),ti.appendChild(td);let iq=document.createElement("div");iq.classList.add("rfrd-video-icons");let iR=document.createElement("div");iR.classList.add("rfrdsoundcontainer");let i9=document.createElement("div");i9.classList.add("sound-on"),this.soundon3=i9,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let iP=document.createElement("img");iP.classList.add("rfrd-video-icon"),iP.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iG=document.createElement("div");iG.style.display="none",iG.classList.add("sound-off"),this.soundoff3=iG,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let iJ=document.createElement("img");iJ.classList.add("rfrd-video-icon"),iJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(iP),this.soundoff3.appendChild(iJ),iR.appendChild(this.soundon3),iR.appendChild(this.soundoff3);let iK=document.createElement("div");iK.classList.add("rfrdplaycontainer");let iQ=document.createElement("div");iQ.classList.add("pause-video-block");let iW=document.createElement("img");iW.classList.add("rfrd-video-icon"),iW.style.display="none",iW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=iW,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let iX=document.createElement("div");iX.classList.add("play-video-block");let iY=document.createElement("img");iY.classList.add("rfrd-video-icon"),iY.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=iY,this.playimg3.addEventListener("click",this.playVid.bind(this)),iQ.appendChild(this.pauseimg3),iX.appendChild(this.playimg3),iK.appendChild(iQ),iK.appendChild(iX);let iZ=document.createElement("div"),de=document.createElement("img");de.classList.add("rfrd-video-icon"),de.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=de,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),iZ.appendChild(this.fullscreenimg3),iq.appendChild(iR),iq.appendChild(iK),iq.appendChild(iZ),ts.appendChild(iq);var tY=document.createElement("a");tY.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),tY.setAttribute("data-id",e.videos[3]._id),tY.addEventListener("click",this.showVid.bind(this),!1);var tZ=document.createElement("div");tZ.classList.add("rfrd-video-photo"),tZ.style="background-image:url('"+e.videos[3].screengrab+"')",tY.appendChild(tZ);var ie=document.createElement("div"),it=document.createElement("div");it.classList.add("rfrd-side-video-name"),it.textContent=e.videos[3].name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?ii.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].jobtitle?ii.textContent=e.videos[3].jobtitle+", "+e.videos[3].worksat:e.videos[3].createdby&&(ii.textContent=e.videos[3].createdby.jobtitle+", "+e.videos[3].createdby.worksat),ie.appendChild(it),ie.appendChild(ii),tY.appendChild(ie);var id=document.createElement("div");id.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),id.setAttribute("data-id",e.videos[3]._id);var is=document.createElement("div");is.classList.add("rfrd-video-flyout-wrap");var ia=document.createElement("div");ia.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ia.style.paddingTop="56.17021276595745%";let dt=document.createElement("video");dt.classList.add("rfrd-mainvid"),dt.setAttribute("preload","none"),dt.setAttribute("data-id",e.videos[3]._id),dt.style="background-image:url('"+e.videos[3].screengrab+"')",this.mainvideo4=dt,this.mainvideo4.innerHTML='<source src="'+e.videos[3].link+'" data-wf-ignore="true">';var il=document.createElement("a");il.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),il.style.backgroundColor="#"+e.maincolor,il.setAttribute("target","_blank"),e.videos[3].widgetcta?(il.href=e.videos[3].widgetlink,il.textContent=e.videos[3].widgetcta):(il.href=e.buttonlink,il.textContent=e.buttoncta),ia.appendChild(this.mainvideo4),is.appendChild(ia),is.appendChild(il),id.appendChild(is);let di=document.createElement("div");di.classList.add("rfrd-video-icons");let dd=document.createElement("div");dd.classList.add("rfrdsoundcontainer");let ds=document.createElement("div");ds.classList.add("sound-on"),this.soundon4=ds,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let da=document.createElement("img");da.classList.add("rfrd-video-icon"),da.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dn=document.createElement("div");dn.style.display="none",dn.classList.add("sound-off"),this.soundoff4=dn,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let dr=document.createElement("img");dr.classList.add("rfrd-video-icon"),dr.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(da),this.soundoff4.appendChild(dr),dd.appendChild(this.soundon4),dd.appendChild(this.soundoff4);let dl=document.createElement("div");dl.classList.add("rfrdplaycontainer");let dc=document.createElement("div");dc.classList.add("pause-video-block");let dp=document.createElement("img");dp.classList.add("rfrd-video-icon"),dp.style.display="none",dp.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=dp,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let dv=document.createElement("div");dv.classList.add("play-video-block");let df=document.createElement("img");df.classList.add("rfrd-video-icon"),df.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=df,this.playimg4.addEventListener("click",this.playVid.bind(this)),dc.appendChild(this.pauseimg4),dv.appendChild(this.playimg4),dl.appendChild(dc),dl.appendChild(dv);let dh=document.createElement("div"),db=document.createElement("img");db.classList.add("rfrd-video-icon"),db.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=db,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),dh.appendChild(this.fullscreenimg4),di.appendChild(dd),di.appendChild(dl),di.appendChild(dh),ia.appendChild(di);var dm=document.createElement("a");dm.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),dm.setAttribute("data-id",e.videos[4]._id),dm.addEventListener("click",this.showVid.bind(this),!1);var du=document.createElement("div");du.classList.add("rfrd-video-photo"),du.style="background-image:url('"+e.videos[4].screengrab+"')",dm.appendChild(du);var dg=document.createElement("div"),d_=document.createElement("div");d_.classList.add("rfrd-side-video-name"),d_.textContent=e.videos[4].name;var dC=document.createElement("div");dC.classList.add("rfrd-side-video-title"),e.videos[4].featuredid?dC.textContent=e.videos[4].featuredid.jobtitle+", "+e.videos[4].featuredid.worksat:e.videos[4].jobtitle?dC.textContent=e.videos[4].jobtitle+", "+e.videos[4].worksat:e.videos[4].createdby&&(dC.textContent=e.videos[4].createdby.jobtitle+", "+e.videos[4].createdby.worksat),dg.appendChild(d_),dg.appendChild(dC),dm.appendChild(dg);var d0=document.createElement("div");d0.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),d0.setAttribute("data-id",e.videos[4]._id);var d$=document.createElement("div");d$.classList.add("rfrd-video-flyout-wrap");var dE=document.createElement("div");dE.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),dE.style.paddingTop="56.17021276595745%";let d1=document.createElement("video");d1.classList.add("rfrd-mainvid"),d1.setAttribute("preload","none"),d1.setAttribute("data-id",e.videos[4]._id),d1.style="background-image:url('"+e.videos[4].screengrab+"')",this.mainvideo5=d1,this.mainvideo5.innerHTML='<source src="'+e.videos[4].link+'" data-wf-ignore="true">';var dL=document.createElement("a");dL.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),dL.style.backgroundColor="#"+e.maincolor,dL.setAttribute("target","_blank"),e.videos[4].widgetcta?(dL.href=e.videos[4].widgetlink,dL.textContent=e.videos[4].widgetcta):(dL.href=e.buttonlink,dL.textContent=e.buttoncta),dE.appendChild(this.mainvideo5),d$.appendChild(dE),d$.appendChild(dL),d0.appendChild(d$);let dw=document.createElement("div");dw.classList.add("rfrd-video-icons");let dk=document.createElement("div");dk.classList.add("rfrdsoundcontainer");let d4=document.createElement("div");d4.classList.add("sound-on"),this.soundon5=d4,this.soundon5.addEventListener("click",this.toggleSoundOn.bind(this));let dy=document.createElement("img");dy.classList.add("rfrd-video-icon"),dy.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let d2=document.createElement("div");d2.style.display="none",d2.classList.add("sound-off"),this.soundoff5=d2,this.soundoff5.addEventListener("click",this.toggleSoundOff.bind(this));let dx=document.createElement("img");dx.classList.add("rfrd-video-icon"),dx.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon5.appendChild(dy),this.soundoff5.appendChild(dx),dk.appendChild(this.soundon5),dk.appendChild(this.soundoff5);let d7=document.createElement("div");d7.classList.add("rfrdplaycontainer");let d5=document.createElement("div");d5.classList.add("pause-video-block");let d3=document.createElement("img");d3.classList.add("rfrd-video-icon"),d3.style.display="none",d3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg5=d3,this.pauseimg5.addEventListener("click",this.pauseVid.bind(this));let d6=document.createElement("div");d6.classList.add("play-video-block");let d8=document.createElement("img");d8.classList.add("rfrd-video-icon"),d8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg5=d8,this.playimg5.addEventListener("click",this.playVid.bind(this)),d5.appendChild(this.pauseimg5),d6.appendChild(this.playimg5),d7.appendChild(d5),d7.appendChild(d6);let dA=document.createElement("div"),dS=document.createElement("img");dS.classList.add("rfrd-video-icon"),dS.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg5=dS,this.fullscreenimg5.addEventListener("click",this.toggleFullScreen.bind(this)),dA.appendChild(this.fullscreenimg5),dw.appendChild(dk),dw.appendChild(d7),dw.appendChild(dA),dE.appendChild(dw),C.appendChild(x),C.appendChild(W),C.appendChild(eX),C.appendChild(tY),C.appendChild(dm),$.appendChild(O),$.appendChild(eb),$.appendChild(ti),$.appendChild(id),$.appendChild(d0),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}this.messageContainer.appendChild(t),this.messageContainer.appendChild(u)}submit(e){e.preventDefault(),e.srcElement.querySelector("#email").value,e.srcElement.querySelector("#message").value,this.messageContainer.innerHTML='<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry'}toggleOpen(){this.open=!this.open,this.container.style="height: auto",this.buttonContainer.classList.add("rfrd-hidden"),this.messageContainer.classList.remove("rfrd-hidden")}toggleClose(){this.container.style="height: 0px",this.buttonContainer.classList.remove("rfrd-hidden"),this.messageContainer.classList.add("rfrd-hidden"),this.playimg.removeAttribute("style"),this.pauseimg.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.firstChild.firstChild.firstChild.pause(),e.firstChild.firstChild.firstChild.currentTime=0,e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none"})}toggleSoundOn(e){e.target.closest(".rfrdsoundcontainer").lastChild.removeAttribute("style"),e.target.closest(".sound-on").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&(e.firstChild.firstChild.firstChild.muted=!e.firstChild.firstChild.firstChild.muted)})}toggleSoundOff(e){e.target.closest(".rfrdsoundcontainer").firstChild.removeAttribute("style"),e.target.closest(".sound-off").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&(e.firstChild.firstChild.firstChild.muted=!e.firstChild.firstChild.firstChild.muted)})}toggleFullScreen(){document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.requestFullscreen()})}playVid(e){e.target.closest(".rfrdplaycontainer").firstChild.firstChild.removeAttribute("style"),e.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.play()})}pauseVid(e){e.target.closest(".rfrdplaycontainer").lastChild.firstChild.removeAttribute("style"),e.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.pause()})}showVid(e){var t=e.target.closest(".rfrd-video-row").getAttribute("data-id");document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){t==e.getAttribute("data-id")?(e.classList.add("rfrd-w--tab-active"),e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",e.firstChild.firstChild.firstChild.pause(),e.currentTime=0):(e.classList.remove("rfrd-w--tab-active"),e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",e.firstChild.firstChild.firstChild.pause(),e.currentTime=0)})}};
