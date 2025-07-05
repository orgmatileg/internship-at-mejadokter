document.getElementById("formRumah").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  const res = await fetch("/rumah", {
    method: "POST",
    body: formData
  });

  if (res.ok) {
    alert("Rumah berhasil ditambahkan!");
    window.location.href = "index.html";
  } else {
    alert("Gagal menambahkan rumah.");
  }
});