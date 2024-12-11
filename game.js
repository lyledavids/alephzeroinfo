class Game {
    constructor() {
        this.player = document.getElementById('player');
        this.modal = document.getElementById('modal');
        this.modalOverlay = document.getElementById('modal-overlay');
        this.modalTitle = document.getElementById('modal-title');
        this.modalContent = document.getElementById('modal-content');
        this.container = document.getElementById('game-container');
        
        this.currentLanguage = 'en';
        this.playerX = window.innerWidth / 2;
        this.playerY = window.innerHeight / 2;
        this.speed = 5;
        this.keys = {};
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.createBoards();
        this.updatePlayer();
    }
    
    setupEventListeners() {
        document.addEventListener('keydown', e => this.keys[e.key] = true);
        document.addEventListener('keyup', e => this.keys[e.key] = false);
        document.getElementById('close-modal').addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());
        window.addEventListener('resize', () => this.createBoards());
    }
    
    createBoards() {
        const currentContent = content[this.currentLanguage];
        this.container.querySelectorAll('.board').forEach(board => board.remove());
        
        const totalBoards = currentContent.sections.length;
        const radiusMultiplier = totalBoards <= 6 ? 0.35 : 0.45; // Increase radius for more boards
        
        currentContent.sections.forEach((section, index) => {
            const board = document.createElement('div');
            board.className = 'board';
            board.innerHTML = `
                <h3>${section.title}</h3>
                <div class="board-preview">Click to view details</div>
            `;
            
            // Adjust the starting angle to position first board at the top
            const startAngle = -Math.PI / 2;
            const angle = startAngle + (index / totalBoards) * Math.PI * 2;
            const radius = Math.min(window.innerWidth, window.innerHeight) * radiusMultiplier;
            
            // Add some randomness to the radius to create a more organic feel
            const randomRadius = radius * (1 + Math.random() * 0.1);
            
            const x = window.innerWidth/2 + Math.cos(angle) * randomRadius - 100;
            const y = window.innerHeight/2 + Math.sin(angle) * randomRadius - 75;
            
            board.style.left = x + 'px';
            board.style.top = y + 'px';
            
            // Add a slight random rotation for visual interest
            const rotation = Math.random() * 6 - 3; // Random rotation between -3 and 3 degrees
            board.style.transform = `rotate(${rotation}deg)`;
            
            board.addEventListener('click', () => {
                if (this.isPlayerNear(x + 100, y + 75)) {
                    this.showModal(section.title, section.content);
                }
            });
            
            // Add hover effect to show when player is in range
            setInterval(() => {
                if (this.isPlayerNear(x + 100, y + 75)) {
                    board.classList.add('in-range');
                } else {
                    board.classList.remove('in-range');
                }
            }, 100);
            
            this.container.appendChild(board);
        });
    }
    
    isPlayerNear(x, y) {
        const distance = Math.sqrt(
            Math.pow(this.playerX + 16 - x, 2) + 
            Math.pow(this.playerY + 16 - y, 2)
        );
        return distance < 150; // Increased interaction range
    }
    
    showModal(title, content) {
        this.modalTitle.textContent = title;
        this.modalContent.textContent = content;
        this.modal.style.display = 'block';
        this.modalOverlay.style.display = 'block';
    }
    
    closeModal() {
        this.modal.style.display = 'none';
        this.modalOverlay.style.display = 'none';
    }
    
    switchLanguage(lang) {
        this.currentLanguage = lang;
        document.querySelectorAll('.language-switch button').forEach(btn => {
            btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
        });
        this.createBoards();
    }
    
    updatePlayer() {
        if (this.keys['ArrowLeft']) this.playerX = Math.max(0, this.playerX - this.speed);
        if (this.keys['ArrowRight']) this.playerX = Math.min(window.innerWidth - 32, this.playerX + this.speed);
        if (this.keys['ArrowUp']) this.playerY = Math.max(0, this.playerY - this.speed);
        if (this.keys['ArrowDown']) this.playerY = Math.min(window.innerHeight - 32, this.playerY + this.speed);

        this.player.style.left = this.playerX + 'px';
        this.player.style.top = this.playerY + 'px';
        
        requestAnimationFrame(() => this.updatePlayer());
    }
}