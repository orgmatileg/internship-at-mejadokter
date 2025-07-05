const tbody = document.getElementById("tabelSubmission");

async function fetchSubmission() {
  const res = await fetch("/submission");
  const data = await res.json();

  tbody.innerHTML = "";
  data.forEach((item, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.nama}</td>
        <td>${item.no_hp}</td>
        <td>${item.email}</td>
        <td>${item.rumah_id}</td>
      </tr>
    `;
  });
}

fetchSubmission();