$(document).ready(function () {

	// $(".accountType").on("focus",function(){
	// 	$(".accountType").not(this).attr("disabled",true);
	// 	$(this).attr("disabled",false);
	// })
	// $(".accountType").on("focusout",function(){
	// 	if($(this).val()===""){

	// 		$(".accountType").not(this).attr("disabled",false);
	// 		$(this).attr("disabled",true);
	// 	}
	// 	else{
	// 		$(".accountType").attr("disabled",true);
	// 		$(this).attr("disabled",false);

	// 	}
	// })
	$('input[type="checkbox"]').click(function () {
		if ($(this).prop("checked") == true) {
			$(".custom-check-box:after").css("opacity", "1")
		} else if ($(this).prop("checked") == false) {
			$(".custom-check-box:after").css("opacity", "0")
		}
	});

	// $(".default").on ("click",function(){
	// 	$(".default").removeClass("activecur")
	// 	$(".default").html("make default")
	// 	$(this).addClass("activecur");
	// 	$(this).html("default currency")
	// })
	// $(document).on("change",function(){$(".debit").on("change",function(){
	// 	var debitcash = parseInt($(".debit").val());

	// 	$("#totaldebit").html(debitcash)
	// 	console.log(debitcash)
	// })})
	// $(".debit").on("change",function(){
	// 	var debitcash = parseInt($(this).val());
	// 	for(var i=0;i<$(".debit").length;i++){
	// 		$("#totaldebit").innerHTML=1
	// 	}
	// })
	// $(".debit").on("change",function(){
	// 	var debitbalance=parseInt($(this).val())
	// 	$("#totaldebit").value+=debitbalance
	// 	console.log(debitbalance)
	// })

	// $("#totaldebit").innerHTML= "jhjkhjdkhf";

	/* 	$('.user-img-wrap').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			let userSetting = $('.user-setting-data');
			if(userSetting.css('display') == 'none') {
				userSetting.css('display', 'block');
			} else {
				userSetting.css('display', 'none');
			}
			$('.chooseMath,.actionMath,.ellipsisMenu,.notification,.msgs,.filterMath').hide();
		}); */

	/* 	$('.main-nav-link').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			let userSetting = $(this).next();

			if(userSetting.css('display') == 'none') {
				userSetting.css('display', 'block');
				$(this).css('border-color', '#fff');
			} else {
				userSetting.css('display', 'none');
				$(this).css('border-color', 'transparent');
			}
		}); */

	$('.user-img-wrap').on('click', function () {
		$('.user-setting-data').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.notification,.filterMath,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.notiBtn').on('click', function () {
		$('.notification').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.msgBtn').on('click', function () {
		$('.msgs').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	/* 	$('body').on('click', function() {
			$('.user-setting-data').hide();
			$('.sub-nav-link-wrapper').hide();
			$('.main-nav-link').css('border-color', 'transparent');
		}); */

	$('.dOne').on('click', function () {
		$('.showOne').toggle();
		$('.showTwo,.showThree,.showFour,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dTwo').on('click', function () {
		$('.showTwo').toggle();
		$('.showOne,.showThree,.showFour,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dThree').on('click', function () {
		$('.showThree').toggle();
		$('.showOne,.showTwo,.showFour,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dFour').on('click', function () {
		$('.showFour').toggle();
		$$('.showOne,.showTwo,.showThree,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dFive').on('click', function () {
		$('.showFive').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showSix,.showSeven,.showEight').hide();
	});

	$('.dSix').on('click', function () {
		$('.showSix').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showFive,.showSeven,.showEight').hide();
	});

	$('.dSeven').on('click', function () {
		$('.showSeven').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showFive,.showSix,.showEight').hide();
	});
	$('.dEight').on('click', function () {
		$('.showEight').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showFive,.showSix,.showSeven').hide();
	});



	$('.filters').on('click', function () {
		$('.filterMath').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.notification,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.choose').on('click', function () {
		$('.chooseMath').toggle();
		$('.actionMath,.ellipsisMenu,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.action').on('click', function () {
		$('.actionMath').toggle();
		$('.chooseMath,.ellipsisMenu,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.hiddenAllItems,.data-title-search-container,.box-data-table-wrapper').on('click', function () {
		$('.chooseMath,.actionMath,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.ellipsis .fas').on('click', function () {
		$('.ellipsisMenu').toggle();
		$('.filterMath,.chooseMath,.actionMath,.msgs,.notification,.user-setting-data,sub-nav-link-wrapper').hide();
	});

	$('.ellipsisCheck-one input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisOne").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisOne").show();
		}
	});

	$('.ellipsisCheck-two input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisTwo").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisTwo").show();
		}
	});

	$('.ellipsisCheck-three input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisThree").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisThree").show();
		}
	});

	$('.ellipsisCheck-four input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisFour").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisFour").show();
		}
	});

	$('.ellipsisCheck-five input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisFive").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisFive").show();
		}
	});

	$('.ellipsisCheck-six input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisSix").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisSix").show();
		}
	});

	$('.ellipsisCheck-seven input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisSeven").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisSeven").show();
		}
	});

	$('.ellipsisCheck-eight input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisEight").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisEight").show();
		}
	});
	$('.ellipsisCheck-nine input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisNine").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisNine").show();
		}
	});
	$('.ellipsisCheck-ten input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisTen").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisTen").show();
		}
	});
	$('.ellipsisCheck-eleven input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisEleven").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisEleven").show();
		}
	});

	$('.ellipsisCheck-twelve input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisTwelve").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisTwelve").show();
		}
	});


	$('#toggle').click(function (event) {
		if (this.checked) {
			$('.checkNum input[type="checkbox"]').prop('checked', true);
			$(".action").show();
		} else {
			$('.checkNum input[type="checkbox"]').prop('checked', false);
			$(".action").hide();
		}
	});


	$('.checkNum input[type="checkbox"]').click(function () {
		if ($("input[type=checkbox]").is(":checked")) {
			$(".action").show();
		} else {
			$(".action").hide();
		}
	});

	$('.sorts .fas:first-of-type').on('click', function () {
		$(this).toggleClass('rotate180');
	});



	$('.mobile-menu-icon').on('click', function () {
		let mobileMenuDiv = $('.mobile-menu-container');
		if (mobileMenuDiv.css('display') == 'none') {
			$(this).children('img').attr('src', 'assets/images/close-menu.png');
			mobileMenuDiv.fadeIn();
			$('.mobile-menu-content').css('left', '0%');
		} else {
			$(this).children('img').attr('src', 'assets/images/menu-icon.png');
			mobileMenuDiv.fadeOut();
			$('.mobile-menu-content').css('left', '100%');
		}
		let mobileMenuWidth = $('.mobile-menu-content').innerWidth();
		$('.shadow-section').css('width', 'calc(100% - ' + mobileMenuWidth + 'px)');

	});

	$('.shadow-section').on('click', function () {
		$('.mobile-menu-icon').children('img').attr('src', 'assets/images/menu-icon.png');
		$('.mobile-menu-container').fadeOut();
		$('.mobile-menu-content').css('left', '100%');
	});
	$('.main-close').on('click', function () {
		$('.account-info').fadeOut(500);
		$('.saving').html(`<button type="button" class="save add">add</button>`)
		$('.add').on('click', function () {
			$('.account-info').fadeIn(500);
			$('.sup-account-info').fadeIn(500);
			$('.saving').html(`<button type="button" class="save">save</button>
			<button type="button" class="discard">discard</button>`)
			$('.form-container').slideDown(500)
			$('.main-collapse').html(`<i class="fas fa-minus"></i>`)
		})
	})

	$('.main-collapse').on('click', function () {
		if ($('.form-container').css('display') == ('block')) {
			$('.form-container').slideUp(500);
			$('.sup-account-info').slideUp(500);
			$(this).html(`<i class="fas fa-plus"></i>`)
		} else {
			$('.form-container').slideDown(500);
			$('.sup-account-info').slideDown(500);
			$(this).html(`<i class="fas fa-minus"></i>`)
		}
	})

	$(function () {
		$("#sortable").sortable();
		$("#sortable").disableSelection();
	});
	$('.close').on('click', function () {
		$('.sup-account-info').fadeOut(500);
	})
	$('.collapse').on('click', function () {
		if ($('.sup-form-container').css('display') == ('block')) {
			$('.sup-form-container').slideUp(500);
			$(this).html(`<i class="fas fa-plus"></i>`)
		} else {
			$('.sup-form-container').slideDown(500);
			$('.sup-account-info').slideDown(500);
			$(this).html(`<i class="fas fa-minus"></i>`)
		}
	})





	// $('.add-line').on("click",function(){

	// 	// $(this).prev().children("tbody").prepend($(".custom-account")[0])
	// 	$('.delete').on('click',function(){
	// 	$(this).parents('tr').remove();
	// 		// var depit=parseFloat($(this).parents('tr').children(".debit").val);
	// 		// var credit=parseFloat($(this).parents('tr').children(".credit").val)
	// 		// var totalone=parseFloat($("#totaldebit").text())
	// 		// $("#totaldebit").text(totalone-depit);
	// 		// var totaltwo=parseFloat($("#totalcredit").text())
	// 		// $("#totalcredit").text(totaltwo-credit);
	// })
	// $( ".debit" ).change(function (){
	// 	var sum=0;
	// 	$('.debit').each(function(i, obj){


	// 	 if($.isNumeric(this.value)) {
	// 				sum += parseFloat(this.value);
	// 			}

	// 	 })

	// 	 $('#totaldebit').text(sum);
	// 	 });
	// 	 $( ".credit" ).change(function (){
	// 		var sum=0;
	// 		$('.credit').each(function(i, obj){


	// 		 if($.isNumeric(this.value)) {
	// 					sum += parseFloat(this.value);
	// 				}

	// 		 })

	// 		 $('#totalcredit').text(sum);

	// 		 });
	// })





	// if($("#totalcredit").length > 0 || $("#totaldebit").length > 0){
	// 	$(".save").on("click",function(e){
	// 		if(parseFloat($("#totaldebit").text())!=parseFloat($("#totalcredit").text())){
	// 			e.preventDefault()
	// 			alert("depit not equal credit")
	// 		}
	// 	})
	// }


	// $('.discard').on('click',function(){
	// 	$('input').val(null);
	// 	$('select').val(null);
	// 	$('textarea').val(null);
	// 	$(".total").text("")
	// });
	$(".contacts").on("click", function () {
		$('#contacts').toggle();
		$('#purchase,#notes,#accounting').hide();
	})

	$(".purchase").on("click", function () {
		$('#purchase').toggle();
		$('#contacts,#notes,#accounting').hide();
	})

	$(".accounting").on("click", function () {
		$('#accounting').toggle();
		$('#contacts,#purchase,#notes').hide();
	})

	$(".notes").on("click", function () {
		$('#notes').toggle();
		$('#contacts,#purchase,#accounting').hide();
	})

	$(".dateMenu").on("click", function () {
		$('.dateRangeTol').toggle();
	})

	// here is the searach filter

	$("#myInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#myTable tbody tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	


	// var addLine=document.querySelector(".add-line");
	// addLine.addEventListener("click",function(){

	// $(".debit").change(function() {
	// 	var total = 0;
	// 	//console.log(total);
	// 	var debits=[];

	// var i=0;
	// var sum;
	// var debit=$(".debit");
	// for(i=0;i<debit.length;i++){
	//  sum += parseInt(debit[i].value) ;
	// 	console.log(sum)
	// }
	// });

	//   });



	// $('#bepit_total').html()


	$('.accept').on('click', function () {
		$(this).siblings('.refuse').hide();
		$(this).children('.preAccept').hide();
		$(this).children('.accepted').show();
	});

	$('.refuse').on('click', function () {
		$(this).siblings('.accept').hide();
		$(this).children('.preRefuse').hide();
		$(this).children('.refused').show();
	});
	$(".date-today").flatpickr({
		defaultDate: "today"
	})
	$(".rangeDate").flatpickr({
		mode: "range",
	});

	$(".rangeDate").on("change", function () {
		var aculVal = $(this).val();
		$(".dateMenu").val(aculVal);
	});

	$(".specificDate").flatpickr({
		minDate: "today",
		maxDate: "today"
	});

	$(".specificDate").on("change", function () {
		var aculVal = $(this).val();
		$(".dateMenu").val(aculVal);
	});

	$(".allDatesBefore").flatpickr({
		maxDate: "today"
	});

	$(".defDatesBefore").flatpickr({
		defaultDate: "today"
	});

	$(".allDatesBefore").on("change", function () {
		var aculVal = $(this).val();
		var defVal = $(".defDatesBefore").val();
		$(".dateMenu").val(aculVal + " - " + defVal);
	});


	$(".defDatesAfter").flatpickr({
		defaultDate: "2034-01-01"
	});

	$(".allDatesAfter").flatpickr({

	});

	$("input[type=date]").flatpickr({

	});

	$("#jDate").flatpickr({
		defaultDate: "today"
	});

	$(".allDatesAfter").on("change", function () {
		var aculVal = $(this).val();
		var defVal = $(".defDatesAfter").val();
		$(".dateMenu").val(aculVal + " - " + defVal);
	});

	var oneWeekAgo = new Date();
	oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
	var aWeek = oneWeekAgo.toLocaleDateString();

	$(".lastWeek").on("click", function () {
		$(".dateMenu").val(aWeek);
	});

	var oneMonthAgo = new Date();
	oneMonthAgo.setDate(oneMonthAgo.getDate() - 30)
	var aMonth = oneMonthAgo.toLocaleDateString();


	$(".lastMonth").on("click", function () {
		$(".dateMenu").val(aMonth);
	});

	var monthToDate = new Date();
	monthToDate.setDate(monthToDate.getDay())
	var toMonth = monthToDate.toLocaleDateString();


	$(".MonthToDate").on("click", function () {
		$(".dateMenu").val(toMonth + " - " + new Date().toLocaleDateString());
	});

	var lastYear = new Date();
	lastYear.setDate(lastYear.getDate() - 365)
	var aYear = lastYear.toLocaleDateString();


	$(".lastYear").on("click", function () {
		$(".dateMenu").val(aYear);
	});

	var lastYear = new Date();
	lastYear.setDate(lastYear.getDate() - 365)
	var aYear = lastYear.toLocaleDateString();


	$(".YearToDate").on("click", function () {
		$(".dateMenu").val(aYear + " - " + new Date().toLocaleDateString());
	});

	$('.add-purchase').on("click", function () {



		$(this).prev().append(`<tr class="items">
				<td>
					<select>
						<option>
							choose item
						</option>
						<option value="item1">
							item1
						</option>
						<option value="item2">
							item2
						</option>
					</select>
				</td>
				<td><input type="text" name="Description"></td>
				<td><input type="text" name="quantity"  class="quantity" placeholder="0"></td>
				<td><input type="text" name="unitPrice" id="unitPrice" class="unitPrice" placeholder="0.00">
				<td><input type="text" name="price" id="price" class="price" placeholder="0.00">
				<td class="tax-con">
					<select class="tax">
						<option class="bal7a" value="100">
							one
						</option>
						<option class="bal7a" value="200">
							two
						</option>
						<option class="bal7a" value="300">
							three
						</option>
					</select>
				</td>
				<td>
				<select>
					<option>
						choose unit of measure
					</option>
					<option value="tax1">
						tax1
					</option>
					<option value="tax2">
						tax2
					</option>
				</select>
			</td>
				<td><button type="button" class="delete"><i class="fas fa-trash-alt"></i></button></td>
			</tr>`)

		$('.delete').on('click', function () {
			$(this).parents('tr').remove()
		})

		//the price before tax function
		$(document).on("change",".unitPrice", function () {
			$(this).each(function (i, obj) {
				var quantity = parseInt($(this).parents("td").prev().children(".quantity").val());
				var unitPrice = parseInt($(this).val())
				var price = $(".unitPrice").parents("td").next().children(".price")

				var primalPrice = 0;

				$(this).parents("td").next().children(".price").val(quantity * unitPrice);

				$(price).each(function (i, obj) {
					var pricev = $(this);
					primalPrice += parseFloat(pricev.val());
				})
				$("#untaxedvalue").text(primalPrice);
			})
			var untaxed = parseFloat($("#untaxedvalue").text());
			var taxes = parseFloat($("#taxesvalue").text());
			var finaltotal = untaxed + taxes;
			$("#finalTotalValue").text(finaltotal)
		})

	$(document).on('change', '.quantity', function() {
		$(this).each(function (i, obj) {
			var quantity = parseInt($(this).parents("td").next().children(".unitPrice").val());
			var unitPrice = parseInt($(this).val())
			var price = $(".quantity").parents("td").siblings().children(".price")

			var primalPrice = 0;

			$(this).parents("td").siblings().children(".price").val(quantity * unitPrice);

			$(price).each(function (i, obj) {
				var pricev = $(this);
				primalPrice += parseFloat(pricev.val());
			})
			$("#untaxedvalue").text(primalPrice);
		})
		var untaxed = parseFloat($("#untaxedvalue").text());
		var taxes = parseFloat($("#taxesvalue").text());
		// console.log(untaxed+taxes)
		var finaltotal = untaxed + taxes;
		$("#finalTotalValue").text(finaltotal)
	})
		// $(".quantity").on("change", function () {

		// 	$(".quantity").each(function (i, obj) {
		// 		var quantity = parseInt($(this).parents("td").next().children(".unitPrice").val());
		// 		var unitPrice = parseInt($(this).val())
		// 		var price = $(".quantity").parents("td").siblings().children(".price")

		// 		var primalPrice = 0;

		// 		$(this).parents("td").siblings().children(".price").val(quantity * unitPrice);

		// 		$(price).each(function (i, obj) {
		// 			var pricev = $(this);
		// 			primalPrice += parseFloat(pricev.val());
		// 		})
		// 		$("#untaxedvalue").text(primalPrice);
		// 	})
		// 	var untaxed = parseFloat($("#untaxedvalue").text());
		// 	var taxes = parseFloat($("#taxesvalue").text());
		// 	// console.log(untaxed+taxes)
		// 	var finaltotal = untaxed + taxes;
		// 	$("#finalTotalValue").text(finaltotal)
		// })

		$(document).on("change",".tax", function () {
			var primalTax = 0;
			$(this).each(function (i, obj) {

				var tax = $(this);

				primalTax += parseFloat($(tax).val());

				$("#taxesvalue").text(primalTax)
			})
			var untaxed = parseFloat($("#untaxedvalue").text());
			var taxes = parseFloat($("#taxesvalue").text());
			var finaltotal = untaxed + taxes;
			$("#finalTotalValue").text(finaltotal)
		})
	})
	$(".posted").on("click", function () {
		$(".draft .dr").removeClass("arrow");
		$(".draft .pos").addClass("arrow");
		$(".posted").hide()
		$(".drafted").hide();
		$(".draftMenu").show();
	})
	$(".resetdraft").on("click", function () {
		$(".draft .pos").removeClass("arrow");
		$(".draft .dr").addClass("arrow");
		$(".drafted").hide()
		$(".draftMenu").hide()
		$(".posted").show()
	})

	$(".mobile-menu-content .main-nav-link").on("click", function () {
		$(".mobile-menu-content .main-nav-link").next(".sub-nav-link-wrapper").slideUp();
		$(this).next(".sub-nav-link-wrapper").slideToggle();
		$(this).children("span:last-of-type").toggleClass("rotate180")
	});


});

