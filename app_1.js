//=== JS-1: Variabel, Tipe Data & Operator ===

console.log("=== JS-1: Variabel dan Tipe Data ===");

const namaToko = "RumahKita";
const tahunBerdiri = 2022;
const sedangBuka = true;
const alamat = null;

console.log(typeof namaToko);
console.log(typeof tahunBerdiri);
console.log(typeof sedangBuka);
console.log(typeof alamat);

const tahunSekarang = new Date().getFullYear();
const umurToko = tahunSekarang - tahunBerdiri;

console.log(`Toko ${namaToko} sudah beroperasi selama ${umurToko} tahun.`);

//=== JS-2: Percabangan / Control Flow ===

console.log("=== JS-2: Status Pesanan ===");

function cekStatusPesanan(statusKode) {
    switch (statusKode) {
        case 1:
            return "Menunggu Pembayaran";
        case 2:
            return "Pembayaran Dikonfirmasi";
        case 3:
            return "Sedang Dikemas";
        case 4:
            return "Sedang Dikirim";
        case 5:
            return "Pesanan Diterima";
        default:
            return "Kode Status Tidak Valid";
    }
}

console.log(cekStatusPesanan(1));
console.log(cekStatusPesanan(3));
console.log(cekStatusPesanan(5));
console.log(cekStatusPesanan(9));

//=== JS-3: Perulangan / Looping ===

console.log("=== JS-3: Perulangan ===");

const hargaProduk = [
    25000, 45000, 75000, 90000, 120000,
    175000, 250000, 350000, 550000, 750000
];

// A. Menghitung total dan rata-rata
// let totalHarga = 0;

for (let i = 0; i < hargaProduk.length; i++) {
    totalHarga += hargaProduk[i];
}

const rataRata = totalHarga / hargaProduk.length;

console.log("Total harga:", totalHarga);
console.log("Rata-rata harga:", rataRata);

// B. Mencari harga pertama di atas Rp500.000
let indeks = 0;

while (
    indeks < hargaProduk.length &&
    hargaProduk[indeks] <= 500000
) {
    indeks++;
}

if (indeks < hargaProduk.length) {
    console.log("Indeks produk:", indeks);
    console.log("Harga produk:", hargaProduk[indeks]);
} else {
    console.log("Produk di atas Rp500.000 tidak ditemukan.");
}

// C. Menampilkan harga di bawah Rp100.000
for (const harga of hargaProduk) {
    if (harga < 100000) {
        console.log("Harga di bawah Rp100.000:", harga);
    }
}

//=== JS-4: Array & Array Method ===

console.log("=== JS-4: Array Method ===");

const daftarProduk = [
    "Rak Serbaguna",
    "Lampu Meja",
    "Vas Bunga",
    "Panci",
    "Sapu",
    "Rak Piring",
    "Jam Dinding",
    "Tempat Sampah"
];

// A. Menambah dua produk di akhir
daftarProduk.push("Keset", "Ember");
console.log("Setelah push:", daftarProduk);

// B. Menambah produk di awal
daftarProduk.unshift("Bantal Sofa");
console.log("Setelah unshift:", daftarProduk);

// C. Menghapus produk terakhir
const produkTerakhir = daftarProduk.pop();
console.log("Produk yang dihapus:", produkTerakhir);

// D. Menghapus produk pertama
const produkPertama = daftarProduk.shift();
console.log("Produk yang dihapus:", produkPertama);

// E. Memeriksa apakah Laptop tersedia
console.log("Ada Laptop?", daftarProduk.includes("Laptop"));

// F. Mencari indeks Sepatu
console.log("Indeks Sepatu:", daftarProduk.indexOf("Sepatu"));

// G. Mengambil tiga produk mulai indeks ke-2
const tigaProduk = daftarProduk.slice(2, 5);
console.log("Tiga produk:", tigaProduk);

// H. Menyisipkan Mouse Wireless pada indeks ke-3
daftarProduk.splice(3, 0, "Mouse Wireless");
console.log("Setelah splice:", daftarProduk);

// I. Menghitung jumlah produk
console.log("Jumlah produk:", daftarProduk.length);

//=== JS-5: Function ===

console.log("=== JS-5: Function ===");

// A. Function Declaration
function hitungDiskon(harga, persen) {
    return harga - (harga * persen / 100);
}

console.log("Harga setelah diskon:", hitungDiskon(200000, 10));

// B. Function Expression dengan default parameter PPN 11%
const hitungPPN = function(harga, tarif = 11) {
    return harga + (harga * tarif / 100);
};

console.log("Harga termasuk PPN:", hitungPPN(200000));

// C. Arrow Function untuk ongkir
const hitungOngkir = (jarak) => {
    if (jarak <= 10) {
        return 10000;
    } else if (jarak <= 25) {
        return 25000;
    } else {
        return 50000;
    }
};

console.log("Ongkir:", hitungOngkir(15));

// D. Arrow Function kuadrat
const kuadrat = angka => angka * angka;

