// Function to preview the photo
function previewPhoto(event) {
  const photoPreview = document.getElementById("photoPreview");
  const file = event.target.files[0];

  // Check if the file is an image
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      photoPreview.innerHTML = `<img src="${e.target.result}" alt="Preview Foto" style="max-width: 100%; height: auto;" />`;
    };
    reader.readAsDataURL(file);
    document.getElementById("fotoError").style.display = "none";
  } else {
    photoPreview.innerHTML = "<span>Preview Foto</span>";
    document.getElementById("fotoError").style.display = "block";
  }
}

// Function to handle form submission and show modal
function handleFormSubmit(event) {
  event.preventDefault();

  const nama = document.getElementById("Nama").value.trim();
  const username = document.getElementById("Username").value.trim();
  const nomorTelepon = document.getElementById("Nomor Telepon").value.trim();
  const email = document.getElementById("Email").value.trim();
  const hoyoverse = document.getElementById("Hoyoverse").value;
  const foto = document.getElementById("foto").files[0];

  // Check for missing fields
  if (!nama || !username || !nomorTelepon || !email || !hoyoverse || !foto) {
    alert("Harap isi semua data dan upload foto.");
    return;
  }

  // Show success modal
  document.getElementById("successModal").style.display = "flex";

  // Reset form fields
  document.querySelector("form").reset();
  document.getElementById("photoPreview").innerHTML = "<span>Preview Foto</span>";
}

// Function to close the modal
function closeModal() {
  document.getElementById("successModal").style.display = "none";
}

// Event listeners
document.querySelector("form").addEventListener("submit", handleFormSubmit);
document.getElementById("foto").addEventListener("change", previewPhoto);
