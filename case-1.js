changeWord = (selectedText, changedText, text) => {
    let word = text.split(" ") //kalimat dipisah menjadi beberapa kata dengan adanya pembatas berupa spasi
    // console.log(word)

    let newT = word.map(function(kata) {
      if (kata === selectedText) {
        // console.log(selectedText)
        // console.log(changedText)
        return changedText
      } else {
        // console.log(kata)
        return kata
      }
    })
    return newT.join(" ") //kalimat baru akan terbentuk dengan adanya penggabungan atau pergantian kata sesuai permintaan user
}

const kalimat1 = "Andini sangat mencintai kamu selamanya"
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"

console.log(changeWord('mencintai','membenci',kalimat1))
console.log(changeWord('bromo','semeru',kalimat2))  