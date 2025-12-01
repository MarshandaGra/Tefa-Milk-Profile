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
