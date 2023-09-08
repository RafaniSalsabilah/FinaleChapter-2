checkTypeNumber = (givenNumber) => {
    if (typeof givenNumber == 'undefined') { //tipe data undefined
        return "Error : Bro where is the parameter?" 
    } else {
        if (typeof givenNumber == 'number') { //tipe data selain undefined
            if (givenNumber % 2 == 0) { //angka habis dibagi 2
                return "GENAP"
            } else {
                return "GANJIL"
            }
        } else { //tipe data selain number
            return "Error : Invalid data type"
        } 
    }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3")) //tipe data tidak sesuai karena yang diminta number
console.log(checkTypeNumber({})) //tipe data tidak sesuai karena yang diminta number
console.log(checkTypeNumber([])) //tipe data tidak sesuai karena yang diminta number
console.log(checkTypeNumber()) // tidak ada parameter tipe data yang diminta