$(document).ready(function () {


	// the tree
	$(".chartOfAccounts .inner-side ul li .bonga .fas").on("click", function() {
		$(this).parents(".bonga").next("ul").toggleClass("d-none");
		$(this).parents(".bonga").children(".fas").toggle();
		$(this).parents(".bonga").next("ul li").addClass("clearSpeace");
		$(".tree li ul li:last-child").addClass("clearSpeace");
	  });

	$('input[type="checkbox"]').click(function () {
		if ($(this).prop("checked") == true) {
			$(".custom-check-box:after").css("opacity", "1")
		} else if ($(this).prop("checked") == false) {
			$(".custom-check-box:after").css("opacity", "0")
		}
	});

	$(".default").on("click", function () {
		$(".default").removeClass("activecur")
		$(".default").html("make default")
		$(this).addClass("activecur");
		$(this).html("default currency")
	})
	// $(document).on("change",function(){$(".debit").on("change",function(){
	// 	var debitcash = parseInt($(".debit").val());

	// 	$("#totaldebit").html(debitcash)
	// 	console.log(debitcash)
	// })})
	// $(".debit").on("change",function(){
	// 	var debitcash = parseInt($(this).val());
	// 	for(var i=0;i<$(".debit").length;i++){
	// 		$("#totaldebit").innerHTML=1
	// 	}
	// })
	// $(".debit").on("change",function(){
	// 	var debitbalance=parseInt($(this).val())
	// 	$("#totaldebit").value+=debitbalance
	// 	console.log(debitbalance)
	// })

	// $("#totaldebit").innerHTML= "jhjkhjdkhf";

	/* 	$('.user-img-wrap').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			let userSetting = $('.user-setting-data');
			if(userSetting.css('display') == 'none') {
				userSetting.css('display', 'block');
			} else {
				userSetting.css('display', 'none');
			}
			$('.chooseMath,.actionMath,.ellipsisMenu,.notification,.msgs,.filterMath').hide();
		}); */

	/* 	$('.main-nav-link').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			let userSetting = $(this).next();

			if(userSetting.css('display') == 'none') {
				userSetting.css('display', 'block');
				$(this).css('border-color', '#fff');
			} else {
				userSetting.css('display', 'none');
				$(this).css('border-color', 'transparent');
			}
		}); */

	$('.user-img-wrap').on('click', function () {
		$('.user-setting-data').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.notification,.filterMath,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.notiBtn').on('click', function () {
		$('.notification').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.msgBtn').on('click', function () {
		$('.msgs').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	/* 	$('body').on('click', function() {
			$('.user-setting-data').hide();
			$('.sub-nav-link-wrapper').hide();
			$('.main-nav-link').css('border-color', 'transparent');
		}); */

	$('.dOne').on('click', function () {
		$('.showOne').toggle();
		$('.showTwo,.showThree,.showFour,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dTwo').on('click', function () {
		$('.showTwo').toggle();
		$('.showOne,.showThree,.showFour,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dThree').on('click', function () {
		$('.showThree').toggle();
		$('.showOne,.showTwo,.showFour,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dFour').on('click', function () {
		$('.showFour').toggle();
		$$('.showOne,.showTwo,.showThree,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dFive').on('click', function () {
		$('.showFive').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showSix,.showSeven,.showEight').hide();
	});

	$('.dSix').on('click', function () {
		$('.showSix').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showFive,.showSeven,.showEight').hide();
	});

	$('.dSeven').on('click', function () {
		$('.showSeven').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showFive,.showSix,.showEight').hide();
	});
	$('.dEight').on('click', function () {
		$('.showEight').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showFive,.showSix,.showSeven').hide();
	});



	$('.filters').on('click', function () {
		$('.filterMath').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.notification,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.choose').on('click', function () {
		$('.chooseMath').toggle();
		$('.actionMath,.ellipsisMenu,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.action').on('click', function () {
		$('.actionMath').toggle();
		$('.chooseMath,.ellipsisMenu,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.hiddenAllItems,.data-title-search-container,.box-data-table-wrapper').on('click', function () {
		$('.chooseMath,.actionMath,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.ellipsis .fas').on('click', function () {
		$('.ellipsisMenu').toggle();
		$('.filterMath,.chooseMath,.actionMath,.msgs,.notification,.user-setting-data,sub-nav-link-wrapper').hide();
	});

	$('.ellipsisCheck-one input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisOne").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisOne").show();
		}
	});

	$('.ellipsisCheck-two input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisTwo").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisTwo").show();
		}
	});

	$('.ellipsisCheck-three input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisThree").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisThree").show();
		}
	});

	$('.ellipsisCheck-four input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisFour").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisFour").show();
		}
	});

	$('.ellipsisCheck-five input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisFive").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisFive").show();
		}
	});

	$('.ellipsisCheck-six input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisSix").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisSix").show();
		}
	});

	$('.ellipsisCheck-seven input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisSeven").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisSeven").show();
		}
	});

	$('.ellipsisCheck-eight input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisEight").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisEight").show();
		}
	});
	$('.ellipsisCheck-nine input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisNine").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisNine").show();
		}
	});
	$('.ellipsisCheck-ten input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisTen").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisTen").show();
		}
	});
	$('.ellipsisCheck-eleven input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisEleven").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisEleven").show();
		}
	});

	$('.ellipsisCheck-twelve input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisTwelve").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisTwelve").show();
		}
	});


	$('#toggle').click(function (event) {
		if (this.checked) {
			$('.checkNum input[type="checkbox"]').prop('checked', true);
			$(".action").show();
		} else {
			$('.checkNum input[type="checkbox"]').prop('checked', false);
			$(".action").hide();
		}
	});


	$('.checkNum input[type="checkbox"]').click(function () {
		if ($("input[type=checkbox]").is(":checked")) {
			$(".action").show();
		} else {
			$(".action").hide();
		}
	});

	$('.sorts .fas:first-of-type').on('click', function () {
		$(this).toggleClass('rotate180');
	});



	$('.mobile-menu-icon').on('click', function () {
		let mobileMenuDiv = $('.mobile-menu-container');
		if (mobileMenuDiv.css('display') == 'none') {
			$(this).children('img').attr('src', 'assets/images/close-menu.png');
			mobileMenuDiv.fadeIn();
			$('.mobile-menu-content').css('left', '0%');
		} else {
			$(this).children('img').attr('src', 'assets/images/menu-icon.png');
			mobileMenuDiv.fadeOut();
			$('.mobile-menu-content').css('left', '100%');
		}
		let mobileMenuWidth = $('.mobile-menu-content').innerWidth();
		$('.shadow-section').css('width', 'calc(100% - ' + mobileMenuWidth + 'px)');

	});

	$('.shadow-section').on('click', function () {
		$('.mobile-menu-icon').children('img').attr('src', 'assets/images/menu-icon.png');
		$('.mobile-menu-container').fadeOut();
		$('.mobile-menu-content').css('left', '100%');
	});
	$('.main-close').on('click', function () {
		$('.account-info').fadeOut(500);
		$('.saving').html(`<button type="button" class="save add">add</button>`)
		$('.add').on('click', function () {
			$('.account-info').fadeIn(500);
			$('.sup-account-info').fadeIn(500);
			$('.saving').html(`<button type="button" class="save">save</button>
			<button type="button" class="discard">discard</button>`)
			$('.form-container').slideDown(500)
			$('.main-collapse').html(`<i class="fas fa-minus"></i>`)
		})
	})

	$('.main-collapse').on('click', function () {
		if ($('.form-container').css('display') == ('block')) {
			$('.form-container').slideUp(500);
			$('.sup-account-info').slideUp(500);
			$(this).html(`<i class="fas fa-plus"></i>`)
		} else {
			$('.form-container').slideDown(500);
			$('.sup-account-info').slideDown(500);
			$(this).html(`<i class="fas fa-minus"></i>`)
		}
	})

	$(function () {
		$("#sortable").sortable();
		$("#sortable").disableSelection();
	});
	$('.close').on('click', function () {
		$('.sup-account-info').fadeOut(500);
	})
	$('.collapse').on('click', function () {
		if ($('.sup-form-container').css('display') == ('block')) {
			$('.sup-form-container').slideUp(500);
			$(this).html(`<i class="fas fa-plus"></i>`)
		} else {
			$('.sup-form-container').slideDown(500);
			$('.sup-account-info').slideDown(500);
			$(this).html(`<i class="fas fa-minus"></i>`)
		}
	})

	// $('.add-line').on("click",function(){
	// 	$(this).prev().append(`<tr class="accounts">
	// 	<td>
	// 		<select>
	// 			<option>
	// 				choose account
	// 			</option>
	// 			<option value="buildings">
	// 				buildings
	// 			</option>
	// 			<option value="Cleints">
	// 				Cleints
	// 			</option>
	// 			<option value="other-debtors">
	// 				other debtors
	// 			</option>
	// 			<option value="current-assets">
	// 				current assets
	// 			</option>
	// 			<option value="equity-capital">
	// 				equity capital
	// 			</option>
	// 			<option value="shipping">
	// 				shipping
	// 			</option>
	// 			<option value="other-expenses">
	// 				other expenses
	// 			</option>
	// 			<option value="exp22">
	// 				exp22
	// 			</option>
	// 			<option value="sales">
	// 				sales
	// 			</option>
	// 			<option value="equity">
	// 				equity
	// 			</option>
	// 		</select>
	// 	</td>
	// 	<td><input type="text" name="description"></td>
	// 	<td><input type="number" name="debit" class="debit" placeholder="0.00"></td>
	// 	<td><input type="number" name="credit" class="credit" placeholder="0.00">
	// 		<td><button type="button" class="delete"><i class="fas fa-trash-alt"></i></button></td>
	// </tr>`)



	// $('.delete').on('click',function(){
	// 	$(this).parents('tr').remove();
	// 		// var depit=parseFloat($(this).parents('tr').children(".debit").val);
	// 		// var credit=parseFloat($(this).parents('tr').children(".credit").val)
	// 		// var totalone=parseFloat($("#totaldebit").text())
	// 		// $("#totaldebit").text(totalone-depit);
	// 		// var totaltwo=parseFloat($("#totalcredit").text())
	// 		// $("#totalcredit").text(totaltwo-credit);
	// })
	// $( ".debit" ).change(function (){
	// 	var sum=0;
	// 	$('.debit').each(function(i, obj){


	// 	 if($.isNumeric(this.value)) {
	// 				sum += parseFloat(this.value);
	// 			}

	// 	 })

	// 	 $('#totaldebit').text(sum);
	// 	 });
	// 	 $( ".credit" ).change(function (){
	// 		var sum=0;
	// 		$('.credit').each(function(i, obj){


	// 		 if($.isNumeric(this.value)) {
	// 					sum += parseFloat(this.value);
	// 				}

	// 		 })

	// 		 $('#totalcredit').text(sum);

	// 		 });
	// })
	// if($("#totalcredit").length > 0 || $("#totaldebit").length > 0){
	// 	$(".save").on("click",function(e){
	// 		if(parseFloat($("#totaldebit").text())!=parseFloat($("#totalcredit").text())){
	// 			e.preventDefault()
	// 			alert("depit not equal credit")
	// 		}
	// 	})
	// }


	// $('.discard').on('click',function(){
	// 	$('input').val(null);
	// 	$('select').val(null);
	// 	$('textarea').val(null);
	// 	$(".total").text("")
	// });
	$(".contacts").on("click", function () {
		$('#contacts').toggle();
		$('#purchase,#notes,#accounting').hide();
	})

	$(".purchase").on("click", function () {
		$('#purchase').toggle();
		$('#contacts,#notes,#accounting').hide();
	})

	$(".accounting").on("click", function () {
		$('#accounting').toggle();
		$('#contacts,#purchase,#notes').hide();
	})

	$(".notes").on("click", function () {
		$('#notes').toggle();
		$('#contacts,#purchase,#accounting').hide();
	})

	$(".dateMenu").on("click", function () {
		$('.dateRangeTol').toggle();
	})

	// here is the searach filter

	$("#myInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#myTable tbody tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});


	// var addLine=document.querySelector(".add-line");
	// addLine.addEventListener("click",function(){

	// $(".debit").change(function() {
	// 	var total = 0;
	// 	//console.log(total);
	// 	var debits=[];

	// var i=0;
	// var sum;
	// var debit=$(".debit");
	// for(i=0;i<debit.length;i++){
	//  sum += parseInt(debit[i].value) ;
	// 	console.log(sum)
	// }
	// });

	//   });



	// $('#bepit_total').html()


	$('.accept').on('click', function () {
		$(this).siblings('.refuse').hide();
		$(this).children('.preAccept').hide();
		$(this).children('.accepted').show();
	});

	$('.refuse').on('click', function () {
		$(this).siblings('.accept').hide();
		$(this).children('.preRefuse').hide();
		$(this).children('.refused').show();
	});

	$(".rangeDate").flatpickr({
		mode: "range",
	});

	$(".rangeDate").on("change", function () {
		var aculVal = $(this).val();
		$(".dateMenu").val(aculVal);
	});

	$(".specificDate").flatpickr({
		minDate: "today",
		maxDate: "today"
	});

	$(".specificDate").on("change", function () {
		var aculVal = $(this).val();
		$(".dateMenu").val(aculVal);
	});

	$(".allDatesBefore").flatpickr({
		maxDate: "today"
	});

	$(".defDatesBefore").flatpickr({
		defaultDate: "today"
	});

	$(".allDatesBefore").on("change", function () {
		var aculVal = $(this).val();
		var defVal = $(".defDatesBefore").val();
		$(".dateMenu").val(aculVal + " - " + defVal);
	});


	$(".defDatesAfter").flatpickr({
		defaultDate: "2034-01-01"
	});

	$(".allDatesAfter").flatpickr({

	});

	$("input[type=date]").flatpickr({

	});



	$(".allDatesAfter").on("change", function () {
		var aculVal = $(this).val();
		var defVal = $(".defDatesAfter").val();
		$(".dateMenu").val(aculVal + " - " + defVal);
	});

	var oneWeekAgo = new Date();
	oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
	var aWeek = oneWeekAgo.toLocaleDateString();

	$(".lastWeek").on("click", function () {
		$(".dateMenu").val(aWeek);
	});

	var oneMonthAgo = new Date();
	oneMonthAgo.setDate(oneMonthAgo.getDate() - 30)
	var aMonth = oneMonthAgo.toLocaleDateString();


	$(".lastMonth").on("click", function () {
		$(".dateMenu").val(aMonth);
	});

	var monthToDate = new Date();
	monthToDate.setDate(monthToDate.getDay())
	var toMonth = monthToDate.toLocaleDateString();


	$(".MonthToDate").on("click", function () {
		$(".dateMenu").val(toMonth + " - " + new Date().toLocaleDateString());
	});

	var lastYear = new Date();
	lastYear.setDate(lastYear.getDate() - 365)
	var aYear = lastYear.toLocaleDateString();


	$(".lastYear").on("click", function () {
		$(".dateMenu").val(aYear);
	});

	var lastYear = new Date();
	lastYear.setDate(lastYear.getDate() - 365)
	var aYear = lastYear.toLocaleDateString();


	$(".YearToDate").on("click", function () {
		$(".dateMenu").val(aYear + " - " + new Date().toLocaleDateString());
	});

	$('.add-purchase').on("click", function () {

		$(this).prev().append(`<tr class="items">
				<td>
					<select>
						<option>
							choose item
						</option>
						<option value="item1">
							item1
						</option>
						<option value="item2">
							item2
						</option>
					</select>
				</td>
				<td><input type="text" name="description"></td>
				<td><input type="text" name="quantity"  class="quantity" placeholder="0"></td>
				<td><input type="text" name="unitPrice" id="unitPrice" class="unitPrice" placeholder="0.00">
				<td><input type="text" name="price" id="price" class="price" placeholder="0.00">
				<td class="tax-con">
					<select class="tax">
						<option class="bal7a" value="100">
							one
						</option>
						<option class="bal7a" value="200">
							two
						</option>
						<option class="bal7a" value="300">
							three
						</option>
					</select>
				</td>
				<td>
				<select>
					<option>
						choose unit of measure
					</option>
					<option value="tax1">
						tax1
					</option>
					<option value="tax2">
						tax2
					</option>
				</select>
			</td>
				<td><button type="button" class="delete"><i class="fas fa-trash-alt"></i></button></td>
			</tr>`)

		$('.delete').on('click', function () {
			$(this).parents('tr').remove()
		})

		//the price before tax function
	// 	$(".unitPrice").on("change", function () {

	// 		$(".unitPrice").each(function (i, obj) {
	// 			var quantity = parseInt($(this).parents("td").prev().children(".quantity").val());
	// 			var unitPrice = parseInt($(this).val())
	// 			var price = $(".unitPrice").parents("td").next().children(".price")

	// 			var primalPrice = 0;

	// 			$(this).parents("td").next().children(".price").val(quantity * unitPrice);

	// 			$(price).each(function (i, obj) {
	// 				var pricev = $(this);
	// 				primalPrice += parseFloat(pricev.val());
	// 			})
	// 			$("#untaxedvalue").text(primalPrice);
	// 		})
	// 		var untaxed = parseFloat($("#untaxedvalue").text());
	// 		var taxes = parseFloat($("#taxesvalue").text());
	// 		var finaltotal = untaxed + taxes;
	// 		$("#finalTotalValue").text(finaltotal)
	// 	})

	// 	$(".quantity").on("change", function () {

	// 		$(".quantity").each(function (i, obj) {
	// 			var quantity = parseInt($(this).parents("td").next().children(".unitPrice").val());
	// 			var unitPrice = parseInt($(this).val())
	// 			var price = $(".quantity").parents("td").siblings().children(".price")

	// 			var primalPrice = 0;

	// 			$(this).parents("td").siblings().children(".price").val(quantity * unitPrice);

	// 			$(price).each(function (i, obj) {
	// 				var pricev = $(this);
	// 				primalPrice += parseFloat(pricev.val());
	// 			})
	// 			$("#untaxedvalue").text(primalPrice);
	// 		})
	// 		var untaxed = parseFloat($("#untaxedvalue").text());
	// 		var taxes = parseFloat($("#taxesvalue").text());
	// 		// console.log(untaxed+taxes)
	// 		var finaltotal = untaxed + taxes;
	// 		$("#finalTotalValue").text(finaltotal)
	// 	})

	// 	$(".tax").on("change", function () {
	// 		var primalTax = 0;
	// 		$(".tax").each(function (i, obj) {

	// 			var tax = $(this);

	// 			primalTax += parseFloat($(tax).val());

	// 			$("#taxesvalue").text(primalTax)
	// 		})
	// 		var untaxed = parseFloat($("#untaxedvalue").text());
	// 		var taxes = parseFloat($("#taxesvalue").text());
	// 		var finaltotal = untaxed + taxes;
	// 		$("#finalTotalValue").text(finaltotal)
	// 	})
	})
	$(".posted").on("click", function () {
		$(".draft .dr").removeClass("arrow");
		$(".draft .pos").addClass("arrow");
		$(".posted").hide()
		$(".drafted").hide();
		$(".draftMenu").show();
	})
	$(".resetdraft").on("click", function () {
		$(".draft .pos").removeClass("arrow");
		$(".draft .dr").addClass("arrow");
		$(".drafted").hide()
		$(".draftMenu").hide()
		$(".posted").show()
	})

	$(".mobile-menu-content .main-nav-link").on("click", function () {
		$(".mobile-menu-content .main-nav-link").next(".sub-nav-link-wrapper").slideUp();
		$(this).next(".sub-nav-link-wrapper").slideToggle();
		$(this).children("span:last-of-type").toggleClass("rotate180")
	});


	// settings dropdown menu 
	$(".settings-trigger").on("click",function(){
		$(".settings-dropdown-menu").slideToggle()
	})
});





