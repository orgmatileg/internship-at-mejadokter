const detail = document.getElementById("detail");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getDetail() {
  const res = await fetch(`/rumah/${id}`);
  const rumah = await res.json();

  detail.innerHTML = `
    <div class="card">
      <img src="/images/${rumah.gambar || "default.jpg"}" alt="${rumah.nama}">
      <h3>${rumah.nama}</h3>
      <p>Rp ${formatRupiah(rumah.harga)}</p>
      <p>${rumah.deskripsi || "-"}</p>
    </div>
  `;
}

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(angka);
}

getDetail();

const formPemesanan = document.getElementById("formPemesanan");

formPemesanan.addEventListener("submit", async function(e) {
  e.preventDefault();

  const nama = formPemesanan.nama.value.trim();
  const no_hp = formPemesanan.no_hp.value.trim();
  const email = formPemesanan.email.value.trim();

  // Validasi Nama
  if (nama.length < 3) {
    alert("Nama minimal 3 karakter.");
    return;
  }

  // Validasi No HP (hanya angka & minimal 10 digit)
  if (!/^[0-9]{10,}$/.test(no_hp)) {
    alert("No HP harus angka dan minimal 10 digit.");
    return;
  }

  // Validasi Email
  if (!validateEmail(email)) {
    alert("Format email tidak valid.");
    return;
  }

  // Kirim data jika semua valid
  const formData = { nama, no_hp, email, rumah_id: id };

  const res = await fetch("/submission", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  if (res.ok) {
    alert("Pemesanan berhasil dikirim!");
    formPemesanan.reset();
  } else {
    alert("Gagal mengirim pemesanan.");
  }
});

// Fungsi validasi email sederhana
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}