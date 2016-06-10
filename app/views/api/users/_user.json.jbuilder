
json.extract! user, :id, :email, :first_name, :last_name, :current_position, :location
json.image_url asset_path(user.image.url)

if current_user
  json.connection_status current_user.connected_with?(user)
end
