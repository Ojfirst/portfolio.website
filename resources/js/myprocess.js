document.addEventListener('DOMContentLoaded', function() {
            const steps = document.querySelectorAll('.process-step');
            const progressFill = document.querySelector('.progress-fill');
            const nextBtn = document.getElementById('next-btn');
            const prevBtn = document.getElementById('prev-btn');
            let currentStep = 0;
            
            // Initialize the view
            updateProgress();
            
            // Set up Intersection Observer for scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.3 });
            
            // Observe each step
            steps.forEach(step => {
                observer.observe(step);
            });
            
            // Next button functionality
            nextBtn.addEventListener('click', () => {
                if (currentStep < steps.length - 1) {
                    steps[currentStep].classList.remove('visible');
                    currentStep++;
                    steps[currentStep].scrollIntoView({ behavior: 'smooth' });
                    updateProgress();
                }
            });
            
            // Previous button functionality
            prevBtn.addEventListener('click', () => {
                if (currentStep > 0) {
                    steps[currentStep].classList.remove('visible');
                    currentStep--;
                    steps[currentStep].scrollIntoView({ behavior: 'smooth' });
                    updateProgress();
                }
            });
            
            // Update progress bar
            function updateProgress() {
                const progress = (currentStep / (steps.length - 1)) * 100;
                progressFill.style.width = `${progress}%`;
                
                // Update button states
                prevBtn.disabled = currentStep === 0;
                nextBtn.disabled = currentStep === steps.length - 1;
                
                // Add visual indication for disabled state
                if (prevBtn.disabled) {
                    prevBtn.style.opacity = '0.5';
                    prevBtn.style.cursor = 'not-allowed';
                } else {
                    prevBtn.style.opacity = '1';
                    prevBtn.style.cursor = 'pointer';
                }
                
                if (nextBtn.disabled) {
                    nextBtn.style.opacity = '0.5';
                    nextBtn.style.cursor = 'not-allowed';
                } else {
                    nextBtn.style.opacity = '1';
                    nextBtn.style.cursor = 'pointer';
                }
            }
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    nextBtn.click();
                } else if (e.key === 'ArrowLeft') {
                    prevBtn.click();
                }
            });
        });