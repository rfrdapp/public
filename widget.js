new class{constructor({position:a="bottom-left"}={}){this.position=this.getPosition(a),this.open=!1,this.initalise()}getPosition(a){let[b,c]=a.split("-");return{[b]:"30px",[c]:"30px"}}async initalise(){async function h(a){let b=await fetch("https://app.rfrd.io/read/widget/"+a).then(a=>a.json());return b}let i=document.getElementById("rfrd-widget"),j=i.dataset.id;var a=await h(j);let e=document.createElement("div");e.classList.add("rfrd-cheer-wrapper"),document.body.appendChild(e);let b=document.createElement("div");b.classList.add("cheer-video-bg"),this.buttonContainer=b;let f=document.createElement("div");f.classList.add("cheer-background-video");let c=document.createElement("div");c.classList.add("cheer-bg","w-background-video","w-background-video-atom"),c.setAttribute("data-video-urls",a.videos[0].videoid.link),c.setAttribute("data-autoplay","true"),c.setAttribute("data-loop","true"),c.setAttribute("data-wf-ignore","true"),this.videogif=c;let d=document.createElement("video");d.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",d.autoplay=!0,d.loop=!0,d.muted=!0,d.playsinline=!0,this.video=d,this.video.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">',this.videogif.appendChild(this.video),f.appendChild(this.videogif);let g=document.createElement("div");g.classList.add("cheer-cta"),g.style.backgroundColor="#"+a.maincolor,this.cheercta=g,this.cheercta.innerHTML="<div>"+a.widgetcta+"</div>",this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("hidden","rfrd-activated"),this.createMessageContainerContent(a),b.appendChild(f),b.appendChild(this.cheercta),b.addEventListener("click",this.toggleOpen.bind(this)),e.append(this.messageContainer),e.append(b),this.createStyles(a)}createStyles(b){let a=document.createElement("style");a.innerHTML=`
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
          .cheer-cta {
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
          .cheer-video-bg {
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
          .w-background-video {
            position: relative;
            overflow: hidden;
            height: 500px;
            color: white;
          }
          .cheer-background-video {
            overflow: hidden;
            width: 89px;
            height: 89px;
            border-style: solid;
            border-width: 3px;
            border-color: #0666eb;
            border-radius: 1000px;
            background-image: none;
            background-position: 0px 0px;
            background-size: auto;
          }
          .w-background-video>video {
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
          .page-bg {
            position: fixed;
            left: 0%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.58), transparent 60%);
          }
          .cheer-wrap {
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
          .side-cheer-header {
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
          .w-tab-link {
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
          .video-row {
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
          .video-photo {
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
          .side-video-name {
            margin-bottom: 5px;
            font-size: 15px;
            line-height: 1em;
            font-weight: 600;
          }
          .side-video-title {
            opacity: 0.5;
            font-size: 14px;
            line-height: 1em;
          }
          .built-with-rfrd {
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
          .bw-rfrd-logo {
            width: 53px;
            margin-left: 6px;
          }
          .video-flyout-wrap {
            width: 400px;
          }
          .video-flyout {
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
          .button.video-cta {
            position: absolute;
            left: -2px;
            top: auto;
            right: auto;
            bottom: -55px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 400px;
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
          .ww-button {
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
          .hidden {
              transform: scale(0);
          }
          .video-icons {
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
          .video-icon {
            width: 20px;
            -webkit-transition: -webkit-transform 360ms ease;
            transition: -webkit-transform 360ms ease;
            transition: transform 360ms ease;
            transition: transform 360ms ease, -webkit-transform 360ms ease;
            cursor: pointer;
          }
          .videos-top {
            height: 400px;
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 auto;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
          }
          .cheer-bg {
            position: absolute;
            left: 0%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            width: 89px;
            height: 89px;
            border-radius: 1000px;
          }
          .w-tabs {
            position: relative;
          }
          .w-tab-menu {
            position: relative;
          }
          .w-tab-content {
            position: relative;
            display: block;
            overflow: hidden;
          }
          .tabs-content {
            position: absolute;
            left: 310px;
            top: -42px;
            right: 0%;
            bottom: auto;
            width: 400px;
            height: auto;
          }
          .w-tab-pane {
            position: relative;
            display: none;
          }
          .video-tab-pane {
            width: 400px;
            height: auto;
          }
          .w--tab-active {
            display: block;
          }
          .w-video {
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
          .video-play {
            overflow: hidden;
            border-radius: 7px;
          }
          .w-button {
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
          .widget-button {
            padding: 13px;
            border-radius: 6px;
            background-color: #ff56a2;
            color: #fff;
            font-size: 13px;
            line-height: 1em;
          }
          .widget-button.video-cta {
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
          .w-video iframe, .w-video object, .w-video embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }
          .mainvid {
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
            .cheer-background-video {
              background-image: url("${b.videos[0].videoid.screengrab}");
              background-size: cover;
            }
            .cheer-bg {
              display: none;
            }
          }
          @media screen and (max-width: 479px) {
            .rfrd-cheer-wrapper {
              width: 100%;
              padding-right: 10px;
            }
            .cheer-background-video {
              width: 70px;
              height: 70px;
            }
            .cheer-bg {
              width: 70px;
              height: 70px;
            }
            .cheer-wrap {
              width: 100%;
            }
            .videos-top {
              height: auto;
            }
            .video-photo {
              width: 64px;
              height: 48px;
            }
            .tabs-content {
              left: 0%;
              top: -354px;
              right: auto;
              bottom: auto;
              width: 100%;
            }
            .video-tab-pane {
              width: 100%;
            }
            .video-flyout-wrap {
              width: 100%;
            }
            .video-play {
              border-bottom-left-radius: 0px;
              border-bottom-right-radius: 0px;
            }
            .widget-button.video-cta {
              width: 100%;
              margin-top: 0px;
              padding-top: 13px;
              padding-bottom: 14px;
              border-top-left-radius: 0px;
              border-top-right-radius: 0px;
              font-size: 14px;
            }
            .built-with-rfrd {
              padding-top: 9px;
              padding-bottom: 10px;
              font-size: 14px;
              font-weight: 500;
            } 
          }  
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(a)}createMessageContainerContent(a){this.messageContainer.innerHTML="";let aj=document.createElement("div");aj.classList.add("page-bg"),aj.addEventListener("click",this.toggleClose.bind(this));let dJ=document.createElement("div");aj.appendChild(dJ);var S=a.videos.length;let ak=document.createElement("div");ak.classList.add("video-icons");let bm=document.createElement("div"),da=document.createElement("div");da.classList.add("sound-on"),this.soundon=da,this.soundon.addEventListener("click",this.toggleSoundOn.bind(this));let bn=document.createElement("img");bn.classList.add("video-icon"),bn.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bo=document.createElement("div");bo.style.display="none",bo.classList.add("sound-off"),this.soundoff=bo,this.soundoff.addEventListener("click",this.toggleSoundOff.bind(this));let bp=document.createElement("img");bp.classList.add("video-icon"),bp.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon.appendChild(bn),this.soundoff.appendChild(bp),bm.appendChild(this.soundon),bm.appendChild(this.soundoff);let bq=document.createElement("div"),br=document.createElement("div");br.classList.add("pause-video-block");let al=document.createElement("img");al.classList.add("video-icon"),al.style.display="none",al.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg=al,this.pauseimg.addEventListener("click",this.pauseVid.bind(this));let bs=document.createElement("div");bs.classList.add("play-video-block");let bt=document.createElement("img");bt.classList.add("video-icon"),bt.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg=bt,this.playimg.addEventListener("click",this.playVid.bind(this)),br.appendChild(this.pauseimg),bs.appendChild(this.playimg),bq.appendChild(br),bq.appendChild(bs);let db=document.createElement("div"),bu=document.createElement("img");bu.classList.add("video-icon"),bu.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg=bu,this.fullscreenimg.addEventListener("click",this.toggleFullScreen.bind(this)),db.appendChild(this.fullscreenimg),ak.appendChild(bm),ak.appendChild(bq),ak.appendChild(db);let D=document.createElement("div");D.classList.add("cheer-wrap"),D.id="cheer-wrap";let O=document.createElement("div");O.classList.add("side-cheer-header"),O.textContent=a.cardlabel;let v=document.createElement("div");v.classList.add("video-tabs","w-tabs");let k=document.createElement("div");k.classList.add("video-tabs-menu","w-tab-menu");let l=document.createElement("div");l.classList.add("tabs-content","w-tab-content");let w=document.createElement("div");w.classList.add("videos-top");let N=document.createElement("div");N.classList.add("built-with-rfrd");let dc=document.createElement("div");dc.textContent="Built with";let bv=document.createElement("img");bv.classList.add("bw-rfrd-logo"),bv.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/6254a481ee51de3be6a0b275_rfrd%20dark.svg",N.appendChild(dc),N.appendChild(bv);var S=a.videos.length;if(1==S){var b=document.createElement("a");b.classList.add("video-row","rfrd-inline-block","w-tab-link"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var n=document.createElement("div");n.classList.add("video-photo"),n.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(n);var o=document.createElement("div"),p=document.createElement("div");p.classList.add("side-video-name"),p.textContent=a.videos[0].videoid.name;var f=document.createElement("div");f.classList.add("side-video-title"),a.videos[0].featuredid?f.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(f.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),o.appendChild(p),o.appendChild(f),b.appendChild(o);var g=document.createElement("div");g.classList.add("video-tab-pane","w-tab-pane","w--tab-active"),g.setAttribute("data-id",a.videos[0].videoid._id);var h=document.createElement("div");h.classList.add("video-flyout-wrap");var c=document.createElement("div");c.classList.add("video-play","w-video","w-embed"),c.style.paddingTop="56.17021276595745%";let am=document.createElement("video");am.classList.add("mainvid"),am.setAttribute("data-id",a.videos[0].videoid._id),am.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo1=am,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';var d=document.createElement("a");d.classList.add("widget-button","video-cta","w-button"),d.href=a.buttonlink,d.style.backgroundColor="#"+a.maincolor,d.textContent=a.buttoncta,c.appendChild(this.mainvideo1),h.appendChild(c),h.appendChild(d),g.appendChild(h);let U=document.createElement("div");U.classList.add("video-icons");let an=document.createElement("div");an.classList.add("rfrdsoundcontainer");let dd=document.createElement("div");dd.classList.add("sound-on"),this.soundon1=dd,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let bw=document.createElement("img");bw.classList.add("video-icon"),bw.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bx=document.createElement("div");bx.style.display="none",bx.classList.add("sound-off"),this.soundoff1=bx,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let by=document.createElement("img");by.classList.add("video-icon"),by.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(bw),this.soundoff1.appendChild(by),an.appendChild(this.soundon1),an.appendChild(this.soundoff1);let ao=document.createElement("div");ao.classList.add("rfrdplaycontainer");let bz=document.createElement("div");bz.classList.add("pause-video-block");let ap=document.createElement("img");ap.classList.add("video-icon"),ap.style.display="none",ap.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=ap,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let bA=document.createElement("div");bA.classList.add("play-video-block");let bB=document.createElement("img");bB.classList.add("video-icon"),bB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=bB,this.playimg1.addEventListener("click",this.playVid.bind(this)),bz.appendChild(this.pauseimg1),bA.appendChild(this.playimg1),ao.appendChild(bz),ao.appendChild(bA);let de=document.createElement("div"),bC=document.createElement("img");bC.classList.add("video-icon"),bC.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=bC,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),de.appendChild(this.fullscreenimg1),U.appendChild(an),U.appendChild(ao),U.appendChild(de),c.appendChild(U),k.appendChild(b),l.appendChild(g),v.appendChild(k),v.appendChild(l),w.appendChild(O),w.appendChild(v),D.appendChild(w),D.appendChild(N)}if(2==S){var b=document.createElement("a");b.classList.add("video-row","rfrd-inline-block","w-tab-link"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var n=document.createElement("div");n.classList.add("video-photo"),n.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(n);var o=document.createElement("div"),p=document.createElement("div");p.classList.add("side-video-name"),p.textContent=a.videos[0].videoid.name;var f=document.createElement("div");f.classList.add("side-video-title"),a.videos[0].featuredid?f.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(f.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),o.appendChild(p),o.appendChild(f),b.appendChild(o);var e=document.createElement("a");e.classList.add("video-row","rfrd-inline-block","w-tab-link"),e.setAttribute("data-id",a.videos[1].videoid._id),e.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("video-photo"),x.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",e.appendChild(x);var y=document.createElement("div"),z=document.createElement("div");z.classList.add("side-video-name"),z.textContent=a.videos[1].videoid.name;var q=document.createElement("div");q.classList.add("side-video-title"),a.videos[1].featuredid?q.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(q.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),y.appendChild(z),y.appendChild(q),e.appendChild(y);var g=document.createElement("div");g.classList.add("video-tab-pane","w-tab-pane","w--tab-active"),g.setAttribute("data-id",a.videos[0].videoid._id);var h=document.createElement("div");h.classList.add("video-flyout-wrap");var c=document.createElement("div");c.classList.add("video-play","w-video","w-embed"),c.style.paddingTop="56.17021276595745%";let aq=document.createElement("video");aq.classList.add("mainvid"),aq.setAttribute("data-id",a.videos[0].videoid._id),aq.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo1=aq,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';var d=document.createElement("a");d.classList.add("widget-button","video-cta","w-button"),d.href=a.buttonlink,d.style.backgroundColor="#"+a.maincolor,d.textContent=a.buttoncta,c.appendChild(this.mainvideo1),h.appendChild(c),h.appendChild(d),g.appendChild(h);let V=document.createElement("div");V.classList.add("video-icons");let ar=document.createElement("div");ar.classList.add("rfrdsoundcontainer");let df=document.createElement("div");df.classList.add("sound-on"),this.soundon1=df,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let bD=document.createElement("img");bD.classList.add("video-icon"),bD.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bE=document.createElement("div");bE.style.display="none",bE.classList.add("sound-off"),this.soundoff1=bE,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let bF=document.createElement("img");bF.classList.add("video-icon"),bF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(bD),this.soundoff1.appendChild(bF),ar.appendChild(this.soundon1),ar.appendChild(this.soundoff1);let as=document.createElement("div");as.classList.add("rfrdplaycontainer");let bG=document.createElement("div");bG.classList.add("pause-video-block");let at=document.createElement("img");at.classList.add("video-icon"),at.style.display="none",at.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=at,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let bH=document.createElement("div");bH.classList.add("play-video-block");let bI=document.createElement("img");bI.classList.add("video-icon"),bI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=bI,this.playimg1.addEventListener("click",this.playVid.bind(this)),bG.appendChild(this.pauseimg1),bH.appendChild(this.playimg1),as.appendChild(bG),as.appendChild(bH);let dg=document.createElement("div"),bJ=document.createElement("img");bJ.classList.add("video-icon"),bJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=bJ,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),dg.appendChild(this.fullscreenimg1),V.appendChild(ar),V.appendChild(as),V.appendChild(dg),c.appendChild(V);var r=document.createElement("div");r.classList.add("video-tab-pane","w-tab-pane"),r.setAttribute("data-id",a.videos[1].videoid._id);var s=document.createElement("div");s.classList.add("video-flyout-wrap");var i=document.createElement("div");i.classList.add("video-play","w-video","w-embed"),i.style.paddingTop="56.17021276595745%";let au=document.createElement("video");au.classList.add("mainvid"),au.setAttribute("data-id",a.videos[1].videoid._id),au.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo2=au,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';var j=document.createElement("a");j.classList.add("widget-button","video-cta","w-button"),j.href=a.buttonlink,j.style.backgroundColor="#"+a.maincolor,j.textContent=a.buttoncta,i.appendChild(this.mainvideo2),s.appendChild(i),s.appendChild(j),r.appendChild(s);let W=document.createElement("div");W.classList.add("video-icons");let av=document.createElement("div");av.classList.add("rfrdsoundcontainer");let dh=document.createElement("div");dh.classList.add("sound-on"),this.soundon2=dh,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let bK=document.createElement("img");bK.classList.add("video-icon"),bK.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bL=document.createElement("div");bL.style.display="none",bL.classList.add("sound-off"),this.soundoff2=bL,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let bM=document.createElement("img");bM.classList.add("video-icon"),bM.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(bK),this.soundoff2.appendChild(bM),av.appendChild(this.soundon2),av.appendChild(this.soundoff2);let aw=document.createElement("div");aw.classList.add("rfrdplaycontainer");let bN=document.createElement("div");bN.classList.add("pause-video-block");let ax=document.createElement("img");ax.classList.add("video-icon"),ax.style.display="none",ax.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=ax,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let bO=document.createElement("div");bO.classList.add("play-video-block");let bP=document.createElement("img");bP.classList.add("video-icon"),bP.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=bP,this.playimg2.addEventListener("click",this.playVid.bind(this)),bN.appendChild(this.pauseimg2),bO.appendChild(this.playimg2),aw.appendChild(bN),aw.appendChild(bO);let di=document.createElement("div"),bQ=document.createElement("img");bQ.classList.add("video-icon"),bQ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=bQ,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),di.appendChild(this.fullscreenimg2),W.appendChild(av),W.appendChild(aw),W.appendChild(di),i.appendChild(W),k.appendChild(b),k.appendChild(e),l.appendChild(g),l.appendChild(r),v.appendChild(k),v.appendChild(l),w.appendChild(O),w.appendChild(v),D.appendChild(w),D.appendChild(N)}if(3==S){var b=document.createElement("a");b.classList.add("video-row","rfrd-inline-block","w-tab-link"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var n=document.createElement("div");n.classList.add("video-photo"),n.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(n);var o=document.createElement("div"),p=document.createElement("div");p.classList.add("side-video-name"),p.textContent=a.videos[0].videoid.name;var f=document.createElement("div");f.classList.add("side-video-title"),a.videos[0].featuredid?f.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(f.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),o.appendChild(p),o.appendChild(f),b.appendChild(o);var g=document.createElement("div");g.classList.add("video-tab-pane","w-tab-pane","w--tab-active"),g.setAttribute("data-id",a.videos[0].videoid._id);var h=document.createElement("div");h.classList.add("video-flyout-wrap");var c=document.createElement("div");c.classList.add("video-play","w-video","w-embed"),c.style.paddingTop="56.17021276595745%";let ay=document.createElement("video");ay.classList.add("mainvid"),ay.setAttribute("data-id",a.videos[0].videoid._id),ay.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo1=ay,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';var d=document.createElement("a");d.classList.add("widget-button","video-cta","w-button"),d.href=a.buttonlink,d.style.backgroundColor="#"+a.maincolor,d.textContent=a.buttoncta,c.appendChild(this.mainvideo1),h.appendChild(c),h.appendChild(d),g.appendChild(h);let X=document.createElement("div");X.classList.add("video-icons");let az=document.createElement("div");az.classList.add("rfrdsoundcontainer");let dj=document.createElement("div");dj.classList.add("sound-on"),this.soundon1=dj,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let bR=document.createElement("img");bR.classList.add("video-icon"),bR.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bS=document.createElement("div");bS.style.display="none",bS.classList.add("sound-off"),this.soundoff1=bS,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let bT=document.createElement("img");bT.classList.add("video-icon"),bT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(bR),this.soundoff1.appendChild(bT),az.appendChild(this.soundon1),az.appendChild(this.soundoff1);let aA=document.createElement("div");aA.classList.add("rfrdplaycontainer");let bU=document.createElement("div");bU.classList.add("pause-video-block");let aB=document.createElement("img");aB.classList.add("video-icon"),aB.style.display="none",aB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=aB,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let bV=document.createElement("div");bV.classList.add("play-video-block");let bW=document.createElement("img");bW.classList.add("video-icon"),bW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=bW,this.playimg1.addEventListener("click",this.playVid.bind(this)),bU.appendChild(this.pauseimg1),bV.appendChild(this.playimg1),aA.appendChild(bU),aA.appendChild(bV);let dk=document.createElement("div"),bX=document.createElement("img");bX.classList.add("video-icon"),bX.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=bX,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),dk.appendChild(this.fullscreenimg1),X.appendChild(az),X.appendChild(aA),X.appendChild(dk),c.appendChild(X);var e=document.createElement("a");e.classList.add("video-row","rfrd-inline-block","w-tab-link"),e.setAttribute("data-id",a.videos[1].videoid._id),e.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("video-photo"),x.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",e.appendChild(x);var y=document.createElement("div"),z=document.createElement("div");z.classList.add("side-video-name"),z.textContent=a.videos[1].videoid.name;var q=document.createElement("div");q.classList.add("side-video-title"),a.videos[1].featuredid?q.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(q.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),y.appendChild(z),y.appendChild(q),e.appendChild(y);var r=document.createElement("div");r.classList.add("video-tab-pane","w-tab-pane"),r.setAttribute("data-id",a.videos[1].videoid._id);var s=document.createElement("div");s.classList.add("video-flyout-wrap");var i=document.createElement("div");i.classList.add("video-play","w-video","w-embed"),i.style.paddingTop="56.17021276595745%";let aC=document.createElement("video");aC.classList.add("mainvid"),aC.setAttribute("data-id",a.videos[1].videoid._id),aC.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo2=aC,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';var j=document.createElement("a");j.classList.add("widget-button","video-cta","w-button"),j.href=a.buttonlink,j.style.backgroundColor="#"+a.maincolor,j.textContent=a.buttoncta,i.appendChild(this.mainvideo2),s.appendChild(i),s.appendChild(j),r.appendChild(s);let Y=document.createElement("div");Y.classList.add("video-icons");let aD=document.createElement("div");aD.classList.add("rfrdsoundcontainer");let dl=document.createElement("div");dl.classList.add("sound-on"),this.soundon2=dl,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let bY=document.createElement("img");bY.classList.add("video-icon"),bY.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bZ=document.createElement("div");bZ.style.display="none",bZ.classList.add("sound-off"),this.soundoff2=bZ,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let b$=document.createElement("img");b$.classList.add("video-icon"),b$.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(bY),this.soundoff2.appendChild(b$),aD.appendChild(this.soundon2),aD.appendChild(this.soundoff2);let aE=document.createElement("div");aE.classList.add("rfrdplaycontainer");let b_=document.createElement("div");b_.classList.add("pause-video-block");let aF=document.createElement("img");aF.classList.add("video-icon"),aF.style.display="none",aF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=aF,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let b0=document.createElement("div");b0.classList.add("play-video-block");let b1=document.createElement("img");b1.classList.add("video-icon"),b1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=b1,this.playimg2.addEventListener("click",this.playVid.bind(this)),b_.appendChild(this.pauseimg2),b0.appendChild(this.playimg2),aE.appendChild(b_),aE.appendChild(b0);let dm=document.createElement("div"),b2=document.createElement("img");b2.classList.add("video-icon"),b2.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=b2,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),dm.appendChild(this.fullscreenimg2),Y.appendChild(aD),Y.appendChild(aE),Y.appendChild(dm),i.appendChild(Y);var m=document.createElement("a");m.classList.add("video-row","rfrd-inline-block","w-tab-link"),m.setAttribute("data-id",a.videos[2].videoid._id),m.addEventListener("click",this.showVid.bind(this),!1);var F=document.createElement("div");F.classList.add("video-photo"),F.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",m.appendChild(F);var G=document.createElement("div"),H=document.createElement("div");H.classList.add("side-video-name"),H.textContent=a.videos[1].videoid.name;var A=document.createElement("div");A.classList.add("side-video-title"),a.videos[2].featuredid?A.textContent=a.videos[2].featuredid.jobtitle+", "+a.videos[2].featuredid.worksat:a.videos[2].videoid.jobtitle&&(A.textContent=a.videos[2].videoid.jobtitle+", "+a.videos[2].videoid.worksat),G.appendChild(H),G.appendChild(A),m.appendChild(G);var B=document.createElement("div");B.classList.add("video-tab-pane","w-tab-pane"),B.setAttribute("data-id",a.videos[2].videoid._id);var C=document.createElement("div");C.classList.add("video-flyout-wrap");var t=document.createElement("div");t.classList.add("video-play","w-video","w-embed"),t.style.paddingTop="56.17021276595745%";let aG=document.createElement("video");aG.classList.add("mainvid"),aG.setAttribute("data-id",a.videos[2].videoid._id),aG.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo3=aG,this.mainvideo3.innerHTML='<source src="'+a.videos[2].videoid.link+'" data-wf-ignore="true">';var u=document.createElement("a");u.classList.add("widget-button","video-cta","w-button"),u.href=a.buttonlink,u.style.backgroundColor="#"+a.maincolor,u.textContent=a.buttoncta,t.appendChild(this.mainvideo3),C.appendChild(t),C.appendChild(u),B.appendChild(C);let Z=document.createElement("div");Z.classList.add("video-icons");let aH=document.createElement("div");aH.classList.add("rfrdsoundcontainer");let dn=document.createElement("div");dn.classList.add("sound-on"),this.soundon3=dn,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let b3=document.createElement("img");b3.classList.add("video-icon"),b3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let b4=document.createElement("div");b4.style.display="none",b4.classList.add("sound-off"),this.soundoff3=b4,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let b5=document.createElement("img");b5.classList.add("video-icon"),b5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(b3),this.soundoff3.appendChild(b5),aH.appendChild(this.soundon3),aH.appendChild(this.soundoff3);let aI=document.createElement("div");aI.classList.add("rfrdplaycontainer");let b6=document.createElement("div");b6.classList.add("pause-video-block");let aJ=document.createElement("img");aJ.classList.add("video-icon"),aJ.style.display="none",aJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=aJ,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let b7=document.createElement("div");b7.classList.add("play-video-block");let b8=document.createElement("img");b8.classList.add("video-icon"),b8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=b8,this.playimg3.addEventListener("click",this.playVid.bind(this)),b6.appendChild(this.pauseimg3),b7.appendChild(this.playimg3),aI.appendChild(b6),aI.appendChild(b7);let dp=document.createElement("div"),b9=document.createElement("img");b9.classList.add("video-icon"),b9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=b9,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),dp.appendChild(this.fullscreenimg3),Z.appendChild(aH),Z.appendChild(aI),Z.appendChild(dp),t.appendChild(Z),k.appendChild(b),k.appendChild(e),k.appendChild(m),l.appendChild(g),l.appendChild(r),l.appendChild(B),v.appendChild(k),v.appendChild(l),w.appendChild(O),w.appendChild(v),D.appendChild(w),D.appendChild(N)}if(4==S){var b=document.createElement("a");b.classList.add("video-row","rfrd-inline-block","w-tab-link"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var n=document.createElement("div");n.classList.add("video-photo"),n.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(n);var o=document.createElement("div"),p=document.createElement("div");p.classList.add("side-video-name"),p.textContent=a.videos[0].videoid.name;var f=document.createElement("div");f.classList.add("side-video-title"),a.videos[0].featuredid?f.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(f.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),o.appendChild(p),o.appendChild(f),b.appendChild(o);var g=document.createElement("div");g.classList.add("video-tab-pane","w-tab-pane","w--tab-active"),g.setAttribute("data-id",a.videos[0].videoid._id);var h=document.createElement("div");h.classList.add("video-flyout-wrap");var c=document.createElement("div");c.classList.add("video-play","w-video","w-embed"),c.style.paddingTop="56.17021276595745%";let aK=document.createElement("video");aK.classList.add("mainvid"),aK.setAttribute("data-id",a.videos[0].videoid._id),aK.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo1=aK,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';var d=document.createElement("a");d.classList.add("widget-button","video-cta","w-button"),d.href=a.buttonlink,d.style.backgroundColor="#"+a.maincolor,d.textContent=a.buttoncta,c.appendChild(this.mainvideo1),h.appendChild(c),h.appendChild(d),g.appendChild(h);let $=document.createElement("div");$.classList.add("video-icons");let aL=document.createElement("div");aL.classList.add("rfrdsoundcontainer");let dq=document.createElement("div");dq.classList.add("sound-on"),this.soundon1=dq,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let ca=document.createElement("img");ca.classList.add("video-icon"),ca.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cb=document.createElement("div");cb.style.display="none",cb.classList.add("sound-off"),this.soundoff1=cb,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let cc=document.createElement("img");cc.classList.add("video-icon"),cc.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(ca),this.soundoff1.appendChild(cc),aL.appendChild(this.soundon1),aL.appendChild(this.soundoff1);let aM=document.createElement("div");aM.classList.add("rfrdplaycontainer");let cd=document.createElement("div");cd.classList.add("pause-video-block");let aN=document.createElement("img");aN.classList.add("video-icon"),aN.style.display="none",aN.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=aN,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ce=document.createElement("div");ce.classList.add("play-video-block");let cf=document.createElement("img");cf.classList.add("video-icon"),cf.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=cf,this.playimg1.addEventListener("click",this.playVid.bind(this)),cd.appendChild(this.pauseimg1),ce.appendChild(this.playimg1),aM.appendChild(cd),aM.appendChild(ce);let dr=document.createElement("div"),cg=document.createElement("img");cg.classList.add("video-icon"),cg.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=cg,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),dr.appendChild(this.fullscreenimg1),$.appendChild(aL),$.appendChild(aM),$.appendChild(dr),c.appendChild($);var e=document.createElement("a");e.classList.add("video-row","rfrd-inline-block","w-tab-link"),e.setAttribute("data-id",a.videos[1].videoid._id),e.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("video-photo"),x.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",e.appendChild(x);var y=document.createElement("div"),z=document.createElement("div");z.classList.add("side-video-name"),z.textContent=a.videos[1].videoid.name;var q=document.createElement("div");q.classList.add("side-video-title"),a.videos[1].featuredid?q.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(q.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),y.appendChild(z),y.appendChild(q),e.appendChild(y);var r=document.createElement("div");r.classList.add("video-tab-pane","w-tab-pane"),r.setAttribute("data-id",a.videos[1].videoid._id);var s=document.createElement("div");s.classList.add("video-flyout-wrap");var i=document.createElement("div");i.classList.add("video-play","w-video","w-embed"),i.style.paddingTop="56.17021276595745%";let aO=document.createElement("video");aO.classList.add("mainvid"),aO.setAttribute("data-id",a.videos[1].videoid._id),aO.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo2=aO,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';var j=document.createElement("a");j.classList.add("widget-button","video-cta","w-button"),j.href=a.buttonlink,j.style.backgroundColor="#"+a.maincolor,j.textContent=a.buttoncta,i.appendChild(this.mainvideo2),s.appendChild(i),s.appendChild(j),r.appendChild(s);let _=document.createElement("div");_.classList.add("video-icons");let aP=document.createElement("div");aP.classList.add("rfrdsoundcontainer");let ds=document.createElement("div");ds.classList.add("sound-on"),this.soundon2=ds,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let ch=document.createElement("img");ch.classList.add("video-icon"),ch.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let ci=document.createElement("div");ci.style.display="none",ci.classList.add("sound-off"),this.soundoff2=ci,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let cj=document.createElement("img");cj.classList.add("video-icon"),cj.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(ch),this.soundoff2.appendChild(cj),aP.appendChild(this.soundon2),aP.appendChild(this.soundoff2);let aQ=document.createElement("div");aQ.classList.add("rfrdplaycontainer");let ck=document.createElement("div");ck.classList.add("pause-video-block");let aR=document.createElement("img");aR.classList.add("video-icon"),aR.style.display="none",aR.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=aR,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let cl=document.createElement("div");cl.classList.add("play-video-block");let cm=document.createElement("img");cm.classList.add("video-icon"),cm.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=cm,this.playimg2.addEventListener("click",this.playVid.bind(this)),ck.appendChild(this.pauseimg2),cl.appendChild(this.playimg2),aQ.appendChild(ck),aQ.appendChild(cl);let dt=document.createElement("div"),cn=document.createElement("img");cn.classList.add("video-icon"),cn.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=cn,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),dt.appendChild(this.fullscreenimg2),_.appendChild(aP),_.appendChild(aQ),_.appendChild(dt),i.appendChild(_);var m=document.createElement("a");m.classList.add("video-row","rfrd-inline-block","w-tab-link"),m.setAttribute("data-id",a.videos[2].videoid._id),m.addEventListener("click",this.showVid.bind(this),!1);var F=document.createElement("div");F.classList.add("video-photo"),F.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",m.appendChild(F);var G=document.createElement("div"),H=document.createElement("div");H.classList.add("side-video-name"),H.textContent=a.videos[2].videoid.name;var A=document.createElement("div");A.classList.add("side-video-title"),a.videos[2].featuredid?A.textContent=a.videos[2].featuredid.jobtitle+", "+a.videos[2].featuredid.worksat:a.videos[2].videoid.jobtitle&&(A.textContent=a.videos[2].videoid.jobtitle+", "+a.videos[2].videoid.worksat),G.appendChild(H),G.appendChild(A),m.appendChild(G);var B=document.createElement("div");B.classList.add("video-tab-pane","w-tab-pane"),B.setAttribute("data-id",a.videos[2].videoid._id);var C=document.createElement("div");C.classList.add("video-flyout-wrap");var t=document.createElement("div");t.classList.add("video-play","w-video","w-embed"),t.style.paddingTop="56.17021276595745%";let aS=document.createElement("video");aS.classList.add("mainvid"),aS.setAttribute("data-id",a.videos[2].videoid._id),aS.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo3=aS,this.mainvideo3.innerHTML='<source src="'+a.videos[2].videoid.link+'" data-wf-ignore="true">';var u=document.createElement("a");u.classList.add("widget-button","video-cta","w-button"),u.href=a.buttonlink,u.style.backgroundColor="#"+a.maincolor,u.textContent=a.buttoncta,t.appendChild(this.mainvideo3),C.appendChild(t),C.appendChild(u),B.appendChild(C);let aa=document.createElement("div");aa.classList.add("video-icons");let aT=document.createElement("div");aT.classList.add("rfrdsoundcontainer");let du=document.createElement("div");du.classList.add("sound-on"),this.soundon3=du,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let co=document.createElement("img");co.classList.add("video-icon"),co.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cp=document.createElement("div");cp.style.display="none",cp.classList.add("sound-off"),this.soundoff3=cp,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let cq=document.createElement("img");cq.classList.add("video-icon"),cq.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(co),this.soundoff3.appendChild(cq),aT.appendChild(this.soundon3),aT.appendChild(this.soundoff3);let aU=document.createElement("div");aU.classList.add("rfrdplaycontainer");let cr=document.createElement("div");cr.classList.add("pause-video-block");let aV=document.createElement("img");aV.classList.add("video-icon"),aV.style.display="none",aV.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=aV,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let cs=document.createElement("div");cs.classList.add("play-video-block");let ct=document.createElement("img");ct.classList.add("video-icon"),ct.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=ct,this.playimg3.addEventListener("click",this.playVid.bind(this)),cr.appendChild(this.pauseimg3),cs.appendChild(this.playimg3),aU.appendChild(cr),aU.appendChild(cs);let dv=document.createElement("div"),cu=document.createElement("img");cu.classList.add("video-icon"),cu.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=cu,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),dv.appendChild(this.fullscreenimg3),aa.appendChild(aT),aa.appendChild(aU),aa.appendChild(dv),t.appendChild(aa);var E=document.createElement("a");E.classList.add("video-row","rfrd-inline-block","w-tab-link"),E.setAttribute("data-id",a.videos[3].videoid._id),E.addEventListener("click",this.showVid.bind(this),!1);var P=document.createElement("div");P.classList.add("video-photo"),P.style="background-image:url('"+a.videos[3].videoid.screengrab+"')",E.appendChild(P);var Q=document.createElement("div"),R=document.createElement("div");R.classList.add("side-video-name"),R.textContent=a.videos[3].videoid.name;var K=document.createElement("div");K.classList.add("side-video-title"),a.videos[3].featuredid?K.textContent=a.videos[3].featuredid.jobtitle+", "+a.videos[3].featuredid.worksat:a.videos[3].videoid.jobtitle&&(K.textContent=a.videos[3].videoid.jobtitle+", "+a.videos[3].videoid.worksat),Q.appendChild(R),Q.appendChild(K),E.appendChild(Q);var L=document.createElement("div");L.classList.add("video-tab-pane","w-tab-pane"),L.setAttribute("data-id",a.videos[3].videoid._id);var M=document.createElement("div");M.classList.add("video-flyout-wrap");var I=document.createElement("div");I.classList.add("video-play","w-video","w-embed"),I.style.paddingTop="56.17021276595745%";let aW=document.createElement("video");aW.classList.add("mainvid"),aW.setAttribute("data-id",a.videos[3].videoid._id),aW.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo4=aW,this.mainvideo4.innerHTML='<source src="'+a.videos[3].videoid.link+'" data-wf-ignore="true">';var J=document.createElement("a");J.classList.add("widget-button","video-cta","w-button"),J.href=a.buttonlink,J.style.backgroundColor="#"+a.maincolor,J.textContent=a.buttoncta,I.appendChild(this.mainvideo4),M.appendChild(I),M.appendChild(J),L.appendChild(M);let ab=document.createElement("div");ab.classList.add("video-icons");let aX=document.createElement("div");aX.classList.add("rfrdsoundcontainer");let dw=document.createElement("div");dw.classList.add("sound-on"),this.soundon4=dw,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let cv=document.createElement("img");cv.classList.add("video-icon"),cv.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cw=document.createElement("div");cw.style.display="none",cw.classList.add("sound-off"),this.soundoff4=cw,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let cx=document.createElement("img");cx.classList.add("video-icon"),cx.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(cv),this.soundoff4.appendChild(cx),aX.appendChild(this.soundon4),aX.appendChild(this.soundoff4);let aY=document.createElement("div");aY.classList.add("rfrdplaycontainer");let cy=document.createElement("div");cy.classList.add("pause-video-block");let aZ=document.createElement("img");aZ.classList.add("video-icon"),aZ.style.display="none",aZ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=aZ,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let cz=document.createElement("div");cz.classList.add("play-video-block");let cA=document.createElement("img");cA.classList.add("video-icon"),cA.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=cA,this.playimg4.addEventListener("click",this.playVid.bind(this)),cy.appendChild(this.pauseimg4),cz.appendChild(this.playimg4),aY.appendChild(cy),aY.appendChild(cz);let dx=document.createElement("div"),cB=document.createElement("img");cB.classList.add("video-icon"),cB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=cB,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),dx.appendChild(this.fullscreenimg4),ab.appendChild(aX),ab.appendChild(aY),ab.appendChild(dx),I.appendChild(ab),k.appendChild(b),k.appendChild(e),k.appendChild(m),k.appendChild(E),l.appendChild(g),l.appendChild(r),l.appendChild(B),l.appendChild(L),v.appendChild(k),v.appendChild(l),w.appendChild(O),w.appendChild(v),D.appendChild(w),D.appendChild(N)}if(5==S){var b=document.createElement("a");b.classList.add("video-row","rfrd-inline-block","w-tab-link"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var n=document.createElement("div");n.classList.add("video-photo"),n.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(n);var o=document.createElement("div"),p=document.createElement("div");p.classList.add("side-video-name"),p.textContent=a.videos[0].videoid.name;var f=document.createElement("div");f.classList.add("side-video-title"),a.videos[0].featuredid?f.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(f.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),o.appendChild(p),o.appendChild(f),b.appendChild(o);var g=document.createElement("div");g.classList.add("video-tab-pane","w-tab-pane","w--tab-active"),g.setAttribute("data-id",a.videos[0].videoid._id);var h=document.createElement("div");h.classList.add("video-flyout-wrap");var c=document.createElement("div");c.classList.add("video-play","w-video","w-embed"),c.style.paddingTop="56.17021276595745%";let a$=document.createElement("video");a$.classList.add("mainvid"),a$.setAttribute("data-id",a.videos[0].videoid._id),a$.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo1=a$,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';var d=document.createElement("a");d.classList.add("widget-button","video-cta","w-button"),d.href=a.buttonlink,d.style.backgroundColor="#"+a.maincolor,d.textContent=a.buttoncta,c.appendChild(this.mainvideo1),h.appendChild(c),h.appendChild(d),g.appendChild(h);let ac=document.createElement("div");ac.classList.add("video-icons");let a_=document.createElement("div");a_.classList.add("rfrdsoundcontainer");let dy=document.createElement("div");dy.classList.add("sound-on"),this.soundon1=dy,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let cC=document.createElement("img");cC.classList.add("video-icon"),cC.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cD=document.createElement("div");cD.style.display="none",cD.classList.add("sound-off"),this.soundoff1=cD,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let cE=document.createElement("img");cE.classList.add("video-icon"),cE.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(cC),this.soundoff1.appendChild(cE),a_.appendChild(this.soundon1),a_.appendChild(this.soundoff1);let a0=document.createElement("div");a0.classList.add("rfrdplaycontainer");let cF=document.createElement("div");cF.classList.add("pause-video-block");let a1=document.createElement("img");a1.classList.add("video-icon"),a1.style.display="none",a1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=a1,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let cG=document.createElement("div");cG.classList.add("play-video-block");let cH=document.createElement("img");cH.classList.add("video-icon"),cH.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=cH,this.playimg1.addEventListener("click",this.playVid.bind(this)),cF.appendChild(this.pauseimg1),cG.appendChild(this.playimg1),a0.appendChild(cF),a0.appendChild(cG);let dz=document.createElement("div"),cI=document.createElement("img");cI.classList.add("video-icon"),cI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=cI,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),dz.appendChild(this.fullscreenimg1),ac.appendChild(a_),ac.appendChild(a0),ac.appendChild(dz),c.appendChild(ac);var e=document.createElement("a");e.classList.add("video-row","rfrd-inline-block","w-tab-link"),e.setAttribute("data-id",a.videos[1].videoid._id),e.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("video-photo"),x.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",e.appendChild(x);var y=document.createElement("div"),z=document.createElement("div");z.classList.add("side-video-name"),z.textContent=a.videos[1].videoid.name;var q=document.createElement("div");q.classList.add("side-video-title"),a.videos[1].featuredid?q.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(q.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),y.appendChild(z),y.appendChild(q),e.appendChild(y);var r=document.createElement("div");r.classList.add("video-tab-pane","w-tab-pane"),r.setAttribute("data-id",a.videos[1].videoid._id);var s=document.createElement("div");s.classList.add("video-flyout-wrap");var i=document.createElement("div");i.classList.add("video-play","w-video","w-embed"),i.style.paddingTop="56.17021276595745%";let a2=document.createElement("video");a2.classList.add("mainvid"),a2.setAttribute("data-id",a.videos[1].videoid._id),a2.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo2=a2,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';var j=document.createElement("a");j.classList.add("widget-button","video-cta","w-button"),j.href=a.buttonlink,j.style.backgroundColor="#"+a.maincolor,j.textContent=a.buttoncta,i.appendChild(this.mainvideo2),s.appendChild(i),s.appendChild(j),r.appendChild(s);let ad=document.createElement("div");ad.classList.add("video-icons");let a3=document.createElement("div");a3.classList.add("rfrdsoundcontainer");let dA=document.createElement("div");dA.classList.add("sound-on"),this.soundon2=dA,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let cJ=document.createElement("img");cJ.classList.add("video-icon"),cJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cK=document.createElement("div");cK.style.display="none",cK.classList.add("sound-off"),this.soundoff2=cK,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let cL=document.createElement("img");cL.classList.add("video-icon"),cL.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(cJ),this.soundoff2.appendChild(cL),a3.appendChild(this.soundon2),a3.appendChild(this.soundoff2);let a4=document.createElement("div");a4.classList.add("rfrdplaycontainer");let cM=document.createElement("div");cM.classList.add("pause-video-block");let a5=document.createElement("img");a5.classList.add("video-icon"),a5.style.display="none",a5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=a5,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let cN=document.createElement("div");cN.classList.add("play-video-block");let cO=document.createElement("img");cO.classList.add("video-icon"),cO.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=cO,this.playimg2.addEventListener("click",this.playVid.bind(this)),cM.appendChild(this.pauseimg2),cN.appendChild(this.playimg2),a4.appendChild(cM),a4.appendChild(cN);let dB=document.createElement("div"),cP=document.createElement("img");cP.classList.add("video-icon"),cP.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=cP,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),dB.appendChild(this.fullscreenimg2),ad.appendChild(a3),ad.appendChild(a4),ad.appendChild(dB),i.appendChild(ad);var m=document.createElement("a");m.classList.add("video-row","rfrd-inline-block","w-tab-link"),m.setAttribute("data-id",a.videos[2].videoid._id),m.addEventListener("click",this.showVid.bind(this),!1);var F=document.createElement("div");F.classList.add("video-photo"),F.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",m.appendChild(F);var G=document.createElement("div"),H=document.createElement("div");H.classList.add("side-video-name"),H.textContent=a.videos[2].videoid.name;var A=document.createElement("div");A.classList.add("side-video-title"),a.videos[2].featuredid?A.textContent=a.videos[2].featuredid.jobtitle+", "+a.videos[2].featuredid.worksat:a.videos[2].videoid.jobtitle&&(A.textContent=a.videos[2].videoid.jobtitle+", "+a.videos[2].videoid.worksat),G.appendChild(H),G.appendChild(A),m.appendChild(G);var B=document.createElement("div");B.classList.add("video-tab-pane","w-tab-pane"),B.setAttribute("data-id",a.videos[2].videoid._id);var C=document.createElement("div");C.classList.add("video-flyout-wrap");var t=document.createElement("div");t.classList.add("video-play","w-video","w-embed"),t.style.paddingTop="56.17021276595745%";let a6=document.createElement("video");a6.classList.add("mainvid"),a6.setAttribute("data-id",a.videos[2].videoid._id),a6.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo3=a6,this.mainvideo3.innerHTML='<source src="'+a.videos[2].videoid.link+'" data-wf-ignore="true">';var u=document.createElement("a");u.classList.add("widget-button","video-cta","w-button"),u.href=a.buttonlink,u.style.backgroundColor="#"+a.maincolor,u.textContent=a.buttoncta,t.appendChild(this.mainvideo3),C.appendChild(t),C.appendChild(u),B.appendChild(C);let ae=document.createElement("div");ae.classList.add("video-icons");let a7=document.createElement("div");a7.classList.add("rfrdsoundcontainer");let dC=document.createElement("div");dC.classList.add("sound-on"),this.soundon3=dC,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let cQ=document.createElement("img");cQ.classList.add("video-icon"),cQ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cR=document.createElement("div");cR.style.display="none",cR.classList.add("sound-off"),this.soundoff3=cR,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let cS=document.createElement("img");cS.classList.add("video-icon"),cS.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(cQ),this.soundoff3.appendChild(cS),a7.appendChild(this.soundon3),a7.appendChild(this.soundoff3);let a8=document.createElement("div");a8.classList.add("rfrdplaycontainer");let cT=document.createElement("div");cT.classList.add("pause-video-block");let a9=document.createElement("img");a9.classList.add("video-icon"),a9.style.display="none",a9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=a9,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let cU=document.createElement("div");cU.classList.add("play-video-block");let cV=document.createElement("img");cV.classList.add("video-icon"),cV.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=cV,this.playimg3.addEventListener("click",this.playVid.bind(this)),cT.appendChild(this.pauseimg3),cU.appendChild(this.playimg3),a8.appendChild(cT),a8.appendChild(cU);let dD=document.createElement("div"),cW=document.createElement("img");cW.classList.add("video-icon"),cW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=cW,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),dD.appendChild(this.fullscreenimg3),ae.appendChild(a7),ae.appendChild(a8),ae.appendChild(dD),t.appendChild(ae);var E=document.createElement("a");E.classList.add("video-row","rfrd-inline-block","w-tab-link"),E.setAttribute("data-id",a.videos[3].videoid._id),E.addEventListener("click",this.showVid.bind(this),!1);var P=document.createElement("div");P.classList.add("video-photo"),P.style="background-image:url('"+a.videos[3].videoid.screengrab+"')",E.appendChild(P);var Q=document.createElement("div"),R=document.createElement("div");R.classList.add("side-video-name"),R.textContent=a.videos[3].videoid.name;var K=document.createElement("div");K.classList.add("side-video-title"),a.videos[3].featuredid?K.textContent=a.videos[3].featuredid.jobtitle+", "+a.videos[3].featuredid.worksat:a.videos[3].videoid.jobtitle&&(K.textContent=a.videos[3].videoid.jobtitle+", "+a.videos[3].videoid.worksat),Q.appendChild(R),Q.appendChild(K),E.appendChild(Q);var L=document.createElement("div");L.classList.add("video-tab-pane","w-tab-pane"),L.setAttribute("data-id",a.videos[3].videoid._id);var M=document.createElement("div");M.classList.add("video-flyout-wrap");var I=document.createElement("div");I.classList.add("video-play","w-video","w-embed"),I.style.paddingTop="56.17021276595745%";let ba=document.createElement("video");ba.classList.add("mainvid"),ba.setAttribute("data-id",a.videos[3].videoid._id),ba.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo4=ba,this.mainvideo4.innerHTML='<source src="'+a.videos[3].videoid.link+'" data-wf-ignore="true">';var J=document.createElement("a");J.classList.add("widget-button","video-cta","w-button"),J.href=a.buttonlink,J.style.backgroundColor="#"+a.maincolor,J.textContent=a.buttoncta,I.appendChild(this.mainvideo4),M.appendChild(I),M.appendChild(J),L.appendChild(M);let af=document.createElement("div");af.classList.add("video-icons");let bb=document.createElement("div");bb.classList.add("rfrdsoundcontainer");let dE=document.createElement("div");dE.classList.add("sound-on"),this.soundon4=dE,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let cX=document.createElement("img");cX.classList.add("video-icon"),cX.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cY=document.createElement("div");cY.style.display="none",cY.classList.add("sound-off"),this.soundoff4=cY,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let cZ=document.createElement("img");cZ.classList.add("video-icon"),cZ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(cX),this.soundoff4.appendChild(cZ),bb.appendChild(this.soundon4),bb.appendChild(this.soundoff4);let bc=document.createElement("div");bc.classList.add("rfrdplaycontainer");let c$=document.createElement("div");c$.classList.add("pause-video-block");let bd=document.createElement("img");bd.classList.add("video-icon"),bd.style.display="none",bd.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=bd,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let c_=document.createElement("div");c_.classList.add("play-video-block");let c0=document.createElement("img");c0.classList.add("video-icon"),c0.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=c0,this.playimg4.addEventListener("click",this.playVid.bind(this)),c$.appendChild(this.pauseimg4),c_.appendChild(this.playimg4),bc.appendChild(c$),bc.appendChild(c_);let dF=document.createElement("div"),be=document.createElement("img");be.classList.add("video-icon"),be.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=be,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),dF.appendChild(this.fullscreenimg4),af.appendChild(bb),af.appendChild(bc),af.appendChild(dF),I.appendChild(af);var T=document.createElement("a");T.classList.add("video-row","rfrd-inline-block","w-tab-link"),T.setAttribute("data-id",a.videos[4].videoid._id),T.addEventListener("click",this.showVid.bind(this),!1);var c1=document.createElement("div");c1.classList.add("video-photo"),c1.style="background-image:url('"+a.videos[4].videoid.screengrab+"')",T.appendChild(c1);var c2=document.createElement("div"),c3=document.createElement("div");c3.classList.add("side-video-name"),c3.textContent=a.videos[4].videoid.name;var bf=document.createElement("div");bf.classList.add("side-video-title"),a.videos[4].featuredid?bf.textContent=a.videos[4].featuredid.jobtitle+", "+a.videos[4].featuredid.worksat:a.videos[4].videoid.jobtitle&&(bf.textContent=a.videos[4].videoid.jobtitle+", "+a.videos[4].videoid.worksat),c2.appendChild(c3),c2.appendChild(bf),T.appendChild(c2);var bg=document.createElement("div");bg.classList.add("video-tab-pane","w-tab-pane"),bg.setAttribute("data-id",a.videos[4].videoid._id);var bh=document.createElement("div");bh.classList.add("video-flyout-wrap");var ag=document.createElement("div");ag.classList.add("video-play","w-video","w-embed"),ag.style.paddingTop="56.17021276595745%";let bi=document.createElement("video");bi.classList.add("mainvid"),bi.setAttribute("data-id",a.videos[4].videoid._id),bi.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo5=bi,this.mainvideo5.innerHTML='<source src="'+a.videos[4].videoid.link+'" data-wf-ignore="true">';var ah=document.createElement("a");ah.classList.add("widget-button","video-cta","w-button"),ah.href=a.buttonlink,ah.style.backgroundColor="#"+a.maincolor,ah.textContent=a.buttoncta,ag.appendChild(this.mainvideo5),bh.appendChild(ag),bh.appendChild(ah),bg.appendChild(bh);let ai=document.createElement("div");ai.classList.add("video-icons");let bj=document.createElement("div");bj.classList.add("rfrdsoundcontainer");let dG=document.createElement("div");dG.classList.add("sound-on"),this.soundon5=dG,this.soundon5.addEventListener("click",this.toggleSoundOn.bind(this));let c4=document.createElement("img");c4.classList.add("video-icon"),c4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let c5=document.createElement("div");c5.style.display="none",c5.classList.add("sound-off"),this.soundoff5=c5,this.soundoff5.addEventListener("click",this.toggleSoundOff.bind(this));let c6=document.createElement("img");c6.classList.add("video-icon"),c6.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon5.appendChild(c4),this.soundoff5.appendChild(c6),bj.appendChild(this.soundon5),bj.appendChild(this.soundoff5);let bk=document.createElement("div");bk.classList.add("rfrdplaycontainer");let c7=document.createElement("div");c7.classList.add("pause-video-block");let bl=document.createElement("img");bl.classList.add("video-icon"),bl.style.display="none",bl.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg5=bl,this.pauseimg5.addEventListener("click",this.pauseVid.bind(this));let c8=document.createElement("div");c8.classList.add("play-video-block");let c9=document.createElement("img");c9.classList.add("video-icon"),c9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg5=c9,this.playimg5.addEventListener("click",this.playVid.bind(this)),c7.appendChild(this.pauseimg5),c8.appendChild(this.playimg5),bk.appendChild(c7),bk.appendChild(c8);let dH=document.createElement("div"),dI=document.createElement("img");dI.classList.add("video-icon"),dI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg5=be,this.fullscreenimg5.addEventListener("click",this.toggleFullScreen.bind(this)),dH.appendChild(this.fullscreenimg5),ai.appendChild(bj),ai.appendChild(bk),ai.appendChild(dH),ag.appendChild(ai),k.appendChild(b),k.appendChild(e),k.appendChild(m),k.appendChild(E),k.appendChild(T),l.appendChild(g),l.appendChild(r),l.appendChild(B),l.appendChild(L),l.appendChild(bg),v.appendChild(k),v.appendChild(l),w.appendChild(O),w.appendChild(v),D.appendChild(w),D.appendChild(N)}this.messageContainer.appendChild(aj),this.messageContainer.appendChild(D)}submit(a){a.preventDefault(),a.srcElement.querySelector("#email").value,a.srcElement.querySelector("#message").value,this.messageContainer.innerHTML='<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry'}toggleOpen(){this.open=!this.open,this.buttonContainer.classList.add("hidden"),this.messageContainer.classList.remove("hidden")}toggleClose(){this.buttonContainer.classList.remove("hidden"),this.messageContainer.classList.add("hidden"),this.playimg.removeAttribute("style"),this.pauseimg.style.display="none",document.querySelectorAll(".video-tab-pane").forEach(function(a){a.firstChild.firstChild.firstChild.pause(),a.firstChild.firstChild.firstChild.currentTime=0,a.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),a.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none"})}toggleSoundOn(a){a.target.closest(".rfrdsoundcontainer").lastChild.removeAttribute("style"),a.target.closest(".sound-on").style.display="none",document.querySelectorAll(".video-tab-pane").forEach(function(a){a.classList.contains("w--tab-active")&&(a.firstChild.firstChild.firstChild.muted=!a.firstChild.firstChild.firstChild.muted)})}toggleSoundOff(a){a.target.closest(".rfrdsoundcontainer").firstChild.removeAttribute("style"),a.target.closest(".sound-off").style.display="none",document.querySelectorAll(".video-tab-pane").forEach(function(a){a.classList.contains("w--tab-active")&&(a.firstChild.firstChild.firstChild.muted=!a.firstChild.firstChild.firstChild.muted)})}toggleFullScreen(){document.querySelectorAll(".video-tab-pane").forEach(function(a){a.classList.contains("w--tab-active")&&a.firstChild.firstChild.firstChild.requestFullscreen()})}playVid(a){a.target.closest(".rfrdplaycontainer").firstChild.firstChild.removeAttribute("style"),a.target.style.display="none",document.querySelectorAll(".video-tab-pane").forEach(function(a){a.classList.contains("w--tab-active")&&a.firstChild.firstChild.firstChild.play()})}pauseVid(a){a.target.closest(".rfrdplaycontainer").lastChild.firstChild.removeAttribute("style"),a.target.style.display="none",document.querySelectorAll(".video-tab-pane").forEach(function(a){a.classList.contains("w--tab-active")&&a.firstChild.firstChild.firstChild.pause()})}showVid(a){var b=a.target.closest(".video-row").getAttribute("data-id");document.querySelectorAll(".video-tab-pane").forEach(function(a){b==a.getAttribute("data-id")?(a.classList.add("w--tab-active"),a.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),a.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",a.firstChild.firstChild.firstChild.pause(),a.currentTime=0):(a.classList.remove("w--tab-active"),a.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),a.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",a.firstChild.firstChild.firstChild.pause(),a.currentTime=0)})}}
