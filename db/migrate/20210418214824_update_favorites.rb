class UpdateFavorites < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, [:character_id, :user_id], unique: true
  end
end
