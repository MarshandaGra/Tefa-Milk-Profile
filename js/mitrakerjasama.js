document.querySelectorAll(".faq-question").forEach(function(button) {
    button.addEventListener("click", function() {

        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains("active");

        // Tutup semua item lain
        document.querySelectorAll(".faq-item").forEach(function(item) {
            item.classList.remove("active");
            item.querySelector(".icon").textContent = "+";
        });

        // Jika sebelumnya tidak aktif → buka
        if (!isActive) {
            faqItem.classList.add("active");
            faqItem.querySelector(".icon").textContent = "−";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('waSubmit');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const nama = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const pertanyaan = document.getElementById('pertanyaan').value.trim();

      const nomorWa = "6287729664976"; // ganti jika perlu

      if (!nama || !email || !pertanyaan) {
        alert("Mohon lengkapi semua data dan beri pertanyaan terlebih dahulu.");
        return;
      }

      const pesan = `Halo, ada pertanyaan baru!\n\nNama: ${nama}\nEmail: ${email}\n\nPertanyaan:\n${pertanyaan}`;

      const waUrl = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;
      window.open(waUrl, "_blank");
    });
  });


  
    // Klik kartu langsung buka email
    document.querySelector('.email-box').addEventListener('click', () => {
        window.location.href = "mailto:tefamilkduapolije@gmail.com";
    });

