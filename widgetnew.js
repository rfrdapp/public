new class{constructor({position:a="bottom-left"}={}){this.position=this.getPosition(a),this.open=!1,this.initalise()}getPosition(a){let[b,c]=a.split("-");return{[b]:"30px",[c]:"30px"}}async initalise(){async function h(a){let b=await fetch("https://app.rfrd.io/read/widget/"+a).then(a=>a.json());return b}let i=document.getElementById("rfrd-widget"),j=i.dataset.id;var a=await h(j);let e=document.createElement("div");e.classList.add("rfrd-cheer-wrapper"),document.body.appendChild(e);let b=document.createElement("div");b.classList.add("rfrd-cheer-video-bg"),this.buttonContainer=b;let f=document.createElement("div");f.classList.add("rfrd-cheer-background-video");let c=document.createElement("div");c.classList.add("rfrd-cheer-bg","rfrd-background-video","w-background-video-atom"),c.setAttribute("data-video-urls",a.videos[0].videoid.link),c.setAttribute("data-autoplay","true"),c.setAttribute("data-loop","true"),c.setAttribute("data-wf-ignore","true"),this.videogif=c;let d=document.createElement("video");d.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",d.autoplay=!0,d.loop=!0,d.muted=!0,d.playsinline=!0,this.video=d,this.video.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">',this.videogif.appendChild(this.video),f.appendChild(this.videogif);let g=document.createElement("div");g.classList.add("rfrd-cheer-cta"),g.style.backgroundColor="#"+a.maincolor,this.cheercta=g,this.cheercta.innerHTML="<div>"+a.widgetcta+"</div>",this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("rfrd-hidden","rfrd-activated"),this.createMessageContainerContent(a),b.appendChild(f),b.appendChild(this.cheercta),b.addEventListener("click",this.toggleOpen.bind(this)),e.append(this.messageContainer),e.append(b),this.createStyles(a)}createStyles(a){let b=document.createElement("style");b.innerHTML=`
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
            border-color: #${a.maincolor};
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
              background-image: url("${a.videos[0].videoid.screengrab}");
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
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(b)}createMessageContainerContent(a){this.messageContainer.innerHTML="";let aj=document.createElement("div");aj.classList.add("rfrd-page-bg"),aj.addEventListener("click",this.toggleClose.bind(this));let dJ=document.createElement("div");aj.appendChild(dJ);var S=a.videos.length;let ak=document.createElement("div");ak.classList.add("rfrd-video-icons");let bm=document.createElement("div"),da=document.createElement("div");da.classList.add("sound-on"),this.soundon=da,this.soundon.addEventListener("click",this.toggleSoundOn.bind(this));let bn=document.createElement("img");bn.classList.add("rfrd-video-icon"),bn.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bo=document.createElement("div");bo.style.display="none",bo.classList.add("sound-off"),this.soundoff=bo,this.soundoff.addEventListener("click",this.toggleSoundOff.bind(this));let bp=document.createElement("img");bp.classList.add("rfrd-video-icon"),bp.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon.appendChild(bn),this.soundoff.appendChild(bp),bm.appendChild(this.soundon),bm.appendChild(this.soundoff);let bq=document.createElement("div"),br=document.createElement("div");br.classList.add("pause-video-block");let al=document.createElement("img");al.classList.add("rfrd-video-icon"),al.style.display="none",al.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg=al,this.pauseimg.addEventListener("click",this.pauseVid.bind(this));let bs=document.createElement("div");bs.classList.add("play-video-block");let bt=document.createElement("img");bt.classList.add("rfrd-video-icon"),bt.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg=bt,this.playimg.addEventListener("click",this.playVid.bind(this)),br.appendChild(this.pauseimg),bs.appendChild(this.playimg),bq.appendChild(br),bq.appendChild(bs);let db=document.createElement("div"),bu=document.createElement("img");bu.classList.add("rfrd-video-icon"),bu.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg=bu,this.fullscreenimg.addEventListener("click",this.toggleFullScreen.bind(this)),db.appendChild(this.fullscreenimg),ak.appendChild(bm),ak.appendChild(bq),ak.appendChild(db);let D=document.createElement("div");D.classList.add("rfrd-cheer-wrap"),D.id="cheer-wrap";let O=document.createElement("div");O.classList.add("rfrd-side-cheer-header"),O.textContent=a.cardlabel;let v=document.createElement("div");v.classList.add("video-tabs","rfrd-w-tabs");let k=document.createElement("div");k.classList.add("video-tabs-menu","rfrd-w-tab-menu");let l=document.createElement("div");l.classList.add("rfrd-tabs-content","rfrd-w-tab-content");let w=document.createElement("div");w.classList.add("rfrd-videos-top");let N=document.createElement("div");N.classList.add("rfrd-built-with-rfrd");let dc=document.createElement("div");dc.textContent="Built with";let bv=document.createElement("img");bv.classList.add("rfrd-bw-rfrd-logo"),bv.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/6254a481ee51de3be6a0b275_rfrd%20dark.svg",N.appendChild(dc),N.appendChild(bv);var S=a.videos.length;if(1==S){var b=document.createElement("a");b.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var o=document.createElement("div");o.classList.add("rfrd-video-photo"),o.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(o);var p=document.createElement("div"),q=document.createElement("div");q.classList.add("rfrd-side-video-name"),q.textContent=a.videos[0].videoid.name;var g=document.createElement("div");g.classList.add("rfrd-side-video-title"),a.videos[0].featuredid?g.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(g.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),p.appendChild(q),p.appendChild(g),b.appendChild(p);var h=document.createElement("div");h.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),h.setAttribute("data-id",a.videos[0].videoid._id);var i=document.createElement("div");i.classList.add("rfrd-video-flyout-wrap");var d=document.createElement("div");d.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),d.style.paddingTop="56.17021276595745%";let am=document.createElement("video");am.classList.add("rfrd-mainvid"),am.setAttribute("data-id",a.videos[0].videoid._id),am.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",this.mainvideo1=am,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';var c=document.createElement("a");c.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),c.href=a.buttonlink,c.style.backgroundColor="#"+a.maincolor,c.setAttribute("target","_blank"),c.textContent=a.buttoncta,d.appendChild(this.mainvideo1),i.appendChild(d),i.appendChild(c),h.appendChild(i);let V=document.createElement("div");V.classList.add("rfrd-video-icons");let an=document.createElement("div");an.classList.add("rfrdsoundcontainer");let dd=document.createElement("div");dd.classList.add("sound-on"),this.soundon1=dd,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let bw=document.createElement("img");bw.classList.add("rfrd-video-icon"),bw.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bx=document.createElement("div");bx.style.display="none",bx.classList.add("sound-off"),this.soundoff1=bx,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let by=document.createElement("img");by.classList.add("rfrd-video-icon"),by.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(bw),this.soundoff1.appendChild(by),an.appendChild(this.soundon1),an.appendChild(this.soundoff1);let ao=document.createElement("div");ao.classList.add("rfrdplaycontainer");let bz=document.createElement("div");bz.classList.add("pause-video-block");let ap=document.createElement("img");ap.classList.add("rfrd-video-icon"),ap.style.display="none",ap.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=ap,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let bA=document.createElement("div");bA.classList.add("play-video-block");let bB=document.createElement("img");bB.classList.add("rfrd-video-icon"),bB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=bB,this.playimg1.addEventListener("click",this.playVid.bind(this)),bz.appendChild(this.pauseimg1),bA.appendChild(this.playimg1),ao.appendChild(bz),ao.appendChild(bA);let de=document.createElement("div"),bC=document.createElement("img");bC.classList.add("rfrd-video-icon"),bC.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=bC,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),de.appendChild(this.fullscreenimg1),V.appendChild(an),V.appendChild(ao),V.appendChild(de),d.appendChild(V),k.appendChild(b),l.appendChild(h),v.appendChild(k),v.appendChild(l),w.appendChild(O),w.appendChild(v),D.appendChild(w),D.appendChild(N)}if(2==S){var b=document.createElement("a");b.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var o=document.createElement("div");o.classList.add("rfrd-video-photo"),o.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(o);var p=document.createElement("div"),q=document.createElement("div");q.classList.add("rfrd-side-video-name"),q.textContent=a.videos[0].videoid.name;var g=document.createElement("div");g.classList.add("rfrd-side-video-title"),a.videos[0].featuredid?g.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(g.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),p.appendChild(q),p.appendChild(g),b.appendChild(p);var e=document.createElement("a");e.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),e.setAttribute("data-id",a.videos[1].videoid._id),e.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("rfrd-video-photo"),x.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",e.appendChild(x);var y=document.createElement("div"),z=document.createElement("div");z.classList.add("rfrd-side-video-name"),z.textContent=a.videos[1].videoid.name;var r=document.createElement("div");r.classList.add("rfrd-side-video-title"),a.videos[1].featuredid?r.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(r.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),y.appendChild(z),y.appendChild(r),e.appendChild(y);var h=document.createElement("div");h.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),h.setAttribute("data-id",a.videos[0].videoid._id);var i=document.createElement("div");i.classList.add("rfrd-video-flyout-wrap");var d=document.createElement("div");d.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),d.style.paddingTop="56.17021276595745%";let aq=document.createElement("video");aq.classList.add("rfrd-mainvid"),aq.setAttribute("data-id",a.videos[0].videoid._id),aq.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",this.mainvideo1=aq,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';var c=document.createElement("a");c.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),c.href=a.buttonlink,c.style.backgroundColor="#"+a.maincolor,c.setAttribute("target","_blank"),c.textContent=a.buttoncta,d.appendChild(this.mainvideo1),i.appendChild(d),i.appendChild(c),h.appendChild(i);let W=document.createElement("div");W.classList.add("rfrd-video-icons");let ar=document.createElement("div");ar.classList.add("rfrdsoundcontainer");let df=document.createElement("div");df.classList.add("sound-on"),this.soundon1=df,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let bD=document.createElement("img");bD.classList.add("rfrd-video-icon"),bD.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bE=document.createElement("div");bE.style.display="none",bE.classList.add("sound-off"),this.soundoff1=bE,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let bF=document.createElement("img");bF.classList.add("rfrd-video-icon"),bF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(bD),this.soundoff1.appendChild(bF),ar.appendChild(this.soundon1),ar.appendChild(this.soundoff1);let as=document.createElement("div");as.classList.add("rfrdplaycontainer");let bG=document.createElement("div");bG.classList.add("pause-video-block");let at=document.createElement("img");at.classList.add("rfrd-video-icon"),at.style.display="none",at.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=at,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let bH=document.createElement("div");bH.classList.add("play-video-block");let bI=document.createElement("img");bI.classList.add("rfrd-video-icon"),bI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=bI,this.playimg1.addEventListener("click",this.playVid.bind(this)),bG.appendChild(this.pauseimg1),bH.appendChild(this.playimg1),as.appendChild(bG),as.appendChild(bH);let dg=document.createElement("div"),bJ=document.createElement("img");bJ.classList.add("rfrd-video-icon"),bJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=bJ,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),dg.appendChild(this.fullscreenimg1),W.appendChild(ar),W.appendChild(as),W.appendChild(dg),d.appendChild(W);var s=document.createElement("div");s.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),s.setAttribute("data-id",a.videos[1].videoid._id);var t=document.createElement("div");t.classList.add("rfrd-video-flyout-wrap");var j=document.createElement("div");j.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),j.style.paddingTop="56.17021276595745%";let au=document.createElement("video");au.classList.add("rfrd-mainvid"),au.setAttribute("data-id",a.videos[1].videoid._id),au.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",this.mainvideo2=au,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';var f=document.createElement("a");f.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),f.href=a.buttonlink,f.style.backgroundColor="#"+a.maincolor,f.setAttribute("target","_blank"),f.textContent=a.buttoncta,j.appendChild(this.mainvideo2),t.appendChild(j),t.appendChild(f),s.appendChild(t);let X=document.createElement("div");X.classList.add("rfrd-video-icons");let av=document.createElement("div");av.classList.add("rfrdsoundcontainer");let dh=document.createElement("div");dh.classList.add("sound-on"),this.soundon2=dh,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let bK=document.createElement("img");bK.classList.add("rfrd-video-icon"),bK.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bL=document.createElement("div");bL.style.display="none",bL.classList.add("sound-off"),this.soundoff2=bL,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let bM=document.createElement("img");bM.classList.add("rfrd-video-icon"),bM.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(bK),this.soundoff2.appendChild(bM),av.appendChild(this.soundon2),av.appendChild(this.soundoff2);let aw=document.createElement("div");aw.classList.add("rfrdplaycontainer");let bN=document.createElement("div");bN.classList.add("pause-video-block");let ax=document.createElement("img");ax.classList.add("rfrd-video-icon"),ax.style.display="none",ax.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=ax,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let bO=document.createElement("div");bO.classList.add("play-video-block");let bP=document.createElement("img");bP.classList.add("rfrd-video-icon"),bP.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=bP,this.playimg2.addEventListener("click",this.playVid.bind(this)),bN.appendChild(this.pauseimg2),bO.appendChild(this.playimg2),aw.appendChild(bN),aw.appendChild(bO);let di=document.createElement("div"),bQ=document.createElement("img");bQ.classList.add("rfrd-video-icon"),bQ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=bQ,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),di.appendChild(this.fullscreenimg2),X.appendChild(av),X.appendChild(aw),X.appendChild(di),j.appendChild(X),k.appendChild(b),k.appendChild(e),l.appendChild(h),l.appendChild(s),v.appendChild(k),v.appendChild(l),w.appendChild(O),w.appendChild(v),D.appendChild(w),D.appendChild(N)}if(3==S){var b=document.createElement("a");b.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var o=document.createElement("div");o.classList.add("rfrd-video-photo"),o.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(o);var p=document.createElement("div"),q=document.createElement("div");q.classList.add("rfrd-side-video-name"),q.textContent=a.videos[0].videoid.name;var g=document.createElement("div");g.classList.add("rfrd-side-video-title"),a.videos[0].featuredid?g.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(g.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),p.appendChild(q),p.appendChild(g),b.appendChild(p);var h=document.createElement("div");h.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),h.setAttribute("data-id",a.videos[0].videoid._id);var i=document.createElement("div");i.classList.add("rfrd-video-flyout-wrap");var d=document.createElement("div");d.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),d.style.paddingTop="56.17021276595745%";let ay=document.createElement("video");ay.classList.add("rfrd-mainvid"),ay.setAttribute("data-id",a.videos[0].videoid._id),ay.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",this.mainvideo1=ay,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';var c=document.createElement("a");c.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),c.href=a.buttonlink,c.style.backgroundColor="#"+a.maincolor,c.setAttribute("target","_blank"),c.textContent=a.buttoncta,d.appendChild(this.mainvideo1),i.appendChild(d),i.appendChild(c),h.appendChild(i);let Y=document.createElement("div");Y.classList.add("rfrd-video-icons");let az=document.createElement("div");az.classList.add("rfrdsoundcontainer");let dj=document.createElement("div");dj.classList.add("sound-on"),this.soundon1=dj,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let bR=document.createElement("img");bR.classList.add("rfrd-video-icon"),bR.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bS=document.createElement("div");bS.style.display="none",bS.classList.add("sound-off"),this.soundoff1=bS,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let bT=document.createElement("img");bT.classList.add("rfrd-video-icon"),bT.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(bR),this.soundoff1.appendChild(bT),az.appendChild(this.soundon1),az.appendChild(this.soundoff1);let aA=document.createElement("div");aA.classList.add("rfrdplaycontainer");let bU=document.createElement("div");bU.classList.add("pause-video-block");let aB=document.createElement("img");aB.classList.add("rfrd-video-icon"),aB.style.display="none",aB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=aB,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let bV=document.createElement("div");bV.classList.add("play-video-block");let bW=document.createElement("img");bW.classList.add("rfrd-video-icon"),bW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=bW,this.playimg1.addEventListener("click",this.playVid.bind(this)),bU.appendChild(this.pauseimg1),bV.appendChild(this.playimg1),aA.appendChild(bU),aA.appendChild(bV);let dk=document.createElement("div"),bX=document.createElement("img");bX.classList.add("rfrd-video-icon"),bX.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=bX,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),dk.appendChild(this.fullscreenimg1),Y.appendChild(az),Y.appendChild(aA),Y.appendChild(dk),d.appendChild(Y);var e=document.createElement("a");e.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),e.setAttribute("data-id",a.videos[1].videoid._id),e.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("rfrd-video-photo"),x.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",e.appendChild(x);var y=document.createElement("div"),z=document.createElement("div");z.classList.add("rfrd-side-video-name"),z.textContent=a.videos[1].videoid.name;var r=document.createElement("div");r.classList.add("rfrd-side-video-title"),a.videos[1].featuredid?r.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(r.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),y.appendChild(z),y.appendChild(r),e.appendChild(y);var s=document.createElement("div");s.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),s.setAttribute("data-id",a.videos[1].videoid._id);var t=document.createElement("div");t.classList.add("rfrd-video-flyout-wrap");var j=document.createElement("div");j.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),j.style.paddingTop="56.17021276595745%";let aC=document.createElement("video");aC.classList.add("rfrd-mainvid"),aC.setAttribute("data-id",a.videos[1].videoid._id),aC.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",this.mainvideo2=aC,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';var f=document.createElement("a");f.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),f.href=a.buttonlink,f.style.backgroundColor="#"+a.maincolor,f.setAttribute("target","_blank"),f.textContent=a.buttoncta,j.appendChild(this.mainvideo2),t.appendChild(j),t.appendChild(f),s.appendChild(t);let Z=document.createElement("div");Z.classList.add("rfrd-video-icons");let aD=document.createElement("div");aD.classList.add("rfrdsoundcontainer");let dl=document.createElement("div");dl.classList.add("sound-on"),this.soundon2=dl,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let bY=document.createElement("img");bY.classList.add("rfrd-video-icon"),bY.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let bZ=document.createElement("div");bZ.style.display="none",bZ.classList.add("sound-off"),this.soundoff2=bZ,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let b$=document.createElement("img");b$.classList.add("rfrd-video-icon"),b$.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(bY),this.soundoff2.appendChild(b$),aD.appendChild(this.soundon2),aD.appendChild(this.soundoff2);let aE=document.createElement("div");aE.classList.add("rfrdplaycontainer");let b_=document.createElement("div");b_.classList.add("pause-video-block");let aF=document.createElement("img");aF.classList.add("rfrd-video-icon"),aF.style.display="none",aF.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=aF,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let b0=document.createElement("div");b0.classList.add("play-video-block");let b1=document.createElement("img");b1.classList.add("rfrd-video-icon"),b1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=b1,this.playimg2.addEventListener("click",this.playVid.bind(this)),b_.appendChild(this.pauseimg2),b0.appendChild(this.playimg2),aE.appendChild(b_),aE.appendChild(b0);let dm=document.createElement("div"),b2=document.createElement("img");b2.classList.add("rfrd-video-icon"),b2.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=b2,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),dm.appendChild(this.fullscreenimg2),Z.appendChild(aD),Z.appendChild(aE),Z.appendChild(dm),j.appendChild(Z);var m=document.createElement("a");m.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),m.setAttribute("data-id",a.videos[2].videoid._id),m.addEventListener("click",this.showVid.bind(this),!1);var G=document.createElement("div");G.classList.add("rfrd-video-photo"),G.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",m.appendChild(G);var H=document.createElement("div"),I=document.createElement("div");I.classList.add("rfrd-side-video-name"),I.textContent=a.videos[2].videoid.name;var A=document.createElement("div");A.classList.add("rfrd-side-video-title"),a.videos[2].featuredid?A.textContent=a.videos[2].featuredid.jobtitle+", "+a.videos[2].featuredid.worksat:a.videos[2].videoid.jobtitle&&(A.textContent=a.videos[2].videoid.jobtitle+", "+a.videos[2].videoid.worksat),H.appendChild(I),H.appendChild(A),m.appendChild(H);var B=document.createElement("div");B.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),B.setAttribute("data-id",a.videos[2].videoid._id);var C=document.createElement("div");C.classList.add("rfrd-video-flyout-wrap");var u=document.createElement("div");u.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),u.style.paddingTop="56.17021276595745%";let aG=document.createElement("video");aG.classList.add("rfrd-mainvid"),aG.setAttribute("data-id",a.videos[2].videoid._id),aG.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",this.mainvideo3=aG,this.mainvideo3.innerHTML='<source src="'+a.videos[2].videoid.link+'" data-wf-ignore="true">';var n=document.createElement("a");n.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),n.href=a.buttonlink,n.style.backgroundColor="#"+a.maincolor,n.setAttribute("target","_blank"),n.textContent=a.buttoncta,u.appendChild(this.mainvideo3),C.appendChild(u),C.appendChild(n),B.appendChild(C);let $=document.createElement("div");$.classList.add("rfrd-video-icons");let aH=document.createElement("div");aH.classList.add("rfrdsoundcontainer");let dn=document.createElement("div");dn.classList.add("sound-on"),this.soundon3=dn,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let b3=document.createElement("img");b3.classList.add("rfrd-video-icon"),b3.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let b4=document.createElement("div");b4.style.display="none",b4.classList.add("sound-off"),this.soundoff3=b4,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let b5=document.createElement("img");b5.classList.add("rfrd-video-icon"),b5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(b3),this.soundoff3.appendChild(b5),aH.appendChild(this.soundon3),aH.appendChild(this.soundoff3);let aI=document.createElement("div");aI.classList.add("rfrdplaycontainer");let b6=document.createElement("div");b6.classList.add("pause-video-block");let aJ=document.createElement("img");aJ.classList.add("rfrd-video-icon"),aJ.style.display="none",aJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=aJ,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let b7=document.createElement("div");b7.classList.add("play-video-block");let b8=document.createElement("img");b8.classList.add("rfrd-video-icon"),b8.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=b8,this.playimg3.addEventListener("click",this.playVid.bind(this)),b6.appendChild(this.pauseimg3),b7.appendChild(this.playimg3),aI.appendChild(b6),aI.appendChild(b7);let dp=document.createElement("div"),b9=document.createElement("img");b9.classList.add("rfrd-video-icon"),b9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=b9,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),dp.appendChild(this.fullscreenimg3),$.appendChild(aH),$.appendChild(aI),$.appendChild(dp),u.appendChild($),k.appendChild(b),k.appendChild(e),k.appendChild(m),l.appendChild(h),l.appendChild(s),l.appendChild(B),v.appendChild(k),v.appendChild(l),w.appendChild(O),w.appendChild(v),D.appendChild(w),D.appendChild(N)}if(4==S){var b=document.createElement("a");b.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var o=document.createElement("div");o.classList.add("rfrd-video-photo"),o.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(o);var p=document.createElement("div"),q=document.createElement("div");q.classList.add("rfrd-side-video-name"),q.textContent=a.videos[0].videoid.name;var g=document.createElement("div");g.classList.add("rfrd-side-video-title"),a.videos[0].featuredid?g.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(g.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),p.appendChild(q),p.appendChild(g),b.appendChild(p);var h=document.createElement("div");h.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),h.setAttribute("data-id",a.videos[0].videoid._id);var i=document.createElement("div");i.classList.add("rfrd-video-flyout-wrap");var d=document.createElement("div");d.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),d.style.paddingTop="56.17021276595745%";let aK=document.createElement("video");aK.classList.add("rfrd-mainvid"),aK.setAttribute("data-id",a.videos[0].videoid._id),aK.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",this.mainvideo1=aK,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';var c=document.createElement("a");c.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),c.href=a.buttonlink,c.style.backgroundColor="#"+a.maincolor,c.setAttribute("target","_blank"),c.textContent=a.buttoncta,d.appendChild(this.mainvideo1),i.appendChild(d),i.appendChild(c),h.appendChild(i);let _=document.createElement("div");_.classList.add("rfrd-video-icons");let aL=document.createElement("div");aL.classList.add("rfrdsoundcontainer");let dq=document.createElement("div");dq.classList.add("sound-on"),this.soundon1=dq,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let ca=document.createElement("img");ca.classList.add("rfrd-video-icon"),ca.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cb=document.createElement("div");cb.style.display="none",cb.classList.add("sound-off"),this.soundoff1=cb,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let cc=document.createElement("img");cc.classList.add("rfrd-video-icon"),cc.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(ca),this.soundoff1.appendChild(cc),aL.appendChild(this.soundon1),aL.appendChild(this.soundoff1);let aM=document.createElement("div");aM.classList.add("rfrdplaycontainer");let cd=document.createElement("div");cd.classList.add("pause-video-block");let aN=document.createElement("img");aN.classList.add("rfrd-video-icon"),aN.style.display="none",aN.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=aN,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let ce=document.createElement("div");ce.classList.add("play-video-block");let cf=document.createElement("img");cf.classList.add("rfrd-video-icon"),cf.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=cf,this.playimg1.addEventListener("click",this.playVid.bind(this)),cd.appendChild(this.pauseimg1),ce.appendChild(this.playimg1),aM.appendChild(cd),aM.appendChild(ce);let dr=document.createElement("div"),cg=document.createElement("img");cg.classList.add("rfrd-video-icon"),cg.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=cg,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),dr.appendChild(this.fullscreenimg1),_.appendChild(aL),_.appendChild(aM),_.appendChild(dr),d.appendChild(_);var e=document.createElement("a");e.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),e.setAttribute("data-id",a.videos[1].videoid._id),e.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("rfrd-video-photo"),x.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",e.appendChild(x);var y=document.createElement("div"),z=document.createElement("div");z.classList.add("rfrd-side-video-name"),z.textContent=a.videos[1].videoid.name;var r=document.createElement("div");r.classList.add("rfrd-side-video-title"),a.videos[1].featuredid?r.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(r.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),y.appendChild(z),y.appendChild(r),e.appendChild(y);var s=document.createElement("div");s.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),s.setAttribute("data-id",a.videos[1].videoid._id);var t=document.createElement("div");t.classList.add("rfrd-video-flyout-wrap");var j=document.createElement("div");j.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),j.style.paddingTop="56.17021276595745%";let aO=document.createElement("video");aO.classList.add("rfrd-mainvid"),aO.setAttribute("data-id",a.videos[1].videoid._id),aO.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",this.mainvideo2=aO,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';var f=document.createElement("a");f.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),f.href=a.buttonlink,f.style.backgroundColor="#"+a.maincolor,f.setAttribute("target","_blank"),f.textContent=a.buttoncta,j.appendChild(this.mainvideo2),t.appendChild(j),t.appendChild(f),s.appendChild(t);let aa=document.createElement("div");aa.classList.add("rfrd-video-icons");let aP=document.createElement("div");aP.classList.add("rfrdsoundcontainer");let ds=document.createElement("div");ds.classList.add("sound-on"),this.soundon2=ds,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let ch=document.createElement("img");ch.classList.add("rfrd-video-icon"),ch.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let ci=document.createElement("div");ci.style.display="none",ci.classList.add("sound-off"),this.soundoff2=ci,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let cj=document.createElement("img");cj.classList.add("rfrd-video-icon"),cj.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(ch),this.soundoff2.appendChild(cj),aP.appendChild(this.soundon2),aP.appendChild(this.soundoff2);let aQ=document.createElement("div");aQ.classList.add("rfrdplaycontainer");let ck=document.createElement("div");ck.classList.add("pause-video-block");let aR=document.createElement("img");aR.classList.add("rfrd-video-icon"),aR.style.display="none",aR.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=aR,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let cl=document.createElement("div");cl.classList.add("play-video-block");let cm=document.createElement("img");cm.classList.add("rfrd-video-icon"),cm.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=cm,this.playimg2.addEventListener("click",this.playVid.bind(this)),ck.appendChild(this.pauseimg2),cl.appendChild(this.playimg2),aQ.appendChild(ck),aQ.appendChild(cl);let dt=document.createElement("div"),cn=document.createElement("img");cn.classList.add("rfrd-video-icon"),cn.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=cn,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),dt.appendChild(this.fullscreenimg2),aa.appendChild(aP),aa.appendChild(aQ),aa.appendChild(dt),j.appendChild(aa);var m=document.createElement("a");m.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),m.setAttribute("data-id",a.videos[2].videoid._id),m.addEventListener("click",this.showVid.bind(this),!1);var G=document.createElement("div");G.classList.add("rfrd-video-photo"),G.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",m.appendChild(G);var H=document.createElement("div"),I=document.createElement("div");I.classList.add("rfrd-side-video-name"),I.textContent=a.videos[2].videoid.name;var A=document.createElement("div");A.classList.add("rfrd-side-video-title"),a.videos[2].featuredid?A.textContent=a.videos[2].featuredid.jobtitle+", "+a.videos[2].featuredid.worksat:a.videos[2].videoid.jobtitle&&(A.textContent=a.videos[2].videoid.jobtitle+", "+a.videos[2].videoid.worksat),H.appendChild(I),H.appendChild(A),m.appendChild(H);var B=document.createElement("div");B.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),B.setAttribute("data-id",a.videos[2].videoid._id);var C=document.createElement("div");C.classList.add("rfrd-video-flyout-wrap");var u=document.createElement("div");u.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),u.style.paddingTop="56.17021276595745%";let aS=document.createElement("video");aS.classList.add("rfrd-mainvid"),aS.setAttribute("data-id",a.videos[2].videoid._id),aS.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",this.mainvideo3=aS,this.mainvideo3.innerHTML='<source src="'+a.videos[2].videoid.link+'" data-wf-ignore="true">';var n=document.createElement("a");n.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),n.href=a.buttonlink,n.style.backgroundColor="#"+a.maincolor,n.setAttribute("target","_blank"),n.textContent=a.buttoncta,u.appendChild(this.mainvideo3),C.appendChild(u),C.appendChild(n),B.appendChild(C);let ab=document.createElement("div");ab.classList.add("rfrd-video-icons");let aT=document.createElement("div");aT.classList.add("rfrdsoundcontainer");let du=document.createElement("div");du.classList.add("sound-on"),this.soundon3=du,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let co=document.createElement("img");co.classList.add("rfrd-video-icon"),co.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cp=document.createElement("div");cp.style.display="none",cp.classList.add("sound-off"),this.soundoff3=cp,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let cq=document.createElement("img");cq.classList.add("rfrd-video-icon"),cq.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(co),this.soundoff3.appendChild(cq),aT.appendChild(this.soundon3),aT.appendChild(this.soundoff3);let aU=document.createElement("div");aU.classList.add("rfrdplaycontainer");let cr=document.createElement("div");cr.classList.add("pause-video-block");let aV=document.createElement("img");aV.classList.add("rfrd-video-icon"),aV.style.display="none",aV.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=aV,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let cs=document.createElement("div");cs.classList.add("play-video-block");let ct=document.createElement("img");ct.classList.add("rfrd-video-icon"),ct.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=ct,this.playimg3.addEventListener("click",this.playVid.bind(this)),cr.appendChild(this.pauseimg3),cs.appendChild(this.playimg3),aU.appendChild(cr),aU.appendChild(cs);let dv=document.createElement("div"),cu=document.createElement("img");cu.classList.add("rfrd-video-icon"),cu.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=cu,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),dv.appendChild(this.fullscreenimg3),ab.appendChild(aT),ab.appendChild(aU),ab.appendChild(dv),u.appendChild(ab);var E=document.createElement("a");E.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),E.setAttribute("data-id",a.videos[3].videoid._id),E.addEventListener("click",this.showVid.bind(this),!1);var P=document.createElement("div");P.classList.add("rfrd-video-photo"),P.style="background-image:url('"+a.videos[3].videoid.screengrab+"')",E.appendChild(P);var Q=document.createElement("div"),R=document.createElement("div");R.classList.add("rfrd-side-video-name"),R.textContent=a.videos[3].videoid.name;var K=document.createElement("div");K.classList.add("rfrd-side-video-title"),a.videos[3].featuredid?K.textContent=a.videos[3].featuredid.jobtitle+", "+a.videos[3].featuredid.worksat:a.videos[3].videoid.jobtitle&&(K.textContent=a.videos[3].videoid.jobtitle+", "+a.videos[3].videoid.worksat),Q.appendChild(R),Q.appendChild(K),E.appendChild(Q);var L=document.createElement("div");L.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),L.setAttribute("data-id",a.videos[3].videoid._id);var M=document.createElement("div");M.classList.add("rfrd-video-flyout-wrap");var J=document.createElement("div");J.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),J.style.paddingTop="56.17021276595745%";let aW=document.createElement("video");aW.classList.add("rfrd-mainvid"),aW.setAttribute("data-id",a.videos[3].videoid._id),aW.style="background-image:url('"+a.videos[3].videoid.screengrab+"')",this.mainvideo4=aW,this.mainvideo4.innerHTML='<source src="'+a.videos[3].videoid.link+'" data-wf-ignore="true">';var F=document.createElement("a");F.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),F.href=a.buttonlink,F.style.backgroundColor="#"+a.maincolor,F.setAttribute("target","_blank"),F.textContent=a.buttoncta,J.appendChild(this.mainvideo4),M.appendChild(J),M.appendChild(F),L.appendChild(M);let ac=document.createElement("div");ac.classList.add("rfrd-video-icons");let aX=document.createElement("div");aX.classList.add("rfrdsoundcontainer");let dw=document.createElement("div");dw.classList.add("sound-on"),this.soundon4=dw,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let cv=document.createElement("img");cv.classList.add("rfrd-video-icon"),cv.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cw=document.createElement("div");cw.style.display="none",cw.classList.add("sound-off"),this.soundoff4=cw,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let cx=document.createElement("img");cx.classList.add("rfrd-video-icon"),cx.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(cv),this.soundoff4.appendChild(cx),aX.appendChild(this.soundon4),aX.appendChild(this.soundoff4);let aY=document.createElement("div");aY.classList.add("rfrdplaycontainer");let cy=document.createElement("div");cy.classList.add("pause-video-block");let aZ=document.createElement("img");aZ.classList.add("rfrd-video-icon"),aZ.style.display="none",aZ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=aZ,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let cz=document.createElement("div");cz.classList.add("play-video-block");let cA=document.createElement("img");cA.classList.add("rfrd-video-icon"),cA.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=cA,this.playimg4.addEventListener("click",this.playVid.bind(this)),cy.appendChild(this.pauseimg4),cz.appendChild(this.playimg4),aY.appendChild(cy),aY.appendChild(cz);let dx=document.createElement("div"),cB=document.createElement("img");cB.classList.add("rfrd-video-icon"),cB.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=cB,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),dx.appendChild(this.fullscreenimg4),ac.appendChild(aX),ac.appendChild(aY),ac.appendChild(dx),J.appendChild(ac),k.appendChild(b),k.appendChild(e),k.appendChild(m),k.appendChild(E),l.appendChild(h),l.appendChild(s),l.appendChild(B),l.appendChild(L),v.appendChild(k),v.appendChild(l),w.appendChild(O),w.appendChild(v),D.appendChild(w),D.appendChild(N)}if(5==S){var b=document.createElement("a");b.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var o=document.createElement("div");o.classList.add("rfrd-video-photo"),o.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(o);var p=document.createElement("div"),q=document.createElement("div");q.classList.add("rfrd-side-video-name"),q.textContent=a.videos[0].videoid.name;var g=document.createElement("div");g.classList.add("rfrd-side-video-title"),a.videos[0].featuredid?g.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(g.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),p.appendChild(q),p.appendChild(g),b.appendChild(p);var h=document.createElement("div");h.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane","rfrd-w--tab-active"),h.setAttribute("data-id",a.videos[0].videoid._id);var i=document.createElement("div");i.classList.add("rfrd-video-flyout-wrap");var d=document.createElement("div");d.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),d.style.paddingTop="56.17021276595745%";let a$=document.createElement("video");a$.classList.add("rfrd-mainvid"),a$.setAttribute("data-id",a.videos[0].videoid._id),a$.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",this.mainvideo1=a$,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';var c=document.createElement("a");c.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),c.href=a.buttonlink,c.style.backgroundColor="#"+a.maincolor,c.setAttribute("target","_blank"),c.textContent=a.buttoncta,d.appendChild(this.mainvideo1),i.appendChild(d),i.appendChild(c),h.appendChild(i);let ad=document.createElement("div");ad.classList.add("rfrd-video-icons");let a_=document.createElement("div");a_.classList.add("rfrdsoundcontainer");let dy=document.createElement("div");dy.classList.add("sound-on"),this.soundon1=dy,this.soundon1.addEventListener("click",this.toggleSoundOn.bind(this));let cC=document.createElement("img");cC.classList.add("rfrd-video-icon"),cC.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cD=document.createElement("div");cD.style.display="none",cD.classList.add("sound-off"),this.soundoff1=cD,this.soundoff1.addEventListener("click",this.toggleSoundOff.bind(this));let cE=document.createElement("img");cE.classList.add("rfrd-video-icon"),cE.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon1.appendChild(cC),this.soundoff1.appendChild(cE),a_.appendChild(this.soundon1),a_.appendChild(this.soundoff1);let a0=document.createElement("div");a0.classList.add("rfrdplaycontainer");let cF=document.createElement("div");cF.classList.add("pause-video-block");let a1=document.createElement("img");a1.classList.add("rfrd-video-icon"),a1.style.display="none",a1.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg1=a1,this.pauseimg1.addEventListener("click",this.pauseVid.bind(this));let cG=document.createElement("div");cG.classList.add("play-video-block");let cH=document.createElement("img");cH.classList.add("rfrd-video-icon"),cH.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg1=cH,this.playimg1.addEventListener("click",this.playVid.bind(this)),cF.appendChild(this.pauseimg1),cG.appendChild(this.playimg1),a0.appendChild(cF),a0.appendChild(cG);let dz=document.createElement("div"),cI=document.createElement("img");cI.classList.add("rfrd-video-icon"),cI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg1=cI,this.fullscreenimg1.addEventListener("click",this.toggleFullScreen.bind(this)),dz.appendChild(this.fullscreenimg1),ad.appendChild(a_),ad.appendChild(a0),ad.appendChild(dz),d.appendChild(ad);var e=document.createElement("a");e.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),e.setAttribute("data-id",a.videos[1].videoid._id),e.addEventListener("click",this.showVid.bind(this),!1);var x=document.createElement("div");x.classList.add("rfrd-video-photo"),x.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",e.appendChild(x);var y=document.createElement("div"),z=document.createElement("div");z.classList.add("rfrd-side-video-name"),z.textContent=a.videos[1].videoid.name;var r=document.createElement("div");r.classList.add("rfrd-side-video-title"),a.videos[1].featuredid?r.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(r.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),y.appendChild(z),y.appendChild(r),e.appendChild(y);var s=document.createElement("div");s.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),s.setAttribute("data-id",a.videos[1].videoid._id);var t=document.createElement("div");t.classList.add("rfrd-video-flyout-wrap");var j=document.createElement("div");j.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),j.style.paddingTop="56.17021276595745%";let a2=document.createElement("video");a2.classList.add("rfrd-mainvid"),a2.setAttribute("data-id",a.videos[1].videoid._id),a2.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",this.mainvideo2=a2,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';var f=document.createElement("a");f.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),f.href=a.buttonlink,f.style.backgroundColor="#"+a.maincolor,f.setAttribute("target","_blank"),f.textContent=a.buttoncta,j.appendChild(this.mainvideo2),t.appendChild(j),t.appendChild(f),s.appendChild(t);let ae=document.createElement("div");ae.classList.add("rfrd-video-icons");let a3=document.createElement("div");a3.classList.add("rfrdsoundcontainer");let dA=document.createElement("div");dA.classList.add("sound-on"),this.soundon2=dA,this.soundon2.addEventListener("click",this.toggleSoundOn.bind(this));let cJ=document.createElement("img");cJ.classList.add("rfrd-video-icon"),cJ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cK=document.createElement("div");cK.style.display="none",cK.classList.add("sound-off"),this.soundoff2=cK,this.soundoff2.addEventListener("click",this.toggleSoundOff.bind(this));let cL=document.createElement("img");cL.classList.add("rfrd-video-icon"),cL.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon2.appendChild(cJ),this.soundoff2.appendChild(cL),a3.appendChild(this.soundon2),a3.appendChild(this.soundoff2);let a4=document.createElement("div");a4.classList.add("rfrdplaycontainer");let cM=document.createElement("div");cM.classList.add("pause-video-block");let a5=document.createElement("img");a5.classList.add("rfrd-video-icon"),a5.style.display="none",a5.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg2=a5,this.pauseimg2.addEventListener("click",this.pauseVid.bind(this));let cN=document.createElement("div");cN.classList.add("play-video-block");let cO=document.createElement("img");cO.classList.add("rfrd-video-icon"),cO.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg2=cO,this.playimg2.addEventListener("click",this.playVid.bind(this)),cM.appendChild(this.pauseimg2),cN.appendChild(this.playimg2),a4.appendChild(cM),a4.appendChild(cN);let dB=document.createElement("div"),cP=document.createElement("img");cP.classList.add("rfrd-video-icon"),cP.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg2=cP,this.fullscreenimg2.addEventListener("click",this.toggleFullScreen.bind(this)),dB.appendChild(this.fullscreenimg2),ae.appendChild(a3),ae.appendChild(a4),ae.appendChild(dB),j.appendChild(ae);var m=document.createElement("a");m.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),m.setAttribute("data-id",a.videos[2].videoid._id),m.addEventListener("click",this.showVid.bind(this),!1);var G=document.createElement("div");G.classList.add("rfrd-video-photo"),G.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",m.appendChild(G);var H=document.createElement("div"),I=document.createElement("div");I.classList.add("rfrd-side-video-name"),I.textContent=a.videos[2].videoid.name;var A=document.createElement("div");A.classList.add("rfrd-side-video-title"),a.videos[2].featuredid?A.textContent=a.videos[2].featuredid.jobtitle+", "+a.videos[2].featuredid.worksat:a.videos[2].videoid.jobtitle&&(A.textContent=a.videos[2].videoid.jobtitle+", "+a.videos[2].videoid.worksat),H.appendChild(I),H.appendChild(A),m.appendChild(H);var B=document.createElement("div");B.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),B.setAttribute("data-id",a.videos[2].videoid._id);var C=document.createElement("div");C.classList.add("rfrd-video-flyout-wrap");var u=document.createElement("div");u.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),u.style.paddingTop="56.17021276595745%";let a6=document.createElement("video");a6.classList.add("rfrd-mainvid"),a6.setAttribute("data-id",a.videos[2].videoid._id),a6.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",this.mainvideo3=a6,this.mainvideo3.innerHTML='<source src="'+a.videos[2].videoid.link+'" data-wf-ignore="true">';var n=document.createElement("a");n.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),n.href=a.buttonlink,n.style.backgroundColor="#"+a.maincolor,n.setAttribute("target","_blank"),n.textContent=a.buttoncta,u.appendChild(this.mainvideo3),C.appendChild(u),C.appendChild(n),B.appendChild(C);let af=document.createElement("div");af.classList.add("rfrd-video-icons");let a7=document.createElement("div");a7.classList.add("rfrdsoundcontainer");let dC=document.createElement("div");dC.classList.add("sound-on"),this.soundon3=dC,this.soundon3.addEventListener("click",this.toggleSoundOn.bind(this));let cQ=document.createElement("img");cQ.classList.add("rfrd-video-icon"),cQ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cR=document.createElement("div");cR.style.display="none",cR.classList.add("sound-off"),this.soundoff3=cR,this.soundoff3.addEventListener("click",this.toggleSoundOff.bind(this));let cS=document.createElement("img");cS.classList.add("rfrd-video-icon"),cS.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon3.appendChild(cQ),this.soundoff3.appendChild(cS),a7.appendChild(this.soundon3),a7.appendChild(this.soundoff3);let a8=document.createElement("div");a8.classList.add("rfrdplaycontainer");let cT=document.createElement("div");cT.classList.add("pause-video-block");let a9=document.createElement("img");a9.classList.add("rfrd-video-icon"),a9.style.display="none",a9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg3=a9,this.pauseimg3.addEventListener("click",this.pauseVid.bind(this));let cU=document.createElement("div");cU.classList.add("play-video-block");let cV=document.createElement("img");cV.classList.add("rfrd-video-icon"),cV.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg3=cV,this.playimg3.addEventListener("click",this.playVid.bind(this)),cT.appendChild(this.pauseimg3),cU.appendChild(this.playimg3),a8.appendChild(cT),a8.appendChild(cU);let dD=document.createElement("div"),cW=document.createElement("img");cW.classList.add("rfrd-video-icon"),cW.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg3=cW,this.fullscreenimg3.addEventListener("click",this.toggleFullScreen.bind(this)),dD.appendChild(this.fullscreenimg3),af.appendChild(a7),af.appendChild(a8),af.appendChild(dD),u.appendChild(af);var E=document.createElement("a");E.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),E.setAttribute("data-id",a.videos[3].videoid._id),E.addEventListener("click",this.showVid.bind(this),!1);var P=document.createElement("div");P.classList.add("rfrd-video-photo"),P.style="background-image:url('"+a.videos[3].videoid.screengrab+"')",E.appendChild(P);var Q=document.createElement("div"),R=document.createElement("div");R.classList.add("rfrd-side-video-name"),R.textContent=a.videos[3].videoid.name;var K=document.createElement("div");K.classList.add("rfrd-side-video-title"),a.videos[3].featuredid?K.textContent=a.videos[3].featuredid.jobtitle+", "+a.videos[3].featuredid.worksat:a.videos[3].videoid.jobtitle&&(K.textContent=a.videos[3].videoid.jobtitle+", "+a.videos[3].videoid.worksat),Q.appendChild(R),Q.appendChild(K),E.appendChild(Q);var L=document.createElement("div");L.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),L.setAttribute("data-id",a.videos[3].videoid._id);var M=document.createElement("div");M.classList.add("rfrd-video-flyout-wrap");var J=document.createElement("div");J.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),J.style.paddingTop="56.17021276595745%";let ba=document.createElement("video");ba.classList.add("rfrd-mainvid"),ba.setAttribute("data-id",a.videos[3].videoid._id),ba.style="background-image:url('"+a.videos[3].videoid.screengrab+"')",this.mainvideo4=ba,this.mainvideo4.innerHTML='<source src="'+a.videos[3].videoid.link+'" data-wf-ignore="true">';var F=document.createElement("a");F.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),F.href=a.buttonlink,F.style.backgroundColor="#"+a.maincolor,F.setAttribute("target","_blank"),F.textContent=a.buttoncta,J.appendChild(this.mainvideo4),M.appendChild(J),M.appendChild(F),L.appendChild(M);let ag=document.createElement("div");ag.classList.add("rfrd-video-icons");let bb=document.createElement("div");bb.classList.add("rfrdsoundcontainer");let dE=document.createElement("div");dE.classList.add("sound-on"),this.soundon4=dE,this.soundon4.addEventListener("click",this.toggleSoundOn.bind(this));let cX=document.createElement("img");cX.classList.add("rfrd-video-icon"),cX.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let cY=document.createElement("div");cY.style.display="none",cY.classList.add("sound-off"),this.soundoff4=cY,this.soundoff4.addEventListener("click",this.toggleSoundOff.bind(this));let cZ=document.createElement("img");cZ.classList.add("rfrd-video-icon"),cZ.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon4.appendChild(cX),this.soundoff4.appendChild(cZ),bb.appendChild(this.soundon4),bb.appendChild(this.soundoff4);let bc=document.createElement("div");bc.classList.add("rfrdplaycontainer");let c$=document.createElement("div");c$.classList.add("pause-video-block");let bd=document.createElement("img");bd.classList.add("rfrd-video-icon"),bd.style.display="none",bd.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg4=bd,this.pauseimg4.addEventListener("click",this.pauseVid.bind(this));let c_=document.createElement("div");c_.classList.add("play-video-block");let c0=document.createElement("img");c0.classList.add("rfrd-video-icon"),c0.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg4=c0,this.playimg4.addEventListener("click",this.playVid.bind(this)),c$.appendChild(this.pauseimg4),c_.appendChild(this.playimg4),bc.appendChild(c$),bc.appendChild(c_);let dF=document.createElement("div"),be=document.createElement("img");be.classList.add("rfrd-video-icon"),be.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg4=be,this.fullscreenimg4.addEventListener("click",this.toggleFullScreen.bind(this)),dF.appendChild(this.fullscreenimg4),ag.appendChild(bb),ag.appendChild(bc),ag.appendChild(dF),J.appendChild(ag);var T=document.createElement("a");T.classList.add("rfrd-video-row","rfrd-inline-block","rfrd-tab-link"),T.setAttribute("data-id",a.videos[4].videoid._id),T.addEventListener("click",this.showVid.bind(this),!1);var c1=document.createElement("div");c1.classList.add("rfrd-video-photo"),c1.style="background-image:url('"+a.videos[4].videoid.screengrab+"')",T.appendChild(c1);var c2=document.createElement("div"),c3=document.createElement("div");c3.classList.add("rfrd-side-video-name"),c3.textContent=a.videos[4].videoid.name;var bf=document.createElement("div");bf.classList.add("rfrd-side-video-title"),a.videos[4].featuredid?bf.textContent=a.videos[4].featuredid.jobtitle+", "+a.videos[4].featuredid.worksat:a.videos[4].videoid.jobtitle&&(bf.textContent=a.videos[4].videoid.jobtitle+", "+a.videos[4].videoid.worksat),c2.appendChild(c3),c2.appendChild(bf),T.appendChild(c2);var bg=document.createElement("div");bg.classList.add("rfrd-video-tab-pane","rfrd-w-tab-pane"),bg.setAttribute("data-id",a.videos[4].videoid._id);var bh=document.createElement("div");bh.classList.add("rfrd-video-flyout-wrap");var ah=document.createElement("div");ah.classList.add("rfrd-video-play","rfrd-w-video","w-embed"),ah.style.paddingTop="56.17021276595745%";let bi=document.createElement("video");bi.classList.add("rfrd-mainvid"),bi.setAttribute("data-id",a.videos[4].videoid._id),bi.style="background-image:url('"+a.videos[4].videoid.screengrab+"')",this.mainvideo5=bi,this.mainvideo5.innerHTML='<source src="'+a.videos[4].videoid.link+'" data-wf-ignore="true">';var U=document.createElement("a");U.classList.add("rfrd-widget-button","rfrd-video-cta","rfrd-w-button"),U.href=a.buttonlink,U.style.backgroundColor="#"+a.maincolor,U.setAttribute("target","_blank"),U.textContent=a.buttoncta,ah.appendChild(this.mainvideo5),bh.appendChild(ah),bh.appendChild(U),bg.appendChild(bh);let ai=document.createElement("div");ai.classList.add("rfrd-video-icons");let bj=document.createElement("div");bj.classList.add("rfrdsoundcontainer");let dG=document.createElement("div");dG.classList.add("sound-on"),this.soundon5=dG,this.soundon5.addEventListener("click",this.toggleSoundOn.bind(this));let c4=document.createElement("img");c4.classList.add("rfrd-video-icon"),c4.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let c5=document.createElement("div");c5.style.display="none",c5.classList.add("sound-off"),this.soundoff5=c5,this.soundoff5.addEventListener("click",this.toggleSoundOff.bind(this));let c6=document.createElement("img");c6.classList.add("rfrd-video-icon"),c6.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon5.appendChild(c4),this.soundoff5.appendChild(c6),bj.appendChild(this.soundon5),bj.appendChild(this.soundoff5);let bk=document.createElement("div");bk.classList.add("rfrdplaycontainer");let c7=document.createElement("div");c7.classList.add("pause-video-block");let bl=document.createElement("img");bl.classList.add("rfrd-video-icon"),bl.style.display="none",bl.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg5=bl,this.pauseimg5.addEventListener("click",this.pauseVid.bind(this));let c8=document.createElement("div");c8.classList.add("play-video-block");let c9=document.createElement("img");c9.classList.add("rfrd-video-icon"),c9.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg5=c9,this.playimg5.addEventListener("click",this.playVid.bind(this)),c7.appendChild(this.pauseimg5),c8.appendChild(this.playimg5),bk.appendChild(c7),bk.appendChild(c8);let dH=document.createElement("div"),dI=document.createElement("img");dI.classList.add("rfrd-video-icon"),dI.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg5=be,this.fullscreenimg5.addEventListener("click",this.toggleFullScreen.bind(this)),dH.appendChild(this.fullscreenimg5),ai.appendChild(bj),ai.appendChild(bk),ai.appendChild(dH),ah.appendChild(ai),k.appendChild(b),k.appendChild(e),k.appendChild(m),k.appendChild(E),k.appendChild(T),l.appendChild(h),l.appendChild(s),l.appendChild(B),l.appendChild(L),l.appendChild(bg),v.appendChild(k),v.appendChild(l),w.appendChild(O),w.appendChild(v),D.appendChild(w),D.appendChild(N)}this.messageContainer.appendChild(aj),this.messageContainer.appendChild(D)}submit(a){a.preventDefault(),a.srcElement.querySelector("#email").value,a.srcElement.querySelector("#message").value,this.messageContainer.innerHTML='<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry'}toggleOpen(){this.open=!this.open,this.buttonContainer.classList.add("rfrd-hidden"),this.messageContainer.classList.remove("rfrd-hidden")}toggleClose(){this.buttonContainer.classList.remove("rfrd-hidden"),this.messageContainer.classList.add("rfrd-hidden"),this.playimg.removeAttribute("style"),this.pauseimg.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(a){a.firstChild.firstChild.firstChild.pause(),a.firstChild.firstChild.firstChild.currentTime=0,a.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),a.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none"})}toggleSoundOn(a){a.target.closest(".rfrdsoundcontainer").lastChild.removeAttribute("style"),a.target.closest(".sound-on").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(a){a.classList.contains("rfrd-w--tab-active")&&(a.firstChild.firstChild.firstChild.muted=!a.firstChild.firstChild.firstChild.muted)})}toggleSoundOff(a){a.target.closest(".rfrdsoundcontainer").firstChild.removeAttribute("style"),a.target.closest(".sound-off").style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(a){a.classList.contains("rfrd-w--tab-active")&&(a.firstChild.firstChild.firstChild.muted=!a.firstChild.firstChild.firstChild.muted)})}toggleFullScreen(){document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(a){a.classList.contains("rfrd-w--tab-active")&&a.firstChild.firstChild.firstChild.requestFullscreen()})}playVid(a){a.target.closest(".rfrdplaycontainer").firstChild.firstChild.removeAttribute("style"),a.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(a){a.classList.contains("rfrd-w--tab-active")&&a.firstChild.firstChild.firstChild.play()})}pauseVid(a){a.target.closest(".rfrdplaycontainer").lastChild.firstChild.removeAttribute("style"),a.target.style.display="none",document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(a){a.classList.contains("rfrd-w--tab-active")&&a.firstChild.firstChild.firstChild.pause()})}showVid(a){var b=a.target.closest(".rfrd-video-row").getAttribute("data-id");document.querySelectorAll(".rfrd-video-tab-pane").forEach(function(a){b==a.getAttribute("data-id")?(a.classList.add("rfrd-w--tab-active"),a.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),a.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",a.firstChild.firstChild.firstChild.pause(),a.currentTime=0):(a.classList.remove("rfrd-w--tab-active"),a.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style"),a.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display="none",a.firstChild.firstChild.firstChild.pause(),a.currentTime=0)})}}
