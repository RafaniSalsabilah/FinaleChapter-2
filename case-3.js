getAngkaTerbesarKedua = (personName) => {
    if (!Array.isArray(personName)) {
        return "ERROR : Invalid data type and Can't read the length" //pengecekan tipe data undefined
    } 

    if (personName.length < 2) {
      return "ERROR : Elemen dalam Index tidak tersedia" //pengecekan elemen index jika tidak sesuai dengan array yang tersedia
    }
  
    let besar = -Infinity //deklarasi tidak ada nilai terkecil
    let besarBesar = -Infinity //deklarasi lanjutan atas tidak ada nilai terkecil
  
    for (let i = 0; i < personName.length; i++) { //elemen dalam array akan dibandingkan sehingga ditemukan elemen terbesar dan terbesar kedua
      if (personName[i] > besar) {
        besar = personName[i] // console.log(besar) -- berisi angka dalam array yang memiliki nilai terbesar
      } else if (personName[i] > besarBesar && personName[i] != besar) {
        besarBesar = personName[i] // console.log(besarBesar) -- berisi angka yang terbesar selanjutnya
      }
    }
  return besarBesar;
}

let dataNumbers = [9, 4, 7, 7, 4, 3, 2, 2, 8]//array angka yang akan dicari angka terbesar kedua

console.log(getAngkaTerbesarKedua(dataNumbers))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())
// console.log(getAngkaTerbesarKedua([])) //-- jika ingin keluar output "ERROR : Elemen dalam Index tidak tersedia"
