// const userName = document.getElementById("#username")
// const email = document.getElementById("#email")
// const tel = document.getElementById("#tel")
// const songs = document.getElementById("#songs")
// const playlists = document.getElementById("#playlists")
// const cbvip = document.getElementById("#vip")
// const cbregular = document.getElementById("#regular")
// const btnAdd = document.getElementById("#btn")

// btnAdd.addEventListener("click", function(){
//     alert("Thông tin bạn vừa thêm là: " + userName + email + tel + songs + playlists + cbvip + cbregular);
// });

// //alert("Thông tin bạn vừa thêm là: " + userName + email + tel + songs + playlists + cbvip + cbregular)

function ValidControl(ctrl,msg)
{
	if(ctrl.value==""||ctrl.value==null)
	{
		alert(msg);
		ctrl.focus();
		return false;
	}
	return true;
}

function ValidEmail()
{
	var apos = email.value.indexOf("@");
	var dpos = email.value.lastIndexOf(".");
	if(apos<1||dpos-apos<2)
	{
		alert("Invalid email");
		email.focus();
		return false;
	}
	return true;
}

function Them()
{
	a = document.getElementById("username").value;
	b = document.getElementById("email").value;
	c = document.getElementById("tel").value;
	d = document.getElementById("songs").value;
    e = document.getElementById("playlists").value;
    f = document.getElementById("vip").value;
    g = document.getElementById("regular").value;
	if(a == "" || b == "")
	{
		alert("Please enter full content!");
	}
    // var kq = ValidControl(usename, "You have not entered username");
	// if(kq==true)
	//    kq = ValidControl(email, "You have not entered your email");
	// if(kq==true)
	//    kq = validEmail();
	// if(kq==true)
	//    kq = ValidControl(txtDienThoai, "You did not enter a phone number");
	// return kq;
	else
	{
		var kq1="";
		kq1 = 'Username: '+a+"\n"+'Email: '+b+"\n"+'Phone number: '+c+"\n"+'Favorite songs list: '+d+"\n" + 'Playlists: ' +e+"\n" + 'Account type: '+f;
		confirm(kq1);
		//confirm('Tên: '+a+"\n"+'Email: '+b+"\n"+'Link facebook: '+c+"\n"+'Lời nhắn: '+d+"\n");
	}
}
document.getElementById("btn").onclick = function()
{
	Them();
};