class CreateUserTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :session_token, :string
    add_column :users, :password_digest, :string, unique: true
    add_index :users, :session_token, unique: true
  end
end
