// get values
function getResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const objective = document.getElementById('objective').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const projects = document.getElementById('projects').value;
    const achievements = document.getElementById('achievements').value;
    const additionalDetails = document.getElementById('additional_details').value;
//setvalues
    document.getElementById('preview-name').textContent = name;
      document.getElementById('preview-email').textContent = email;
       document.getElementById('preview-phone').textContent = phone;
      document.getElementById('preview-objective').textContent = objective;
    document.getElementById('preview-experience').textContent = experience;
    document.getElementById('preview-education').textContent = education;
    document.getElementById('preview-skills').textContent = skills;
    document.getElementById('preview-projects').textContent = projects;
    document.getElementById('preview-achievements').textContent = achievements;
    document.getElementById('preview-additional-details').textContent = additionalDetails;

    // for photo
    const photoInput = document.getElementById('photo');
    const photoPreview = document.getElementById('preview-photo');
    const reader = new FileReader();
    reader.onload = function (e) {
      photoPreview.innerHTML = `<img src="${e.target.result}" alt="Photo">`;
    };
    if (photoInput.files && photoInput.files[0]) {
      reader.readAsDataURL(photoInput.files[0]);
    }
  }
//for pdf
async function downloadPDF() {
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
    });

    const resumeElement = document.getElementById('resume-content');

  
    const canvas = await html2canvas(resumeElement, { scale: 2 });

    const imgData = canvas.toDataURL('image/png');

   
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
}

    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', () => {
            const section = header.nextElementSibling;
            section.style.display = (section.style.display === 'none') ? 'block' : 'none';
        });
    });
