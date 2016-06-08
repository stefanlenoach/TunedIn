class AddBigInt < ActiveRecord::Migration
  def change
    remove_column :users, :twitter_uid
    add_column :users, :twitter_uid, :string
  end
end