// new lines check


$(document).ready(function () {


// setup taps
$(".setup-taps-links li").on("click",function(){
	var setupLink=$(this).attr("id")
	$(".setup-forms").find(".sys-settings").hide()
	$(".setup-forms").find(`.${setupLink}`).show()
	$(".setup-taps-links li").removeClass("selected-taps")
	$(this).addClass("selected-taps")
})



	function transaction(){
		var transactionRow= $(".transactionRow")
		// console.log(transactionRow)
		for (var i=0;i<transactionRow.length;i++){
			var singleRow= transactionRow[i];
			var balanceBefor= $(transactionRow[i - 1]);
			if(i>0){
				$(singleRow).find(".total-balance").text(
					parseFloat($(balanceBefor).find(".total-balance").text()) + parseFloat(-1 *  parseFloat($(singleRow).find(".credit-transaction").text()))+ parseFloat($(singleRow).find(".depit-transaction").text())
					
				)
			}
			else{
				$(singleRow).find(".total-balance").text(
					0 + parseFloat(-1 *  parseFloat($(singleRow).find(".credit-transaction").text()))+ parseFloat($(singleRow).find(".depit-transaction").text())
					
				)
			}
	
			// show the ending balance
			var lastTotal=parseFloat($(balanceBefor).find(".total-balance").text());
			console.log(lastTotal)
			if($(".vendorTrans").length>0){
				$(".vendorTrans").text(lastTotal)
			}
			else if(lastTotal>0){
				$("#lastDepit").text(lastTotal)
				$("#lastCredit").text(0) ;
			}
			 
			else{
				$("#lastCredit").text(lastTotal)
				$("#lastDepit").text(0) 
			}
	
			$("#lastTotalBalance").text(lastTotal)
		}
		
			
	}
	
	transaction();
	$('input[type="checkbox"]').click(function () {
		if ($(this).prop("checked") == true) {
			$(".custom-check-box:after").css("opacity", "1")
		} else if ($(this).prop("checked") == false) {
			$(".custom-check-box:after").css("opacity", "0")
		}
	});

	$(".default").on("click", function () {
		$(".default").removeClass("activecur")
		$(".default").html("make default")
		$(this).addClass("activecur");
		$(this).html("default currency")
	})
	// $(document).on("change",function(){$(".debit").on("change",function(){
	// 	var debitcash = parseInt($(".debit").val());

	// 	$("#totaldebit").html(debitcash)
	// 	console.log(debitcash)
	// })})
	// $(".debit").on("change",function(){
	// 	var debitcash = parseInt($(this).val());
	// 	for(var i=0;i<$(".debit").length;i++){
	// 		$("#totaldebit").innerHTML=1
	// 	}
	// })
	// $(".debit").on("change",function(){
	// 	var debitbalance=parseInt($(this).val())
	// 	$("#totaldebit").value+=debitbalance
	// 	console.log(debitbalance)
	// })

	// $("#totaldebit").innerHTML= "jhjkhjdkhf";

	/* 	$('.user-img-wrap').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			let userSetting = $('.user-setting-data');
			if(userSetting.css('display') == 'none') {
				userSetting.css('display', 'block');
			} else {
				userSetting.css('display', 'none');
			}
			$('.chooseMath,.actionMath,.ellipsisMenu,.notification,.msgs,.filterMath').hide();
		}); */

	/* 	$('.main-nav-link').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			let userSetting = $(this).next();

			if(userSetting.css('display') == 'none') {
				userSetting.css('display', 'block');
				$(this).css('border-color', '#fff');
			} else {
				userSetting.css('display', 'none');
				$(this).css('border-color', 'transparent');
			}
		}); */

	$('.user-img-wrap').on('click', function () {
		$('.user-setting-data').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.notification,.filterMath,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.notiBtn').on('click', function () {
		$('.notification').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.msgBtn').on('click', function () {
		$('.msgs').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	/* 	$('body').on('click', function() {
			$('.user-setting-data').hide();
			$('.sub-nav-link-wrapper').hide();
			$('.main-nav-link').css('border-color', 'transparent');
		}); */

	$('.dOne').on('click', function () {
		$('.showOne').toggle();
		$('.showTwo,.showThree,.showFour,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dTwo').on('click', function () {
		$('.showTwo').toggle();
		$('.showOne,.showThree,.showFour,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dThree').on('click', function () {
		$('.showThree').toggle();
		$('.showOne,.showTwo,.showFour,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dFour').on('click', function () {
		$('.showFour').toggle();
		$$('.showOne,.showTwo,.showThree,.showFive,.showSix,.showSeven,.showEight').hide();
	});

	$('.dFive').on('click', function () {
		$('.showFive').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showSix,.showSeven,.showEight').hide();
	});

	$('.dSix').on('click', function () {
		$('.showSix').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showFive,.showSeven,.showEight').hide();
	});

	$('.dSeven').on('click', function () {
		$('.showSeven').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showFive,.showSix,.showEight').hide();
	});
	$('.dEight').on('click', function () {
		$('.showEight').toggle();
		$('.showOne,.showTwo,.showThree,.showFour,.showFive,.showSix,.showSeven').hide();
	});



	$('.filters').on('click', function () {
		$('.filterMath').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.notification,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.choose').on('click', function () {
		$('.chooseMath').toggle();
		$('.actionMath,.ellipsisMenu,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.action').on('click', function () {
		$('.actionMath').toggle();
		$('.chooseMath,.ellipsisMenu,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.hiddenAllItems,.data-title-search-container,.box-data-table-wrapper').on('click', function () {
		$('.chooseMath,.actionMath,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol').hide();
	});

	$('.ellipsis .fas').on('click', function () {
		$('.ellipsisMenu').toggle();
		$('.filterMath,.chooseMath,.actionMath,.msgs,.notification,.user-setting-data,sub-nav-link-wrapper').hide();
	});

	$('.ellipsisCheck-one input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisOne").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisOne").show();
		}
	});

	$('.ellipsisCheck-two input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisTwo").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisTwo").show();
		}
	});

	$('.ellipsisCheck-three input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisThree").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisThree").show();
		}
	});

	$('.ellipsisCheck-four input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisFour").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisFour").show();
		}
	});

	$('.ellipsisCheck-five input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisFive").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisFive").show();
		}
	});

	$('.ellipsisCheck-six input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisSix").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisSix").show();
		}
	});

	$('.ellipsisCheck-seven input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisSeven").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisSeven").show();
		}
	});

	$('.ellipsisCheck-eight input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisEight").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisEight").show();
		}
	});
	$('.ellipsisCheck-nine input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisNine").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisNine").show();
		}
	});
	$('.ellipsisCheck-ten input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisTen").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisTen").show();
		}
	});
	$('.ellipsisCheck-eleven input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisEleven").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisEleven").show();
		}
	});

	$('.ellipsisCheck-twelve input[type="checkbox"]', ).click(function () {
		if ($(this).prop("checked") == true) {
			$(".ellipsisTwelve").hide();
		} else if ($(this).prop("checked") == false) {
			$(".ellipsisTwelve").show();
		}
	});


	$('#toggle').click(function (event) {
		if (this.checked) {
			$('.checkNum input[type="checkbox"]').prop('checked', true);
			$(".action").show();
		} else {
			$('.checkNum input[type="checkbox"]').prop('checked', false);
			$(".action").hide();
		}
	});


	$('.checkNum input[type="checkbox"]').click(function () {
		if ($("input[type=checkbox]").is(":checked")) {
			$(".action").show();
		} else {
			$(".action").hide();
		}
	});

	$('.sorts .fas:first-of-type').on('click', function () {
		$(this).toggleClass('rotate180');
	});



	$('.mobile-menu-icon').on('click', function () {
		let mobileMenuDiv = $('.mobile-menu-container');
		if (mobileMenuDiv.css('display') == 'none') {
			$(this).children('img').attr('src', 'assets/images/close-menu.png');
			mobileMenuDiv.fadeIn();
			$('.mobile-menu-content').css('left', '0%');
		} else {
			$(this).children('img').attr('src', 'assets/images/menu-icon.png');
			mobileMenuDiv.fadeOut();
			$('.mobile-menu-content').css('left', '100%');
		}
		let mobileMenuWidth = $('.mobile-menu-content').innerWidth();
		$('.shadow-section').css('width', 'calc(100% - ' + mobileMenuWidth + 'px)');

	});

	$('.shadow-section').on('click', function () {
		$('.mobile-menu-icon').children('img').attr('src', 'assets/images/menu-icon.png');
		$('.mobile-menu-container').fadeOut();
		$('.mobile-menu-content').css('left', '100%');
	});
	$('.main-close').on('click', function () {
		$('.account-info').fadeOut(500);
		$('.saving').html(`<button type="button" class="save add">add</button>`)
		$('.add').on('click', function () {
			$('.account-info').fadeIn(500);
			$('.sup-account-info').fadeIn(500);
			$('.saving').html(`<button type="button" class="save">save</button>
			<button type="button" class="discard">discard</button>`)
			$('.form-container').slideDown(500)
			$('.main-collapse').html(`<i class="fas fa-minus"></i>`)
		})
	})

	$('.main-collapse').on('click', function () {
		if ($('.form-container').css('display') == ('block')) {
			$('.form-container').slideUp(500);
			$('.sup-account-info').slideUp(500);
			$(this).html(`<i class="fas fa-plus"></i>`)
		} else {
			$('.form-container').slideDown(500);
			$('.sup-account-info').slideDown(500);
			$(this).html(`<i class="fas fa-minus"></i>`)
		}
	})

	$(function () {
		$("#sortable").sortable();
		$("#sortable").disableSelection();
	});
	$('.close').on('click', function () {
		$('.sup-account-info').fadeOut(500);
	})
	$('.collapse').on('click', function () {
		if ($('.sup-form-container').css('display') == ('block')) {
			$('.sup-form-container').slideUp(500);
			$(this).html(`<i class="fas fa-plus"></i>`)
		} else {
			$('.sup-form-container').slideDown(500);
			$('.sup-account-info').slideDown(500);
			$(this).html(`<i class="fas fa-minus"></i>`)
		}
	})

	// $('.add-line').on("click",function(){
	// 	$(this).prev().append(`<tr class="accounts">
	// 	<td>
	// 		<select>
	// 			<option>
	// 				choose account
	// 			</option>
	// 			<option value="buildings">
	// 				buildings
	// 			</option>
	// 			<option value="Cleints">
	// 				Cleints
	// 			</option>
	// 			<option value="other-debtors">
	// 				other debtors
	// 			</option>
	// 			<option value="current-assets">
	// 				current assets
	// 			</option>
	// 			<option value="equity-capital">
	// 				equity capital
	// 			</option>
	// 			<option value="shipping">
	// 				shipping
	// 			</option>
	// 			<option value="other-expenses">
	// 				other expenses
	// 			</option>
	// 			<option value="exp22">
	// 				exp22
	// 			</option>
	// 			<option value="sales">
	// 				sales
	// 			</option>
	// 			<option value="equity">
	// 				equity
	// 			</option>
	// 		</select>
	// 	</td>
	// 	<td><input type="text" name="description"></td>
	// 	<td><input type="number" name="debit" class="debit" placeholder="0.00"></td>
	// 	<td><input type="number" name="credit" class="credit" placeholder="0.00">
	// 		<td><button type="button" class="delete"><i class="fas fa-trash-alt"></i></button></td>
	// </tr>`)



	// $('.delete').on('click',function(){
	// 	$(this).parents('tr').remove();
	// 		// var depit=parseFloat($(this).parents('tr').children(".debit").val);
	// 		// var credit=parseFloat($(this).parents('tr').children(".credit").val)
	// 		// var totalone=parseFloat($("#totaldebit").text())
	// 		// $("#totaldebit").text(totalone-depit);
	// 		// var totaltwo=parseFloat($("#totalcredit").text())
	// 		// $("#totalcredit").text(totaltwo-credit);
	// })
	// $( ".debit" ).change(function (){
	// 	var sum=0;
	// 	$('.debit').each(function(i, obj){


	// 	 if($.isNumeric(this.value)) {
	// 				sum += parseFloat(this.value);
	// 			}

	// 	 })

	// 	 $('#totaldebit').text(sum);
	// 	 });
	// 	 $( ".credit" ).change(function (){
	// 		var sum=0;
	// 		$('.credit').each(function(i, obj){


	// 		 if($.isNumeric(this.value)) {
	// 					sum += parseFloat(this.value);
	// 				}

	// 		 })

	// 		 $('#totalcredit').text(sum);

	// 		 });
	// })
	// if($("#totalcredit").length > 0 || $("#totaldebit").length > 0){
	// 	$(".save").on("click",function(e){
	// 		if(parseFloat($("#totaldebit").text())!=parseFloat($("#totalcredit").text())){
	// 			e.preventDefault()
	// 			alert("depit not equal credit")
	// 		}
	// 	})
	// }


	// $('.discard').on('click',function(){
	// 	$('input').val(null);
	// 	$('select').val(null);
	// 	$('textarea').val(null);
	// 	$(".total").text("")
	// });
	$(".contacts").on("click", function () {
		$('#contacts').toggle();
		$('#purchase,#notes,#accounting').hide();
	})

	$(".purchase").on("click", function () {
		$('#purchase').toggle();
		$('#contacts,#notes,#accounting').hide();
	})

	$(".accounting").on("click", function () {
		$('#accounting').toggle();
		$('#contacts,#purchase,#notes').hide();
	})

	$(".notes").on("click", function () {
		$('#notes').toggle();
		$('#contacts,#purchase,#accounting').hide();
	})

	$(".dateMenu").on("click", function () {
		$('.dateRangeTol').toggle();
	})

	// here is the searach filter

	$("#myInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#myTable tbody tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	// $('.chartOfAccounts .inner-side ul li').on('click', function () {
	// 	$(this).next('ul').toggle();
	// 	$(this).children('.fas').toggle();
	// 	$(this).next('ul li').addClass('clearSpeace');
	// 	$(".tree li ul li:last-child").addClass('clearSpeace');
	// });

	// var addLine=document.querySelector(".add-line");
	// addLine.addEventListener("click",function(){

	// $(".debit").change(function() {
	// 	var total = 0;
	// 	//console.log(total);
	// 	var debits=[];

	// var i=0;
	// var sum;
	// var debit=$(".debit");
	// for(i=0;i<debit.length;i++){
	//  sum += parseInt(debit[i].value) ;
	// 	console.log(sum)
	// }
	// });

	//   });



	// $('#bepit_total').html()


	$('.accept').on('click', function () {
		$(this).siblings('.refuse').hide();
		$(this).children('.preAccept').hide();
		$(this).children('.accepted').show();
	});

	$('.refuse').on('click', function () {
		$(this).siblings('.accept').hide();
		$(this).children('.preRefuse').hide();
		$(this).children('.refused').show();
	});

	$(".rangeDate").flatpickr({
		mode: "range",
	});

	$(".rangeDate").on("change", function () {
		var aculVal = $(this).val();
		$(".dateMenu").val(aculVal);
	});

	$(".specificDate").flatpickr({
		minDate: "today",
		maxDate: "today"
	});

	$(".specificDate").on("change", function () {
		var aculVal = $(this).val();
		$(".dateMenu").val(aculVal);
	});

	$(".allDatesBefore").flatpickr({
		maxDate: "today"
	});

	$(".defDatesBefore").flatpickr({
		defaultDate: "today"
	});

	$(".allDatesBefore").on("change", function () {
		var aculVal = $(this).val();
		var defVal = $(".defDatesBefore").val();
		$(".dateMenu").val(aculVal + " - " + defVal);
	});


	$(".defDatesAfter").flatpickr({
		defaultDate: "2034-01-01"
	});

	$(".allDatesAfter").flatpickr({

	});

	$("input[type=date]").flatpickr({

	});

	$(".allDatesAfter").on("change", function () {
		var aculVal = $(this).val();
		var defVal = $(".defDatesAfter").val();
		$(".dateMenu").val(aculVal + " - " + defVal);
	});

	var oneWeekAgo = new Date();
	oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
	var aWeek = oneWeekAgo.toLocaleDateString();

	$(".lastWeek").on("click", function () {
		$(".dateMenu").val(aWeek);
	});

	var oneMonthAgo = new Date();
	oneMonthAgo.setDate(oneMonthAgo.getDate() - 30)
	var aMonth = oneMonthAgo.toLocaleDateString();


	$(".lastMonth").on("click", function () {
		$(".dateMenu").val(aMonth);
	});

	var monthToDate = new Date();
	monthToDate.setDate(monthToDate.getDay())
	var toMonth = monthToDate.toLocaleDateString();


	$(".MonthToDate").on("click", function () {
		$(".dateMenu").val(toMonth + " - " + new Date().toLocaleDateString());
	});

	var lastYear = new Date();
	lastYear.setDate(lastYear.getDate() - 365)
	var aYear = lastYear.toLocaleDateString();


	$(".lastYear").on("click", function () {
		$(".dateMenu").val(aYear);
	});

	var lastYear = new Date();
	lastYear.setDate(lastYear.getDate() - 365)
	var aYear = lastYear.toLocaleDateString();


	$(".YearToDate").on("click", function () {
		$(".dateMenu").val(aYear + " - " + new Date().toLocaleDateString());
	});

	$('.add-purchase').on("click", function () {

		$(this).prev().append(`<tr class="items">
				<td>
					<select>
						<option>
							choose item
						</option>
						<option value="item1">
							item1
						</option>
						<option value="item2">
							item2
						</option>
					</select>
				</td>
				<td><input type="text" name="description"></td>
				<td><input type="text" name="quantity"  class="quantity" placeholder="0"></td>
				<td><input type="text" name="unitPrice" id="unitPrice" class="unitPrice" placeholder="0.00">
				<td><input type="text" name="price" id="price" class="price" placeholder="0.00">
				<td class="tax-con">
					<select class="tax">
						<option class="bal7a" value="100">
							one
						</option>
						<option class="bal7a" value="200">
							two
						</option>
						<option class="bal7a" value="300">
							three
						</option>
					</select>
				</td>
				<td>
				<select>
					<option>
						choose unit of measure
					</option>
					<option value="tax1">
						tax1
					</option>
					<option value="tax2">
						tax2
					</option>
				</select>
			</td>
				<td><button type="button" class="delete"><i class="fas fa-trash-alt"></i></button></td>
			</tr>`)

		$('.delete').on('click', function () {
			$(this).parents('tr').remove()
		})

		//the price before tax function
		// $(".unitPrice").on("change", function () {

		// 	$(".unitPrice").each(function (i, obj) {
		// 		var quantity = parseInt($(this).parents("td").prev().children(".quantity").val());
		// 		var unitPrice = parseInt($(this).val())
		// 		var price = $(".unitPrice").parents("td").next().children(".price")

		// 		var primalPrice = 0;

		// 		$(this).parents("td").next().children(".price").val(quantity * unitPrice);

		// 		$(price).each(function (i, obj) {
		// 			var pricev = $(this);
		// 			primalPrice += parseFloat(pricev.val());
		// 		})
		// 		$("#untaxedvalue").text(primalPrice);
		// 	})
		// 	var untaxed = parseFloat($("#untaxedvalue").text());
		// 	var taxes = parseFloat($("#taxesvalue").text());
		// 	var finaltotal = untaxed + taxes;
		// 	$("#finalTotalValue").text(finaltotal)
		// })

		// $(".quantity").on("change", function () {

		// 	$(".quantity").each(function (i, obj) {
		// 		var quantity = parseInt($(this).parents("td").next().children(".unitPrice").val());
		// 		var unitPrice = parseInt($(this).val())
		// 		var price = $(".quantity").parents("td").siblings().children(".price")

		// 		var primalPrice = 0;

		// 		$(this).parents("td").siblings().children(".price").val(quantity * unitPrice);

		// 		$(price).each(function (i, obj) {
		// 			var pricev = $(this);
		// 			primalPrice += parseFloat(pricev.val());
		// 		})
		// 		$("#untaxedvalue").text(primalPrice);
		// 	})
		// 	var untaxed = parseFloat($("#untaxedvalue").text());
		// 	var taxes = parseFloat($("#taxesvalue").text());
		// 	// console.log(untaxed+taxes)
		// 	var finaltotal = untaxed + taxes;
		// 	$("#finalTotalValue").text(finaltotal)
		// })

		// $(".tax").on("change", function () {
		// 	var primalTax = 0;
		// 	$(".tax").each(function (i, obj) {

		// 		var tax = $(this);

		// 		primalTax += parseFloat($(tax).val());

		// 		$("#taxesvalue").text(primalTax)
		// 	})
		// 	var untaxed = parseFloat($("#untaxedvalue").text());
		// 	var taxes = parseFloat($("#taxesvalue").text());
		// 	var finaltotal = untaxed + taxes;
		// 	$("#finalTotalValue").text(finaltotal)
		// })
	})
	$(".posted").on("click", function () {
		$(".draft .dr").removeClass("arrow");
		$(".draft .pos").addClass("arrow");
		$(".posted").hide()
		$(".drafted").hide();
		$(".draftMenu").show();
	})
	$(".resetdraft").on("click", function () {
		$(".draft .pos").removeClass("arrow");
		$(".draft .dr").addClass("arrow");
		$(".drafted").hide()
		$(".draftMenu").hide()
		$(".posted").show()
	})

	$(".mobile-menu-content .main-nav-link").on("click", function () {
		$(".mobile-menu-content .main-nav-link").next(".sub-nav-link-wrapper").slideUp();
		$(this).next(".sub-nav-link-wrapper").slideToggle();
		$(this).children("span:last-of-type").toggleClass("rotate180")
	});



	var d = new Date();
	var n = d.toLocaleDateString();
	$("#jDate").val(n)



	$("#myTable").DataTable({
		dom: "Bfrtip",
		buttons: [{
				extend: "pdf",
				footer: true,
				exportOptions: {
					columns: "th:not(:last-child,.headOfAction)"
				},
				text: 'Print all',
				exportOptions: {
					modifier: {
						selected: null
					},
					columns: "th:not(:last-child,.headOfAction)"
				}
			},
			{
				extend: 'print',
				text: 'Print selected'
			},
			{
				extend: "csv",
				footer: false,
				exportOptions: {
					columns: "th:not(:last-child,.headOfAction)"
				}
			},
			{
				extend: "excel",
				footer: false,
				exportOptions: {
					columns: "th:not(:last-child,.headOfAction)"
				}
			},
			{
				extend: "print",
				footer: false,
				exportOptions: {
					columns: "th:not(:last-child,.headOfAction)"
				}
			},

		],
		// order: [
		// 	[3, 'desc'],
		// 	[0, 'asc']
		// ],
		select: true
	});
// select2
	$(".searchSelect").select2({});
	$("#searchSelectMulti").select2({});
	$('#searchSelectMulti').on('select2:opening select2:closing', function( event ) {
		var $searchfield = $(this).parent().find('.select2-search__field');
		$searchfield.prop('disabled', true);
	});
	

	// $(".debitTool").on("click", function () {
	// 	if($(this).parents(".flex").next().css("display")=="none"){
	// 		$(".chartOfAccounts .item-action").hide();
	// 		$(this).next().show()
	// 	}
	// 	else{
	// 		$(this).next().hide()
	// 	}


		
	// })

$(".debitTool").on("click",function(){
	$(this).next(".item-action").toggle()
})
	// post buttons dropdown menu
	$(".post-dropdown").on("click",function(){
		
		$(this).siblings(".post-dropdown-menu").slideToggle()
		
	})
});





