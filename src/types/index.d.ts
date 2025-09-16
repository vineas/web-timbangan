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

interface Customer {
    id: number;
    kode_customer: number;
    nama_customer: string;
    alamat: string;
    kota: string;
    telepon: number;
    facsimile: number;
    pic: string;
}

export type { Barang, Transporter, Customer };