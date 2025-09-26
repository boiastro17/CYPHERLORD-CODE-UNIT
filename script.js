/* -------------------------
   Cursor Trail Effect
------------------------- */
document.addEventListener('mousemove', e => {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    setTimeout(() => { trail.remove(); }, 300);
});

/* -------------------------
   Smooth Scroll
------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
    });
});

/* -------------------------
   Modal Functions
------------------------- */
function openModal(title, desc){
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.querySelector('.modal').style.display = 'flex';
}

function closeModal(){
    document.querySelector('.modal').style.display = 'none';
}

// Close modal when clicking outside content
document.querySelector('.modal').addEventListener('click', function(e){
    if(e.target === this){
        closeModal();
    }
});

/* -------------------------
   Functional Tools
------------------------- */

// HTML & CSS Generator
function generateHTMLCSS() {
    const htmlInput = prompt("Enter your HTML content:");
    const cssInput = prompt("Enter CSS styles for your content:");
    if (!htmlInput) return;
    const outputWindow = window.open("", "_blank");
    outputWindow.document.write(`<html><head><style>${cssInput || ''}</style></head><body>${htmlInput}</body></html>`);
    outputWindow.document.close();
}

// JS Console Tool
function openJSConsole() {
    const code = prompt("Enter JavaScript code to test:");
    if (!code) return;
    try {
        const result = eval(code);
        alert("Result: " + result);
    } catch (err) {
        alert("Error: " + err);
    }
}

// MP3 Downloader Simulation
function downloadMP3() {
    const song = prompt("Enter YouTube URL or Song Name:");
    if (!song) return;
    alert(`Pretending to download "${song}"... (simulation only)`);
}