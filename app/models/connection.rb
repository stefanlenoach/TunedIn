class Connection < ActiveRecord::Base
  validates :connector_id, :connectee_id, presence: true

  belongs_to(
    :connector,
    class_name: "User",
    primary_key: :id,
    foreign_key: :connector_id
  )

  belongs_to(
    :connectee,
    class_name: "User",
    primary_key: :id,
    foreign_key: :connectee_id
  )
end
