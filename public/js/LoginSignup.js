var AJAX = {
  call: function (url, params, func, isfd) {
    var callobj = {
      url: url,
      type: "post",
      data: params,
      dataType: "text",
      success: func,
      error: function (xhr, status, error) {
        if (xhr.status == 0) {
          alert("네트워크 접속이 원할하지 않습니다.");
        } else {
          console.log(xhr.responseText);
          alert("에러가 발생하였습니다. 관리자에게 문의해주세요.");
        }
      },
    };
    if (isfd) {
      callobj.processData = false;
      callobj.contentType = false;
    }
    jQuery.ajax(callobj);
  },
}; // end of AJAX

async function login() {
  var id = $("#id").val().trim();
  if (id == "") {
    alert("아이디를 입력해 주세요.");
    $("#id").focus();
    return;
  }

  var ps = $("#ps").val().trim();
  if (ps == "") {
    alert("패스워드를 입력해 주세요.");
    $("#ps").focus();
    return;
  }

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (id === storedEmail && ps === storedPassword) {
    alert("로그인 성공!");
    localStorage.setItem("loggedInUser", id);
    window.location.href = "./mainPage.html";
  } else {
    alert("아이디 또는 패스워드가 일치하지 않습니다.");
  }
}

async function signup() {
  var id = $("#id").val().trim();
  if (id == "") {
    alert("아이디를 입력해 주세요.");
    $("#id").focus();
    return;
  }

  var ps = $("#ps").val().trim();
  if (ps == "") {
    alert("패스워드를 입력해 주세요.");
    $("#ps").focus();
    return;
  }

  var ps2 = $("#ps2").val().trim();
  if (ps != ps2) {
    alert("입력된 두 개의 패스워드가 일치하지 않습니다.");
    $("#ps2").focus();
    return;
  }

  var name = $("#name").val().trim();
  if (name == "") {
    alert("이름을 입력해 주세요.");
    $("#name").focus();
    return;
  }

  // 사용자 정보를 로컬 스토리지에 저장
  localStorage.setItem("userEmail", id);
  localStorage.setItem("userPassword", ps);
  localStorage.setItem("userName", name);

  alert("회원가입이 완료되었습니다.");
  window.location.href = "./Login.html";
}