// start the transactions page function




// view item stock function

// function viewItemStock(){
// 	var viewItemStockRow= $(".viewItemStockRow");

// for(var i= 0 ; i< viewItemStockRow.length; i++ ){
// 	var singleViewRow= viewItemStockRow[i];
// 	var beforSingleViewRow= viewItemStockRow[i-1];
// 	var beforBalanceQuantity= $(beforSingleViewRow).find(".balanceQuantity").text();
// 	var beforBbalancePrice= $(beforSingleViewRow).find(".balancePrice").text();
// 	var beforBalanceValue= parseFloat(beforBalanceQuantity)*parseFloat(beforBbalancePrice);
// 	var beforAddQuantity= $(beforSingleViewRow).find(".addQuantity").text();
// 	var beforAddPrice= $(beforSingleViewRow).find(".addPrice").text();
// 	var beforAddValue= parseFloat(beforAddPrice)*parseFloat(beforAddQuantity);
// 	if(i>0){
// 		var stockValue= parseFloat(beforBalanceValue)+parseFloat(beforAddValue);
// 		var stockQuantity= parseFloat(beforBalanceQuantity)+parseFloat(beforAddQuantity);
// 		var stockPrice= stockValue / stockQuantity
// 		$(singleViewRow).find(".balancePrice").text(stockPrice);
// 		$(singleViewRow).find(".balanceQuantity").text(stockQuantity);
// 	}
	