console.log("Kuadrat 5:", kuadrat(5));

// E. Menghitung total belanja
const harga = 200000;
const persen = 10;
const jarak = 15;

const totalBelanja =
    hitungPPN(hitungDiskon(harga, persen)) +
    hitungOngkir(jarak);

console.log("Total belanja:", totalBelanja);

//=== JS-6: Object & Object Method ===

console.log("=== JS-6: Object ===");

const produkUnggulan = {
    nama: "Rak Serbaguna",
    kategori: "Perabot Rumah",
    harga: 150000,
    stok: 15,
    rating: 4.8
};

// A. Dot notation
console.log("Nama:", produkUnggulan.nama);

// B. Bracket notation
const properti = "harga";
console.log("Harga:", produkUnggulan[properti]);

// C. Menambah properti
produkUnggulan.diskon = true;

// D. Menghapus properti rating
delete produkUnggulan.rating;

// E. Memeriksa properti stok
console.log("Ada stok?", "stok" in produkUnggulan);

// F. Iterasi semua properti
for (const key in produkUnggulan) {
    console.log(key, ":", produkUnggulan[key]);
}

// G. Semua key
console.log("Keys:", Object.keys(produkUnggulan));

// H. Semua value
console.log("Values:", Object.values(produkUnggulan));

// I. Method menggunakan this
produkUnggulan.tampilkanInfo = function() {
    console.log(`Nama: ${this.nama}`);
    console.log(`Kategori: ${this.kategori}`);
    console.log(`Harga: Rp${this.harga}`);
    console.log(`Stok: ${this.stok}`);
    console.log(`Diskon tersedia: ${this.diskon}`);
};

produkUnggulan.tampilkanInfo();

//=== JS-7: Iterable & Non-Iterable ===

console.log("=== JS-7: Iterable ===");

// A. Array warna
const warna = ["Merah", "Hijau", "Biru"];

for (const item of warna) {
    console.log("Warna:", item);
}

// B. Object mahasiswa
const mahasiswa = {
    nama: "Budi",
    jurusan: "Informatika",
    semester: 2
};

for (const key in mahasiswa) {
    console.log(key, ":", mahasiswa[key]);
}

// C. String JavaScript
for (const karakter of "JavaScript") {
    console.log(karakter);
}

//=== JS-8: String & Number Built-in Function ===

console.log("=== JS-8: String dan Number ===");

const inputEmail = "  Budi.Santoso@GMAIL.COM  ";
const inputHarga = "250000.75";
const kalimat = "Selamat datang di Toko Elektronik Online";

// A. Membersihkan dan menormalkan email
const email = inputEmail.trim().toLowerCase();
console.log("Email:", email);

// B. Memeriksa domain Gmail
console.log("Email Gmail?", email.includes("@gmail"));

// C. Memeriksa awalan email
console.log("Diawali budi?", email.startsWith("budi"));

// D. Mengambil domain email
const posisiAt = email.indexOf("@");
const domain = email.slice(posisiAt + 1);
console.log("Domain:", domain);

// E. Memecah kalimat menjadi array kata
console.log("Kata-kata:", kalimat.split(" "));

// F. Mengganti kata Elektronik menjadi Digital
console.log(
    "Kalimat baru:",
    kalimat.replace("Elektronik", "Digital")
);

// G. Mengubah string menjadi angka
const hargaAngka = parseFloat(inputHarga);
console.log("Harga angka:", hargaAngka);

// H. Menampilkan dua angka desimal
console.log("Harga format:", hargaAngka.toFixed(2));

// I. Menghitung panjang kalimat
console.log("Panjang kalimat:", kalimat.length);

//=== JS-9: Scope, Hoisting & Closure ===

console.log("=== JS-9: Scope, Hoisting, Closure ===");

// A. Global Scope
const namaGlobal = "RumahKita";

function tampilkanScope() {
    // Local Scope
    const namaLokal = "Rak Serbaguna";
    console.log("Global:", namaGlobal);
    console.log("Lokal:", namaLokal);
}

tampilkanScope();

// Block Scope
if (true) {
    let pesan = "Di dalam blok";
    console.log(pesan);
}

// console.log(pesan); // ReferenceError: pesan di luar blok

// B. Hoisting
sapa(); // Function declaration dapat dipanggil lebih dahulu

function sapa() {
    console.log("Halo dari RumahKita!");
}

console.log(nilaiVar); // undefined
var nilaiVar = 10;

// Baris berikut sengaja tidak dijalankan karena akan error:
// console.log(nilaiLet); // ReferenceError
let nilaiLet = 20;

// C. Closure
function buatKeranjang() {
    let items = [];
    let totalHarga = 0;

    return {
        tambahItem(nama, harga) {
            items.push({ nama, harga });
            totalHarga += harga;
        },

        hapusItem(nama) {
            const indeks = items.findIndex(
                item => item.nama === nama
            );

            if (indeks !== -1) {
                totalHarga -= items[indeks].harga;
                items.splice(indeks, 1);
            }
        },

        lihatKeranjang() {
            console.log("Isi keranjang:", items);
            console.log("Total harga:", totalHarga);
        }
    };
}

