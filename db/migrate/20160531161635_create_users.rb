class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false

      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.string :current_position
      t.string :location

      t.timestamps null: false
    end
    add_index :users, :email, unique: true
  end
end
