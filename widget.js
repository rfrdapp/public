new class{constructor({position:a="bottom-left"}={}){console.log("tawkyyyyyy"),this.position=this.getPosition(a),this.open=!1,this.initalise(),this.createStyles()}getPosition(a){let[b,c]=a.split("-");return{[b]:"30px",[c]:"30px"}}async initalise(){async function g(a){let b=await fetch("https://app.rfrd.io/read/widget/"+a).then(a=>a.json());return b}let h=document.getElementById("rfrd-widget"),i=h.dataset.id;var b=await g(i);console.log({rrrr:b});let e=document.createElement("div");e.style.position="fixed",Object.keys(this.position).forEach(a=>e.style[a]=this.position[a]),document.body.appendChild(e);let c=document.createElement("div");c.classList.add("cheer-video-bg"),this.buttonContainer=c;let a=document.createElement("div");a.classList.add("cheer-background-video","w-background-video","w-background-video-atom"),a.setAttribute("data-video-urls",b.videos[0].videoid.link),a.setAttribute("data-autoplay","true"),a.setAttribute("data-loop","true"),a.setAttribute("data-wf-ignore","true"),this.videogif=a;let d=document.createElement("video");d.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",d.autoplay=!0,d.loop=!0,d.muted=!0,d.playsinline=!0,this.video=d,this.video.innerHTML='<source src="'+b.videos[0].videoid.link+'" data-wf-ignore="true">',a.appendChild(this.video);let f=document.createElement("div");f.classList.add("cheer-cta"),f.style.backgroundColor="#"+b.maincolor,this.cheercta=f,this.cheercta.innerHTML="<div>"+b.widgetcta+"</div>",this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("hidden","activated"),this.createMessageContainerContent(b),c.appendChild(a),c.appendChild(this.cheercta),c.addEventListener("click",this.toggleOpen.bind(this)),e.append(this.messageContainer),e.append(c)}createStyles(){let a=document.createElement("style");a.innerHTML=`
          .activated {
            display: block;
            transition: opacity 360ms ease 0s;
            opacity: 1;
          }
          .cheer-wrapper {
            position: fixed;
            left: 0%;
            top: auto;
            right: auto;
            bottom: 0%;
            z-index: 9999;
            padding-bottom: 10px;
            padding-left: 10px;
          }
          .cheer-cta {
            width: 150px;
            margin-left: 5px;
            padding: 10px 12px;
            border-radius: 8px 8px 8px 0px;
            background-color: #212441;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            color: #fff;
            font-weight: 600;
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
            width: 89px;
            height: 89px;
            border-style: solid;
            border-width: 3px;
            border-color: #2b1a3b;
            border-radius: 1000px;
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
            overflow: scroll;
            width: 300px;
            height: 440px;
            padding: 0px;
            border-style: none;
            border-width: 2px;
            border-color: rgba(43, 26, 60, 0.1);
            border-radius: 7px 7px 7px 0px;
            background-color: #fff;
            color: #212441;
        }
          .side-cheer-header {
            padding: 18px 15px 15px;
            border-bottom: 2px solid rgba(43, 26, 59, 0.05);
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-size: 16px;
            line-height: 1em;
            font-weight: 600;
          }
          .video-row {
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            padding: 9px 10px 10px;
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
            width: 57px;
            height: 47px;
            margin-right: 10px;
            border-width: 1px;
            border-color: rgba(43, 26, 60, 0.15);
            border-radius: 4px;
            background-position: 50% 50%;
            background-size: cover;
            box-shadow: none;
          }
          .side-video-name {
            margin-bottom: 4px;
            font-size: 14.5px;
            line-height: 1em;
            font-weight: 600;
          }
          .side-video-title {
            opacity: 0.5;
            font-size: 13px;
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
            position: absolute;
            left: 320px;
            top: auto;
            right: auto;
            bottom: 170px;
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
          .button {
            padding: 13px;
            border-radius: 6px;
            background-color: #ff56a2;
            color: #fff;
            font-size: 13px;
            line-height: 1em;
          }
          .icon {
              cursor: pointer;
              width: 70%;
              position: absolute;
              top: 9px;
              left: 9px;
              transition: transform .3s ease;
          }
          .hidden {
              transform: scale(0);
          }
          .button-container {
              background-color: #04b73f;
              width: 60px;
              height: 60px;
              border-radius: 50%;
          }
          .message-container {
              box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
              width: 400px;
              right: -25px;
              bottom: 75px;
              max-height: 400px;
              position: absolute;
              transition: max-height .2s ease;
              font-family: Helvetica, Arial ,sans-serif;
          }
          .message-container.hidden {
              max-height: 0px;
          }
          .message-container h2 {
              margin: 0;
              padding: 20px 20px;
              color: #fff;
              background-color: #04b73f;
          }
          .message-container .content {
              margin: 20px 10px ;
              border: 1px solid #dbdbdb;
              padding: 10px;
              display: flex;
              background-color: #fff;
              flex-direction: column;
          }
          .message-container form * {
              margin: 5px 0;
          }
          .message-container form input {
              padding: 10px;
          }
          .message-container form textarea {
              height: 100px;
              padding: 10px;
          }
          .message-container form textarea::placeholder {
              font-family: Helvetica, Arial ,sans-serif;
          }
          .message-container form button {
              cursor: pointer;
              background-color: #04b73f;
              color: #fff;
              border: 0;
              border-radius: 4px;
              padding: 10px;
          }
          .message-container form button:hover {
              background-color: #16632f;
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
            height: 385px;
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 auto;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
          }
          img {
            max-width: 100%;
            vertical-align: middle;
            display: inline-block;
          }
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(a)}createMessageContainerContent(a){console.log(),this.messageContainer.innerHTML="";let E=document.createElement("div");E.classList.add("page-bg"),E.addEventListener("click",this.toggleClose.bind(this));let al=document.createElement("div");E.appendChild(al);let F=document.createElement("div");F.classList.add("video-flyout-wrap");let k=document.createElement("div");k.classList.add("video-flyout","w-background-video","w-background-video-atom");var r=a.videos.length;if(1==r){let V=document.createElement("video");V.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",V.setAttribute("data-id",a.videos[0].videoid._id),this.mainvideo=V,this.mainvideo.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">',k.appendChild(this.mainvideo1)}if(2==r){let G=document.createElement("video");G.classList.add("mainvid"),G.setAttribute("data-id",a.videos[0].videoid._id),G.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo1=G,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';let H=document.createElement("video");H.classList.add("mainvid","hidden"),H.setAttribute("data-id",a.videos[1].videoid._id),H.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo2=H,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">',k.appendChild(this.mainvideo1),k.appendChild(this.mainvideo2)}if(3==r){let I=document.createElement("video");I.classList.add("mainvid"),I.setAttribute("data-id",a.videos[0].videoid._id),I.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo1=I,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';let J=document.createElement("video");J.classList.add("mainvid","hidden"),J.setAttribute("data-id",a.videos[1].videoid._id),J.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo2=J,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';let K=document.createElement("video");K.classList.add("mainvid","hidden"),K.setAttribute("data-id",a.videos[2].videoid._id),K.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo3=K,this.mainvideo3.innerHTML='<source src="'+a.videos[2].videoid.link+'" data-wf-ignore="true">',k.appendChild(this.mainvideo1),k.appendChild(this.mainvideo2),k.appendChild(this.mainvideo3)}if(4==r){let L=document.createElement("video");L.classList.add("mainvid"),L.setAttribute("data-id",a.videos[0].videoid._id),L.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo1=L,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';let M=document.createElement("video");M.classList.add("mainvid","hidden"),M.setAttribute("data-id",a.videos[1].videoid._id),M.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo2=M,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';let N=document.createElement("video");N.classList.add("mainvid","hidden"),N.setAttribute("data-id",a.videos[2].videoid._id),N.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo3=N,this.mainvideo3.innerHTML='<source src="'+a.videos[2].videoid.link+'" data-wf-ignore="true">';let O=document.createElement("video");O.classList.add("mainvid","hidden"),O.setAttribute("data-id",a.videos[3].videoid._id),O.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo4=O,this.mainvideo4.innerHTML='<source src="'+a.videos[3].videoid.link+'" data-wf-ignore="true">',k.appendChild(this.mainvideo1),k.appendChild(this.mainvideo2),k.appendChild(this.mainvideo3),k.appendChild(this.mainvideo4)}if(5==r){let P=document.createElement("video");P.classList.add("mainvid"),P.setAttribute("data-id",a.videos[0].videoid._id),P.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo1=P,this.mainvideo1.innerHTML='<source src="'+a.videos[0].videoid.link+'" data-wf-ignore="true">';let Q=document.createElement("video");Q.classList.add("mainvid","hidden"),Q.setAttribute("data-id",a.videos[1].videoid._id),Q.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo2=Q,this.mainvideo2.innerHTML='<source src="'+a.videos[1].videoid.link+'" data-wf-ignore="true">';let R=document.createElement("video");R.classList.add("mainvid","hidden"),R.setAttribute("data-id",a.videos[2].videoid._id),R.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo3=R,this.mainvideo3.innerHTML='<source src="'+a.videos[2].videoid.link+'" data-wf-ignore="true">';let S=document.createElement("video");S.classList.add("mainvid","hidden"),S.setAttribute("data-id",a.videos[3].videoid._id),S.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo4=S,this.mainvideo4.innerHTML='<source src="'+a.videos[3].videoid.link+'" data-wf-ignore="true">';let T=document.createElement("video");T.classList.add("mainvid","hidden"),T.setAttribute("data-id",a.videos[4].videoid._id),T.style="background-image:url('https://assets.website-files.com/5e62b74e92e93371af2386aa/61f453a0f6a99984b0fbe1ea_Untitled (3)-poster-00001.jpg')",this.mainvideo5=T,this.mainvideo5.innerHTML='<source src="'+a.videos[4].videoid.link+'" data-wf-ignore="true">',k.appendChild(this.mainvideo1),k.appendChild(this.mainvideo2),k.appendChild(this.mainvideo3),k.appendChild(this.mainvideo4),k.appendChild(this.mainvideo5)}let C=document.createElement("div");C.classList.add("video-icons");let W=document.createElement("div"),ai=document.createElement("div");ai.classList.add("sound-on"),this.soundon=ai,this.soundon.addEventListener("click",this.toggleSoundOn.bind(this));let X=document.createElement("img");X.classList.add("video-icon"),X.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg";let Y=document.createElement("div");Y.style.display="none",Y.classList.add("sound-off"),this.soundoff=Y,this.soundoff.addEventListener("click",this.toggleSoundOff.bind(this));let Z=document.createElement("img");Z.classList.add("video-icon"),Z.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg",this.soundon.appendChild(X),this.soundoff.appendChild(Z),W.appendChild(this.soundon),W.appendChild(this.soundoff);let $=document.createElement("div"),_=document.createElement("div");_.classList.add("pause-video-block");let U=document.createElement("img");U.classList.add("video-icon"),U.style.display="none",U.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg",this.pauseimg=U,this.pauseimg.addEventListener("click",this.pauseVid.bind(this));let aa=document.createElement("div");aa.classList.add("play-video-block");let ab=document.createElement("img");ab.classList.add("video-icon"),ab.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg",this.playimg=ab,this.playimg.addEventListener("click",this.playVid.bind(this)),_.appendChild(this.pauseimg),aa.appendChild(this.playimg),$.appendChild(_),$.appendChild(aa);let aj=document.createElement("div"),ac=document.createElement("img");ac.classList.add("video-icon"),ac.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg",this.fullscreenimg=ac,this.fullscreenimg.addEventListener("click",this.toggleFullScreen.bind(this)),aj.appendChild(this.fullscreenimg),C.appendChild(W),C.appendChild($),C.appendChild(aj),k.appendChild(C);let D=document.createElement("a");D.classList.add("button","video-cta","ww-button"),D.style.backgroundColor="#"+a.maincolor,D.href=a.buttonlink,D.textContent=a.buttoncta,F.appendChild(k),F.appendChild(D);let o=document.createElement("div");o.classList.add("cheer-wrap"),o.id="cheer-wrap";let x=document.createElement("div");x.classList.add("side-cheer-header"),x.textContent=a.cardlabel;let e=document.createElement("div");e.classList.add("videos-top");let v=document.createElement("div");v.classList.add("built-with-rfrd");let ak=document.createElement("div");ak.textContent="Built with";let ad=document.createElement("img");ad.classList.add("bw-rfrd-logo"),ad.src="https://assets.website-files.com/5e62b74e92e93371af2386aa/6254a481ee51de3be6a0b275_rfrd%20dark.svg",v.appendChild(ak),v.appendChild(ad);var r=a.videos.length;if(1==r){var b=document.createElement("div");b.classList.add("video-row"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var g=document.createElement("div");g.classList.add("video-photo"),g.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(g);var h=document.createElement("div"),i=document.createElement("div");i.classList.add("side-video-name"),i.textContent=a.videos[0].videoid.name;var d=document.createElement("div");d.classList.add("side-video-title"),a.videos[0].featuredid?d.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(d.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),h.appendChild(i),h.appendChild(d),b.appendChild(h),o.appendChild(x),o.appendChild(b),o.appendChild(v)}if(2==r){var b=document.createElement("div");b.classList.add("video-row"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var g=document.createElement("div");g.classList.add("video-photo"),g.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(g);var h=document.createElement("div"),i=document.createElement("div");i.classList.add("side-video-name"),i.textContent=a.videos[0].videoid.name;var d=document.createElement("div");d.classList.add("side-video-title"),a.videos[0].featuredid?d.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(d.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),h.appendChild(i),h.appendChild(d),b.appendChild(h);var c=document.createElement("div");c.classList.add("video-row"),c.setAttribute("data-id",a.videos[1].videoid._id),c.addEventListener("click",this.showVid.bind(this),!1);var l=document.createElement("div");l.classList.add("video-photo"),l.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",c.appendChild(l);var m=document.createElement("div"),n=document.createElement("div");n.classList.add("side-video-name"),n.textContent=a.videos[1].videoid.name;var j=document.createElement("div");j.classList.add("side-video-title"),a.videos[1].featuredid?j.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(j.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),m.appendChild(n),m.appendChild(j),c.appendChild(m),e.appendChild(x),e.appendChild(b),e.appendChild(c),o.appendChild(e),o.appendChild(v)}if(3==r){var b=document.createElement("div");b.classList.add("video-row"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var g=document.createElement("div");g.classList.add("video-photo"),g.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(g);var h=document.createElement("div"),i=document.createElement("div");i.classList.add("side-video-name"),i.textContent=a.videos[0].videoid.name;var d=document.createElement("div");d.classList.add("side-video-title"),a.videos[0].featuredid?d.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(d.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),h.appendChild(i),h.appendChild(d),b.appendChild(h);var c=document.createElement("div");c.classList.add("video-row"),c.setAttribute("data-id",a.videos[1].videoid._id),c.addEventListener("click",this.showVid.bind(this),!1);var l=document.createElement("div");l.classList.add("video-photo"),l.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",c.appendChild(l);var m=document.createElement("div"),n=document.createElement("div");n.classList.add("side-video-name"),n.textContent=a.videos[1].videoid.name;var j=document.createElement("div");j.classList.add("side-video-title"),console.log("widget.videos[1].videoid.jobtitle:",a.videos[1].videoid.jobtitle),a.videos[1].featuredid?j.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(j.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),m.appendChild(n),m.appendChild(j),c.appendChild(m);var f=document.createElement("div");f.classList.add("video-row"),f.setAttribute("data-id",a.videos[2].videoid._id),f.addEventListener("click",this.showVid.bind(this),!1);var s=document.createElement("div");s.classList.add("video-photo"),s.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",f.appendChild(s);var t=document.createElement("div"),u=document.createElement("div");u.classList.add("side-video-name"),u.textContent=a.videos[2].videoid.name;var p=document.createElement("div");p.classList.add("side-video-title"),a.videos[2].featuredid?p.textContent=a.videos[2].featuredid.jobtitle+", "+a.videos[2].featuredid.worksat:a.videos[2].videoid.jobtitle&&(p.textContent=a.videos[2].videoid.jobtitle+", "+a.videos[2].videoid.worksat),t.appendChild(u),t.appendChild(p),f.appendChild(t),e.appendChild(x),e.appendChild(b),e.appendChild(c),e.appendChild(f),o.appendChild(e),o.appendChild(v)}if(4==r){var b=document.createElement("div");b.classList.add("video-row"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var g=document.createElement("div");g.classList.add("video-photo"),g.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(g);var h=document.createElement("div"),i=document.createElement("div");i.classList.add("side-video-name"),i.textContent=a.videos[0].videoid.name;var d=document.createElement("div");d.classList.add("side-video-title"),a.videos[0].featuredid?d.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(d.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),h.appendChild(i),h.appendChild(d),b.appendChild(h);var c=document.createElement("div");c.classList.add("video-row"),c.setAttribute("data-id",a.videos[1].videoid._id),c.addEventListener("click",this.showVid.bind(this),!1);var l=document.createElement("div");l.classList.add("video-photo"),l.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",c.appendChild(l);var m=document.createElement("div"),n=document.createElement("div");n.classList.add("side-video-name"),n.textContent=a.videos[1].videoid.name;var j=document.createElement("div");j.classList.add("side-video-title"),a.videos[1].featuredid?j.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(j.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),m.appendChild(n),m.appendChild(j),c.appendChild(m);var f=document.createElement("div");f.classList.add("video-row"),f.setAttribute("data-id",a.videos[2].videoid._id),f.addEventListener("click",this.showVid.bind(this),!1);var s=document.createElement("div");s.classList.add("video-photo"),s.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",f.appendChild(s);var t=document.createElement("div"),u=document.createElement("div");u.classList.add("side-video-name"),u.textContent=a.videos[2].videoid.name;var p=document.createElement("div");p.classList.add("side-video-title"),a.videos[2].featuredid?p.textContent=a.videos[2].featuredid.jobtitle+", "+a.videos[2].featuredid.worksat:a.videos[2].videoid.jobtitle&&(p.textContent=a.videos[2].videoid.jobtitle+", "+a.videos[2].videoid.worksat),t.appendChild(u),t.appendChild(p),f.appendChild(t);var q=document.createElement("div");q.classList.add("video-row"),q.setAttribute("data-id",a.videos[3].videoid._id),q.addEventListener("click",this.showVid.bind(this),!1);var y=document.createElement("div");y.classList.add("video-photo"),y.style="background-image:url('"+a.videos[3].videoid.screengrab+"')",q.appendChild(y);var z=document.createElement("div"),A=document.createElement("div");A.classList.add("side-video-name"),A.textContent=a.videos[3].videoid.name;var w=document.createElement("div");w.classList.add("side-video-title"),a.videos[3].featuredid?w.textContent=a.videos[3].featuredid.jobtitle+", "+a.videos[3].featuredid.worksat:a.videos[3].videoid.jobtitle&&(w.textContent=a.videos[3].videoid.jobtitle+", "+a.videos[3].videoid.worksat),z.appendChild(A),z.appendChild(w),q.appendChild(z),e.appendChild(x),e.appendChild(b),e.appendChild(c),e.appendChild(f),e.appendChild(q),o.appendChild(e),o.appendChild(v)}if(5==r){var b=document.createElement("div");b.classList.add("video-row"),b.setAttribute("data-id",a.videos[0].videoid._id),b.addEventListener("click",this.showVid.bind(this),!1);var g=document.createElement("div");g.classList.add("video-photo"),g.style="background-image:url('"+a.videos[0].videoid.screengrab+"')",b.appendChild(g);var h=document.createElement("div"),i=document.createElement("div");i.classList.add("side-video-name"),i.textContent=a.videos[0].videoid.name;var d=document.createElement("div");d.classList.add("side-video-title"),a.videos[0].featuredid?d.textContent=a.videos[0].featuredid.jobtitle+", "+a.videos[0].featuredid.worksat:a.videos[0].videoid.jobtitle&&(d.textContent=a.videos[0].videoid.jobtitle+", "+a.videos[0].videoid.worksat),h.appendChild(i),h.appendChild(d),b.appendChild(h);var c=document.createElement("div");c.classList.add("video-row"),c.setAttribute("data-id",a.videos[1].videoid._id),c.addEventListener("click",this.showVid.bind(this),!1);var l=document.createElement("div");l.classList.add("video-photo"),l.style="background-image:url('"+a.videos[1].videoid.screengrab+"')",c.appendChild(l);var m=document.createElement("div"),n=document.createElement("div");n.classList.add("side-video-name"),n.textContent=a.videos[1].videoid.name;var j=document.createElement("div");j.classList.add("side-video-title"),a.videos[1].featuredid?j.textContent=a.videos[1].featuredid.jobtitle+", "+a.videos[1].featuredid.worksat:a.videos[1].videoid.jobtitle&&(j.textContent=a.videos[1].videoid.jobtitle+", "+a.videos[1].videoid.worksat),m.appendChild(n),m.appendChild(j),c.appendChild(m);var f=document.createElement("div");f.classList.add("video-row"),f.setAttribute("data-id",a.videos[2].videoid._id),f.addEventListener("click",this.showVid.bind(this),!1);var s=document.createElement("div");s.classList.add("video-photo"),s.style="background-image:url('"+a.videos[2].videoid.screengrab+"')",f.appendChild(s);var t=document.createElement("div"),u=document.createElement("div");u.classList.add("side-video-name"),u.textContent=a.videos[2].videoid.name;var p=document.createElement("div");p.classList.add("side-video-title"),a.videos[2].featuredid?p.textContent=a.videos[2].featuredid.jobtitle+", "+a.videos[2].featuredid.worksat:a.videos[2].videoid.jobtitle&&(p.textContent=a.videos[2].videoid.jobtitle+", "+a.videos[2].videoid.worksat),t.appendChild(u),t.appendChild(p),f.appendChild(t);var q=document.createElement("div");q.classList.add("video-row"),q.setAttribute("data-id",a.videos[3].videoid._id),q.addEventListener("click",this.showVid.bind(this),!1);var y=document.createElement("div");y.classList.add("video-photo"),y.style="background-image:url('"+a.videos[3].videoid.screengrab+"')",q.appendChild(y);var z=document.createElement("div"),A=document.createElement("div");A.classList.add("side-video-name"),A.textContent=a.videos[3].videoid.name;var w=document.createElement("div");w.classList.add("side-video-title"),w.textContent="VP Sales, Webflow",z.appendChild(A),z.appendChild(w),q.appendChild(z);var B=document.createElement("div");B.classList.add("video-row"),B.setAttribute("data-id",a.videos[4].videoid._id),B.addEventListener("click",this.showVid.bind(this),!1);var ae=document.createElement("div");ae.classList.add("video-photo"),ae.style="background-image:url('"+a.videos[4].videoid.screengrab+"')",B.appendChild(ae);var af=document.createElement("div"),ag=document.createElement("div");ag.classList.add("side-video-name"),ag.textContent=a.videos[4].videoid.name;var ah=document.createElement("div");ah.classList.add("side-video-title"),ah.textContent="VP Sales, Webflow",af.appendChild(ag),af.appendChild(ah),B.appendChild(af),e.appendChild(x),e.appendChild(b),e.appendChild(c),e.appendChild(f),e.appendChild(q),e.appendChild(B),o.appendChild(e),o.appendChild(v)}this.messageContainer.appendChild(E),this.messageContainer.appendChild(F),this.messageContainer.appendChild(o)}submit(a){a.preventDefault();let b={email:a.srcElement.querySelector("#email").value,message:a.srcElement.querySelector("#message").value};this.messageContainer.innerHTML='<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry',console.log(b)}toggleOpen(){console.log("clicked on toggle open"),this.open=!this.open,console.log("its opened!"),this.buttonContainer.classList.add("hidden"),this.messageContainer.classList.remove("hidden")}toggleClose(){console.log("clicked on toggle close"),this.buttonContainer.classList.remove("hidden"),this.messageContainer.classList.add("hidden"),this.playimg.removeAttribute("style"),this.pauseimg.style.display="none",document.querySelectorAll(".mainvid").forEach(function(a){a.pause(),a.currentTime=0})}playVid(a){console.log("press play"),this.pauseimg.removeAttribute("style"),this.playimg.style.display="none",document.querySelectorAll(".mainvid").forEach(function(a){a.classList.contains("hidden")?console.log("nope"):(console.log("item.getAttribute('data-id'):",a.getAttribute("data-id")),a.play())})}toggleSoundOn(){this.soundoff.removeAttribute("style"),this.soundon.style.display="none",document.querySelectorAll(".mainvid").forEach(function(a){a.classList.contains("hidden")?console.log("nope"):a.muted=!a.muted})}toggleSoundOff(){this.soundon.removeAttribute("style"),this.soundoff.style.display="none",document.querySelectorAll(".mainvid").forEach(function(a){a.classList.contains("hidden")?console.log("nope"):a.muted=!a.muted})}toggleFullScreen(){document.querySelectorAll(".mainvid").forEach(function(a){a.classList.contains("hidden")?console.log("nope"):a.requestFullscreen()})}pauseVid(a){console.log("pressed pause"),this.playimg.removeAttribute("style"),this.pauseimg.style.display="none",document.querySelectorAll(".mainvid").forEach(function(a){a.classList.contains("hidden")?console.log("nope"):a.pause()})}showVid(a){this.playimg.removeAttribute("style"),this.pauseimg.style.display="none";var b=a.target.closest(".video-row").getAttribute("data-id");document.querySelectorAll(".mainvid").forEach(function(a){b==a.getAttribute("data-id")?(a.classList.remove("hidden"),a.pause(),a.currentTime=0):(a.classList.add("hidden"),a.pause(),a.currentTime=0)})}}
