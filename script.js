document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("exampleFormControlTextarea1");
  const button = document.querySelector(".submit button");

  button.addEventListener("click", function () {
    const text = textarea.value.trim();

    // Hitung jumlah kata
    const kataCount = text.split(/\s+/).filter(function (word) {
      return word.length > 0;
    }).length;
    document.getElementById("kata").textContent = kataCount;

    // Hitung jumlah karakter
    const karakterCount = text.length;
    document.getElementById("karakter").textContent = karakterCount;

    // Hitung jumlah suku kata sesuai aturan KBBI
    const sukuKataCount = countSukuKata(text);
    document.getElementById("suku-kata").textContent = sukuKataCount;

    // Hitung jumlah kalimat
    const kalimatCount = text.split(/[.!?]+/).filter(function (sentence) {
      return sentence.length > 0;
    }).length;
    document.getElementById("kalimat").textContent = kalimatCount;

    // Estimasi waktu baca (asumsi 200 kata per menit)
    const waktuBaca = Math.round(kataCount / 200);
    document.getElementById("waktu-baca").textContent = waktuBaca + " menit";
  });
});

// Fungsi untuk menghitung jumlah suku kata sesuai aturan KBBI
function countSukuKata(text) {
  const pattern =
    /[aiueoAIUEO]+[^aiueoAIUEO\s]+|[^aiueoAIUEO\s]+[aiueoAIUEO]+[^aiueoAIUEO\s]*|[aiueoAIUEO]+[^aiueoAIUEO\s]*$/g;
  const matches = text.match(pattern);
  return matches ? matches.length : 0;
}
