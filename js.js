let globalTotalBudget = 0;
document.getElementById("tripForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const mssv = document.getElementById("mssv").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const budget = parseFloat(document.getElementById("budget").value);
  const duration = parseInt(document.getElementById("duration").value);
  const members = parseInt(document.getElementById("members").value);
  if (duration > 10) {
    alert("Nhà thám hiểm đại tài - Đi để trưởng thành");
  }
  const tbody = document
    .getElementById("tripTable")
    .getElementsByTagName("tbody")[0];
  const newRow = tbody.insertRow(-1);
  newRow.innerHTML = `
                <td>${mssv}</td>
                <td>${destination}</td>
                <td>${budget.toLocaleString("vi-VN")} VNĐ</td>
                <td>${duration} ngày</td>
                <td>${members} người</td>
            `;
  const lastChar = mssv.slice(-1);
  const isDigit = !isNaN(parseInt(lastChar));
  if (isDigit && parseInt(lastChar) % 2 !== 0) {
    tbody.insertBefore(newRow, tbody.firstChild);
  } else {
    tbody.appendChild(newRow);
  }
  globalTotalBudget += budget;
  document.getElementById("totalBudget").innerText =
    globalTotalBudget.toLocaleString("vi-VN");
  document.getElementById("tripForm").reset();
});
