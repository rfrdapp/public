new class e{constructor({position:e="bottom-left"}={}){this.position=this.getPosition(e),this.open=!1,this.initalise()}getPosition(e){let[i,t]=e.split("-");return{[i]:"30px",[t]:"30px"}}getUrlTag(e){return console.log('url.split("/"):',e.split("/")),e.split("/")[3]}async initalise(){async function e(){let e=await fetch("https://api.ipify.org/?format=json").then(e=>e.json());return e}var i=await e();async function t(e,i){var t="https://app.rfrd.io/read/id/ip/"+e+"/"+i;console.log("serverURL:",t);let d=await fetch(t).then(e=>e.json());return d}console.log("foundip:",i.ip);let d=document.getElementById("rfrd-widget"),s=d.dataset.id;console.log("made it here");var a=await t(s,"98.53.167.115");if(console.log({rrrr:a}),a.videos[0].videoid){let n=document.createElement("div");n.classList.add("rfrd-cheer-wrapper"),n.style="height: 0px",this.container=n,document.body.appendChild(n);let r=document.createElement("div");r.classList.add("rfrd-cheer-video-bg"),this.buttonContainer=r;let l=document.createElement("div");l.classList.add("rfrd-cheer-background-video");let o=document.createElement("div");o.classList.add("rfrd-cheer-bg","rfrd-background-video","w-background-video-atom"),o.setAttribute("data-video-urls",a.videos[0].videoid.link),o.setAttribute("data-autoplay","true"),o.setAttribute("data-loop","true"),o.setAttribute("data-wf-ignore","true"),this.videogif=o;let c=document.createElement("video");c.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",c.autoplay=!0,c.loop=!0,c.muted=!0,c.playsinline=!0,this.video=c,this.video.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">',this.videogif.appendChild(this.video),l.appendChild(this.videogif);let p=document.createElement("div");p.classList.add("rfrd-cheer-cta"),p.style.backgroundColor="#"+a.maincolor,this.cheercta=p,this.cheercta.innerHTML="<div>"+a.widgetcta+"</div>",this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("rfrd-hidden","rfrd-activated"),this.createMessageContainerContent(a),r.appendChild(l),r.appendChild(this.cheercta),r.addEventListener("click",this.toggleOpen.bind(this)),this.container.append(this.messageContainer),this.container.append(r),this.createStyles(a)}else{let v=document.createElement("div");v.classList.add("rfrd-cheer-wrapper"),v.style="height: 0px",this.container=v,document.body.appendChild(v);let f=document.createElement("div");f.classList.add("rfrd-cheer-video-bg"),this.buttonContainer=f;let h=document.createElement("div");h.classList.add("rfrd-cheer-background-video");let b=document.createElement("div");b.classList.add("rfrd-cheer-bg","rfrd-background-video","w-background-video-atom"),b.setAttribute("data-video-urls",a.videos[0].link),b.setAttribute("data-autoplay","true"),b.setAttribute("data-loop","true"),b.setAttribute("data-wf-ignore","true"),this.videogif=b;let m=document.createElement("video");m.style="background-image:url('"+a.videos[0].screengrab+"')",m.autoplay=!0,m.loop=!0,m.muted=!0,m.playsinline=!0,this.video=m,this.video.innerHTML='<source src="'+a.videos[0].link+'" data-wf-ignore="true">',this.videogif.appendChild(this.video),h.appendChild(this.videogif);let u=document.createElement("div");u.classList.add("rfrd-cheer-cta"),u.style.backgroundColor="#"+a.maincolor,this.cheercta=u,this.cheercta.innerHTML="<div>"+a.widgetcta+"</div>",this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("rfrd-hidden","rfrd-activated"),this.createMessageContainerContentNoID(a),f.appendChild(h),f.appendChild(this.cheercta),f.addEventListener("click",this.toggleOpen.bind(this)),this.container.append(this.messageContainer),this.container.append(f),this.createStyles(a)}}createStyles(e){let i=document.createElement("style");e.videos[0].videoid?i.innerHTML=`
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
        `.replace(/^\s+|\n/gm,""):i.innerHTML=`
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
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(i)}createMessageContainerContent(e){this.messageContainer.innerHTML="";let i=document.createElement("div");i.classList.add("rfrd-page-bg"),i.addEventListener("click",this.toggleClose.bind(this));let t=document.createElement("div");i.appendChild(t);var d=e.videos.length;let s=document.createElement("div");s.classList.add("rfrd-video-icons");let a=document.createElement("div"),n=document.createElement("div");n.classList.add("sound-on"),this.soundon=n,this.soundon.addEventListener("click",this.toggleSoundOn.bind(this));let r=document.createElement("img");r.classList.add("rfrd-video-icon"),r.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let l=document.createElement("div");l.style.display="none",l.classList.add("sound-off"),this.soundoff=l,this.soundoff.addEventListener("click",this.toggleSoundOff.bind(this));let o=document.createElement("img");o.classList.add("rfrd-video-icon"),o.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon.appendChild(r),this.soundoff.appendChild(o),a.appendChild(this.soundon),a.appendChild(this.soundoff);let c=document.createElement("div"),p=document.createElement("div");p.classList.add("pause-video-block");let v=document.createElement("img");v.classList.add("rfrd-video-icon"),v.style.display="none",v.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg=v,this.pauseimg.addEventListener("click",this.pauseVid.bind(this));let f=document.createElement("div");f.classList.add("play-video-block");let h=document.createElement("img");h.classList.add("rfrd-video-icon"),h.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg=h,this.playimg.addEventListener("click",this.playVid.bind(this)),p.appendChild(this.pauseimg),f.appendChild(this.playimg),c.appendChild(p),c.appendChild(f);let b=document.createElement("div"),m=document.createElement("img");m.classList.add("rfrd-video-icon"),m.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg=m,this.fullscreenimg.addEventListener("click",this.toggleFullScreen.bind(this)),b.appendChild(this.fullscreenimg),s.appendChild(a),s.appendChild(c),s.appendChild(b);let u=document.createElement("div");u.classList.add("rfrd-cheer-wrap"),u.id="cheer-wrap";let g=document.createElement("div");g.classList.add("rfrd-side-cheer-header"),g.textContent=e.cardlabel;let _=document.createElement("div");_.classList.add("video-tabs","rfrd-w-tabs");let C=document.createElement("div");C.classList.add("video-tabs-menu","rfrd-w-tab-menu");let $=document.createElement("div");$.classList.add("rfrd-tabs-content","rfrd-w-tab-content");let E=document.createElement("div");E.classList.add("rfrd-videos-top");let L=document.createElement("div");L.classList.add("rfrd-built-with-rfrd");let w=document.createElement("div");w.textContent="Built with";let k=document.createElement("a");k.href="https://www.rfrd.io",k.setAttribute("target","_blank");let y=document.createElement("img");y.classList.add("rfrd-bw-rfrd-logo"),y.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/6254a481ee51de3be6a0b275_rfrd%20dark.svg",k.appendChild(y),L.appendChild(w),L.appendChild(k);var d=e.videos.length;if(1==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let M=document.createElement("video");M.classList.add("rfrd-mainvid"),M.setAttribute("data-id",e.videos[0].videoid._id),M.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=M,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.href=e.buttonlink,H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let z=document.createElement("div");z.classList.add("rfrd-video-icons");let U=document.createElement("div");U.classList.add("rfrdsoundcontainer");let B=document.createElement("div");B.classList.add("sound-on"),this.soundon1=B,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let D=document.createElement("img");D.classList.add("rfrd-video-icon"),D.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let I=document.createElement("div");I.style.display="none",I.classList.add("sound-off"),this.soundoff1=I,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let N=document.createElement("img");N.classList.add("rfrd-video-icon"),N.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(D),this.soundoff1.appendChild(N),U.appendChild(this.soundon1),U.appendChild(this.soundoff1);let q=document.createElement("div");q.classList.add("rfrdplaycontainer");let R=document.createElement("div");R.classList.add("pause-video-block");let P=document.createElement("img");P.classList.add("rfrd-video-icon"),P.style.display="none",P.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=P,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let G=document.createElement("div");G.classList.add("play-video-block");let J=document.createElement("img");J.classList.add("rfrd-video-icon"),J.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=J,this.playimg1.addEventListener("click",this.playVid.bind(this)),R.appendChild(this.pauseimg1),G.appendChild(this.playimg1),q.appendChild(R),q.appendChild(G);let K=document.createElement("div"),Q=document.createElement("img");Q.classList.add("rfrd-video-icon"),Q.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=Q,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),K.appendChild(this.fullscreenimg1),z.appendChild(U),z.appendChild(q),z.appendChild(K),F.appendChild(z),C.appendChild(x),$.appendChild(O),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(2==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let ei=document.createElement("video");ei.classList.add("rfrd-mainvid"),ei.setAttribute("data-id",e.videos[0].videoid._id),ei.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=ei,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(console.log("widget.videos[0].videoid.widgetcta:",e.videos[0].videoid.widgetcta),H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(console.log("nope0"),H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let et=document.createElement("div");et.classList.add("rfrd-video-icons");let ed=document.createElement("div");ed.classList.add("rfrdsoundcontainer");let es=document.createElement("div");es.classList.add("sound-on"),this.soundon1=es,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let ea=document.createElement("img");ea.classList.add("rfrd-video-icon"),ea.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let en=document.createElement("div");en.style.display="none",en.classList.add("sound-off"),this.soundoff1=en,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let er=document.createElement("img");er.classList.add("rfrd-video-icon"),er.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(ea),this.soundoff1.appendChild(er),ed.appendChild(this.soundon1),ed.appendChild(this.soundoff1);let el=document.createElement("div");el.classList.add("rfrdplaycontainer");let eo=document.createElement("div");eo.classList.add("pause-video-block");let ec=document.createElement("img");ec.classList.add("rfrd-video-icon"),ec.style.display="none",ec.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=ec,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ep=document.createElement("div");ep.classList.add("play-video-block");let ev=document.createElement("img");ev.classList.add("rfrd-video-icon"),ev.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=ev,this.playimg1.addEventListener("click",this.playVid.bind(this)),eo.appendChild(this.pauseimg1),ep.appendChild(this.playimg1),el.appendChild(eo),el.appendChild(ep);let ef=document.createElement("div"),eh=document.createElement("img");eh.classList.add("rfrd-video-icon"),eh.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=eh,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),ef.appendChild(this.fullscreenimg1),et.appendChild(ed),et.appendChild(el),et.appendChild(ef),F.appendChild(et);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let eg=document.createElement("video");eg.classList.add("rfrd-mainvid"),eg.setAttribute("preload","none"),eg.setAttribute("data-id",e.videos[1].videoid._id),eg.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=eg,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(console.log("widget.videos[1].videoid.widgetcta:",e.videos[1].videoid.widgetcta),e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let eC=document.createElement("div");eC.classList.add("rfrd-video-icons");let e0=document.createElement("div");e0.classList.add("rfrdsoundcontainer");let e$=document.createElement("div");e$.classList.add("sound-on"),this.soundon2=e$,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eE=document.createElement("img");eE.classList.add("rfrd-video-icon"),eE.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let e1=document.createElement("div");e1.style.display="none",e1.classList.add("sound-off"),this.soundoff2=e1,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eL=document.createElement("img");eL.classList.add("rfrd-video-icon"),eL.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eE),this.soundoff2.appendChild(eL),e0.appendChild(this.soundon2),e0.appendChild(this.soundoff2);let ew=document.createElement("div");ew.classList.add("rfrdplaycontainer");let e4=document.createElement("div");e4.classList.add("pause-video-block");let ek=document.createElement("img");ek.classList.add("rfrd-video-icon"),ek.style.display="none",ek.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=ek,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let ey=document.createElement("div");ey.classList.add("play-video-block");let e2=document.createElement("img");e2.classList.add("rfrd-video-icon"),e2.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=e2,this.playimg2.addEventListener("click",this.playVid.bind(this)),e4.appendChild(this.pauseimg2),ey.appendChild(this.playimg2),ew.appendChild(e4),ew.appendChild(ey);let e7=document.createElement("div"),ex=document.createElement("img");ex.classList.add("rfrd-video-icon"),ex.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=ex,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),e7.appendChild(this.fullscreenimg2),eC.appendChild(e0),eC.appendChild(ew),eC.appendChild(e7),eu.appendChild(eC),C.appendChild(x),C.appendChild(W),$.appendChild(O),$.appendChild(eb),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(3==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let e5=document.createElement("video");e5.classList.add("rfrd-mainvid"),e5.setAttribute("data-id",e.videos[0].videoid._id),e5.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=e5,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let e3=document.createElement("div");e3.classList.add("rfrd-video-icons");let e6=document.createElement("div");e6.classList.add("rfrdsoundcontainer");let e8=document.createElement("div");e8.classList.add("sound-on"),this.soundon1=e8,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let eA=document.createElement("img");eA.classList.add("rfrd-video-icon"),eA.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eS=document.createElement("div");eS.style.display="none",eS.classList.add("sound-off"),this.soundoff1=eS,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let ej=document.createElement("img");ej.classList.add("rfrd-video-icon"),ej.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(eA),this.soundoff1.appendChild(ej),e6.appendChild(this.soundon1),e6.appendChild(this.soundoff1);let eV=document.createElement("div");eV.classList.add("rfrdplaycontainer");let eO=document.createElement("div");eO.classList.add("pause-video-block");let eT=document.createElement("img");eT.classList.add("rfrd-video-icon"),eT.style.display="none",eT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=eT,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let eF=document.createElement("div");eF.classList.add("play-video-block");let eM=document.createElement("img");eM.classList.add("rfrd-video-icon"),eM.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=eM,this.playimg1.addEventListener("click",this.playVid.bind(this)),eO.appendChild(this.pauseimg1),eF.appendChild(this.playimg1),eV.appendChild(eO),eV.appendChild(eF);let eH=document.createElement("div"),ez=document.createElement("img");ez.classList.add("rfrd-video-icon"),ez.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=ez,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),eH.appendChild(this.fullscreenimg1),e3.appendChild(e6),e3.appendChild(eV),e3.appendChild(eH),F.appendChild(e3);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let eU=document.createElement("video");eU.classList.add("rfrd-mainvid"),eU.setAttribute("preload","none"),eU.setAttribute("data-id",e.videos[1].videoid._id),eU.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=eU,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let eB=document.createElement("div");eB.classList.add("rfrd-video-icons");let eD=document.createElement("div");eD.classList.add("rfrdsoundcontainer");let eI=document.createElement("div");eI.classList.add("sound-on"),this.soundon2=eI,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eN=document.createElement("img");eN.classList.add("rfrd-video-icon"),eN.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eq=document.createElement("div");eq.style.display="none",eq.classList.add("sound-off"),this.soundoff2=eq,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eR=document.createElement("img");eR.classList.add("rfrd-video-icon"),eR.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eN),this.soundoff2.appendChild(eR),eD.appendChild(this.soundon2),eD.appendChild(this.soundoff2);let e9=document.createElement("div");e9.classList.add("rfrdplaycontainer");let eP=document.createElement("div");eP.classList.add("pause-video-block");let eG=document.createElement("img");eG.classList.add("rfrd-video-icon"),eG.style.display="none",eG.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=eG,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let eJ=document.createElement("div");eJ.classList.add("play-video-block");let eK=document.createElement("img");eK.classList.add("rfrd-video-icon"),eK.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=eK,this.playimg2.addEventListener("click",this.playVid.bind(this)),eP.appendChild(this.pauseimg2),eJ.appendChild(this.playimg2),e9.appendChild(eP),e9.appendChild(eJ);let eQ=document.createElement("div"),eW=document.createElement("img");eW.classList.add("rfrd-video-icon"),eW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=eW,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),eQ.appendChild(this.fullscreenimg2),eB.appendChild(eD),eB.appendChild(e9),eB.appendChild(eQ),eu.appendChild(eB);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2].videoid._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),ie=document.createElement("div");ie.classList.add("rfrd-side-video-name"),ie.textContent=e.videos[2].videoid.name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ii.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(ii.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eZ.appendChild(ie),eZ.appendChild(ii),eX.appendChild(eZ);var it=document.createElement("div");it.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),it.setAttribute("data-id",e.videos[2].videoid._id);var id=document.createElement("div");id.classList.add("rfrd-video-flyout-wrap");var is=document.createElement("div");is.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),is.style.paddingTop="56.17021276595745%";let ia=document.createElement("video");ia.classList.add("rfrd-mainvid"),ia.setAttribute("preload","none"),ia.setAttribute("data-id",e.videos[2].videoid._id),ia.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=ia,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var ir=document.createElement("a");ir.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ir.style.backgroundColor="#"+e.maincolor,ir.setAttribute("target","_blank"),e.videos[2].videoid.widgetcta?(ir.href=e.videos[2].videoid.widgetlink,ir.textContent=e.videos[2].videoid.widgetcta):(ir.href=e.buttonlink,ir.textContent=e.buttoncta),is.appendChild(this.mainvideo3),id.appendChild(is),id.appendChild(ir),it.appendChild(id);let il=document.createElement("div");il.classList.add("rfrd-video-icons");let io=document.createElement("div");io.classList.add("rfrdsoundcontainer");let ic=document.createElement("div");ic.classList.add("sound-on"),this.soundon3=ic,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let ip=document.createElement("img");ip.classList.add("rfrd-video-icon"),ip.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iv=document.createElement("div");iv.style.display="none",iv.classList.add("sound-off"),this.soundoff3=iv,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let ih=document.createElement("img");ih.classList.add("rfrd-video-icon"),ih.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(ip),this.soundoff3.appendChild(ih),io.appendChild(this.soundon3),io.appendChild(this.soundoff3);let ib=document.createElement("div");ib.classList.add("rfrdplaycontainer");let im=document.createElement("div");im.classList.add("pause-video-block");let iu=document.createElement("img");iu.classList.add("rfrd-video-icon"),iu.style.display="none",iu.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=iu,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let ig=document.createElement("div");ig.classList.add("play-video-block");let i_=document.createElement("img");i_.classList.add("rfrd-video-icon"),i_.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=i_,this.playimg3.addEventListener("click",this.playVid.bind(this)),im.appendChild(this.pauseimg3),ig.appendChild(this.playimg3),ib.appendChild(im),ib.appendChild(ig);let iC=document.createElement("div"),i0=document.createElement("img");i0.classList.add("rfrd-video-icon"),i0.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=i0,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),iC.appendChild(this.fullscreenimg3),il.appendChild(io),il.appendChild(ib),il.appendChild(iC),is.appendChild(il),C.appendChild(x),C.appendChild(W),C.appendChild(eX),$.appendChild(O),$.appendChild(eb),$.appendChild(it),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(4==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let i$=document.createElement("video");i$.classList.add("rfrd-mainvid"),i$.setAttribute("data-id",e.videos[0].videoid._id),i$.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=i$,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let iE=document.createElement("div");iE.classList.add("rfrd-video-icons");let i1=document.createElement("div");i1.classList.add("rfrdsoundcontainer");let iL=document.createElement("div");iL.classList.add("sound-on"),this.soundon1=iL,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let iw=document.createElement("img");iw.classList.add("rfrd-video-icon"),iw.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let i4=document.createElement("div");i4.style.display="none",i4.classList.add("sound-off"),this.soundoff1=i4,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let ik=document.createElement("img");ik.classList.add("rfrd-video-icon"),ik.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(iw),this.soundoff1.appendChild(ik),i1.appendChild(this.soundon1),i1.appendChild(this.soundoff1);let iy=document.createElement("div");iy.classList.add("rfrdplaycontainer");let i2=document.createElement("div");i2.classList.add("pause-video-block");let i7=document.createElement("img");i7.classList.add("rfrd-video-icon"),i7.style.display="none",i7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=i7,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ix=document.createElement("div");ix.classList.add("play-video-block");let i5=document.createElement("img");i5.classList.add("rfrd-video-icon"),i5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=i5,this.playimg1.addEventListener("click",this.playVid.bind(this)),i2.appendChild(this.pauseimg1),ix.appendChild(this.playimg1),iy.appendChild(i2),iy.appendChild(ix);let i3=document.createElement("div"),i6=document.createElement("img");i6.classList.add("rfrd-video-icon"),i6.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=i6,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),i3.appendChild(this.fullscreenimg1),iE.appendChild(i1),iE.appendChild(iy),iE.appendChild(i3),F.appendChild(iE);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let i8=document.createElement("video");i8.classList.add("rfrd-mainvid"),i8.setAttribute("preload","none"),i8.setAttribute("data-id",e.videos[1].videoid._id),i8.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=i8,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let iA=document.createElement("div");iA.classList.add("rfrd-video-icons");let iS=document.createElement("div");iS.classList.add("rfrdsoundcontainer");let ij=document.createElement("div");ij.classList.add("sound-on"),this.soundon2=ij,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let iV=document.createElement("img");iV.classList.add("rfrd-video-icon"),iV.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iO=document.createElement("div");iO.style.display="none",iO.classList.add("sound-off"),this.soundoff2=iO,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let iT=document.createElement("img");iT.classList.add("rfrd-video-icon"),iT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(iV),this.soundoff2.appendChild(iT),iS.appendChild(this.soundon2),iS.appendChild(this.soundoff2);let iF=document.createElement("div");iF.classList.add("rfrdplaycontainer");let iM=document.createElement("div");iM.classList.add("pause-video-block");let iH=document.createElement("img");iH.classList.add("rfrd-video-icon"),iH.style.display="none",iH.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=iH,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let iz=document.createElement("div");iz.classList.add("play-video-block");let iU=document.createElement("img");iU.classList.add("rfrd-video-icon"),iU.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=iU,this.playimg2.addEventListener("click",this.playVid.bind(this)),iM.appendChild(this.pauseimg2),iz.appendChild(this.playimg2),iF.appendChild(iM),iF.appendChild(iz);let iB=document.createElement("div"),iD=document.createElement("img");iD.classList.add("rfrd-video-icon"),iD.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=iD,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),iB.appendChild(this.fullscreenimg2),iA.appendChild(iS),iA.appendChild(iF),iA.appendChild(iB),eu.appendChild(iA);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2].videoid._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),ie=document.createElement("div");ie.classList.add("rfrd-side-video-name"),ie.textContent=e.videos[2].videoid.name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ii.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(ii.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eZ.appendChild(ie),eZ.appendChild(ii),eX.appendChild(eZ);var it=document.createElement("div");it.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),it.setAttribute("data-id",e.videos[2].videoid._id);var id=document.createElement("div");id.classList.add("rfrd-video-flyout-wrap");var is=document.createElement("div");is.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),is.style.paddingTop="56.17021276595745%";let iI=document.createElement("video");iI.classList.add("rfrd-mainvid"),iI.setAttribute("preload","none"),iI.setAttribute("data-id",e.videos[2].videoid._id),iI.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=iI,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var ir=document.createElement("a");ir.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ir.style.backgroundColor="#"+e.maincolor,ir.setAttribute("target","_blank"),e.videos[2].videoid.widgetcta?(ir.href=e.videos[2].videoid.widgetlink,ir.textContent=e.videos[2].videoid.widgetcta):(ir.href=e.buttonlink,ir.textContent=e.buttoncta),is.appendChild(this.mainvideo3),id.appendChild(is),id.appendChild(ir),it.appendChild(id);let iN=document.createElement("div");iN.classList.add("rfrd-video-icons");let iq=document.createElement("div");iq.classList.add("rfrdsoundcontainer");let iR=document.createElement("div");iR.classList.add("sound-on"),this.soundon3=iR,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let i9=document.createElement("img");i9.classList.add("rfrd-video-icon"),i9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iP=document.createElement("div");iP.style.display="none",iP.classList.add("sound-off"),this.soundoff3=iP,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let iG=document.createElement("img");iG.classList.add("rfrd-video-icon"),iG.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(i9),this.soundoff3.appendChild(iG),iq.appendChild(this.soundon3),iq.appendChild(this.soundoff3);let iJ=document.createElement("div");iJ.classList.add("rfrdplaycontainer");let iK=document.createElement("div");iK.classList.add("pause-video-block");let iQ=document.createElement("img");iQ.classList.add("rfrd-video-icon"),iQ.style.display="none",iQ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=iQ,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let iW=document.createElement("div");iW.classList.add("play-video-block");let iX=document.createElement("img");iX.classList.add("rfrd-video-icon"),iX.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=iX,this.playimg3.addEventListener("click",this.playVid.bind(this)),iK.appendChild(this.pauseimg3),iW.appendChild(this.playimg3),iJ.appendChild(iK),iJ.appendChild(iW);let iY=document.createElement("div"),iZ=document.createElement("img");iZ.classList.add("rfrd-video-icon"),iZ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=iZ,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),iY.appendChild(this.fullscreenimg3),iN.appendChild(iq),iN.appendChild(iJ),iN.appendChild(iY),is.appendChild(iN);var te=document.createElement("a");te.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),te.setAttribute("data-id",e.videos[3].videoid._id),te.addEventListener("click",this.showVid.bind(this),!1);var ti=document.createElement("div");ti.classList.add("rfrd-video-photo"),ti.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",te.appendChild(ti);var tt=document.createElement("div"),td=document.createElement("div");td.classList.add("rfrd-side-video-name"),td.textContent=e.videos[3].videoid.name;var ts=document.createElement("div");ts.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?ts.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].videoid.jobtitle&&(ts.textContent=e.videos[3].videoid.jobtitle+", "+e.videos[3].videoid.worksat),tt.appendChild(td),tt.appendChild(ts),te.appendChild(tt);var ta=document.createElement("div");ta.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ta.setAttribute("data-id",e.videos[3].videoid._id);var tn=document.createElement("div");tn.classList.add("rfrd-video-flyout-wrap");var tr=document.createElement("div");tr.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),tr.style.paddingTop="56.17021276595745%";let tl=document.createElement("video");tl.classList.add("rfrd-mainvid"),tl.setAttribute("preload","none"),tl.setAttribute("data-id",e.videos[3].videoid._id),tl.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",this.mainvideo4=tl,this.mainvideo4.innerHTML='<source src="'+e.videos[3].videoid.link+'" data-wf-ignore="true">';var to=document.createElement("a");to.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),to.style.backgroundColor="#"+e.maincolor,to.setAttribute("target","_blank"),e.videos[3].videoid.widgetcta?(to.href=e.videos[3].videoid.widgetlink,to.textContent=e.videos[3].videoid.widgetcta):(to.href=e.buttonlink,to.textContent=e.buttoncta),tr.appendChild(this.mainvideo4),tn.appendChild(tr),tn.appendChild(to),ta.appendChild(tn);let tc=document.createElement("div");tc.classList.add("rfrd-video-icons");let tp=document.createElement("div");tp.classList.add("rfrdsoundcontainer");let tv=document.createElement("div");tv.classList.add("sound-on"),this.soundon4=tv,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let tf=document.createElement("img");tf.classList.add("rfrd-video-icon"),tf.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let th=document.createElement("div");th.style.display="none",th.classList.add("sound-off"),this.soundoff4=th,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let tb=document.createElement("img");tb.classList.add("rfrd-video-icon"),tb.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(tf),this.soundoff4.appendChild(tb),tp.appendChild(this.soundon4),tp.appendChild(this.soundoff4);let tm=document.createElement("div");tm.classList.add("rfrdplaycontainer");let tu=document.createElement("div");tu.classList.add("pause-video-block");let tg=document.createElement("img");tg.classList.add("rfrd-video-icon"),tg.style.display="none",tg.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=tg,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let t_=document.createElement("div");t_.classList.add("play-video-block");let tC=document.createElement("img");tC.classList.add("rfrd-video-icon"),tC.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=tC,this.playimg4.addEventListener("click",this.playVid.bind(this)),tu.appendChild(this.pauseimg4),t_.appendChild(this.playimg4),tm.appendChild(tu),tm.appendChild(t_);let t0=document.createElement("div"),t$=document.createElement("img");t$.classList.add("rfrd-video-icon"),t$.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=t$,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),t0.appendChild(this.fullscreenimg4),tc.appendChild(tp),tc.appendChild(tm),tc.appendChild(t0),tr.appendChild(tc),C.appendChild(x),C.appendChild(W),C.appendChild(eX),C.appendChild(te),$.appendChild(O),$.appendChild(eb),$.appendChild(it),$.appendChild(ta),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(5==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0].videoid._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].videoid.name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].videoid.jobtitle&&(V.textContent=e.videos[0].videoid.jobtitle+", "+e.videos[0].videoid.worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0].videoid._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let tE=document.createElement("video");tE.classList.add("rfrd-mainvid"),tE.setAttribute("data-id",e.videos[0].videoid._id),tE.style="background-image:url('"+e.videos[0].videoid.screengrab+"')",this.mainvideo1=tE,this.mainvideo1.innerHTML='<source src="'+e.videos[0].videoid.link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].videoid.widgetlink,H.textContent=e.videos[0].videoid.widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let t1=document.createElement("div");t1.classList.add("rfrd-video-icons");let tL=document.createElement("div");tL.classList.add("rfrdsoundcontainer");let tw=document.createElement("div");tw.classList.add("sound-on"),this.soundon1=tw,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let t4=document.createElement("img");t4.classList.add("rfrd-video-icon"),t4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tk=document.createElement("div");tk.style.display="none",tk.classList.add("sound-off"),this.soundoff1=tk,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let ty=document.createElement("img");ty.classList.add("rfrd-video-icon"),ty.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(t4),this.soundoff1.appendChild(ty),tL.appendChild(this.soundon1),tL.appendChild(this.soundoff1);let t2=document.createElement("div");t2.classList.add("rfrdplaycontainer");let t7=document.createElement("div");t7.classList.add("pause-video-block");let tx=document.createElement("img");tx.classList.add("rfrd-video-icon"),tx.style.display="none",tx.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=tx,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let t5=document.createElement("div");t5.classList.add("play-video-block");let t3=document.createElement("img");t3.classList.add("rfrd-video-icon"),t3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=t3,this.playimg1.addEventListener("click",this.playVid.bind(this)),t7.appendChild(this.pauseimg1),t5.appendChild(this.playimg1),t2.appendChild(t7),t2.appendChild(t5);let t6=document.createElement("div"),t8=document.createElement("img");t8.classList.add("rfrd-video-icon"),t8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=t8,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),t6.appendChild(this.fullscreenimg1),t1.appendChild(tL),t1.appendChild(t2),t1.appendChild(t6),F.appendChild(t1);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1].videoid._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].videoid.name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].videoid.jobtitle&&(ee.textContent=e.videos[1].videoid.jobtitle+", "+e.videos[1].videoid.worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1].videoid._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let tA=document.createElement("video");tA.classList.add("rfrd-mainvid"),tA.setAttribute("preload","none"),tA.setAttribute("data-id",e.videos[1].videoid._id),tA.style="background-image:url('"+e.videos[1].videoid.screengrab+"')",this.mainvideo2=tA,this.mainvideo2.innerHTML='<source src="'+e.videos[1].videoid.link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].videoid.widgetcta?(e_.href=e.videos[1].videoid.widgetlink,e_.textContent=e.videos[1].videoid.widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let tS=document.createElement("div");tS.classList.add("rfrd-video-icons");let tj=document.createElement("div");tj.classList.add("rfrdsoundcontainer");let tV=document.createElement("div");tV.classList.add("sound-on"),this.soundon2=tV,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let tO=document.createElement("img");tO.classList.add("rfrd-video-icon"),tO.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tT=document.createElement("div");tT.style.display="none",tT.classList.add("sound-off"),this.soundoff2=tT,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let tF=document.createElement("img");tF.classList.add("rfrd-video-icon"),tF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(tO),this.soundoff2.appendChild(tF),tj.appendChild(this.soundon2),tj.appendChild(this.soundoff2);let tM=document.createElement("div");tM.classList.add("rfrdplaycontainer");let tH=document.createElement("div");tH.classList.add("pause-video-block");let tz=document.createElement("img");tz.classList.add("rfrd-video-icon"),tz.style.display="none",tz.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=tz,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let tU=document.createElement("div");tU.classList.add("play-video-block");let tB=document.createElement("img");tB.classList.add("rfrd-video-icon"),tB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=tB,this.playimg2.addEventListener("click",this.playVid.bind(this)),tH.appendChild(this.pauseimg2),tU.appendChild(this.playimg2),tM.appendChild(tH),tM.appendChild(tU);let tD=document.createElement("div"),tI=document.createElement("img");tI.classList.add("rfrd-video-icon"),tI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=tI,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),tD.appendChild(this.fullscreenimg2),tS.appendChild(tj),tS.appendChild(tM),tS.appendChild(tD),eu.appendChild(tS);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2].videoid._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),ie=document.createElement("div");ie.classList.add("rfrd-side-video-name"),ie.textContent=e.videos[2].videoid.name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ii.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].videoid.jobtitle&&(ii.textContent=e.videos[2].videoid.jobtitle+", "+e.videos[2].videoid.worksat),eZ.appendChild(ie),eZ.appendChild(ii),eX.appendChild(eZ);var it=document.createElement("div");it.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),it.setAttribute("data-id",e.videos[2].videoid._id);var id=document.createElement("div");id.classList.add("rfrd-video-flyout-wrap");var is=document.createElement("div");is.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),is.style.paddingTop="56.17021276595745%";let tN=document.createElement("video");tN.classList.add("rfrd-mainvid"),tN.setAttribute("preload","none"),tN.setAttribute("data-id",e.videos[2].videoid._id),tN.style="background-image:url('"+e.videos[2].videoid.screengrab+"')",this.mainvideo3=tN,this.mainvideo3.innerHTML='<source src="'+e.videos[2].videoid.link+'" data-wf-ignore="true">';var ir=document.createElement("a");ir.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ir.style.backgroundColor="#"+e.maincolor,ir.setAttribute("target","_blank"),e.videos[2].videoid.widgetcta?(ir.href=e.videos[2].videoid.widgetlink,ir.textContent=e.videos[2].videoid.widgetcta):(ir.href=e.buttonlink,ir.textContent=e.buttoncta),is.appendChild(this.mainvideo3),id.appendChild(is),id.appendChild(ir),it.appendChild(id);let tq=document.createElement("div");tq.classList.add("rfrd-video-icons");let tR=document.createElement("div");tR.classList.add("rfrdsoundcontainer");let t9=document.createElement("div");t9.classList.add("sound-on"),this.soundon3=t9,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let tP=document.createElement("img");tP.classList.add("rfrd-video-icon"),tP.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tG=document.createElement("div");tG.style.display="none",tG.classList.add("sound-off"),this.soundoff3=tG,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let tJ=document.createElement("img");tJ.classList.add("rfrd-video-icon"),tJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(tP),this.soundoff3.appendChild(tJ),tR.appendChild(this.soundon3),tR.appendChild(this.soundoff3);let tK=document.createElement("div");tK.classList.add("rfrdplaycontainer");let tQ=document.createElement("div");tQ.classList.add("pause-video-block");let tW=document.createElement("img");tW.classList.add("rfrd-video-icon"),tW.style.display="none",tW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=tW,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let tX=document.createElement("div");tX.classList.add("play-video-block");let tY=document.createElement("img");tY.classList.add("rfrd-video-icon"),tY.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=tY,this.playimg3.addEventListener("click",this.playVid.bind(this)),tQ.appendChild(this.pauseimg3),tX.appendChild(this.playimg3),tK.appendChild(tQ),tK.appendChild(tX);let tZ=document.createElement("div"),de=document.createElement("img");de.classList.add("rfrd-video-icon"),de.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=de,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),tZ.appendChild(this.fullscreenimg3),tq.appendChild(tR),tq.appendChild(tK),tq.appendChild(tZ),is.appendChild(tq);var te=document.createElement("a");te.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),te.setAttribute("data-id",e.videos[3].videoid._id),te.addEventListener("click",this.showVid.bind(this),!1);var ti=document.createElement("div");ti.classList.add("rfrd-video-photo"),ti.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",te.appendChild(ti);var tt=document.createElement("div"),td=document.createElement("div");td.classList.add("rfrd-side-video-name"),td.textContent=e.videos[3].videoid.name;var ts=document.createElement("div");ts.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?ts.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].videoid.jobtitle&&(ts.textContent=e.videos[3].videoid.jobtitle+", "+e.videos[3].videoid.worksat),tt.appendChild(td),tt.appendChild(ts),te.appendChild(tt);var ta=document.createElement("div");ta.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ta.setAttribute("data-id",e.videos[3].videoid._id);var tn=document.createElement("div");tn.classList.add("rfrd-video-flyout-wrap");var tr=document.createElement("div");tr.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),tr.style.paddingTop="56.17021276595745%";let di=document.createElement("video");di.classList.add("rfrd-mainvid"),di.setAttribute("preload","none"),di.setAttribute("data-id",e.videos[3].videoid._id),di.style="background-image:url('"+e.videos[3].videoid.screengrab+"')",this.mainvideo4=di,this.mainvideo4.innerHTML='<source src="'+e.videos[3].videoid.link+'" data-wf-ignore="true">';var to=document.createElement("a");to.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),to.style.backgroundColor="#"+e.maincolor,to.setAttribute("target","_blank"),e.videos[3].videoid.widgetcta?(to.href=e.videos[3].videoid.widgetlink,to.textContent=e.videos[3].videoid.widgetcta):(to.href=e.buttonlink,to.textContent=e.buttoncta),tr.appendChild(this.mainvideo4),tn.appendChild(tr),tn.appendChild(to),ta.appendChild(tn);let dt=document.createElement("div");dt.classList.add("rfrd-video-icons");let dd=document.createElement("div");dd.classList.add("rfrdsoundcontainer");let ds=document.createElement("div");ds.classList.add("sound-on"),this.soundon4=ds,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let da=document.createElement("img");da.classList.add("rfrd-video-icon"),da.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dn=document.createElement("div");dn.style.display="none",dn.classList.add("sound-off"),this.soundoff4=dn,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let dr=document.createElement("img");dr.classList.add("rfrd-video-icon"),dr.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(da),this.soundoff4.appendChild(dr),dd.appendChild(this.soundon4),dd.appendChild(this.soundoff4);let dl=document.createElement("div");dl.classList.add("rfrdplaycontainer");let dc=document.createElement("div");dc.classList.add("pause-video-block");let dp=document.createElement("img");dp.classList.add("rfrd-video-icon"),dp.style.display="none",dp.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=dp,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let dv=document.createElement("div");dv.classList.add("play-video-block");let df=document.createElement("img");df.classList.add("rfrd-video-icon"),df.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=df,this.playimg4.addEventListener("click",this.playVid.bind(this)),dc.appendChild(this.pauseimg4),dv.appendChild(this.playimg4),dl.appendChild(dc),dl.appendChild(dv);let dh=document.createElement("div"),db=document.createElement("img");db.classList.add("rfrd-video-icon"),db.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=db,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),dh.appendChild(this.fullscreenimg4),dt.appendChild(dd),dt.appendChild(dl),dt.appendChild(dh),tr.appendChild(dt);var dm=document.createElement("a");dm.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),dm.setAttribute("data-id",e.videos[4].videoid._id),dm.addEventListener("click",this.showVid.bind(this),!1);var du=document.createElement("div");du.classList.add("rfrd-video-photo"),du.style="background-image:url('"+e.videos[4].videoid.screengrab+"')",dm.appendChild(du);var dg=document.createElement("div"),d_=document.createElement("div");d_.classList.add("rfrd-side-video-name"),d_.textContent=e.videos[4].videoid.name;var dC=document.createElement("div");dC.classList.add("rfrd-side-video-title"),e.videos[4].featuredid?dC.textContent=e.videos[4].featuredid.jobtitle+", "+e.videos[4].featuredid.worksat:e.videos[4].videoid.jobtitle&&(dC.textContent=e.videos[4].videoid.jobtitle+", "+e.videos[4].videoid.worksat),dg.appendChild(d_),dg.appendChild(dC),dm.appendChild(dg);var d0=document.createElement("div");d0.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),d0.setAttribute("data-id",e.videos[4].videoid._id);var d$=document.createElement("div");d$.classList.add("rfrd-video-flyout-wrap");var dE=document.createElement("div");dE.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),dE.style.paddingTop="56.17021276595745%";let d1=document.createElement("video");d1.classList.add("rfrd-mainvid"),d1.setAttribute("preload","none"),d1.setAttribute("data-id",e.videos[4].videoid._id),d1.style="background-image:url('"+e.videos[4].videoid.screengrab+"')",this.mainvideo5=d1,this.mainvideo5.innerHTML='<source src="'+e.videos[4].videoid.link+'" data-wf-ignore="true">';var dL=document.createElement("a");dL.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),dL.style.backgroundColor="#"+e.maincolor,dL.setAttribute("target","_blank"),e.videos[4].videoid.widgetcta?(dL.href=e.videos[4].videoid.widgetlink,dL.textContent=e.videos[4].videoid.widgetcta):(dL.href=e.buttonlink,dL.textContent=e.buttoncta),dE.appendChild(this.mainvideo5),d$.appendChild(dE),d$.appendChild(dL),d0.appendChild(d$);let dw=document.createElement("div");dw.classList.add("rfrd-video-icons");let d4=document.createElement("div");d4.classList.add("rfrdsoundcontainer");let dk=document.createElement("div");dk.classList.add("sound-on"),this.soundon5=dk,this.soundon5.addEventListener("click",this.toggleSoundOn.bind(this));let dy=document.createElement("img");dy.classList.add("rfrd-video-icon"),dy.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let d2=document.createElement("div");d2.style.display="none",d2.classList.add("sound-off"),this.soundoff5=d2,this.soundoff5.addEventListener("click",this.toggleSoundOff.bind(this));let d7=document.createElement("img");d7.classList.add("rfrd-video-icon"),d7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon5.appendChild(dy),this.soundoff5.appendChild(d7),d4.appendChild(this.soundon5),d4.appendChild(this.soundoff5);let dx=document.createElement("div");dx.classList.add("rfrdplaycontainer");let d5=document.createElement("div");d5.classList.add("pause-video-block");let d3=document.createElement("img");d3.classList.add("rfrd-video-icon"),d3.style.display="none",d3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg5=d3,this.pauseimg5.addEventListener("click",this.pauseVid.bind(this));let d6=document.createElement("div");d6.classList.add("play-video-block");let d8=document.createElement("img");d8.classList.add("rfrd-video-icon"),d8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg5=d8,this.playimg5.addEventListener("click",this.playVid.bind(this)),d5.appendChild(this.pauseimg5),d6.appendChild(this.playimg5),dx.appendChild(d5),dx.appendChild(d6);let dA=document.createElement("div"),dS=document.createElement("img");dS.classList.add("rfrd-video-icon"),dS.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg5=dS,this.fullscreenimg5.addEventListener("click",this.toggleFullScreen.bind(this)),dA.appendChild(this.fullscreenimg5),dw.appendChild(d4),dw.appendChild(dx),dw.appendChild(dA),dE.appendChild(dw),C.appendChild(x),C.appendChild(W),C.appendChild(eX),C.appendChild(te),C.appendChild(dm),$.appendChild(O),$.appendChild(eb),$.appendChild(it),$.appendChild(ta),$.appendChild(d0),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}this.messageContainer.appendChild(i),this.messageContainer.appendChild(u)}createMessageContainerContentNoID(e){this.messageContainer.innerHTML="";let i=document.createElement("div");i.classList.add("rfrd-page-bg"),i.addEventListener("click",this.toggleClose.bind(this));let t=document.createElement("div");i.appendChild(t);var d=e.videos.length;let s=document.createElement("div");s.classList.add("rfrd-video-icons");let a=document.createElement("div"),n=document.createElement("div");n.classList.add("sound-on"),this.soundon=n,this.soundon.addEventListener("click",this.toggleSoundOn.bind(this));let r=document.createElement("img");r.classList.add("rfrd-video-icon"),r.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let l=document.createElement("div");l.style.display="none",l.classList.add("sound-off"),this.soundoff=l,this.soundoff.addEventListener("click",this.toggleSoundOff.bind(this));let o=document.createElement("img");o.classList.add("rfrd-video-icon"),o.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon.appendChild(r),this.soundoff.appendChild(o),a.appendChild(this.soundon),a.appendChild(this.soundoff);let c=document.createElement("div"),p=document.createElement("div");p.classList.add("pause-video-block");let v=document.createElement("img");v.classList.add("rfrd-video-icon"),v.style.display="none",v.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg=v,this.pauseimg.addEventListener("click",this.pauseVid.bind(this));let f=document.createElement("div");f.classList.add("play-video-block");let h=document.createElement("img");h.classList.add("rfrd-video-icon"),h.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg=h,this.playimg.addEventListener("click",this.playVid.bind(this)),p.appendChild(this.pauseimg),f.appendChild(this.playimg),c.appendChild(p),c.appendChild(f);let b=document.createElement("div"),m=document.createElement("img");m.classList.add("rfrd-video-icon"),m.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg=m,this.fullscreenimg.addEventListener("click",this.toggleFullScreen.bind(this)),b.appendChild(this.fullscreenimg),s.appendChild(a),s.appendChild(c),s.appendChild(b);let u=document.createElement("div");u.classList.add("rfrd-cheer-wrap"),u.id="cheer-wrap";let g=document.createElement("div");g.classList.add("rfrd-side-cheer-header"),g.textContent=e.cardlabel;let _=document.createElement("div");_.classList.add("video-tabs","rfrd-w-tabs");let C=document.createElement("div");C.classList.add("video-tabs-menu","rfrd-w-tab-menu");let $=document.createElement("div");$.classList.add("rfrd-tabs-content","rfrd-w-tab-content");let E=document.createElement("div");E.classList.add("rfrd-videos-top");let L=document.createElement("div");L.classList.add("rfrd-built-with-rfrd");let w=document.createElement("div");w.textContent="Built with";let k=document.createElement("a");k.href="https://www.rfrd.io",k.setAttribute("target","_blank");let y=document.createElement("img");y.classList.add("rfrd-bw-rfrd-logo"),y.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/6254a481ee51de3be6a0b275_rfrd%20dark.svg",k.appendChild(y),L.appendChild(w),L.appendChild(k);var d=e.videos.length;if(1==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0]._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].jobtitle&&(V.textContent=e.videos[0].jobtitle+", "+e.videos[0].worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0]._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let M=document.createElement("video");M.classList.add("rfrd-mainvid"),M.setAttribute("data-id",e.videos[0]._id),M.style="background-image:url('"+e.videos[0].screengrab+"')",this.mainvideo1=M,this.mainvideo1.innerHTML='<source src="'+e.videos[0].link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.href=e.buttonlink,H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].videoid.widgetcta?(H.href=e.videos[0].widgetlink,H.textContent=e.videos[0].widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let z=document.createElement("div");z.classList.add("rfrd-video-icons");let U=document.createElement("div");U.classList.add("rfrdsoundcontainer");let B=document.createElement("div");B.classList.add("sound-on"),this.soundon1=B,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let D=document.createElement("img");D.classList.add("rfrd-video-icon"),D.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let I=document.createElement("div");I.style.display="none",I.classList.add("sound-off"),this.soundoff1=I,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let N=document.createElement("img");N.classList.add("rfrd-video-icon"),N.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(D),this.soundoff1.appendChild(N),U.appendChild(this.soundon1),U.appendChild(this.soundoff1);let q=document.createElement("div");q.classList.add("rfrdplaycontainer");let R=document.createElement("div");R.classList.add("pause-video-block");let P=document.createElement("img");P.classList.add("rfrd-video-icon"),P.style.display="none",P.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=P,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let G=document.createElement("div");G.classList.add("play-video-block");let J=document.createElement("img");J.classList.add("rfrd-video-icon"),J.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=J,this.playimg1.addEventListener("click",this.playVid.bind(this)),R.appendChild(this.pauseimg1),G.appendChild(this.playimg1),q.appendChild(R),q.appendChild(G);let K=document.createElement("div"),Q=document.createElement("img");Q.classList.add("rfrd-video-icon"),Q.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=Q,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),K.appendChild(this.fullscreenimg1),z.appendChild(U),z.appendChild(q),z.appendChild(K),F.appendChild(z),C.appendChild(x),$.appendChild(O),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(2==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0]._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].jobtitle&&(V.textContent=e.videos[0].jobtitle+", "+e.videos[0].worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1]._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].jobtitle&&(ee.textContent=e.videos[1].jobtitle+", "+e.videos[1].worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0]._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let ei=document.createElement("video");ei.classList.add("rfrd-mainvid"),ei.setAttribute("data-id",e.videos[0]._id),ei.style="background-image:url('"+e.videos[0].screengrab+"')",this.mainvideo1=ei,this.mainvideo1.innerHTML='<source src="'+e.videos[0].link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].widgetcta?(console.log("widget.videos[0].videoid.widgetcta:",e.videos[0].widgetcta),H.href=e.videos[0].widgetlink,H.textContent=e.videos[0].widgetcta):(console.log("nope0"),H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let et=document.createElement("div");et.classList.add("rfrd-video-icons");let ed=document.createElement("div");ed.classList.add("rfrdsoundcontainer");let es=document.createElement("div");es.classList.add("sound-on"),this.soundon1=es,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let ea=document.createElement("img");ea.classList.add("rfrd-video-icon"),ea.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let en=document.createElement("div");en.style.display="none",en.classList.add("sound-off"),this.soundoff1=en,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let er=document.createElement("img");er.classList.add("rfrd-video-icon"),er.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(ea),this.soundoff1.appendChild(er),ed.appendChild(this.soundon1),ed.appendChild(this.soundoff1);let el=document.createElement("div");el.classList.add("rfrdplaycontainer");let eo=document.createElement("div");eo.classList.add("pause-video-block");let ec=document.createElement("img");ec.classList.add("rfrd-video-icon"),ec.style.display="none",ec.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=ec,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ep=document.createElement("div");ep.classList.add("play-video-block");let ev=document.createElement("img");ev.classList.add("rfrd-video-icon"),ev.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=ev,this.playimg1.addEventListener("click",this.playVid.bind(this)),eo.appendChild(this.pauseimg1),ep.appendChild(this.playimg1),el.appendChild(eo),el.appendChild(ep);let ef=document.createElement("div"),eh=document.createElement("img");eh.classList.add("rfrd-video-icon"),eh.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=eh,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),ef.appendChild(this.fullscreenimg1),et.appendChild(ed),et.appendChild(el),et.appendChild(ef),F.appendChild(et);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1]._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let eg=document.createElement("video");eg.classList.add("rfrd-mainvid"),eg.setAttribute("preload","none"),eg.setAttribute("data-id",e.videos[1]._id),eg.style="background-image:url('"+e.videos[1].screengrab+"')",this.mainvideo2=eg,this.mainvideo2.innerHTML='<source src="'+e.videos[1].link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].widgetcta?(console.log("widget.videos[1].videoid.widgetcta:",e.videos[1].widgetcta),e_.href=e.videos[1].widgetlink,e_.textContent=e.videos[1].widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let eC=document.createElement("div");eC.classList.add("rfrd-video-icons");let e0=document.createElement("div");e0.classList.add("rfrdsoundcontainer");let e$=document.createElement("div");e$.classList.add("sound-on"),this.soundon2=e$,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eE=document.createElement("img");eE.classList.add("rfrd-video-icon"),eE.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let e1=document.createElement("div");e1.style.display="none",e1.classList.add("sound-off"),this.soundoff2=e1,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eL=document.createElement("img");eL.classList.add("rfrd-video-icon"),eL.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eE),this.soundoff2.appendChild(eL),e0.appendChild(this.soundon2),e0.appendChild(this.soundoff2);let ew=document.createElement("div");ew.classList.add("rfrdplaycontainer");let e4=document.createElement("div");e4.classList.add("pause-video-block");let ek=document.createElement("img");ek.classList.add("rfrd-video-icon"),ek.style.display="none",ek.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=ek,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let ey=document.createElement("div");ey.classList.add("play-video-block");let e2=document.createElement("img");e2.classList.add("rfrd-video-icon"),e2.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=e2,this.playimg2.addEventListener("click",this.playVid.bind(this)),e4.appendChild(this.pauseimg2),ey.appendChild(this.playimg2),ew.appendChild(e4),ew.appendChild(ey);let e7=document.createElement("div"),ex=document.createElement("img");ex.classList.add("rfrd-video-icon"),ex.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=ex,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),e7.appendChild(this.fullscreenimg2),eC.appendChild(e0),eC.appendChild(ew),eC.appendChild(e7),eu.appendChild(eC),C.appendChild(x),C.appendChild(W),$.appendChild(O),$.appendChild(eb),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(3==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0]._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].jobtitle&&(V.textContent=e.videos[0].jobtitle+", "+e.videos[0].worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0]._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let e5=document.createElement("video");e5.classList.add("rfrd-mainvid"),e5.setAttribute("data-id",e.videos[0]._id),e5.style="background-image:url('"+e.videos[0].screengrab+"')",this.mainvideo1=e5,this.mainvideo1.innerHTML='<source src="'+e.videos[0].link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].widgetcta?(H.href=e.videos[0].widgetlink,H.textContent=e.videos[0].widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let e3=document.createElement("div");e3.classList.add("rfrd-video-icons");let e6=document.createElement("div");e6.classList.add("rfrdsoundcontainer");let e8=document.createElement("div");e8.classList.add("sound-on"),this.soundon1=e8,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let eA=document.createElement("img");eA.classList.add("rfrd-video-icon"),eA.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eS=document.createElement("div");eS.style.display="none",eS.classList.add("sound-off"),this.soundoff1=eS,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let ej=document.createElement("img");ej.classList.add("rfrd-video-icon"),ej.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(eA),this.soundoff1.appendChild(ej),e6.appendChild(this.soundon1),e6.appendChild(this.soundoff1);let eV=document.createElement("div");eV.classList.add("rfrdplaycontainer");let eO=document.createElement("div");eO.classList.add("pause-video-block");let eT=document.createElement("img");eT.classList.add("rfrd-video-icon"),eT.style.display="none",eT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=eT,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let eF=document.createElement("div");eF.classList.add("play-video-block");let eM=document.createElement("img");eM.classList.add("rfrd-video-icon"),eM.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=eM,this.playimg1.addEventListener("click",this.playVid.bind(this)),eO.appendChild(this.pauseimg1),eF.appendChild(this.playimg1),eV.appendChild(eO),eV.appendChild(eF);let eH=document.createElement("div"),ez=document.createElement("img");ez.classList.add("rfrd-video-icon"),ez.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=ez,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),eH.appendChild(this.fullscreenimg1),e3.appendChild(e6),e3.appendChild(eV),e3.appendChild(eH),F.appendChild(e3);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1]._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].jobtitle&&(ee.textContent=e.videos[1].jobtitle+", "+e.videos[1].worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1]._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let eU=document.createElement("video");eU.classList.add("rfrd-mainvid"),eU.setAttribute("preload","none"),eU.setAttribute("data-id",e.videos[1]._id),eU.style="background-image:url('"+e.videos[1].screengrab+"')",this.mainvideo2=eU,this.mainvideo2.innerHTML='<source src="'+e.videos[1].link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].widgetcta?(e_.href=e.videos[1].widgetlink,e_.textContent=e.videos[1].widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let eB=document.createElement("div");eB.classList.add("rfrd-video-icons");let eD=document.createElement("div");eD.classList.add("rfrdsoundcontainer");let eI=document.createElement("div");eI.classList.add("sound-on"),this.soundon2=eI,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let eN=document.createElement("img");eN.classList.add("rfrd-video-icon"),eN.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let eq=document.createElement("div");eq.style.display="none",eq.classList.add("sound-off"),this.soundoff2=eq,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let eR=document.createElement("img");eR.classList.add("rfrd-video-icon"),eR.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(eN),this.soundoff2.appendChild(eR),eD.appendChild(this.soundon2),eD.appendChild(this.soundoff2);let e9=document.createElement("div");e9.classList.add("rfrdplaycontainer");let eP=document.createElement("div");eP.classList.add("pause-video-block");let eG=document.createElement("img");eG.classList.add("rfrd-video-icon"),eG.style.display="none",eG.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=eG,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let eJ=document.createElement("div");eJ.classList.add("play-video-block");let eK=document.createElement("img");eK.classList.add("rfrd-video-icon"),eK.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=eK,this.playimg2.addEventListener("click",this.playVid.bind(this)),eP.appendChild(this.pauseimg2),eJ.appendChild(this.playimg2),e9.appendChild(eP),e9.appendChild(eJ);let eQ=document.createElement("div"),eW=document.createElement("img");eW.classList.add("rfrd-video-icon"),eW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=eW,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),eQ.appendChild(this.fullscreenimg2),eB.appendChild(eD),eB.appendChild(e9),eB.appendChild(eQ),eu.appendChild(eB);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2]._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),ie=document.createElement("div");ie.classList.add("rfrd-side-video-name"),ie.textContent=e.videos[2].name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ii.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].jobtitle&&(ii.textContent=e.videos[2].jobtitle+", "+e.videos[2].worksat),eZ.appendChild(ie),eZ.appendChild(ii),eX.appendChild(eZ);var it=document.createElement("div");it.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),it.setAttribute("data-id",e.videos[2]._id);var id=document.createElement("div");id.classList.add("rfrd-video-flyout-wrap");var is=document.createElement("div");is.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),is.style.paddingTop="56.17021276595745%";let ia=document.createElement("video");ia.classList.add("rfrd-mainvid"),ia.setAttribute("preload","none"),ia.setAttribute("data-id",e.videos[2]._id),ia.style="background-image:url('"+e.videos[2].screengrab+"')",this.mainvideo3=ia,this.mainvideo3.innerHTML='<source src="'+e.videos[2].link+'" data-wf-ignore="true">';var ir=document.createElement("a");ir.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ir.style.backgroundColor="#"+e.maincolor,ir.setAttribute("target","_blank"),e.videos[2].widgetcta?(ir.href=e.videos[2].widgetlink,ir.textContent=e.videos[2].widgetcta):(ir.href=e.buttonlink,ir.textContent=e.buttoncta),is.appendChild(this.mainvideo3),id.appendChild(is),id.appendChild(ir),it.appendChild(id);let il=document.createElement("div");il.classList.add("rfrd-video-icons");let io=document.createElement("div");io.classList.add("rfrdsoundcontainer");let ic=document.createElement("div");ic.classList.add("sound-on"),this.soundon3=ic,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let ip=document.createElement("img");ip.classList.add("rfrd-video-icon"),ip.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iv=document.createElement("div");iv.style.display="none",iv.classList.add("sound-off"),this.soundoff3=iv,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let ih=document.createElement("img");ih.classList.add("rfrd-video-icon"),ih.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(ip),this.soundoff3.appendChild(ih),io.appendChild(this.soundon3),io.appendChild(this.soundoff3);let ib=document.createElement("div");ib.classList.add("rfrdplaycontainer");let im=document.createElement("div");im.classList.add("pause-video-block");let iu=document.createElement("img");iu.classList.add("rfrd-video-icon"),iu.style.display="none",iu.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=iu,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let ig=document.createElement("div");ig.classList.add("play-video-block");let i_=document.createElement("img");i_.classList.add("rfrd-video-icon"),i_.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=i_,this.playimg3.addEventListener("click",this.playVid.bind(this)),im.appendChild(this.pauseimg3),ig.appendChild(this.playimg3),ib.appendChild(im),ib.appendChild(ig);let iC=document.createElement("div"),i0=document.createElement("img");i0.classList.add("rfrd-video-icon"),i0.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=i0,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),iC.appendChild(this.fullscreenimg3),il.appendChild(io),il.appendChild(ib),il.appendChild(iC),is.appendChild(il),C.appendChild(x),C.appendChild(W),C.appendChild(eX),$.appendChild(O),$.appendChild(eb),$.appendChild(it),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(4==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0]._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].jobtitle&&(V.textContent=e.videos[0].jobtitle+", "+e.videos[0].worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0]._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let i$=document.createElement("video");i$.classList.add("rfrd-mainvid"),i$.setAttribute("data-id",e.videos[0]._id),i$.style="background-image:url('"+e.videos[0].screengrab+"')",this.mainvideo1=i$,this.mainvideo1.innerHTML='<source src="'+e.videos[0].link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].widgetcta?(H.href=e.videos[0].widgetlink,H.textContent=e.videos[0].widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let iE=document.createElement("div");iE.classList.add("rfrd-video-icons");let i1=document.createElement("div");i1.classList.add("rfrdsoundcontainer");let iL=document.createElement("div");iL.classList.add("sound-on"),this.soundon1=iL,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let iw=document.createElement("img");iw.classList.add("rfrd-video-icon"),iw.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let i4=document.createElement("div");i4.style.display="none",i4.classList.add("sound-off"),this.soundoff1=i4,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let ik=document.createElement("img");ik.classList.add("rfrd-video-icon"),ik.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(iw),this.soundoff1.appendChild(ik),i1.appendChild(this.soundon1),i1.appendChild(this.soundoff1);let iy=document.createElement("div");iy.classList.add("rfrdplaycontainer");let i2=document.createElement("div");i2.classList.add("pause-video-block");let i7=document.createElement("img");i7.classList.add("rfrd-video-icon"),i7.style.display="none",i7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=i7,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ix=document.createElement("div");ix.classList.add("play-video-block");let i5=document.createElement("img");i5.classList.add("rfrd-video-icon"),i5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=i5,this.playimg1.addEventListener("click",this.playVid.bind(this)),i2.appendChild(this.pauseimg1),ix.appendChild(this.playimg1),iy.appendChild(i2),iy.appendChild(ix);let i3=document.createElement("div"),i6=document.createElement("img");i6.classList.add("rfrd-video-icon"),i6.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=i6,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),i3.appendChild(this.fullscreenimg1),iE.appendChild(i1),iE.appendChild(iy),iE.appendChild(i3),F.appendChild(iE);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1]._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].jobtitle&&(ee.textContent=e.videos[1].jobtitle+", "+e.videos[1].worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1]._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let i8=document.createElement("video");i8.classList.add("rfrd-mainvid"),i8.setAttribute("preload","none"),i8.setAttribute("data-id",e.videos[1]._id),i8.style="background-image:url('"+e.videos[1].screengrab+"')",this.mainvideo2=i8,this.mainvideo2.innerHTML='<source src="'+e.videos[1].link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].widgetcta?(e_.href=e.videos[1].widgetlink,e_.textContent=e.videos[1].widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let iA=document.createElement("div");iA.classList.add("rfrd-video-icons");let iS=document.createElement("div");iS.classList.add("rfrdsoundcontainer");let ij=document.createElement("div");ij.classList.add("sound-on"),this.soundon2=ij,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let iV=document.createElement("img");iV.classList.add("rfrd-video-icon"),iV.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iO=document.createElement("div");iO.style.display="none",iO.classList.add("sound-off"),this.soundoff2=iO,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let iT=document.createElement("img");iT.classList.add("rfrd-video-icon"),iT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(iV),this.soundoff2.appendChild(iT),iS.appendChild(this.soundon2),iS.appendChild(this.soundoff2);let iF=document.createElement("div");iF.classList.add("rfrdplaycontainer");let iM=document.createElement("div");iM.classList.add("pause-video-block");let iH=document.createElement("img");iH.classList.add("rfrd-video-icon"),iH.style.display="none",iH.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=iH,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let iz=document.createElement("div");iz.classList.add("play-video-block");let iU=document.createElement("img");iU.classList.add("rfrd-video-icon"),iU.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=iU,this.playimg2.addEventListener("click",this.playVid.bind(this)),iM.appendChild(this.pauseimg2),iz.appendChild(this.playimg2),iF.appendChild(iM),iF.appendChild(iz);let iB=document.createElement("div"),iD=document.createElement("img");iD.classList.add("rfrd-video-icon"),iD.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=iD,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),iB.appendChild(this.fullscreenimg2),iA.appendChild(iS),iA.appendChild(iF),iA.appendChild(iB),eu.appendChild(iA);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2]._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),ie=document.createElement("div");ie.classList.add("rfrd-side-video-name"),ie.textContent=e.videos[2].name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ii.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].jobtitle&&(ii.textContent=e.videos[2].jobtitle+", "+e.videos[2].worksat),eZ.appendChild(ie),eZ.appendChild(ii),eX.appendChild(eZ);var it=document.createElement("div");it.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),it.setAttribute("data-id",e.videos[2]._id);var id=document.createElement("div");id.classList.add("rfrd-video-flyout-wrap");var is=document.createElement("div");is.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),is.style.paddingTop="56.17021276595745%";let iI=document.createElement("video");iI.classList.add("rfrd-mainvid"),iI.setAttribute("preload","none"),iI.setAttribute("data-id",e.videos[2]._id),iI.style="background-image:url('"+e.videos[2].screengrab+"')",this.mainvideo3=iI,this.mainvideo3.innerHTML='<source src="'+e.videos[2].link+'" data-wf-ignore="true">';var ir=document.createElement("a");ir.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ir.style.backgroundColor="#"+e.maincolor,ir.setAttribute("target","_blank"),e.videos[2].widgetcta?(ir.href=e.videos[2].widgetlink,ir.textContent=e.videos[2].widgetcta):(ir.href=e.buttonlink,ir.textContent=e.buttoncta),is.appendChild(this.mainvideo3),id.appendChild(is),id.appendChild(ir),it.appendChild(id);let iN=document.createElement("div");iN.classList.add("rfrd-video-icons");let iq=document.createElement("div");iq.classList.add("rfrdsoundcontainer");let iR=document.createElement("div");iR.classList.add("sound-on"),this.soundon3=iR,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let i9=document.createElement("img");i9.classList.add("rfrd-video-icon"),i9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let iP=document.createElement("div");iP.style.display="none",iP.classList.add("sound-off"),this.soundoff3=iP,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let iG=document.createElement("img");iG.classList.add("rfrd-video-icon"),iG.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(i9),this.soundoff3.appendChild(iG),iq.appendChild(this.soundon3),iq.appendChild(this.soundoff3);let iJ=document.createElement("div");iJ.classList.add("rfrdplaycontainer");let iK=document.createElement("div");iK.classList.add("pause-video-block");let iQ=document.createElement("img");iQ.classList.add("rfrd-video-icon"),iQ.style.display="none",iQ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=iQ,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let iW=document.createElement("div");iW.classList.add("play-video-block");let iX=document.createElement("img");iX.classList.add("rfrd-video-icon"),iX.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=iX,this.playimg3.addEventListener("click",this.playVid.bind(this)),iK.appendChild(this.pauseimg3),iW.appendChild(this.playimg3),iJ.appendChild(iK),iJ.appendChild(iW);let iY=document.createElement("div"),iZ=document.createElement("img");iZ.classList.add("rfrd-video-icon"),iZ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=iZ,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),iY.appendChild(this.fullscreenimg3),iN.appendChild(iq),iN.appendChild(iJ),iN.appendChild(iY),is.appendChild(iN);var te=document.createElement("a");te.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),te.setAttribute("data-id",e.videos[3]._id),te.addEventListener("click",this.showVid.bind(this),!1);var ti=document.createElement("div");ti.classList.add("rfrd-video-photo"),ti.style="background-image:url('"+e.videos[3].screengrab+"')",te.appendChild(ti);var tt=document.createElement("div"),td=document.createElement("div");td.classList.add("rfrd-side-video-name"),td.textContent=e.videos[3].name;var ts=document.createElement("div");ts.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?ts.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].jobtitle&&(ts.textContent=e.videos[3].jobtitle+", "+e.videos[3].worksat),tt.appendChild(td),tt.appendChild(ts),te.appendChild(tt);var ta=document.createElement("div");ta.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ta.setAttribute("data-id",e.videos[3]._id);var tn=document.createElement("div");tn.classList.add("rfrd-video-flyout-wrap");var tr=document.createElement("div");tr.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),tr.style.paddingTop="56.17021276595745%";let tl=document.createElement("video");tl.classList.add("rfrd-mainvid"),tl.setAttribute("preload","none"),tl.setAttribute("data-id",e.videos[3]._id),tl.style="background-image:url('"+e.videos[3].screengrab+"')",this.mainvideo4=tl,this.mainvideo4.innerHTML='<source src="'+e.videos[3].link+'" data-wf-ignore="true">';var to=document.createElement("a");to.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),to.style.backgroundColor="#"+e.maincolor,to.setAttribute("target","_blank"),e.videos[3].widgetcta?(to.href=e.videos[3].widgetlink,to.textContent=e.videos[3].widgetcta):(to.href=e.buttonlink,to.textContent=e.buttoncta),tr.appendChild(this.mainvideo4),tn.appendChild(tr),tn.appendChild(to),ta.appendChild(tn);let tc=document.createElement("div");tc.classList.add("rfrd-video-icons");let tp=document.createElement("div");tp.classList.add("rfrdsoundcontainer");let tv=document.createElement("div");tv.classList.add("sound-on"),this.soundon4=tv,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let tf=document.createElement("img");tf.classList.add("rfrd-video-icon"),tf.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let th=document.createElement("div");th.style.display="none",th.classList.add("sound-off"),this.soundoff4=th,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let tb=document.createElement("img");tb.classList.add("rfrd-video-icon"),tb.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(tf),this.soundoff4.appendChild(tb),tp.appendChild(this.soundon4),tp.appendChild(this.soundoff4);let tm=document.createElement("div");tm.classList.add("rfrdplaycontainer");let tu=document.createElement("div");tu.classList.add("pause-video-block");let tg=document.createElement("img");tg.classList.add("rfrd-video-icon"),tg.style.display="none",tg.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=tg,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let t_=document.createElement("div");t_.classList.add("play-video-block");let tC=document.createElement("img");tC.classList.add("rfrd-video-icon"),tC.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=tC,this.playimg4.addEventListener("click",this.playVid.bind(this)),tu.appendChild(this.pauseimg4),t_.appendChild(this.playimg4),tm.appendChild(tu),tm.appendChild(t_);let t0=document.createElement("div"),t$=document.createElement("img");t$.classList.add("rfrd-video-icon"),t$.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=t$,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),t0.appendChild(this.fullscreenimg4),tc.appendChild(tp),tc.appendChild(tm),tc.appendChild(t0),tr.appendChild(tc),C.appendChild(x),C.appendChild(W),C.appendChild(eX),C.appendChild(te),$.appendChild(O),$.appendChild(eb),$.appendChild(it),$.appendChild(ta),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}if(5==d){var x=document.createElement("a");x.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),x.setAttribute("data-id",e.videos[0]._id),x.addEventListener("click",this.showVid.bind(this),!1);var A=document.createElement("div");A.classList.add("rfrd-video-photo"),A.style="background-image:url('"+e.videos[0].screengrab+"')",x.appendChild(A);var S=document.createElement("div"),j=document.createElement("div");j.classList.add("rfrd-side-video-name"),j.textContent=e.videos[0].name;var V=document.createElement("div");V.classList.add("rfrd-side-video-title"),e.videos[0].featuredid?V.textContent=e.videos[0].featuredid.jobtitle+", "+e.videos[0].featuredid.worksat:e.videos[0].jobtitle&&(V.textContent=e.videos[0].jobtitle+", "+e.videos[0].worksat),S.appendChild(j),S.appendChild(V),x.appendChild(S);var O=document.createElement("div");O.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),O.setAttribute("data-id",e.videos[0]._id);var T=document.createElement("div");T.classList.add("rfrd-video-flyout-wrap");var F=document.createElement("div");F.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),F.style.paddingTop="56.17021276595745%";let tE=document.createElement("video");tE.classList.add("rfrd-mainvid"),tE.setAttribute("data-id",e.videos[0]._id),tE.style="background-image:url('"+e.videos[0].screengrab+"')",this.mainvideo1=tE,this.mainvideo1.innerHTML='<source src="'+e.videos[0].link+'" data-wf-ignore="true">';var H=document.createElement("a");H.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),H.style.backgroundColor="#"+e.maincolor,H.setAttribute("target","_blank"),e.videos[0].widgetcta?(H.href=e.videos[0].widgetlink,H.textContent=e.videos[0].widgetcta):(H.href=e.buttonlink,H.textContent=e.buttoncta),F.appendChild(this.mainvideo1),T.appendChild(F),T.appendChild(H),O.appendChild(T);let t1=document.createElement("div");t1.classList.add("rfrd-video-icons");let tL=document.createElement("div");tL.classList.add("rfrdsoundcontainer");let tw=document.createElement("div");tw.classList.add("sound-on"),this.soundon1=tw,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let t4=document.createElement("img");t4.classList.add("rfrd-video-icon"),t4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tk=document.createElement("div");tk.style.display="none",tk.classList.add("sound-off"),this.soundoff1=tk,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let ty=document.createElement("img");ty.classList.add("rfrd-video-icon"),ty.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(t4),this.soundoff1.appendChild(ty),tL.appendChild(this.soundon1),tL.appendChild(this.soundoff1);let t2=document.createElement("div");t2.classList.add("rfrdplaycontainer");let t7=document.createElement("div");t7.classList.add("pause-video-block");let tx=document.createElement("img");tx.classList.add("rfrd-video-icon"),tx.style.display="none",tx.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=tx,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let t5=document.createElement("div");t5.classList.add("play-video-block");let t3=document.createElement("img");t3.classList.add("rfrd-video-icon"),t3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=t3,this.playimg1.addEventListener("click",this.playVid.bind(this)),t7.appendChild(this.pauseimg1),t5.appendChild(this.playimg1),t2.appendChild(t7),t2.appendChild(t5);let t6=document.createElement("div"),t8=document.createElement("img");t8.classList.add("rfrd-video-icon"),t8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=t8,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),t6.appendChild(this.fullscreenimg1),t1.appendChild(tL),t1.appendChild(t2),t1.appendChild(t6),F.appendChild(t1);var W=document.createElement("a");W.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),W.setAttribute("data-id",e.videos[1]._id),W.addEventListener("click",this.showVid.bind(this),!1);var X=document.createElement("div");X.classList.add("rfrd-video-photo"),X.style="background-image:url('"+e.videos[1].screengrab+"')",W.appendChild(X);var Y=document.createElement("div"),Z=document.createElement("div");Z.classList.add("rfrd-side-video-name"),Z.textContent=e.videos[1].name;var ee=document.createElement("div");ee.classList.add("rfrd-side-video-title"),e.videos[1].featuredid?ee.textContent=e.videos[1].featuredid.jobtitle+", "+e.videos[1].featuredid.worksat:e.videos[1].jobtitle&&(ee.textContent=e.videos[1].jobtitle+", "+e.videos[1].worksat),Y.appendChild(Z),Y.appendChild(ee),W.appendChild(Y);var eb=document.createElement("div");eb.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),eb.setAttribute("data-id",e.videos[1]._id);var em=document.createElement("div");em.classList.add("rfrd-video-flyout-wrap");var eu=document.createElement("div");eu.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),eu.style.paddingTop="56.17021276595745%";let tA=document.createElement("video");tA.classList.add("rfrd-mainvid"),tA.setAttribute("preload","none"),tA.setAttribute("data-id",e.videos[1]._id),tA.style="background-image:url('"+e.videos[1].screengrab+"')",this.mainvideo2=tA,this.mainvideo2.innerHTML='<source src="'+e.videos[1].link+'" data-wf-ignore="true">';var e_=document.createElement("a");e_.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),e_.style.backgroundColor="#"+e.maincolor,e_.setAttribute("target","_blank"),e.videos[1].widgetcta?(e_.href=e.videos[1].widgetlink,e_.textContent=e.videos[1].widgetcta):(e_.href=e.buttonlink,e_.textContent=e.buttoncta),eu.appendChild(this.mainvideo2),em.appendChild(eu),em.appendChild(e_),eb.appendChild(em);let tS=document.createElement("div");tS.classList.add("rfrd-video-icons");let tj=document.createElement("div");tj.classList.add("rfrdsoundcontainer");let tV=document.createElement("div");tV.classList.add("sound-on"),this.soundon2=tV,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let tO=document.createElement("img");tO.classList.add("rfrd-video-icon"),tO.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tT=document.createElement("div");tT.style.display="none",tT.classList.add("sound-off"),this.soundoff2=tT,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let tF=document.createElement("img");tF.classList.add("rfrd-video-icon"),tF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(tO),this.soundoff2.appendChild(tF),tj.appendChild(this.soundon2),tj.appendChild(this.soundoff2);let tM=document.createElement("div");tM.classList.add("rfrdplaycontainer");let tH=document.createElement("div");tH.classList.add("pause-video-block");let tz=document.createElement("img");tz.classList.add("rfrd-video-icon"),tz.style.display="none",tz.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=tz,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let tU=document.createElement("div");tU.classList.add("play-video-block");let tB=document.createElement("img");tB.classList.add("rfrd-video-icon"),tB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=tB,this.playimg2.addEventListener("click",this.playVid.bind(this)),tH.appendChild(this.pauseimg2),tU.appendChild(this.playimg2),tM.appendChild(tH),tM.appendChild(tU);let tD=document.createElement("div"),tI=document.createElement("img");tI.classList.add("rfrd-video-icon"),tI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=tI,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),tD.appendChild(this.fullscreenimg2),tS.appendChild(tj),tS.appendChild(tM),tS.appendChild(tD),eu.appendChild(tS);var eX=document.createElement("a");eX.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),eX.setAttribute("data-id",e.videos[2]._id),eX.addEventListener("click",this.showVid.bind(this),!1);var eY=document.createElement("div");eY.classList.add("rfrd-video-photo"),eY.style="background-image:url('"+e.videos[2].screengrab+"')",eX.appendChild(eY);var eZ=document.createElement("div"),ie=document.createElement("div");ie.classList.add("rfrd-side-video-name"),ie.textContent=e.videos[2].name;var ii=document.createElement("div");ii.classList.add("rfrd-side-video-title"),e.videos[2].featuredid?ii.textContent=e.videos[2].featuredid.jobtitle+", "+e.videos[2].featuredid.worksat:e.videos[2].jobtitle&&(ii.textContent=e.videos[2].jobtitle+", "+e.videos[2].worksat),eZ.appendChild(ie),eZ.appendChild(ii),eX.appendChild(eZ);var it=document.createElement("div");it.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),it.setAttribute("data-id",e.videos[2]._id);var id=document.createElement("div");id.classList.add("rfrd-video-flyout-wrap");var is=document.createElement("div");is.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),is.style.paddingTop="56.17021276595745%";let tN=document.createElement("video");tN.classList.add("rfrd-mainvid"),tN.setAttribute("preload","none"),tN.setAttribute("data-id",e.videos[2]._id),tN.style="background-image:url('"+e.videos[2].screengrab+"')",this.mainvideo3=tN,this.mainvideo3.innerHTML='<source src="'+e.videos[2].link+'" data-wf-ignore="true">';var ir=document.createElement("a");ir.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),ir.style.backgroundColor="#"+e.maincolor,ir.setAttribute("target","_blank"),e.videos[2].widgetcta?(ir.href=e.videos[2].widgetlink,ir.textContent=e.videos[2].widgetcta):(ir.href=e.buttonlink,ir.textContent=e.buttoncta),is.appendChild(this.mainvideo3),id.appendChild(is),id.appendChild(ir),it.appendChild(id);let tq=document.createElement("div");tq.classList.add("rfrd-video-icons");let tR=document.createElement("div");tR.classList.add("rfrdsoundcontainer");let t9=document.createElement("div");t9.classList.add("sound-on"),this.soundon3=t9,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let tP=document.createElement("img");tP.classList.add("rfrd-video-icon"),tP.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let tG=document.createElement("div");tG.style.display="none",tG.classList.add("sound-off"),this.soundoff3=tG,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let tJ=document.createElement("img");tJ.classList.add("rfrd-video-icon"),tJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(tP),this.soundoff3.appendChild(tJ),tR.appendChild(this.soundon3),tR.appendChild(this.soundoff3);let tK=document.createElement("div");tK.classList.add("rfrdplaycontainer");let tQ=document.createElement("div");tQ.classList.add("pause-video-block");let tW=document.createElement("img");tW.classList.add("rfrd-video-icon"),tW.style.display="none",tW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=tW,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let tX=document.createElement("div");tX.classList.add("play-video-block");let tY=document.createElement("img");tY.classList.add("rfrd-video-icon"),tY.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=tY,this.playimg3.addEventListener("click",this.playVid.bind(this)),tQ.appendChild(this.pauseimg3),tX.appendChild(this.playimg3),tK.appendChild(tQ),tK.appendChild(tX);let tZ=document.createElement("div"),de=document.createElement("img");de.classList.add("rfrd-video-icon"),de.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=de,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),tZ.appendChild(this.fullscreenimg3),tq.appendChild(tR),tq.appendChild(tK),tq.appendChild(tZ),is.appendChild(tq);var te=document.createElement("a");te.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),te.setAttribute("data-id",e.videos[3]._id),te.addEventListener("click",this.showVid.bind(this),!1);var ti=document.createElement("div");ti.classList.add("rfrd-video-photo"),ti.style="background-image:url('"+e.videos[3].screengrab+"')",te.appendChild(ti);var tt=document.createElement("div"),td=document.createElement("div");td.classList.add("rfrd-side-video-name"),td.textContent=e.videos[3].name;var ts=document.createElement("div");ts.classList.add("rfrd-side-video-title"),e.videos[3].featuredid?ts.textContent=e.videos[3].featuredid.jobtitle+", "+e.videos[3].featuredid.worksat:e.videos[3].jobtitle&&(ts.textContent=e.videos[3].jobtitle+", "+e.videos[3].worksat),tt.appendChild(td),tt.appendChild(ts),te.appendChild(tt);var ta=document.createElement("div");ta.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),ta.setAttribute("data-id",e.videos[3]._id);var tn=document.createElement("div");tn.classList.add("rfrd-video-flyout-wrap");var tr=document.createElement("div");tr.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),tr.style.paddingTop="56.17021276595745%";let di=document.createElement("video");di.classList.add("rfrd-mainvid"),di.setAttribute("preload","none"),di.setAttribute("data-id",e.videos[3]._id),di.style="background-image:url('"+e.videos[3].screengrab+"')",this.mainvideo4=di,this.mainvideo4.innerHTML='<source src="'+e.videos[3].link+'" data-wf-ignore="true">';var to=document.createElement("a");to.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),to.style.backgroundColor="#"+e.maincolor,to.setAttribute("target","_blank"),e.videos[3].widgetcta?(to.href=e.videos[3].widgetlink,to.textContent=e.videos[3].widgetcta):(to.href=e.buttonlink,to.textContent=e.buttoncta),tr.appendChild(this.mainvideo4),tn.appendChild(tr),tn.appendChild(to),ta.appendChild(tn);let dt=document.createElement("div");dt.classList.add("rfrd-video-icons");let dd=document.createElement("div");dd.classList.add("rfrdsoundcontainer");let ds=document.createElement("div");ds.classList.add("sound-on"),this.soundon4=ds,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let da=document.createElement("img");da.classList.add("rfrd-video-icon"),da.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let dn=document.createElement("div");dn.style.display="none",dn.classList.add("sound-off"),this.soundoff4=dn,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let dr=document.createElement("img");dr.classList.add("rfrd-video-icon"),dr.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(da),this.soundoff4.appendChild(dr),dd.appendChild(this.soundon4),dd.appendChild(this.soundoff4);let dl=document.createElement("div");dl.classList.add("rfrdplaycontainer");let dc=document.createElement("div");dc.classList.add("pause-video-block");let dp=document.createElement("img");dp.classList.add("rfrd-video-icon"),dp.style.display="none",dp.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=dp,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let dv=document.createElement("div");dv.classList.add("play-video-block");let df=document.createElement("img");df.classList.add("rfrd-video-icon"),df.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=df,this.playimg4.addEventListener("click",this.playVid.bind(this)),dc.appendChild(this.pauseimg4),dv.appendChild(this.playimg4),dl.appendChild(dc),dl.appendChild(dv);let dh=document.createElement("div"),db=document.createElement("img");db.classList.add("rfrd-video-icon"),db.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=db,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),dh.appendChild(this.fullscreenimg4),dt.appendChild(dd),dt.appendChild(dl),dt.appendChild(dh),tr.appendChild(dt);var dm=document.createElement("a");dm.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),dm.setAttribute("data-id",e.videos[4]._id),dm.addEventListener("click",this.showVid.bind(this),!1);var du=document.createElement("div");du.classList.add("rfrd-video-photo"),du.style="background-image:url('"+e.videos[4].screengrab+"')",dm.appendChild(du);var dg=document.createElement("div"),d_=document.createElement("div");d_.classList.add("rfrd-side-video-name"),d_.textContent=e.videos[4].name;var dC=document.createElement("div");dC.classList.add("rfrd-side-video-title"),e.videos[4].featuredid?dC.textContent=e.videos[4].featuredid.jobtitle+", "+e.videos[4].featuredid.worksat:e.videos[4].jobtitle&&(dC.textContent=e.videos[4].jobtitle+", "+e.videos[4].worksat),dg.appendChild(d_),dg.appendChild(dC),dm.appendChild(dg);var d0=document.createElement("div");d0.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),d0.setAttribute("data-id",e.videos[4]._id);var d$=document.createElement("div");d$.classList.add("rfrd-video-flyout-wrap");var dE=document.createElement("div");dE.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),dE.style.paddingTop="56.17021276595745%";let d1=document.createElement("video");d1.classList.add("rfrd-mainvid"),d1.setAttribute("preload","none"),d1.setAttribute("data-id",e.videos[4]._id),d1.style="background-image:url('"+e.videos[4].screengrab+"')",this.mainvideo5=d1,this.mainvideo5.innerHTML='<source src="'+e.videos[4].link+'" data-wf-ignore="true">';var dL=document.createElement("a");dL.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),dL.style.backgroundColor="#"+e.maincolor,dL.setAttribute("target","_blank"),e.videos[4].widgetcta?(dL.href=e.videos[4].widgetlink,dL.textContent=e.videos[4].widgetcta):(dL.href=e.buttonlink,dL.textContent=e.buttoncta),dE.appendChild(this.mainvideo5),d$.appendChild(dE),d$.appendChild(dL),d0.appendChild(d$);let dw=document.createElement("div");dw.classList.add("rfrd-video-icons");let d4=document.createElement("div");d4.classList.add("rfrdsoundcontainer");let dk=document.createElement("div");dk.classList.add("sound-on"),this.soundon5=dk,this.soundon5.addEventListener("click",this.toggleSoundOn.bind(this));let dy=document.createElement("img");dy.classList.add("rfrd-video-icon"),dy.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let d2=document.createElement("div");d2.style.display="none",d2.classList.add("sound-off"),this.soundoff5=d2,this.soundoff5.addEventListener("click",this.toggleSoundOff.bind(this));let d7=document.createElement("img");d7.classList.add("rfrd-video-icon"),d7.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon5.appendChild(dy),this.soundoff5.appendChild(d7),d4.appendChild(this.soundon5),d4.appendChild(this.soundoff5);let dx=document.createElement("div");dx.classList.add("rfrdplaycontainer");let d5=document.createElement("div");d5.classList.add("pause-video-block");let d3=document.createElement("img");d3.classList.add("rfrd-video-icon"),d3.style.display="none",d3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg5=d3,this.pauseimg5.addEventListener("click",this.pauseVid.bind(this));let d6=document.createElement("div");d6.classList.add("play-video-block");let d8=document.createElement("img");d8.classList.add("rfrd-video-icon"),d8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg5=d8,this.playimg5.addEventListener("click",this.playVid.bind(this)),d5.appendChild(this.pauseimg5),d6.appendChild(this.playimg5),dx.appendChild(d5),dx.appendChild(d6);let dA=document.createElement("div"),dS=document.createElement("img");dS.classList.add("rfrd-video-icon"),dS.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg5=dS,this.fullscreenimg5.addEventListener("click",this.toggleFullScreen.bind(this)),dA.appendChild(this.fullscreenimg5),dw.appendChild(d4),dw.appendChild(dx),dw.appendChild(dA),dE.appendChild(dw),C.appendChild(x),C.appendChild(W),C.appendChild(eX),C.appendChild(te),C.appendChild(dm),$.appendChild(O),$.appendChild(eb),$.appendChild(it),$.appendChild(ta),$.appendChild(d0),_.appendChild(C),_.appendChild($),E.appendChild(g),E.appendChild(_),u.appendChild(E),u.appendChild(L)}this.messageContainer.appendChild(i),this.messageContainer.appendChild(u)}submit(e){e.preventDefault(),e.srcElement.querySelector("#email").value,e.srcElement.querySelector("#message").value,this.messageContainer.innerHTML='<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry'}toggleOpen(){this.open=!this.open,this.container.style="height: auto",this.buttonContainer.classList.add("rfrd-hidden"),this.messageContainer.classList.remove("rfrd-hidden")}toggleClose(){this.container.style="height: 0px",this.buttonContainer.classList.remove("rfrd-hidden"),this.messageContainer.classList.add("rfrd-hidden"),this.playimg.removeAttribute("style"),this.pauseimg.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.firstChild.firstChild.firstChild.pause(),e.firstChild.firstChild.firstChild.currentTime=0,e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none"})}toggleSoundOn(e){e.target.closest(".rfrdsoundcontainer").lastChild.removeAttribute("style"),e.target.closest(".sound-on").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&(e.firstChild.firstChild.firstChild.muted=!e.firstChild.firstChild.firstChild.muted)})}toggleSoundOff(e){e.target.closest(".rfrdsoundcontainer").firstChild.removeAttribute("style"),e.target.closest(".sound-off").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&(e.firstChild.firstChild.firstChild.muted=!e.firstChild.firstChild.firstChild.muted)})}toggleFullScreen(){document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.requestFullscreen()})}playVid(e){e.target.closest(".rfrdplaycontainer").firstChild.firstChild.removeAttribute("style"),e.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.play()})}pauseVid(e){e.target.closest(".rfrdplaycontainer").lastChild.firstChild.removeAttribute("style"),e.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){e.classList.contains("rfrd-w--tab-active")&&e.firstChild.firstChild.firstChild.pause()})}showVid(e){var i=e.target.closest(".rfrd-video-row").getAttribute("data-id");document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(e){i==e.getAttribute("data-id")?(e.classList.add("rfrd-w--tab-active"),e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",e.firstChild.firstChild.firstChild.pause(),e.currentTime=0):(e.classList.remove("rfrd-w--tab-active"),e.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),e.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",e.firstChild.firstChild.firstChild.pause(),e.currentTime=0)})}};
