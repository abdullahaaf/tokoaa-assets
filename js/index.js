"use strict";

var dataTable;

function reload_table() {
    dataTable.ajax.reload(null, false);
}
// Start code for CSRF
// Django basic setup for accepting ajax requests.
// Cookie obtainer Django
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

// Setup ajax connection safetly

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
// End code for CSRF

// Start sroll ke atas
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
function kembali_keatas() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
}

function kembali_kebawah() {
    let bottom = $(document).height() - $(window).height();
    $('body,html').animate({
        scrollTop: bottom
    }, 800);
    return false;
}
// Enc scroll ke atas

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
    let number_string = angka.toString().replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}


// var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
//     datasets: [{
//       label: 'Sales',
//       data: [3200, 1800, 4305, 3022, 6310, 5120, 5880, 6154],
//       borderWidth: 2,
//       backgroundColor: 'rgba(63,82,227,.8)',
//       borderWidth: 0,
//       borderColor: 'transparent',
//       pointBorderWidth: 0,
//       pointRadius: 3.5,
//       pointBackgroundColor: 'transparent',
//       pointHoverBackgroundColor: 'rgba(63,82,227,.8)',
//     },
//     {
//       label: 'Budget',
//       data: [2207, 3403, 2200, 5025, 2302, 4208, 3880, 4880],
//       borderWidth: 2,
//       backgroundColor: 'rgba(254,86,83,.7)',
//       borderWidth: 0,
//       borderColor: 'transparent',
//       pointBorderWidth: 0 ,
//       pointRadius: 3.5,
//       pointBackgroundColor: 'transparent',
//       pointHoverBackgroundColor: 'rgba(254,86,83,.8)',
//     }]
//   },
//   options: {
//     legend: {
//       display: false
//     },
//     scales: {
//       yAxes: [{
//         gridLines: {
//           // display: false,
//           drawBorder: false,
//           color: '#f2f2f2',
//         },
//         ticks: {
//           beginAtZero: true,
//           stepSize: 1500,
//           callback: function(value, index, values) {
//             return '$' + value;
//           }
//         }
//       }],
//       xAxes: [{
//         gridLines: {
//           display: false,
//           tickMarkLength: 15,
//         }
//       }]
//     },
//   }
// });

// var balance_chart = document.getElementById("balance-chart").getContext('2d');

// var balance_chart_bg_color = balance_chart.createLinearGradient(0, 0, 0, 70);
// balance_chart_bg_color.addColorStop(0, 'rgba(63,82,227,.2)');
// balance_chart_bg_color.addColorStop(1, 'rgba(63,82,227,0)');

// var myChart = new Chart(balance_chart, {
//   type: 'line',
//   data: {
//     labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
//     datasets: [{
//       label: 'Balance',
//       data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
//       backgroundColor: balance_chart_bg_color,
//       borderWidth: 3,
//       borderColor: 'rgba(63,82,227,1)',
//       pointBorderWidth: 0,
//       pointBorderColor: 'transparent',
//       pointRadius: 3,
//       pointBackgroundColor: 'transparent',
//       pointHoverBackgroundColor: 'rgba(63,82,227,1)',
//     }]
//   },
//   options: {
//     layout: {
//       padding: {
//         bottom: -1,
//         left: -1
//       }
//     },
//     legend: {
//       display: false
//     },
//     scales: {
//       yAxes: [{
//         gridLines: {
//           display: false,
//           drawBorder: false,
//         },
//         ticks: {
//           beginAtZero: true,
//           display: false
//         }
//       }],
//       xAxes: [{
//         gridLines: {
//           drawBorder: false,
//           display: false,
//         },
//         ticks: {
//           display: false
//         }
//       }]
//     },
//   }
// });

// var sales_chart = document.getElementById("sales-chart").getContext('2d');

// var sales_chart_bg_color = sales_chart.createLinearGradient(0, 0, 0, 80);
// balance_chart_bg_color.addColorStop(0, 'rgba(63,82,227,.2)');
// balance_chart_bg_color.addColorStop(1, 'rgba(63,82,227,0)');

// var myChart = new Chart(sales_chart, {
//   type: 'line',
//   data: {
//     labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
//     datasets: [{
//       label: 'Sales',
//       data: [70, 62, 44, 40, 21, 63, 82, 52, 50, 31, 70, 50, 91, 63, 51, 60],
//       borderWidth: 2,
//       backgroundColor: balance_chart_bg_color,
//       borderWidth: 3,
//       borderColor: 'rgba(63,82,227,1)',
//       pointBorderWidth: 0,
//       pointBorderColor: 'transparent',
//       pointRadius: 3,
//       pointBackgroundColor: 'transparent',
//       pointHoverBackgroundColor: 'rgba(63,82,227,1)',
//     }]
//   },
//   options: {
//     layout: {
//       padding: {
//         bottom: -1,
//         left: -1
//       }
//     },
//     legend: {
//       display: false
//     },
//     scales: {
//       yAxes: [{
//         gridLines: {
//           display: false,
//           drawBorder: false,
//         },
//         ticks: {
//           beginAtZero: true,
//           display: false
//         }
//       }],
//       xAxes: [{
//         gridLines: {
//           drawBorder: false,
//           display: false,
//         },
//         ticks: {
//           display: false
//         }
//       }]
//     },
//   }
// });

// $("#products-carousel").owlCarousel({
//   items: 3,
//   margin: 10,
//   autoplay: true,
//   autoplayTimeout: 5000,
//   loop: true,
//   responsive: {
//     0: {
//       items: 2
//     },
//     768: {
//       items: 2
//     },
//     1200: {
//       items: 3
//     }
//   }
// });
