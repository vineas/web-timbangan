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

interface SupplierCustomer {
    id: number;
    kode_supplier_customer: number;
    nama_supplier_customer: string;
    alamat: string;
    kota: string;
    telepon: number;
    facsimile: number;
    pic: string;
}

type WeightDisplayProps = {
    weight: number;
};

export type { Barang, Transporter, SupplierCustomer, WeightDisplayProps };