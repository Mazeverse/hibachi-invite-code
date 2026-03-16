function copyCode() {
  const code = document.getElementById("inviteCode").innerText.trim();
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.querySelector(".copy-btn");
    const original = btn.textContent;
    btn.textContent = "COPIED";
    setTimeout(() => btn.textContent = original, 1400);
  }).catch(() => {
    alert("Code copied: " + code);
  });
}
