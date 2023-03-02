(function () {
  // copy and paste all of your stuff here
  class Tawk {
  
    constructor() {
      this.initalise();
    }
    
    async initalise() {

      async function mqupload(mqid) {
        var serverUrl2 = 'https://app.rfrd.io/read/video/' + mqid;
        const response2 = await fetch (serverUrl2)
          .then((response2) => response2.json())
          return response2
      }

      // const vid = document.getElementById('rfrd-widget');
      const vid = document.getElementsByClassName('embed-video-class')
      console.log('vid:', vid)
      console.log('vid.length:', vid.length)
      for (let index = 0; index < vid.length; index++) {
        console.log('vid[index].getAttribute("data-id"):', vid[index].getAttribute('data-id'))
        var magicq = await mqupload(vid[index].getAttribute('data-id'))
        console.log("magicq:", magicq)

        var mqcontainernew = vid[index];
      
      // const rfrdId = vid.dataset.id;
      // console.log('rfrdId:', rfrdId)
      // var magicq = await mqupload(rfrdId)
      // console.log("magicq:", magicq)


      // new version
      // var mqcontainernew = document.getElementById('embed-mq-new');


      var videoembedOne = document.createElement('div')
      videoembedOne.classList.add('rfrd-video-play', 'rfrd-w-video', 'w-embed')
      // videoembedOne.style.paddingTop = '56.17021276595745%'
      const mainvideo1 = document.createElement('video');
      mainvideo1.classList.add("rfrd-mainvid")
      mainvideo1.setAttribute('data-id', magicq._id);
      mainvideo1.style = "background-image:url('"+ magicq.screengrab +"')"
      this.mainvideo1 = mainvideo1
      this.mainvideo1.innerHTML = '<source src="'+ magicq.link+'" data-wf-ignore="true">'
      // var videoflyoutbtnOne = document.createElement('a')
      // videoflyoutbtnOne.classList.add('rfrd-widget-button', 'rfrd-video-cta', 'rfrd-w-button')
      // videoflyoutbtnOne.href = widget.buttonlink
      // videoflyoutbtnOne.style.backgroundColor = '#'+ widget.maincolor
      // videoflyoutbtnOne.setAttribute('target', "_blank");
      // if(widget.videos[0].videoid.widgetcta) {
      //   videoflyoutbtnOne.href = widget.videos[0].videoid.widgetlink
      //   videoflyoutbtnOne.textContent = widget.videos[0].videoid.widgetcta
      // }
      // else {
      //   videoflyoutbtnOne.href = widget.buttonlink
      //   videoflyoutbtnOne.textContent = widget.buttoncta
      // }
      videoembedOne.appendChild(this.mainvideo1)
      // videoflyoutOne.appendChild(videoembedOne)
      // videoflyoutOne.appendChild(videoflyoutbtnOne)
      // videotabOne.appendChild(videoflyoutOne)

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

      mqcontainernew.appendChild(videoembedOne)


      // videotabsmenu.appendChild(videorowOne)
      // tabscontent.appendChild(videotabOne)
      // videotabs.appendChild(videotabsmenu)
      // videotabs.appendChild(tabscontent)
      // videosTop.appendChild(cheerheader)
      // videosTop.appendChild(videotabs)
      // cheerwrap.appendChild(videosTop)
      // cheerwrap.appendChild(builtwithrfrd)



    }

      


      this.createStyles(magicq)
  
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
            z-index: -100;
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
              width: 100%;
            } 
          }  
        `.replace(/^\s+|\n/gm, '');
      document.head.appendChild(styleTag);
    }
  
    toggleSoundOn(event) {
      // console.log("sound on")
      // this.soundoff.removeAttribute("style")
      event.target.closest('.rfrdsoundcontainer').lastChild.removeAttribute("style")
      event.target.closest('.sound-on').style.display = 'none'
      var id = event.target.closest('.embed-video-class').getAttribute('data-id')
      var videos = document.querySelectorAll(".embed-video-class");
      videos.forEach(function(item) {
        if (item.getAttribute('data-id') == id ) {
          item.firstChild.firstChild.muted = !item.firstChild.firstChild.muted;
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
      var id = event.target.closest('.embed-video-class').getAttribute('data-id')
      var videos = document.querySelectorAll(".embed-video-class");
      videos.forEach(function(item) {
        if (item.getAttribute('data-id') == id ) {
          item.firstChild.firstChild.muted = !item.firstChild.firstChild.muted;
        }
        else {
          // console.log("nope")
        }
      });
    }
  
    toggleFullScreen() {
      var id = event.target.closest('.embed-video-class').getAttribute('data-id')
      var videos = document.querySelectorAll(".embed-video-class");
      videos.forEach(function(item) {
        if (item.getAttribute('data-id') == id  ) {
          item.firstChild.firstChild.requestFullscreen()
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
      var id = event.target.closest('.embed-video-class').getAttribute('data-id')
      // console.log("videoid:", id)
      // this.mainvideo1.play();
      var videos = document.querySelectorAll(".embed-video-class");
      videos.forEach(function(item) {
        if (item.getAttribute('data-id') == id ) {
          // console.log("item.getAttribute('data-id'):", item.getAttribute('data-id'))
          // item.play();
          item.firstChild.firstChild.play();
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
      var id = event.target.closest('.embed-video-class').getAttribute('data-id')
      // this.mainvideo1.pause();
      var videos = document.querySelectorAll(".embed-video-class");
      videos.forEach(function(item) {
        if (item.getAttribute('data-id') == id ) {
          item.firstChild.firstChild.pause()
        }
        else {
          // console.log("nope")
        }
      });
    }

  } 
  new Tawk()
})()


// export const Tawk =  Tawk;
