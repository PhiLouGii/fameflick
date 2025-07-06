// Avatar customization
const avatarParts = {
    face: document.getElementById('avatar-face'),
    eyes: document.getElementById('avatar-eyes'),
    mouth: document.getElementById('avatar-mouth'),
    hair: document.getElementById('avatar-hair'),
    accessory: document.getElementById('avatar-accessory'),
    outfit: document.getElementById('avatar-outfit')
};

// Set default avatar
function setDefaultAvatar() {
    updateAvatarPart('face', 'round');
    updateAvatarPart('eyes', 'normal');
    updateAvatarPart('mouth', 'smile');
    updateAvatarPart('hair', 'short');
    updateAvatarPart('accessory', 'none');
    updateAvatarPart('outfit', 'casual');
    updateAvatarColor('face', '#ffccaa');
    updateAvatarColor('hair', '#9b59b6');
}

// Update avatar part
function updateAvatarPart(part, value) {
    const partElement = avatarParts[part];
    
    switch(part) {
        case 'face':
            if(value === 'round') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23ffccaa"/></svg>\')';
            } else if(value === 'oval') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="35" ry="45" fill="%23ffccaa"/></svg>\')';
            } else if(value === 'square') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" rx="10" fill="%23ffccaa"/></svg>\')';
            } else if(value === 'heart') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,85 C70,65 85,50 85,35 C85,20 70,10 55,15 C50,25 45,25 40,15 C25,10 15,20 15,35 C15,50 30,65 50,85 Z" fill="%23ffccaa"/></svg>\')';
            }
            break;
            
        case 'eyes':
            if(value === 'normal') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="40" r="5" fill="%23000"/><circle cx="65" cy="40" r="5" fill="%23000"/></svg>\')';
            } else if(value === 'smiling') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,40 Q35,35 40,40" stroke="%23000" stroke-width="3" fill="none"/><path d="M60,40 Q65,35 70,40" stroke="%23000" stroke-width="3" fill="none"/></svg>\')';
            } else if(value === 'wide') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="35" cy="40" rx="8" ry="5" fill="%23000"/><ellipse cx="65" cy="40" rx="8" ry="5" fill="%23000"/></svg>\')';
            } else if(value === 'glasses') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="40" r="5" fill="%23000"/><circle cx="65" cy="40" r="5" fill="%23000"/><rect x="30" y="35" width="10" height="10" rx="2" fill="none" stroke="%23000" stroke-width="2"/><rect x="60" y="35" width="10" height="10" rx="2" fill="none" stroke="%23000" stroke-width="2"/><line x1="40" y1="40" x2="60" y2="40" stroke="%23000" stroke-width="2"/></svg>\')';
            } else if(value === 'cyber') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="25" y="35" width="20" height="10" fill="%2300ff00" rx="2"/><rect x="55" y="35" width="20" height="10" fill="%2300ff00" rx="2"/><line x1="45" y1="40" x2="55" y2="40" stroke="%2300ff00" stroke-width="2"/></svg>\')';
            }
            break;
            
        case 'mouth':
            if(value === 'smile') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M35,65 Q50,75 65,65" stroke="%23000" stroke-width="3" fill="none"/></svg>\')';
            } else if(value === 'neutral') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><line x1="35" y1="65" x2="65" y2="65" stroke="%23000" stroke-width="3"/></svg>\')';
            } else if(value === 'open') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="70" rx="15" ry="10" fill="%23ff6d6d"/></svg>\')';
            } else if(value === 'big-smile') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,65 Q50,85 70,65" stroke="%23000" stroke-width="3" fill="none"/></svg>\')';
            }
            break;
            
        case 'hair':
            if(value === 'short') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,20 Q50,0 70,20 Q60,40 50,35 Q40,40 30,20" fill="%239b59b6"/></svg>\')';
            } else if(value === 'long') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,20 Q50,0 70,20 Q80,60 50,70 Q20,60 30,20" fill="%239b59b6"/></svg>\')';
            } else if(value === 'curly') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,20 Q40,0 50,10 Q60,0 70,20 Q75,40 60,50 Q75,60 70,80 Q60,100 50,90 Q40,100 30,80 Q25,60 40,50 Q25,40 30,20" fill="%239b59b6"/></svg>\')';
            } else if(value === 'ponytail') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,20 Q50,0 70,20 Q65,30 60,35 Q70,40 65,60 Q60,70 50,65 L50,70 Q45,75 40,70 L40,40 Q35,35 30,20" fill="%239b59b6"/></svg>\')';
            } else if(value === 'mohawk') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="40" y="10" width="20" height="50" rx="5" fill="%239b59b6"/><path d="M30,20 Q50,0 70,20" fill="%239b59b6"/></svg>\')';
            }
            break;
            
        case 'accessory':
            if(value === 'none') {
                partElement.style.backgroundImage = '';
            } else if(value === 'glasses') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="25" y="35" width="20" height="10" rx="2" fill="none" stroke="%23000" stroke-width="2"/><rect x="55" y="35" width="20" height="10" rx="2" fill="none" stroke="%23000" stroke-width="2"/><line x1="45" y1="40" x2="55" y2="40" stroke="%23000" stroke-width="2"/></svg>\')';
            } else if(value === 'hat') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20,25 Q50,10 80,25 Q75,35 50,40 Q25,35 20,25" fill="%23e74c3c"/></svg>\')';
            } else if(value === 'earrings') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="60" r="4" fill="%23f1c40f"/><circle cx="65" cy="60" r="4" fill="%23f1c40f"/></svg>\')';
            } else if(value === 'crown') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20,30 L35,40 L50,25 L65,40 L80,30 L75,60 L60,70 L40,70 L25,60 Z" fill="%23f1c40f"/></svg>\')';
            }
            break;
            
        case 'outfit':
            if(value === 'casual') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200"><rect x="30" y="70" width="40" height="80" fill="%231abc9c"/></svg>\')';
            } else if(value === 'formal') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200"><rect x="30" y="70" width="40" height="80" fill="%232c3e50"/><rect x="40" y="70" width="20" height="30" fill="%23e74c3c"/></svg>\')';
            } else if(value === 'sporty') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200"><rect x="30" y="70" width="40" height="80" fill="%23e74c3c"/><path d="M30,110 L70,110 L65,150 L35,150 Z" fill="%23f1c40f"/></svg>\')';
            } else if(value === 'party') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200"><rect x="30" y="70" width="40" height="80" fill="%239b59b6"/><circle cx="50" cy="100" r="10" fill="%23f1c40f"/><circle cx="35" cy="120" r="5" fill="%23e74c3c"/><circle cx="65" cy="120" r="5" fill="%23e74c3c"/></svg>\')';
            } else if(value === 'superhero') {
                partElement.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200"><rect x="30" y="70" width="40" height="80" fill="%23e74c3c"/><circle cx="50" cy="80" r="15" fill="%23f1c40f"/><path d="M30,70 L50,90 L70,70" fill="%23f1c40f"/></svg>\')';
            }
            break;
    }
}

