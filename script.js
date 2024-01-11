const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream () {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        
    } catch (error) {
    
    }

}


button.addEventListener('click', async () => {
    // disable button if something is not given for picture in picture
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;

});

selectMediaStream();