// }
// }

// viewItemStock();

// itemTransaction

function newItemTransaction(){
	var viewItemStockRow= $(".viewItemStockRow");
	for(var i=0;i<viewItemStockRow.length;i++){
		var singleViewRow= viewItemStockRow[i];
		var beforSingleViewRow= viewItemStockRow[i-1];
		var depitAddQuantity= $(singleViewRow).find(".depitAddQuantity").text();
		var depitAddPrice= $(singleViewRow).find(".depitAddPrice").text();
		var depitValue= parseFloat(depitAddQuantity)*parseFloat(depitAddPrice);
		var creditAddQuantity= $(singleViewRow).find(".creditAddQuantity").text();
		var beforBalanceQuantity= $(beforSingleViewRow).find(".balanceQuantity").text();
		var beforBbalancePrice= $(beforSingleViewRow).find(".balancePrice").text();
		var beforBalanceValue= parseFloat(beforBalanceQuantity)*parseFloat(beforBbalancePrice);
		var balanceQuantity= $(singleViewRow).find(".balanceQuantity");
		var balancePrice= $(singleViewRow).find(".balancePrice");
		var expenses= $(singleViewRow).find(".expenses");
		var balanceQuantityAfterExpenses= $(singleViewRow).find(".balanceQuantityAfterExpenses");
		var balancePriceAfterExpenses= $(singleViewRow).find(".balancePriceAfterExpenses");
		if(i>0){
			$(balanceQuantity).text(parseFloat(beforBalanceQuantity)+parseFloat(depitAddQuantity)-parseFloat(creditAddQuantity) );
			$(".endingBalanceItemQ").text($(viewItemStockRow[viewItemStockRow.length-2]).find(".balanceQuantity").text());
			$(".endingBalanceItemP").text(Math.abs($(viewItemStockRow[viewItemStockRow.length-2]).find(".balancePrice").text()));
			$(viewItemStockRow[viewItemStockRow.length-1]).find(".depitAddQuantity").text($(viewItemStockRow[viewItemStockRow.length-2]).find(".balanceQuantity").text())
			$(viewItemStockRow[viewItemStockRow.length-1]).find(".depitAddPrice").text(Math.abs($(viewItemStockRow[viewItemStockRow.length-2]).find(".balancePrice").text()))
			$(balanceQuantityAfterExpenses).text($(balanceQuantity).text())
			
			// console.log($(balancePrice).text())
			if((parseFloat(depitAddPrice))>0){
				$(balancePrice).text(Math.abs(((parseFloat(beforBalanceValue)+parseFloat(depitValue)) / parseFloat($(balanceQuantity).text()))));
				// console.log($(this).parents(".viewItemStockRow"[i-1]).find(".expenses").text())

			}
			else{
				$(balancePrice).text(Math.abs((parseFloat(beforBbalancePrice))));

			}
			$(balancePriceAfterExpenses).text(parseFloat($(balancePrice).text())+parseFloat($(expenses).text()))
			
				$(balancePrice).text($(balancePriceAfterExpenses).text())
				$(viewItemStockRow[1]).find(balancePrice).text(Math.abs(((parseFloat(beforBalanceValue)+parseFloat(depitValue)) / parseFloat($(balanceQuantity).text()))))
		}
		$(".finalQuantity").text($(".endingBalanceItemQ").text())
		$(".finalPrice").text($(".endingBalanceItemP").text())
		$(".finalTotal").text(parseFloat($(".finalPrice").text())*parseFloat($(".finalQuantity").text()))
	}
}
newItemTransaction()
// new lines check


