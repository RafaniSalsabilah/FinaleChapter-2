changeWord = (selectedText, changedText, text) => {
    let word = text.split(" ") //kalimat dipisah menjadi beberapa kata dengan adanya pembatas berupa spasi
    // console.log(word) -- kalimat 1 dan 2 yang dipecah menjadi kata

    let newT = word.map(function(kata) {
      if (kata === selectedText) {// console.log(selectedText) -- kata yang dipilih untuk diganti
        return changedText // console.log(changedText) -- kata baru untuk mengganti
      } else {
        return kata // console.log(kata) -- kalimat 1 dan 2 dipecah menjadi kata tanpa memunculkan kata yang akan diganti
      }
    })
    return newT.join(" ") //kalimat baru akan terbentuk dengan adanya penggabungan atau pergantian kata sesuai permintaan user
}

const kalimat1 = "Andini sangat mencintai kamu selamanya"
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"

console.log(changeWord('mencintai','membenci',kalimat1))
console.log(changeWord('bromo','semeru',kalimat2))  
