function menuLike(){
    var element = document.getElementById("menu-like");
    element.classList.toggle("showMenuLike");
}


// category filter
// Filter by data-product
let totalProduct = 4;
let selected = 0;
function productByData(dataProduct, child) {
  // alert('ini ' + dataProduct );
  //change
  $(child).each(function (i) {
    //   reset class per item
    $(child).eq(i).removeClass("true selectedProduct second");
    $(child).eq(i).addClass("true");
    if ($(child).eq(i).attr("data-name") == dataProduct) {
      // reset teks warning
      $("h3.warning").html(" ");
      $(child).eq(i).addClass("selectedProduct");
    // add class true for #feed.true
    $("#feed").addClass('true');
      //   isi sedikit kesan pop up per item
      setTimeout(function () {
        $(child).eq(i).addClass("second");
      }, 200);
    } else {
        // call function checkSelectProduct
        checkSelectProduct(i);
    }
  });
}

function detailPage(locate1, locate2) {
  $(locate1).click(function() {
    window.location.href = locate2;
  })
}



function productByDataAll(child) {
    // alert('ini ' + dataProduct );
    //change
    $(child).each(function (i) {
      //   reset class per item
      $(child).eq(i).removeClass("true selectedProduct second");
        // remove class true at #feed
      $("#feed").removeClass('true');

      $(child).eq(i).addClass("true");
        // reset teks warning
        $("h3.warning").html(" ");
        $(child).eq(i).addClass("selectedProduct");
        //   isi sedikit kesan pop up per item
        setTimeout(function () {
          $(child).eq(i).addClass("second");
        }, 200);
    });
  }

// jika product-column .card = none, tidak ada sesuai category
function checkSelectProduct(k) {
  if (!$(".product .photo").eq(k).hasClass("selectedProduct")) {
    selected += 1;
    // console.log(selected);
  }

  // text harus di sembunyikan ketika filtering
  if ($("h3.warning").addClass("true")) {
    $("h3.warning").removeClass("true");
  }

  // jika sama sekali tidak ada
  if (selected == totalProduct) {
    // $("h3.warning").html("Maaf, pencaharian tidak ditemukan...");
    setTimeout(function () {
      return $("h3.warning").addClass("true");
    }, 200);
  }
}


// khusus untuk Detail product di Home Page dan Detail Product
if (
  document.querySelector("body.bodyHome")
) {
 
  // link detail page
    detailPage('.foto1', 'detail.html');
    detailPage('.foto2', 'detail1.html');
    detailPage('.foto3', 'detail2.html');
    detailPage('.foto4', 'detail3.html');
    detailPage('.foto5', 'detail4.html');
    detailPage('.foto6', 'detail5.html');
    detailPage('.foto7', 'detail6.html');
    detailPage('.foto8', 'feed.html');
    

  $("span.item").click(function () {
    // alert('halo');
    // location by id
    // reset variabel
    selected = 0;
    if ($(this).attr("data-name") == "foto")
      return productByData("foto", ".product .photo");
    if ($(this).attr("data-name") == "video")
      return productByData("video", ".product .photo");
    if ($(this).attr("data-name") == "grafis")
      return productByData("grafis", ".product .photo");
    if ($(this).attr("data-name") == "art")
      return productByData("art", ".product .photo");
    if ($(this).attr("data-name") == "all")
      return productByDataAll(".product .photo");
  });
}

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

