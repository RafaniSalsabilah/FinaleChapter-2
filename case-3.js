getAngkaTerbesarKedua = (personName) => {
    if (!Array.isArray(personName)) {
        return "ERROR : Invalid data type and Can't read the length" //pengecekan tipe data undefined
    } 

    if (personName.length < 2) {
      return "ERROR : Elemen dalam Index tidak tersedia" //pengecekan elemen index jika tidak sesuai dengan array yang tersedia
    }
  
    let besar = -Infinity //deklarasi tidak ada nilai terkecil
    let besarBesar = -Infinity //deklarasi lanjutan atas tidak ada nilai terkecil

    personName.map((angka) => {
      if (angka > besar) {
        besar = angka;
      } else if (angka !== besar && angka > besarBesar) {
        besarBesar = angka;
      }
    })

  return besarBesar
}

let dataNumbers = [9, 4, 7, 7, 4, 3, 2, 2, 8]//array angka yang akan dicari angka terbesar kedua

console.log(getAngkaTerbesarKedua(dataNumbers))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())
// console.log(getAngkaTerbesarKedua([])) //-- jika ingin keluar output "ERROR : Elemen dalam Index tidak tersedia"
