class AddPasswordDigest < ActiveRecord::Migration
  def change
    remove_column :users, :password_digest
    remove_column :users, :twitter_uid
    add_column :users, :password_digest, :string
    add_column :users, :twitter_uid, :integer
  end
end
