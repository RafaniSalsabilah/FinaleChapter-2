getAngkaTerbesarKedua = (personName) => {
    if (!Array.isArray(personName) || personName.length < 2 && typeof dataNumbers != 'object') {
        return "ERROR : Invalid data type" //pengecekan apabila tipe data array != object
    } else if (typeof getAngkaTerbesarKedua != 'undefined'){  //pengecekan apabila tipe data function != undefined
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

    } else{ //output ketika data beserta parameternya tidak sesuai 
      return "ERROR : Where is the parameter?"
    }

}

const dataNumbers = [9, 4, 7, 7, 4, 3, 2, 2, 8]//array angka yang akan dicari angka terbesar kedua

console.log(getAngkaTerbesarKedua(dataNumbers))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())
