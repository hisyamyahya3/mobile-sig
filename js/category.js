function category () {
    $.ajax({
        url: "https://hisyamyahya3.ftiunwaha.my.id/api_sig/api_kategori.php",
        method: "GET",
        success: function (result) {
            let data = JSON.parse(result)
            let temp = "";
            
            data.forEach((d) => {
                temp += `
                    <div class="card" onclick="showCategory(${d.id})">
                        <div class="card-content card-content-padding">
                            <h4>${d.nama}</h4>
                        </div>
                    </div>
                `
            })

            $("#category").html(temp);
        },
        error: function () {
            app.dialog.alert("Tidak Terhubung dengan Server!", "Error");
        }
    })
}

function showCategory (category_id, nama) {
    console.log(`${category_id} dan ${nama}`)
    localStorage.setItem("categoryName", nama);
    app.views.main.router.navigate(`/category/${category_id}`);
}

function detailCategory (detail_id, detail_nama, lintang, bujur, alamat) {
    console.log(`nomor: ${detail_id} nama: ${detail_nama}, koordinat: ${lintang}, ${bujur} alamat: ${alamat}`)
    localStorage.setItem("detailCategoryName", detail_nama);
    localStorage.setItem("categoryLat", lintang);
    localStorage.setItem("categoryLong", bujur);
    app.views.main.router.navigate(`/detail-category/${detail_id}/${lintang}/${bujur}/${alamat}`);
}

function shareke(tujuan){
    let lintang = localStorage.getItem("categoryLat");
    let bujur = localStorage.getItem("categoryLong");
    console.log(`${lintang} & ${bujur}`);
    let link;
    let url = `https://www.google.com/maps/place/${lintang},${bujur}`;
    if(tujuan == "wa"){
        link = `https://wa.me/?text=${encodeURIComponent(url)}`;
    }else{
        link = url;
    }
    cordova.InAppBrowser.open(link, "_system", "location=no");
}
