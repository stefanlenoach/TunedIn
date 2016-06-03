
json.extract! @user, :id, :email, :first_name, :last_name, :current_position, :location
json.image_url asset_path(@user.image.url)
