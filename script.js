// รอให้ DOM โหลดเสร็จสมบูรณ์
document.addEventListener('DOMContentLoaded', function() {
    // สลับเมนูมือถือ
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // สลับแอนิเมชันไอคอนเมนู
            const bars = menuToggle.querySelectorAll('.bar');
            if (menuToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // ปิดเมนูมือถือเมื่อคลิกที่ลิงก์นำทาง
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                menuToggle.click();
            }
        });
    });
    
    // ส่วนหัวแบบติดหน้าจอ
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = 'none';
        }
    });
    
    // การส่งแบบฟอร์ม
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // รับค่าจากฟอร์ม
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // ตรวจสอบความถูกต้องของข้อมูล (ตัวอย่างง่ายๆ)
            if (!name || !email || !phone || !subject || !message) {
                alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
                return;
            }
            
            // ตรวจสอบรูปแบบอีเมล
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('กรุณากรอกอีเมลให้ถูกต้อง');
                return;
            }
            
            // ตรวจสอบรูปแบบเบอร์โทรศัพท์ (ตัวอย่างสำหรับเบอร์ไทย)
            const phoneRegex = /^[0-9]{9,10}$/;
            if (!phoneRegex.test(phone.replace(/[- ]/g, ''))) {
                alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง');
                return;
            }
            
            // โดยปกติคุณจะส่งข้อมูลฟอร์มไปยังเซิร์ฟเวอร์
            // สำหรับตัวอย่างนี้ เราจะแสดงแค่การแจ้งเตือน
            alert(`ขอบคุณคุณ ${name} สำหรับข้อความ\nเราจะติดต่อกลับไปที่ ${email} หรือ ${phone} โดยเร็วที่สุด`);
            
            // รีเซ็ตฟอร์ม
            contactForm.reset();
        });
    }
    
    // ฟอร์มจดหมายข่าว
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // ตรวจสอบความถูกต้องของอีเมล
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('กรุณากรอกอีเมลให้ถูกต้อง');
                return;
            }
            
            // โดยปกติคุณจะส่งอีเมลไปยังเซิร์ฟเวอร์
            // สำหรับตัวอย่างนี้ เราจะแสดงแค่การแจ้งเตือน
            alert(`ขอบคุณสำหรับการสมัครด้วย ${email}! คุณจะได้รับจดหมายข่าวของเรา`);
            
            // รีเซ็ตฟอร์ม
            newsletterForm.reset();
        });
    }
    
    // คำถามที่พบบ่อย (FAQ) Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // ปิด FAQ อื่นๆ
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // สลับสถานะของ FAQ ที่คลิก
            item.classList.toggle('active');
        });
    });
    
    // Smooth Scrolling สำหรับลิงก์ภายใน
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // แอนิเมชันเมื่อเลื่อนหน้าจอ
    const animateElements = document.querySelectorAll('.contact-card, .form-container, .contact-info-container, .map-wrapper, .faq-item, .cta-container');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    }
    
    // เพิ่มคลาสแอนิเมชัน
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .contact-card, .form-container, .contact-info-container, .map-wrapper, .faq-item, .cta-container {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            
            .fade-in {
                opacity: 1;
                transform: translateY(0);
            }
        </style>
    `);
    
    // ตรวจสอบครั้งแรก
    setTimeout(checkScroll, 100);
    
    // ตรวจสอบเมื่อเลื่อนหน้าจอ
    window.addEventListener('scroll', checkScroll);
});