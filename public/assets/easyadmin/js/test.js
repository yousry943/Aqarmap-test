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
