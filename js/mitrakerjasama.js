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


document.getElementById("waForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    let nomorAdmin = "628xxxxxxxxxx"; // ganti dengan nomor TEFA MILK

    let text = 
        "Halo TEFA MILK,%0A" +
        "Saya ingin mengajukan pertanyaan.%0A%0A" +
        "*Nama:* " + nama + "%0A" +
        "*Email:* " + email + "%0A" +
        "*Pertanyaan:* " + pesan;

    let url = "https://wa.me/" + nomorAdmin + "?text=" + text;

    window.open(url, "_blank");
});



  
    // Klik kartu langsung buka email
    document.querySelector('.email-box').addEventListener('click', () => {
        window.location.href = "mailto:tefamilkduapolije@gmail.com";
    });

