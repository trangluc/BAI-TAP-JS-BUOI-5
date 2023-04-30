function getEle(id) {
    return document.getElementById(id);
};

//BÀI TẬP 1
function tinhDiem() {
    var diemChuan = parseInt(getEle("diemChuan").value);

    var diemMon1 = parseInt(getEle("diemMon1").value);
    var diemMon2 = parseInt(getEle("diemMon2").value);
    var diemMon3 = parseInt(getEle("diemMon3").value);

    var khuVuc = parseInt(getEle("khuVuc").value);

    var doiTuong = parseInt(getEle("doiTuong").value);

    var diemTong = 0;
    var diemUuTien = 0;

    diemUuTien = khuVuc + doiTuong;
    diemTong = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

    if (diemTong >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        getEle("ketQua").innerHTML = "Chúc mừng! Bạn đã đậu tuyển sinh 🎉"
    } else if (diemTong < diemChuan) {
        getEle("ketQua").innerHTML = "Bạn đã rớt tuyển sinh do điểm thi thấp hơn điểm chuẩn đề ra"
    } else if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        getEle("ketQua").innerHTML = "Bạn đã rớt tuyển sinh do có môn thi 0 điểm"
    }
};

// BÀI TẬP 2
function tinhTien () {
    var khachHang = getEle("khachHang").value;
    var soKw = getEle("soKw").value;

    var tongTien = 0;

     //format VND
     var currentFormat = new Intl.NumberFormat('vn-VN');

    if (soKw <= 50 && soKw > 0) {
        tongTien = soKw * 500;
    } else if (soKw > 50 && soKw <= 100) {
        tongTien = (50 * 500) + ((soKw - 50) * 650);
    } else if (soKw >100 && soKw <= 200) {
        tongTien = (50 * 500) + (50 * 650) + ((soKw -100) * 850);
    } else if (soKw > 200 && soKw <=350) {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + ((soKw - 200) * 1100);
    } else if (soKw > 350) {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soKw - 350) * 1300);
    } else {
        alert("Số KW không hợp lệ! Vui lòng nhập lại");
    }

    getEle("ketQua2").innerHTML = " Khách hàng " + khachHang + " cần thanh toán tổng tiền điện là " + currentFormat.format(tongTien) + "VND"
}

//BÀI TẬP 3
function tinhThueTNCN () {
    var nguoiNopThue = getEle("nguoiNopThue").value;
    var tongThuNhap = getEle("tongThuNhap").value;
    var soNguoiPhuThuoc = getEle("soNguoiPhuThuoc").value;

    var tax = 0

    var currentFormat = new Intl.NumberFormat('vn-VN');

    income = tongThuNhap - 4e+6 - soNguoiPhuThuoc * 16e+5;

    if (income <= 6e+7 && income > 0) {
        tax = income * 5 / 100;
    } else if (income > 6e+7 && income <= 12e+7) {
        tax = income * 10 / 100;
    } else if (income > 12e+7 && income <= 21e+7) {
        tax = income * 15 / 100;
    } else if (income > 21e+7 && income <= 384e+6) {
        tax = income * 20 / 100;
    } else if (income > 384e+6 && income <= 624e+6) {
        tax = income * 25 / 100;
    } else if (income > 624e+6 && income <= 96e+7) {
        tax = income * 30 / 100;
    } else if (income > 96e+7) {
        tax = income * 35 / 100;
    } else {
        alert("Tổng thu nhập năm chưa đúng! Vui lòng nhập lại");
    }
    
    getEle("ketQua3").innerHTML = " Họ tên người nộp thuế " + nguoiNopThue + " cần thanh toán số thuế là " + currentFormat.format(tax) + "VND"
}

// BÀI TẬP 4
function myFunction() {
    var loaiKH = document.getElementById("loaiKH").value;
    var soKetNoi = document.getElementById("soKetNoi");
    if (loaiKH == "DoanhNghiep") {
        soKetNoi.style.display = "block";
    } else {
        soKetNoi.style.display = "none";
    }
}


function tinhHoaDon() {
    var maKH = getEle("maKH").value;
    var loaiKH = getEle("loaiKH").value;
    var soKetNoiDiv = getEle("soKetNoiDiv").value;
    var soKenhCaoCap = getEle("soKenhCaoCap").value;
    var phiXuLyHD = 0;
    var phiDichVuCoBan = 0;
    var thueKenhCaoCap = 0;
    var tongTien = 0;

    if (loaiKH == "NhaDan") {
        phiXuLyHD = 4.5;
        phiDichVuCoBan = 20.5;
        thueKenhCaoCap = 7.5 * soKenhCaoCap;
        soKetNoi.style.display = "none";
    } else if (loaiKH == "DoanhNghiep") {
        phiXuLyHD = 15;

        if (soKetNoiDiv <= 10) {
            phiDichVuCoBan = 75;
        } else {
            phiDichVuCoBan = 75 + (soKetNoiDiv - 10) * 5;
        }
        thueKenhCaoCap = 50 * soKenhCaoCap;
    }

    tongTien = phiXuLyHD + phiDichVuCoBan + thueKenhCaoCap;
    getEle("tongTien").innerHTML = "Mã khách hàng: " + maKH + " - " + "Tiền cáp cần thanh toán là: " + tongTien + "$";
}







