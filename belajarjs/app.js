1+1;
console.warn('konsol loe');

let hari='rabu';

if (hari === 'sabtu'){
    console.log('selamat hari sabtu yaaa ');
} else if (hari === 'senin'){
    console.log('booring day..');
} else {
    console.log('nunggu sabtu ye?');
}

const nilai = 20;

if (nilai>80){
    console.log('lulus memuaskan');
} else {
    console.log('dongok lu ..');
}

// const passW = prompt('masukkan paswot');

// if (passW.length >=6){
//     if (passW.indexOf(' ')===-1){
//         console.log('paswot PALID');
//     } else {
//         console.log('paswot invalid -> mengandung spasi');
//     }
// } else {
//     console.log('paswot kureng dari 6 KARAKTER');
// }

// let umor = 20;
// let gender = 'loki';

// if (gender === 'laki' || umor>=18){
//     console.log ('sudah gedeee');
// } else {
//     console.log('bocil kamu dekkk');
// }

// const roleAnda = prompt('masukkan role anda: ');

// if (roleAnda !== 'admin'){
//     console.log('akses di to lak');
// } else {
//     console.log('akses diterima');
// }

const balonKu = prompt('isikan warna balon');

switch(balonKu){
    case 'merah':
        console.log('balon PDI p');
        break;
    case 'hijau':
        console.log(' d o o r ..');
        break;
    default:
        console.log('bukan balon saya ..');
}