// Update avatar color
function updateAvatarColor(part, color) {
    const partElement = avatarParts[part];
    const currentImage = partElement.style.backgroundImage;
    
    if(currentImage) {
        // Replace the fill color in the SVG
        const newImage = currentImage.replace(/#[a-f0-9]{6}/gi, color);
        partElement.style.backgroundImage = newImage;
    }
}

// Tab switching functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and content
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const tabName = tab.getAttribute('data-tab');
        document.getElementById(`${tabName}-content`).classList.add('active');
    });
});

// Set up option selection
document.querySelectorAll('.option-item[data-part]').forEach(item => {
    item.addEventListener('click', () => {
        if(item.classList.contains('locked')) {
            showNotification('This item is locked! Earn more coins to unlock it.', 'warning');
            return;
        }
        
        const part = item.getAttribute('data-part');
        const value = item.getAttribute('data-value');
        
        // Remove selected class from all options in the same category
        document.querySelectorAll(`.option-item[data-part="${part}"]`).forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        item.classList.add('selected');
        
        // Update avatar preview
        updateAvatarPart(part, value);
    });
});

// Set up color selection
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        if(this.classList.contains('locked')) {
            showNotification('This color is locked! Earn more coins to unlock it.', 'warning');
            return;
        }
        
        const colorPicker = this.parentElement;
        const part = colorPicker.id.replace('-colors', '');
        
        // Remove selected class from all colors in this picker
        colorPicker.querySelectorAll('.color-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selected class to clicked color
        this.classList.add('selected');
        
        // Update avatar color
        const color = this.getAttribute('data-color');
        updateAvatarColor(part, color);
    });
});

