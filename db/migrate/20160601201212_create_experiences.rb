class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|

      t.integer :user_id, null: false
      t.string :company_name, null: false
      t.string :title, null: false
      t.string :location
      t.string :time_period
      t.string :description

      t.timestamps null: false
    end
  end
end
