var nim="2401010006"
var urlAPI = "https://apimhstiki.ptov.my.id/"
var urlREAD = urlAPI+`testi-${nim}/read`
// console.log(urlREAD)
$(function(){
    $.ajax({
        url: urlREAD,
        method: 'GET' ,
        dataType:'json',
        success:function(dta){
            let tbdta = ""
            let ipx = ""      
            if(dta.error==0){
                // ini untuk code 0
                dta.TESTI.forEach(function(isi){
                    tbdta += `<tr>
            <td>${isi.NAMA}</td>
            <td>${isi.EMAIL}</td>
            <td>${isi.TESTI}</td>
            <td>${isi.GRAVATAR}</td>
            <td><a onclick="destroy("${isi.IDX}") class="btn btn-danger" btn-sm> Hapus </a></td>
        </tr>`
                })

            }else{
                // ini bagian untuk error selain code 0
                if(dta.error==4){
                // ini untuk code 4

                dta.TESTI.forEach(function(isi){
                    tbdta += `<tr>
            <td>${isi.NAMA}</td>
            <td>${isi.EMAIL}</td>
            <td>${isi.TESTI}</td>
            <td>${ipx}</td>
            <td</td>
        </tr>`
                })
                }
            }
            $("tbody").html(tbdta)
        },
        error:function(){

        },
        error:function(){
            console.log("Gagal membaca data")
        },

    })
})