// Save avatar
document.getElementById('save-avatar').addEventListener('click', () => {
    showNotification('Avatar saved successfully!', 'success');
});

// Randomize avatar
document.getElementById('random-avatar').addEventListener('click', () => {
    const parts = ['face', 'eyes', 'mouth', 'hair', 'accessory', 'outfit'];
    const options = {
        face: ['round', 'oval', 'square'],
        eyes: ['normal', 'smiling', 'wide', 'glasses'],
        mouth: ['smile', 'neutral', 'open', 'big-smile'],
        hair: ['short', 'long', 'curly', 'ponytail'],
        accessory: ['none', 'glasses', 'hat', 'earrings'],
        outfit: ['casual', 'formal', 'sporty', 'party']
    };
    
    // Select random options for each part
    parts.forEach(part => {
        const randomOption = options[part][Math.floor(Math.random() * options[part].length)];
        updateAvatarPart(part, randomOption);
        
        // Update UI selection
        const selectedItem = document.querySelector(`.option-item[data-part="${part}"][data-value="${randomOption}"]`);
        if(selectedItem) {
            document.querySelectorAll(`.option-item[data-part="${part}"]`).forEach(opt => {
                opt.classList.remove('selected');
            });
            selectedItem.classList.add('selected');
        }
    });
    
    // Randomize colors
    const skinColors = ['#ffccaa', '#e0ac69', '#c68642', '#8d5524', '#3d0c02'];
    const hairColors = ['#9b59b6', '#e74c3c', '#f1c40f', '#2c3e50', '#e67e22'];
    
    const randomSkinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
    const randomHairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
    
    updateAvatarColor('face', randomSkinColor);
    updateAvatarColor('hair', randomHairColor);
    
    // Update UI for colors
    document.querySelectorAll('#skin-colors .color-option').forEach((opt, index) => {
        opt.classList.toggle('selected', opt.getAttribute('data-color') === randomSkinColor && !opt.classList.contains('locked'));
    });
    
    document.querySelectorAll('#hair-colors .color-option').forEach((opt, index) => {
        opt.classList.toggle('selected', opt.getAttribute('data-color') === randomHairColor && !opt.classList.contains('locked'));
    });
});

// Feature toggles
const featureToggles = document.querySelectorAll('.feature-toggle');
featureToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        featureToggles.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.id.replace('toggle-', '');
        scrollToCategory(category);
    });
});

function scrollToCategory(category) {
    const categoryElement = document.querySelector(`.option-category:contains('${categoryToTitle(category)}')`);
    if(categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function categoryToTitle(category) {
    const titles = {
        'face': 'Face Shape',
        'eyes': 'Eyes',
        'hair': 'Hair Style',
        'outfit': 'Outfits'
    };
    return titles[category] || category;
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
    notification.style.background = type === 'success' ? 'var(--success)' : 'var(--warning)';
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Initialize default avatar
setDefaultAvatar();