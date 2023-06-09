$(document).ready(function(){
    let listNavUpLeftDropDownLi = $("#nav-area-up .nav-up-drowdowns .dropdown1 .dropdown-menu li a span");
    listNavUpLeftDropDownLi.each(function () {
        $(this).click(function () {
            $("#nav-area-up .nav-up-drowdowns .dropdown1 button span").text($(this).text());
        })
    })


    let listNavUpRightDropDownLi = $("#nav-area-up .nav-up-drowdowns .dropdown2 .dropdown-menu li")

    listNavUpRightDropDownLi.each(function () {
        $(this).click(function () {
            $("#nav-area-up .nav-up-drowdowns .dropdown2 button span").text($(this).children().children().eq(1).text())

            $("#nav-area-up .nav-up-drowdowns .dropdown2 button img").attr("src", $(this).children().children().eq(0).attr("src"))
        })
    })

    $("#nav-area-down .navigation .pages-common .item").children().eq(4).click(function () {
        $("#nav-area-down .navigation .pages-common .item .dropdown-menu").fadeToggle(100)
    })




    $("#nav-area-mid .services .cart-logo").click(function () {
        $("#nav-area-mid .services .basket-modal").removeClass("d-none")
        $("#nav-area-mid .services .basket-modal").fadeToggle(100)
    })


    $(".hamburger").click(function(){
        $(".sidebar").css("transform","translate(0px)")
    })
    $(".sidebar .close").click(function(){
        $(".sidebar").css("transform","translate(-251px)")
    })
    $(".sidebar .pages-common span .down").click(function(){
        $(this).parent().next().toggle()
    })

    

    $("#mid-down .common .main .left .img .open-icon").click(function(){
        $(".open-modal").click()
        $(".modal-content .modal-body .img img").attr("src",$(this).prev().attr("src"))
    })







    let productsDetail = JSON.parse(localStorage.getItem("product-detail"));
    getProductDetails()
    function getProductDetails(){
        for (const productDetail of productsDetail) {
            $("#mid-down .common .main .left .img").children().eq(0).attr("src",productDetail.img);
        }
    }

    
    $("#mid-down .common .left .img img").each(function(){
        $(this).click(function(){
            let productDetailImg = $(this).attr("src")
            productsDetail.pop();
            productsDetail.push({
                img:productDetailImg
            })
            localStorage.getItem("product-detail",JSON.stringify(productsDetail))
            getProductDetails()
        })
    })


    $('.multiple-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: `<i class="fa-solid fa-angle-left left">`,
        nextArrow: `<i class="fa-solid fa-angle-right right">`,
    });
    $('.slick-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `<i class="fa-solid fa-angle-left left">`,
        nextArrow: `<i class="fa-solid fa-angle-right right">`,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 576,
              settings: {
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });



    $("#tab-menu .common .tabs .item3").click(function(){
        $("#tab-menu .common .line .active").css("transform","translateX(310px)")
        $(this).css("color","black")
        $(this).prev().css("color","gray")
        $(this).prev().prev().css("color","gray")
        $("#tab-menu .common .texts .text").each(function(){
            if($("#tab-menu .common .tabs .item3").attr("data-id") == $(this).attr("data-id")){
                $(this).removeClass("d-none")
            }
            else{
                $(this).addClass("d-none")
            }
        })
    })
    $("#tab-menu .common .tabs .item2").click(function(){
        $("#tab-menu .common .line .active").css("transform","translateX(150px)")
        $(this).css("color","black")
        $(this).prev().css("color","gray")
        $(this).next().css("color","gray")
        $("#tab-menu .common .texts .text").each(function(){
            if($("#tab-menu .common .tabs .item2").attr("data-id") == $(this).attr("data-id")){
                $(this).removeClass("d-none")
            }
            else{
                $(this).addClass("d-none")
            }
        })
    })
    $("#tab-menu .common .tabs .item1").click(function(){
        $("#tab-menu .common .line .active").css("transform","translateX(0px)")
        $(this).css("color","black")
        $(this).next().css("color","gray")
        $(this).next().next().css("color","gray")
        $("#tab-menu .common .texts .text").each(function(){
            if($("#tab-menu .common .tabs .item1").attr("data-id") == $(this).attr("data-id")){
                $(this).removeClass("d-none")
            }
            else{
                $(this).addClass("d-none")
            }
        })
    })








    let products = JSON.parse(localStorage.getItem("basket"));



    function getBasketCount(arr) {
        let sum = 0;
        for (const item of $(arr)) {
            sum += item.count;
        }
        let cardSup = $("#nav-area-mid .cart-logo sup");
        cardSup.text(sum)

    }
    function getBasketPrize(arr) {
        let sum = 0;
        for (const item of $(arr)) {
            sum += item.totalPrize;
        }
        let cardSub = $("#nav-area-mid .cart-logo .prize")
        cardSub.text(sum)
    }
    getBasketCount(products);
    getBasketPrize(products);
    getModalTittleAndCount();


    let listUl = document.querySelector("#nav-area-mid .basket-modal .basket-main ul")

    basketModal(products)
    function basketModal(arr) {
        $("#nav-area-mid .basket-modal .basket-main ul li").remove();
        if (arr.length != 0) {
            for (const item of arr) {
                $("#nav-area-mid .basket-modal .basket-main .note").addClass("d-none")
                $("#nav-area-mid .basket-modal .basket-main").css("padding-top", "10px")
                $("#nav-area-mid .basket-modal .basket-main").css("padding-bottom", "0px")
                $("#nav-area-mid .basket-modal").css("height", "400px")
                $("#nav-area-mid .basket-modal .last-part span").removeClass("d-none")
                $("#nav-area-mid .basket-modal .line2").removeClass("d-none")
                listUl.innerHTML += `<li data-id="${item.id}">
                <h5>${item.name}</h5>
                <i class="fa-solid fa-trash" data-id="${item.id}"></i>
                <span class="count">${item.count}</span>
                <span class="mid">X</span>
                <span class="prize">${item.prize}</span>
                </li>`
            }
            deleteIcons($("#nav-area-mid .basket-modal .basket-main ul li i"))
            getBasketCount(products);
            getBasketPrize(products);
        }
    }






    function getModalTittleAndCount() {
        let sum = 0;
        let total = 0;
        for (const product of $(products)) {
            sum += product.count
            total += product.totalPrize
        }
        $("#nav-area-mid .basket-modal .basket-up .count").text(sum)
        $("#nav-area-mid .basket-modal .last-part .prize").text(total)
    }



    function deleteProduct(id) {
        products = products.filter(m => m.id != id)
        localStorage.setItem("basket", JSON.stringify(products))
    }

    let icons = $("#nav-area-mid .basket-modal .basket-main ul li i");
    deleteIcons(icons);
    function deleteIcons(icons) {
        icons.each(function () {
            $(this).click(function () {
                let id = parseInt($(this).attr("data-id"))
                deleteProduct(id)
                $(this).parent().remove();
                if (products.length == 0) {
                    localStorage.removeItem("basket")
                    $("#nav-area-mid .basket-modal .last-part span").addClass("d-none")
                    $("#nav-area-mid .basket-modal .line2").addClass("d-none")
                    $("#nav-area-mid .basket-modal .basket-main .note").removeClass("d-none")
                    $("#nav-area-mid .basket-modal").css("height", "180px")
                    $("#nav-area-mid .basket-modal .basket-main").css("padding-top", "40px")
                }
                getModalTittleAndCount();
                getBasketCount(products);
                getBasketPrize(products);
            })
        })
    }




    

    
})