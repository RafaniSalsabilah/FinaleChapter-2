let dataPenjualanNovel = [
  {idProduct: 'BOOK002421', namaProduk: 'Pulang - Pergi', penulis: 'Tere Liye', hargaBeli: 60000, hargaJual: 86000, totalTerjual: 150, sisaStok: 17},
  {idProduct: 'BOOK002351', namaProduk: 'Selamat Tinggal', penulis: 'Tere Liye', hargaBeli: 75000, hargaJual: 103000, totalTerjual: 171, sisaStok: 20},
  {idProduct: 'BOOK002941', namaProduk: 'Garis Waktu', penulis: 'Fiersa Besari', hargaBeli: 67000, hargaJual: 99000, totalTerjual: 213, sisaStok: 5},
  {idProduct: 'BOOK002941', namaProduk: 'Laskar Pelangi', penulis: 'Andrea Hirata', hargaBeli: 55000, hargaJual: 68000, totalTerjual: 20, sisaStok: 56}
]

getInfoPenjualan = (dataPenjualan) => {
  let totalModal = 0 //deklarasi tipe data
  let totalKeuntungan = 0 //deklarasi tipe data
  let persentaseKeuntungan = 0 //deklarasi tipe data
  let produkBukuTerlaris = " " //deklarasi tipe data
  let penulisTerlaris = " " //deklarasi tipe data

  dataPenjualan.map(getBuku = (buku) => {
    const modal = buku.hargaBeli * buku.totalTerjual //perhitungan modal yang dikeluarkan dari setiap produk
    const keuntungan = (buku.hargaJual - buku.hargaBeli) * buku.totalTerjual // perhitungan keuntungan yang didapatkan dari setiap produk
    if (typeof totalModal == 'number' && typeof totalKeuntungan == 'number') {
      totalModal += modal //console.log(modal) -- modal yang dikeluarkan dari setiap produk
      totalKeuntungan += keuntungan //console.log(keuntungan) -- keuntungan yang didapatkan dari setiap produk

      if (buku.totalTerjual > produkBukuTerlaris.totalTerjual || produkBukuTerlaris == " ") {// console.log(buku.totalTerjual) -- total buku yang terjual // console.log(produkBukuTerlaris.totalTerjual) -- berisi total buku di index sebelumnya yang terjual
        produkBukuTerlaris = buku
      }

      if (buku.totalTerjual > penulisTerlaris.totalTerjual || penulisTerlaris == " ") {// console.log(buku.totalTerjual) -- total buku yang terjual // console.log(penulisTerlaris.totalTerjual) -- total buku di index sebelumnya yang terjual sesuai penulisnya
        penulisTerlaris = buku
      }
      
    } else return "ERROR : Invalid data type"
  })

  persentaseKeuntungan = (totalKeuntungan / totalModal) * 100 //perhitungan keuntungan dalam persen
  totalKeuntungan = totalKeuntungan
  totalModal = totalModal
  persentaseKeuntungan = persentaseKeuntungan.toFixed(0) + "%"
  produkBukuTerlaris = produkBukuTerlaris    
  penulisTerlaris = penulisTerlaris

  console.log("Total Keuntungan :" ,"Rp", totalKeuntungan.toLocaleString('id-ID'))
  console.log("Total Modal :" ,"Rp", totalModal.toLocaleString('id-ID'))
  console.log("Persentase Keuntungan :", persentaseKeuntungan)
  console.log("Produk Buku Terlaris :", produkBukuTerlaris.namaProduk)
  console.log("Penulis Buku Terlaris :", penulisTerlaris.penulis)

  return {
    totalKeuntungan,
    totalModal,
    persentaseKeuntungan,
    produkBukuTerlaris,    
    penulisTerlaris : penulisTerlaris
  }

}

console.log(getInfoPenjualan(dataPenjualanNovel))
