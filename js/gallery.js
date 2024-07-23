const galleryContainer = document.querySelector('.gallery-container');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxClose = document.getElementById('lightboxClose');
        const prevImageButton = document.getElementById('prevImage');
        const nextImageButton = document.getElementById('nextImage');

        // Lightbox functions
        function openLightbox(src) {
            lightbox.style.display = 'flex';
            lightboxImage.src = src;
        }

        function closeLightbox() {
            lightbox.style.display = 'none';
        }

        function showImage(index) {
            lightboxImage.src = `uploads/gallery_img-${index.toString().padStart(2, '0')}.jpg`;
        }

        galleryContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'IMG') {
                const src = event.target.src;
                openLightbox(src);
            }
        });

        lightboxClose.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        prevImageButton.addEventListener('click', () => {
            const currentSrc = lightboxImage.src;
            const currentIndex = parseInt(currentSrc.match(/gallery_img-(\d+)\.jpg/)[1], 10);
            let newIndex = currentIndex - 1;

            if (newIndex < 1) newIndex = 36;

            showImage(newIndex);
        });

        nextImageButton.addEventListener('click', () => {
            const currentSrc = lightboxImage.src;
            const currentIndex = parseInt(currentSrc.match(/gallery_img-(\d+)\.jpg/)[1], 10);
            let newIndex = currentIndex + 1;

            if (newIndex > 36) newIndex = 1;

            showImage(newIndex);
        });

        // Keyboard navigation
        function handleKeyDown(event) {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                const currentSrc = lightboxImage.src;
                const currentIndex = parseInt(currentSrc.match(/gallery_img-(\d+)\.jpg/)[1], 10);
                let newIndex = event.key === 'ArrowRight' ? currentIndex + 1 : currentIndex - 1;

                if (newIndex < 1) newIndex = 36;
                if (newIndex > 36) newIndex = 1;

                showImage(newIndex);
            }
        }

        document.addEventListener('keydown', handleKeyDown);
