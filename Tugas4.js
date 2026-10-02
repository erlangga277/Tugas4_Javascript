//Class Kendaraan (Superclass)
class Kendaraan {
    constructor(merek, platNomor) {
        this.merek = merek;
        this.platNomor = platNomor;
    }

    getInfo() {
        return `${this.merek} (${this.platNomor})`;
    }
}

//Class Pelanggan
class Pelanggan {
    #nama;
    #nomorTelepon;
    #kendaraanDisewa;

    constructor(nama, nomorTelepon) {
        this.#nama = nama;
        this.#nomorTelepon = nomorTelepon;
        this.#kendaraanDisewa = null;
    }

    // Getter
    get nama() {
        return this.#nama;
    }

    get nomorTelepon() {
        return this.#nomorTelepon;
    }

    get kendaraanDisewa() {
        return this.#kendaraanDisewa;
    }

    // Metode untuk mencatat transaksi penyewaan kendaraan
    catatSewa(kendaraan) {
        this.#kendaraanDisewa = kendaraan;
        console.log(`[BERHASIL] ${this.#nama} telah menyewa kendaraan ${kendaraan.getInfo()}`);
    }
}

//Class Sistem Manajemen Transportasi
class SistemTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    // Metode untuk menampilkan daftar pelanggan yang sedang menyewa
    tampilkanPelangganAktif() {
        console.log("\n==========================================");
        console.log(" DAFTAR PELANGGAN YANG SEDANG MENYEWA");
        console.log("==========================================");

        const penyewaAktif = this.daftarPelanggan.filter(p => p.kendaraanDisewa !== null);

        if (penyewaAktif.length === 0) {
            console.log("Saat ini tidak ada pelanggan yang sedang menyewa.");
            return;
        }

        penyewaAktif.forEach((p, index) => {
            console.log(`${index + 1}. Nama     : ${p.nama}`);
            console.log(`   No. HP   : ${p.nomorTelepon}`);
            console.log(`   Kendaraan: ${p.kendaraanDisewa.getInfo()}`);
            console.log("------------------------------------------");
        });
    }
}


//  Objek Sistem & Kendaraan
const sistem = new SistemTransportasi();
const mobil1 = new Kendaraan("Toyota Avanza", "F 1234 ACC");
const motor1 = new Kendaraan("Honda Vario", "F 5678 DER");

//  Objek Pelanggan
const pelanggan1 = new Pelanggan("Erlangga", "08123336989");
const pelanggan2 = new Pelanggan("Gareng", "08987656721");

// Registrasi ke Sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// Mencatat Transaksi Penyewaan
pelanggan1.catatSewa(mobil1);
pelanggan2.catatSewa(motor1);

// Menampilkan Daftar Pelanggan Aktif Menyewa
sistem.tampilkanPelangganAktif();