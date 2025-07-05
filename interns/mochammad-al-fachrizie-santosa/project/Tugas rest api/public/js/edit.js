const form = document.getElementById("formEditRumah");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getDetail() {
  const res = await fetch(`/rumah/${id}`);
  const rumah = await res.json();

  form.nama.value = rumah.nama;
  form.deskripsi.value = rumah.deskripsi;
  form.harga.value = rumah.harga;
  form.kategori_id.value = rumah.kategori_id;
}

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const res = await fetch(`/rumah/update/${id}`, {
    method: "POST",
    body: formData
  });

  if (res.ok) {
    alert("Rumah berhasil diperbarui!");
    window.location.href = "index.html";
  } else {
    const data = await res.json();
    alert(data.message || "Gagal memperbarui rumah.");
  }
});

getDetail();