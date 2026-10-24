const { spawn } = require('child_process');
const fs = require('fs');

async function captureHero() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9222',
    'http://localhost:3000/#topo'
  ]);

  let targets = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9222/json/list');
      targets = await res.json();
      if (targets && targets.length > 0) break;
    } catch (e) {}
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  ws.onopen = () => {
    ws.send(JSON.stringify({
      id: 1,
      method: 'Emulation.setDeviceMetricsOverride',
      params: { width: 1424, height: 900, deviceScaleFactor: 1, mobile: false }
    }));

    setTimeout(() => {
      ws.send(JSON.stringify({
        id: 2,
        method: 'Page.captureScreenshot',
        params: { format: 'png' }
      }));
    }, 600);
  };

  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    if (data.id === 2 && data.result && data.result.data) {
      fs.writeFileSync('scripts/hero_live.png', Buffer.from(data.result.data, 'base64'));
      console.log('Saved scripts/hero_live.png');
      ws.close();
      chrome.kill();
      process.exit(0);
    }
  };
}

captureHero();
