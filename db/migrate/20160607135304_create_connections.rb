class CreateConnections < ActiveRecord::Migration
  def change
    create_table :connections do |t|
      
      t.integer :connector_id, null: false
      t.integer :connectee_id, null: false

      t.string :status, default: "pending"

      t.timestamps null: false
    end
  end
end
