function hitungTotalBelanja(daftarBelanja) {
    let total = 0;

    for (let item of daftarBelanja) {
        total += item.harga * item.jumlah;
    }
    return total;
}

console.log(hitungTotalBelanja([
    { nama: "Buku", harga: 50000, jumlah: 2 },
    { nama: "Pulpen", harga: 15000, jumlah: 3 }
]));
// Output: 145000