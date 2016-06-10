class CreateEducations < ActiveRecord::Migration
  def change
    create_table :educations do |t|
      
      t.integer :user_id, null: false
      t.string :school, null: false
      t.string :degree
      t.string :field_of_study
      t.string :dates_attended
      t.string :grade
      t.string :activities
      t.string :description

      t.timestamps null: false
    end
  end
end
