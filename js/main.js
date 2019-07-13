$(document).ready(function() {
    $('#name').show()
    $('#navbar').hide()
    $('#front-page').hide()
    $('#content-page').hide()
    $('.carousel').carousel()
    $('.submit').submit(function() {
        event.preventDefault()
        $('#name').empty()
        const queryBox = $('#inputname').val()
        $('#front-page').show()
            $('#front-page').prepend(
                `
                    <h1  style="text-align:center">Beautiful Malang</h1>
                    <p style="text-align:center"> Hello ${queryBox} 🤩</p>
                `
            )
    })
    $('#bromo').click(function() {
        event.preventDefault()
        bromo()
    })
    $('#sendangbiru').click(function() {
        event.preventDefault()
    })
    $('#home').click(function() {
        event.preventDefault()
        
    })
})
function sayHello() {
    $('#name').hide()
    $('#navbar').hide()
    $('#content-page').hide()
    const queryBox = $('#inputname').val()
    $('#front-page').show()
    $('#front-page').prepend(
        `
            <h1  style="text-align:center">Beautiful Malang</h1>
            <p style="text-align:center"> Hello ${queryBox} 🤩</p>
        `
    )
}
function sendangbiru() {
    $('#content-page').empty()
    $('#front-page').hide()
    $('#navbar').show()
    $('#content-page').show()
    $('#content-page').append(
        `
            <img id="mg" class="d-block w-100" src="http://blog.airyrooms.com/wp-content/uploads/2018/09/Socmed-Bromo-800x500px.png" alt="Cinque Terre" width="1000" height="300">    
            <div class="center"><h3>Sendang Biru</h3></div>
            <p>
            <b>Pantai Sendangbiru</b>  adalah sebuah pantai di pesisir selatan yang terletak di tepi Samudera Indonesia secara administratif berada di Dusun Sendangbiru, Desa Tambakrejo, Kecamatan Sumbermanjing Wetan, Kabupaten Malang, Jawa Timur[1]. Pantai Sendangbiru merupakan salah satu wanawisata yang dimiliki oleh Perum Perhutani dan dikelola oleh KBM JLPL Unit II. Terletak di petak 81 dan 86 dengan luas baku 50 ha dan luas area manfaat 3 ha, RPH Sumber Agung, BKPH Sumbermanjing, KPH Malang termasuk kelas hutan lindung. Jarak dari Kota Malang sekitar 67 kilometer dan diperlukan waktu sekitar 2-2,5 jam untuk sampai ke Pantai Sendangbiru. Satu-satunya sarana transportasi adalah kendaraan pribadi, karena tidak ada angkutan umum yang melintas di sana. Pantai ini tidak jauh letaknya dari Pantai Goa China, hanya dibutuhkan waktu sekitar 15 menit dengan kendaraan bermotor. Dari JLS masuk menuju bibir pantai pun juga sudah beraspal. Hanya sebagian ruas jalan saja yang aspalnya mengelupas. Pantai Sendangbiru mulai dibuka pertama tahun 1970. Hanya saja waktu itu masih nelayan lokal. Baru pada 1980-an, nelayan dari luar daerah juga masuk ke Sendangbiru. 
            Hal itu karena dibangunnya pangkalan pendaratan ikan Pondokdadap pada tahun 1980-1989.
            Sedangkan daerah bahayanya berupa lingkaran dengan jari-jari 4 km dari pusat kawah Bromo.</p>
        `
    )
}
function bromo() {
    $('#content-page').empty()
    $('#front-page').hide()
    $('#navbar').show()
    $('#content-page').show()
    $('#content-page').append(
        `
            <img id="mg" class="d-block w-100" src="http://blog.airyrooms.com/wp-content/uploads/2018/09/Socmed-Bromo-800x500px.png" alt="Cinque Terre" width="1000" height="300">    
            <div class="center"><h3>Bromo</h3></div>
            <p>
            <b>Gunung Bromo</b> (dari bahasa Sanskerta: Brahma, salah seorang Dewa Utama dalam agama Hindu)
             atau dalam bahasa Tengger dieja "Brama", adalah sebuah gunung berapi aktif di Jawa Timur, Indonesia. 
             Gunung ini memiliki ketinggian 2.329 meter di atas permukaan laut dan berada dalam empat wilayah kabupaten, yakni Kabupaten Probolinggo, Kabupaten Pasuruan, Kabupaten Lumajang, dan Kabupaten Malang. 
             Gunung Bromo terkenal sebagai objek wisata utama di Jawa Timur. Sebagai sebuah objek wisata, Bromo menjadi menarik karena statusnya sebagai gunung berapi yang masih aktif. 
             Gunung Bromo termasuk dalam kawasan Taman Nasional Bromo Tengger Semeru.
            Bentuk tubuh Gunung Bromo bertautan antara lembah dan ngarai dengan kaldera atau lautan pasir seluas sekitar 10 kilometer persegi. 
            Ia mempunyai sebuah kawah dengan garis tengah ± 800 meter (utara-selatan) dan ± 600 meter (timur-barat). 
            Sedangkan daerah bahayanya berupa lingkaran dengan jari-jari 4 km dari pusat kawah Bromo.</p>
        `
    )
}


