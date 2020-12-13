// ---------------------------------------------------------------------------------------------------------------------
// các hàm phục vụ cho việc check dữ liệu, clear dữ liệu khi bật FormData,
// đóng mở form ,dán dữ liệu từ hàng vào form,................ ở đây nhé !
// ---------------------------------------------------------------------------------------------------------


// hàm mở form
function openNav() {
    //hàm xóa sạch thông tin khi mở form thêm mới !
    document.getElementById("myForm").style.height = "70%";
    document.getElementById("overlay2").style.display = "block";

    document.getElementById("myInput").focus();
}

// hàm đóng form(dùng cho các nút X, thoát)
function closeNav() {
    document.getElementById("myForm").style.height = "0%";
    document.getElementById("overlay2").style.display = "none";
    document.getElementById("myInput").focus();
}


