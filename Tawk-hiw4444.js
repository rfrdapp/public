(function () {
  // copy and paste all of your stuff here
  class Tawk {
  
    constructor({ position = 'bottom-left'} = {}) {
      this.position = this.getPosition(position);
      this.open = false;
      this.initalise();
      // this.createStyles();
    }
  
    getPosition(position) {
      const [vertical, horizontal] = position.split('-');
      return {
        [vertical]: '30px',
        [horizontal]: '30px'
      };
    }
    
  
    async initalise() {

      // analytics.track("Book Meeting", {
      //   referenceid: '123',
      // });
  
      async function upload(widgetid) {
        var serverUrl = 'https://app.rfrd.io/read/widget/' + widgetid;
        const response1 = await fetch (serverUrl)
          .then((response1) => response1.json())
          return response1
      }

      // script tag needs an data-id with the id of the widget. call it rfrd-widget

      const widget = document.getElementById('rfrd-widget4');
      const rfrdId = widget.dataset.id;
      var rrrr = await upload(rfrdId)
      
      // var rrrr = await upload('62afb13c10393e131b3502af')
  
      // console.log({rrrr})
  
      const container = document.createElement('div')
      container.classList.add('rfrd-cheer-wrapper')
      container.id = "widg4"
      container.style = "display: none;"
      // container.style = "height: 0px"
      this.container = container
      // container.style.position = 'fixed'
      // Object.keys(this.position)
      //   .forEach(key => container.style[key] = this.position[key]);
      document.body.appendChild(container)
  
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('rfrd-hidden', 'rfrd-cheer-video-bg')
      this.buttonContainer = buttonContainer
  
      const videogifcontainer = document.createElement('div'); 
      videogifcontainer.classList.add('rfrd-cheer-background-video')
      // videogifcontainer.style = "background-image:url('"+rrrr.videos[0].videoid.screengrab+"')"

      const videogif = document.createElement('div'); 
      videogif.classList.add('rfrd-cheer-bg', 'rfrd-background-video', 'w-background-video-atom')
      videogif.setAttribute('data-video-urls', rrrr.videos[0].videoid.link);
      videogif.setAttribute('data-autoplay', 'true');
      videogif.setAttribute('data-loop', 'true');
      videogif.setAttribute('data-wf-ignore', 'true');
      this.videogif = videogif
  
      const video = document.createElement('video'); 
      video.style = "background-image:url('"+rrrr.videos[0].videoid.screengrab+"')"
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsinline = true;
      this.video = video
      this.video.innerHTML = '<source src="'+rrrr.videos[0].videoid.link+'" data-wf-ignore="true">'
  
      this.videogif.appendChild(this.video)
      videogifcontainer.appendChild(this.videogif)
  
      const cheercta = document.createElement('div');
      cheercta.classList.add('rfrd-cheer-cta')
      cheercta.style.backgroundColor = '#'+ rrrr.maincolor
      this.cheercta = cheercta
      this.cheercta.innerHTML = '<div>'+rrrr.widgetcta+'</div>'
      
  
      this.messageContainer = document.createElement('div');
      this.messageContainer.classList.add('rfrd-activated');
  
      
  
      // var userj
      // var address = fetch('/read/r/template/62607a48bf2260253cc541b1') //1
      //   .then((response) => response.json()) //2
      //   .then((user) => {
      //     console.log("user:", user)
      //     return user; //3
      //   });
      //   console.log("address:", address)
        
      //   const printAddress = () => {
      //     address.then((a) => {
      //       return a.title;
      //     });
      //   };
      //   console.log("print address:", printAddress)
        
        
  
      
  
      this.createMessageContainerContent(rrrr)
  
      
  
      buttonContainer.appendChild(videogifcontainer)
      buttonContainer.appendChild(this.cheercta)
  
  
      buttonContainer.addEventListener('click', this.toggleOpen.bind(this));
  
      this.container.append(this.messageContainer)
      // this.container.append(buttonContainer)

      this.createStyles(rrrr)
  
    }
  
    createStyles(rrrr) {
      const styleTag = document.createElement('style');
      styleTag.innerHTML = `
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
            left: 185px;
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
            border-color: #${rrrr.maincolor};
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
            top: 100%;
            right: 100%;
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
              background-image: url("${rrrr.videos[0].videoid.screengrab}");
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
        `.replace(/^\s+|\n/gm, '');
      document.head.appendChild(styleTag);
    }
  
  
    createMessageContainerContent(widget) {
      this.messageContainer.innerHTML = '';
  
      const pagebg = document.createElement('div');
      pagebg.classList.add('rfrd-page-bg')
      // pagebg.addEventListener('click', this.toggleClose.bind(this));
  
      
      const divinsidepagebg = document.createElement('div');
      pagebg.appendChild(divinsidepagebg)
  
      
      var counter = widget.videos.length 

      const videoicons = document.createElement('div');
      videoicons.classList.add('rfrd-video-icons')
      const soundcontainer = document.createElement('div');
      // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
      const soundon = document.createElement('div');
      soundon.classList.add('sound-on')
      this.soundon = soundon
      this.soundon.addEventListener('click', this.toggleSoundOn.bind(this));
      const soundonimg = document.createElement('img');
      soundonimg.classList.add('rfrd-video-icon')
      soundonimg.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
      const soundoff = document.createElement('div');
      soundoff.style.display = 'none'
      soundoff.classList.add('sound-off')
      this.soundoff = soundoff
      this.soundoff.addEventListener('click', this.toggleSoundOff.bind(this));
      const soundoffimg = document.createElement('img');
      soundoffimg.classList.add('rfrd-video-icon')
      soundoffimg.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
      this.soundon.appendChild(soundonimg)
      this.soundoff.appendChild(soundoffimg)
      soundcontainer.appendChild(this.soundon)
      soundcontainer.appendChild(this.soundoff)
      const playcontainer = document.createElement('div');
      const pause = document.createElement('div');
      pause.classList.add('pause-video-block')
      const pauseimg = document.createElement('img');
      pauseimg.classList.add('rfrd-video-icon')
      pauseimg.style.display = 'none'
      pauseimg.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
      this.pauseimg = pauseimg 
      this.pauseimg.addEventListener('click', this.pauseVid.bind(this));
      const play = document.createElement('div');
      play.classList.add('play-video-block')
      const playimg = document.createElement('img');
      playimg.classList.add('rfrd-video-icon')
      playimg.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
      this.playimg = playimg 
      this.playimg.addEventListener('click', this.playVid.bind(this));
      pause.appendChild(this.pauseimg)
      play.appendChild(this.playimg)
      playcontainer.appendChild(pause)
      playcontainer.appendChild(play)
      const fullscreencontainer = document.createElement('div');
      const fullscreenimg = document.createElement('img');
      fullscreenimg.classList.add('rfrd-video-icon')
      fullscreenimg.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
      this.fullscreenimg = fullscreenimg
      this.fullscreenimg.addEventListener('click', this.toggleFullScreen.bind(this));
      fullscreencontainer.appendChild(this.fullscreenimg)
  
      videoicons.appendChild(soundcontainer)
      videoicons.appendChild(playcontainer)
      videoicons.appendChild(fullscreencontainer)
  
  
      
      
      
  
    
      // mainvideocontainer.appendChild(videoicons)
      
      // const mainvideocta = document.createElement('a');
      // mainvideocta.classList.add('button', 'video-cta', 'ww-button')
      // mainvideocta.style.backgroundColor = '#'+ widget.maincolor
      // mainvideocta.href = widget.buttonlink
      // mainvideocta.textContent = widget.buttoncta
      
      // videoflyoutwrap.appendChild(mainvideocontainer)
      // videoflyoutwrap.appendChild(mainvideocta)
  
  
  
      const cheerwrap = document.createElement('div');
      cheerwrap.classList.add('rfrd-cheer-wrap')
      cheerwrap.id = "cheer-wrap"
  
  
  
      const cheerheader = document.createElement('div');
      cheerheader.classList.add('rfrd-side-cheer-header')
      cheerheader.textContent =  widget.cardlabel

      const videotabs = document.createElement('div');
      videotabs.classList.add('video-tabs',  'rfrd-w-tabs')

      const videotabsmenu = document.createElement('div')
      videotabsmenu.classList.add('video-tabs-menu', 'rfrd-w-tab-menu')

      const tabscontent = document.createElement('div');
      tabscontent.classList.add('rfrd-tabs-content', 'rfrd-w-tab-content')
      
      const videosTop = document.createElement('div');
      videosTop.classList.add('rfrd-videos-top')



  
  
      const builtwithrfrd = document.createElement('div');
      builtwithrfrd.classList.add('rfrd-built-with-rfrd')
      const builtwith = document.createElement('div');
      builtwith.textContent = 'Built with'
      const rfrdlink =  document.createElement('a');
      rfrdlink.href = 'https://www.rfrd.io'
      rfrdlink.setAttribute('target', "_blank");
      const rfrdimg = document.createElement('img');
      rfrdimg.classList.add('rfrd-bw-rfrd-logo')
      rfrdimg.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/6254a481ee51de3be6a0b275_rfrd%20dark.svg'
      rfrdlink.appendChild(rfrdimg)
      builtwithrfrd.appendChild(builtwith)
      builtwithrfrd.appendChild(rfrdlink)
  
  
  
      
      var counter = widget.videos.length 
      
  
      if (counter == 1) {
        var videorowOne = document.createElement('a');
        videorowOne.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowOne.setAttribute('data-id', widget.videos[0].videoid._id);
        videorowOne.addEventListener('click', this.showVid.bind(this), false);
        var videophotoOne = document.createElement('div')
        videophotoOne.classList.add('rfrd-video-photo')
        videophotoOne.style = "background-image:url('"+ widget.videos[0].videoid.screengrab +"')"
        videorowOne.appendChild(videophotoOne)
        var videoheadingsOne = document.createElement('div');
        var videonameOne = document.createElement('div');
        videonameOne.classList.add('rfrd-side-video-name')
        videonameOne.textContent = widget.videos[0].videoid.name
        var videotitleOne = document.createElement('div');
        videotitleOne.classList.add('rfrd-side-video-title')
        if(widget.videos[0].featuredid) {
          videotitleOne.textContent = widget.videos[0].featuredid.jobtitle + ', ' + widget.videos[0].featuredid.worksat
        }
        else if (widget.videos[0].videoid.jobtitle) {
          videotitleOne.textContent = widget.videos[0].videoid.jobtitle + ', ' + widget.videos[0].videoid.worksat
        }
        else {}
        videoheadingsOne.appendChild(videonameOne)
        videoheadingsOne.appendChild(videotitleOne)
        videorowOne.appendChild(videoheadingsOne)

        var videotabOne = document.createElement('div')
        videotabOne.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'rfrd-w--tab-active', 'hiw4')
        videotabOne.setAttribute('data-id', widget.videos[0].videoid._id);
        var videoflyoutOne = document.createElement('div')
        videoflyoutOne.classList.add('rfrd-video-flyout-wrap')
        var videoembedOne = document.createElement('div')
        videoembedOne.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedOne.style.paddingTop = '56.17021276595745%'
        const mainvideo1 = document.createElement('video');
        mainvideo1.classList.add("rfrd-mainvid")
        mainvideo1.setAttribute('data-id', widget.videos[0].videoid._id);
        mainvideo1.style = "background-image:url('"+ widget.videos[0].videoid.screengrab +"')"
        this.mainvideo1 = mainvideo1
        this.mainvideo1.innerHTML = '<source src="'+widget.videos[0].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnOne = document.createElement('a')
        videoflyoutbtnOne.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        videoflyoutbtnOne.href = widget.buttonlink
        videoflyoutbtnOne.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnOne.setAttribute('target', "_blank");
        if(widget.videos[0].videoid.widgetcta) {
          videoflyoutbtnOne.href = widget.videos[0].videoid.widgetlink
          videoflyoutbtnOne.textContent = widget.videos[0].videoid.widgetcta
        }
        else {
          videoflyoutbtnOne.href = widget.buttonlink
          videoflyoutbtnOne.textContent = widget.buttoncta
        }
        videoembedOne.appendChild(this.mainvideo1)
        videoflyoutOne.appendChild(videoembedOne)
        videoflyoutOne.appendChild(videoflyoutbtnOne)
        videotabOne.appendChild(videoflyoutOne)

        const videoicons1 = document.createElement('div');
        videoicons1.classList.add('rfrd-video-icons')
        const soundcontainer1 = document.createElement('div');
        soundcontainer1.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon1 = document.createElement('div');
        soundon1.classList.add('sound-on')
        this.soundon1 = soundon1
        this.soundon1.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg1 = document.createElement('img');
        soundonimg1.classList.add('rfrd-video-icon')
        soundonimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff1 = document.createElement('div');
        soundoff1.style.display = 'none'
        soundoff1.classList.add('sound-off')
        this.soundoff1 = soundoff1
        this.soundoff1.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg1 = document.createElement('img');
        soundoffimg1.classList.add('rfrd-video-icon')
        soundoffimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon1.appendChild(soundonimg1)
        this.soundoff1.appendChild(soundoffimg1)
        soundcontainer1.appendChild(this.soundon1)
        soundcontainer1.appendChild(this.soundoff1)
        const playcontainer1 = document.createElement('div');
        playcontainer1.classList.add('rfrdplaycontainer')
        const pause1 = document.createElement('div');
        pause1.classList.add('pause-video-block')
        const pauseimg1 = document.createElement('img');
        pauseimg1.classList.add('rfrd-video-icon')
        pauseimg1.style.display = 'none'
        pauseimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg1 = pauseimg1 
        this.pauseimg1.addEventListener('click', this.pauseVid.bind(this));
        const play1 = document.createElement('div');
        play1.classList.add('play-video-block')
        const playimg1 = document.createElement('img');
        playimg1.classList.add('rfrd-video-icon')
        playimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg1 = playimg1 
        this.playimg1.addEventListener('click', this.playVid.bind(this));
        pause1.appendChild(this.pauseimg1)
        play1.appendChild(this.playimg1)
        playcontainer1.appendChild(pause1)
        playcontainer1.appendChild(play1)
        const fullscreencontainer1 = document.createElement('div');
        const fullscreenimg1 = document.createElement('img');
        fullscreenimg1.classList.add('rfrd-video-icon')
        fullscreenimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg1 = fullscreenimg1
        this.fullscreenimg1.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer1.appendChild(this.fullscreenimg1)
        videoicons1.appendChild(soundcontainer1)
        videoicons1.appendChild(playcontainer1)
        videoicons1.appendChild(fullscreencontainer1)
        videoembedOne.appendChild(videoicons1)


        videotabsmenu.appendChild(videorowOne)
        tabscontent.appendChild(videotabOne)
        videotabs.appendChild(videotabsmenu)
        videotabs.appendChild(tabscontent)
        videosTop.appendChild(cheerheader)
        videosTop.appendChild(videotabs)
        cheerwrap.appendChild(videosTop)
        cheerwrap.appendChild(builtwithrfrd)

      } 
  
      if (counter == 2) {
        var videorowOne = document.createElement('a');
        videorowOne.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowOne.setAttribute('data-id', widget.videos[0].videoid._id);
        videorowOne.addEventListener('click', this.showVid.bind(this), false);
        var videophotoOne = document.createElement('div')
        videophotoOne.classList.add('rfrd-video-photo')
        videophotoOne.style = "background-image:url('"+ widget.videos[0].videoid.screengrab +"')"
        videorowOne.appendChild(videophotoOne)
        var videoheadingsOne = document.createElement('div');
        var videonameOne = document.createElement('div');
        videonameOne.classList.add('rfrd-side-video-name')
        videonameOne.textContent = widget.videos[0].videoid.name
        var videotitleOne = document.createElement('div');
        videotitleOne.classList.add('rfrd-side-video-title')
        if(widget.videos[0].featuredid) {
          videotitleOne.textContent = widget.videos[0].featuredid.jobtitle + ', ' + widget.videos[0].featuredid.worksat
        }
        else if (widget.videos[0].videoid.jobtitle) {
          videotitleOne.textContent = widget.videos[0].videoid.jobtitle + ', ' + widget.videos[0].videoid.worksat
        }
        else {}
        videoheadingsOne.appendChild(videonameOne)
        videoheadingsOne.appendChild(videotitleOne)
        videorowOne.appendChild(videoheadingsOne)
  
        var videorowTwo = document.createElement('a');
        videorowTwo.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowTwo.setAttribute('data-id', widget.videos[1].videoid._id);
        videorowTwo.addEventListener('click', this.showVid.bind(this), false);
        var videophotoTwo = document.createElement('div')
        videophotoTwo.classList.add('rfrd-video-photo')
        videophotoTwo.style = "background-image:url('"+ widget.videos[1].videoid.screengrab +"')"
        videorowTwo.appendChild(videophotoTwo)
        var videoheadingsTwo = document.createElement('div');
        var videonameTwo = document.createElement('div');
        videonameTwo.classList.add('rfrd-side-video-name')
        videonameTwo.textContent = widget.videos[1].videoid.name
        var videotitleTwo = document.createElement('div');
        videotitleTwo.classList.add('rfrd-side-video-title')
        if(widget.videos[1].featuredid) {
          videotitleTwo.textContent = widget.videos[1].featuredid.jobtitle + ', ' + widget.videos[1].featuredid.worksat
        }
        else if (widget.videos[1].videoid.jobtitle) {
          videotitleTwo.textContent = widget.videos[1].videoid.jobtitle + ', ' + widget.videos[1].videoid.worksat
        }
        else {}
        videoheadingsTwo.appendChild(videonameTwo)
        videoheadingsTwo.appendChild(videotitleTwo)
        videorowTwo.appendChild(videoheadingsTwo)

        var videotabOne = document.createElement('div')
        videotabOne.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'rfrd-w--tab-active', 'hiw4')
        videotabOne.setAttribute('data-id', widget.videos[0].videoid._id);
        var videoflyoutOne = document.createElement('div')
        videoflyoutOne.classList.add('rfrd-video-flyout-wrap')
        var videoembedOne = document.createElement('div')
        videoembedOne.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedOne.style.paddingTop = '56.17021276595745%'
        const mainvideo1 = document.createElement('video');
        mainvideo1.classList.add("rfrd-mainvid")
        mainvideo1.setAttribute('data-id', widget.videos[0].videoid._id);
        mainvideo1.style = "background-image:url('"+ widget.videos[0].videoid.screengrab +"')"
        this.mainvideo1 = mainvideo1
        this.mainvideo1.innerHTML = '<source src="'+widget.videos[0].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnOne = document.createElement('a')
        videoflyoutbtnOne.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnOne.href = widget.buttonlink
        videoflyoutbtnOne.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnOne.setAttribute('target', "_blank");
        // videoflyoutbtnOne.textContent = widget.buttoncta
        if(widget.videos[0].videoid.widgetcta) {
          console.log("widget.videos[0].videoid.widgetcta:", widget.videos[0].videoid.widgetcta)
          videoflyoutbtnOne.href = widget.videos[0].videoid.widgetlink
          videoflyoutbtnOne.textContent = widget.videos[0].videoid.widgetcta
        }
        else {
          console.log("nope0")
          videoflyoutbtnOne.href = widget.buttonlink
          videoflyoutbtnOne.textContent = widget.buttoncta
        }
        videoembedOne.appendChild(this.mainvideo1)
        videoflyoutOne.appendChild(videoembedOne)
        videoflyoutOne.appendChild(videoflyoutbtnOne)
        videotabOne.appendChild(videoflyoutOne)

        const videoicons1 = document.createElement('div');
        videoicons1.classList.add('rfrd-video-icons')
        const soundcontainer1 = document.createElement('div');
        soundcontainer1.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon1 = document.createElement('div');
        soundon1.classList.add('sound-on')
        this.soundon1 = soundon1
        this.soundon1.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg1 = document.createElement('img');
        soundonimg1.classList.add('rfrd-video-icon')
        soundonimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff1 = document.createElement('div');
        soundoff1.style.display = 'none'
        soundoff1.classList.add('sound-off')
        this.soundoff1 = soundoff1
        this.soundoff1.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg1 = document.createElement('img');
        soundoffimg1.classList.add('rfrd-video-icon')
        soundoffimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon1.appendChild(soundonimg1)
        this.soundoff1.appendChild(soundoffimg1)
        soundcontainer1.appendChild(this.soundon1)
        soundcontainer1.appendChild(this.soundoff1)
        const playcontainer1 = document.createElement('div');
        playcontainer1.classList.add('rfrdplaycontainer')
        const pause1 = document.createElement('div');
        pause1.classList.add('pause-video-block')
        const pauseimg1 = document.createElement('img');
        pauseimg1.classList.add('rfrd-video-icon')
        pauseimg1.style.display = 'none'
        pauseimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg1 = pauseimg1 
        this.pauseimg1.addEventListener('click', this.pauseVid.bind(this));
        const play1 = document.createElement('div');
        play1.classList.add('play-video-block')
        const playimg1 = document.createElement('img');
        playimg1.classList.add('rfrd-video-icon')
        playimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg1 = playimg1 
        this.playimg1.addEventListener('click', this.playVid.bind(this));
        pause1.appendChild(this.pauseimg1)
        play1.appendChild(this.playimg1)
        playcontainer1.appendChild(pause1)
        playcontainer1.appendChild(play1)
        const fullscreencontainer1 = document.createElement('div');
        const fullscreenimg1 = document.createElement('img');
        fullscreenimg1.classList.add('rfrd-video-icon')
        fullscreenimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg1 = fullscreenimg1
        this.fullscreenimg1.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer1.appendChild(this.fullscreenimg1)
        videoicons1.appendChild(soundcontainer1)
        videoicons1.appendChild(playcontainer1)
        videoicons1.appendChild(fullscreencontainer1)
        videoembedOne.appendChild(videoicons1)

        var videotabTwo = document.createElement('div')
        videotabTwo.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'hiw4')
        videotabTwo.setAttribute('data-id', widget.videos[1].videoid._id);
        var videoflyoutTwo = document.createElement('div')
        videoflyoutTwo.classList.add('rfrd-video-flyout-wrap')
        var videoembedTwo = document.createElement('div')
        videoembedTwo.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedTwo.style.paddingTop = '56.17021276595745%'
        const mainvideo2 = document.createElement('video');
        mainvideo2.classList.add("rfrd-mainvid")
        mainvideo2.setAttribute('data-id', widget.videos[1].videoid._id);
        mainvideo2.style = "background-image:url('"+ widget.videos[1].videoid.screengrab +"')"
        this.mainvideo2 = mainvideo2
        this.mainvideo2.innerHTML = '<source src="'+widget.videos[1].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnTwo = document.createElement('a')
        videoflyoutbtnTwo.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnTwo.href = widget.buttonlink
        videoflyoutbtnTwo.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnTwo.setAttribute('target', "_blank");
        // videoflyoutbtnTwo.textContent = widget.buttoncta
        if(widget.videos[1].videoid.widgetcta) {
          console.log("widget.videos[1].videoid.widgetcta:", widget.videos[1].videoid.widgetcta)
          videoflyoutbtnTwo.href = widget.videos[1].videoid.widgetlink
          videoflyoutbtnTwo.textContent = widget.videos[1].videoid.widgetcta
        }
        else {
          videoflyoutbtnTwo.href = widget.buttonlink
          videoflyoutbtnTwo.textContent = widget.buttoncta
        }
        videoembedTwo.appendChild(this.mainvideo2)
        videoflyoutTwo.appendChild(videoembedTwo)
        videoflyoutTwo.appendChild(videoflyoutbtnTwo)
        videotabTwo.appendChild(videoflyoutTwo)

        const videoicons2 = document.createElement('div');
        videoicons2.classList.add('rfrd-video-icons')
        const soundcontainer2 = document.createElement('div');
        soundcontainer2.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon2 = document.createElement('div');
        soundon2.classList.add('sound-on')
        this.soundon2 = soundon2
        this.soundon2.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg2 = document.createElement('img');
        soundonimg2.classList.add('rfrd-video-icon')
        soundonimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff2 = document.createElement('div');
        soundoff2.style.display = 'none'
        soundoff2.classList.add('sound-off')
        this.soundoff2 = soundoff2
        this.soundoff2.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg2 = document.createElement('img');
        soundoffimg2.classList.add('rfrd-video-icon')
        soundoffimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon2.appendChild(soundonimg2)
        this.soundoff2.appendChild(soundoffimg2)
        soundcontainer2.appendChild(this.soundon2)
        soundcontainer2.appendChild(this.soundoff2)
        const playcontainer2 = document.createElement('div');
        playcontainer2.classList.add('rfrdplaycontainer')
        const pause2 = document.createElement('div');
        pause2.classList.add('pause-video-block')
        const pauseimg2 = document.createElement('img');
        pauseimg2.classList.add('rfrd-video-icon')
        pauseimg2.style.display = 'none'
        pauseimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg2 = pauseimg2 
        this.pauseimg2.addEventListener('click', this.pauseVid.bind(this));
        const play2 = document.createElement('div');
        play2.classList.add('play-video-block')
        const playimg2 = document.createElement('img');
        playimg2.classList.add('rfrd-video-icon')
        playimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg2 = playimg2
        this.playimg2.addEventListener('click', this.playVid.bind(this));
        pause2.appendChild(this.pauseimg2)
        play2.appendChild(this.playimg2)
        playcontainer2.appendChild(pause2)
        playcontainer2.appendChild(play2)
        const fullscreencontainer2 = document.createElement('div');
        const fullscreenimg2 = document.createElement('img');
        fullscreenimg2.classList.add('rfrd-video-icon')
        fullscreenimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg2 = fullscreenimg2
        this.fullscreenimg2.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer2.appendChild(this.fullscreenimg2)
        videoicons2.appendChild(soundcontainer2)
        videoicons2.appendChild(playcontainer2)
        videoicons2.appendChild(fullscreencontainer2)
        videoembedTwo.appendChild(videoicons2)
  
        
        videotabsmenu.appendChild(videorowOne)
        videotabsmenu.appendChild(videorowTwo)
        tabscontent.appendChild(videotabOne)
        tabscontent.appendChild(videotabTwo)
        videotabs.appendChild(videotabsmenu)
        videotabs.appendChild(tabscontent)
        videosTop.appendChild(cheerheader)
        videosTop.appendChild(videotabs)
        cheerwrap.appendChild(videosTop)
        cheerwrap.appendChild(builtwithrfrd)
      } 
  
      if (counter == 3) {
        var videorowOne = document.createElement('a');
        videorowOne.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowOne.setAttribute('data-id', widget.videos[0].videoid._id);
        videorowOne.addEventListener('click', this.showVid.bind(this), false);
        var videophotoOne = document.createElement('div')
        videophotoOne.classList.add('rfrd-video-photo')
        videophotoOne.style = "background-image:url('"+ widget.videos[0].videoid.screengrab +"')"
        videorowOne.appendChild(videophotoOne)
        var videoheadingsOne = document.createElement('div');
        var videonameOne = document.createElement('div');
        videonameOne.classList.add('rfrd-side-video-name')
        videonameOne.textContent = widget.videos[0].videoid.name
        var videotitleOne = document.createElement('div');
        videotitleOne.classList.add('rfrd-side-video-title')
        if(widget.videos[0].featuredid) {
          videotitleOne.textContent = widget.videos[0].featuredid.jobtitle + ', ' + widget.videos[0].featuredid.worksat
        }
        else if (widget.videos[0].videoid.jobtitle) {
          videotitleOne.textContent = widget.videos[0].videoid.jobtitle + ', ' + widget.videos[0].videoid.worksat
        }
        else {}
        videotitleOne.textContent = "Product Version"
        videoheadingsOne.appendChild(videonameOne)
        videoheadingsOne.appendChild(videotitleOne)
        videorowOne.appendChild(videoheadingsOne)
        var videotabOne = document.createElement('div')
        videotabOne.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'rfrd-w--tab-active', 'hiw4')
        videotabOne.setAttribute('data-id', widget.videos[0].videoid._id);
        var videoflyoutOne = document.createElement('div')
        videoflyoutOne.classList.add('rfrd-video-flyout-wrap')
        var videoembedOne = document.createElement('div')
        videoembedOne.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedOne.style.paddingTop = '56.17021276595745%'
        const mainvideo1 = document.createElement('video');
        mainvideo1.classList.add("rfrd-mainvid")
        mainvideo1.setAttribute('data-id', widget.videos[0].videoid._id);
        mainvideo1.style = "background-image:url('"+ widget.videos[0].videoid.screengrab +"')"
        this.mainvideo1 = mainvideo1
        this.mainvideo1.innerHTML = '<source src="'+widget.videos[0].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnOne = document.createElement('a')
        videoflyoutbtnOne.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnOne.href = widget.buttonlink
        videoflyoutbtnOne.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnOne.setAttribute('target', "_blank");
        // videoflyoutbtnOne.textContent = widget.buttoncta
        if(widget.videos[0].videoid.widgetcta) {
          videoflyoutbtnOne.href = widget.videos[0].videoid.widgetlink
          videoflyoutbtnOne.textContent = widget.videos[0].videoid.widgetcta
        }
        else {
          videoflyoutbtnOne.href = widget.buttonlink
          videoflyoutbtnOne.textContent = widget.buttoncta
        }
        videoembedOne.appendChild(this.mainvideo1)
        videoflyoutOne.appendChild(videoembedOne)
        videoflyoutOne.appendChild(videoflyoutbtnOne)
        videotabOne.appendChild(videoflyoutOne)
        const videoicons1 = document.createElement('div');
        videoicons1.classList.add('rfrd-video-icons')
        const soundcontainer1 = document.createElement('div');
        soundcontainer1.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon1 = document.createElement('div');
        soundon1.classList.add('sound-on')
        this.soundon1 = soundon1
        this.soundon1.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg1 = document.createElement('img');
        soundonimg1.classList.add('rfrd-video-icon')
        soundonimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff1 = document.createElement('div');
        soundoff1.style.display = 'none'
        soundoff1.classList.add('sound-off')
        this.soundoff1 = soundoff1
        this.soundoff1.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg1 = document.createElement('img');
        soundoffimg1.classList.add('rfrd-video-icon')
        soundoffimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon1.appendChild(soundonimg1)
        this.soundoff1.appendChild(soundoffimg1)
        soundcontainer1.appendChild(this.soundon1)
        soundcontainer1.appendChild(this.soundoff1)
        const playcontainer1 = document.createElement('div');
        playcontainer1.classList.add('rfrdplaycontainer')
        const pause1 = document.createElement('div');
        pause1.classList.add('pause-video-block')
        const pauseimg1 = document.createElement('img');
        pauseimg1.classList.add('rfrd-video-icon')
        pauseimg1.style.display = 'none'
        pauseimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg1 = pauseimg1 
        this.pauseimg1.addEventListener('click', this.pauseVid.bind(this));
        const play1 = document.createElement('div');
        play1.classList.add('play-video-block')
        const playimg1 = document.createElement('img');
        playimg1.classList.add('rfrd-video-icon')
        playimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg1 = playimg1 
        this.playimg1.addEventListener('click', this.playVid.bind(this));
        pause1.appendChild(this.pauseimg1)
        play1.appendChild(this.playimg1)
        playcontainer1.appendChild(pause1)
        playcontainer1.appendChild(play1)
        const fullscreencontainer1 = document.createElement('div');
        const fullscreenimg1 = document.createElement('img');
        fullscreenimg1.classList.add('rfrd-video-icon')
        fullscreenimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg1 = fullscreenimg1
        this.fullscreenimg1.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer1.appendChild(this.fullscreenimg1)
        videoicons1.appendChild(soundcontainer1)
        videoicons1.appendChild(playcontainer1)
        videoicons1.appendChild(fullscreencontainer1)
        videoembedOne.appendChild(videoicons1)
  
        var videorowTwo = document.createElement('a');
        videorowTwo.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowTwo.setAttribute('data-id', widget.videos[1].videoid._id);
        videorowTwo.addEventListener('click', this.showVid.bind(this), false);
        var videophotoTwo = document.createElement('div')
        videophotoTwo.classList.add('rfrd-video-photo')
        videophotoTwo.style = "background-image:url('"+ widget.videos[1].videoid.screengrab +"')"
        videorowTwo.appendChild(videophotoTwo)
        var videoheadingsTwo = document.createElement('div');
        var videonameTwo = document.createElement('div');
        videonameTwo.classList.add('rfrd-side-video-name')
        videonameTwo.textContent = widget.videos[1].videoid.name
        var videotitleTwo = document.createElement('div');
        videotitleTwo.classList.add('rfrd-side-video-title')
        if(widget.videos[1].featuredid) {
          videotitleTwo.textContent = widget.videos[1].featuredid.jobtitle + ', ' + widget.videos[1].featuredid.worksat
        }
        else if (widget.videos[1].videoid.jobtitle) {
          videotitleTwo.textContent = widget.videos[1].videoid.jobtitle + ', ' + widget.videos[1].videoid.worksat
        }
        else {}
        videotitleTwo.textContent = "User Permission"
        videoheadingsTwo.appendChild(videonameTwo)
        videoheadingsTwo.appendChild(videotitleTwo)
        videorowTwo.appendChild(videoheadingsTwo)
        var videotabTwo = document.createElement('div')
        videotabTwo.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'hiw4')
        videotabTwo.setAttribute('data-id', widget.videos[1].videoid._id);
        var videoflyoutTwo = document.createElement('div')
        videoflyoutTwo.classList.add('rfrd-video-flyout-wrap')
        var videoembedTwo = document.createElement('div')
        videoembedTwo.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedTwo.style.paddingTop = '56.17021276595745%'
        const mainvideo2 = document.createElement('video');
        mainvideo2.classList.add("rfrd-mainvid")
        mainvideo2.setAttribute('data-id', widget.videos[1].videoid._id);
        mainvideo2.style = "background-image:url('"+ widget.videos[1].videoid.screengrab +"')"
        this.mainvideo2 = mainvideo2
        this.mainvideo2.innerHTML = '<source src="'+widget.videos[1].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnTwo = document.createElement('a')
        videoflyoutbtnTwo.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnTwo.href = widget.buttonlink
        videoflyoutbtnTwo.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnTwo.setAttribute('target', "_blank");
        // videoflyoutbtnTwo.textContent = widget.buttoncta
        if(widget.videos[1].videoid.widgetcta) {
          videoflyoutbtnTwo.href = widget.videos[1].videoid.widgetlink
          videoflyoutbtnTwo.textContent = widget.videos[1].videoid.widgetcta
        }
        else {
          videoflyoutbtnTwo.href = widget.buttonlink
          videoflyoutbtnTwo.textContent = widget.buttoncta
        }
        videoembedTwo.appendChild(this.mainvideo2)
        videoflyoutTwo.appendChild(videoembedTwo)
        videoflyoutTwo.appendChild(videoflyoutbtnTwo)
        videotabTwo.appendChild(videoflyoutTwo)
        const videoicons2 = document.createElement('div');
        videoicons2.classList.add('rfrd-video-icons')
        const soundcontainer2 = document.createElement('div');
        soundcontainer2.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon2 = document.createElement('div');
        soundon2.classList.add('sound-on')
        this.soundon2 = soundon2
        this.soundon2.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg2 = document.createElement('img');
        soundonimg2.classList.add('rfrd-video-icon')
        soundonimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff2 = document.createElement('div');
        soundoff2.style.display = 'none'
        soundoff2.classList.add('sound-off')
        this.soundoff2 = soundoff2
        this.soundoff2.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg2 = document.createElement('img');
        soundoffimg2.classList.add('rfrd-video-icon')
        soundoffimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon2.appendChild(soundonimg2)
        this.soundoff2.appendChild(soundoffimg2)
        soundcontainer2.appendChild(this.soundon2)
        soundcontainer2.appendChild(this.soundoff2)
        const playcontainer2 = document.createElement('div');
        playcontainer2.classList.add('rfrdplaycontainer')
        const pause2 = document.createElement('div');
        pause2.classList.add('pause-video-block')
        const pauseimg2 = document.createElement('img');
        pauseimg2.classList.add('rfrd-video-icon')
        pauseimg2.style.display = 'none'
        pauseimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg2 = pauseimg2 
        this.pauseimg2.addEventListener('click', this.pauseVid.bind(this));
        const play2 = document.createElement('div');
        play2.classList.add('play-video-block')
        const playimg2 = document.createElement('img');
        playimg2.classList.add('rfrd-video-icon')
        playimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg2 = playimg2
        this.playimg2.addEventListener('click', this.playVid.bind(this));
        pause2.appendChild(this.pauseimg2)
        play2.appendChild(this.playimg2)
        playcontainer2.appendChild(pause2)
        playcontainer2.appendChild(play2)
        const fullscreencontainer2 = document.createElement('div');
        const fullscreenimg2 = document.createElement('img');
        fullscreenimg2.classList.add('rfrd-video-icon')
        fullscreenimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg2 = fullscreenimg2
        this.fullscreenimg2.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer2.appendChild(this.fullscreenimg2)
        videoicons2.appendChild(soundcontainer2)
        videoicons2.appendChild(playcontainer2)
        videoicons2.appendChild(fullscreencontainer2)
        videoembedTwo.appendChild(videoicons2)




        var videorowThree = document.createElement('a');
        videorowThree.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowThree.setAttribute('data-id', widget.videos[2].videoid._id);
        videorowThree.addEventListener('click', this.showVid.bind(this), false);
        var videophotoThree = document.createElement('div')
        videophotoThree.classList.add('rfrd-video-photo')
        videophotoThree.style = "background-image:url('"+ widget.videos[2].videoid.screengrab +"')"
        videorowThree.appendChild(videophotoThree)
        var videoheadingsThree = document.createElement('div');
        var videonameThree = document.createElement('div');
        videonameThree.classList.add('rfrd-side-video-name')
        videonameThree.textContent = widget.videos[2].videoid.name
        var videotitleThree = document.createElement('div');
        videotitleThree.classList.add('rfrd-side-video-title')
        if(widget.videos[2].featuredid) {
          videotitleThree.textContent = widget.videos[2].featuredid.jobtitle + ', ' + widget.videos[2].featuredid.worksat
        }
        else if (widget.videos[2].videoid.jobtitle) {
          videotitleThree.textContent = widget.videos[2].videoid.jobtitle + ', ' + widget.videos[2].videoid.worksat
        }
        else {}
        videotitleThree.textContent = "Customer Data Platform"
        videoheadingsThree.appendChild(videonameThree)
        videoheadingsThree.appendChild(videotitleThree)
        videorowThree.appendChild(videoheadingsThree)
        var videotabThree = document.createElement('div')
        videotabThree.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'hiw4')
        videotabThree.setAttribute('data-id', widget.videos[2].videoid._id);
        var videoflyoutThree = document.createElement('div')
        videoflyoutThree.classList.add('rfrd-video-flyout-wrap')
        var videoembedThree = document.createElement('div')
        videoembedThree.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedThree.style.paddingTop = '56.17021276595745%'
        const mainvideo3 = document.createElement('video');
        mainvideo3.classList.add("rfrd-mainvid")
        mainvideo3.setAttribute('data-id', widget.videos[2].videoid._id);
        mainvideo3.style = "background-image:url('"+ widget.videos[2].videoid.screengrab +"')"
        this.mainvideo3 = mainvideo3
        this.mainvideo3.innerHTML = '<source src="'+widget.videos[2].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnThree = document.createElement('a')
        videoflyoutbtnThree.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnThree.href = widget.buttonlink
        videoflyoutbtnThree.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnThree.setAttribute('target', "_blank");
        // videoflyoutbtnThree.textContent = widget.buttoncta
        if(widget.videos[2].videoid.widgetcta) {
          videoflyoutbtnThree.href = widget.videos[2].videoid.widgetlink
          videoflyoutbtnThree.textContent = widget.videos[2].videoid.widgetcta
        }
        else {
          videoflyoutbtnThree.href = widget.buttonlink
          videoflyoutbtnThree.textContent = widget.buttoncta
        }
        videoembedThree.appendChild(this.mainvideo3)
        videoflyoutThree.appendChild(videoembedThree)
        videoflyoutThree.appendChild(videoflyoutbtnThree)
        videotabThree.appendChild(videoflyoutThree)
        const videoicons3 = document.createElement('div');
        videoicons3.classList.add('rfrd-video-icons')
        const soundcontainer3 = document.createElement('div');
        soundcontainer3.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon3 = document.createElement('div');
        soundon3.classList.add('sound-on')
        this.soundon3 = soundon3
        this.soundon3.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg3 = document.createElement('img');
        soundonimg3.classList.add('rfrd-video-icon')
        soundonimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff3 = document.createElement('div');
        soundoff3.style.display = 'none'
        soundoff3.classList.add('sound-off')
        this.soundoff3 = soundoff3
        this.soundoff3.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg3 = document.createElement('img');
        soundoffimg3.classList.add('rfrd-video-icon')
        soundoffimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon3.appendChild(soundonimg3)
        this.soundoff3.appendChild(soundoffimg3)
        soundcontainer3.appendChild(this.soundon3)
        soundcontainer3.appendChild(this.soundoff3)
        const playcontainer3 = document.createElement('div');
        playcontainer3.classList.add('rfrdplaycontainer')
        const pause3 = document.createElement('div');
        pause3.classList.add('pause-video-block')
        const pauseimg3 = document.createElement('img');
        pauseimg3.classList.add('rfrd-video-icon')
        pauseimg3.style.display = 'none'
        pauseimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg3 = pauseimg3
        this.pauseimg3.addEventListener('click', this.pauseVid.bind(this));
        const play3 = document.createElement('div');
        play3.classList.add('play-video-block')
        const playimg3 = document.createElement('img');
        playimg3.classList.add('rfrd-video-icon')
        playimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg3 = playimg3
        this.playimg3.addEventListener('click', this.playVid.bind(this));
        pause3.appendChild(this.pauseimg3)
        play3.appendChild(this.playimg3)
        playcontainer3.appendChild(pause3)
        playcontainer3.appendChild(play3)
        const fullscreencontainer3 = document.createElement('div');
        const fullscreenimg3 = document.createElement('img');
        fullscreenimg3.classList.add('rfrd-video-icon')
        fullscreenimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg3 = fullscreenimg3
        this.fullscreenimg3.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer3.appendChild(this.fullscreenimg3)
        videoicons3.appendChild(soundcontainer3)
        videoicons3.appendChild(playcontainer3)
        videoicons3.appendChild(fullscreencontainer3)
        videoembedThree.appendChild(videoicons3)

        videotabsmenu.appendChild(videorowOne)
        videotabsmenu.appendChild(videorowTwo)
        videotabsmenu.appendChild(videorowThree)
        tabscontent.appendChild(videotabOne)
        tabscontent.appendChild(videotabTwo)
        tabscontent.appendChild(videotabThree)
        videotabs.appendChild(videotabsmenu)
        videotabs.appendChild(tabscontent)
        videosTop.appendChild(cheerheader)
        videosTop.appendChild(videotabs)
        cheerwrap.appendChild(videosTop)
        cheerwrap.appendChild(builtwithrfrd)
      } 
  
      if (counter == 4) {
        var videorowOne = document.createElement('a');
        videorowOne.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowOne.setAttribute('data-id', widget.videos[0].videoid._id);
        videorowOne.addEventListener('click', this.showVid.bind(this), false);
        var videophotoOne = document.createElement('div')
        videophotoOne.classList.add('rfrd-video-photo')
        videophotoOne.style = "background-image:url('"+ widget.videos[0].videoid.screengrab +"')"
        videorowOne.appendChild(videophotoOne)
        var videoheadingsOne = document.createElement('div');
        var videonameOne = document.createElement('div');
        videonameOne.classList.add('rfrd-side-video-name')
        videonameOne.textContent = widget.videos[0].videoid.name
        var videotitleOne = document.createElement('div');
        videotitleOne.classList.add('rfrd-side-video-title')
        if(widget.videos[0].featuredid) {
          videotitleOne.textContent = widget.videos[0].featuredid.jobtitle + ', ' + widget.videos[0].featuredid.worksat
        }
        else if (widget.videos[0].videoid.jobtitle) {
          videotitleOne.textContent = widget.videos[0].videoid.jobtitle + ', ' + widget.videos[0].videoid.worksat
        }
        else {}
        videoheadingsOne.appendChild(videonameOne)
        videoheadingsOne.appendChild(videotitleOne)
        videorowOne.appendChild(videoheadingsOne)
        var videotabOne = document.createElement('div')
        videotabOne.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'rfrd-w--tab-active', 'hiw4')
        videotabOne.setAttribute('data-id', widget.videos[0].videoid._id);
        var videoflyoutOne = document.createElement('div')
        videoflyoutOne.classList.add('rfrd-video-flyout-wrap')
        var videoembedOne = document.createElement('div')
        videoembedOne.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedOne.style.paddingTop = '56.17021276595745%'
        const mainvideo1 = document.createElement('video');
        mainvideo1.classList.add("rfrd-mainvid")
        mainvideo1.setAttribute('data-id', widget.videos[0].videoid._id);
        mainvideo1.style = "background-image:url('"+ widget.videos[0].videoid.screengrab +"')"
        this.mainvideo1 = mainvideo1
        this.mainvideo1.innerHTML = '<source src="'+widget.videos[0].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnOne = document.createElement('a')
        videoflyoutbtnOne.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnOne.href = widget.buttonlink
        videoflyoutbtnOne.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnOne.setAttribute('target', "_blank");
        // videoflyoutbtnOne.textContent = widget.buttoncta
        if(widget.videos[0].videoid.widgetcta) {
          videoflyoutbtnOne.href = widget.videos[0].videoid.widgetlink
          videoflyoutbtnOne.textContent = widget.videos[0].videoid.widgetcta
        }
        else {
          videoflyoutbtnOne.href = widget.buttonlink
          videoflyoutbtnOne.textContent = widget.buttoncta
        }
        videoembedOne.appendChild(this.mainvideo1)
        videoflyoutOne.appendChild(videoembedOne)
        videoflyoutOne.appendChild(videoflyoutbtnOne)
        videotabOne.appendChild(videoflyoutOne)
        const videoicons1 = document.createElement('div');
        videoicons1.classList.add('rfrd-video-icons')
        const soundcontainer1 = document.createElement('div');
        soundcontainer1.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon1 = document.createElement('div');
        soundon1.classList.add('sound-on')
        this.soundon1 = soundon1
        this.soundon1.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg1 = document.createElement('img');
        soundonimg1.classList.add('rfrd-video-icon')
        soundonimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff1 = document.createElement('div');
        soundoff1.style.display = 'none'
        soundoff1.classList.add('sound-off')
        this.soundoff1 = soundoff1
        this.soundoff1.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg1 = document.createElement('img');
        soundoffimg1.classList.add('rfrd-video-icon')
        soundoffimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon1.appendChild(soundonimg1)
        this.soundoff1.appendChild(soundoffimg1)
        soundcontainer1.appendChild(this.soundon1)
        soundcontainer1.appendChild(this.soundoff1)
        const playcontainer1 = document.createElement('div');
        playcontainer1.classList.add('rfrdplaycontainer')
        const pause1 = document.createElement('div');
        pause1.classList.add('pause-video-block')
        const pauseimg1 = document.createElement('img');
        pauseimg1.classList.add('rfrd-video-icon')
        pauseimg1.style.display = 'none'
        pauseimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg1 = pauseimg1 
        this.pauseimg1.addEventListener('click', this.pauseVid.bind(this));
        const play1 = document.createElement('div');
        play1.classList.add('play-video-block')
        const playimg1 = document.createElement('img');
        playimg1.classList.add('rfrd-video-icon')
        playimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg1 = playimg1 
        this.playimg1.addEventListener('click', this.playVid.bind(this));
        pause1.appendChild(this.pauseimg1)
        play1.appendChild(this.playimg1)
        playcontainer1.appendChild(pause1)
        playcontainer1.appendChild(play1)
        const fullscreencontainer1 = document.createElement('div');
        const fullscreenimg1 = document.createElement('img');
        fullscreenimg1.classList.add('rfrd-video-icon')
        fullscreenimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg1 = fullscreenimg1
        this.fullscreenimg1.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer1.appendChild(this.fullscreenimg1)
        videoicons1.appendChild(soundcontainer1)
        videoicons1.appendChild(playcontainer1)
        videoicons1.appendChild(fullscreencontainer1)
        videoembedOne.appendChild(videoicons1)
  
        var videorowTwo = document.createElement('a');
        videorowTwo.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowTwo.setAttribute('data-id', widget.videos[1].videoid._id);
        videorowTwo.addEventListener('click', this.showVid.bind(this), false);
        var videophotoTwo = document.createElement('div')
        videophotoTwo.classList.add('rfrd-video-photo')
        videophotoTwo.style = "background-image:url('"+ widget.videos[1].videoid.screengrab +"')"
        videorowTwo.appendChild(videophotoTwo)
        var videoheadingsTwo = document.createElement('div');
        var videonameTwo = document.createElement('div');
        videonameTwo.classList.add('rfrd-side-video-name')
        videonameTwo.textContent = widget.videos[1].videoid.name
        var videotitleTwo = document.createElement('div');
        videotitleTwo.classList.add('rfrd-side-video-title')
        if(widget.videos[1].featuredid) {
          videotitleTwo.textContent = widget.videos[1].featuredid.jobtitle + ', ' + widget.videos[1].featuredid.worksat
        }
        else if (widget.videos[1].videoid.jobtitle) {
          videotitleTwo.textContent = widget.videos[1].videoid.jobtitle + ', ' + widget.videos[1].videoid.worksat
        }
        else {}
        videoheadingsTwo.appendChild(videonameTwo)
        videoheadingsTwo.appendChild(videotitleTwo)
        videorowTwo.appendChild(videoheadingsTwo)
        var videotabTwo = document.createElement('div')
        videotabTwo.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'hiw4')
        videotabTwo.setAttribute('data-id', widget.videos[1].videoid._id);
        var videoflyoutTwo = document.createElement('div')
        videoflyoutTwo.classList.add('rfrd-video-flyout-wrap')
        var videoembedTwo = document.createElement('div')
        videoembedTwo.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedTwo.style.paddingTop = '56.17021276595745%'
        const mainvideo2 = document.createElement('video');
        mainvideo2.classList.add("rfrd-mainvid")
        mainvideo2.setAttribute('data-id', widget.videos[1].videoid._id);
        mainvideo2.style = "background-image:url('"+ widget.videos[1].videoid.screengrab +"')"
        this.mainvideo2 = mainvideo2
        this.mainvideo2.innerHTML = '<source src="'+widget.videos[1].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnTwo = document.createElement('a')
        videoflyoutbtnTwo.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnTwo.href = widget.buttonlink
        videoflyoutbtnTwo.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnTwo.setAttribute('target', "_blank");
        // videoflyoutbtnTwo.textContent = widget.buttoncta
        if(widget.videos[1].videoid.widgetcta) {
          videoflyoutbtnTwo.href = widget.videos[1].videoid.widgetlink
          videoflyoutbtnTwo.textContent = widget.videos[1].videoid.widgetcta
        }
        else {
          videoflyoutbtnTwo.href = widget.buttonlink
          videoflyoutbtnTwo.textContent = widget.buttoncta
        }
        videoembedTwo.appendChild(this.mainvideo2)
        videoflyoutTwo.appendChild(videoembedTwo)
        videoflyoutTwo.appendChild(videoflyoutbtnTwo)
        videotabTwo.appendChild(videoflyoutTwo)
        const videoicons2 = document.createElement('div');
        videoicons2.classList.add('rfrd-video-icons')
        const soundcontainer2 = document.createElement('div');
        soundcontainer2.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon2 = document.createElement('div');
        soundon2.classList.add('sound-on')
        this.soundon2 = soundon2
        this.soundon2.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg2 = document.createElement('img');
        soundonimg2.classList.add('rfrd-video-icon')
        soundonimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff2 = document.createElement('div');
        soundoff2.style.display = 'none'
        soundoff2.classList.add('sound-off')
        this.soundoff2 = soundoff2
        this.soundoff2.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg2 = document.createElement('img');
        soundoffimg2.classList.add('rfrd-video-icon')
        soundoffimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon2.appendChild(soundonimg2)
        this.soundoff2.appendChild(soundoffimg2)
        soundcontainer2.appendChild(this.soundon2)
        soundcontainer2.appendChild(this.soundoff2)
        const playcontainer2 = document.createElement('div');
        playcontainer2.classList.add('rfrdplaycontainer')
        const pause2 = document.createElement('div');
        pause2.classList.add('pause-video-block')
        const pauseimg2 = document.createElement('img');
        pauseimg2.classList.add('rfrd-video-icon')
        pauseimg2.style.display = 'none'
        pauseimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg2 = pauseimg2 
        this.pauseimg2.addEventListener('click', this.pauseVid.bind(this));
        const play2 = document.createElement('div');
        play2.classList.add('play-video-block')
        const playimg2 = document.createElement('img');
        playimg2.classList.add('rfrd-video-icon')
        playimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg2 = playimg2
        this.playimg2.addEventListener('click', this.playVid.bind(this));
        pause2.appendChild(this.pauseimg2)
        play2.appendChild(this.playimg2)
        playcontainer2.appendChild(pause2)
        playcontainer2.appendChild(play2)
        const fullscreencontainer2 = document.createElement('div');
        const fullscreenimg2 = document.createElement('img');
        fullscreenimg2.classList.add('rfrd-video-icon')
        fullscreenimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg2 = fullscreenimg2
        this.fullscreenimg2.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer2.appendChild(this.fullscreenimg2)
        videoicons2.appendChild(soundcontainer2)
        videoicons2.appendChild(playcontainer2)
        videoicons2.appendChild(fullscreencontainer2)
        videoembedTwo.appendChild(videoicons2)

        var videorowThree = document.createElement('a');
        videorowThree.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowThree.setAttribute('data-id', widget.videos[2].videoid._id);
        videorowThree.addEventListener('click', this.showVid.bind(this), false);
        var videophotoThree = document.createElement('div')
        videophotoThree.classList.add('rfrd-video-photo')
        videophotoThree.style = "background-image:url('"+ widget.videos[2].videoid.screengrab +"')"
        videorowThree.appendChild(videophotoThree)
        var videoheadingsThree = document.createElement('div');
        var videonameThree = document.createElement('div');
        videonameThree.classList.add('rfrd-side-video-name')
        videonameThree.textContent = widget.videos[2].videoid.name
        var videotitleThree = document.createElement('div');
        videotitleThree.classList.add('rfrd-side-video-title')
        if(widget.videos[2].featuredid) {
          videotitleThree.textContent = widget.videos[2].featuredid.jobtitle + ', ' + widget.videos[2].featuredid.worksat
        }
        else if (widget.videos[2].videoid.jobtitle) {
          videotitleThree.textContent = widget.videos[2].videoid.jobtitle + ', ' + widget.videos[2].videoid.worksat
        }
        else {}
        videoheadingsThree.appendChild(videonameThree)
        videoheadingsThree.appendChild(videotitleThree)
        videorowThree.appendChild(videoheadingsThree)
        var videotabThree = document.createElement('div')
        videotabThree.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'hiw4')
        videotabThree.setAttribute('data-id', widget.videos[2].videoid._id);
        var videoflyoutThree = document.createElement('div')
        videoflyoutThree.classList.add('rfrd-video-flyout-wrap')
        var videoembedThree = document.createElement('div')
        videoembedThree.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedThree.style.paddingTop = '56.17021276595745%'
        const mainvideo3 = document.createElement('video');
        mainvideo3.classList.add("rfrd-mainvid")
        mainvideo3.setAttribute('data-id', widget.videos[2].videoid._id);
        mainvideo3.style = "background-image:url('"+ widget.videos[2].videoid.screengrab +"')"
        this.mainvideo3 = mainvideo3
        this.mainvideo3.innerHTML = '<source src="'+widget.videos[2].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnThree = document.createElement('a')
        videoflyoutbtnThree.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnThree.href = widget.buttonlink
        videoflyoutbtnThree.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnThree.setAttribute('target', "_blank");
        // videoflyoutbtnThree.textContent = widget.buttoncta
        if(widget.videos[2].videoid.widgetcta) {
          videoflyoutbtnThree.href = widget.videos[2].videoid.widgetlink
          videoflyoutbtnThree.textContent = widget.videos[2].videoid.widgetcta
        }
        else {
          videoflyoutbtnThree.href = widget.buttonlink
          videoflyoutbtnThree.textContent = widget.buttoncta
        }
        videoembedThree.appendChild(this.mainvideo3)
        videoflyoutThree.appendChild(videoembedThree)
        videoflyoutThree.appendChild(videoflyoutbtnThree)
        videotabThree.appendChild(videoflyoutThree)
        const videoicons3 = document.createElement('div');
        videoicons3.classList.add('rfrd-video-icons')
        const soundcontainer3 = document.createElement('div');
        soundcontainer3.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon3 = document.createElement('div');
        soundon3.classList.add('sound-on')
        this.soundon3 = soundon3
        this.soundon3.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg3 = document.createElement('img');
        soundonimg3.classList.add('rfrd-video-icon')
        soundonimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff3 = document.createElement('div');
        soundoff3.style.display = 'none'
        soundoff3.classList.add('sound-off')
        this.soundoff3 = soundoff3
        this.soundoff3.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg3 = document.createElement('img');
        soundoffimg3.classList.add('rfrd-video-icon')
        soundoffimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon3.appendChild(soundonimg3)
        this.soundoff3.appendChild(soundoffimg3)
        soundcontainer3.appendChild(this.soundon3)
        soundcontainer3.appendChild(this.soundoff3)
        const playcontainer3 = document.createElement('div');
        playcontainer3.classList.add('rfrdplaycontainer')
        const pause3 = document.createElement('div');
        pause3.classList.add('pause-video-block')
        const pauseimg3 = document.createElement('img');
        pauseimg3.classList.add('rfrd-video-icon')
        pauseimg3.style.display = 'none'
        pauseimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg3 = pauseimg3
        this.pauseimg3.addEventListener('click', this.pauseVid.bind(this));
        const play3 = document.createElement('div');
        play3.classList.add('play-video-block')
        const playimg3 = document.createElement('img');
        playimg3.classList.add('rfrd-video-icon')
        playimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg3 = playimg3
        this.playimg3.addEventListener('click', this.playVid.bind(this));
        pause3.appendChild(this.pauseimg3)
        play3.appendChild(this.playimg3)
        playcontainer3.appendChild(pause3)
        playcontainer3.appendChild(play3)
        const fullscreencontainer3 = document.createElement('div');
        const fullscreenimg3 = document.createElement('img');
        fullscreenimg3.classList.add('rfrd-video-icon')
        fullscreenimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg3 = fullscreenimg3
        this.fullscreenimg3.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer3.appendChild(this.fullscreenimg3)
        videoicons3.appendChild(soundcontainer3)
        videoicons3.appendChild(playcontainer3)
        videoicons3.appendChild(fullscreencontainer3)
        videoembedThree.appendChild(videoicons3)

        var videorowFour = document.createElement('a');
        videorowFour.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowFour.setAttribute('data-id', widget.videos[3].videoid._id);
        videorowFour.addEventListener('click', this.showVid.bind(this), false);
        var videophotoFour = document.createElement('div')
        videophotoFour.classList.add('rfrd-video-photo')
        videophotoFour.style = "background-image:url('"+ widget.videos[3].videoid.screengrab +"')"
        videorowFour.appendChild(videophotoFour)
        var videoheadingsFour = document.createElement('div');
        var videonameFour = document.createElement('div');
        videonameFour.classList.add('rfrd-side-video-name')
        videonameFour.textContent = widget.videos[3].videoid.name
        var videotitleFour = document.createElement('div');
        videotitleFour.classList.add('rfrd-side-video-title')
        if(widget.videos[3].featuredid) {
          videotitleFour.textContent = widget.videos[3].featuredid.jobtitle + ', ' + widget.videos[3].featuredid.worksat
        }
        else if (widget.videos[3].videoid.jobtitle) {
          videotitleFour.textContent = widget.videos[3].videoid.jobtitle + ', ' + widget.videos[3].videoid.worksat
        }
        else {}
        videoheadingsFour.appendChild(videonameFour)
        videoheadingsFour.appendChild(videotitleFour)
        videorowFour.appendChild(videoheadingsFour)
        var videotabFour = document.createElement('div')
        videotabFour.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'hiw4')
        videotabFour.setAttribute('data-id', widget.videos[3].videoid._id);
        var videoflyoutFour = document.createElement('div')
        videoflyoutFour.classList.add('rfrd-video-flyout-wrap')
        var videoembedFour = document.createElement('div')
        videoembedFour.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedFour.style.paddingTop = '56.17021276595745%'
        const mainvideo4 = document.createElement('video');
        mainvideo4.classList.add("rfrd-mainvid")
        mainvideo4.setAttribute('data-id', widget.videos[3].videoid._id);
        mainvideo4.style = "background-image:url('"+ widget.videos[3].videoid.screengrab +"')"
        this.mainvideo4 = mainvideo4
        this.mainvideo4.innerHTML = '<source src="'+widget.videos[3].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnFour = document.createElement('a')
        videoflyoutbtnFour.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnFour.href = widget.buttonlink
        videoflyoutbtnFour.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnFour.setAttribute('target', "_blank");
        // videoflyoutbtnFour.textContent = widget.buttoncta
        if(widget.videos[3].videoid.widgetcta) {
          videoflyoutbtnFour.href = widget.videos[3].videoid.widgetlink
          videoflyoutbtnFour.textContent = widget.videos[3].videoid.widgetcta
        }
        else {
          videoflyoutbtnFour.href = widget.buttonlink
          videoflyoutbtnFour.textContent = widget.buttoncta
        }
        videoembedFour.appendChild(this.mainvideo4)
        videoflyoutFour.appendChild(videoembedFour)
        videoflyoutFour.appendChild(videoflyoutbtnFour)
        videotabFour.appendChild(videoflyoutFour)
        const videoicons4 = document.createElement('div');
        videoicons4.classList.add('rfrd-video-icons')
        const soundcontainer4 = document.createElement('div');
        soundcontainer4.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon4 = document.createElement('div');
        soundon4.classList.add('sound-on')
        this.soundon4 = soundon4
        this.soundon4.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg4 = document.createElement('img');
        soundonimg4.classList.add('rfrd-video-icon')
        soundonimg4.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff4 = document.createElement('div');
        soundoff4.style.display = 'none'
        soundoff4.classList.add('sound-off')
        this.soundoff4 = soundoff4
        this.soundoff4.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg4 = document.createElement('img');
        soundoffimg4.classList.add('rfrd-video-icon')
        soundoffimg4.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon4.appendChild(soundonimg4)
        this.soundoff4.appendChild(soundoffimg4)
        soundcontainer4.appendChild(this.soundon4)
        soundcontainer4.appendChild(this.soundoff4)
        const playcontainer4 = document.createElement('div');
        playcontainer4.classList.add('rfrdplaycontainer')
        const pause4 = document.createElement('div');
        pause4.classList.add('pause-video-block')
        const pauseimg4 = document.createElement('img');
        pauseimg4.classList.add('rfrd-video-icon')
        pauseimg4.style.display = 'none'
        pauseimg4.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg4 = pauseimg4
        this.pauseimg4.addEventListener('click', this.pauseVid.bind(this));
        const play4 = document.createElement('div');
        play4.classList.add('play-video-block')
        const playimg4 = document.createElement('img');
        playimg4.classList.add('rfrd-video-icon')
        playimg4.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg4 = playimg4
        this.playimg4.addEventListener('click', this.playVid.bind(this));
        pause4.appendChild(this.pauseimg4)
        play4.appendChild(this.playimg4)
        playcontainer4.appendChild(pause4)
        playcontainer4.appendChild(play4)
        const fullscreencontainer4 = document.createElement('div');
        const fullscreenimg4 = document.createElement('img');
        fullscreenimg4.classList.add('rfrd-video-icon')
        fullscreenimg4.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg4 = fullscreenimg4
        this.fullscreenimg4.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer4.appendChild(this.fullscreenimg4)
        videoicons4.appendChild(soundcontainer4)
        videoicons4.appendChild(playcontainer4)
        videoicons4.appendChild(fullscreencontainer4)
        videoembedFour.appendChild(videoicons4)
  
        videotabsmenu.appendChild(videorowOne)
        videotabsmenu.appendChild(videorowTwo)
        videotabsmenu.appendChild(videorowThree)
        videotabsmenu.appendChild(videorowFour)
        tabscontent.appendChild(videotabOne)
        tabscontent.appendChild(videotabTwo)
        tabscontent.appendChild(videotabThree)
        tabscontent.appendChild(videotabFour)
        videotabs.appendChild(videotabsmenu)
        videotabs.appendChild(tabscontent)
        videosTop.appendChild(cheerheader)
        videosTop.appendChild(videotabs)
        cheerwrap.appendChild(videosTop)
        cheerwrap.appendChild(builtwithrfrd)
      } 
  
      if (counter == 5) {
        var videorowOne = document.createElement('a');
        videorowOne.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowOne.setAttribute('data-id', widget.videos[0].videoid._id);
        videorowOne.addEventListener('click', this.showVid.bind(this), false);
        var videophotoOne = document.createElement('div')
        videophotoOne.classList.add('rfrd-video-photo')
        videophotoOne.style = "background-image:url('"+ widget.videos[0].videoid.screengrab +"')"
        videorowOne.appendChild(videophotoOne)
        var videoheadingsOne = document.createElement('div');
        var videonameOne = document.createElement('div');
        videonameOne.classList.add('rfrd-side-video-name')
        videonameOne.textContent = widget.videos[0].videoid.name
        var videotitleOne = document.createElement('div');
        videotitleOne.classList.add('rfrd-side-video-title')
        if(widget.videos[0].featuredid) {
          videotitleOne.textContent = widget.videos[0].featuredid.jobtitle + ', ' + widget.videos[0].featuredid.worksat
        }
        else if (widget.videos[0].videoid.jobtitle) {
          videotitleOne.textContent = widget.videos[0].videoid.jobtitle + ', ' + widget.videos[0].videoid.worksat
        }
        else {}
        videoheadingsOne.appendChild(videonameOne)
        videoheadingsOne.appendChild(videotitleOne)
        videorowOne.appendChild(videoheadingsOne)
        var videotabOne = document.createElement('div')
        videotabOne.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'rfrd-w--tab-active', 'hiw4')
        videotabOne.setAttribute('data-id', widget.videos[0].videoid._id);
        var videoflyoutOne = document.createElement('div')
        videoflyoutOne.classList.add('rfrd-video-flyout-wrap')
        var videoembedOne = document.createElement('div')
        videoembedOne.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedOne.style.paddingTop = '56.17021276595745%'
        const mainvideo1 = document.createElement('video');
        mainvideo1.classList.add("rfrd-mainvid")
        mainvideo1.setAttribute('data-id', widget.videos[0].videoid._id);
        mainvideo1.style = "background-image:url('"+ widget.videos[0].videoid.screengrab +"')"
        this.mainvideo1 = mainvideo1
        this.mainvideo1.innerHTML = '<source src="'+widget.videos[0].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnOne = document.createElement('a')
        videoflyoutbtnOne.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnOne.href = widget.buttonlink
        videoflyoutbtnOne.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnOne.setAttribute('target', "_blank");
        // videoflyoutbtnOne.textContent = widget.buttoncta
        if(widget.videos[0].videoid.widgetcta) {
          videoflyoutbtnOne.href = widget.videos[0].videoid.widgetlink
          videoflyoutbtnOne.textContent = widget.videos[0].videoid.widgetcta
        }
        else {
          videoflyoutbtnOne.href = widget.buttonlink
          videoflyoutbtnOne.textContent = widget.buttoncta
        }
        videoembedOne.appendChild(this.mainvideo1)
        videoflyoutOne.appendChild(videoembedOne)
        videoflyoutOne.appendChild(videoflyoutbtnOne)
        videotabOne.appendChild(videoflyoutOne)
        const videoicons1 = document.createElement('div');
        videoicons1.classList.add('rfrd-video-icons')
        const soundcontainer1 = document.createElement('div');
        soundcontainer1.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon1 = document.createElement('div');
        soundon1.classList.add('sound-on')
        this.soundon1 = soundon1
        this.soundon1.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg1 = document.createElement('img');
        soundonimg1.classList.add('rfrd-video-icon')
        soundonimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff1 = document.createElement('div');
        soundoff1.style.display = 'none'
        soundoff1.classList.add('sound-off')
        this.soundoff1 = soundoff1
        this.soundoff1.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg1 = document.createElement('img');
        soundoffimg1.classList.add('rfrd-video-icon')
        soundoffimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon1.appendChild(soundonimg1)
        this.soundoff1.appendChild(soundoffimg1)
        soundcontainer1.appendChild(this.soundon1)
        soundcontainer1.appendChild(this.soundoff1)
        const playcontainer1 = document.createElement('div');
        playcontainer1.classList.add('rfrdplaycontainer')
        const pause1 = document.createElement('div');
        pause1.classList.add('pause-video-block')
        const pauseimg1 = document.createElement('img');
        pauseimg1.classList.add('rfrd-video-icon')
        pauseimg1.style.display = 'none'
        pauseimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg1 = pauseimg1 
        this.pauseimg1.addEventListener('click', this.pauseVid.bind(this));
        const play1 = document.createElement('div');
        play1.classList.add('play-video-block')
        const playimg1 = document.createElement('img');
        playimg1.classList.add('rfrd-video-icon')
        playimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg1 = playimg1 
        this.playimg1.addEventListener('click', this.playVid.bind(this));
        pause1.appendChild(this.pauseimg1)
        play1.appendChild(this.playimg1)
        playcontainer1.appendChild(pause1)
        playcontainer1.appendChild(play1)
        const fullscreencontainer1 = document.createElement('div');
        const fullscreenimg1 = document.createElement('img');
        fullscreenimg1.classList.add('rfrd-video-icon')
        fullscreenimg1.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg1 = fullscreenimg1
        this.fullscreenimg1.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer1.appendChild(this.fullscreenimg1)
        videoicons1.appendChild(soundcontainer1)
        videoicons1.appendChild(playcontainer1)
        videoicons1.appendChild(fullscreencontainer1)
        videoembedOne.appendChild(videoicons1)
  
        var videorowTwo = document.createElement('a');
        videorowTwo.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowTwo.setAttribute('data-id', widget.videos[1].videoid._id);
        videorowTwo.addEventListener('click', this.showVid.bind(this), false);
        var videophotoTwo = document.createElement('div')
        videophotoTwo.classList.add('rfrd-video-photo')
        videophotoTwo.style = "background-image:url('"+ widget.videos[1].videoid.screengrab +"')"
        videorowTwo.appendChild(videophotoTwo)
        var videoheadingsTwo = document.createElement('div');
        var videonameTwo = document.createElement('div');
        videonameTwo.classList.add('rfrd-side-video-name')
        videonameTwo.textContent = widget.videos[1].videoid.name
        var videotitleTwo = document.createElement('div');
        videotitleTwo.classList.add('rfrd-side-video-title')
        if(widget.videos[1].featuredid) {
          videotitleTwo.textContent = widget.videos[1].featuredid.jobtitle + ', ' + widget.videos[1].featuredid.worksat
        }
        else if (widget.videos[1].videoid.jobtitle) {
          videotitleTwo.textContent = widget.videos[1].videoid.jobtitle + ', ' + widget.videos[1].videoid.worksat
        }
        else {}
        videoheadingsTwo.appendChild(videonameTwo)
        videoheadingsTwo.appendChild(videotitleTwo)
        videorowTwo.appendChild(videoheadingsTwo)
        var videotabTwo = document.createElement('div')
        videotabTwo.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'hiw4')
        videotabTwo.setAttribute('data-id', widget.videos[1].videoid._id);
        var videoflyoutTwo = document.createElement('div')
        videoflyoutTwo.classList.add('rfrd-video-flyout-wrap')
        var videoembedTwo = document.createElement('div')
        videoembedTwo.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedTwo.style.paddingTop = '56.17021276595745%'
        const mainvideo2 = document.createElement('video');
        mainvideo2.classList.add("rfrd-mainvid")
        mainvideo2.setAttribute('data-id', widget.videos[1].videoid._id);
        mainvideo2.style = "background-image:url('"+ widget.videos[1].videoid.screengrab +"')"
        this.mainvideo2 = mainvideo2
        this.mainvideo2.innerHTML = '<source src="'+widget.videos[1].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnTwo = document.createElement('a')
        videoflyoutbtnTwo.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnTwo.href = widget.buttonlink
        videoflyoutbtnTwo.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnTwo.setAttribute('target', "_blank");
        // videoflyoutbtnTwo.textContent = widget.buttoncta
        if(widget.videos[1].videoid.widgetcta) {
          videoflyoutbtnTwo.href = widget.videos[1].videoid.widgetlink
          videoflyoutbtnTwo.textContent = widget.videos[1].videoid.widgetcta
        }
        else {
          videoflyoutbtnTwo.href = widget.buttonlink
          videoflyoutbtnTwo.textContent = widget.buttoncta
        }
        videoembedTwo.appendChild(this.mainvideo2)
        videoflyoutTwo.appendChild(videoembedTwo)
        videoflyoutTwo.appendChild(videoflyoutbtnTwo)
        videotabTwo.appendChild(videoflyoutTwo)
        const videoicons2 = document.createElement('div');
        videoicons2.classList.add('rfrd-video-icons')
        const soundcontainer2 = document.createElement('div');
        soundcontainer2.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon2 = document.createElement('div');
        soundon2.classList.add('sound-on')
        this.soundon2 = soundon2
        this.soundon2.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg2 = document.createElement('img');
        soundonimg2.classList.add('rfrd-video-icon')
        soundonimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff2 = document.createElement('div');
        soundoff2.style.display = 'none'
        soundoff2.classList.add('sound-off')
        this.soundoff2 = soundoff2
        this.soundoff2.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg2 = document.createElement('img');
        soundoffimg2.classList.add('rfrd-video-icon')
        soundoffimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon2.appendChild(soundonimg2)
        this.soundoff2.appendChild(soundoffimg2)
        soundcontainer2.appendChild(this.soundon2)
        soundcontainer2.appendChild(this.soundoff2)
        const playcontainer2 = document.createElement('div');
        playcontainer2.classList.add('rfrdplaycontainer')
        const pause2 = document.createElement('div');
        pause2.classList.add('pause-video-block')
        const pauseimg2 = document.createElement('img');
        pauseimg2.classList.add('rfrd-video-icon')
        pauseimg2.style.display = 'none'
        pauseimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg2 = pauseimg2 
        this.pauseimg2.addEventListener('click', this.pauseVid.bind(this));
        const play2 = document.createElement('div');
        play2.classList.add('play-video-block')
        const playimg2 = document.createElement('img');
        playimg2.classList.add('rfrd-video-icon')
        playimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg2 = playimg2
        this.playimg2.addEventListener('click', this.playVid.bind(this));
        pause2.appendChild(this.pauseimg2)
        play2.appendChild(this.playimg2)
        playcontainer2.appendChild(pause2)
        playcontainer2.appendChild(play2)
        const fullscreencontainer2 = document.createElement('div');
        const fullscreenimg2 = document.createElement('img');
        fullscreenimg2.classList.add('rfrd-video-icon')
        fullscreenimg2.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg2 = fullscreenimg2
        this.fullscreenimg2.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer2.appendChild(this.fullscreenimg2)
        videoicons2.appendChild(soundcontainer2)
        videoicons2.appendChild(playcontainer2)
        videoicons2.appendChild(fullscreencontainer2)
        videoembedTwo.appendChild(videoicons2)

        var videorowThree = document.createElement('a');
        videorowThree.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowThree.setAttribute('data-id', widget.videos[2].videoid._id);
        videorowThree.addEventListener('click', this.showVid.bind(this), false);
        var videophotoThree = document.createElement('div')
        videophotoThree.classList.add('rfrd-video-photo')
        videophotoThree.style = "background-image:url('"+ widget.videos[2].videoid.screengrab +"')"
        videorowThree.appendChild(videophotoThree)
        var videoheadingsThree = document.createElement('div');
        var videonameThree = document.createElement('div');
        videonameThree.classList.add('rfrd-side-video-name')
        videonameThree.textContent = widget.videos[2].videoid.name
        var videotitleThree = document.createElement('div');
        videotitleThree.classList.add('rfrd-side-video-title')
        if(widget.videos[2].featuredid) {
          videotitleThree.textContent = widget.videos[2].featuredid.jobtitle + ', ' + widget.videos[2].featuredid.worksat
        }
        else if (widget.videos[2].videoid.jobtitle) {
          videotitleThree.textContent = widget.videos[2].videoid.jobtitle + ', ' + widget.videos[2].videoid.worksat
        }
        else {}
        videoheadingsThree.appendChild(videonameThree)
        videoheadingsThree.appendChild(videotitleThree)
        videorowThree.appendChild(videoheadingsThree)
        var videotabThree = document.createElement('div')
        videotabThree.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'hiw4')
        videotabThree.setAttribute('data-id', widget.videos[2].videoid._id);
        var videoflyoutThree = document.createElement('div')
        videoflyoutThree.classList.add('rfrd-video-flyout-wrap')
        var videoembedThree = document.createElement('div')
        videoembedThree.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedThree.style.paddingTop = '56.17021276595745%'
        const mainvideo3 = document.createElement('video');
        mainvideo3.classList.add("rfrd-mainvid")
        mainvideo3.setAttribute('data-id', widget.videos[2].videoid._id);
        mainvideo3.style = "background-image:url('"+ widget.videos[2].videoid.screengrab +"')"
        this.mainvideo3 = mainvideo3
        this.mainvideo3.innerHTML = '<source src="'+widget.videos[2].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnThree = document.createElement('a')
        videoflyoutbtnThree.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnThree.href = widget.buttonlink
        videoflyoutbtnThree.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnThree.setAttribute('target', "_blank");
        // videoflyoutbtnThree.textContent = widget.buttoncta
        if(widget.videos[2].videoid.widgetcta) {
          videoflyoutbtnThree.href = widget.videos[2].videoid.widgetlink
          videoflyoutbtnThree.textContent = widget.videos[2].videoid.widgetcta
        }
        else {
          videoflyoutbtnThree.href = widget.buttonlink
          videoflyoutbtnThree.textContent = widget.buttoncta
        }
        videoembedThree.appendChild(this.mainvideo3)
        videoflyoutThree.appendChild(videoembedThree)
        videoflyoutThree.appendChild(videoflyoutbtnThree)
        videotabThree.appendChild(videoflyoutThree)
        const videoicons3 = document.createElement('div');
        videoicons3.classList.add('rfrd-video-icons')
        const soundcontainer3 = document.createElement('div');
        soundcontainer3.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon3 = document.createElement('div');
        soundon3.classList.add('sound-on')
        this.soundon3 = soundon3
        this.soundon3.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg3 = document.createElement('img');
        soundonimg3.classList.add('rfrd-video-icon')
        soundonimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff3 = document.createElement('div');
        soundoff3.style.display = 'none'
        soundoff3.classList.add('sound-off')
        this.soundoff3 = soundoff3
        this.soundoff3.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg3 = document.createElement('img');
        soundoffimg3.classList.add('rfrd-video-icon')
        soundoffimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon3.appendChild(soundonimg3)
        this.soundoff3.appendChild(soundoffimg3)
        soundcontainer3.appendChild(this.soundon3)
        soundcontainer3.appendChild(this.soundoff3)
        const playcontainer3 = document.createElement('div');
        playcontainer3.classList.add('rfrdplaycontainer')
        const pause3 = document.createElement('div');
        pause3.classList.add('pause-video-block')
        const pauseimg3 = document.createElement('img');
        pauseimg3.classList.add('rfrd-video-icon')
        pauseimg3.style.display = 'none'
        pauseimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg3 = pauseimg3
        this.pauseimg3.addEventListener('click', this.pauseVid.bind(this));
        const play3 = document.createElement('div');
        play3.classList.add('play-video-block')
        const playimg3 = document.createElement('img');
        playimg3.classList.add('rfrd-video-icon')
        playimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg3 = playimg3
        this.playimg3.addEventListener('click', this.playVid.bind(this));
        pause3.appendChild(this.pauseimg3)
        play3.appendChild(this.playimg3)
        playcontainer3.appendChild(pause3)
        playcontainer3.appendChild(play3)
        const fullscreencontainer3 = document.createElement('div');
        const fullscreenimg3 = document.createElement('img');
        fullscreenimg3.classList.add('rfrd-video-icon')
        fullscreenimg3.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg3 = fullscreenimg3
        this.fullscreenimg3.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer3.appendChild(this.fullscreenimg3)
        videoicons3.appendChild(soundcontainer3)
        videoicons3.appendChild(playcontainer3)
        videoicons3.appendChild(fullscreencontainer3)
        videoembedThree.appendChild(videoicons3)

        var videorowFour = document.createElement('a');
        videorowFour.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowFour.setAttribute('data-id', widget.videos[3].videoid._id);
        videorowFour.addEventListener('click', this.showVid.bind(this), false);
        var videophotoFour = document.createElement('div')
        videophotoFour.classList.add('rfrd-video-photo')
        videophotoFour.style = "background-image:url('"+ widget.videos[3].videoid.screengrab +"')"
        videorowFour.appendChild(videophotoFour)
        var videoheadingsFour = document.createElement('div');
        var videonameFour = document.createElement('div');
        videonameFour.classList.add('rfrd-side-video-name')
        videonameFour.textContent = widget.videos[3].videoid.name
        var videotitleFour = document.createElement('div');
        videotitleFour.classList.add('rfrd-side-video-title')
        if(widget.videos[3].featuredid) {
          videotitleFour.textContent = widget.videos[3].featuredid.jobtitle + ', ' + widget.videos[3].featuredid.worksat
        }
        else if (widget.videos[3].videoid.jobtitle) {
          videotitleFour.textContent = widget.videos[3].videoid.jobtitle + ', ' + widget.videos[3].videoid.worksat
        }
        else {}
        videoheadingsFour.appendChild(videonameFour)
        videoheadingsFour.appendChild(videotitleFour)
        videorowFour.appendChild(videoheadingsFour)
        var videotabFour = document.createElement('div')
        videotabFour.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'hiw4')
        videotabFour.setAttribute('data-id', widget.videos[3].videoid._id);
        var videoflyoutFour = document.createElement('div')
        videoflyoutFour.classList.add('rfrd-video-flyout-wrap')
        var videoembedFour = document.createElement('div')
        videoembedFour.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedFour.style.paddingTop = '56.17021276595745%'
        const mainvideo4 = document.createElement('video');
        mainvideo4.classList.add("rfrd-mainvid")
        mainvideo4.setAttribute('data-id', widget.videos[3].videoid._id);
        mainvideo4.style = "background-image:url('"+ widget.videos[3].videoid.screengrab +"')"
        this.mainvideo4 = mainvideo4
        this.mainvideo4.innerHTML = '<source src="'+widget.videos[3].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnFour = document.createElement('a')
        videoflyoutbtnFour.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnFour.href = widget.buttonlink
        videoflyoutbtnFour.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnFour.setAttribute('target', "_blank");
        // videoflyoutbtnFour.textContent = widget.buttoncta
        if(widget.videos[3].videoid.widgetcta) {
          videoflyoutbtnFour.href = widget.videos[3].videoid.widgetlink
          videoflyoutbtnFour.textContent = widget.videos[3].videoid.widgetcta
        }
        else {
          videoflyoutbtnFour.href = widget.buttonlink
          videoflyoutbtnFour.textContent = widget.buttoncta
        }
        videoembedFour.appendChild(this.mainvideo4)
        videoflyoutFour.appendChild(videoembedFour)
        videoflyoutFour.appendChild(videoflyoutbtnFour)
        videotabFour.appendChild(videoflyoutFour)
        const videoicons4 = document.createElement('div');
        videoicons4.classList.add('rfrd-video-icons')
        const soundcontainer4 = document.createElement('div');
        soundcontainer4.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon4 = document.createElement('div');
        soundon4.classList.add('sound-on')
        this.soundon4 = soundon4
        this.soundon4.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg4 = document.createElement('img');
        soundonimg4.classList.add('rfrd-video-icon')
        soundonimg4.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff4 = document.createElement('div');
        soundoff4.style.display = 'none'
        soundoff4.classList.add('sound-off')
        this.soundoff4 = soundoff4
        this.soundoff4.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg4 = document.createElement('img');
        soundoffimg4.classList.add('rfrd-video-icon')
        soundoffimg4.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon4.appendChild(soundonimg4)
        this.soundoff4.appendChild(soundoffimg4)
        soundcontainer4.appendChild(this.soundon4)
        soundcontainer4.appendChild(this.soundoff4)
        const playcontainer4 = document.createElement('div');
        playcontainer4.classList.add('rfrdplaycontainer')
        const pause4 = document.createElement('div');
        pause4.classList.add('pause-video-block')
        const pauseimg4 = document.createElement('img');
        pauseimg4.classList.add('rfrd-video-icon')
        pauseimg4.style.display = 'none'
        pauseimg4.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg4 = pauseimg4
        this.pauseimg4.addEventListener('click', this.pauseVid.bind(this));
        const play4 = document.createElement('div');
        play4.classList.add('play-video-block')
        const playimg4 = document.createElement('img');
        playimg4.classList.add('rfrd-video-icon')
        playimg4.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg4 = playimg4
        this.playimg4.addEventListener('click', this.playVid.bind(this));
        pause4.appendChild(this.pauseimg4)
        play4.appendChild(this.playimg4)
        playcontainer4.appendChild(pause4)
        playcontainer4.appendChild(play4)
        const fullscreencontainer4 = document.createElement('div');
        const fullscreenimg4 = document.createElement('img');
        fullscreenimg4.classList.add('rfrd-video-icon')
        fullscreenimg4.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg4 = fullscreenimg4
        this.fullscreenimg4.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer4.appendChild(this.fullscreenimg4)
        videoicons4.appendChild(soundcontainer4)
        videoicons4.appendChild(playcontainer4)
        videoicons4.appendChild(fullscreencontainer4)
        videoembedFour.appendChild(videoicons4)

        var videorowFive = document.createElement('a');
        videorowFive.classList.add('rfrd-video-row', 'rfrd-inline-block', 'rfrd-tab-link')
        videorowFive.setAttribute('data-id', widget.videos[4].videoid._id);
        videorowFive.addEventListener('click', this.showVid.bind(this), false);
        var videophotoFive = document.createElement('div')
        videophotoFive.classList.add('rfrd-video-photo')
        videophotoFive.style = "background-image:url('"+ widget.videos[4].videoid.screengrab +"')"
        videorowFive.appendChild(videophotoFive)
        var videoheadingsFive = document.createElement('div');
        var videonameFive = document.createElement('div');
        videonameFive.classList.add('rfrd-side-video-name')
        videonameFive.textContent = widget.videos[4].videoid.name
        var videotitleFive = document.createElement('div');
        videotitleFive.classList.add('rfrd-side-video-title')
        if(widget.videos[4].featuredid) {
          videotitleFive.textContent = widget.videos[4].featuredid.jobtitle + ', ' + widget.videos[4].featuredid.worksat
        }
        else if (widget.videos[4].videoid.jobtitle) {
          videotitleFive.textContent = widget.videos[4].videoid.jobtitle + ', ' + widget.videos[4].videoid.worksat
        }
        else {}
        videoheadingsFive.appendChild(videonameFive)
        videoheadingsFive.appendChild(videotitleFive)
        videorowFive.appendChild(videoheadingsFive)
        var videotabFive = document.createElement('div')
        videotabFive.classList.add('rfrd-video-tab-pane', 'rfrd-w-tab-pane', 'hiw4')
        videotabFive.setAttribute('data-id', widget.videos[4].videoid._id);
        var videoflyoutFive = document.createElement('div')
        videoflyoutFive.classList.add('rfrd-video-flyout-wrap')
        var videoembedFive = document.createElement('div')
        videoembedFive.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
        videoembedFive.style.paddingTop = '56.17021276595745%'
        const mainvideo5 = document.createElement('video');
        mainvideo5.classList.add("rfrd-mainvid")
        mainvideo5.setAttribute('data-id', widget.videos[4].videoid._id);
        mainvideo5.style = "background-image:url('"+ widget.videos[4].videoid.screengrab +"')"
        this.mainvideo5 = mainvideo5
        this.mainvideo5.innerHTML = '<source src="'+widget.videos[4].videoid.link+'" data-wf-ignore="true">'
        var videoflyoutbtnFive = document.createElement('a')
        videoflyoutbtnFive.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
        // videoflyoutbtnFive.href = widget.buttonlink
        videoflyoutbtnFive.style.backgroundColor = '#'+ widget.maincolor
        videoflyoutbtnFive.setAttribute('target', "_blank");
        // videoflyoutbtnFive.textContent = widget.buttoncta
        if(widget.videos[4].videoid.widgetcta) {
          videoflyoutbtnFive.href = widget.videos[4].videoid.widgetlink
          videoflyoutbtnFive.textContent = widget.videos[4].videoid.widgetcta
        }
        else {
          videoflyoutbtnFive.href = widget.buttonlink
          videoflyoutbtnFive.textContent = widget.buttoncta
        }
        videoembedFive.appendChild(this.mainvideo5)
        videoflyoutFive.appendChild(videoembedFive)
        videoflyoutFive.appendChild(videoflyoutbtnFive)
        videotabFive.appendChild(videoflyoutFive)
        const videoicons5 = document.createElement('div');
        videoicons5.classList.add('rfrd-video-icons')
        const soundcontainer5 = document.createElement('div');
        soundcontainer5.classList.add('rfrdsoundcontainer')
        // soundcontainer.addEventListener('click', this.togglePlay.bind(this));
        const soundon5 = document.createElement('div');
        soundon5.classList.add('sound-on')
        this.soundon5 = soundon5
        this.soundon5.addEventListener('click', this.toggleSoundOn.bind(this));
        const soundonimg5 = document.createElement('img');
        soundonimg5.classList.add('rfrd-video-icon')
        soundonimg5.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f471968311785ca000deb4_sound%20on.svg'
        const soundoff5 = document.createElement('div');
        soundoff5.style.display = 'none'
        soundoff5.classList.add('sound-off')
        this.soundoff5 = soundoff5
        this.soundoff5.addEventListener('click', this.toggleSoundOff.bind(this));
        const soundoffimg5 = document.createElement('img');
        soundoffimg5.classList.add('rfrd-video-icon')
        soundoffimg5.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f4718b5bc38a8ec998e79d_sound%20off.svg'
        this.soundon5.appendChild(soundonimg5)
        this.soundoff5.appendChild(soundoffimg5)
        soundcontainer5.appendChild(this.soundon5)
        soundcontainer5.appendChild(this.soundoff5)
        const playcontainer5 = document.createElement('div');
        playcontainer5.classList.add('rfrdplaycontainer')
        const pause5 = document.createElement('div');
        pause5.classList.add('pause-video-block')
        const pauseimg5 = document.createElement('img');
        pauseimg5.classList.add('rfrd-video-icon')
        pauseimg5.style.display = 'none'
        pauseimg5.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4fa465082830b2901a_pauseicon.svg'
        this.pauseimg5 = pauseimg5
        this.pauseimg5.addEventListener('click', this.pauseVid.bind(this));
        const play5 = document.createElement('div');
        play5.classList.add('play-video-block')
        const playimg5 = document.createElement('img');
        playimg5.classList.add('rfrd-video-icon')
        playimg5.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46ec2a8ae0801811c4c3e_playico.svg'
        this.playimg5 = playimg5
        this.playimg5.addEventListener('click', this.playVid.bind(this));
        pause5.appendChild(this.pauseimg5)
        play5.appendChild(this.playimg5)
        playcontainer5.appendChild(pause5)
        playcontainer5.appendChild(play5)
        const fullscreencontainer5 = document.createElement('div');
        const fullscreenimg5 = document.createElement('img');
        fullscreenimg5.classList.add('rfrd-video-icon')
        fullscreenimg5.src = 'https://assets.website-files.com/5e62b74e92e93371af2386aa/61f46e4f6a5ac52cc0393bce_expand.svg'
        this.fullscreenimg5 = fullscreenimg5
        this.fullscreenimg5.addEventListener('click', this.toggleFullScreen.bind(this));
        fullscreencontainer5.appendChild(this.fullscreenimg5)
        videoicons5.appendChild(soundcontainer5)
        videoicons5.appendChild(playcontainer5)
        videoicons5.appendChild(fullscreencontainer5)
        videoembedFive.appendChild(videoicons5)
  
        videotabsmenu.appendChild(videorowOne)
        videotabsmenu.appendChild(videorowTwo)
        videotabsmenu.appendChild(videorowThree)
        videotabsmenu.appendChild(videorowFour)
        videotabsmenu.appendChild(videorowFive)
        tabscontent.appendChild(videotabOne)
        tabscontent.appendChild(videotabTwo)
        tabscontent.appendChild(videotabThree)
        tabscontent.appendChild(videotabFour)
        tabscontent.appendChild(videotabFive)
        videotabs.appendChild(videotabsmenu)
        videotabs.appendChild(tabscontent)
        videosTop.appendChild(cheerheader)
        videosTop.appendChild(videotabs)
        cheerwrap.appendChild(videosTop)
        cheerwrap.appendChild(builtwithrfrd)
      } 
  
      this.messageContainer.appendChild(pagebg);
      // this.messageContainer.appendChild(videoflyoutwrap);
      this.messageContainer.appendChild(cheerwrap);
  
    }
  
    submit(event) {
      event.preventDefault();
      const formSubmission = {
          email: event.srcElement.querySelector('#email').value, 
          message: event.srcElement.querySelector('#message').value,
      };
  
      this.messageContainer.innerHTML = '<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry';
      
      // console.log(formSubmission);
    }
  
    toggleOpen() {
      // console.log("clicked on toggle open")
      this.open = !this.open;
      // console.log("its opened!")
      // this.chatIcon.classList.add('hidden');
      // this.closeIcon.classList.remove('hidden');
      this.container.style = "height: auto"
      this.buttonContainer.classList.add('rfrd-hidden')
      this.messageContainer.classList.remove('rfrd-hidden');
  
    }
  
    toggleClose() {
      // console.log("clicked on toggle close")
      this.container.style = "height: 0px"
      this.buttonContainer.classList.remove('rfrd-hidden')
      this.messageContainer.classList.add('rfrd-hidden');
      this.playimg.removeAttribute("style")
      this.pauseimg.style.display = 'none'
      var videos = document.querySelectorAll(".hiw4");
      videos.forEach(function(item) {
          item.firstChild.firstChild.firstChild.pause();
          item.firstChild.firstChild.firstChild.currentTime = 0;
          item.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style")
          item.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display = 'none'
      });
    }
  
    toggleSoundOn(event) {
      // console.log("sound on")
      // this.soundoff.removeAttribute("style")
      event.target.closest('.rfrdsoundcontainer').lastChild.removeAttribute("style")
      event.target.closest('.sound-on').style.display = 'none'
      var videos = document.querySelectorAll(".hiw4");
      videos.forEach(function(item) {
        if (item.classList.contains('rfrd-w--tab-active') ) {
          item.firstChild.firstChild.firstChild.muted = !item.firstChild.firstChild.firstChild.muted;
        }
        else {
          // console.log("nope")
        }
      });
      // this.mainvideo.muted = !this.mainvideo.muted;
    }
  
    toggleSoundOff(event) {
      // console.log("sound off")
      // this.soundon.removeAttribute("style")
      event.target.closest('.rfrdsoundcontainer').firstChild.removeAttribute("style")
      event.target.closest('.sound-off').style.display = 'none'
      var videos = document.querySelectorAll(".hiw4");
      videos.forEach(function(item) {
        if (item.classList.contains('rfrd-w--tab-active') ) {
          item.firstChild.firstChild.firstChild.muted = !item.firstChild.firstChild.firstChild.muted;
        }
        else {
          // console.log("nope")
        }
      });
    }
  
    toggleFullScreen() {
      var videos = document.querySelectorAll(".hiw4");
      videos.forEach(function(item) {
        if (item.classList.contains('rfrd-w--tab-active') ) {
          item.firstChild.firstChild.firstChild.requestFullscreen()
        }
        else {
          // console.log("nope")
        }
      });
    }

    playVid(event) {
      // console.log("press play")
      event.target.closest('.rfrdplaycontainer').firstChild.firstChild.removeAttribute("style")
      event.target.style.display = 'none'
      // this.mainvideo1.play();
      var videos = document.querySelectorAll(".hiw4");
      videos.forEach(function(item) {
        if (item.classList.contains('rfrd-w--tab-active') ) {
          // console.log("item.getAttribute('data-id'):", item.getAttribute('data-id'))
          // item.play();
          item.firstChild.firstChild.firstChild.play();
        }
        else {
          // console.log("nope")
        }
      });
    }
  
    pauseVid(event) {
      // console.log("pressed pause")
      event.target.closest('.rfrdplaycontainer').lastChild.firstChild.removeAttribute("style")
      event.target.style.display = 'none'
      // this.mainvideo1.pause();
      var videos = document.querySelectorAll(".hiw4");
      videos.forEach(function(item) {
        if (item.classList.contains('rfrd-w--tab-active') ) {
          item.firstChild.firstChild.firstChild.pause()
        }
        else {
          // console.log("nope")
        }
      });
    }
  
  
    showVid(event) {
      // console.log("whatsssssup:", event)
      // this.playimg.removeAttribute("style")
      // this.pauseimg.style.display = 'none'
      var id = event.target.closest('.rfrd-video-row').getAttribute('data-id')
      var videos = document.querySelectorAll(".hiw4");
      videos.forEach(function(item) {
        if (id == item.getAttribute('data-id') ) {
          // item.classList.remove('rfrd-hidden')
          item.classList.add('rfrd-w--tab-active')
          item.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style")
          item.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display = 'none'
          item.firstChild.firstChild.firstChild.pause()
          // item.pause();
          item.currentTime = 0;
        }
        else {
          // item.classList.add('rfrd-hidden');
          item.classList.remove('rfrd-w--tab-active')
          item.firstChild.firstChild.lastChild.children[1].lastChild.firstChild.removeAttribute("style")
          item.firstChild.firstChild.lastChild.children[1].firstChild.firstChild.style.display = 'none'
          item.firstChild.firstChild.firstChild.pause()
          // item.pause();
          item.currentTime = 0;
        }
      });
  
    }
  
  } 
  new Tawk()
})()


// export const Tawk =  Tawk;
