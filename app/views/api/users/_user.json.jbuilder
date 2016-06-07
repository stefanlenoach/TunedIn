
json.extract! user, :id, :first_name, :last_name, :email, :location, :current_position, :image
json.connection_status current_user.connected_with?(user)
if current_user.connected_with?(user)
  
end
