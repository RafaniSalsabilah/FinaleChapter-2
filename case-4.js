let dataPenjualanPakAldi = [
    {namaProduct: 'Sepatu Futsal Nike Vapor Academy 8', hargaSatuan: 760000, kategori: "Sepatu Sport", totalTerjual: 90},
    {namaProduct: 'Sepatu Warrior Tristan Black Brown High - Original', hargaSatuan: 960000, kategori: "Sepatu Sneaker", totalTerjual: 37},
    {namaProduct: 'Sepatu Warrior Tristan Maroon High - Original', hargaSatuan: 360000, kategori: "Sepatu Sneaker", totalTerjual: 90},
    {namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original', hargaSatuan: 120000, kategori: "Sepatu Sneaker", totalTerjual: 90}
]

getTotalPenjualan = (dataPenjualan) => {
    let totalTerjualArr = dataPenjualan.map(value => value.totalTerjual) //pengambilan data totalTerjual di semua index data dan dijadikan satu array

    let totalTerjual = 0 //deklarasi tipe data
    for (let terjual of totalTerjualArr) {
        totalTerjual += terjual //penjumlahan keseluruhan totalTerjual
    } 
    // console.log(totalTerjualArr)  
    return totalTerjual
}

console.log(getTotalPenjualan(dataPenjualanPakAldi))
// console.log(getTotalPenjualan(dataPenjualanPakAldi), "dari mana? dari setiap value proptery 'totalTerjual', yaitu 90 + 37 + 90 + 90")