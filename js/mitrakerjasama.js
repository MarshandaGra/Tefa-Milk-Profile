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


document.getElementById("kirimWa").addEventListener("click", function () {

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pertanyaan = document.getElementById("pertanyaan").value;

    let nomor = "6287729664976"; 
    let pesan = 
`Halo, saya ingin bertanya:
Nama: ${nama}
Email: ${email}
Pertanyaan: ${pertanyaan}`;

    let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
});



  
    // Klik kartu langsung buka email
    document.querySelector('.email-box').addEventListener('click', () => {
        window.location.href = "mailto:tefamilkduapolije@gmail.com";
    });

