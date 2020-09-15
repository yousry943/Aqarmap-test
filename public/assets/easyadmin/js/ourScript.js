$(document).ready(function() {

	$('input[type="checkbox"]').click(function(){
		if($(this).prop("checked") == true){
			$(".custom-check-box:after").css("opacity","1")
		}
		else if($(this).prop("checked") == false){
			$(".custom-check-box:after").css("opacity","0")
		}
	});

    $('.main-nav-link').on('click', function(e) {
		$('sub-nav-link-wrapper').show();
	});

	$('.user-img-wrap').on('click', function() {
		$('.user-setting-data').toggle();
		$('.filterMath,.actionMath,.ellipsisMenu,.msgs,.chooseMath,.sub-nav-link-wrapper').hide();
	});

	$('.notiBtn').on('click', function() {
		$('.notification').toggle();
		$('.filterMath,.actionMath,.ellipsisMenu,.msgs,.chooseMath,.user-setting-data,.sub-nav-link-wrapper').hide();
	});

	$('.msgBtn').on('click', function() {
		$('.msgs').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.notification,.user-setting-data,.sub-nav-link-wrapper').hide();
	});




	$('.filters').on('click', function() {
		$('.filterMath').toggle();
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.notification,.user-setting-data,.sub-nav-link-wrapper').hide();
	});

	$('.choose').on('click', function() {
		$('.chooseMath').toggle();
		$('.filterMath,.actionMath,.ellipsisMenu,.msgs,.notification,.user-setting-data,.sub-nav-link-wrapper').hide();
	});

	$('.action').on('click', function() {
		$('.actionMath').toggle();
		$('.filterMath,.chooseMath,.ellipsisMenu,.msgs,.notification,.user-setting-data,.sub-nav-link-wrapper').hide();
	});

	$('.hiddenAllItems').on('click', function() {
		$('.chooseMath,.actionMath,.ellipsisMenu,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper').hide();
	});

	$('.ellipsis .fas').on('click', function() {
		$('.ellipsisMenu').toggle();
		$('.filterMath,.chooseMath,.actionMath,.msgs,.notification,.user-setting-data,sub-nav-link-wrapper').hide();
	});

	 $('.ellipsisCheck-one input[type="checkbox"]',).click(function(){
		if($(this).prop("checked") == true){
			$(".ellipsisOne").hide();
		}
		else if($(this).prop("checked") == false){
			$(".ellipsisOne").show();
		}
	});

	$('.ellipsisCheck-two input[type="checkbox"]',).click(function(){
		if($(this).prop("checked") == true){
			$(".ellipsisTwo").hide();
		}
		else if($(this).prop("checked") == false){
			$(".ellipsisTwo").show();
		}
	});

	$('.ellipsisCheck-three input[type="checkbox"]',).click(function(){
		if($(this).prop("checked") == true){
			$(".ellipsisThree").hide();
		}
		else if($(this).prop("checked") == false){
			$(".ellipsisThree").show();
		}
	});

	$('.ellipsisCheck-four input[type="checkbox"]',).click(function(){
		if($(this).prop("checked") == true){
			$(".ellipsisFour").hide();
		}
		else if($(this).prop("checked") == false){
			$(".ellipsisFour").show();
		}
	});

	$('.ellipsisCheck-five input[type="checkbox"]',).click(function(){
		if($(this).prop("checked") == true){
			$(".ellipsisFive").hide();
		}
		else if($(this).prop("checked") == false){
			$(".ellipsisFive").show();
		}
	});

	$('.ellipsisCheck-six input[type="checkbox"]',).click(function(){
		if($(this).prop("checked") == true){
			$(".ellipsisSix").hide();
		}
		else if($(this).prop("checked") == false){
			$(".ellipsisSix").show();
		}
	});

	$('.ellipsisCheck-seven input[type="checkbox"]',).click(function(){
		if($(this).prop("checked") == true){
			$(".ellipsisSeven").hide();
		}
		else if($(this).prop("checked") == false){
			$(".ellipsisSeven").show();
		}
	});

	$('.ellipsisCheck-eight input[type="checkbox"]',).click(function(){
		if($(this).prop("checked") == true){
			$(".ellipsisEight").hide();
		}
		else if($(this).prop("checked") == false){
			$(".ellipsisEight").show();
		}
	});


	$('#toggle').click(function(event) {
		if (this.checked) {
		  $('.checkNum input[type="checkbox"]').prop('checked', true);
		  $(".action").show();
		} else {
		  $('.checkNum input[type="checkbox"]').prop('checked', false);
		  $(".action").hide();
		}
	  });


 	$('.checkNum input[type="checkbox"]').click(function (){
		if ($("input[type=checkbox]").is(":checked")) {
			$(".action").show();
		}
		else {
			$(".action").hide();
		}
	});

	$('.sorts .fas:first-of-type').on('click', function() {
		$(this).toggleClass('rotate180');
	});



	$('.mobile-menu-icon').on('click', function() {
		let mobileMenuDiv = $('.mobile-menu-container');
		if(mobileMenuDiv.css('display') == 'none') {
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

	$('.shadow-section').on('click', function() {
		$('.mobile-menu-icon').children('img').attr('src', 'assets/images/menu-icon.png');
		$('.mobile-menu-container').fadeOut();
		$('.mobile-menu-content').css('left', '100%');
	});
	$('.main-close').on('click',function(){
		$('.account-info').fadeOut(500);
		$('.saving').html(`<button type="button" class="save add">add</button>`)
		$('.add').on('click',function(){
			$('.account-info').fadeIn(500);
			$('.sup-account-info').fadeIn(500);
			$('.saving').html(`<button type="button" class="save">save</button>
			<button type="button" class="discard">discard</button>`)
			$('.form-container').slideDown(500)
			$('.main-collapse').html(`<i class="fas fa-minus"></i>`)
		})
	})

	$('.main-collapse').on('click',function(){
		if($('.form-container').css('display')==('block')){
			$('.form-container').slideUp(500);
			$('.sup-account-info').slideUp(500);
			$(this).html(`<i class="fas fa-plus"></i>`)
		}
		else{
			$('.form-container').slideDown(500);
			$('.sup-account-info').slideDown(500);
			$(this).html(`<i class="fas fa-minus"></i>`)
		}
	})

	$( function() {
		$( "#sortable" ).sortable();
		$( "#sortable" ).disableSelection();
	  } );
	$('.close').on('click',function(){
		$('.sup-account-info').fadeOut(500);
		})
	$('.collapse').on('click',function(){
			if($('.sup-form-container').css('display')==('block')){
				$('.sup-form-container').slideUp(500);
				$(this).html(`<i class="fas fa-plus"></i>`)
			}
			else{
				$('.sup-form-container').slideDown(500);
				$('.sup-account-info').slideDown(500);
				$(this).html(`<i class="fas fa-minus"></i>`)
			}
		})

		$('.add-line').on("click",function(){
			$(this).prev().append(`<tr class="accounts">
			<td>Account
				<select>
					<option>
						choose account
					</option>
					<option value="buildings">
						buildings
					</option>
					<option value="Cleints">
						Cleints
					</option>
					<option value="other-debtors">
						other debtors
					</option>
					<option value="current-assets">
						current assets
					</option>
					<option value="equity-capital">
						equity capital
					</option>
					<option value="shipping">
						shipping
					</option>
					<option value="other-expenses">
						other expenses
					</option>
					<option value="exp22">
						exp22
					</option>
					<option value="sales">
						sales
					</option>
					<option value="equity">
						equity
					</option>
				</select>
			</td>
			<td><input type="text" name="description"></td>
			<td><input type="number" name="debit" class="debit" placeholder="0.00"></td>
			<td><input type="number" name="credit" class="credit" placeholder="0.00">
				<button type="button" class="delete"><i class="fas fa-trash-alt"></i></button></td>
		</tr>`)
		$('.delete').on('click',function(){
			$(this).parents('tr').remove()
		})
		$( ".debit" ).change(function (){
			var sum=0;
			$('.debit').each(function(i, obj){


			 if($.isNumeric(this.value)) {
						sum += parseFloat(this.value);
					}

			 })

			 $('#bepit_total').text(sum);
			 });
			 $( ".credit" ).change(function (){
				var sum=0;
				$('.credit').each(function(i, obj){


				 if($.isNumeric(this.value)) {
							sum += parseFloat(this.value);
						}

				 })

				 $('#credit_total').text(sum);

				 });
		})
		$(".save").on("click",function(e){
			if(parseFloat($("#bepit_total").text())!=parseFloat($("#credit_total").text())){
				e.preventDefault()
				alert("depit not equal credit")
			}
		})

		$(".contacts").on("click",function(){
			$('#contacts').toggle();
			$('#purchase,#notes,#accounting').hide();
		})

		$(".purchase").on("click",function(){
			$('#purchase').toggle();
			$('#contacts,#notes,#accounting').hide();
		})

		$(".accounting").on("click",function(){
			$('#accounting').toggle();
			$('#contacts,#purchase,#notes').hide();
		})

		$(".notes").on("click",function(){
			$('#notes').toggle();
			$('#contacts,#purchase,#accounting').hide();
		})


		$("#myInput").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$("#myTable tbody tr").filter(function() {
			  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		  });




		$('.discard').on('click',function(){
			$('input').val(null);
			$('select').val(null);
			$('textarea').val(null);
			$(".total").text("")
		});

		$('.accept').on('click',function(){
			$(this).siblings('.refuse').hide();
			$(this).children('.preAccept').hide();
			$(this).children('.accepted').show();
		});

		$('.refuse').on('click',function(){
			$(this).siblings('.accept').hide();
			$(this).children('.preRefuse').hide();
			$(this).children('.refused').show();
		});

		 $("input[type='date'],input[type='time']").flatpickr({
			enableTime: true,
			dateFormat: "Y-m-d H:i",
		});

		$("tr").next().css({"color": "red", "border": "2px solid red"});
		$('.add-purchase').on("click", function() {

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

			$('.delete').on('click', function() {
				$(this).parents('tr').remove()
			})





			//the price before tax function
			$(".unitPrice").on("change",function(){

				$(".unitPrice").each(function(i,obj){
				var quantity = parseInt($(this).parents("td").prev().children(".quantity").val());
				 var unitPrice = parseInt($(this).val())
				 var price=$(".unitPrice").parents("td").next().children(".price")

				var primalPrice=0;

				$(this).parents("td").next().children(".price").val(quantity*unitPrice);

				$(price).each(function(i, obj) {
					var pricev=$(this);
				primalPrice += parseFloat(pricev.val());
				})
				$("#untaxedvalue").text(primalPrice);
				})
				var untaxed=parseFloat($("#untaxedvalue").text());
			var taxes=parseFloat($("#taxesvalue").text());
			var finaltotal=untaxed+taxes;
			$("#finalTotalValue").text(finaltotal)
			})





			$(".quantity").on("change",function(){

				$(".quantity").each(function(i,obj){
				var quantity = parseInt($(this).parents("td").next().children(".unitPrice").val());
				 var unitPrice = parseInt($(this).val())
				 var price=$(".quantity").parents("td").siblings().children(".price")

				var primalPrice=0;

				$(this).parents("td").siblings().children(".price").val(quantity*unitPrice);

				$(price).each(function(i, obj) {
					var pricev=$(this);
				primalPrice += parseFloat(pricev.val());
				})
				$("#untaxedvalue").text(primalPrice);
				})
				var untaxed=parseFloat($("#untaxedvalue").text());
			var taxes=parseFloat($("#taxesvalue").text());
			// console.log(untaxed+taxes)
			var finaltotal=untaxed+taxes;
			$("#finalTotalValue").text(finaltotal)
			})




			$(".tax").on("change",function(){
				var primalTax=0;
				$(".tax").each(function(i, obj){

					var tax = $(this);

						primalTax += parseFloat($(tax).val());

				$("#taxesvalue").text(primalTax)
			})
			var untaxed=parseFloat($("#untaxedvalue").text());
			var taxes=parseFloat($("#taxesvalue").text());
			var finaltotal=untaxed+taxes;
			$("#finalTotalValue").text(finaltotal)
			})
		})
	})