$('.addMoreInputs').on('click', function () {
	var rowCloned = $('.bodySelection .accounts:first-child').clone();
	$('.bodySelection').append(rowCloned);
	$(rowCloned).find('.deleteAccountRow').removeClass('d-none');
	$(rowCloned).find('input').val('');


});





$(document).on('click', '.deleteAccountRow', function () {
	$(this).closest('.accounts').remove();
	summAllInputs('debitInput', 'totaldebit', 'totaldebitText');
	summAllInputs('creditInput', 'totalcredit', 'totalcreditText');
});
$(document).on('change', '.debitInput', function () {
	summAllInputs('debitInput', 'totaldebit', 'totaldebitText');
	if ($(this).val() !== '') {
		$(this).closest('.accounts').find('.creditInput').val('');
		summAllInputs('creditInput', 'totalcredit', 'totalcreditText');

	}
});
$(document).on('change', '.creditInput', function () {
	summAllInputs('creditInput', 'totalcredit', 'totalcreditText');
	if ($(this).val() !== '') {
		$(this).closest('.accounts').find('.debitInput').val('');
		summAllInputs('debitInput', 'totaldebit', 'totaldebitText');
	}
});

function summAllInputs(elem, txtPlace, txxtPlace) {
	var allInputs = $('.' + elem + '');
	//var currInputVal = $(elem).val();
	var sumAll = 0;
	var allInputsArr = [];
	for (var i = 0; i < allInputs.length; i++) {
		var comingNumber = parseInt($(allInputs[i]).val());
		if (isNaN(comingNumber)) {
			comingNumber = 0;
		}
		allInputsArr.push(comingNumber)
	}
	allInputsArr.map(function (number) {
		return sumAll += number;
	});
	$('#' + txtPlace + '').val(sumAll);
	$('.' + txxtPlace + '').html(sumAll);

}





