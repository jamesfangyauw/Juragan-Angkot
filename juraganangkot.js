let penumpang = ['james',undefined,'bali']
let tambahpenumpang= function(namapenumpang, penumpang){
    if (penumpang.length == 0){
        penumpang.push(namapenumpang)
        return penumpang
    }
    else {
        for (i=0;i<penumpang.length;i++){
            if (penumpang[i]==namapenumpang){
               return console.log(namapenumpang + ' sudah berada di angkot')    
            }
            else if (penumpang[i]==undefined){
                for(let j=i ; j<penumpang.length;j++)
                {
                    if (penumpang[j]==namapenumpang){
                        return console.log(namapenumpang + ' sudah berada di angkot')
                    }
                }
                penumpang[i]=namapenumpang
                return console.log(penumpang.join())
            }
            else if (i == penumpang.length-1){
                penumpang.push(namapenumpang)
                return console.log(penumpang.join())
            }
        }
    }
}
let x =true
while(x){
let nama =prompt("masukan nama angkot")
tambahpenumpang(nama, penumpang)
x=confirm("apakah masih mau tambah lagi ?")
}