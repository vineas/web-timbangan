interface Barang {
    id: number;
    kode_barang: number;
    nama_barang: string;
}

interface Transporter {
    id: number;
    kode_transporter: number;
    nama_transporter: string;
}

export type { Barang, Transporter };