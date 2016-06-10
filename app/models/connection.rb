class Connection < ActiveRecord::Base
  validates :connector_id, :connectee_id, presence: true
  validates :connector_id, uniqueness: { scope: :connectee_id }

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

  def status_info(id)
    if connectee_id == id
      return [status, "received"]
    elsif connector_id == id
      return [status,"requested"]
    else
      return "false"
    end
  end
end
