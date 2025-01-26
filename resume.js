
function generateResume() {
  // Get values from form
  const name = document.getElementById('name').value;
  const photo = document.getElementById('photo').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const project = document.getElementById('projects').value;
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;
  const  objective = document.getElementById('objective').value;
  const  Additional_details = document.getElementById('Additional_details').value;
  

  // Set values in the preview section
  document.getElementById('preview-name').textContent = name;
  document.getElementById('preview-photo').textContent = photo;
  document.getElementById('preview-email').textContent = email;
  document.getElementById('preview-phone').textContent = phone;
  document.getElementById('preview-project').textContent = project;
  document.getElementById('preview-experience').textContent = experience;
  document.getElementById('preview-education').textContent = education;
  document.getElementById('preview-skills').textContent = skills;
  document.getElementById('preview-Additional_details').textContent = Additional_details ;
  document.getElementById('preview-objective').textContent = objective;
  
}

async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Get content from the preview section
  const content = document.getElementById('resume-content').innerText;

  // Add content to the PDF
  doc.text(content, 10, 10);

  // Save the PDF
  doc.save("resume.pdf");
}