$('.addMoreInputsTwo').on('click', function() {
	var rowCloned = $('.bodySelection .accounts:first-child').clone();
	$('.bodySelection').append(rowCloned);
	$(rowCloned).find('.deleteAccountRow').removeClass('d-none');
	$(rowCloned).find('input').val('');
	
  });
  $(document).on('click', '.deleteAccountRow' ,function() {
	$(this).closest('.accounts').remove();
	//sumTotal('price');
	sumTotalWithTax()
  });
  $(document).on('change', '.quantity' ,function() {
	var $this = $(this);
	inputPriceChange($this, 'unitPrice');
	//sumTotal('price');
	sumTotalWithTax()
	
  });
  $(document).on('change', '.unitPrice' ,function() {
	var $this = $(this);
	inputPriceChange($this, 'quantity');
	//sumTotal('price');
	sumTotalWithTax()
  });
  $(document).on('change', '.tax' ,function() {
	//console.log(sumTotal('tax'));
	sumTotalWithTax()
  });
  function getElemVal(elem) {
	var comingElemVal =  parseInt($(elem).val());
	return comingElemVal; 
  }
  function inputPriceChange($thisElem, otherElementName) {
	var currentElement = $($thisElem);
	var otherElement = currentElement.closest('.accounts').find('.' + otherElementName + '');
	var currentRowPricePlace = currentElement.closest('.accounts').find('.price');
	var currentElementVal = getElemVal(currentElement);
	var otherElementVal = getElemVal(otherElement);
	sumQuanityAndUnitPrice(currentRowPricePlace, currentElementVal, otherElementVal)
  }
  function sumQuanityAndUnitPrice(totalTxtPlace, comingQuVal, comingUnVal) {
	if(isNaN(comingQuVal)) {
	  return null;
	} else if(isNaN(comingUnVal)) {
	  return null;
	} else {
	  var totalBeforePrice = comingQuVal * comingUnVal;
	  $(totalTxtPlace).val(totalBeforePrice);
	}
  }
  function sumTotal(priceCollect) {
	var $finalTotalValue = $('.' + priceCollect + '');
	var sumAll = 0;
	var allValuesArr = [];
	for(var i = 0; i < $finalTotalValue.length; i++) {
	  var comingNumber = parseInt($($finalTotalValue[i]).val());
	  if(isNaN(comingNumber)) {
		comingNumber = 0;
	  }
	  allValuesArr.push(comingNumber)
	}
	allValuesArr.map(function(number) {
	  return sumAll += number;
	});
	return sumAll;
	//$('.finalTotalValue').html(sumAll);
  }
  function sumTotalWithTax() {
	var totalPrice = sumTotal('price');
	var totalTax = sumTotal('tax');
	var totalAfterTax  = totalPrice + totalTax;
	$('#taxesvalue').html(totalTax);
	$('.finalTotalValueUnTaxed').html(totalPrice);
	$('.finalTotalValue').html(totalAfterTax);
	$('#getUntaxedTotal').val(totalPrice)
	$('#getTaxes').val(totalTax)
	$('#getTotal').val(totalAfterTax);
	
  }



  // ################################################# afaf code #############################################// 

