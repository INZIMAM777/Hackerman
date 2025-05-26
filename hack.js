// const funHackingTexts = [
//   "Initializing connection to secure network...",
//   "Handshaking with node: 192.168.0.42",
//   "Authentication request sent...",
//   "Found user: Haashir_27",
//   "Cracking password...",
//   "Password cracked: 'Haashir123'",
//   "Login successful for user: Haashir_27",
//   "Access granted to root directory.",
//   "Scanning system files...",
//   "Bypassing firewall...",
//   "Firewall bypassed successfully.",
//   "Locating sensitive folders...",
//   "Found: /bank-data, /private-logs, /access-tokens",
//   "Decrypting bank-data...",
//   "Accessing financial account...",
//   "Balance found: $8,200",
//   "Transferring funds to offshore wallet...",
//   "Transfer complete. Wallet: 0x4haashir0wallet",
//   "Injecting fake payment confirmation...",
//   "Spoofing transaction history...",
//   "Installing backdoor for future access...",
//   "Backdoor installed successfully.",
//   "Creating shadow admin account...",
//   "Shadow user: ghost_Haashir created.",
//   "Erasing access logs...",
//   "System logs wiped clean.",
//   "Deploying keylogger module...",
//   "Keylogger active on device.",
//   "Sniffing network traffic...",
//   "Intercepted 128 packets.",
//   "Dumping password hashes...",
//   "Hashes stored in secure vault.",
//   "Launching malware injector...",
//   "Malware deployed: status undetected.",
//   "Tracking location via IP...",
//   "Proxy enabled. Masking origin...",
//   "Encrypting all stolen data...",
//   "Data exfiltration complete.",
//   "Deleting temporary files...",
//   "Wiping terminal history...",
//   "Disconnecting remote shell...",
//   "Secure tunnel closed.",
//   "Final sweep initiated...",
//   "No traces found. Clean exit.",
//   "System rebooting...",
//   "Admin panel locked down.",
//   "Alert triggers disabled.",
//   "Fake maintenance mode activated.",
//   "Hacker log saved to hidden directory.",
//   "Mission complete. Logging off...",
//   "User Haashir_27 signed out. 😎"
// ];

//     let a=(ms)=>new Promise((resolve)=>setTimeout(resolve,ms))
//     let ul=document.getElementsByTagName('ul')[0];
//     let b=async()=>{
//         for(let i of funHackingTexts) {
//             let li=document.createElement('li');
//             li.textContent=i;
//             ul.appendChild(li);
//         await a(1000);    
//     }
//     }
//     b();

  
 const hackingTexts = [
            {text: "Initializing connection to secure network...", type: "normal"},
            {text: "Handshaking with node: 192.168.0.42", type: "normal"},
            {text: "Authentication request sent...", type: "normal"},
            {text: "Found user: Haashir_27", type: "normal"},
            {text: "Cracking password...", type: "normal"},
            {text: "Password cracked: 'Haashir123'", type: "danger"},
            {text: "WARNING: Security protocols detected", type: "warning"},
            {text: "Bypassing security measures...", type: "normal"},
            {text: "Login successful for user: Haashir_27", type: "success"},
            {text: "Access granted to root directory.", type: "success"},
            {text: "Scanning system files...", type: "normal"},
            {text: "Decrypting bank-data...", type: "normal"},
            {text: "Accessing financial account...", type: "normal"},
            {text: "Balance found: $8,200", type: "danger"},
            {text: "Transferring funds to offshore wallet...", type: "danger"},
            {text: "Transfer complete. Wallet: 0x4haashir0wallet", type: "danger"},
            {text: "Backdoor installed successfully.", type: "success"},
            {text: "Creating shadow admin account...", type: "danger"},
            {text: "Shadow user: ghost_Haashir created.", type: "danger"},
            {text: "Erasing access logs...", type: "danger"},
            {text: "Mission complete. Logging off...", type: "normal"},
            {text: "USER HAASHIR_27 HAS BEEN COMPROMISED", type: "warning"},
            {text: "TERMINAL LOCKED", type: "warning"}
        ];

        // Matrix rain effect
        function createMatrixRain() {
            const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
            const canvas = document.createElement('canvas');
            canvas.id = 'matrixCanvas';
            document.getElementById('matrixRain').appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const fontSize = 14;
            const columns = canvas.width / fontSize;
            const drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100;
            }
            
            function draw() {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#0f0';
                ctx.font = fontSize + 'px monospace';
                
                for (let i = 0; i < drops.length; i++) {
                    const text = chars[Math.floor(Math.random() * chars.length)];
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                    
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
            }
            
            setInterval(draw, 33);
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
        }

        // Main hacking simulation
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        const ul = document.querySelector('ul');
        
        async function simulateHack() {
            createMatrixRain();
            
            for (let i = 0; i < hackingTexts.length; i++) {
                const item = hackingTexts[i];
                const li = document.createElement('li');
                
                // Play appropriate sound
                if (item.type === 'warning') {
                    document.getElementById('warningSound').currentTime = 0;
                    document.getElementById('warningSound').play();
                    li.classList.add('warning');
                } else if (item.type === 'success') {
                    document.getElementById('successSound').currentTime = 0;
                    document.getElementById('successSound').play();
                    li.classList.add('success');
                } else if (item.type === 'danger') {
                    document.getElementById('dangerSound').currentTime = 0;
                    document.getElementById('dangerSound').play();
                    li.classList.add('danger');
                } else {
                    document.getElementById('typingSound').currentTime = 0;
                    document.getElementById('typingSound').play();
                }
                
                // Type out text character by character
                li.textContent = '';
                ul.appendChild(li);
                
                for (let j = 0; j < item.text.length; j++) {
                    li.textContent += item.text[j];
                    await sleep(20 + Math.random() * 30);
                }
                
                // Special effects for certain messages
                if (item.text.includes('Haashir_27 HAS BEEN COMPROMISED')) {
                    document.getElementById('hackedSound').play();
                    document.body.style.backgroundColor = '#300';
                    await sleep(2000);
                    document.getElementById('accessDenied').style.display = 'flex';
                }
                
                await sleep(800 + Math.random() * 500);
            }
        }
        
        simulateHack();