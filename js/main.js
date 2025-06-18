document.addEventListener('DOMContentLoaded', () => {
    // Function to load HTML partials
    const loadHTML = async (filePath, elementId) => {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            const text = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = text;
                // Special handling for scripts in partials, if any (none in this case)
                // Re-evaluate scripts if needed, e.g. for AdSense
                if (elementId === 'ads-placeholder-header' || elementId === 'ads-placeholder-footer') {
                    // If AdSense code relies on being in the document when parsed,
                    // this might need a more sophisticated script loading mechanism.
                    // For simple placeholders, this is usually fine.
                }
            } else {
                console.warn(`Element with ID ${elementId} not found.`);
            }
        } catch (error) {
            console.error('Error loading HTML partial:', error);
        }
    };

    // Load header and footer
    // Adjust paths if running from subdirectories (e.g., in /posts/ or /legal/)
    const basePath = document.body.dataset.basepath || '.'; 
    
    loadHTML(`${basePath}/partials/header.html`, 'header-placeholder').then(() => {
        // Dark Mode Toggle Logic (needs to be run after header is loaded)
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = () => {
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
                body.classList.add('dark-mode');
                if (darkModeToggle) darkModeToggle.textContent = 'Light Mode';
            } else {
                body.classList.remove('dark-mode');
                if (darkModeToggle) darkModeToggle.textContent = 'Dark Mode';
            }
        };

        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                let theme = 'light';
                if (body.classList.contains('dark-mode')) {
                    theme = 'dark';
                    darkModeToggle.textContent = 'Light Mode';
                } else {
                    darkModeToggle.textContent = 'Dark Mode';
                }
                localStorage.setItem('theme', theme);
            });
        }
        
        // Apply saved theme or system preference on initial load
        applyTheme();

        // Listen for changes in system preference
        prefersDarkScheme.addEventListener('change', applyTheme);
    });

    loadHTML(`${basePath}/partials/footer.html`, 'footer-placeholder');
    
    // Load ads if placeholders exist
    if (document.getElementById('ads-placeholder-header')) {
        loadHTML(`${basePath}/partials/ads.html`, 'ads-placeholder-header');
    }
    if (document.getElementById('ads-placeholder-sidebar')) { // Example for another ad slot
        loadHTML(`${basePath}/partials/ads.html`, 'ads-placeholder-sidebar');
    }
    if (document.getElementById('ads-placeholder-footer')) {
        loadHTML(`${basePath}/partials/ads.html`, 'ads-placeholder-footer');
    }

    // Active navigation link highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
