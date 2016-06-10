class Experience < ActiveRecord::Base
  validates :user_id, :company_name, :title, presence: true

  belongs_to(
    :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id
  )
  
end