const keranjang1 = buatKeranjang();
const keranjang2 = buatKeranjang();

keranjang1.tambahItem("Rak Serbaguna", 150000);
keranjang1.tambahItem("Vas Bunga", 45000);
keranjang2.tambahItem("Lampu Meja", 85000);

keranjang1.lihatKeranjang();
keranjang2.lihatKeranjang();

keranjang1.hapusItem("Vas Bunga");
keranjang1.lihatKeranjang();
keranjang2.lihatKeranjang();

//=== JS-10: Date Object ===

console.log("=== JS-10: Date Object ===");

const sekarang = new Date();

// A. Format tanggal dalam bahasa Indonesia
const formatPanjang = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

console.log(
    "Tanggal sekarang:",
    sekarang.toLocaleDateString("id-ID", formatPanjang)
);

// B. Hari menuju Tahun Baru berikutnya
const tahunDepan = sekarang.getFullYear() + 1;
const tahunBaru = new Date(tahunDepan, 0, 1);

const selisih = tahunBaru.getTime() - sekarang.getTime();
const hariLagi = Math.ceil(
    selisih / (1000 * 60 * 60 * 24)
);

console.log("Hari menuju Tahun Baru:", hariLagi);

// C. Format DD/MM/YYYY
function formatTanggalIndonesia(date) {
    const hari = String(date.getDate()).padStart(2, "0");
    const bulan = String(date.getMonth() + 1).padStart(2, "0");
    const tahun = date.getFullYear();

    return `${hari}/${bulan}/${tahun}`;
}

console.log("Format tanggal:", formatTanggalIndonesia(sekarang));

// D. Contoh tanggal lahir
// Ganti dengan tanggal lahirmu sendiri.
const tanggalLahir = new Date(2005, 0, 1);

const umurDalamHari = Math.floor(
    (sekarang.getTime() - tanggalLahir.getTime()) /
    (1000 * 60 * 60 * 24)
);

console.log("Umur dalam hari:", umurDalamHari);

//=== JS-11: Destructuring, Spread & Rest ===

console.log("=== JS-11: Destructuring, Spread, Rest ===");

// A. Object Destructuring
const pesanan = {
    idPesanan: "ORD-001",
    pelanggan: "Budi",
    totalHarga: 750000,
    statusBayar: true,
    alamatKirim: "Jl. Merdeka No. 10"
};

const { idPesanan, pelanggan, totalHarga } = pesanan;

const { statusBayar: sudahBayar } = pesanan;

const { kurirPengiriman = "JNE" } = pesanan;

function cetakPesanan({ idPesanan, pelanggan }) {
    console.log("ID:", idPesanan);
    console.log("Pelanggan:", pelanggan);
}

console.log(idPesanan, pelanggan, totalHarga);
console.log("Sudah bayar:", sudahBayar);
console.log("Kurir:", kurirPengiriman);

cetakPesanan(pesanan);

// B. Array Destructuring
const koordinat = [106.8456, -6.2088, "Jakarta", "Indonesia"];

const [longitude, latitude] = koordinat;
const [, , , negara] = koordinat;

console.log("Longitude:", longitude);
console.log("Latitude:", latitude);
console.log("Negara:", negara);

// Menukar nilai variabel
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("a:", a, "b:", b);

// C. Spread Operator
const produkA = ["Rak", "Lampu"];
const produkB = ["Vas", "Panci"];

// Salinan array independen
const salinanProduk = [...produkA];
salinanProduk.push("Keset");

console.log("Array asli:", produkA);
console.log("Array salinan:", salinanProduk);

// Menggabungkan dua array dengan item baru di tengah
const gabungan = [
    ...produkA,
    "Produk Baru",
    ...produkB
];

console.log("Gabungan:", gabungan);

// Menyalin object dan mengubah harga
const produkLama = {
    nama: "Rak Serbaguna",
    harga: 150000
};

const produkBaru = {
    ...produkLama,
    harga: 135000
};

console.log("Produk lama:", produkLama);
console.log("Produk baru:", produkBaru);

// Mencari angka terbesar
const angka = [10, 50, 25, 100, 75];

console.log("Angka terbesar:", Math.max(...angka));

// D. Rest Parameter
function hitungRataRata(...angka) {
    if (angka.length === 0) {
        return 0;
    }

    const total = angka.reduce((jumlah, nilai) => jumlah + nilai, 0);
    return total / angka.length;
}

console.log("Rata-rata:", hitungRataRata(80, 90, 75, 95));

function buatPesanan(namaPemesan, ...daftarMenu) {
    console.log("Pemesan:", namaPemesan);
    console.log("Jumlah menu:", daftarMenu.length);
    console.log("Menu:", daftarMenu);
}

buatPesanan("Budi", "Rak Serbaguna", "Lampu Meja", "Vas Bunga");