// ข้อมูลสมาชิกทีม
const teamMembers = [
  // แผนกผู้บริหาร
  {
    id: 1,
    name: "ธนพล สุขสวัสดิ์",
    position: "ประธานเจ้าหน้าที่บริหาร",
    department: "executive",
    email: "thanapon@company.com",
    phone: "+66 89 123 4567",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=ธนพล",
    bio: "ธนพลมีประสบการณ์มากกว่า 20 ปีในอุตสาหกรรมและได้นำพาบริษัทสู่การเติบโตอย่างมีนัยสำคัญตั้งแต่เข้ารับตำแหน่ง CEO ในปี 2015",
    skills: ["ภาวะผู้นำ", "วางแผนกลยุทธ์", "พัฒนาธุรกิจ"],
    achievements: [
      "เพิ่มรายได้บริษัท 200% ใน 5 ปี",
      "นำการขยายตลาดสู่ต่างประเทศอย่างประสบความสำเร็จ",
      "ได้รับการยกย่องเป็น CEO ยอดเยี่ยมในนิตยสารอุตสาหกรรม ปี 2022",
    ],
  },
  {
    id: 2,
    name: "สุนิสา จันทร์เพ็ญ",
    position: "ประธานเจ้าหน้าที่ฝ่ายปฏิบัติการ",
    department: "executive",
    email: "sunisa@company.com",
    phone: "+66 81 234 5678",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=สุนิสา",
    bio: "สุนิสาดูแลการดำเนินงานทั้งหมดของบริษัท เพื่อให้มั่นใจว่ามีประสิทธิภาพและความเป็นเลิศในทุกแผนก",
    skills: ["การจัดการปฏิบัติการ", "การเพิ่มประสิทธิภาพกระบวนการ", "การสร้างทีม"],
    achievements: [
      "ลดต้นทุนการดำเนินงาน 30%",
      "ดำเนินการเปลี่ยนแปลงดิจิทัลทั่วทั้งบริษัท",
      "พัฒนากรอบการดำเนินงานที่ได้รับรางวัล",
    ],
  },
  {
    id: 3,
    name: "วิชัย รักษ์ไทย",
    position: "ประธานเจ้าหน้าที่ฝ่ายการเงิน",
    department: "executive",
    email: "wichai@company.com",
    phone: "+66 86 345 6789",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=วิชัย",
    bio: "วิชัยจัดการการดำเนินงานทางการเงินทั้งหมดและการวางแผนทางการเงินเชิงกลยุทธ์สำหรับบริษัท",
    skills: ["การวิเคราะห์ทางการเงิน", "การบริหารความเสี่ยง", "การวางแผนเชิงกลยุทธ์"],
    achievements: [
      "ระดมทุนได้ 50 ล้านดอลลาร์",
      "ดำเนินมาตรการประหยัดต้นทุนประหยัดได้ 2 ล้านดอลลาร์ต่อปี",
      "นำ IPO ที่ประสบความสำเร็จ",
    ],
  },

  // แผนกการตลาด
  {
    id: 4,
    name: "พิมพ์มาดา วงศ์สุวรรณ",
    position: "ผู้อำนวยการฝ่ายการตลาด",
    department: "marketing",
    email: "pimmada@company.com",
    phone: "+66 89 456 7890",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=พิมพ์มาดา",
    bio: "พิมพ์มาดานำทีมการตลาดของเราด้วยกลยุทธ์ที่สร้างสรรค์ซึ่งเพิ่มการรับรู้แบรนด์ของเราอย่างมีนัยสำคัญ",
    skills: ["ดิจิทัลมาร์เก็ตติ้ง", "กลยุทธ์แบรนด์", "คอนเทนต์มาร์เก็ตติ้ง"],
    achievements: [
      "เพิ่มการมีส่วนร่วมในโซเชียลมีเดีย 150%",
      "นำแคมเปญรีแบรนด์ที่ได้รับรางวัล",
      "พัฒนากลยุทธ์การเปิดตัวผลิตภัณฑ์ที่ประสบความสำเร็จ",
    ],
  },
  {
    id: 5,
    name: "ธนกร กิจเจริญ",
    position: "ผู้จัดการโซเชียลมีเดีย",
    department: "marketing",
    email: "thanakorn@company.com",
    phone: "+66 81 567 8901",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=ธนกร",
    bio: "ธนกรจัดการช่องทางโซเชียลมีเดียทั้งหมดและสร้างชุมชนออนไลน์ที่แข็งแกร่งรอบแบรนด์ของเรา",
    skills: ["กลยุทธ์โซเชียลมีเดีย", "การสร้างคอนเทนต์", "การจัดการชุมชน"],
    achievements: [
      "เพิ่มผู้ติดตาม Instagram จาก 10K เป็น 500K",
      "สร้างแคมเปญไวรัลที่มียอดการเข้าชม 2 ล้านครั้ง",
      "เพิ่มอัตราการมีส่วนร่วม 75%",
    ],
  },
  {
    id: 6,
    name: "จิราภา พัฒนาดี",
    position: "นักกลยุทธ์คอนเทนต์",
    department: "marketing",
    email: "jirapa@company.com",
    phone: "+66 86 678 9012",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=จิราภา",
    bio: "จิราภาพัฒนากลยุทธ์เนื้อหาของเราในทุกแพลตฟอร์ม เพื่อให้มั่นใจว่ามีข้อความและเสียงของแบรนด์ที่สอดคล้องกัน",
    skills: ["กลยุทธ์คอนเทนต์", "การเขียนคัดลอก", "SEO"],
    achievements: [
      "เพิ่มการเข้าชมแบบออร์แกนิก 200%",
      "พัฒนาคู่มือสไตล์เนื้อหาที่ใช้ทั่วทั้งบริษัท",
      "นำการเปิดตัวบล็อกใหม่ที่ประสบความสำเร็จ",
    ],
  },

  // แผนกเทคโนโลยี
  {
    id: 7,
    name: "ภาณุพงศ์ ทองดี",
    position: "ประธานเจ้าหน้าที่ฝ่ายเทคโนโลยี",
    department: "technology",
    email: "panupong@company.com",
    phone: "+66 89 789 0123",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=ภาณุพงศ์",
    bio: "ภาณุพงศ์นำทีมเทคโนโลยีของเรา ขับเคลื่อนนวัตกรรมและทำให้มั่นใจว่าระบบของเรามีความปลอดภัย ขยายขนาดได้ และมีประสิทธิภาพ",
    skills: ["สถาปัตยกรรมซอฟต์แวร์", "คลาวด์คอมพิวติ้ง", "AI/ML"],
    achievements: [
      "นำการย้ายไปยังโครงสร้างพื้นฐานคลาวด์",
      "ใช้แพลตฟอร์มวิเคราะห์ที่ขับเคลื่อนด้วย AI",
      "ลดเวลาหยุดทำงานของระบบ 99.9%",
    ],
  },
  {
    id: 8,
    name: "อรุณี มั่นคง",
    position: "หัวหน้านักพัฒนา",
    department: "technology",
    email: "arunee@company.com",
    phone: "+66 81 890 1234",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=อรุณี",
    bio: "อรุณีนำทีมพัฒนาของเรา ดูแลทุกแง่มุมของวงจรการพัฒนาซอฟต์แวร์ของเรา",
    skills: ["Full-Stack Development", "Agile Methodologies", "System Design"],
    achievements: [
      "นำการพัฒนาแอปมือถือที่ได้รับรางวัล",
      "ใช้ CI/CD pipeline ลดเวลาในการปรับใช้ 70%",
      "เป็นพี่เลี้ยงให้นักพัฒนาจูเนียร์ 15 คน",
    ],
  },
  {
    id: 9,
    name: "ชัยวัฒน์ วิจิตรศิลป์",
    position: "นักออกแบบ UX/UI",
    department: "technology",
    email: "chaiwat@company.com",
    phone: "+66 86 901 2345",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=ชัยวัฒน์",
    bio: "ชัยวัฒน์สร้างประสบการณ์ผู้ใช้ที่เข้าใจง่ายและสวยงามสำหรับผลิตภัณฑ์ดิจิทัลทั้งหมดของเรา",
    skills: ["UX Research", "UI Design", "Prototyping"],
    achievements: [
      "ออกแบบผลิตภัณฑ์หลักใหม่เพิ่มความพึงพอใจของผู้ใช้ 40%",
      "สร้างระบบการออกแบบทั่วทั้งบริษัท",
      "ชนะรางวัล UX Design Award 2023",
    ],
  },
  {
    id: 10,
    name: "สุภาพร ใจดี",
    position: "วิศวกร QA",
    department: "technology",
    email: "supaporn@company.com",
    phone: "+66 89 012 3456",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=สุภาพร",
    bio: "สุภาพรรับรองคุณภาพของผลิตภัณฑ์ซอฟต์แวร์ทั้งหมดของเราผ่านการทดสอบอย่างเข้มงวดและกระบวนการประกันคุณภาพ",
    skills: ["Automated Testing", "Manual Testing", "Quality Assurance"],
    achievements: [
      "ใช้การทดสอบอัตโนมัติลดข้อบกพร่อง 80%",
      "พัฒนากรอบการทำงาน QA ที่ครอบคลุม",
      "ฝึกอบรมทีมเกี่ยวกับการพัฒนาที่ขับเคลื่อนด้วยการทดสอบ",
    ],
  },

  // แผนกบริการลูกค้า
  {
    id: 11,
    name: "ดนัย ธรรมรักษ์",
    position: "ผู้อำนวยการฝ่ายบริการลูกค้า",
    department: "customer-service",
    email: "danai@company.com",
    phone: "+66 81 123 4567",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=ดนัย",
    bio: "ดนัยนำทีมบริการลูกค้าของเรา เพื่อให้มั่นใจว่ามีการสนับสนุนและความพึงพอใจที่ยอดเยี่ยมสำหรับลูกค้าทั้งหมดของเรา",
    skills: ["ประสบการณ์ลูกค้า", "การจัดการทีม", "การแก้ปัญหา"],
    achievements: [
      "เพิ่มคะแนนความพึงพอใจของลูกค้าจาก 85% เป็น 97%",
      "ใช้ระบบ CRM ใหม่",
      "ลดเวลาตอบสนองเฉลี่ย 60%",
    ],
  },
  {
    id: 12,
    name: "นภัสวรรณ วงศ์สกุล",
    position: "ผู้เชี่ยวชาญด้านการสนับสนุนอาวุโส",
    department: "customer-service",
    email: "napatsawan@company.com",
    phone: "+66 86 234 5678",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=นภัสวรรณ",
    bio: "นภัสวรรณจัดการปัญหาลูกค้าที่ซับซ้อนและฝึกอบรมสมาชิกทีมใหม่เกี่ยวกับโปรโตคอลการสนับสนุน",
    skills: ["การสนับสนุนทางเทคนิค", "การสื่อสารกับลูกค้า", "การฝึกอบรม"],
    achievements: [
      "รักษาอัตราความพึงพอใจ 99%",
      "พัฒนาโปรแกรมการฝึกอบรมใหม่สำหรับทีมสนับสนุน",
      "แก้ไขปัญหาที่ยกระดับสูงสุดได้มากที่สุด",
    ],
  },
  {
    id: 13,
    name: "รัชพล การุณย์",
    position: "ผู้จัดการความสำเร็จของลูกค้า",
    department: "customer-service",
    email: "ratchapon@company.com",
    phone: "+66 89 345 6789",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=รัชพล",
    bio: "รัชพลทำงานกับบัญชีหลักเพื่อให้แน่ใจว่าพวกเขาได้รับคุณค่าสูงสุดจากผลิตภัณฑ์และบริการของเรา",
    skills: ["การจัดการบัญชี", "การสร้างความสัมพันธ์", "ความรู้ผลิตภัณฑ์"],
    achievements: [
      "เพิ่มอัตราการรักษาลูกค้า 25%",
      "ขยายบริการกับบัญชีหลัก 15 ราย",
      "พัฒนาคู่มือความสำเร็จของลูกค้า",
    ],
  },

  // แผนกฝ่ายขาย
  {
    id: 14,
    name: "ลลิตา จันทร์เรือง",
    position: "ผู้อำนวยการฝ่ายขาย",
    department: "sales",
    email: "lalita@company.com",
    phone: "+66 81 456 7890",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=ลลิตา",
    bio: "ลลิตานำทีมขายทั่วโลกของเรา พัฒนากลยุทธ์เพื่อขยายการมีอยู่ในตลาดและขับเคลื่อนการเติบโตของรายได้",
    skills: ["กลยุทธ์การขาย", "การเป็นผู้นำทีม", "การเจรจาต่อรอง"],
    achievements: [
      "เกินเป้าหมายการขายประจำปี 30% เป็นเวลา 3 ปีติดต่อกัน",
      "ขยายไปยังตลาดต่างประเทศใหม่ 5 แห่ง",
      "พัฒนาโปรแกรมการขายองค์กรที่ประสบความสำเร็จ",
    ],
  },
  {
    id: 15,
    name: "ธีรพงษ์ บุญมา",
    position: "ผู้บริหารบัญชีอาวุโส",
    department: "sales",
    email: "teerapong@company.com",
    phone: "+66 86 567 8901",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=ธีรพงษ์",
    bio: "ธีรพงษ์ทำงานกับลูกค้าองค์กรเพื่อทำความเข้าใจความต้องการของพวกเขาและให้โซลูชันที่เหมาะสม",
    skills: ["การขายองค์กร", "การขายโซลูชัน", "การสร้างความสัมพันธ์"],
    achievements: [
      "ปิดดีลที่ใหญ่ที่สุดในประวัติศาสตร์บริษัท",
      "เกินเป้าหมายรายไตรมาสอย่างต่อเนื่อง 40%",
      "พัฒนาแนวทางใหม่สำหรับลูกค้าองค์กร",
    ],
  },
  {
    id: 16,
    name: "กรรณิการ์ ลิขิตสุข",
    position: "ผู้จัดการปฏิบัติการขาย",
    department: "sales",
    email: "kannika@company.com",
    phone: "+66 89 678 9012",
    image: "https://via.placeholder.com/300x400/1a75ff/ffffff?text=กรรณิการ์",
    bio: "กรรณิการ์จัดการปฏิบัติการขายของเรา เพื่อให้มั่นใจว่ามีกระบวนการที่มีประสิทธิภาพและให้การวิเคราะห์ข้อมูลที่สำคัญแก่ทีมขาย",
    skills: ["ปฏิบัติการขาย", "การวิเคราะห์ข้อมูล", "การจัดการ CRM"],
    achievements: [
      "ใช้ระบบอัตโนมัติการขายประหยัดเวลา 15 ชั่วโมงต่อตัวแทนขายต่อสัปดาห์",
      "พัฒนาแดชบอร์ดวิเคราะห์การขาย",
      "ปรับปรุงการจัดสรรเขตการขายเพิ่มประสิทธิภาพ 25%",
    ],
  },
];

