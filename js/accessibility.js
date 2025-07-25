// Accessibility Controls JavaScript
class AccessibilityControls {
    constructor() {
        this.fontSize = localStorage.getItem('fontSize') || 'medium';
        this.fontFamily = localStorage.getItem('fontFamily') || 'arial';
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        this.createControls();
        this.applySettings();
        this.bindEvents();
    }
    
    createControls() {
        // Accessibility toggle button
        const toggle = document.createElement('button');
        toggle.className = 'accessibility-toggle';
        toggle.innerHTML = '⚙️';
        toggle.setAttribute('aria-label', 'Accessibility Settings');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', 'accessibility-panel');
        toggle.title = 'Accessibility Settings';
        toggle.tabIndex = 0;
        
        // Accessibility controls panel
        const controls = document.createElement('div');
        controls.className = 'accessibility-controls';
        controls.id = 'accessibility-panel';
        controls.setAttribute('role', 'dialog');
        controls.setAttribute('aria-label', 'Accessibility Settings');
        controls.setAttribute('aria-hidden', 'true');
        controls.innerHTML = `
            <div class="accessibility-title">Accessibility Settings</div>
            
            <div class="control-group">
                <label for="font-size">Font Size:</label>
                <select id="font-size" class="font-size-select">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="font-family">Font Family:</label>
                <select id="font-family">
                    <option value="arial">Arial</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="georgia">Georgia</option>
                    <option value="verdana">Verdana</option>
                    <option value="tahoma">Tahoma</option>
                </select>
            </div>
            
            <div class="control-group">
                <button id="reset-settings">Reset to Default</button>
            </div>
        `;
        
        document.body.appendChild(toggle);
        document.body.appendChild(controls);
        
        this.toggle = toggle;
        this.controls = controls;
        this.fontSizeSelect = controls.querySelector('#font-size');
        this.fontFamilySelect = controls.querySelector('#font-family');
        this.resetButton = controls.querySelector('#reset-settings');
    }
    
    bindEvents() {
        // Toggle panel
        this.toggle.addEventListener('click', () => {
            this.togglePanel();
        });
        
        // Keyboard support for opening the panel
        this.toggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.togglePanel();
            }
        });
        
        // Font size select
        this.fontSizeSelect.addEventListener('change', (e) => {
            const size = e.target.value;
            this.setFontSize(size);
        });
        
        // Font family select
        this.fontFamilySelect.addEventListener('change', (e) => {
            const family = e.target.value;
            this.setFontFamily(family);
        });
        
        // Reset button
        this.resetButton.addEventListener('click', () => {
            this.resetSettings();
        });
        
        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.controls.contains(e.target) && !this.toggle.contains(e.target)) {
                this.closePanel();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closePanel();
            }
        });
    }
    
    togglePanel() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.openPanel();
        } else {
            this.closePanel();
        }
    }
    
    openPanel() {
        this.controls.classList.add('open');
        this.controls.setAttribute('aria-hidden', 'false');
        this.toggle.setAttribute('aria-expanded', 'true');
        this.isOpen = true;
		this.fontSizeSelect.focus();
    }
    
    closePanel() {
        this.controls.classList.remove('open');
        this.controls.setAttribute('aria-hidden', 'true');
        this.toggle.setAttribute('aria-expanded', 'false');
        this.isOpen = false;
		this.toggle.focus();
    }
	//Sets font size
    setFontSize(size) {
        document.documentElement.classList.remove('font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge');
        
        document.documentElement.classList.add(`font-size-${size}`);
        
        this.fontSizeSelect.value = size;
        
        this.fontSize = size;
        localStorage.setItem('fontSize', size);
    }
    
	//Sets font family
    setFontFamily(family) {
        document.documentElement.classList.remove('font-arial', 'font-helvetica', 'font-georgia', 'font-verdana', 'font-tahoma');
        
        document.documentElement.classList.add(`font-${family}`);
        
        this.fontFamily = family;
        localStorage.setItem('fontFamily', family);
    }
    
	//Resets font size and family to default
    resetSettings() {
        this.setFontSize('medium');
        this.setFontFamily('arial');
        this.fontSizeSelect.value = 'medium';
        this.fontFamilySelect.value = 'arial';
        
        localStorage.removeItem('fontSize');
        localStorage.removeItem('fontFamily');
    }
    
	//Applies saved font size and family
    applySettings() {
        this.setFontSize(this.fontSize);
        this.setFontFamily(this.fontFamily);
        this.fontSizeSelect.value = this.fontSize;
        this.fontFamilySelect.value = this.fontFamily;
    }
}

// Initialize accessibility controls when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AccessibilityControls();
}); 