$('#item_location_id').change(function(){
	$locatiionid = $('#item_location_id option:selected').val();
	$.get({
		url:'/relatedItemLocation/'+$locatiionid,
		data:{id:$locatiionid},
		success:function(data){
			$('#itemTable').html(data.html);
		},
		error:function(msg){
			alert('failed' + msg);
		}
	})
});

$(document).on("change",".selectItem",function(){
		var item_id = $(this).find("option:selected").val();
		var thisSelect= $(this)
		$.get({
			url:'/getItemAjaxforItemLOcationTransfer/'+item_id,
			data:{id:item_id},
			success:function(data){
				$(thisSelect).parents("tr").find(".itemTransferQnty").val(data.quantity);
				$(thisSelect).parents("tr").find(".itemTransferQnty").attr('max',data.quantity);
				$(thisSelect).parents("tr").find(".itemTransferUnit").val(data.unit);
				$(thisSelect).parents("tr").find(".itemTransferDesc").val(data.desc);
				$(thisSelect).parents("tr").find(".itemTransferprice").val(data.price);
			
			},
			error:function(msg){
				alert('failed' + msg);
			}
		})
	
});
$.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
function fetch_data()  
      {  
           $.get({  
                url:"/getCustomerdata",  
                success:function(data){  
                     $('#live_data').html(data);  
                }  
		   }); 
		  
		   
      } 

fetch_data();


$(document).on('click', '#btn_add', function(){  
	var name = $('#customer_name').text();  
	var email = $('#customer_email').text();
	var phone = $('#customer_phone').text(); 
	var balance = $('#customer_balance').text(); 
	var address = $('#customer_address').text(); 
	var website = $('#customer_website').text(); 
	var country = $('#customer_country').text();   
 
	$.get({  
		 url:"/addcustomerAjax",  
		 data:{ _token: 'csrf_token()',name:name, email:email,phone:phone,balance:balance,address:address,website:website,country:country},  
		 success:function(data)  
		 {  
			   
			  fetch_data();  
		 },
		error:function(msg)
{
	alert(msg)
}	})  
});

function edit_data(id, text, coulmn_name)  
      {  
           $.get({  
                url:"/editcustomerWithAjax",   
				data:{id:id, text:text, coulmn_name:coulmn_name}, 
				dataType:text, 
                success:function(data){  
                    fetch_data();    
                }  
		   });
		  
	  }
	  

	$(document).on('blur', '.customer_row td', function(){  
		var id = $(this).parents('tr').data("id");
		var text = $(this).text(); 
		var coulmn_name = $(this).data('column');
		edit_data(id, text,coulmn_name );  
   });




$(document).on('click', '.btn_delete', function(){  
	var id=$(this).data("delete");  
	// if(confirm("Are you sure you want to delete this?"))  
	// {  
		 $.get({  
			  url:"/deletecustomerWithAjax/"+ id,  
			  success:function(data){  
			
				   fetch_data();  
			  }  
		 });  
	// }  
});