// DOM Elements
const filterBtns = document.querySelectorAll('.filter-btn');
const departmentSections = document.querySelectorAll('.department-section');
const modal = document.getElementById('profileModal');
const closeModal = document.querySelector('.close-modal');
const closeBtn = document.querySelector('.close-btn');
const viewProfileBtns = document.querySelectorAll('.view-profile-btn');

// Filter functionality
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    const department = btn.getAttribute('data-department');
    
    // Show/hide department sections based on filter
    if (department === 'all') {
      departmentSections.forEach(section => {
        section.style.display = 'block';
        
        // Add animation to cards
        const cards = section.querySelectorAll('.team-card');
        cards.forEach((card, index) => {
          card.style.animation = 'none';
          card.offsetHeight; // Trigger reflow
          card.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`;
        });
      });
    } else {
      departmentSections.forEach(section => {
        if (section.getAttribute('data-department') === department) {
          section.style.display = 'block';
          
          // Add animation to cards
          const cards = section.querySelectorAll('.team-card');
          cards.forEach((card, index) => {
            card.style.animation = 'none';
            card.offsetHeight; // Trigger reflow
            card.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`;
          });
        } else {
          section.style.display = 'none';
        }
      });
    }
  });
});

// Modal functionality
function openModal(memberId) {
  const member = teamMembers.find(m => m.id === memberId);
  
  if (!member) return;
  
  // Populate modal with member data
  document.getElementById('modal-name').textContent = member.name;
  document.getElementById('modal-position').textContent = `${member.position} - ${member.department === 'customer-service' ? 'บริการลูกค้า' : member.department === 'executive' ? 'ผู้บริหาร' : member.department === 'marketing' ? 'การตลาด' : member.department === 'technology' ? 'เทคโนโลยี' : 'ฝ่ายขาย'}`;
  document.getElementById('modal-image').src = member.image;
  document.getElementById('modal-email').textContent = member.email;
  document.getElementById('modal-phone').textContent = member.phone || 'N/A';
  document.getElementById('modal-bio').textContent = member.bio;
  
  // Populate achievements
  const achievementsList = document.getElementById('modal-achievements');
  achievementsList.innerHTML = '';
  member.achievements.forEach(achievement => {
    const li = document.createElement('li');
    li.textContent = achievement;
    achievementsList.appendChild(li);
  });
  
  // Populate skills
  const skillsContainer = document.getElementById('modal-skills');
  skillsContainer.innerHTML = '';
  member.skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill-badge';
    span.textContent = skill;
    skillsContainer.appendChild(span);
  });
  
  // Show modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModalFunc() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling
}

// Event listeners for opening modal
document.querySelectorAll('.team-card').forEach(card => {
  card.querySelector('.view-profile-btn').addEventListener('click', () => {
    const memberId = parseInt(card.getAttribute('data-id'));
    openModal(memberId);
  });
});

// Event listeners for closing modal
closeModal.addEventListener('click', closeModalFunc);
closeBtn.addEventListener('click', closeModalFunc);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalFunc();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeModalFunc();
  }
});

// Add staggered animation to cards on page load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.team-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});