/**
 * Mengubah angka menjadi format singkat dengan sufiks 'K' dan pemisah ribuan.
 * @param amount - Angka yang akan diformat
 * @returns String yang diformat dengan satuan 'K' dan pemisah ribuan
 */
export function formatToK(amount: number): string {
    return `${(amount / 1000).toLocaleString("id-ID")}K`;
  }