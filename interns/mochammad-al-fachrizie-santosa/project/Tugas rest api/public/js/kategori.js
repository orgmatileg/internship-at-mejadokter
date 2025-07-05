const form = document.getElementById("formKategori");
const tbody = document.getElementById("tabelKategori");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const id = form.id.value;
  const nama = form.nama.value.trim();

  if (nama.length < 3) {
    alert("Nama kategori minimal 3 karakter.");
    return;
  }

  const method = id ? "PUT" : "POST";
  const url = id ? `/kategori/${id}` : "/kategori";

  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nama })
  });

  if (res.ok) {
    alert("Kategori berhasil disimpan.");
    form.reset();
    fetchKategori();
  } else {
    alert("Gagal menyimpan kategori.");
  }
});

async function fetchKategori() {
  const res = await fetch("/kategori");
  const data = await res.json();

  tbody.innerHTML = "";
  data.forEach((kat, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td><a href="#" onclick="detailKategori(${kat.id})">${kat.nama}</a></td>
        <td>
          <button onclick="editKategori(${kat.id})">Edit</button>
          <button onclick="hapusKategori(${kat.id})">Hapus</button>
        </td>
      </tr>
    `;
  });
}

async function hapusKategori(id) {
  if (confirm("Yakin ingin menghapus kategori ini?")) {
    const res = await fetch(`/kategori/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert("Kategori dihapus.");
      fetchKategori();
    } else {
      alert("Gagal menghapus kategori.");
    }
  }
}

async function editKategori(id) {
  const res = await fetch(`/kategori/${id}`);
  const kat = await res.json();

  form.id.value = kat.id;
  form.nama.value = kat.nama;
}

async function detailKategori(id) {
  const res = await fetch(`/kategori/${id}`);
  const kat = await res.json();
  alert(`Detail Kategori:\nID: ${kat.id}\nNama: ${kat.nama}`);
}

fetchKategori();