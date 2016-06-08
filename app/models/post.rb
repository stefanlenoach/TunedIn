class Post < ActiveRecord::Base

  validates :user_id, :title, :body, presence: true

  belongs_to(
    :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id
  )
end
