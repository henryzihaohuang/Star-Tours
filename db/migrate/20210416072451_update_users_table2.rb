class UpdateUsersTable2 < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :auth0_user_id, :string
  end
end
