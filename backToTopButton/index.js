function topBtn () {
    //select progress bar
     const progressBar = document.getElementById("progress");
     const proWrapper = document.getElementById("proWrapper");
     const proInner = document.getElementById("proInner");
     //position of scrollTract

     const position = document.documentElement.scrollTop;

     const ScrollableHight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

     //scrollValue in percentage
     const scrollValue = Math.round(((position / ScrollableHight) * 100));
     progressBar.value = `${scrollValue}`;
    //   console.log(progressBar.style.);
      proWrapper.style.background = `conic-gradient(green ${scrollValue}%, yellow ${scrollValue}%)`
      proInner.innerText = `${scrollValue}%`;
} 


window.onscroll = topBtn;