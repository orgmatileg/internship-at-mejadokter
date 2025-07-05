const tbody = document.getElementById("tabelBuyer");

async function fetchBuyer() {
  const res = await fetch("/submission");
  const data = await res.json();

  tbody.innerHTML = "";
  data.forEach((buyer, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${buyer.nama}</td>
        <td>${buyer.no_hp}</td>
        <td>${buyer.email}</td>
        <td>${buyer.rumah_id}</td>
      </tr>
    `;
  });
}

fetchBuyer();