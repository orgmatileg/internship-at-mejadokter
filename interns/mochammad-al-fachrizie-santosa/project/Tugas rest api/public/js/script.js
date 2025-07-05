const rumahList = document.getElementById("rumah-list");
const kategoriSelect = document.getElementById("filterKategori");

async function fetchKategori() {
  const res = await fetch("/kategori");
  const data = await res.json();

  kategoriSelect.innerHTML = `<option value="">Semua Kategori</option>`;
  data.forEach(kat => {
    kategoriSelect.innerHTML += `<option value="${kat.id}">${kat.nama}</option>`;
  });
}

async function fetchRumah() {
  const search = document.getElementById("search").value.trim();
  const kategori_id = kategoriSelect.value;
  const minHarga = document.getElementById("minHarga").value;
  const maxHarga = document.getElementById("maxHarga").value;

  let url = "/rumah";
  const params = [];

  if (search) params.push(`search=${encodeURIComponent(search)}`);
  if (kategori_id) params.push(`kategori_id=${kategori_id}`);
  if (minHarga) params.push(`minHarga=${minHarga}`);
  if (maxHarga) params.push(`maxHarga=${maxHarga}`);

  if (params.length) url += "?" + params.join("&");

  const res = await fetch(url);
  const data = await res.json();

  rumahList.innerHTML = "";

  data.forEach(rumah => {
    rumahList.innerHTML += `
      <div class="card">
        <img src="/images/${rumah.gambar || "default.jpg"}" alt="${rumah.nama}">
        <h3>${rumah.nama}</h3>
        <p>${formatRupiah(rumah.harga)}</p>
        <p>${rumah.deskripsi || "-"}</p>
        <a href="detail.html?id=${rumah.id}" class="btn">Detail</a>
        <a href="edit.html?id=${rumah.id}" class="btn">Edit</a>
        <button onclick="hapusRumah(${rumah.id})" class="btn-delete">Hapus</button>
      </div>
    `;
  });
}

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(angka);
}

fetchKategori();
fetchRumah();

async function hapusRumah(id) {
  if (!confirm("Yakin ingin menghapus rumah ini?")) return;

  const res = await fetch(`/rumah/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();
  alert(data.message);
  fetchRumah();
}

